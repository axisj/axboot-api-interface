import { Prog, ProgRoleMenuRes } from "../dto";
import { ApiRequestConfig, DataGridPageResponse } from "../types";

export interface GetSystemProgramListRequest {
  filter?: string;
  pageNumber?: number;
  pageSize?: number;
}

export interface PostSystemProgramListRoleRequest {
  roleId: string;
}

export interface PostSystemProgramSaveProgRoleListRequest {
  fnctAuthorInfoJson: string[];
  roleId: string;
  progId: string;
}

export interface PutSystemProgramSaveRequest extends Prog {}

export interface GetSystemProgramListResponse {
  page: DataGridPageResponse;
  ds: Prog[];
}

export interface PostSystemProgramListRoleResponse {
  page: DataGridPageResponse;
  ds: ProgRoleMenuRes[];
}

export abstract class SystemProgramInterface {
  /* 프로그램 목록(/ao/api/system/program) */
  abstract getSystemProgramList(
    params: GetSystemProgramListRequest,
    config?: ApiRequestConfig,
  ): Promise<GetSystemProgramListResponse>;

  /* (/ao/api/system/program/v1/listProgRoleMenu) */
  abstract postSystemProgramListRole(
    params: PostSystemProgramListRoleRequest,
    config?: ApiRequestConfig,
  ): Promise<PostSystemProgramListRoleResponse>;

  /* (/ao/api/system/program/v1/saveProgRoleList) */
  abstract postSystemProgramSaveProgRoleList(
    params: PostSystemProgramSaveProgRoleListRequest[],
    config?: ApiRequestConfig,
  ): Promise<void>;

  /* 프로그램 저장(/ao/api/system/program) */
  abstract putSystemProgramSave(params: PutSystemProgramSaveRequest, config?: ApiRequestConfig): Promise<void>;
}

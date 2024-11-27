import { Role } from "../dto";
import { DataGridPageResponse } from "../types";

export interface GetSystemRoleListRequest {
  filter?: string;
  useYn?: string;
}

export interface PutSystemRoleSaveRequest extends Role {}

export interface GetSystemRoleListResponse {
  ds: Role[];
}

export abstract class SystemRoleInterface {
  /* 롤 목록(/api/system/roles) */
  abstract getSystemRoleList(params: GetSystemRoleListRequest): Promise<GetSystemRoleListResponse>;

  /* 롤 저장(/api/system/roles) */
  abstract putSystemRoleSave(params: PutSystemRoleSaveRequest[]): Promise<void>;
}

import {
  GetSystemProgramListRequest,
  GetSystemProgramListResponse,
  PostSystemProgramListRoleRequest,
  PostSystemProgramListRoleResponse,
  PostSystemProgramSaveProgRoleListRequest,
  PutSystemProgramSaveRequest,
  SystemProgramInterface,
} from "../interface";
import { APIRepository, ApiRequestConfig } from "../types";
import { apiWrapper } from "../../apiWrapper";

export class SystemProgramRepositoryMock extends APIRepository implements SystemProgramInterface {
  async getSystemProgramList(params: GetSystemProgramListRequest): Promise<GetSystemProgramListResponse> {
    const { data } = await apiWrapper<GetSystemProgramListResponse>("get", "/api/system/program", params);
    return data;
  }

  async putSystemProgramSave(params: PutSystemProgramSaveRequest): Promise<void> {
    await apiWrapper("put", "/api/system/program", params);
    return;
  }

  async postSystemProgramListRole(
    params: PostSystemProgramListRoleRequest,
    config?: ApiRequestConfig,
  ): Promise<PostSystemProgramListRoleResponse> {
    return {
      ds: [],
      page: {
        pageSize: 100,
        pageNumber: 0,
        endPageNo: 0,
        totalCount: 12,
        pageCount: 1,
      },
    };
  }

  async postSystemProgramSaveProgRoleList(
    params: PostSystemProgramSaveProgRoleListRequest[],
    config?: ApiRequestConfig,
  ): Promise<void> {
    return;
  }
}

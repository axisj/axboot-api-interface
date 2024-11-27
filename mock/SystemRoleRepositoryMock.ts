import {
  GetSystemRoleListRequest,
  GetSystemRoleListResponse,
  PutSystemRoleSaveRequest,
  SystemRoleInterface,
} from "../interface";

export class SystemRoleRepositoryMock implements SystemRoleInterface {
  async getSystemRoleList(params: GetSystemRoleListRequest): Promise<GetSystemRoleListResponse> {
    // const { data } = await apiWrapper<GetSystemRoleListResponse>("get", `/api/system/roles`, params);
    return {
      ds: [
        {
          roleId: "ROLE_USER",
          roleNm: "사용자",
          useYn: "Y",
        },
        {
          roleId: "ROLE_ADMIN",
          roleNm: "시스템 관리자",
          useYn: "Y",
        },
      ],
    };
  }

  async putSystemRoleSave(params: PutSystemRoleSaveRequest[]): Promise<void> {
    // await apiWrapper("put", "/api/system/roles", params);
    return;
  }
}

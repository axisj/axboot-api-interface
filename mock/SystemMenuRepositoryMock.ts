import {
  GetSystemMenuRemoveRequest,
  PutSystemMenuSaveGroupRequest,
  PutSystemMenuSaveRequest,
  SystemMenuInterface,
} from "../interface";

export class SystemMenuRepositoryMock implements SystemMenuInterface {
  async getSystemMenuRemove(params: GetSystemMenuRemoveRequest): Promise<void> {
    // await apiWrapper("get", `/api/system/menu/remove/${params.menuGrpCd}`);
  }

  async putSystemMenuSave(params: PutSystemMenuSaveRequest): Promise<void> {
    // await apiWrapper("put", "/api/system/menu", params);
  }

  async putSystemMenuSaveGroup(params: PutSystemMenuSaveGroupRequest[]): Promise<void> {
    // await apiWrapper("put", "/api/system/menu/group", params);
  }
}

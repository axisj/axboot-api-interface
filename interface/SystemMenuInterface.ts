import { MenuRequest, MenuGrp } from "../dto";
import { DataGridPageResponse } from "../types";

export interface GetSystemMenuRemoveRequest {
  menuGrpCd: string;
}

export interface PutSystemMenuSaveRequest extends MenuRequest {}

export interface PutSystemMenuSaveGroupRequest extends MenuGrp {}


export abstract class SystemMenuInterface {
  /* 메뉴 그룹 삭제(/api/system/menu/remove/{menuGrpCd}) */
  abstract getSystemMenuRemove(params: GetSystemMenuRemoveRequest): Promise<void>;

  /* 메뉴 목록 저장(/api/system/menu) */
  abstract putSystemMenuSave(params: PutSystemMenuSaveRequest): Promise<void>;

  /* 메뉴 그룹 저장(/api/system/menu/group) */
  abstract putSystemMenuSaveGroup(params: PutSystemMenuSaveGroupRequest[]): Promise<void>;
}

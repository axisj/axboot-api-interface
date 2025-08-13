import { DefaultDto } from "../types";
import { FnTitleInfo, ProgRoleMenu } from "./index";

export interface ProgRoleMenuRes extends DefaultDto {
  menuList?: ProgRoleMenu[]; //메뉴 목록
  progNm?: string; //프로그램명
  fnTitleInfo?: FnTitleInfo[]; //기능
  progId?: string; //프로그램ID
  userRole?: string; //역할 ID
  fnAuthInfo?: string[]; //기능 권한정보 JSON
}

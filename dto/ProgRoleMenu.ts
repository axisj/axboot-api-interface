import { DefaultDto } from "../types";

export interface ProgRoleMenu extends DefaultDto {
  menuUrlValue?: string; //메뉴 url
  sortValue?: number; //정렬
  menuGroupId?: string; //메뉴 그룹 코드
  multiLang?: Record<string, any>; //multiLang
  iconKncd?: string; //아이콘 형태
  progNm?: string; //프로그램 명
  children?: ProgRoleMenu[]; //하위 메뉴 정보
  upprMenuId?: number; //부모 ID
  progId?: string; //프로그램 코드
  menuUuid?: string; //메뉴 uuid
  menuId?: number; //ID
  menuLvl?: number; //메뉴 레벨
}

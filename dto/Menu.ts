import { DefaultDto } from "../types";

export interface Menu extends DefaultDto {
  menuUrlValue?: string; //메뉴 url
  menuGroupId?: string; //메뉴 그룹 코드
  multiLang?: Record<string, any>; //multiLang
  iconKncd?: string; //아이콘 형태
  progNm?: string; //프로그램 명
  upprMenuId?: number; //부모 ID
  progId?: string; //프로그램 코드
  upddeDtm?: string; //수정 일시
  menuId?: number; //ID
  children?: Menu[]; //메뉴 목록
  sortValue?: number; //정렬
  updatedAt?: string; //수정 일시
  updatedBy?: string; //수정자
  menuUuid?: string; //메뉴 uuid
  updatedByNm?: string; //수정자 명
  menuLvl?: number; //메뉴 레벨
}

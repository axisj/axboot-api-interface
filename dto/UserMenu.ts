import { DefaultDto } from "../types";

export interface UserMenu extends DefaultDto {
  menuUrlValue?: string; //메뉴 url
  updatedAt?: string; //수정 일시
  updatedBy?: string; //수정자
  menuGroupId?: string; //메뉴 그룹 코드
  creatDtm?: string; //등록 일시
  menuUuid?: string; //메뉴 uuid
  upddeDtm?: string; //수정 일시
  updatedByNm?: string; //수정자 명
  menuLvl?: number; //메뉴 레벨
  menuName?: Record<string, any>[]; //menuName
}

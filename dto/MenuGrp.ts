import { DefaultDto } from "../types";

export interface MenuGrp extends DefaultDto {
  updatedAt?: string; //수정 일시
  updatedBy?: string; //수정자
  useYn?: string; //사용 여부
  multiLang?: Record<string, any>; //multiLang
  iconKncd?: string; //아이콘 형태
  sortValue?: number; //메뉴 그룹 정렬
  menuGroupId?: string; //메뉴 그룹 ID
  updatedByNm?: string; //수정자 명
}

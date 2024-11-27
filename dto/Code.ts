import { DefaultDto } from "../types";

export interface Code extends DefaultDto {
  dtlCdNm?: string; //코드 명
  atrb4Value?: string; //내용4
  useYn?: string; //사용 Y/N
  multiLang?: Record<string, any>; //코드 명 다국어
  upprGroupCd?: string; //부모 그룹 코드
  atrb3Value?: string; //내용3
  groupCd?: string; //그룹 코드
  sortValue?: number; //정렬
  updatedAt?: string; //수정 일시
  updatedBy?: string; //수정자
  atrb1Value?: string; //내용1
  groupCdNm?: string; //그룹 코드 명
  updatedByNm?: string; //수정자 명
  rmCtnts?: string; //비고
  dtlCd?: string; //코드
  cdLvl?: number; //코드 레벨
  upprDtlCd?: string; //부모 코드
  atrb2Value?: string; //내용2
  upprGroupCdYn?: string; //부모 Y/N
}

import { DefaultDto } from "../types";

export interface CodeGroup extends DefaultDto {
  updatedAt?: string; //수정 일시
  updatedBy?: string; //수정자
  groupCdNm?: string; //그룹 코드 명
  useYn?: string; //사용 Y/N
  updatedByNm?: string; //수정자 명
  groupCd?: string; //그룹 코드
}

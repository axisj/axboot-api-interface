import { DefaultDto } from "../types";

export interface ApiAcces extends DefaultDto {
  updatedAt?: string; //수정 일시
  updatedBy?: string; //수정자
  usrNo?: number; //사용자 번호
  pathNm?: string; //경로 명
  updatedByNm?: string; //수정자 명
  apiLogId?: number; //API LOG ID
  mthNm?: string; //메소드 명
  paramtrJson?: string; //파라미터 정보
}

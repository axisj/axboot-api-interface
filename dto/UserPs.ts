import { DefaultDto } from "../types";

export interface UserPs extends DefaultDto {
  updatedAt?: string; //수정 일시
  updatedBy?: string; //수정자
  usrNewPw?: string; //사용자 신규 비밀번호
  updatedByNm?: string; //수정자 명
  usrOldPw?: string; //사용자 이전 비밀번호
}

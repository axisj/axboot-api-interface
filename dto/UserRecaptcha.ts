import { DefaultDto } from "../types";

export interface UserRecaptcha extends DefaultDto {
  updatedAt?: string; //수정 일시
  updatedBy?: string; //수정자
  updatedByNm?: string; //수정자 명
  recaptcha?: string; //recaptcha
  usrPw?: string; //사용자 비밀번호
  usrLoginId?: string; //사용자 로그인 ID
}

import { DefaultDto } from "../types";

export interface UserLogin extends DefaultDto {
  updatedAt?: string; //수정 일시
  updatedBy?: string; //수정자
  updatedByNm?: string; //수정자 명
  usrLoginId?: string; //사용자 ID
  usrPw?: string; //사용자 비밀번호
  otpNum?: string; //OTP 번호
}

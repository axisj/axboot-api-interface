import { DefaultDto } from "../types";
import { UserStat } from "./index";

export interface UserStatus extends DefaultDto {
  mailYn?: string; //OTP 메일 발송
  updatedAt?: string; //수정 일시
  updatedBy?: string; //수정자
  updatedByNm?: string; //수정자 명
  usrSttusKncd: UserStat; //사용자 상태
  usrLoginId: string; //사용자 로그인 ID
}

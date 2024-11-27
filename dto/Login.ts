import { DefaultDto } from "../types";

export interface Login extends DefaultDto {
  updatedAt?: string; //수정 일시
  updatedBy?: string; //수정자
  usrNo?: number; //사용자 번호
  updatedByNm?: string; //수정자 명
  loginLogId?: number; //LOGIN LOG ID
  ipAddr?: string; //IP 주소
  loginDtm?: string; //로그인 일시
  commEnvrnNm?: string; //사용자 접속환경
}

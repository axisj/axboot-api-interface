import { DefaultDto } from "../types";
import { UserStat } from "./index";

export interface User extends DefaultDto {
  pwInitYn?: string; //비밀번호 초기화 Y/N
  loginFailrCnt?: number; //로그인 실패 횟수
  otpKeyValue?: string; //OTP 인증 키
  useLangKncd?: string; //언어
  usrNo?: number; //사용자 번호
  usrEmailAddr?: string; //이메일
  usrNm?: string; //사용자 이름
  usrLoginId?: string; //사용자 로그인 ID
  roleList?: string[]; //사용자 롤
  updatedAt?: string; //수정 일시
  updatedBy?: string; //수정자
  lockYn?: string; //계정잠김 Y/N
  updatedByNm?: string; //수정자 명
  rmCtnts?: string; //비고
  usrPw?: string; //사용자 비밀번호
  usrHpNo?: string; //휴대전화 번호
  pwUpdtDtm?: string; //비밀번호 업데이트 일시
  deltYn?: string; //삭제 Y/N
  usrSttusKncd?: UserStat; //사용자 상태
  loginTknCtnts?: string; //로그인 토큰
  recentLoginDtm?: string; //마지막 로그인 일시
}

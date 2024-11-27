import { DefaultDto } from "../types";
import { UserStat } from "./index";

export interface UserRes extends DefaultDto {
  useLangKncd?: string; //언어
  usrEmailAddr?: string; //이메일
  programList?: string[]; //프로그램 목록
  usrNm?: string; //사용자 이름
  roleList?: string[]; //사용자 롤
  updatedAt?: string; //수정 일시
  updatedBy?: string; //수정자
  lockYn?: string; //계정잠김 Y/N
  updatedByNm?: string; //수정자 명
  rmCtnts?: string; //비고
  usrHpNo?: string; //휴대전화 번호
  usrLoginId?: string; //사용자 아이디
  pwUpdtDtm?: string; //비밀번호 업데이트 일시
  deltYn?: string; //삭제 Y/N
  loginTknCtnts?: string; //로그인 토큰
  usrSttusKncd?: UserStat; //사용자 상태
  recentLoginDtm?: string; //마지막 로그인 일시
}

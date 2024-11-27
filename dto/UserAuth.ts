import { DefaultDto } from "../types";

export interface UserAuth extends DefaultDto {
  updatedAt?: string; //수정 일시
  updatedBy?: string; //수정자
  usrAuth?: string; //사용자 권한
  updatedByNm?: string; //수정자 명
  usrLoginIds?: string[]; //사용자 아이디 목록
}

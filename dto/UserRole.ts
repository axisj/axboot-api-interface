import { DefaultDto } from "../types";

export interface UserRole extends DefaultDto {
  updatedAt?: string; //수정 일시
  updatedBy?: string; //수정자
  usrNo?: number; //
  roleId?: string; //
  updatedByNm?: string; //수정자 명
}

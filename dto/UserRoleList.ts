import { DefaultDto } from "../types";

export interface UserRoleList extends DefaultDto {
  updatedAt?: string; //수정 일시
  updatedBy?: string; //수정자
  usrRole?: string; //사용자 롤
  updatedByNm?: string; //수정자 명
  usrLoginIds?: string[]; //사용자 ID 목록
}

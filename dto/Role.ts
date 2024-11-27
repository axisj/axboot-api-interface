import { DefaultDto } from "../types";

export interface Role extends DefaultDto {
  updatedAt?: string; //수정 일시
  updatedBy?: string; //수정자
  useYn?: string; //사용 여부
  updatedByNm?: string; //수정자 명
  roleId?: string; //역할 ID
  roleNm?: string; //역할 명
}

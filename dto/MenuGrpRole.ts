import { DefaultDto } from "../types";

export interface MenuGrpRole extends DefaultDto {
  updatedAt?: string; //수정 일시
  updatedBy?: string; //수정자
  menuGroupId?: string; //메뉴 그룹 코드
  roleId?: string; //사용자 권한
  updatedByNm?: string; //수정자 명
}

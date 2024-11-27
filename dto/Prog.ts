import { DefaultDto } from "../types";
import { FnTitleInfo } from "./index";

export interface Prog extends DefaultDto {
  updatedAt?: string; //수정 일시
  updatedBy?: string; //수정자
  progNm?: string; //프로그램 명
  fnctNmInfoJson?: FnTitleInfo[]; //기능
  progId?: string; //프로그램 코드
  userGroup?: Record<string, any>; //사용자 그룹
  updatedByNm?: string; //수정자 명
  rmCtnts?: string; //비고
}

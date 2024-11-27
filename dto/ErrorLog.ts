import { DefaultDto } from "../types";

export interface ErrorLog extends DefaultDto {
  errTraceCtnts?: string; //STACK TRACE
  sdlcNm?: string; //PHASE
  errOccrDtm?: string; //에러일시
  usrInfoJson?: string; //사용자 정보
  errParamtrJson?: string; //파라미터 정보
  pathNm?: string; //ERROR PATH
  errLogId?: number; //ID
  updatedAt?: string; //수정 일시
  updatedBy?: string; //수정자
  errHderJson?: string; //헤더 정보
  ntcnYn?: string; //알람여부
  updatedByNm?: string; //수정자 명
  logNm?: string; //Logger Name
  serverNm?: string; //서버명
  hostNm?: string; //호스트 명
  sysNm?: string; //SYSTEM
  errMsgCtnts?: string; //메시지
}

import { DefaultDto } from "../types";

export interface FileUpload extends DefaultDto {
  flSn?: number; //순번
  widthValue?: number; //가로
  flMgValue?: number; //파일 크키
  flStreNm?: string; //저장 명
  prevewUrlCtnts?: string; //미리보기 URL
  dwldUrlCtnts?: string; //다운로드 URL
  flNm?: string; //파일 명
  updatedAt?: string; //수정 일시
  updatedBy?: string; //수정자
  dwldCnt?: number; //다운로드 횟수
  vrticlValue?: number; //길이
  updatedByNm?: string; //수정자 명
  flUploadId?: string; //파일 키
  thumbUrlCtnts?: string; //썸네일 URL
  flStrePathNm?: string; //저장 경로
}

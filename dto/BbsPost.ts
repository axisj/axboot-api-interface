import { DefaultDto } from "../types";

export interface BbsPost extends DefaultDto {
  bbscttBgnDt?: string; //게시글 시작 일자
  noticeYn?: string; //공지 여부
  bbsCd?: string; //게시판 코드
  popupYn?: string; //팝업 여부
  flUploadId?: string; //파일업로드 ID
  popupBgnDt?: string; //팝업 시작 일자
  bbscttSjNm?: string; //게시글 제목 명
  updatedAt?: string; //수정 일시
  updatedBy?: string; //수정자
  inqireCnt?: number; //조회 건수
  updatedByNm?: string; //수정자 명
  bbscttEndDt?: string; //게시글 종료 일자
  bbscttCtnts?: string; //게시글 내용
  flRgstYn?: string; //파일 등록 여부
  popupEndDt?: string; //팝업 종료 일자
  bbscttClfCd?: string; //게시글 분류 코드
  bbscttId?: number; //게시글 ID
}

import { DefaultDto } from "../types";

export interface Label extends DefaultDto {
  sortValue?: number; //정렬 값
  updatedAt?: string; //수정 일시
  updatedBy?: string; //수정자
  sysLblId?: number; //시스템 라벨 ID
  updatedByNm?: string; //수정자 명
  sysLblDescCtnts?: string; //시스템 라벨 설명 내용
  sysLblNm?: string; //시스템 라벨 명
  colorKncd?: string; //색상 코드
}

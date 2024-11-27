import { DefaultDto } from "../types";

export interface ExcelPreview extends DefaultDto {
  body?: Record<string, any>[]; //본문
  header?: Record<string, any>; //헤더
}

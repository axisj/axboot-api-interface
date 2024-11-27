import { ExcelPreview } from "../dto";
import { DataGridPageResponse } from "../types";

export interface PostExcelPreviewRequest {
  file: File;
}

export interface PostExcelPreviewResponse {
  rs: ExcelPreview;
}

export abstract class ExcelInterface {
  /* 엑셀변환 미리보기(/api/excel/preview) */
  abstract postExcelPreview(params: PostExcelPreviewRequest): Promise<PostExcelPreviewResponse>;
}

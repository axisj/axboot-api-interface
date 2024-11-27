import { ExcelInterface, PostExcelPreviewRequest, PostExcelPreviewResponse } from "../interface";

export class ExcelRepositoryMock implements ExcelInterface {
  async postExcelPreview(params: PostExcelPreviewRequest): Promise<PostExcelPreviewResponse> {
    // const { data } = await apiWrapper<PostExcelPreviewResponse>("post", "/api/excel/preview", params);

    return {
      rs: {
        body: [],
        header: {},
      },
    };
  }
}

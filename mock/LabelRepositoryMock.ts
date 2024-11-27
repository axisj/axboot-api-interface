import {
  GetLabelListRequest,
  GetLabelListResponse,
  LabelInterface,
  PutLabelRemoveRequest,
  PutLabelSaveRequest,
  PutLabelSaveSortRequest,
} from "../interface";

export class LabelRepositoryMock implements LabelInterface {
  async getLabelList(params: GetLabelListRequest): Promise<GetLabelListResponse> {
    // const { data } = await apiWrapper<GetLabelListResponse>("get", "/api/label");

    return {
      rs: undefined,
      ds: [],
    };
  }

  async putLabelRemove(params: PutLabelRemoveRequest[]): Promise<void> {
    // await apiWrapper("put", "/api/label/remove", params);
    return;
  }

  async putLabelSave(params: PutLabelSaveRequest): Promise<void> {
    // await apiWrapper("put", "/api/label", params);
    return;
  }

  async putLabelSaveSort(params: PutLabelSaveSortRequest[]): Promise<void> {
    // await apiWrapper("put", "/api/label/sort", params);
    return;
  }
}

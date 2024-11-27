import { Label } from "../dto";
import { DataGridPageResponse } from "../types";

export interface PutLabelRemoveRequest extends Label {}

export interface GetLabelListRequest {
  filter?: string;
  pageNumber?: number;
  pageSize?: number;
}

export interface PutLabelSaveRequest extends Label {}

export interface PutLabelSaveSortRequest extends Label {}

export interface GetLabelListResponse {
  rs: undefined;
  ds: Label[];
}

export abstract class LabelInterface {
  /* 삭제(/api/label/remove) */
  abstract putLabelRemove(params: PutLabelRemoveRequest[]): Promise<void>;

  /* 라벨 목록(/api/label) */
  abstract getLabelList(params: GetLabelListRequest): Promise<GetLabelListResponse>;

  /* 라벨 저장(/api/label) */
  abstract putLabelSave(params: PutLabelSaveRequest): Promise<void>;

  /* 정렬(/api/label/sort) */
  abstract putLabelSaveSort(params: PutLabelSaveSortRequest[]): Promise<void>;
}

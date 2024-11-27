import { Code, CodeGroup } from "../dto";
import { DataGridPageResponse } from "../types";

export interface PutSystemCodeSortRequest extends Code {}

export interface PutSystemCodeSaveRequest extends Code {}

export interface PutSystemCodeGroupSaveRequest extends CodeGroup {}


export abstract class SystemCodeInterface {
  /* 코드정렬 저장(/api/system/code/sort) */
  abstract putSystemCodeSort(params: PutSystemCodeSortRequest[]): Promise<void>;

  /* 그룹코드 저장(/api/system/code) */
  abstract putSystemCodeSave(params: PutSystemCodeSaveRequest[]): Promise<void>;

  /* 그룹코드 저장(/api/system/code/group) */
  abstract putSystemCodeGroupSave(params: PutSystemCodeGroupSaveRequest): Promise<void>;
}

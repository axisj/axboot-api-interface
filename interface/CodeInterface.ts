import { Code, CodeGroup } from "../dto";
import { DataGridPageResponse } from "../types";

export interface GetCodeListRequest {
  groupCd?: string;
  upprDtlCd?: string;
  filter?: string;
  useYn?: string;
  dtlCd?: string;
  cdLvl?: string;
  upprGroupCd?: string;
}

export interface GetCodeGroupListRequest {
  filter?: string;
  useYn?: string;
}

export interface GetCodeListResponse {
  page: DataGridPageResponse;
  ds: Code[];
}

export interface GetCodeGroupListResponse {
  ds: CodeGroup[];
}

export abstract class CodeInterface {
  /* 코드 목록(/api/code) */
  abstract getCodeList(params: GetCodeListRequest): Promise<GetCodeListResponse>;

  /* 그룹코드 조회(/api/code/group) */
  abstract getCodeGroupList(params: GetCodeGroupListRequest): Promise<GetCodeGroupListResponse>;
}

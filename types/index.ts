import { AxiosRequestConfig, AxiosResponse } from "axios";

export interface ApiRequestConfig extends AxiosRequestConfig {
  tryTime?: number;
  ignoreError?: boolean;
}
export type ApiMethod = "get" | "delete" | "head" | "post" | "put" | "patch" | "request";

export type ApiWrapper = <P>(
  method: ApiMethod,
  route: string,
  body?: any,
  config?: ApiRequestConfig,
) => Promise<ApiResponse<P>>;

export interface ApiResponse<P> extends AxiosResponse {
  data: P;
}

export interface ApiPageResponse {
  pageCount: number;
  totalCount: number;
  pageNumber: number;
  pageSize: number;
}

export class APIRepository {
  _apiWrapper: ApiWrapper;

  constructor(apiWrapper: ApiWrapper) {
    this._apiWrapper = apiWrapper;
  }
}

export interface DataGridPageResponse extends ApiPageResponse {
  endPageNo?: number;
}

export type DtoItemStatus = "C" | "U" | "D";

export interface DefaultDto {
  __status__?: DtoItemStatus;
  rowId?: string;
  crtrId?: string;
  crtrNm?: string;
  creatDtm?: string;
  upusrId?: string;
  upusrNm?: string;
  upddeDtm?: string;
}

export interface Option {
  label?: string;
  value?: string;
}

export interface ProgramFn {
  fn01?: string; // 조회
  fn02?: string; // 저장
  fn03?: string; // 삭제
  fn04?: string; // 엑셀
  fn05?: string;
  fn06?: string;
  fn07?: string;
  fn08?: string;
  fn09?: string;
  fn10?: string;
  fn11?: string;
  fn12?: string;
  fn13?: string;
  fn14?: string;
  fn15?: string;
  fn16?: string;
}

export interface CascaderDto {
  value?: string;
  label?: string;
  children?: CascaderDto[];
}

import { Login, ApiAcces, ErrorLog } from "../dto";
import { DataGridPageResponse } from "../types";

export interface GetSystemLogLoginLogListRequest {
  startDt?: string;
  endDt?: string;
  filter?: string;
  userCd?: string;
  pageNumber?: number;
  pageSize?: number;
}

export interface GetSystemLogApiLogListRequest {
  parameter?: string;
  path?: string;
  filter?: string;
  userCd?: string;
  method?: string;
  pageNumber?: number;
  pageSize?: number;
}

export interface GetSystemLogErrorLogListRequest {
  startDt?: string;
  endDt?: string;
  filter?: string;
  pageNumber?: number;
  pageSize?: number;
}

export interface GetSystemLogLoginLogListResponse {
  page: DataGridPageResponse;
  ds: Login[];
}

export interface GetSystemLogApiLogListResponse {
  page: DataGridPageResponse;
  ds: ApiAcces[];
}

export interface GetSystemLogErrorLogListResponse {
  page: DataGridPageResponse;
  ds: ErrorLog[];
}

export abstract class SystemLogInterface {
  /* 로그인로그 목록(/api/system/log/login) */
  abstract getSystemLogLoginLogList(params: GetSystemLogLoginLogListRequest): Promise<GetSystemLogLoginLogListResponse>;

  /* api 접근 로그 목록(/api/system/log/apiLog) */
  abstract getSystemLogApiLogList(params: GetSystemLogApiLogListRequest): Promise<GetSystemLogApiLogListResponse>;

  /* 오류 로그 목록(/api/system/log/error) */
  abstract getSystemLogErrorLogList(params: GetSystemLogErrorLogListRequest): Promise<GetSystemLogErrorLogListResponse>;
}

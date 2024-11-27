import {
  GetSystemLogApiLogListRequest,
  GetSystemLogApiLogListResponse,
  GetSystemLogErrorLogListRequest,
  GetSystemLogErrorLogListResponse,
  GetSystemLogLoginLogListRequest,
  GetSystemLogLoginLogListResponse,
  SystemLogInterface,
} from "../interface";

export class SystemLogRepositoryMock implements SystemLogInterface {
  async getSystemLogApiLogList(params: GetSystemLogApiLogListRequest): Promise<GetSystemLogApiLogListResponse> {
    // const { data } = await apiWrapper<GetSystemLogApiLogListResponse>("get", "/api/system/log/apiLog", params);

    return {
      ds: [],
      page: {
        pageSize: 100,
        pageNumber: 0,
        endPageNo: 0,
        totalCount: 3,
        pageCount: 1,
      },
    };
  }

  async getSystemLogErrorLogList(params: GetSystemLogErrorLogListRequest): Promise<GetSystemLogErrorLogListResponse> {
    // const { data } = await apiWrapper<GetSystemLogErrorLogListResponse>("get", "/api/system/log/error", params);

    return {
      ds: [],
      page: {
        pageSize: 100,
        pageNumber: 0,
        endPageNo: 0,
        totalCount: 3,
        pageCount: 1,
      },
    };
  }

  async getSystemLogLoginLogList(params: GetSystemLogLoginLogListRequest): Promise<GetSystemLogLoginLogListResponse> {
    // const { data } = await apiWrapper<GetSystemLogLoginLogListResponse>("get", "/api/system/log/login", params);

    return {
      ds: [],
      page: {
        pageSize: 100,
        pageNumber: 0,
        endPageNo: 0,
        totalCount: 3,
        pageCount: 1,
      },
    };
  }
}

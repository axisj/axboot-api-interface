import {
  BbsPostInterface,
  GetBbsPostBbsPostListRequest,
  GetBbsPostBbsPostListResponse,
  PutBbsPostRemoveRequest,
  PutBbsPostSaveRequest,
  PutBbsPostSaveResponse,
} from "../interface";

export class BbsPostRepositoryMock implements BbsPostInterface {
  async getBbsPostBbsPostList(params: GetBbsPostBbsPostListRequest): Promise<GetBbsPostBbsPostListResponse> {
    // const { data } = await apiWrapper<GetBbsPostBbsPostListResponse>("get", ``);

    return {
      ds: [],
      page: {
        pageCount: 1,
        totalCount: 1,
        pageNumber: 1,
        pageSize: 100,
      },
    };
  }

  async putBbsPostRemove(params: PutBbsPostRemoveRequest): Promise<void> {
    // await apiWrapper("put", "", params);

    return;
  }

  async putBbsPostSave(params: PutBbsPostSaveRequest): Promise<PutBbsPostSaveResponse> {
    // const { data } = await apiWrapper<PutBbsPostSaveResponse>("put", "/api/product", params);

    return {
      rs: {
        bbscttId: 1,
      },
    };
  }
}

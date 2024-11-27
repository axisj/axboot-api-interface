import { BbsPost } from "../dto";
import { DataGridPageResponse } from "../types";

export interface PutBbsPostRemoveRequest extends BbsPost {}

export interface PutBbsPostSaveRequest extends BbsPost {}

export interface GetBbsPostBbsPostListRequest {
  startDt?: string;
  endDt?: string;
  filter?: string;
  pageNumber?: number;
  pageSize?: number;
}

export interface PutBbsPostSaveResponse {
  rs: BbsPost;
}

export interface GetBbsPostBbsPostListResponse {
  page: DataGridPageResponse;
  ds: BbsPost[];
}

export abstract class BbsPostInterface {
  /* 게시판 삭제(/api/bbs/remove) */
  abstract putBbsPostRemove(params: PutBbsPostRemoveRequest): Promise<void>;

  /* 게시판 저장(/api/bbs) */
  abstract putBbsPostSave(params: PutBbsPostSaveRequest): Promise<PutBbsPostSaveResponse>;

  /* 게시판 목록(/api/bbs) */
  abstract getBbsPostBbsPostList(params: GetBbsPostBbsPostListRequest): Promise<GetBbsPostBbsPostListResponse>;
}

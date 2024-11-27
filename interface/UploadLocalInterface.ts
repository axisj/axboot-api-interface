import { FileUpload } from "../dto";
import { DataGridPageResponse } from "../types";

export interface PostUploadLocalRemoveRequest {
  flStrePathNm: string;
}

export interface GetUploadLocalRemoveFileKeyRequest {
  flUploadId: string;
}

export interface PostUploadLocalUploadRequest {
  file: any;
}

export interface PostUploadLocalUploadResponse {
  rs: FileUpload;
  ds: undefined;
}

export abstract class UploadLocalInterface {
  /* 업로드 삭제(/api/upload/remove) */
  abstract postUploadLocalRemove(params: PostUploadLocalRemoveRequest): Promise<void>;

  /* FILE KEY 삭제(/api/upload/remove/{flUploadId}) */
  abstract getUploadLocalRemoveFileKey(params: GetUploadLocalRemoveFileKeyRequest): Promise<void>;

  /* 업로드(/api/upload) */
  abstract postUploadLocalUpload(params: PostUploadLocalUploadRequest): Promise<PostUploadLocalUploadResponse>;
}

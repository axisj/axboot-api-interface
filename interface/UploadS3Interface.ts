import { FileUpload } from "../dto";
import { DataGridPageResponse } from "../types";

export interface PostUploadS3RemoveRequest {
  savePath: string;
}

export interface GetUploadS3RemoveFileKeyRequest {
  fileKey: string;
}

export interface PostUploadS3UploadRequest {
  file: any;
}

export interface PostUploadS3UploadResponse {
  rs: FileUpload;
  ds: undefined;
}

export abstract class UploadS3Interface {
  /* S3 업로드 삭제(/api/upload/s3/remove) */
  abstract postUploadS3Remove(params: PostUploadS3RemoveRequest): Promise<void>;

  /* S3 FILE KEY 삭제(/api/upload/s3/remove/{fileKey}) */
  abstract getUploadS3RemoveFileKey(params: GetUploadS3RemoveFileKeyRequest): Promise<void>;

  /* S3 업로드(/api/upload/s3) */
  abstract postUploadS3Upload(params: PostUploadS3UploadRequest): Promise<PostUploadS3UploadResponse>;
}

import {
  GetUploadS3RemoveFileKeyRequest,
  PostUploadS3RemoveRequest,
  PostUploadS3UploadRequest,
  PostUploadS3UploadResponse,
  UploadS3Interface,
} from "../interface";

export class UploadS3RepositoryMock implements UploadS3Interface {
  async getUploadS3RemoveFileKey(params: GetUploadS3RemoveFileKeyRequest): Promise<void> {
    // await apiWrapper("get", `/api/upload/s3/remove/${params.fileKey}`, params);
    return;
  }

  async postUploadS3Remove(params: PostUploadS3RemoveRequest): Promise<void> {
    // await apiWrapper("post", "/api/upload/s3/remove", params);
    return;
  }

  async postUploadS3Upload(params: PostUploadS3UploadRequest): Promise<PostUploadS3UploadResponse> {
    // const { data } = await apiWrapper<PostUploadS3UploadResponse>("post", "/api/upload/s3", params);
    return {
      rs: {
        flSn: 1,
        widthValue: 100,
        flMgValue: 100,
        flStreNm: "test",
        prevewUrlCtnts: "test",
        dwldUrlCtnts: "test",
        flNm: "test",
        updatedAt: "2021-01-01",
        updatedBy: "test",
        dwldCnt: 1,
        vrticlValue: 100,
        updatedByNm: "test",
        flUploadId: "test",
        thumbUrlCtnts: "test",
        flStrePathNm: "test",
      },
      ds: undefined,
    };
  }
}

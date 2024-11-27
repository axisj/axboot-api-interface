import {
  GetUploadLocalRemoveFileKeyRequest,
  PostUploadLocalRemoveRequest,
  PostUploadLocalUploadRequest,
  PostUploadLocalUploadResponse,
  UploadLocalInterface,
} from "../interface";

export class UploadLocalRepositoryMock implements UploadLocalInterface {
  async getUploadLocalRemoveFileKey(params: GetUploadLocalRemoveFileKeyRequest): Promise<void> {
    // await apiWrapper("get", `/api/upload/remove/${params.flUploadId}`, {});
    return;
  }

  async postUploadLocalRemove(params: PostUploadLocalRemoveRequest): Promise<void> {
    // await apiWrapper("post", "/api/upload/remove/}", params);
    return;
  }

  async postUploadLocalUpload(params: PostUploadLocalUploadRequest): Promise<PostUploadLocalUploadResponse> {
    // const { data } = await apiWrapper<PostUploadLocalUploadResponse>("post", "/api/upload", params);

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

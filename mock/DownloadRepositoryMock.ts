import { DownloadInterface, GetDownloadDownloadMultiRequest, GetDownloadDownloadRequest } from "../interface";

export class DownloadRepositoryMock implements DownloadInterface {
  async getDownloadDownload(params: GetDownloadDownloadRequest): Promise<void> {
    // await apiWrapper("get", `/api/download`);

    return;
  }

  async getDownloadDownloadMulti(params: GetDownloadDownloadMultiRequest): Promise<void> {
    // await apiWrapper("get", `/api/download/${params.fileKey}`);

    return;
  }
}

import {  } from "../dto";
import { DataGridPageResponse } from "../types";

export interface GetDownloadDownloadRequest {
  flNm: string;
  flStrePathNm: string;
}

export interface GetDownloadDownloadMultiRequest {
  fileKey: string;
}


export abstract class DownloadInterface {
  /* 로컬 다운로드(/api/download) */
  abstract getDownloadDownload(params: GetDownloadDownloadRequest): Promise<void>;

  /* 로컬 FILE KEY DOWNLOAD(/api/download/{fileKey}) */
  abstract getDownloadDownloadMulti(params: GetDownloadDownloadMultiRequest): Promise<void>;
}

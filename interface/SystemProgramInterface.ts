import { Prog } from "../dto";
import { DataGridPageResponse } from "../types";

export interface GetSystemProgramListRequest {
  filter?: string;
  pageNumber?: number;
  pageSize?: number;
}

export interface PutSystemProgramSaveRequest extends Prog {}

export interface GetSystemProgramListResponse {
  page: DataGridPageResponse;
  ds: Prog[];
}

export abstract class SystemProgramInterface {
  /* 프로그램 목록(/api/system/program) */
  abstract getSystemProgramList(params: GetSystemProgramListRequest): Promise<GetSystemProgramListResponse>;

  /* 프로그램 저장(/api/system/program) */
  abstract putSystemProgramSave(params: PutSystemProgramSaveRequest): Promise<void>;
}

import {
  PutSystemCodeGroupSaveRequest,
  PutSystemCodeSaveRequest,
  PutSystemCodeSortRequest,
  SystemCodeInterface,
} from "../interface";
import { APIRepository } from "../types";

export class SystemCodeRepositoryMock extends APIRepository implements SystemCodeInterface {
  async putSystemCodeGroupSave(params: PutSystemCodeGroupSaveRequest): Promise<void> {
    // await apiWrapper("put", "/api/system/code/group", params);
    return;
  }

  async putSystemCodeSave(params: PutSystemCodeSaveRequest[]): Promise<void> {
    // await apiWrapper("put", "/api/system/code", params);
    return;
  }

  async putSystemCodeSort(params: PutSystemCodeSortRequest[]): Promise<void> {
    // await apiWrapper("put", "/api/system/code/sort", params);
    return;
  }
}

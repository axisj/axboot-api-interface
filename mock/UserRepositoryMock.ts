import {
  GetUserProgramRequest,
  GetUserProgramResponse,
  GetUserUserCdRequest,
  GetUserUserCdResponse,
  PutUserChangePwRequest,
  PutUserSaveWaitRequest,
  UserInterface,
} from "../interface";
import { APIRepository } from "../types";

export class UserRepositoryMock extends APIRepository implements UserInterface {
  async getUserProgram(params: GetUserProgramRequest): Promise<GetUserProgramResponse> {
    // const { data } = await apiWrapper<GetUserProgramResponse>("get", `/api/user/program`, params);
    return {
      rs: undefined,
      ds: ["fn01", "fn02", "fn03", "fn04", "fn05"],
    };
  }

  async getUserUserCd(params: GetUserUserCdRequest): Promise<GetUserUserCdResponse> {
    // const { data } = await apiWrapper<GetUserUserCdResponse>("get", `/api/user/usrLoginId`, params);
    return {
      rs: {},
      ds: undefined,
    };
  }

  async putUserChangePw(params: PutUserChangePwRequest): Promise<void> {
    // await apiWrapper("put", "/api/user/password", params);
    return;
  }

  async putUserSaveWait(params: PutUserSaveWaitRequest): Promise<void> {
    // await apiWrapper("put", "/api/user", params);
    return;
  }
}

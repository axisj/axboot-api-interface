import { User, UserPs } from "../dto";
import { DataGridPageResponse } from "../types";

export interface PutUserSaveWaitRequest extends User {}

export interface PutUserChangePwRequest extends UserPs {}

export interface GetUserProgramRequest {
  progId: string;
}

export interface GetUserUserCdRequest {
  value: string;
}

export interface GetUserProgramResponse {
  rs: undefined;
  ds: string[];
}

export interface GetUserUserCdResponse {
  rs: Record<string, any>;
  ds: undefined;
}

export abstract class UserInterface {
  /* 사용자 신청(/api/user) */
  abstract putUserSaveWait(params: PutUserSaveWaitRequest): Promise<void>;

  /* 비밀번호 변경 요청(/api/user/password) */
  abstract putUserChangePw(params: PutUserChangePwRequest): Promise<void>;

  /* 사용자의 프로그램 역할(/api/user/program) */
  abstract getUserProgram(params: GetUserProgramRequest): Promise<GetUserProgramResponse>;

  /* 사용자 신청 여부(/api/user/usrLoginId) */
  abstract getUserUserCd(params: GetUserUserCdRequest): Promise<GetUserUserCdResponse>;
}

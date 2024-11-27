import { UserLogin, UserRes } from "../dto";
import { DataGridPageResponse } from "../types";

export interface PostLoginRefreshRequest extends UserLogin {}

export interface PostLoginOtpRequest extends UserLogin {}

export interface PostLoginRefreshResponse {
  rs: UserRes;
}

export interface PostLoginOtpResponse {
  rs: UserRes;
}

export abstract class LoginInterface {
  /* (/api/login/refresh) */
  abstract postLoginRefresh(params: PostLoginRefreshRequest): Promise<PostLoginRefreshResponse>;

  /* (/api/login/otp) */
  abstract postLoginOtp(params: PostLoginOtpRequest): Promise<PostLoginOtpResponse>;
}

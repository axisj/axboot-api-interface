import { UserRes, User, UserRoleList, UserAuth, UserStatus } from "../dto";
import { DataGridPageResponse } from "../types";

export interface GetSystemUserListRequest {
  userAuths?: string;
  userStat?: string;
  filter?: string;
  userRoles?: string;
  pageNumber?: number;
  pageSize?: number;
  lockYn?: string;
}

export interface PutSystemUserDeleteRequest extends User {}

export interface PutSystemUserSaveNormalRequest extends User {}

export interface PutSystemUserUpdateDelYnRequest extends User {}

export interface PutSystemUserResetOtpRequest {}

export interface PutSystemUserSaveRoleRequest extends UserRoleList {}

export interface PutSystemUserRemoveRoleRequest extends UserRoleList {}

export interface PutSystemUserSaveAuthRequest extends UserAuth {}

export interface PutSystemUserRemoveAuthRequest extends UserAuth {}

export interface PutSystemUserPasswordMailRequest {}

export interface PostSystemUserUserLoginRequest {}

export interface GetSystemUserRolesRequest {
  userRoles?: string;
  pageNumber?: number;
  pageSize?: number;
}

export interface PutSystemUserUpdateUserStatusAndSendOTPRequest extends UserStatus {}

export interface GetSystemUserListResponse {
  page: DataGridPageResponse;
  ds: UserRes[];
}

export interface GetSystemUserRolesResponse {
  page: DataGridPageResponse;
  ds: User[];
}

export abstract class SystemUserInterface {
  /* 사용자 목록(/api/system/user) */
  abstract getSystemUserList(params: GetSystemUserListRequest): Promise<GetSystemUserListResponse>;

  /* 사용자 정보를 삭제(/api/system/user/remove) */
  abstract putSystemUserDelete(params: PutSystemUserDeleteRequest): Promise<void>;

  /* 사용자 저장(/api/system/user) */
  abstract putSystemUserSaveNormal(params: PutSystemUserSaveNormalRequest): Promise<void>;

  /* 사용자의 삭제 여부 저장(/api/system/user/deltYn) */
  abstract putSystemUserUpdateDelYn(params: PutSystemUserUpdateDelYnRequest[]): Promise<void>;

  /* 사용자의 OTP 재설정(/api/system/user/otp) */
  abstract putSystemUserResetOtp(params: PutSystemUserResetOtpRequest): Promise<void>;

  /* 사용자의 ROLE을 추가 저장(/api/system/user/role) */
  abstract putSystemUserSaveRole(params: PutSystemUserSaveRoleRequest): Promise<void>;

  /* 사용자의 ROLE을 제외 저장(/api/system/user/role/remove) */
  abstract putSystemUserRemoveRole(params: PutSystemUserRemoveRoleRequest): Promise<void>;

  /* 사용자의 AUTH을 추가 저장(/api/system/user/auth) */
  abstract putSystemUserSaveAuth(params: PutSystemUserSaveAuthRequest): Promise<void>;

  /* 사용자의 AUTH을 제외 저장(/api/system/user/auth/remove) */
  abstract putSystemUserRemoveAuth(params: PutSystemUserRemoveAuthRequest): Promise<void>;

  /* 사용자 비밀번호 변경 후 메일 발송(/api/system/user/password) */
  abstract putSystemUserPasswordMail(params: PutSystemUserPasswordMailRequest): Promise<void>;

  /* 사용자 선택 후 로그인(/api/system/user/login) */
  abstract postSystemUserUserLogin(params: PostSystemUserUserLoginRequest): Promise<void>;

  /* 롤 사용자 조회(/api/system/user/roles) */
  abstract getSystemUserRoles(params: GetSystemUserRolesRequest): Promise<GetSystemUserRolesResponse>;

  /* (/api/system/user/userstat) */
  abstract putSystemUserUpdateUserStatusAndSendOTP(params: PutSystemUserUpdateUserStatusAndSendOTPRequest[]): Promise<void>;
}

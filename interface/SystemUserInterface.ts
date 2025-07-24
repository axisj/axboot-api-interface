import { User, UserAuth, UserRes, UserRoleList, UserStatus } from "../dto";
import { ApiRequestConfig, DataGridPageResponse } from "../types";

export interface GetSystemUserAuditListRequest {
  startDt?: string;
  endDt?: string;
  filter?: string;
}

export interface GetSystemUserListRequest {
  userAuths?: string;
  userStat?: string;
  filter?: string;
  userRoles?: string;
  pageNumber?: number;
  pageSize?: number;
  lockYn?: string;
}

export interface GetSystemUserLoginUsersRequest {
  userAuths?: string;
  userStat?: string;
  filter?: string;
  userRoles?: string;
  pageNumber?: number;
  pageSize?: number;
  lockYn?: string;
}

export interface GetSystemUserRolesRequest {
  userRoles?: string;
  pageNumber?: number;
  pageSize?: number;
}

export interface PostSystemUserListRequest {
  usrNo?: number;
}

export interface PostSystemUserSaveExcelRequest extends User {}

export interface PostSystemUserUserLoginRequest {}

export interface PutSystemUserDeleteRequest extends User {}

export interface PutSystemUserLogoutRequest {}

export interface PutSystemUserPasswordMailRequest {}

export interface PutSystemUserRemoveAuthRequest extends UserAuth {}

export interface PutSystemUserRemoveRoleRequest extends UserRoleList {}

export interface PutSystemUserResetOtpRequest {}

export interface PutSystemUserSaveAuthRequest extends UserAuth {}

export interface PutSystemUserSaveNormalRequest extends User {}

export interface PutSystemUserSaveRoleRequest extends UserRoleList {}

export interface PutSystemUserUpdateDelYnRequest extends User {}

export interface PutSystemUserUpdateUserStatusAndSendOTPRequest extends UserStatus {}

export interface GetSystemUserListResponse {
  page: DataGridPageResponse;
  ds: UserRes[];
}

export interface GetSystemUserLoginUsersResponse {
  page: DataGridPageResponse;
  ds: UserRes[];
}

export interface GetSystemUserRolesResponse {
  page: DataGridPageResponse;
  ds: User[];
}

export interface PostSystemUserListResponse {
  rs: UserRes;
}

export interface PostSystemUserSaveExcelResponse {
  ds: User[];
}

export abstract class SystemUserInterface {
  /* 사용자 목록(/ao/api/system/user) */
  abstract getSystemUserList(
    params: GetSystemUserListRequest,
    config?: ApiRequestConfig,
  ): Promise<GetSystemUserListResponse>;

  /* 로그인 사용자 목록(/ao/api/system/user/loginUsers) */
  abstract getSystemUserLoginUsers(
    params: GetSystemUserLoginUsersRequest,
    config?: ApiRequestConfig,
  ): Promise<GetSystemUserLoginUsersResponse>;

  /* 롤 사용자 조회(/ao/api/system/user/roles) */
  abstract getSystemUserRoles(
    params: GetSystemUserRolesRequest,
    config?: ApiRequestConfig,
  ): Promise<GetSystemUserRolesResponse>;

  /* 사용자 상세조회(/ao/api/system/user/v1/detail) */
  abstract postSystemUserList(
    params: PostSystemUserListRequest,
    config?: ApiRequestConfig,
  ): Promise<PostSystemUserListResponse>;

  /* 사용자 저장(엑셀)(/ao/api/system/user/v1/saveExcel) */
  abstract postSystemUserSaveExcel(
    params: PostSystemUserSaveExcelRequest[],
    config?: ApiRequestConfig,
  ): Promise<PostSystemUserSaveExcelResponse>;

  /* 사용자 선택 후 로그인(/ao/api/system/user/login) */
  abstract postSystemUserUserLogin(params: PostSystemUserUserLoginRequest, config?: ApiRequestConfig): Promise<void>;

  /* 사용자 정보를 삭제(/ao/api/system/user/remove) */
  abstract putSystemUserDelete(params: PutSystemUserDeleteRequest, config?: ApiRequestConfig): Promise<void>;

  /* 사용자 강제 로그아웃(/ao/api/system/user/logout) */
  abstract putSystemUserLogout(params: PutSystemUserLogoutRequest, config?: ApiRequestConfig): Promise<void>;

  /* 사용자 비밀번호 변경 후 메일 발송(/ao/api/system/user/password) */
  abstract putSystemUserPasswordMail(
    params: PutSystemUserPasswordMailRequest,
    config?: ApiRequestConfig,
  ): Promise<void>;

  /* 사용자의 AUTH을 제외 저장(/ao/api/system/user/auth/remove) */
  abstract putSystemUserRemoveAuth(params: PutSystemUserRemoveAuthRequest, config?: ApiRequestConfig): Promise<void>;

  /* 사용자의 ROLE을 제외 저장(/ao/api/system/user/role/remove) */
  abstract putSystemUserRemoveRole(params: PutSystemUserRemoveRoleRequest, config?: ApiRequestConfig): Promise<void>;

  /* 사용자의 OTP 재설정(/ao/api/system/user/otp) */
  abstract putSystemUserResetOtp(params: PutSystemUserResetOtpRequest, config?: ApiRequestConfig): Promise<void>;

  /* 사용자의 AUTH을 추가 저장(/ao/api/system/user/auth) */
  abstract putSystemUserSaveAuth(params: PutSystemUserSaveAuthRequest, config?: ApiRequestConfig): Promise<void>;

  /* 사용자 저장(/ao/api/system/user) */
  abstract putSystemUserSaveNormal(params: PutSystemUserSaveNormalRequest, config?: ApiRequestConfig): Promise<void>;

  /* 사용자의 ROLE을 추가 저장(/ao/api/system/user/role) */
  abstract putSystemUserSaveRole(params: PutSystemUserSaveRoleRequest, config?: ApiRequestConfig): Promise<void>;

  /* 사용자의 삭제 여부 저장(/ao/api/system/user/deltYn) */
  abstract putSystemUserUpdateDelYn(
    params: PutSystemUserUpdateDelYnRequest[],
    config?: ApiRequestConfig,
  ): Promise<void>;

  /* (/ao/api/system/user/userstat) */
  abstract putSystemUserUpdateUserStatusAndSendOTP(
    params: PutSystemUserUpdateUserStatusAndSendOTPRequest[],
    config?: ApiRequestConfig,
  ): Promise<void>;
}

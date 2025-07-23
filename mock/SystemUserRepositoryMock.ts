import { UserStat } from "../dto";
import {
  GetSystemUserListRequest,
  GetSystemUserListResponse,
  GetSystemUserRolesRequest,
  GetSystemUserRolesResponse,
  PostSystemUserUserLoginRequest,
  PutSystemUserDeleteRequest,
  PutSystemUserPasswordMailRequest,
  PutSystemUserRemoveAuthRequest,
  PutSystemUserRemoveRoleRequest,
  PutSystemUserResetOtpRequest,
  PutSystemUserSaveAuthRequest,
  PutSystemUserSaveNormalRequest,
  PutSystemUserSaveRoleRequest,
  PutSystemUserUpdateDelYnRequest,
  PutSystemUserUpdateUserStatusAndSendOTPRequest,
  SystemUserInterface,
} from "../interface";
import { APIRepository } from "../types";

export class SystemUserRepositoryMock extends APIRepository implements SystemUserInterface {
  async postSystemUserUserLogin(params: PostSystemUserUserLoginRequest): Promise<void> {
    // await apiWrapper("post", "/api/system/user/login", params);

    return;
  }

  async putSystemUserDelete(params: PutSystemUserDeleteRequest): Promise<void> {
    // await apiWrapper("put", "/api/system/user/remove", params);
    return;
  }

  async putSystemUserPasswordMail(params: PutSystemUserPasswordMailRequest): Promise<void> {
    // await apiWrapper("put", "/api/system/user/password", params);
    return;
  }

  async putSystemUserRemoveAuth(params: PutSystemUserRemoveAuthRequest): Promise<void> {
    // await apiWrapper("put", "/api/system/user/auth/remove", params);
    return;
  }

  async putSystemUserRemoveRole(params: PutSystemUserRemoveRoleRequest): Promise<void> {
    // await apiWrapper("put", "/api/system/user/role/remove", params);
    return;
  }

  async putSystemUserResetOtp(params: PutSystemUserResetOtpRequest): Promise<void> {
    // await apiWrapper("put", "/api/system/user/otp", params);
    return;
  }

  async putSystemUserSaveAuth(params: PutSystemUserSaveAuthRequest): Promise<void> {
    // await apiWrapper("put", "/api/system/user/auth", params);
    return;
  }

  async putSystemUserSaveNormal(params: PutSystemUserSaveNormalRequest): Promise<void> {
    // await apiWrapper("put", "/api/system/user", params);
    return;
  }

  async putSystemUserSaveRole(params: PutSystemUserSaveRoleRequest): Promise<void> {
    // await apiWrapper("put", "/api/system/user/role", params);
    return;
  }

  async putSystemUserUpdateDelYn(params: PutSystemUserUpdateDelYnRequest[]): Promise<void> {
    // await apiWrapper("put", "/api/system/user/deltYn", params);
    return;
  }

  async putSystemUserUpdateUserStatusAndSendOTP(
    params: PutSystemUserUpdateUserStatusAndSendOTPRequest[],
  ): Promise<void> {
    // await apiWrapper("put", "/api/system/user/userstat", params);
    return;
  }

  async getSystemUserList(params: GetSystemUserListRequest): Promise<GetSystemUserListResponse> {
    // const { data } = await apiWrapper<GetSystemUserListResponse>("get", "/api/system/user", params);
    return {
      ds: [
        {
          usrLoginId: "test01",
          usrNm: "테스터01",
          usrEmailAddr: "test01@test.com",
          usrHpNo: "010-1111-2222",
          loginTknCtnts: "nXxjv6qZ2",
          rmCtnts: "tester no.1\nupdate",
          recentLoginDtm: "2024-11-26 11:28:25",
          pwUpdtDtm: "2024-11-26 11:28:08",
          usrSttusKncd: "NORMAL" as UserStat,
          useLangKncd: "ko",
          lockYn: "N",
          deltYn: "N",
          roleList: ["ROLE_USER"],
        },
        {
          usrLoginId: "groovedk",
          usrNm: "root",
          usrEmailAddr: "root@axisj.com",
          usrHpNo: "010-9879-6546",
          loginTknCtnts: "rVb9bK81q",
          rmCtnts: "test \nname, email...",
          recentLoginDtm: "2024-11-27 12:28:14",
          pwUpdtDtm: "2024-11-25 15:03:31",
          usrSttusKncd: "NORMAL" as UserStat,
          useLangKncd: "en",
          lockYn: "N",
          deltYn: "N",
          roleList: ["ROLE_ADMIN", "ROLE_USER"],
        },
        {
          usrLoginId: "system",
          usrNm: "시스템관리자",
          usrEmailAddr: "jikook71@naver.com",
          usrHpNo: "010-1234-5677",
          loginTknCtnts: "aK8pRzK5w",
          rmCtnts: "",
          recentLoginDtm: "2024-11-27 13:49:07",
          pwUpdtDtm: "2024-11-19 16:38:06",
          usrSttusKncd: "NORMAL" as UserStat,
          useLangKncd: "ko",
          lockYn: "N",
          deltYn: "N",
          roleList: ["ROLE_ADMIN", "ROLE_USER"],
        },
      ],
      page: {
        pageSize: 100,
        pageNumber: 0,
        endPageNo: 0,
        totalCount: 3,
        pageCount: 1,
      },
    };
  }

  async getSystemUserRoles(params: GetSystemUserRolesRequest): Promise<GetSystemUserRolesResponse> {
    // const { data } = await apiWrapper<GetSystemUserRolesResponse>("get", "/api/system/user/roles", params);
    return {
      ds: [
        {
          usrLoginId: "system",
          usrNm: "시스템관리자",
          usrEmailAddr: "jikook71@naver.com",
          usrHpNo: "010-1234-5677",
          loginTknCtnts: "aK8pRzK5w",
          rmCtnts: "",
          recentLoginDtm: "2024-11-27 13:49:07",
          pwUpdtDtm: "2024-11-27 14:05:10",
          usrSttusKncd: "NORMAL" as UserStat,
          useLangKncd: "ko",
          lockYn: "N",
          deltYn: "N",
          roleList: [],
        },
        {
          usrLoginId: "test01",
          usrNm: "테스터01",
          usrEmailAddr: "test01@test.com",
          usrHpNo: "010-1111-2222",
          loginTknCtnts: "nXxjv6qZ2",
          rmCtnts: "tester no.1\nupdate",
          recentLoginDtm: "2024-11-26 11:28:25",
          pwUpdtDtm: "2024-11-26 11:28:08",
          usrSttusKncd: "NORMAL" as UserStat,
          useLangKncd: "ko",
          lockYn: "N",
          deltYn: "N",
          roleList: [],
        },
        {
          usrLoginId: "groovedk",
          usrNm: "root",
          usrEmailAddr: "root@axisj.com",
          usrHpNo: "010-9879-6546",
          loginTknCtnts: "0MEPYv2YG",
          rmCtnts: "test \nname, email...",
          recentLoginDtm: "2024-11-27 14:03:27",
          pwUpdtDtm: "2024-11-25 15:03:31",
          usrSttusKncd: "NORMAL" as UserStat,
          useLangKncd: "en",
          lockYn: "N",
          deltYn: "N",
          roleList: [],
        },
      ],
      page: {
        pageSize: 100,
        pageNumber: 0,
        endPageNo: 0,
        totalCount: 3,
        pageCount: 1,
      },
    };
  }
}

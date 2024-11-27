import { UserRes } from "../dto";
import {
  LoginInterface,
  PostLoginOtpRequest,
  PostLoginOtpResponse,
  PostLoginRefreshRequest,
  PostLoginRefreshResponse,
} from "../interface";

export const signInMockData: UserRes = {
  usrNm: "시스템사용자",
  usrLoginId: "system",
  useLangKncd: "en",
  roleList: ["ROLE_ADMIN", "ROLE_ASP", "ROLE_USER"],
  programList: [
    "EXAMPLE_DETAIL",
    "EXAMPLE_FORM",
    "EXAMPLE_LIST",
    "EXAMPLE_LIST_AND_DRAWER",
    "EXAMPLE_LIST_AND_MODAL",
    "EXAMPLE_LIST_WITH_FORM",
    "EXAMPLE_LIST_WITH_FORM_ROW",
    "EXAMPLE_LIST_WITH_FORM_LIST",
    "EXAMPLE_LIST_WITH_LIST",
    "EXAMPLE_THREE_LIST",
    "EXAMPLE_STATS",

    "DASHBOARD",
    "SYS_COMMON_CODE",
    "SYS_USER",
    "SYS_USER_GROUP",
    "SYS_PROGRAM",
    "SYS_MENU",
    "FIRST_PROG",
    "FIRST_PROG",
    /* ##INSERT_PROGRAM_TYPE_POSITION## */
  ],
  usrEmailAddr: "tom@axisj.com",
};
const pkg = {
  name: "AXBOOT",
  version: "",
};

const setAppData = (p: any) => {};
const setApiHeader = (p: any) => {};

export class LoginRepositoryMock implements LoginInterface {
  async postLoginOtp(params: PostLoginOtpRequest): Promise<PostLoginOtpResponse> {
    // const { data, headers } = await apiWrapper<PostLoginOtpResponse>("post", "/api/login/otp", params);
    const data: PostLoginOtpResponse = {
      rs: signInMockData,
    };
    const headers = {
      authorization: "login-token",
    };

    if (headers && headers.authorization) {
      setApiHeader(headers.authorization);
      // debugger;
      setAppData({
        name: pkg.name,
        version: pkg.version,
        authorization: headers.authorization,
        refreshToken: headers["refresh-token"] ?? "",
      });
    }

    return data;
  }

  async postLoginRefresh(params: PostLoginRefreshRequest): Promise<PostLoginRefreshResponse> {
    // const { data } = await apiWrapper<PostLoginRefreshResponse>("post", "/api/login/refresh", params);
    const data: PostLoginOtpResponse = {
      rs: signInMockData,
    };
    return data;
  }
}

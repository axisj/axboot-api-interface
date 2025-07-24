import {
  GetSystemProgramListRequest,
  GetSystemProgramListResponse,
  PostSystemProgramListRoleRequest,
  PostSystemProgramListRoleResponse,
  PostSystemProgramSaveProgRoleListRequest,
  PutSystemProgramSaveRequest,
  SystemProgramInterface,
} from "../interface";
import { APIRepository, ApiRequestConfig } from "../types";

export class SystemProgramRepositoryMock extends APIRepository implements SystemProgramInterface {
  async getSystemProgramList(params: GetSystemProgramListRequest): Promise<GetSystemProgramListResponse> {
    // const { data } = await apiWrapper<GetSystemProgramListResponse>("get", "/api/system/program", params);

    return {
      ds: [
        {
          progId: "EXAMPLE_FORM",
          progNm: "[샘플] EXAMPLE_FORM",
          userGroup: {
            ROLE_ADMIN: ["fn01", "fn02", "fn03", "fn04"],
            ROLE_USER: [],
          },
          fnctNmInfoJson: [
            {
              key: "fn01",
              label: "검색",
            },
            {
              key: "fn02",
              label: "저장",
            },
            {
              key: "fn03",
              label: "삭제",
            },
            {
              key: "fn04",
              label: "엑셀",
            },
          ],
        },
        {
          progId: "EXAMPLE_LIST_AND_MODAL_MF",
          progNm: "[샘플] 그리드(멀티필터)",
          userGroup: {
            ROLE_ADMIN: ["fn01", "fn02", "fn03", "fn04"],
            ROLE_USER: [],
          },
          fnctNmInfoJson: [
            {
              key: "fn01",
              label: "검색",
            },
            {
              key: "fn02",
              label: "저장",
            },
            {
              key: "fn03",
              label: "삭제",
            },
            {
              key: "fn04",
              label: "엑셀",
            },
          ],
        },
        {
          progId: "EXAMPLE_LIST_WITH_FORM",
          progNm: "[샘플] EXAMPLE_LIST_WITH_FORM",
          userGroup: {
            ROLE_ADMIN: ["fn01", "fn02", "fn03", "fn04"],
            ROLE_USER: [],
          },
          fnctNmInfoJson: [
            {
              key: "fn01",
              label: "검색",
            },
            {
              key: "fn02",
              label: "저장",
            },
            {
              key: "fn03",
              label: "삭제",
            },
            {
              key: "fn04",
              label: "엑셀",
            },
          ],
        },
        {
          progId: "EXAMPLE_LIST_WITH_FORM_LIST",
          progNm: "[샘플] EXAMPLE_LIST_WITH_FORM_LIST",
          userGroup: {
            ROLE_ADMIN: ["fn01", "fn02", "fn03", "fn04"],
            ROLE_USER: [],
          },
          fnctNmInfoJson: [
            {
              key: "fn01",
              label: "검색",
            },
            {
              key: "fn02",
              label: "저장",
            },
            {
              key: "fn03",
              label: "삭제",
            },
            {
              key: "fn04",
              label: "엑셀",
            },
          ],
        },
        {
          progId: "EXAMPLE_LIST_WITH_FORM_ROW",
          progNm: "[샘플] EXAMPLE_LIST_WITH_FORM_ROW",
          userGroup: {
            ROLE_ADMIN: ["fn01", "fn02", "fn03", "fn04"],
            ROLE_USER: [],
          },
          fnctNmInfoJson: [
            {
              key: "fn01",
              label: "검색",
            },
            {
              key: "fn02",
              label: "저장",
            },
            {
              key: "fn03",
              label: "삭제",
            },
            {
              key: "fn04",
              label: "엑셀",
            },
          ],
        },
        {
          progId: "EXAMPLE_STATS",
          progNm: "[샘플] 통계 & 차트",
          userGroup: {
            ROLE_ADMIN: ["fn01", "fn02", "fn03", "fn04"],
            ROLE_USER: [],
          },
          fnctNmInfoJson: [
            {
              key: "fn01",
              label: "검색",
            },
            {
              key: "fn02",
              label: "저장",
            },
            {
              key: "fn03",
              label: "삭제",
            },
            {
              key: "fn04",
              label: "엑셀",
            },
          ],
        },
        {
          progId: "EXAMPLE_THREE_LIST",
          progNm: "[샘플] EXAMPLE_THREE_LIST",
          userGroup: {
            ROLE_ADMIN: ["fn01", "fn02", "fn03", "fn04"],
            ROLE_USER: [],
          },
          fnctNmInfoJson: [
            {
              key: "fn01",
              label: "검색",
            },
            {
              key: "fn02",
              label: "저장",
            },
            {
              key: "fn03",
              label: "삭제",
            },
            {
              key: "fn04",
              label: "엑셀",
            },
          ],
        },
        {
          progId: "SYS_COMMON_CODE",
          progNm: "공통코드관리",
          userGroup: {
            ROLE_ADMIN: ["fn01", "fn02", "fn03", "fn04", "fn05"],
            ROLE_USER: [],
          },
          fnctNmInfoJson: [
            {
              key: "fn01",
              label: "검색",
            },
            {
              key: "fn02",
              label: "저장",
            },
            {
              key: "fn03",
              label: "삭제",
            },
            {
              key: "fn04",
              label: "엑셀",
            },
            {
              key: "fn05",
              label: "신규",
            },
          ],
        },
        {
          progId: "SYS_MENU",
          progNm: "시스템메뉴관리",
          userGroup: {
            ROLE_ADMIN: ["fn01", "fn02", "fn03", "fn04", "fn05"],
            ROLE_USER: [],
          },
          fnctNmInfoJson: [
            {
              key: "fn01",
              label: "검색",
            },
            {
              key: "fn02",
              label: "저장",
            },
            {
              key: "fn03",
              label: "삭제",
            },
            {
              key: "fn04",
              label: "엑셀",
            },
            {
              key: "fn05",
              label: "신규",
            },
          ],
        },
        {
          progId: "SYS_PROGRAM",
          progNm: "시스템프로그램관리",
          userGroup: {
            ROLE_ADMIN: ["fn01", "fn02", "fn03", "fn04", "fn05"],
            ROLE_USER: [],
          },
          fnctNmInfoJson: [
            {
              key: "fn01",
              label: "검색",
            },
            {
              key: "fn02",
              label: "저장",
            },
            {
              key: "fn03",
              label: "삭제",
            },
            {
              key: "fn04",
              label: "엑셀",
            },
            {
              key: "fn05",
              label: "신규",
            },
          ],
        },
        {
          progId: "SYS_USER",
          progNm: "시스템사용자정보관리",
          userGroup: {
            ROLE_ADMIN: ["fn01", "fn02", "fn03", "fn04", "fn05"],
            ROLE_USER: [],
          },
          fnctNmInfoJson: [
            {
              key: "fn01",
              label: "검색",
            },
            {
              key: "fn02",
              label: "저장",
            },
            {
              key: "fn03",
              label: "삭제",
            },
            {
              key: "fn04",
              label: "엑셀",
            },
            {
              key: "fn05",
              label: "신규",
            },
          ],
        },
        {
          progId: "SYS_USER_GROUP",
          progNm: "시스템사용자그룹관리",
          userGroup: {
            ROLE_ADMIN: ["fn01", "fn02", "fn03", "fn04", "fn05"],
            ROLE_USER: [],
          },
          fnctNmInfoJson: [
            {
              key: "fn01",
              label: "검색",
            },
            {
              key: "fn02",
              label: "저장",
            },
            {
              key: "fn03",
              label: "삭제",
            },
            {
              key: "fn04",
              label: "엑셀",
            },
            {
              key: "fn05",
              label: "신규",
            },
          ],
        },
      ],
      page: {
        pageSize: 100,
        pageNumber: 0,
        endPageNo: 0,
        totalCount: 12,
        pageCount: 1,
      },
    };
  }

  async putSystemProgramSave(params: PutSystemProgramSaveRequest): Promise<void> {
    // await apiWrapper("put", "/api/system/program", params);

    return;
  }

  async postSystemProgramListRole(
    params: PostSystemProgramListRoleRequest,
    config?: ApiRequestConfig,
  ): Promise<PostSystemProgramListRoleResponse> {
    return {
      ds: [],
      page: {
        pageSize: 100,
        pageNumber: 0,
        endPageNo: 0,
        totalCount: 12,
        pageCount: 1,
      },
    };
  }

  async postSystemProgramSaveProgRoleList(
    params: PostSystemProgramSaveProgRoleListRequest[],
    config?: ApiRequestConfig,
  ): Promise<void> {
    return;
  }
}

import { Menu } from "../dto";
import {
  GetMenuListMybatisRequest,
  GetMenuListMybatisResponse,
  GetMenuListResponse,
  MenuInterface,
} from "../interface";

interface MenuGroup extends Menu {
  userGroup?: string[];
}
export const menuMockData: MenuGroup[] = [
  {
    menuGroupId: "EXAMPLE",
    menuNmLang: {
      ko: "예제",
      en: "Examples",
    },
    iconKncd: "Example",
    children: [
      {
        menuNmLang: {
          en: "Forms",
          ko: "양식",
        },
        iconKncd: "Default",
        progId: "EXAMPLE_FORM",
        children: [],
      },
      {
        menuNmLang: {
          en: "List",
          ko: "목록",
        },
        iconKncd: "Default",
        progId: "EXAMPLE_LIST",
        children: [],
      },
      {
        menuNmLang: {
          en: "List & Drawer",
          ko: "목록과 서랍",
        },
        iconKncd: "Default",
        progId: "EXAMPLE_LIST_AND_DRAWER",
        children: [],
      },
      {
        menuNmLang: {
          en: "List & Modal",
          ko: "목록과 모달",
        },
        iconKncd: "Default",
        progId: "EXAMPLE_LIST_AND_MODAL",
        children: [],
      },
      {
        menuNmLang: {
          en: "List & Form",
          ko: "목록과 양식",
        },
        iconKncd: "Default",
        progId: "EXAMPLE_LIST_WITH_FORM",
        children: [],
      },
      {
        menuNmLang: {
          en: "List & Form & List",
          ko: "목록과 양식-목록",
        },
        iconKncd: "Default",
        progId: "EXAMPLE_LIST_WITH_FORM_LIST",
        children: [],
      },
      {
        menuNmLang: {
          en: "List & List",
          ko: "목록과 목록",
        },
        iconKncd: "Default",
        progId: "EXAMPLE_LIST_WITH_LIST",
        children: [],
      },
      {
        menuNmLang: {
          en: "Three List",
          ko: "3개 목록",
        },
        iconKncd: "Default",
        progId: "EXAMPLE_THREE_LIST",
        children: [],
      },
      {
        menuNmLang: {
          en: "Stats",
          ko: "통계",
        },
        iconKncd: "Default",
        progId: "EXAMPLE_STATS",
        children: [],
      },
    ],
    userGroup: ["ROLE_ADMIN", "ROLE_ASP", "ROLE_USER"],
  },
  {
    menuGroupId: "SYSTEM",
    iconKncd: "Setting",
    children: [
      {
        menuGroupId: "SYSTEM",
        iconKncd: "Default",
        menuLvl: 2,
        sortValue: 0,
        progId: "SYS_COMMON_CODE",
        progNm: "공통코드관리",
        children: [],
        menuNmLang: {
          en: "Common Code",
          ko: "공통코드관리",
        },
      },
      {
        menuGroupId: "SYSTEM",
        iconKncd: "Default",
        menuLvl: 2,
        sortValue: 3,
        progId: "SYS_USER",
        progNm: "시스템사용자정보관리",
        children: [],
        menuNmLang: {
          en: "System User",
          ko: "시스템사용자관리",
        },
      },
      {
        menuGroupId: "SYSTEM",
        iconKncd: "Default",
        menuLvl: 2,
        sortValue: 5,
        progId: "SYS_USER_GROUP",
        progNm: "시스템사용자그룹관리",
        children: [],
        menuNmLang: {
          en: "System User Group",
          ko: "시스템사용자그룹",
        },
      },
      {
        menuGroupId: "SYSTEM",
        iconKncd: "Default",
        menuLvl: 2,
        sortValue: 6,
        progId: "SYS_PROGRAM",
        progNm: "시스템프로그램관리",
        children: [],
        menuNmLang: {
          en: "Program",
          ko: "프로그램관리",
        },
      },
      {
        menuGroupId: "SYSTEM",
        iconKncd: "Default",
        menuLvl: 2,
        sortValue: 7,
        progId: "SYS_MENU",
        progNm: "시스템메뉴관리",
        children: [],
        menuNmLang: {
          en: "Menu Management",
          ko: "프로그램메뉴관리",
        },
      },
    ],
    userGroup: ["ROLE_ADMIN"],
    menuNmLang: {
      ko: "시스템관리",
      en: "시스템관리",
    },
  },
];

export class MenuRepositoryMock implements MenuInterface {
  async getMenuList(): Promise<GetMenuListResponse> {
    // const { data } = await apiWrapper<GetMenuListResponse>("get", "/api/menu");
    return {
      ds: menuMockData,
    };
  }
}

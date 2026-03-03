import { Menu } from "../dto";
import { GetMenuListResponse, MenuInterface } from "../interface";

interface MenuGroup extends Menu {
  userGroup?: string[];
}
export const menuMockData: MenuGroup[] = [];

export class MenuRepositoryMock implements MenuInterface {
  async getMenuList(): Promise<GetMenuListResponse> {
    // const { data } = await apiWrapper<GetMenuListResponse>("get", "/api/menu");
    return {
      ds: menuMockData,
    };
  }
}

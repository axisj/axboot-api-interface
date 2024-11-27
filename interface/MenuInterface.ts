import { Menu } from "../dto";
import { DataGridPageResponse } from "../types";

export interface GetMenuListRequest {
  filter?: string;
}

export interface GetMenuListMybatisRequest {
  filter?: string;
}

export interface GetMenuListResponse {
  ds: Menu[];
}

export interface GetMenuListMybatisResponse {
  ds: Menu[];
}

export abstract class MenuInterface {
  /* 메뉴 목록(/api/menu) */
  abstract getMenuList(params: GetMenuListRequest): Promise<GetMenuListResponse>;

  /* 메뉴 목록(mybatis)(/api/menu/mybatis) */
  abstract getMenuListMybatis(params: GetMenuListMybatisRequest): Promise<GetMenuListMybatisResponse>;
}

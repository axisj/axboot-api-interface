import { DefaultDto } from "../types";
import { Menu } from "./index";

export interface MenuRequest extends DefaultDto {
  iconKncd?: string; //아이콘 형식
  menuGroupId?: string; //메뉴 그룹 ID
  multiLang?: Record<string, any>; //다국어
  children?: Menu[]; //메뉴
  userGroup?: string[]; //사용자 그룹
}

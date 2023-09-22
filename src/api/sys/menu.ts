import { defHttp } from '/@/utils/http/axios';
import {BaseDataResp} from "@/api/model/baseModel";
import {MenuListResp} from "@/api/sys/model/menuModel";

enum Api {
  GetMenuList = '/sysRole/menu',
}

/**
 * @description: Get user menu based on id
 */

export const getMenuList = () => {
  return defHttp.get<BaseDataResp<MenuListResp>>({ url: Api.GetMenuList });
};

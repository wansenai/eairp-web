import { defHttp } from '/@/utils/http/axios';
import {GetUserInfoModel, LoginReq, LoginResp} from './model/userModel';

import { ErrorMessageMode } from '/#/axios';
import {BaseDataResp} from "@/api/model/baseModel";

enum Api {
  Login = '/user/login',
  Logout = '/user/logout',
  GetUserInfo = '/user/info',
  GetPermCode = '/getPermCode',
  TestRetry = '/testRetry',
}

/**
 * @description: user login api
 */
export function login(params: LoginReq, mode: ErrorMessageMode = 'notice') {
  return defHttp.post<BaseDataResp<LoginResp>>(
    {
      url: Api.Login,
      params,
    },
    {
      errorMessageMode: mode,
      successMessageMode: mode,
    },
  );
}

/**
 * @description: getUserInfo
 */
export function getUserInfo() {
  return defHttp.get<BaseDataResp<GetUserInfoModel>>(
    { url: Api.GetUserInfo },
    { errorMessageMode: 'none' },
  );
}

export function getPermCode() {
  return defHttp.get<string[]>({ url: Api.GetPermCode });
}

export function doLogout() {
  return defHttp.get({ url: Api.Logout });
}

export function testRetry() {
  return defHttp.get(
    { url: Api.TestRetry },
    {
      retryRequest: {
        isOpenRetry: true,
        count: 5,
        waitTime: 1000,
      },
    },
  );
}

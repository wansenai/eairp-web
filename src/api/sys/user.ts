import {defHttp} from '/@/utils/http/axios';
import {
    addOrUpdateUserReq,
    GetUserInfoModel,
    LoginReq,
    LoginResp,
    mobileLoginReq,
    registerReq,
    updatePasswordReq, updateUserInfoReq
} from './model/userModel';

import {ErrorMessageMode} from '/#/axios';
import {BaseDataResp, BaseResp} from "@/api/model/baseModel";

enum Api {
  Login = '/user/login',
  MobileLogin = '/user/mobileLogin',
  Logout = '/user/logout',
  Register = '/user/register',
  SMS = '/v2/common/sms',
  UpdatePassword = '/user/updatePassword',
  GetUserInfo = '/user/info',
  GetPermCode = '/user/perm',
  TestRetry = '/testRetry',
  List = '/user/list',
  UpdateUser = '/user/update',
  addOrUpdateUser = '/user/addOrUpdate'
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

export function mobileLogin(params: mobileLoginReq, mode: ErrorMessageMode = 'notice') {
  return defHttp.post<BaseDataResp<LoginResp>>(
    {
      url: Api.MobileLogin,
      params,
    },
    {
      errorMessageMode: mode,
      successMessageMode: mode,
    },
  );
}

export function register(params: registerReq, mode: ErrorMessageMode = 'notice') {
  return defHttp.post<BaseResp>(
    {
      url: Api.Register,
      params,
    },
    {
      errorMessageMode: mode,
      successMessageMode: mode,
    }
  )
}

export function sendSmsRegister(type: number, phoneNumber: string, mode: ErrorMessageMode = 'notice') {
  return defHttp.get<BaseResp>(
    {
      url: `${Api.SMS}/${type}/${phoneNumber}`
    },
    {
      errorMessageMode: mode,
      successMessageMode: mode,
    }
  )
}

export function updatePassword(params: updatePasswordReq, mode: ErrorMessageMode = 'notice') {
  return defHttp.post<BaseResp>(
    {
      url: Api.UpdatePassword,
      params,
    },
    {
      errorMessageMode: mode,
      successMessageMode: mode,
    }
  )
}

/**
 * @description: getUserInfo
 */
export function getUserInfo() {
  return defHttp.get<BaseDataResp<GetUserInfoModel>>(
    {url: Api.GetUserInfo},
    {errorMessageMode: 'none'},
  );
}

export function getUserList(params: updatePasswordReq, mode: ErrorMessageMode = 'notice') {
  return defHttp.post<BaseDataResp<GetUserInfoModel>>(
    {url: Api.List, params},
    {
      errorMessageMode: mode,
      successMessageMode: mode,
    },
  );
}

export function updateUser(params: updateUserInfoReq, mode: ErrorMessageMode = 'notice') {
    return defHttp.post<BaseResp>(
        {url: Api.UpdateUser, params},
        {
            errorMessageMode: mode,
            successMessageMode: mode,
        },
    )
}

export function updateStatus(params: { id: any; status: number }, mode: ErrorMessageMode = 'notice') {
  return defHttp.post<BaseResp>(
      {url: Api.UpdateUser, params},
      {
        errorMessageMode: mode,
        successMessageMode: mode,
      },
  )
}

export function addOrUpdateUser(params: addOrUpdateUserReq, mode: ErrorMessageMode = 'notice') {
    return defHttp.post<BaseResp>(
        {url: Api.addOrUpdateUser, params},
        {
            errorMessageMode: mode,
            successMessageMode: mode,
        }
    )
}

export function getPermCode() {
  return defHttp.get<string[]>({url: Api.GetPermCode});
}

export function doLogout() {
  return defHttp.get({url: Api.Logout});
}

export function testRetry() {
  return defHttp.get(
    {url: Api.TestRetry},
    {
      retryRequest: {
        isOpenRetry: true,
        count: 5,
        waitTime: 1000,
      },
    },
  );
}

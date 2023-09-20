/**
 * @description: Login interface parameters
 */
export interface LoginReq {
  username: string;
  password: string;
  captcha: string;
  captchaId: string;
}

export interface RoleInfo {
  roleName: string;
  value: string;
}

export interface LoginResp {
  userId: string | number;
  token: string;
  expire?: number;
}

/**
 * @description: Login interface return value
 */
export interface LoginResultModel {
  userId: string | number;
  token: string;
  roles: RoleInfo[];
}

/**
 * @description: Get user information return value
 */
export interface GetUserInfoModel {
  // 用户id
  userId: string | number;
  // 用户名
  username: string;
  // 昵称
  name: string;
  // 头像
  avatar: string;
  // 介绍
  desc?: string;
  // 用户首页
  homePath: string;
  // 用户角色
  roles?: string[];
  // 用户角色名称
  roleName: string[];
}

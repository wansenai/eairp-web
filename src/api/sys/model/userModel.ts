/**
 * @description: Login interface parameters
 */
export interface LoginReq {
  username: string;
  password: string;
  captcha: string;
  captchaId: string;
}

export interface mobileLoginReq {
  phoneNumber: string;
  sms: string;
  type: number;
}

export interface registerReq {
  username: string;
  password: string;
  phoneNumber: string;
  sms: number;
}

export interface updatePasswordReq {
  username: string;
  password: string;
  phoneNumber: string;
  sms: number;
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
  id: string | number;
  // 用户名
  username: string;
  // 昵称
  name: string;
  // 邮箱
  email: string;
  // 电话
  phoneNumber: string;
  // 状态
  status: number;
  // 用户角色名称
  roleName: string;
}

export interface FormData {
  avatar: string;
  name: string;
  email: string;
  mobile: string;
}

export interface ChangePasswordReq {
  oldPassword: string;
  newPassword: string;
}

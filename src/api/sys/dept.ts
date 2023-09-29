import {
    DeptListItem,
    GetDeptInfoModel,
} from './model/dpetModel';

import { defHttp } from '/@/utils/http/axios';
import {BaseDataResp} from "@/api/model/baseModel";

enum Api {
    DeptList = '/dept/list',
    UserBindDept = '/dept/userBindDept',
}


export function getDeptList(params?: DeptListItem) {
    return defHttp.get<BaseDataResp<GetDeptInfoModel>>({url: Api.DeptList, params})
}

export function getUserBindDept(params?: DeptListItem) {
    return defHttp.get<BaseDataResp<GetDeptInfoModel>>({url: Api.UserBindDept})
}
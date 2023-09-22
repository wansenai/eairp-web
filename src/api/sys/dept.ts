import {
    DeptListItem,
    GetDeptInfoModel,
} from './model/dpetModel';

import { defHttp } from '/@/utils/http/axios';
import {BaseDataResp} from "@/api/model/baseModel";

enum Api {
    DeptList = '/dept/userDeptRel',
}

export const getDeptList = (params?: DeptListItem) =>
    defHttp.get<BaseDataResp<GetDeptInfoModel>>({ url: Api.DeptList, params });

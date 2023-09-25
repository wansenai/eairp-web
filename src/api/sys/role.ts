import {ErrorMessageMode} from "#/axios";
import {defHttp} from "@/utils/http/axios";
import {BaseDataResp, BaseResp} from "@/api/model/baseModel";
import {GetRoleInfoModel, queryRoleListReq} from "@/api/sys/model/roleModel";

enum Api {
    List = '/sysRole/list',
    PageList = '/sysRole/PageList',
    UpdateStatus = '/sysRole/updateStatus'
}

export function getRoleList(mode: ErrorMessageMode = 'notice') {
    return defHttp.get<BaseResp>(
        {url: Api.List},
        {
            errorMessageMode: mode,
            successMessageMode: mode,
        }
    )
}

export function getPageList(params: queryRoleListReq, mode: ErrorMessageMode = 'notice') {
    return defHttp.post<BaseDataResp<GetRoleInfoModel>>(
        {url: Api.PageList, params},
        {
            errorMessageMode: mode,
            successMessageMode: mode,
        }
    )
}

export function setRoleStatus(id: string, status: number, mode: ErrorMessageMode = 'notice'){
    return defHttp.post<BaseResp>(
        {url: `${Api.UpdateStatus}?id=${id}&status=${status}`},
        {
            errorMessageMode: mode,
            successMessageMode: mode,
        },
    )
}
import {ErrorMessageMode} from "#/axios";
import {defHttp} from "@/utils/http/axios";
import {BaseResp} from "@/api/model/baseModel";


enum Api {
    List = '/sysRole/list',
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
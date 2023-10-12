import {defHttp} from '/@/utils/http/axios';
import { ErrorMessageMode } from '/#/axios';
import {BaseResp} from "@/api/model/baseModel";
import {ContentTypeEnum} from "@/enums/httpEnum";

enum API {
    UploadXlsx = '/v2/common/upload/excls',
}

export interface UploadFileParams {
    // file name
    file: File;
}

export function uploadXlsx(params: UploadFileParams, mode: ErrorMessageMode = 'notice') {
    return defHttp.post<BaseResp>(
        {
            url: API.UploadXlsx,
            params,
            headers: {
                'Content-type': ContentTypeEnum.FORM_DATA,
                // @ts-ignore
                ignoreCancelToken: true,
            },
        },
        {
            errorMessageMode: mode,
        },
    );
}
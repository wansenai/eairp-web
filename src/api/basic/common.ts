import {defHttp} from '/@/utils/http/axios';
import { ErrorMessageMode } from '/#/axios';
import {BaseDataResp, BaseResp} from "@/api/model/baseModel";
import {ContentTypeEnum} from "@/enums/httpEnum";

enum Api {
    UploadXlsx = '/v2/common/upload/excel',
    ExportXlsx = '/v2/common/export/excel',
}

export interface UploadFileParams {
    // file name
    file: File;
}

export function uploadXlsx(params: UploadFileParams, mode: ErrorMessageMode = 'notice') {
    return defHttp.post<BaseResp>(
        {
            url: Api.UploadXlsx,
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

export function exportXlsx(type: string, mode: ErrorMessageMode = 'notice') {
    return defHttp.get<BaseDataResp<Blob>>(
        {
            url: `${Api.ExportXlsx}?type=${type}`,
            responseType: "blob"
        },
        {
            errorMessageMode: mode,
        },
    );
}
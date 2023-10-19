import {defHttp} from '/@/utils/http/axios';
import { ErrorMessageMode } from '/#/axios';
import {BaseDataResp} from "@/api/model/baseModel";

enum Api {
    getBarCode = '/product/getBarCode',
}

export function getBarCode() {
    return defHttp.get<BaseDataResp<number>>(
        {
            url: Api.getBarCode,
        }
    );
}
import {defHttp} from '/@/utils/http/axios';
import { ErrorMessageMode } from '/#/axios';
import {BaseDataResp, BaseResp} from "@/api/model/baseModel";
import {AddOrUpdateProductUnitReq, ProductUnitResp, ProductUnitQueryReq} from "@/api/product/model/productUnitModal";

enum Api {
    List = '/product/unit/list',
    addOrUpdate = '/product/unit/addOrUpdate',
    deleteBatch = '/product/unit/deleteBatch',
}

export function getUnitList(params: ProductUnitQueryReq ,mode: ErrorMessageMode = 'notice') {
    return defHttp.post<BaseDataResp<ProductUnitResp>>(
        {
            url: Api.List,
            params,
        },
        {
            errorMessageMode: mode,
            successMessageMode: mode,
        },
    );
}

export function addOrUpdateUnit(params: AddOrUpdateProductUnitReq, mode: ErrorMessageMode = 'notice') {
    return defHttp.post<BaseResp>(
        {
            url: Api.addOrUpdate,
            params,
        },
        {
            errorMessageMode: mode,
        },
    );
}

export function deleteBatchUnits(ids: number[], mode: ErrorMessageMode = 'notice') {
    return defHttp.delete<BaseResp>(
        {
            url: `${Api.deleteBatch}?ids=${ids}`
        },
        {
            errorMessageMode: mode,
        },
    );
}
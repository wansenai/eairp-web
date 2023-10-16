import {defHttp} from '/@/utils/http/axios';
import { ErrorMessageMode } from '/#/axios';
import {BaseDataResp, BaseResp} from "@/api/model/baseModel";
import {
    WarehouseResp,
    AddOrUpdateWarehouseReq,
    QueryWarehouseReq
} from "@/api/basic/model/warehouseModel";


enum API {
    List = '/basic/warehouse/list',
    AddOrUpdateWarehouse = '/basic/warehouse/addOrUpdate',
    DeleteBatch = '/basic/warehouse/delete',
    UpdateStatus = '/basic/warehouse/updateStatus',
}

export function getWarehouseList(params: QueryWarehouseReq, mode: ErrorMessageMode = 'notice') {
    return defHttp.post<BaseDataResp<WarehouseResp>>(
        {
            url: API.List,
            params,
        },
        {
            errorMessageMode: mode,
            successMessageMode: mode,
        },
    );
}

export function addOrUpdateWarehouse(params: AddOrUpdateWarehouseReq, mode: ErrorMessageMode = 'notice') {
    return defHttp.post<BaseResp>(
        {
            url: API.AddOrUpdateWarehouse,
            params,
        },
        {
            errorMessageMode: mode,
        },
    );
}

export function updateWarehouseStatus(ids: number[], status: number, mode: ErrorMessageMode = 'notice') {
    return defHttp.post<BaseResp>(
        {
            url: `${API.UpdateStatus}?ids=${ids}&status=${status}`
        },
        {
            errorMessageMode: mode,
        },
    );
}

export function deleteBatchWarehouse(ids: number[], mode: ErrorMessageMode = 'notice') {
    return defHttp.delete<BaseResp>(
        {
            url: `${API.DeleteBatch}?ids=${ids}`
        },
        {
            errorMessageMode: mode,
        },
    );
}
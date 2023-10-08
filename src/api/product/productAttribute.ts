import {defHttp} from '/@/utils/http/axios';
import { ErrorMessageMode } from '/#/axios';
import {BaseDataResp, BaseResp} from "@/api/model/baseModel";
import {AddOrUpdateProductAttributeReq, ProductAttributeResp} from "@/api/product/model/productAttributeModel";
import {ProductCategoryListReq} from "@/api/product/model/productCategoryModel";

enum Api {
    List = '/product/attribute/list',
    addOrUpdate = '/product/attribute/addOrUpdate',
    deleteBatch = '/product/attribute/deleteBatch',
}

export function getAttributeList(params: ProductCategoryListReq ,mode: ErrorMessageMode = 'notice') {
    return defHttp.post<BaseDataResp<ProductAttributeResp>>(
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

export function addOrUpdateAttribute(params: AddOrUpdateProductAttributeReq, mode: ErrorMessageMode = 'notice') {
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

export function deleteBatchAttribute(ids: number[], mode: ErrorMessageMode = 'notice') {
    return defHttp.delete<BaseResp>(
        {
            url: `${Api.deleteBatch}?ids=${ids}`
        },
        {
            errorMessageMode: mode,
        },
    );
}
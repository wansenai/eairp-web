import {defHttp} from '/@/utils/http/axios';
import { ErrorMessageMode } from '/#/axios';
import {BaseDataResp} from "@/api/model/baseModel";
import {AddOrUpdateProductCategoryReq, ProductCategoryResp} from "@/api/product/model/productCategoryModel";

enum Api {
    List = '/product/category/list',
    addOrUpdate = '/product/category/addOrUpdate',
    delete = '/product/category/delete',
}

export function getCategoryList(mode: ErrorMessageMode = 'notice') {
    return defHttp.get<BaseDataResp<ProductCategoryResp>>(
        {
            url: Api.List,
        },
        {
            errorMessageMode: mode,
        },
    );
}

export function addOrUpdateCategory(params: AddOrUpdateProductCategoryReq, mode: ErrorMessageMode = 'notice') {
    return defHttp.post<BaseDataResp<AddOrUpdateProductCategoryReq>>(
        {
            url: Api.addOrUpdate,
            params,
        },
        {
            errorMessageMode: mode,
        },
    );
}

export function deleteCategory(id: number, mode: ErrorMessageMode = 'notice') {
    return defHttp.post<BaseDataResp<string>>(
        {
            url: `${Api.delete}?id=${id}`,
            params: {id},
        },
        {
            errorMessageMode: mode,
        },
    );
}
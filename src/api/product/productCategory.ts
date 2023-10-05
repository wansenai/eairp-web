import {defHttp} from '/@/utils/http/axios';
import { ErrorMessageMode } from '/#/axios';
import {BaseDataResp} from "@/api/model/baseModel";
import {AddOrUpdateProductCategoryReq, ProductCategoryResp} from "@/api/product/model/productCategoryModel";

enum Api {
    List = '/product/category/list',
    addOrUpdate = '/product/category/addOrUpdate',
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
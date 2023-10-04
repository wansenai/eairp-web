import {defHttp} from '/@/utils/http/axios';
import { ErrorMessageMode } from '/#/axios';
import {BaseDataResp} from "@/api/model/baseModel";
import {ProductCategoryResp} from "@/api/product/model/productCategoryModel";

enum Api {
    List = '/product/category/list',
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
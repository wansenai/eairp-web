import {defHttp} from '/@/utils/http/axios';
import {BaseDataResp, BaseResp} from "@/api/model/baseModel";
import {AddProductReq, ProductInfoDetailResp, QueryProductReq} from "@/api/product/model/productModel";
import {ErrorMessageMode} from "#/axios";

enum Api {
    getBarCode = '/product/getBarCode',
    addProduct = '/product/addProduct',
    getProductInfo = '/product/getProductInfo',
    getProductInfoDetail = '/product/getProductInfoDetail',
}

export function getBarCode() {
    return defHttp.get<BaseDataResp<number>>(
        {
            url: Api.getBarCode,
        }
    );
}

export function addProduct(params: AddProductReq, mode: ErrorMessageMode = 'notice') {
    return defHttp.post<BaseResp>(
        {
            url: Api.addProduct,
            params
        },
        {
            errorMessageMode: mode,
        },
    );
}

export function getProductInfo(params: QueryProductReq, mode: ErrorMessageMode = 'notice') {
    return defHttp.post<BaseResp>(
        {
            url: Api.getProductInfo,
            params
        },
        {
            errorMessageMode: mode,
        },
    );
}

export function getProductInfoDetail(productId: number) {
    return defHttp.get<BaseDataResp<ProductInfoDetailResp>>(
        {
            url: `${Api.getProductInfoDetail}/${productId}`,
        }
    );
}
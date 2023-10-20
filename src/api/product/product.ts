import {defHttp} from '/@/utils/http/axios';
import {BaseDataResp} from "@/api/model/baseModel";
import {ProductStockResp} from "@/api/product/model/productModel";

enum Api {
    getBarCode = '/product/getBarCode',
    getStock = '/product/getStock',
}

export function getBarCode() {
    return defHttp.get<BaseDataResp<number>>(
        {
            url: Api.getBarCode,
        }
    );
}

export function getStock() {
    return defHttp.get<BaseDataResp<ProductStockResp>>(
        {
            url: Api.getStock,
        }
    );
}
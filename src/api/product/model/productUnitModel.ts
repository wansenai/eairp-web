export interface ProductUnitResp {
    id: number | string;
    computeUnit: string;
    basicUnit: string;
    otherUnit: string;
    otherUnitTwo: string;
    otherUnitThree: number;
    status: number;
    createTime: string;
}

export interface AddOrUpdateProductUnitReq {
    id: number | string;
    basicUnit: string;
    otherUnit: string;
    otherUnitTwo: string;
    otherUnitThree: string;
    ratio: number;
    ratioTwo: number;
    ratioThree: number;
    status: number;
}

export interface ProductUnitQueryReq {
    computeUnit: string;
    page: number;
    pageSize: number;
}
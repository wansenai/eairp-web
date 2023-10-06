export interface ProductCategoryResp {
    id: number | string;
    parentId: number | string;
    categoryName: string;
    categoryLevel: string;
    serialNumber: string;
    remark: string;
    sort: number;
}

export interface AddOrUpdateProductCategoryReq {
    id: number | string;
    parentId: number | string;
    categoryName: string;
    categoryLevel: string;
    serialNumber: string;
    remark: string;
    sort: number;
}
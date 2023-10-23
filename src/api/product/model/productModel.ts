export interface AddProductStockReq {
    productStockId: number | string;
    warehouseId: number | string;
    warehouseName: string;
    initStockQuantity: number;
    lowStockQuantity: number;
    highStockQuantity: number;
}

export interface AddProductPriceReq {
    productPriceId: number | string;
    barCode: number;
    productUnit: string;
    multiAttribute: string;
    purchasePrice: number;
    retailPrice: number;
    salesPrice: number;
    lowSalesPrice: number;
}

export interface AddProductImageReq {
    productImageId: number | string;
    uid: string;
    type: string;
    status: string;
    imageName: string;
    imageUrl: string;
    imageSize: number;
}

export interface AddProductReq {
    productId: number | string;
    productName: string;
    productStandard: string;
    productModel: string;
    productUnit: string | undefined,
    productUnitId: number | string | undefined;
    productColor: string;
    productWeight: number;
    productExpiryNum: number;
    productCategoryId: number | string | undefined;
    enableSerialNumber: number;
    enableBatchNumber: number;
    warehouseShelves: string;
    remark: string;
    productManufacturer: string;
    otherFieldOne: string;
    otherFieldTwo: string;
    otherFieldThree: string;
    priceList: AddProductPriceReq[];
    stockList: AddProductStockReq[];
    imageList: AddProductImageReq[];
}

export interface QueryProductReq {
    productCategoryId: number | string
    keywords: string
    productColor: string
    extendInfo: string
    remark: string
    warehouseShelves: string
    status: number
    enableSerialNumber: number
    enableBatchNumber: number
}

export interface ProductInfoDetailResp {
    productId: string;
    productCategoryId: string;
    productName: string;
    productStandard: string;
    productModel: string;
    productColor: string;
    productWeight: number;
    productExpiryNum: number;
    productCategoryName: string;
    enableSerialNumber: number;
    enableBatchNumber: number;
    warehouseShelves: string;
    productManufacturer: string;
    otherFieldOne: string;
    otherFieldTwo: string;
    otherFieldThree: string;
    priceList: ProductPriceResp[];
    stockList: ProductStockResp[];
    imageList: ProductImageResp[];
}

export interface ProductImageResp {
    imageName: string;
    iImageUrl: string;
}

export interface ProductPriceResp {
    barCode: number;
    productUnit: string;
    multiAttribute: string;
    purchasePrice: number;
    retailPrice: number;
    salesPrice: number;
    lowSalesPrice: number;
}

export interface ProductStockResp {
    id: number | string;
    warehouseId: number | string;
    warehouseName: string;
    initStockQuantity: number;
    lowStockQuantity: number;
    highStockQuantity: number;
}

export interface UpdateBatchProductInfoReq {
    productIds: number[];
    productCategoryId: number | string;
    productColor: string;
    productWeight: number;
    productExpiryNum: number;
    enableSerialNumber: string;
    enableBatchNumber: string;
    remark: string;
}
export interface ProductStockResp {
    id: number | string;
    warehouseId: number | string;
    warehouseName: string;
    initStockQuantity: number;
    lowStockQuantity: number;
    highStockQuantity: number;
}
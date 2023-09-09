import { BaseListResp } from '/@/api/model/baseModel';

/**
 *  @description: StorageProvider info response
 */
export interface StorageProviderInfo {
  id: number;
  createdAt?: number;
  updatedAt?: number;
  state?: boolean;
  name?: string;
  bucket?: string;
  endpoint?: string;
  secretId?: string;
  secretKey?: string;
  folder?: string;
  region?: string;
  isDefault?: boolean;
}

/**
 *  @description: StorageProvider list response
 */

export type StorageProviderListResp = BaseListResp<StorageProviderInfo>;

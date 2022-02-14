type ResourceTypes = 'text' | 'blob';
type ResourceContent = string | Blob;
type ResourceOptions = {
  type: ResourceTypes,
  content?: ResourceContent,
};

type BaseResource = typeof import('../resources/BaseResource');

type ResourceRawType = string | HTMLImageElement | File | Blob;
type CopyResource = (resource: ResourceRawType  | BaseResource) => Promise<void>;

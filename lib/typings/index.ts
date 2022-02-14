type ResourceTypes = 'text' | 'blob';
type ResourceContent = string | Blob;
type ResourceOptions = {
  type: ResourceTypes,
  content: ResourceContent,
};

type UrlResourceOptions = {
  url: string,
}

type ImgResourceOptions = {
  img: HTMLImageElement
}

type TextResourceOptions = {
  content: string,
}

type FileResourceOptions = {
  content: File,
}

type BlobResourceOptions = {
  content: Blob,
}

type BaseResource = typeof import('../resources/BaseResource');


type ResourceRawType = string | HTMLImageElement | File | Blob;
type CopyResource = (resource: ResourceRawType  | BaseResource) => Promise<void>;

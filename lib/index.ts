import BaseResource from "./resources/BaseResource";
import BlobResource from "./resources/BlobResource";
import FileResource from "./resources/FileResource";
import ImgResource from "./resources/ImgResource";
import TextResource from "./resources/TextResource";
export { default as UrlResource } from "./resources/UrlResource";

const checkCompatibility = () => {
  if (!(navigator.clipboard && window.ClipboardItem)) {
    throw new Error('not support modern clipboard api')
  }
}

const buildResource = (resource: ResourceRawType) => {
  if (typeof resource === 'string') {
    return new TextResource(resource);
  } else if (resource instanceof File) {
    return new FileResource(resource);
  } else if (resource instanceof Blob) {
    return new BlobResource(resource);
  } else if (resource instanceof HTMLImageElement) {
    return new ImgResource(resource);
  } else {
    throw new Error('Invalid resource');
  }
}

export const copyResource: CopyResource = async (resource) => {
  // 检测兼容性
  checkCompatibility();

  // 初始化资源实例
  let resourceInstance: BaseResource;
  if (!(resource instanceof BaseResource)) {
    resourceInstance = buildResource(resource as ResourceRawType);
  } else {
    resourceInstance = resource;
  }

  // 获取资源
  const content = await resourceInstance.getContent();

  // 复制资源
  if (resourceInstance.type === 'text') {
    navigator.clipboard.writeText(content as string);
  } else {
    navigator.clipboard.write([
      new ClipboardItem({
        [(content as Blob).type]: content,
      })
    ])
  }
}

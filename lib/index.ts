import BaseResource from "./resources/BaseResource";
import BlobResource from "./resources/BlobResource";
import FileResource from "./resources/FileResource";
import ImgResource from "./resources/ImgResource";
import TextResource from "./resources/TextResource";

const checkCompatibility = () => {
  if (!(navigator.clipboard && window.ClipboardItem)) {
    throw new Error('not support modern clipboard api')
  }
}

const buildResource = (resource: ResourceRawType) => {
  if (typeof resource === 'string') {
    return new TextResource({ content: resource });
  } else if (resource instanceof File) {
    return new FileResource({ content: resource });
  } else if (resource instanceof Blob) {
    return new BlobResource({ content: resource });
  } else if (resource instanceof HTMLImageElement) {
    return new ImgResource({ img: resource });
  } else {
    throw new Error('Invalid resource');
  }
}

export const copyResource: CopyResource = async (resource) => {
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

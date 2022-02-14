import BaseResource from "./BaseResource";

export default class BlobResource extends BaseResource {
  constructor(blob: Blob) {
    super({
      type: 'blob',
      content: blob,
    });
  }
}

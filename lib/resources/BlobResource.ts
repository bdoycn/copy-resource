import BaseResource from "./BaseResource";

export default class BlobResource extends BaseResource {
  constructor(options: BlobResourceOptions) {
    const { content } = options;

    super({
      type: 'blob',
      content,
    });
  }
}

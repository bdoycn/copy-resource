import BaseResource from "./BaseResource";

export default class FileResource extends BaseResource {
  constructor(options: FileResourceOptions) {
    const { content } = options;

    super({
      type: 'blob',
      content,
    })
  }
}

import BaseResource from "./BaseResource";

export default class FileResource extends BaseResource {
  constructor(file: File) {
    super({
      type: 'blob',
      content: file,
    })
  }
}

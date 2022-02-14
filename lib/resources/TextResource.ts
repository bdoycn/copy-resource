import BaseResource from "./BaseResource";

export default class TextResource extends BaseResource {
  constructor(options: TextResourceOptions) {
    const { content } = options;

    super({
      type: 'text',
      content,
    });
  }
}

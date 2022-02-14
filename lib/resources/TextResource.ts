import BaseResource from "./BaseResource";

export default class TextResource extends BaseResource {
  constructor(text: string) {
    super({
      type: 'text',
      content: text,
    });
  }
}

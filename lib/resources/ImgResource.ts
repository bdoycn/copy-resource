import { imgToBlob } from "img-to-blob";
import BaseResource from "./BaseResource";

export default class ImgResource extends BaseResource {
  protected img: HTMLImageElement;

  constructor(options: ImgResourceOptions) {
    super({
      type: 'blob',
      content: '',
    });

    ({ img: this.img } = options);
  }

  async getContent(): Promise<ResourceContent> {
    return imgToBlob(this.img);
  }
}

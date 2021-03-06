import { imgToBlob } from "img-to-blob";
import BaseResource from "./BaseResource";

export default class ImgResource extends BaseResource {
  protected img: HTMLImageElement;

  constructor(img: HTMLImageElement) {
    super({ type: 'blob' });

    this.img = img;
  }

  async getContent(): Promise<ResourceContent> {
    return imgToBlob(this.img);
  }
}

import BaseResource from "./BaseResource";

export default class UrlResource extends BaseResource {
  protected url;
  
  constructor(url: string) {
    super({ type: 'blob' });

    this.url = url;
  }

  async getContent(): Promise<ResourceContent> {
    try {
      const response = await fetch(this.url);
      if (!response.ok) throw new Error();
  
      return response.blob();
    } catch {
      throw new Error('fetch url resource failed');
    }
  }
}

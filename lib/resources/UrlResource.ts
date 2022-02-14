import BaseResource from "./BaseResource";

export default class UrlResource extends BaseResource {
  protected url = '';
  
  constructor(options: UrlResourceOptions) {
    super({
      type: 'blob',
      content: '',
    });
    
    ({ url: this.url } = options);
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

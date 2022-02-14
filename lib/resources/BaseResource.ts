export default abstract class BaseResource {
  public type: ResourceTypes;
  protected content: ResourceContent;

  constructor(options: ResourceOptions) {
    this.type = options.type;
    this.content = options.content ?? '';
  }

  async getContent(): Promise<ResourceContent> {
    return this.content;
  }
}

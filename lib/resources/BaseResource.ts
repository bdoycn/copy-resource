export default abstract class BaseResource {
  public type = 'text' as ResourceTypes;
  protected content = '' as ResourceContent;

  constructor(options: ResourceOptions) {
    ({
      type: this.type,
      content: this.content,
    } = options);
  }

  async getContent(): Promise<ResourceContent> {
    return this.content;
  }
}

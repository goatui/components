export declare class P4Icon {
  type: string;
  /**
   * Icon variants to add additional styling
   * Possible values are `"default"`, `"primary"`, `"danger"`, `"success"`. Defaults to `"default"`.
   */
  variant: 'default' | 'primary' | 'danger' | 'success';
  /**
   * The Icon size.
   * Possible values are: `"sm"`, `"md"`, `"lg"`. Defaults to `"md"`.
   */
  size: 'sm' | 'md' | 'lg' | string;
  private getSize;
  private getCssClasses;
  render(): any;
}

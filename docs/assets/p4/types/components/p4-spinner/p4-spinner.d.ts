export declare class P4Spinner {
  /**
   * Spinner variants to add additional styling
   * Possible values are `"default"`, `"primary"`, `"danger"`, `"success"`. Defaults to `"default"`.
   */
  variant: 'default' | 'primary' | 'danger' | 'success';
  /**
   * The Icon size.
   * Possible values are: `"sm"`, `"md"`, `"lg"`. Defaults to `"md"`.
   */
  size: 'sm' | 'md' | 'lg' | string;
  getSize(): string;
  private getCssClasses;
  render(): any;
}

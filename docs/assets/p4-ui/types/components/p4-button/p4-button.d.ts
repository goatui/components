import { EventEmitter } from '../../stencil-public-runtime';
export declare class P4Button {
  /**
   * Button size.
   * Possible values are `"sm"`, `"md"`, `"lg"`. Defaults to `"md"`.
   */
  size: 'sm' | 'md' | 'lg';
  /**
   * Button variants
   * Possible values are `"default"`, `"primary"`, `"dashed"`, `"danger"`, `"link"`. Defaults to `"default"`.
   */
  variant: 'default' | 'primary' | 'dashed' | 'danger' | 'link';
  /**
   * If true, fits button width to its parent width. Defaults to `false`.
   */
  block: boolean;
  /**
   * If true, the user cannot interact with the button. Defaults to `false`.
   */
  disabled: boolean;
  icon: string;
  showLoader: boolean;
  /**
   * On click of button a CustomEvent 'p4Click' will be triggered.
   */
  p4Click: EventEmitter;
  private onClick;
  private getCssClasses;
  render(): any;
}

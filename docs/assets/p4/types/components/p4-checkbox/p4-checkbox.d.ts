import { EventEmitter } from '../../stencil-public-runtime';
export declare class P4Checkbox {
  /**
   * The checkbox label.
   */
  label: string;
  /**
   * Button variants
   * Possible values are `"default"`, `"dashed"`. Defaults to `"default"`.
   */
  variant: 'default' | 'dashed';
  /**
   * The input field value.
   */
  value: boolean;
  /**
   * The button size.
   * Possible values are: `"sm"`, `"md"`, `"lg"`. Defaults to `"md"`.
   */
  size: 'sm' | 'md' | 'lg';
  /**
   * If true, required icon is show. Defaults to `false`.
   */
  required: boolean;
  /**
   * If true, the user cannot interact with the button. Defaults to `false`.
   */
  disabled: boolean;
  /**
   * On change of input a CustomEvent 'inputChange' will be triggered. Event details contains parent event, oldValue, newValue of input.
   */
  p4Change: EventEmitter;
  onChange: (event: any) => void;
  private getCssClasses;
  render(): any;
}

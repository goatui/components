import { EventEmitter } from '../../stencil-public-runtime';
export declare class P4Select {
  el: HTMLElement;
  private nativeInput?;
  private tabindex?;
  private inputId;
  hasFocus: boolean;
  /**
   * The input field name.
   */
  name: string;
  /**
   * The input field placeholder.
   */
  placeholder: string;
  /**
   * The input field value.
   */
  value: string;
  /**
   * The button size.
   * Possible values are: `"sm"`, `"md"`, `"lg"`. Defaults to `"md"`.
   */
  size: 'sm' | 'md' | 'lg';
  /**
   * Button variants
   * Possible values are `"default"`, `"dashed"`. Defaults to `"default"`.
   */
  variant: 'default' | 'dashed';
  /**
   * If true, required icon is show. Defaults to `false`.
   */
  required: boolean;
  /**
   * If true, the user cannot interact with the button. Defaults to `false`.
   */
  disabled: boolean;
  showLoader: boolean;
  filterOptions: boolean;
  config: any | string;
  /**
   * If true, the user cannot interact with the button. Defaults to `false`.
   */
  options: any[] | string;
  /**
   * If `true`, a clear icon will appear in the input when there is a value. Clicking it clears the input.
   */
  clearInput: boolean;
  /**
   * Set the amount of time, in milliseconds, to wait to trigger the `onChange` event after each keystroke.
   */
  debounce: number;
  protected debounceChanged(): void;
  /**
   * Emitted when a keyboard input occurred.
   */
  p4Input: EventEmitter;
  /**
   * Emitted when the value has changed..
   */
  p4Change: EventEmitter;
  /**
   * Emitted when the input loses focus.
   */
  p4Blur: EventEmitter;
  /**
   * Emitted when the input has focus.
   */
  p4Focus: EventEmitter;
  mode: 'edit' | 'read';
  searchString: string;
  /**
   * Sets focus on the native `input` in `ion-input`. Use this method instead of the global
   * `input.focus()`.
   */
  setFocus(): Promise<void>;
  /**
   * Sets blur on the native `input` in `ion-input`. Use this method instead of the global
   * `input.blur()`.
   */
  setBlur(): Promise<void>;
  optionsWatcher(newValue: any[] | string): void;
  configWatcher(newValue: any[] | string): void;
  private onChange;
  private onInput;
  getOptionLabelByValue(value: any): any;
  private getOptions;
  private setEditable;
  private onBlur;
  private onFocus;
  private getItemValue;
  private getItemLabel;
  private getModeIcon;
  getComponentStyleClasses(): string;
  private getValue;
  private hasValue;
  componentWillLoad(): Promise<void>;
  render(): any;
}

import { EventEmitter } from '../../stencil-public-runtime';
export declare class P4Input {
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
  value?: string | number | null;
  /**
   * The input field size.
   * Possible values are: `"sm"`, `"md"`, `"lg"`. Defaults to `"md"`.
   */
  size: 'sm' | 'md' | 'lg';
  /**
   * Input field variants to add additional styling
   * Possible values are `"default"`, `"dashed"`. Defaults to `"default"`.
   */
  variant: 'default' | 'dashed';
  /**
   * The type of control to display. The default type is text.
   */
  type: ('text' | 'password' | 'number' | 'email' | 'tel');
  /**
   * If true, the user cannot interact with the button. Defaults to `false`.
   */
  disabled: boolean;
  /**
   * If true, required icon is show. Defaults to `false`.
   */
  required: boolean;
  /**
   * If `true`, a clear icon will appear in the input when there is a value. Clicking it clears the input.
   */
  clearInput: boolean;
  /**
   * Set the amount of time, in milliseconds, to wait to trigger the `p4Change` event after each keystroke.
   */
  debounce: number;
  /**
   * Indicates whether the value of the control can be automatically completed by the browser.
   */
  autocomplete: 'on' | 'off';
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
  private getCssClasses;
  private onInput;
  private onBlur;
  private onFocus;
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
  /**
   * Update the native input element when the value changes
   */
  protected valueChanged(): void;
  protected debounceChanged(): void;
  private clearTextOnEnter;
  private clearTextInput;
  componentWillLoad(): void;
  connectedCallback(): void;
  disconnectedCallback(): void;
  private getValue;
  render(): any;
}

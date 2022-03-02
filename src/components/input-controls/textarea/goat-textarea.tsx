import {
  Component,
  ComponentInterface,
  Element,
  Event,
  EventEmitter,
  h,
  Host,
  Method,
  Prop,
  State,
  Watch,
} from '@stencil/core';
import { debounceEvent, getGoatIndex } from '../../../utils/utils';

/**
 * @name Textarea
 * @description Enables native inputs to be used within a Form field.
 * @example <goat-textarea placeholder="Enter some description over here"></goat-textarea>
 */
@Component({
  tag: 'goat-textarea',
  styleUrl: 'goat-textarea.scss',
  shadow: true,
})
export class GoatTextarea implements ComponentInterface, InputComponentInterface {

  gid: string = getGoatIndex();

  /**
   * The input field name.
   */
  @Prop() name: string = `goat-input-${this.gid}`;

  /**
   * The input field placeholder.
   */
  @Prop() placeholder: string;

  /**
   * The input field value.
   */
  @Prop({ mutable: true }) value: string;

  /**
   * The button size.
   * Possible values are: `"sm"`, `"md"`, `"lg"`. Defaults to `"md"`.
   */
  @Prop() size: 'sm' | 'md' | 'lg' = 'md';

  /**
   * Button variants
   * Possible values are `"default"`, `"dashed"`. Defaults to `"default"`.
   */
  @Prop() variant: 'default' | 'dashed' = 'default';

  /**
   * If true, the form will be in inline format. Defaults to `false`.
   */
  @Prop() inline: boolean = false;


  /**
   * If true, the user cannot interact with the button. Defaults to `false`.
   */
  @Prop() disabled: boolean = false;


  /**
   * If true, required icon is show. Defaults to `false`.
   */
  @Prop() required: boolean = false;


  /**
   * Set the amount of time, in milliseconds, to wait to trigger the `goat:change` event after each keystroke.
   */
  @Prop() debounce = 300;


  @Prop() actions: any[] = [];


  /**
   * Emitted when a keyboard input occurred.
   */
  @Event({ eventName: 'goat:input' }) p4Input: EventEmitter;

  /**
   * Emitted when the value has changed..
   */
  @Event({ eventName: 'goat:change' }) p4Change: EventEmitter;

  /**
   * Emitted when the input loses focus.
   */
  @Event({ eventName: 'goat:blur' }) p4Blur: EventEmitter;

  /**
   * Emitted when the input has focus.
   */
  @Event({ eventName: 'goat:focus' }) p4Focus: EventEmitter;

  /**
   * Emitted when the action button is clicked.
   */
  @Event({ eventName: 'goat:action-click' }) p4ActionClick: EventEmitter;

  @Element() elm!: HTMLElement;
  private nativeInput?: HTMLTextAreaElement;
  private tabindex?: string | number;
  @State() hasFocus = false;

  getCssClasses() {
    const cls = ['input-container textarea'];
    if (this.disabled)
      cls.push('input-disabled');
    return cls.join(' ');
  }

  private inputHandler = (ev: Event) => {
    const input = ev.target as HTMLInputElement | null;
    if (input) {
      this.value = input.value || '';
    }
    this.p4Input.emit(ev as KeyboardEvent);
    this.p4Change.emit(ev as KeyboardEvent);
  };

  private blurHandler = (ev: FocusEvent) => {
    this.hasFocus = false;
    this.p4Blur.emit(ev);
  };

  private focusHandler = (ev: FocusEvent) => {
    this.hasFocus = true;
    this.p4Focus.emit(ev);
  };


  /**
   * Sets focus on the native `input` in `ion-input`. Use this method instead of the global
   * `input.focus()`.
   */
  @Method()
  async setFocus() {
    if (this.nativeInput) {
      this.nativeInput.focus();
    }
  }

  /**
   * Sets blur on the native `input` in `ion-input`. Use this method instead of the global
   * `input.blur()`.
   */
  @Method()
  async setBlur() {
    if (this.nativeInput) {
      this.nativeInput.blur();
    }
  }

  @Watch('debounce')
  protected debounceChanged() {
    this.p4Change = debounceEvent(this.p4Change, this.debounce);
  }


  componentWillLoad() {
    // If the ion-input has a tabindex attribute we get the value
    // and pass it down to the native input, then remove it from the
    // ion-input to avoid causing tabbing twice on the same element
    if (this.elm.hasAttribute('tabindex')) {
      const tabindex = this.elm.getAttribute('tabindex');
      this.tabindex = tabindex !== null ? tabindex : undefined;
      this.elm.removeAttribute('tabindex');
    }
  }

  connectedCallback() {
    this.debounceChanged();
    document.dispatchEvent(new CustomEvent('p4InputDidLoad', {
      detail: this.elm,
    }));
  }

  disconnectedCallback() {
    document.dispatchEvent(new CustomEvent('p4InputDidUnload', {
      detail: this.elm,
    }));
  }

  private getValue(): string {
    return (this.value || '').toString();
  }

  private hasValue(): boolean {
    return this.getValue().length > 0;
  }

  @Method()
  async getGid() {
    return this.gid;
  }

  render() {

    const value = this.getValue();

    return (
      <Host aria-disabled={this.disabled ? 'true' : null} size={this.size} focused={this.hasFocus}
            has-value={this.hasValue()}>
        <div class={this.getCssClasses()}>
             <textarea
               rows={4}
               ref={input => this.nativeInput = input}
               required={this.required}
               class='input input-native'
               name={this.name}
               aria-labelledby={`goat-input-${this.gid}-lbl`}
               placeholder={this.placeholder}
               value={value}
               tabindex={this.tabindex}
               onInput={this.inputHandler}
               onBlur={this.blurHandler}
               onFocus={this.focusHandler}
               disabled={this.disabled} />

        </div>
      </Host>
    );
  }

}

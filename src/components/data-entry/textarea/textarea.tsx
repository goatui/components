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
import { debounceEvent, getComponentIndex } from '../../../utils/utils';

/**
 * @name Textarea
 * @description Enables native inputs to be used within a Form field.
 * @category Form Inputs
 * @tags input, form
 * @example <goat-textarea placeholder="Enter some description over here"></goat-textarea>
 */
@Component({
  tag: 'goat-textarea',
  styleUrl: 'textarea.scss',
  shadow: true,
})
export class Textarea implements ComponentInterface, InputComponentInterface {

  gid: string = getComponentIndex();

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
  @Prop( {reflect: true}) size: 'sm' | 'md' | 'lg' = 'md';

  /**
   * If true, the user cannot interact with the button. Defaults to `false`.
   */
  @Prop({reflect: true}) disabled: boolean = false;

  /**
   * If true, the user read the value cannot modify it. Defaults to `false`.
   */
  @Prop({ reflect: true }) readonly : boolean = false;


  /**
   * The input state.
   * Possible values are: `"success"`, `"error"`, `"warning"`, 'default'. Defaults to `"default"`.
   */
  @Prop({ reflect: true }) state: 'success' | 'error' | 'warning' | 'default' = 'default';


  /**
   * If true, required icon is show. Defaults to `false`.
   */
  @Prop() required: boolean = false;


  /**
   * Set the amount of time, in milliseconds, to wait to trigger the `goat:change` event after each keystroke.
   */
  @Prop() debounce = 300;

  /**
   * If `true`, a clear icon will appear in the input when there is a value. Clicking it clears the input.
   */
  @Prop() clearable = false;


  @Prop( {reflect: true, mutable: true}) configAria: any = {};


  /**
   * Emitted when a keyboard input occurred.
   */
  @Event({ eventName: 'goat:input' }) goatInput: EventEmitter;

  /**
   * Emitted when the value has changed..
   */
  @Event({ eventName: 'goat:change' }) goatChange: EventEmitter;

  /**
   * Emitted when the input loses focus.
   */
  @Event({ eventName: 'goat:blur' }) goatBlur: EventEmitter;

  /**
   * Emitted when the input has focus.
   */
  @Event({ eventName: 'goat:focus' }) goatFocus: EventEmitter;

  /**
   * Emitted when the action button is clicked.
   */
  @Event({ eventName: 'goat:action-click' }) goatActionClick: EventEmitter;

  /**
   * Sets focus on the native `textarea` in `goat-textarea`. Use this method instead of the global
   * `textarea.focus()`.
   */
  @Method()
  async setFocus() {
    if (this.nativeInput) {
      this.nativeInput.focus();
      this.hasFocus = true;
    }
  }

  /**
   * Sets blur on the native `textarea` in `goat-textarea`. Use this method instead of the global
   * `textarea.blur()`.
   */
  @Method()
  async setBlur() {
    if (this.nativeInput) {
      this.nativeInput.blur();
      this.hasFocus = false;
    }
  }

  @Method()
  async getComponentId() {
    return this.gid;
  }

  @Watch('debounce')
  protected debounceChanged() {
    this.goatChange = debounceEvent(this.goatChange, this.debounce);
  }


  @Element() elm!: HTMLElement;
  private nativeInput?: HTMLTextAreaElement;
  private tabindex?: string | number;
  @State() hasFocus = false;
  @State() endSlotHasContent = false;


  private inputHandler = (ev: Event) => {
    const input = ev.target as HTMLInputElement | null;
    if (input) {
      this.value = input.value || '';
    }
    this.goatInput.emit(ev as KeyboardEvent);
    this.goatChange.emit(ev as KeyboardEvent);
  };

  private blurHandler = (ev: FocusEvent) => {
    this.hasFocus = false;
    this.goatBlur.emit(ev);
  };

  private focusHandler = (ev: FocusEvent) => {
    this.hasFocus = true;
    this.goatFocus.emit(ev);
  };


  private getValue(): string {
    return (this.value || '').toString();
  }

  private hasValue(): boolean {
    return this.getValue().length > 0;
  }

  private clearInput = (evt: Event) => {
    this.nativeInput.value = '';
    this.inputHandler(evt);
  };

  private keyDownHandler = (ev: KeyboardEvent) => {
    if (ev.key === 'Escape' && this.clearable) {
      this.clearInput(ev);
    }
  };

  componentWillLoad() {
    // If the ion-input has a tabindex attribute we get the value
    // and pass it down to the native input, then remove it from the
    // ion-input to avoid causing tabbing twice on the same element
    if (this.elm.hasAttribute('tabindex')) {
      const tabindex = this.elm.getAttribute('tabindex');
      this.tabindex = tabindex !== null ? tabindex : undefined;
      this.elm.removeAttribute('tabindex');
    }
    this.elm.getAttributeNames().forEach((name: string) => {
      if (name.includes('aria-')) {
        this.configAria[name] = this.elm.getAttribute(name);
        this.elm.removeAttribute(name);
      }
    });
    this.endSlotHasContent = !!this.elm.querySelector('[slot="end"]');
  }

  connectedCallback() {
    this.debounceChanged();
  }

  render() {
    return (
      <Host has-focus={this.hasFocus} has-value={this.hasValue()}>
        <div class={{
          'input-container': true,
          'textarea': true,
          'disabled': this.disabled,
          'readonly': this.readonly,
          'has-focus': this.hasFocus,
          'end-slot-has-content': this.endSlotHasContent,
        }}>
             <textarea
               rows={4}
               ref={input => this.nativeInput = input}
               required={this.required}
               class='input input-native'
               name={this.name}
               placeholder={this.placeholder}
               value={this.value}
               tabindex={this.tabindex}
               onKeyDown={this.keyDownHandler}
               onInput={this.inputHandler}
               onBlur={this.blurHandler}
               onFocus={this.focusHandler}
               disabled={this.disabled}
               {...this.configAria}/>

          {this.clearable && this.hasValue() &&
            <goat-icon class='clear inherit input-action' name='close' onClick={this.clearInput} />}

          <div class='slot-container end'>
            <slot name='end' />
          </div>
        </div>
      </Host>
    );
  }

}

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
} from '@stencil/core';
import { getComponentIndex } from '../../../utils/utils';

/**
 * @name Date Picker
 * @category Form Inputs
 * @description Captures date input.
 * @example <goat-date-picker value='true'></goat-date-picker>
 */
@Component({
  tag: 'goat-date-picker',
  styleUrl: 'date-picker.scss',
  shadow: true,
})
export class DatePicker implements ComponentInterface {

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
   * The input field size.
   * Possible values are: `"sm"`, `"md"`, `"lg"`. Defaults to `"md"`.
   */
  @Prop({ reflect: true }) size: 'sm' | 'md' | 'lg' = 'md';


  /**
   * If true, the user cannot interact with the button. Defaults to `false`.
   */
  @Prop({ reflect: true }) disabled: boolean = false;

  /**
   * If true, the user read the value cannot modify it. Defaults to `false`.
   */
  @Prop({ reflect: true }) readonly: boolean = false;

  /**
   * The input field value.
   */
  @Prop({ mutable: true }) value?: string | number | null = '';

  @Prop({ reflect: true, mutable: true }) configAria: any = {};


  /**
   * Emitted when a keyboard input occurred.
   */
  @Event({ eventName: 'goat:input' }) goatInput: EventEmitter;

  /**
   * Emitted when the value has changed.
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

  @Element() elm!: HTMLElement;
  private nativeInput?: HTMLInputElement;
  private tabindex?: string | number;
  @State() hasFocus = false;

  private hasValue(): boolean {
    return this.getValue().length > 0;
  }

  private getValue(): string {
    return (this.value || '').toString();
  }


  @Method()
  async getComponentId() {
    return this.gid;
  }

  /**
   * Sets focus on the native `input` in `goat-input`. Use this method instead of the global
   * `input.focus()`.
   */
  @Method()
  async setFocus() {
    if (this.nativeInput) {
      this.nativeInput.focus();
      this.hasFocus = true;
    }
  }

  /**
   * Sets blur on the native `input` in `goat-input`. Use this method instead of the global
   * `input.blur()`.
   */
  @Method()
  async setBlur() {
    if (this.nativeInput) {
      this.nativeInput.blur();
      this.hasFocus = false;
    }
  }


  componentWillLoad() {
    // If the ion-input has a tabindex attribute we get the value
    // and pass it down to the native input, then remove it from the
    // goat-input to avoid causing tabbing twice on the same element
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
  }

  private inputHandler = (ev: Event) => {
    const input = ev.target as HTMLInputElement | null;
    const oldValue = this.value;
    if (input) {
      this.value = input.value;
    }
    this.goatInput.emit(ev as KeyboardEvent);
    if (oldValue !== this.value) {
      this.goatChange.emit(ev as KeyboardEvent);
    }
  };

  private keyDownHandler = (ev: KeyboardEvent) => {
    if (ev.key === 'Escape') {
      this.clearInput(ev);
    }
  };

  private blurHandler = (ev: FocusEvent) => {
    this.hasFocus = false;
    this.goatBlur.emit(ev);
  };

  private focusHandler = (ev: FocusEvent) => {
    this.hasFocus = true;
    this.goatFocus.emit(ev);
  };

  private clearInput = (evt: Event) => {
    this.nativeInput.value = '';
    this.inputHandler(evt);
  };


  render() {
    return (
      <Host has-focus={this.hasFocus}
            has-value={this.hasValue()}>
        <div class={{
          'input-container': true,
          'disabled': this.disabled,
          'has-focus': this.hasFocus,
        }}>
          <input type='date'
                 tabindex={this.tabindex}
                 class='input input-native'
                 disabled={this.disabled}
                 readonly={this.readonly}
                 onKeyDown={this.keyDownHandler}
                 onInput={this.inputHandler}
                 onBlur={this.blurHandler}
                 onFocus={this.focusHandler}/>
        </div>
      </Host>
    );
  }

}
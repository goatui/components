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


@Component({
  tag: 'goat-input',
  styleUrl: 'goat-input.scss',
  shadow: true,
})
export class GoatInput implements ComponentInterface, InputComponentInterface {

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
  @Prop({ mutable: true }) value?: string | number | null = '';

  /**
   * The input field size.
   * Possible values are: `"sm"`, `"md"`, `"lg"`. Defaults to `"md"`.
   */
  @Prop() size: 'sm' | 'md' | 'lg' = 'md';

  /**
   * The input state.
   * Possible values are: `"success"`, `"error"`, `"warning"`, 'default'. Defaults to `"default"`.
   */
  @Prop() state: 'success' | 'error' | 'warning' | 'default' = 'default';

  /**
   * The type of control to display.
   * Possible values are: `"text"`, `"password"`, `"number"`, `"email"`, `"tel"`. Defaults to `"text"`.
   */
  @Prop() type: ('text' | 'password' | 'number' | 'email' | 'tel') = 'text';

  /**
   * If true, the user cannot interact with the button. Defaults to `false`.
   */
  @Prop() disabled: boolean = false;


  /**
   * If true, required icon is show. Defaults to `false`.
   */
  @Prop() required: boolean = false;

  /**
   * If `true`, a clear icon will appear in the input when there is a value. Clicking it clears the input.
   */
  @Prop() clearable = false;

  /**
   * Set the amount of time, in milliseconds, to wait to trigger the `goatChange` event after each keystroke.
   */
  @Prop() debounce = 300;

  /**
   * Indicates whether the value of the control can be automatically completed by the browser.
   */
  @Prop() autocomplete: 'on' | 'off' = 'off';


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


  /**
   * Emitted when the action button is clicked.
   */
  @Event({ eventName: 'goat:action-click' }) goatActionClick: EventEmitter;


  @Element() elm!: HTMLElement;
  private nativeInput?: HTMLInputElement;
  private tabindex?: string | number;

  @State() startSlotHasContent = false;
  @State() endSlotHasContent = false;
  @State() hasFocus = false;


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
    if (ev.key === 'Enter') {
      this.goatInput.emit(ev);
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

  /**
   * Sets focus on the native `input` in `goat-input`. Use this method instead of the global
   * `input.focus()`.
   */
  @Method()
  async setFocus() {
    if (this.nativeInput) {
      this.nativeInput.focus();
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
    }
  }

  /**
   * Update the native input element when the value changes
   */
  @Watch('value')
  protected valueChanged() {
    let value = this.value;
    if (this.type === 'number') {
      if (value)
        this.value = JSON.parse(value + '');
    }
  }


  @Watch('debounce')
  protected debounceChanged() {
    this.goatChange = debounceEvent(this.goatChange, this.debounce);
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

    this.startSlotHasContent = !!this.elm.querySelector('[slot="start"]');
    this.endSlotHasContent = !!this.elm.querySelector('[slot="end"]');
  }


  connectedCallback() {
    this.debounceChanged();
    document.dispatchEvent(new CustomEvent('goatInputDidLoad', {
      detail: this.elm,
    }));
  }

  disconnectedCallback() {
    document.dispatchEvent(new CustomEvent('goatInputDidUnload', {
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

    return (
      <Host type={this.type}
            focused={this.hasFocus}
            required={this.required}
            size={this.size}
            state={this.state}
            has-value={this.hasValue()}
            disabled={this.disabled}>
        <div class={{
          'input-container': true,
          'input-disabled': this.disabled,
          'start-slot-has-content': this.startSlotHasContent,
          'end-slot-has-content': this.endSlotHasContent,
        }}>

          <div class='slot-wrapper start'>
            <slot name='start' />
          </div>

          <input
            class='input input-native'
            name={this.name}
            aria-labelledby={`goat-input-${this.gid}-lbl`}
            ref={input => this.nativeInput = input}
            type={this.type}
            placeholder={this.placeholder}
            autocomplete={this.autocomplete}
            value={this.value}
            tabindex={this.tabindex}
            required={this.required}
            onKeyDown={this.keyDownHandler}
            onInput={this.inputHandler}
            onBlur={this.blurHandler}
            onFocus={this.focusHandler}
            disabled={this.disabled} />

          {this.clearable ? <goat-icon type="x-circle-fill"/> : null}

          <div class='slot-wrapper end'>
            <slot name='end' />
          </div>



        </div>
      </Host>
    );
  }

}

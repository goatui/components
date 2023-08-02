import { Component, ComponentInterface, Element, Event, EventEmitter, h, Host, Method, Prop, State, Watch } from '@stencil/core';
import { debounceEvent, getComponentIndex } from '../../../utils/utils';

/**
 * @name Number
 * @description Enables native inputs to be used within a Form field.
 * @category Form Inputs
 * @tags input, form
 * @example <goat-number value="100"></goat-input>
 */
@Component({
  tag: 'goat-number',
  styleUrl: 'number.scss',
  shadow: true,
})
export class Number implements ComponentInterface, InputComponentInterface {
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
  @Prop({ mutable: true }) value?: number | null = null;

  /**
   * The input field size.
   * Possible values are: `"sm"`, `"md"`, `"lg"`. Defaults to `"md"`.
   */
  @Prop({ reflect: true }) size: 'sm' | 'md' | 'lg' = 'md';

  /**
   * The input state.
   * Possible values are: `"success"`, `"error"`, `"warning"`, 'default'. Defaults to `"default"`.
   */
  @Prop({ reflect: true }) state: 'success' | 'error' | 'warning' | 'default' = 'default';

  /**
   * If true, the user cannot interact with the button. Defaults to `false`.
   */
  @Prop({ reflect: true }) disabled: boolean = false;

  @Prop({ reflect: true }) hideActions: boolean = false;

  /**
   * If true, the user read the value cannot modify it. Defaults to `false`.
   */
  @Prop({ reflect: true }) readonly: boolean = false;

  /**
   * If true, required icon is show. Defaults to `false`.
   */
  @Prop({ reflect: true }) required: boolean = false;

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
  private nativeElement?: HTMLInputElement;
  private tabindex?: string | number;

  @State() startSlotHasContent = false;
  @State() endSlotHasContent = false;
  @State() hasFocus = false;
  @State() passwordVisible = false;

  private inputHandler = (ev: Event) => {
    const input = ev.target as HTMLInputElement | null;
    const oldValue = this.value;
    if (input) {
      if (input.value === '' || input.value === undefined) {
        this.value = null;
      } else {
        this.value = JSON.parse(input.value);
      }
    }
    this.goatInput.emit(ev as KeyboardEvent);
    if (oldValue !== this.value) {
      this.goatChange.emit(ev as KeyboardEvent);
    }
  };

  private keyDownHandler = (ev: KeyboardEvent) => {
    if (ev.key === 'Escape' && this.clearable) {
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
    this.nativeElement.value = null;
    this.inputHandler(evt);
  };

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
    if (this.nativeElement) {
      this.nativeElement.focus();
      this.hasFocus = true;
    }
  }

  /**
   * Sets blur on the native `input` in `goat-input`. Use this method instead of the global
   * `input.blur()`.
   */
  @Method()
  async setBlur() {
    if (this.nativeElement) {
      this.nativeElement.blur();
      this.hasFocus = false;
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
    this.elm.getAttributeNames().forEach((name: string) => {
      if (name.includes('aria-')) {
        this.configAria[name] = this.elm.getAttribute(name);
        this.elm.removeAttribute(name);
      }
    });
    this.startSlotHasContent = !!this.elm.querySelector('[slot="start"]');
    this.endSlotHasContent = !!this.elm.querySelector('[slot="end"]');
  }

  connectedCallback() {
    this.debounceChanged();
  }

  private getValue(): string {
    return (this.value || '').toString();
  }

  private hasValue(): boolean {
    return this.getValue().length > 0;
  }

  private decrease(ev) {
    if (this.value === undefined || this.value === null) this.value = 0;
    if (typeof this.value === 'number') {
      this.value = (this.value || 0) - 1;
      this.goatChange.emit(ev);
    }
  }

  private increment(ev) {
    if (this.value === undefined || this.value === null) this.value = 0;
    if (typeof this.value === 'number') {
      this.value = (this.value || 0) + 1;
      this.goatChange.emit(ev);
    }
  }

  render() {
    return (
      <Host has-focus={this.hasFocus} has-value={this.hasValue()}>
        <div
          class={{
            'input-container': true,
            'disabled': this.disabled,
            'has-focus': this.hasFocus,
            'start-slot-has-content': this.startSlotHasContent,
            'end-slot-has-content': this.endSlotHasContent,
          }}
        >
          <div class="slot-container start">
            <slot name="start" />
          </div>

          <input
            class="input input-native"
            name={this.name}
            ref={input => (this.nativeElement = input)}
            type='number'
            placeholder={this.placeholder}
            autocomplete={this.autocomplete}
            value={this.value}
            tabindex={this.tabindex}
            readonly={this.readonly}
            required={this.required}
            onKeyDown={this.keyDownHandler}
            onInput={this.inputHandler}
            onBlur={this.blurHandler}
            onFocus={this.focusHandler}
            disabled={this.disabled}
            {...this.configAria}
          />

          {this.clearable && this.hasValue() &&
            <goat-button class="clear input-action color-secondary" variant="ghost" icon="close" onClick={this.clearInput} />
            }


          {!this.readonly && !this.disabled && !this.hideActions && <goat-button class="color-secondary input-action" simple={true} icon="subtract" variant="ghost" size="none" onGoat:click={(evt) => {
            this.decrease(evt);
          }}></goat-button>}

          {!this.readonly && !this.disabled && !this.hideActions && <goat-button class="color-secondary input-action" simple={true} icon="add" variant="ghost" size="none" onGoat:click={(evt) => {
            this.increment(evt);
          }}></goat-button>}


          <div class="slot-container end">
            <slot name="end" />
          </div>

        </div>
      </Host>
    );
  }
}

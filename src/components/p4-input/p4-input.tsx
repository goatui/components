import { Component, Element, Event, EventEmitter, h, Host, Method, Prop, State, Watch } from '@stencil/core';
import { debounceEvent, findItemLabel } from '../../utils/utils';

let inputIds = 0;

@Component({
  tag: 'p4-input',
  styleUrl: 'p4-input.scss',
  shadow: true,
})
export class P4Input {
  @Element() el!: HTMLElement;

  private nativeInput?: HTMLInputElement;
  private tabindex?: string | number;
  private inputId = `p4-input-${inputIds++}`;
  @State() hasFocus = false;

  /**
   * The input field name.
   */
  @Prop() name: string = this.inputId;

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
   * Input field variants to add additional styling
   * Possible values are `"default"`, `"dashed"`. Defaults to `"default"`.
   */
  @Prop() variant: 'default' | 'dashed' = 'default';

  /**
   * The type of control to display. The default type is text.
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
  @Prop() clearInput = false;

  /**
   * Set the amount of time, in milliseconds, to wait to trigger the `p4Change` event after each keystroke.
   */
  @Prop() debounce = 0;

  /**
   * Indicates whether the value of the control can be automatically completed by the browser.
   */
  @Prop() autocomplete: 'on' | 'off' = 'off';


  /**
   * Emitted when a keyboard input occurred.
   */
  @Event() p4Input: EventEmitter;

  /**
   * Emitted when the value has changed..
   */
  @Event() p4Change: EventEmitter;

  /**
   * Emitted when the input loses focus.
   */
  @Event() p4Blur: EventEmitter;

  /**
   * Emitted when the input has focus.
   */
  @Event() p4Focus: EventEmitter;


  private getCssClasses() {
    const cls = ['input-component'];
    cls.push('variant-' + this.variant);
    cls.push('size-' + this.size);
    cls.push('type-' + this.type);
    if (this.required)
      cls.push('required');
    if (this.disabled)
      cls.push('disabled');
    return cls.join(' ') + ' ';
  }


  private onInput = (ev: Event) => {
    const input = ev.target as HTMLInputElement | null;
    if (input) {
      this.value = input.value || '';
    }
    this.p4Input.emit(ev as KeyboardEvent);
  };

  private onBlur = (ev: FocusEvent) => {
    this.hasFocus = false;
    this.p4Blur.emit(ev);
  };

  private onFocus = (ev: FocusEvent) => {
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

  /**
   * Update the native input element when the value changes
   */
  @Watch('value')
  protected valueChanged() {
    this.p4Change.emit({ value: this.value == null ? this.value : this.value.toString() });
  }

  @Watch('debounce')
  protected debounceChanged() {
    this.p4Change = debounceEvent(this.p4Change, this.debounce);
  }

  private clearTextOnEnter = (ev: KeyboardEvent) => {
    if (ev.key === 'Enter') {
      this.clearTextInput(ev);
    }
  };

  private clearTextInput = (ev?: Event) => {
    if (this.clearInput && !this.disabled && ev) {
      ev.preventDefault();
      ev.stopPropagation();

      // Attempt to focus input again after pressing clear button
      this.setFocus();
    }

    this.value = '';

    /**
     * This is needed for clearOnEdit
     * Otherwise the value will not be cleared
     * if user is inside the input
     */
    if (this.nativeInput) {
      this.nativeInput.value = '';
    }
  };

  componentWillLoad() {
    // If the ion-input has a tabindex attribute we get the value
    // and pass it down to the native input, then remove it from the
    // ion-input to avoid causing tabbing twice on the same element
    if (this.el.hasAttribute('tabindex')) {
      const tabindex = this.el.getAttribute('tabindex');
      this.tabindex = tabindex !== null ? tabindex : undefined;
      this.el.removeAttribute('tabindex');
    }
  }

  connectedCallback() {
    this.debounceChanged();
    document.dispatchEvent(new CustomEvent('p4InputDidLoad', {
      detail: this.el,
    }));
  }

  disconnectedCallback() {
    document.dispatchEvent(new CustomEvent('p4InputDidUnload', {
      detail: this.el,
    }));
  }

  private getValue(): string {
    return typeof this.value === 'number' ? this.value.toString() :
      (this.value || '').toString();
  }

  private hasValue(): boolean {
    return this.getValue().length > 0;
  }


  render() {
    const value = this.getValue();
    const labelId = this.inputId + '-lbl';
    const label = findItemLabel(this.el);
    if (label) {
      label.id = labelId;
      if (this.required)
        label.classList.add('required');
    }

    return (
      <Host aria-disabled={this.disabled ? 'true' : null}
            class={{ 'has-focus': this.hasFocus, 'has-value': this.hasValue() }}>
        <div class={this.getCssClasses()}>
          <input
            class="native-input"
            name={this.name}
            aria-labelledby={labelId}
            ref={input => this.nativeInput = input}
            type={this.type}
            placeholder={this.placeholder}
            autocomplete={this.autocomplete}
            value={value}
            tabindex={this.tabindex}
            required={this.required}
            onInput={this.onInput}
            onBlur={this.onBlur}
            onFocus={this.onFocus}
            disabled={this.disabled} />
          <div class="input-actions">
            {(this.clearInput && !this.disabled && this.hasValue()) && <button
              aria-label="reset"
              type="button"
              class="input-clear-icon"
              onTouchStart={this.clearTextInput}
              onMouseDown={this.clearTextInput}
              onKeyDown={this.clearTextOnEnter}
            >
              <p4-icon type="x" size="1.1rem" class="icon" />
            </button>}
          </div>
        </div>
      </Host>
    );
  }

}

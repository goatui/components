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
  @Prop() clearInput = false;

  /**
   * Set the amount of time, in milliseconds, to wait to trigger the `p4Change` event after each keystroke.
   */
  @Prop() debounce = 300;

  /**
   * Indicates whether the value of the control can be automatically completed by the browser.
   */
  @Prop() autocomplete: 'on' | 'off' = 'off';


  @Prop() actions: any[] = [];


  /**
   * Emitted when a keyboard input occurred.
   */
  @Event({ eventName: 'p4:input' }) p4Input: EventEmitter;

  /**
   * Emitted when the value has changed.
   */
  @Event({ eventName: 'p4:change' }) p4Change: EventEmitter;

  /**
   * Emitted when the input loses focus.
   */
  @Event({ eventName: 'p4:blur' }) p4Blur: EventEmitter;

  /**
   * Emitted when the input has focus.
   */
  @Event({ eventName: 'p4:focus' }) p4Focus: EventEmitter;


  /**
   * Emitted when the action button is clicked.
   */
  @Event({ eventName: 'p4:action-click' }) p4ActionClick: EventEmitter;


  private inputHandler = (ev: Event) => {
    const input = ev.target as HTMLInputElement | null;
    if (input) {
      this.value = input.value;
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

  private actionClickHandler = (action) => {
    this.p4ActionClick.emit(action);
  };

  /**
   * Sets focus on the native `input` in `p4-input`. Use this method instead of the global
   * `input.focus()`.
   */
  @Method()
  async setFocus() {
    if (this.nativeInput) {
      this.nativeInput.focus();
    }
  }

  /**
   * Sets blur on the native `input` in `p4-input`. Use this method instead of the global
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
    this.p4Change = debounceEvent(this.p4Change, this.debounce);
  }

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

  private hasValue(): boolean {
    const value = (typeof this.value) === 'number' ? this.value.toString() :
      (this.value || '').toString();
    return value.length > 0;
  }

  private getActionIconSize() {
    if (this.size == 'lg')
      return '1.5rem';
    if (this.size == 'sm')
      return '1rem';
    return '1.25rem';
  }


  render() {
    const labelId = this.inputId + '-lbl';
    const label = findItemLabel(this.el);
    const actions = this.actions;
    if (label) {
      label.id = labelId;
      label.setAttribute('required', this.required + '');
    }

    return (
      <Host aria-disabled={this.disabled ? 'true' : null}
            class={{ 'has-focus': this.hasFocus, 'has-value': this.hasValue() }}>
        <div class={{
          'input': true,
          [`input-variant-${this.variant}`]: true,
          [`input-type-${this.type}`]: true,
          [`input-size-${this.size}`]: true,
          'input-has-actions': !!actions.length,
          'input-disabled': this.disabled,
        }}>
          <input
            class='native-input'
            name={this.name}
            aria-labelledby={labelId}
            ref={input => this.nativeInput = input}
            type={this.type}
            placeholder={this.placeholder}
            autocomplete={this.autocomplete}
            value={this.value}
            tabindex={this.tabindex}
            required={this.required}
            onInput={this.inputHandler}
            onBlur={this.blurHandler}
            onFocus={this.focusHandler}
            disabled={this.disabled} />
          <div class='input-actions'>
            {actions.map((action) => {
              return <button type='button'
                             class={{
                               'action-button': true,
                               'action-button-disabled': action.disabled,
                             }}
                             disabled={!action.eventName || action.disabled}
                             onClick={() => this.actionClickHandler(action)}>
                <p4-icon type={action.icon} class='action-icon' size={this.getActionIconSize()} />
              </button>;
            })}
          </div>
        </div>
      </Host>
    );
  }

}

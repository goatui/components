import { Component, Element, Event, EventEmitter, h, Host, Method, Prop, State, Watch } from '@stencil/core';
import { debounceEvent, findItemLabel } from '../../../utils/utils';

let index = 0;

@Component({
  tag: 'goat-input',
  styleUrl: 'goat-input.scss',
  shadow: true,
})
export class GoatInput {
  private id = ++index;
  @Element() elm!: HTMLElement;

  private nativeInput?: HTMLInputElement;
  private tabindex?: string | number;
  @State() startSlotHasContent = false;
  @State() endSlotHasContent = false;
  @State() hasFocus = false;

  /**
   * The input field name.
   */
  @Prop() name: string = `goat-input-${this.id}`;

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
  @Event({ eventName: 'goat:input' }) p4Input: EventEmitter;

  /**
   * Emitted when the value has changed.
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


  private inputHandler = (ev: Event) => {
    const input = ev.target as HTMLInputElement | null;
    const oldValue = this.value;
    if (input) {
      this.value = input.value;
    }
    this.p4Input.emit(ev as KeyboardEvent);
    if (oldValue !== this.value) {
      this.p4Change.emit(ev as KeyboardEvent);
    }
  };

  private keyDownHandler = (ev: KeyboardEvent) => {
    if (ev.key === 'Enter') {
      this.p4Input.emit(ev);
    }
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
    if (!action.disabled)
      this.p4ActionClick.emit(action);
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
    this.p4Change = debounceEvent(this.p4Change, this.debounce);
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
    const label = findItemLabel(this.elm);
    if (label) {
      label.id = `goat-input-${this.id}-lbl`;
      label.setAttribute('required', this.required + '');
    }

    this.startSlotHasContent = !!this.elm.querySelector('[slot="start"]');
    this.endSlotHasContent = !!this.elm.querySelector('[slot="end"]');
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

  private getActionIconSize() {
    if (this.size == 'lg')
      return '1.5rem';
    if (this.size == 'sm')
      return '1rem';
    return '1.25rem';
  }


  render() {
    const labelId = `goat-input-${this.id}-lbl`;
    const label = findItemLabel(this.elm);
    const actions = this.actions;
    if (label) {
      label.id = labelId;
      label.setAttribute('required', this.required + '');
    }

    return (
      <Host aria-disabled={this.disabled ? 'true' : null}
            focused={this.hasFocus}>
        <div class={{
          'input': true,
          [`input-type-${this.type}`]: true,
          [`input-size-${this.size}`]: true,
          'input-has-actions': !!actions.length,
          'input-disabled': this.disabled,
          'start-slot-has-content': this.startSlotHasContent,
          'end-slot-has-content': this.endSlotHasContent,
        }}>
          <div class='slot-container start'>
            <slot name='start' />
          </div>
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
            onKeyDown={this.keyDownHandler}
            onInput={this.inputHandler}
            onBlur={this.blurHandler}
            onFocus={this.focusHandler}
            disabled={this.disabled} />

          <div class='slot-container end'>
            <slot name='end' />
          </div>
          <div class='input-actions'>
            {actions.map((action) => {
              return <button type='button'
                             class={{
                               'action-button': true,
                               'action-button-disabled': action.disabled,
                             }}
                             aria-disabled={action.disabled}
                             onClick={() => this.actionClickHandler(action)}>
                <goat-icon type={action.icon} class='action-icon' size={this.getActionIconSize()} />
              </button>;
            })}
          </div>
        </div>
      </Host>
    );
  }

}

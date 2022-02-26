import { Component, Element, Event, EventEmitter, h, Host, Method, Prop, State, Watch } from '@stencil/core';
import { debounceEvent, findItemLabel } from '../../../utils/utils';

let inputIds = 0;

@Component({
  tag: 'goat-textarea',
  styleUrl: 'goat-textarea.scss',
  shadow: true,
})
export class GoatTextarea {
  @Element() elm!: HTMLElement;

  private nativeInput?: HTMLTextAreaElement;
  private tabindex?: string | number;
  private inputId = `goat-textarea-${inputIds++}`;
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
  @Prop({mutable: true}) value: string;

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

  private actionClickHandler = (action) => {
    this.p4ActionClick.emit(action);
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

  private getActionIconSize() {
    if (this.size == 'lg')
      return '1.5rem';
    if (this.size == 'sm')
      return '1rem';
    return '1.25rem';
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


  render() {
    const value = this.getValue();
    const labelId = this.inputId + '-lbl';
    const label = findItemLabel(this.elm);
    const actions = this.actions;
    if (label) {
      label.id = labelId;
      label.setAttribute('required', this.required + '');
    }

    return (
      <Host aria-disabled={this.disabled ? 'true' : null} size={this.size} focused={this.hasFocus} has-value={this.hasValue()}>
        <div class={this.getCssClasses()}>
             <textarea
               rows={4}
               ref={input => this.nativeInput = input}
               required={this.required}
               class="input input-native"
               name={this.name}
               aria-labelledby={labelId}
               placeholder={this.placeholder}
               value={value}
               tabindex={this.tabindex}
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
                <goat-icon type={action.icon} class='action-icon' size={this.getActionIconSize()} />
              </button>;
            })}
          </div>
        </div>
      </Host>
    );
  }

}

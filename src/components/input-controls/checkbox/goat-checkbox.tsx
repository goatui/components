import { Component, ComponentInterface, Event, EventEmitter, h, Host, Method, Prop, State } from '@stencil/core';

@Component({
  tag: 'goat-checkbox',
  styleUrl: 'goat-checkbox.scss',
  shadow: true,
})
export class GoatCheckbox implements ComponentInterface{

  private nativeInput?: HTMLInputElement;
  private iconContainer?: HTMLElement;
  @State() hasFocus = false;
  @State() animate = true;

  /**
   * The checkbox label.
   */
  @Prop() label: string;

  /**
   * The input field value.
   */
  @Prop({ mutable: true }) value: boolean = false;

  /**
   * The button size.
   * Possible values are: `"sm"`, `"md"`, `"lg"`. Defaults to `"md"`.
   */
  @Prop() size: 'sm' | 'md' | 'lg' = 'md';

  /**
   * If true, required icon is show. Defaults to `false`.
   */
  @Prop() required: boolean = false;

  /**
   * If true, the user cannot interact with the button. Defaults to `false`.
   */
  @Prop() disabled: boolean = false;

  /**
   * On change of input a CustomEvent 'goat:change' will be triggered. Event details contains parent event, oldValue, newValue of input.
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


  private clickHandler = (ev: MouseEvent | KeyboardEvent) => {
    if (!this.disabled) {
      this.value = !JSON.parse(this.nativeInput.value);
      this.goatChange.emit(ev);
      this.iconContainer.focus();
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

  getCheckboxSize() {
    let size;
    if (!this.size || this.size === 'md')
      size = '1.25rem';
    else if (this.size === 'lg')
      size = '1.5rem';
    else if (this.size === 'sm')
      size = '1rem';
    return size;
  }

  render() {
    return (
      <Host focused={this.hasFocus} size={this.size} disabled={this.disabled}>
        <label class={{
          'checkbox': true,
          'checkbox-checked': this.value,
        }}>
          <div class='box'
               tabindex='0'
               ref={elm => this.iconContainer = elm}
               onKeyUp={(evt) => {
                 if (evt.keyCode === 13) {
                   this.clickHandler(evt);
                 }
               }}
               aria-disabled={this.disabled}
               onBlur={this.blurHandler}
               onFocus={this.focusHandler}>
            <div class={{
              'tick': true,
              'animate': this.animate,
            }} />
          </div>

          <input type='checkbox'
                 class='input-native'
                 value={this.value + ''}
                 required={this.required}
                 ref={elm => this.nativeInput = elm}
                 tabindex='-1'
                 onClick={this.clickHandler}
                 aria-disabled={this.disabled} />

          <div class='slot-container'>
            <slot />
          </div>

        </label>
      </Host>
    );
  }


}

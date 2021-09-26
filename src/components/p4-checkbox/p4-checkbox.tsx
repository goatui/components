import { Component, Event, EventEmitter, h, Host, Method, Prop, State } from '@stencil/core';

@Component({
  tag: 'p4-checkbox',
  styleUrl: 'p4-checkbox.scss',
  shadow: true,
})
export class P4Checkbox {

  private nativeInput?: HTMLInputElement;
  private iconContainer?: HTMLElement;
  @State() hasFocus = false;

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
   * On change of input a CustomEvent 'p4:change' will be triggered. Event details contains parent event, oldValue, newValue of input.
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


  private clickHandler = (ev: MouseEvent | KeyboardEvent) => {
    if (!this.disabled) {
      this.value = !JSON.parse(this.nativeInput.value);
      this.p4Change.emit(ev);
      this.iconContainer.focus();
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
      <Host focused={this.hasFocus} size={this.size}>
        <label class={{
          'checkbox': true,
          'checkbox-checked': this.value,
        }}>

          <div class='icon-container'
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
            {this.renderCheckBoxIcon()}
          </div>

          <input type='checkbox'
                 class='native-input'
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

  private renderCheckBoxIcon() {
    return <p4-icon type={this.value ? 'check-square-fill' : 'square'}
                    size={this.getCheckboxSize()}
                    class='checkbox-icon' />;

  }

}

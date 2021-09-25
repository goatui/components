import { Component, Event, EventEmitter, h, Host, Method, Prop, State } from '@stencil/core';

@Component({
  tag: 'p4-checkbox',
  styleUrl: 'p4-checkbox.scss',
  shadow: true,
})
export class P4Checkbox {

  private nativeInput?: HTMLInputElement;
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
      <Host class={{ 'has-focus': this.hasFocus }}>
        <label class={{
          'checkbox': true,
          'checkbox-disabled': this.disabled,
          [`checkbox-size-${this.size}`]: true,
        }}>

          <div class='icon-container'
               tabindex='0'
               onKeyUp={(evt) => {
                 if (evt.keyCode === 13) {
                   this.clickHandler(evt);
                 }
               }}
               aria-disabled={this.disabled}
               onBlur={this.blurHandler}
               onFocus={this.focusHandler}>
            {
              this.value &&
              <svg width={this.getCheckboxSize()} height={this.getCheckboxSize()} viewBox='0 0 24 24' fill='none'
                   xmlns='http://www.w3.org/2000/svg' class='icon square-checked'>
                <path d='M9 11L12 14L22 4' stroke='#0F172A' stroke-width='2' stroke-linecap='round'
                      stroke-linejoin='round' />
                <path
                  d='M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16'
                  stroke='#0F172A' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
              </svg>
            }

            {
              !this.value &&
              <svg width={this.getCheckboxSize()} height={this.getCheckboxSize()} viewBox='0 0 24 24' fill='none'
                   xmlns='http://www.w3.org/2000/svg' class='icon square'>
                <path
                  d='M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z'
                  stroke='#0F172A' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
              </svg>
            }
          </div>


          <input type='checkbox'
                 class='checkbox-input'
                 value={this.value + ''}
                 required={this.required}
                 ref={input => this.nativeInput = input}
                 tabindex='-1'
                 onClick={this.clickHandler}
                 aria-disabled={this.disabled} />

          {this.label && <span class='label'>{this.label}</span>}
        </label>
      </Host>
    );
  }

}

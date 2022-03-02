import {
  Component,
  ComponentInterface,
  Element,
  Event,
  EventEmitter,
  h,
  Host,
  Listen,
  Method,
  Prop,
  State,
} from '@stencil/core';
import { getGoatIndex } from '../../../utils/utils';

/**
 * @name Checkbox
 * @description Captures boolean input with an optional indeterminate mode.
 * @example <goat-checkbox value='true'>Want ice cream?</goat-checkbox>
 */
@Component({
  tag: 'goat-checkbox',
  styleUrl: 'goat-checkbox.scss',
  shadow: true,
})
export class GoatCheckbox implements ComponentInterface, InputComponentInterface {

  gid: string = getGoatIndex();

  /**
   * The checkbox label.
   */
  @Prop() label: string;

  /**
   * The input field value.
   */
  @Prop({ mutable: true }) value: boolean = false;

  @Prop({ mutable: true }) intermediate: boolean = false;

  @Prop() rounded: boolean = false;

  /**
   * The button size.
   * Possible values are: `"sm"`, `"md"`, `"lg"`. Defaults to `"md"`.
   */
  @Prop() size: 'sm' | 'md' | 'lg' = 'md';

  /**
   * If true, required icon is show. Defaults to `false`.
   */
  @Prop({ reflect: true }) required: boolean = false;

  /**
   * If true, the user cannot interact with the button. Defaults to `false`.
   */
  @Prop({ reflect: true }) disabled: boolean = false;

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

  @Method()
  async getGid() {
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

  @Listen('mouseup', { target: 'window' })
  windowMouseUp() {
    if (this.isActive)
      this.isActive = false;
  }

  @Listen('keyup', { target: 'window' })
  windowKeyUp(evt) {
    if (this.isActive && (evt.key == 'Enter' || evt.key == ' '))
      this.isActive = false;
  }

  private mouseDownHandler = () => {
    this.isActive = true;
  };

  private keyDownHandler = (evt) => {
    if (evt.key == 'Enter' || evt.key == ' ') this.isActive = true;
  };

  @Element() elm!: HTMLElement;
  private nativeInput?: HTMLInputElement;
  private iconContainer?: HTMLElement;
  private tabindex?: string | number = 0;
  @State() hasFocus = false;
  @State() animate = true;
  @State() isActive = false;

  private clickHandler = (ev: MouseEvent | KeyboardEvent) => {
    if (!this.disabled) {
      this.value = !JSON.parse(this.nativeInput.value);
      this.intermediate = false;
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

  componentWillLoad() {
    // If the ion-input has a tabindex attribute we get the value
    // and pass it down to the native input, then remove it from the
    // goat-input to avoid causing tabbing twice on the same element
    if (this.elm.hasAttribute('tabindex')) {
      const tabindex = this.elm.getAttribute('tabindex');
      this.tabindex = tabindex !== null ? tabindex : undefined;
      this.elm.removeAttribute('tabindex');
    }
  }

  render() {
    return (
      <Host has-focus={this.hasFocus} active={this.isActive}>
        <label class={{
          'checkbox': true,
          'state-checked': this.value,
          'state-intermediate': !this.value && this.intermediate,
          [`size-${this.size}`]: true,
          'has-focus': this.hasFocus,
          'active': this.isActive,
          'disabled': this.disabled,
          'required': this.required,
          'rounded': this.rounded,
        }}>
          <div class='box'
               tabindex={this.tabindex}
               ref={elm => this.iconContainer = elm}
               onKeyUp={(evt) => {
                 if (evt.keyCode === 13) {
                   this.clickHandler(evt);
                 }
               }}
               aria-disabled={this.disabled}
               onMouseDown={this.mouseDownHandler}
               onKeyDown={this.keyDownHandler}
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

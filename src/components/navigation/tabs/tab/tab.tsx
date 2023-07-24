import {
  Component,
  ComponentInterface,
  Element,
  Event,
  EventEmitter,
  h,
  Host,
  Listen, Method,
  Prop,
  State,
} from '@stencil/core';
import { getComponentIndex } from '../../../../utils/utils';


@Component({
  tag: 'goat-tab',
  styleUrl: 'tab.scss',
  shadow: true,
})
export class Tab implements ComponentInterface {

  gid: string = getComponentIndex();


  /**
   * Button selection state.
   */
  @Prop({ reflect: true }) selected: boolean = false;

  /**
   * If true, the user cannot interact with the button. Defaults to `false`.
   */
  @Prop({ reflect: true }) disabled: boolean = false;

  @Prop() disabledReason: string = '';
  /**
   * Icon which will displayed on button.
   * Possible values are bootstrap icon names.
   */
  @Prop() icon: string;


  @Prop() label: string;
  @Prop() value: string;
  @Prop() target: string;

  /**
   * Show loader.
   */
  @Prop() showLoader: boolean = false;

  /**
   * On click of tab, a CustomEvent 'goat:tab-click' will be triggered.
   */
  @Event({ eventName: 'goat:tab-click' }) goatTabClick: EventEmitter;


  @State() hasFocus = false;
  @State() isActive = false;
  @State() slotHasContent = false;
  @Element() elm!: HTMLElement;
  private tabindex?: string | number;
  private nativeInput?: HTMLButtonElement;


  @Listen('mouseup', { target: 'window' })
  windowMouseUp() {
    if (this.isActive)
      this.isActive = false;
  }

  @Listen('keyup', { target: 'window' })
  windowKeyUp(evt) {
    if (this.isActive && (evt.key == ' '))
      this.isActive = false;
  }

  @Method()
  async setFocus() {
    if (this.nativeInput) {
      this.nativeInput.focus();
    }
  }

  @Method()
  async triggerClick() {
    if (this.nativeInput) {
      this.nativeInput.click();
    }
  }

  private clickHandler = () => {
    this.goatTabClick.emit({
      value: this.value,
      target: this.target,
    });
  };
  private blurHandler = () => {
    this.hasFocus = false;
  };

  private focusHandler = () => {
    this.hasFocus = true;
  };

  private mouseDownHandler = () => {
    this.isActive = true;
  };

  private keyDownHandler = (evt) => {
    if (evt.key == ' ') {
      this.isActive = true;
      this.clickHandler();
    }
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
    this.slotHasContent = this.elm.hasChildNodes();
  }

  private renderDisabledReason() {
    if (this.disabled && this.disabledReason)
      return <div id={`disabled-reason-${this.gid}`} role='tooltip' class='sr-only'>
        {this.disabledReason}
      </div>;
  }

  render() {

    return (<Host has-focus={this.hasFocus} active={this.isActive}>
      <div class={{
        tab: true,
        'disabled': this.disabled,
        'selected': this.selected,
        'has-focus': this.hasFocus,
        'active': this.isActive,
        'has-content': this.slotHasContent,
        'show-loader': this.showLoader,
      }}>
        <div class='tab-background' />
        <button
          class='native-button'
          tabindex={this.tabindex}
          ref={input => this.nativeInput = input}
          onBlur={this.blurHandler}
          onFocus={this.focusHandler}
          onClick={this.clickHandler}
          onMouseDown={this.mouseDownHandler}
          onKeyDown={this.keyDownHandler}
          disabled={this.disabled}
          aria-describedby={this.disabled && this.disabledReason ? `disabled-reason-${this.gid}` : null}
          aria-disabled={(this.disabled || this.showLoader) + ''}>

          <div class='tab-content'>
            {this.showLoader && <goat-spinner class='spinner inherit' size="1rem" />}

            {!this.showLoader && this.icon && this.renderIcon()}

            {!this.showLoader && <div class='slot-container'>
              <slot />
            </div>}
          </div>

        </button>
        {this.renderDisabledReason()}
      </div>
    </Host>);
  }

  private renderIcon = () => {
    return <goat-icon name={this.icon} size="1rem" class='icon inherit' />;
  };

}

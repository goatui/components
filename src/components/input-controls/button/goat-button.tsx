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
import { ElementColor, ElementSize, getGoatIndex } from '../../../utils/utils';


@Component({
  tag: 'goat-button',
  styleUrl: 'goat-button.scss',
  shadow: true,
})
export class GoatButton implements ComponentInterface {

  gid = getGoatIndex();

  /**
   * Button size.
   * Possible values are `"sm"`, `"md"`, `"lg"`, `"xl"`, `"xxl"`. Defaults to `"md"`.
   */
  @Prop() size: ElementSize = ElementSize.MEDIUM;

  /**
   * Color variants.
   */
  @Prop() color: ElementColor = ElementColor.PRIMARY;

  @Prop() variant: 'default' | 'light' | 'outline' | 'link' = 'default';

  /**
   * If true, fits button width to its parent width. Defaults to `false`.
   */
  @Prop() block: boolean = false;


  /**
   * Button selection state.
   */
  @Prop() selected: boolean = false;

  /**
   * If true, the user cannot interact with the button. Defaults to `false`.
   */
  @Prop() disabled: boolean = false;

  @Prop() disabledReason: string = '';
  /**
   * Icon which will displayed on button.
   * Possible values are bootstrap icon names.
   */
  @Prop() icon: string;

  /**
   * Icon position.
   */
  @Prop() iconEnd: boolean = false;

  /**
   * Show loader.
   */
  @Prop() showLoader: boolean = false;

  /**
   * Hyperlink to navigate to on click.
   */
  @Prop() href: string;

  /**
   * Sets or retrieves the window or frame at which to target content.
   */
  @Prop() target: string = '_self';

  /**
   * On click of button, a CustomEvent 'goat:click' will be triggered.
   */
  @Event({ eventName: 'goat:click' }) goatClick: EventEmitter;


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
    if (this.isActive && (evt.key == 'Enter' || evt.key == ' '))
      this.isActive = false;
  }

  @Method()
  async triggerClick() {
    if (this.nativeInput) {
      this.nativeInput.click();
    }
  }

  private getIconSize() {
    switch (this.size) {
      case ElementSize.SMALL:
        return 'sm';
      case ElementSize.LARGE:
        return 'md';
      case ElementSize.X_LARGE:
        return 'md';
      case ElementSize.XX_LARGE:
        return 'lg';
      default:
        return 'sm';
    }
  }

  private renderIcon = () => {
    return <goat-icon type={this.icon} size={this.getIconSize()} class='icon' />;
  };

  private clickHandler = (event: PointerEvent) => {
    if (!this.disabled && !this.showLoader) {
      if (this.href) {
        window.open(this.href, this.target);
      }
      this.goatClick.emit();
    } else {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
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
    if (evt.key == 'Enter' || evt.key == ' ') this.isActive = true;
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

    return (<Host variant={this.variant}
                  disabled={this.disabled}
                  size={this.size}
                  color={this.color}
                  block={this.block}
                  focused={this.hasFocus}
                  active={this.isActive}
                  icon={this.icon}
                  icon-end={this.iconEnd}>
      <button
        class={{
          button: true,
          'slot-has-content': this.slotHasContent,
        }}
        tabindex={this.tabindex}
        ref={input => this.nativeInput = input}
        onBlur={this.blurHandler}
        onFocus={this.focusHandler}
        onClick={this.clickHandler}
        onMouseDown={this.mouseDownHandler}
        onKeyDown={this.keyDownHandler}
        aria-describedby={this.disabled && this.disabledReason ? `disabled-reason-${this.gid}` : null}
        aria-disabled={this.disabled || this.showLoader}>

        {this.showLoader && <goat-spinner class='spinner' size={this.size} />}

        {!this.showLoader && this.icon && this.renderIcon()}

        {!this.showLoader && <div class='slot-container'>
          <slot />
        </div>}
      </button>
      {this.renderDisabledReason()}
    </Host>);
  }

}

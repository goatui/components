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
import { ElementSize, getGoatIndex } from '../../../utils/utils';

/**
 * @name Button
 * @description An interactive button with a range of presentation options.
 * @example <goat-button>
 *   Button CTA
 *   </goat-button>
 */
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
  @Prop() size: 'sm' | 'md' | 'lg' | 'xl' | 'xxl' = 'md';

  /**
   * Color variants.
   */
  @Prop() color:  'primary' | 'secondary' | 'success' | 'error' = 'primary';

  @Prop() variant: 'default' | 'light' | 'outline' | 'ghost' = 'default';

  /**
   * If true, fits button width to its parent width. Defaults to `false`.
   */
  @Prop() block: boolean = false;


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

  @Prop({ reflect: true, mutable: true }) configAria: any = {};

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
    if (this.isActive && (evt.key == ' '))
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
    return <goat-icon name={this.icon} size={this.getIconSize()} class='icon inherit' />;
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
    if (evt.key == ' ') {
      this.isActive = true;
      this.clickHandler(evt);
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
    this.elm.getAttributeNames().forEach((name: string) => {
      if (name.includes('aria-')) {
        this.configAria[name] = this.elm.getAttribute(name);
        this.elm.removeAttribute(name);
      }
    });
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
      <button
        class={{
          button: true,
          [`color-${this.color}`]: true,
          [`size-${this.size}`]: true,
          [`variant-${this.variant}`]: true,
          'disabled': this.disabled,
          'block': this.block,
          'selected': this.selected,
          'has-focus': this.hasFocus,
          'active': this.isActive,
          'has-content': this.slotHasContent,
          'icon-end': this.iconEnd,
          'show-loader': this.showLoader,
        }}
        tabindex={this.tabindex}
        ref={input => this.nativeInput = input}
        onBlur={this.blurHandler}
        onFocus={this.focusHandler}
        onClick={this.clickHandler}
        onMouseDown={this.mouseDownHandler}
        onKeyDown={this.keyDownHandler}
        aria-describedby={this.disabled && this.disabledReason ? `disabled-reason-${this.gid}` : null}
        aria-disabled={(this.disabled || this.showLoader) + ''}
        {...this.configAria}>

        <div class="button-content">
          {this.showLoader && <goat-spinner class='spinner inherit' size={this.getIconSize()} />}

          {!this.showLoader && this.icon && this.renderIcon()}

          {!this.showLoader && <div class='slot-container'>
            <slot />
          </div>}
        </div>

      </button>
      {this.renderDisabledReason()}
    </Host>);
  }

}

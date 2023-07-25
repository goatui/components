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
import { ElementSize, getComponentIndex } from '../../../utils/utils';

/**
 * @name Button
 * @description An interactive button with a range of presentation options.
 * @category General
 * @tags controls
 * @example <goat-button>
 *   Button CTA
 *   </goat-button>
 */
@Component({
  tag: 'goat-button',
  styleUrl: 'button.scss',
  shadow: true,
})
export class Button implements ComponentInterface {

  gid: string = getComponentIndex();

  /**
   * Button size.
   * Possible values are `"sm"`, `"md"`, `"lg"`, `"xl"`, `"xxl"`, `"none"`. Defaults to `"md"`.
   */
  @Prop() size: 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'none' = 'md';

  @Prop() simple: boolean = false;

  /**
   * Button variants.
   * Possible values are `"default"`, `"light"`, `"outline"`, `"ghost"`, `"link"`. Defaults to `"default"`.
   */
  @Prop() variant: 'default' | 'light' | 'outline' | 'ghost' | 'link' = 'default';

  /**
   * If true, fits button width to its parent width. Defaults to `false`.
   */
  @Prop({ reflect: true }) block: boolean = false;


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
   * Possible values are icon names.
   */
  @Prop() icon: string;

  /**
   * Icon position.
   */
  @Prop() iconAlign: 'start' | 'end' = 'end';

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

  /**
   * Sets focus on the native `button` in `goat-button`. Use this method instead of the global
   * `button.focus()`.
   */
  @Method()
  async setFocus() {
    if (this.nativeInput) {
      this.nativeInput.focus();
      this.hasFocus = true;
    }
  }

  /**
   * Sets blur on the native `button` in `goat-button`. Use this method instead of the global
   * `button.blur()`.
   */
  @Method()
  async setBlur() {
    if (this.nativeInput) {
      this.nativeInput.blur();
      this.hasFocus = false;
    }
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
        return '1rem';
      case ElementSize.LARGE:
        return '1rem';
      case ElementSize.X_LARGE:
        return '1rem';
      case ElementSize.XX_LARGE:
        return '1rem';
      default:
        return '1rem';
    }
  }

  private renderIcon = (iconName) => {
    return <goat-icon name={iconName} size={this.getIconSize()} class='icon inherit' />;
  };

  private clickHandler = (event: PointerEvent) => {
    if (!this.disabled && !this.showLoader) {
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
    // If the goat-button has a tabindex attribute we get the value
    // and pass it down to the native input, then remove it from the
    // goat-button to avoid causing tabbing twice on the same element
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

    let NativeElementTag = 'button';
    if (this.href) {
      NativeElementTag = 'a';
    }

    return (<Host has-focus={this.hasFocus} active={this.isActive}>
      <div class={{
        button: true,
        [`size-${this.size}`]: true,
        block: this.block,
        simple: this.simple,
        [`variant-${this.variant}`]: true,
        'disabled': this.disabled,
        'selected': this.selected,
        'has-focus': this.hasFocus,
        'active': this.isActive,
        'has-content': this.slotHasContent,
        'has-icon': !!this.icon,
        'show-loader': this.showLoader,
      }}>
        <div class='button-background' />
        <NativeElementTag
          class='native-button'
          tabindex={this.tabindex}
          href={this.href}
          target={this.target}
          ref={input => this.nativeInput = input}
          onBlur={this.blurHandler}
          onFocus={this.focusHandler}
          onClick={this.clickHandler}
          onMouseDown={this.mouseDownHandler}
          onKeyDown={this.keyDownHandler}
          role='button'
          aria-describedby={this.disabled && this.disabledReason ? `disabled-reason-${this.gid}` : null}
          aria-disabled={(this.disabled || this.showLoader) + ''}
          {...this.configAria}>

          <div class='button-content'>
            {this.showLoader && <goat-spinner class='spinner inherit' size={this.getIconSize()} />}

            {!this.showLoader && this.icon && this.iconAlign == 'start' && this.renderIcon(this.icon)}

            {!this.showLoader && <div class='slot-container'>
              <slot />
            </div>}

            {!this.showLoader && this.icon && this.iconAlign == 'end' && this.renderIcon(this.icon)}
          </div>

        </NativeElementTag>
        {this.renderDisabledReason()}
      </div>

    </Host>);
  }

}

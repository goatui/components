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
  Watch,
} from '@stencil/core';
import {
  getComponentIndex,
  isDarkMode,
  isLightOrDark,
  observeThemeChange,
} from '../../utils/utils';

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
   * Possible values are `"sm"`, `"md"`, `"lg"`, `"xl"`, `"2xl"`, `"full"`. Defaults to `"md"`.
   */
  @Prop({ reflect: true }) size: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full' =
    'md';

  /**
   * Button kind.
   * Possible values are `"default"`, `"simple"`, `"block"`. Defaults to `"default"`.
   * `"default"` is a long button.
   * `"simple"` is a text-only button.
   * `"block"` is a full-width button.
   */
  @Prop({ reflect: true }) kind: 'default' | 'simple' | 'block' = 'default';

  @Prop() type: 'button' | 'submit' | 'reset' = 'button';

  /**
   * Button variants.
   * Possible values are `"default"`, `"outline"`, `"ghost"`. Defaults to `"default"`.
   * `"default"` is a filled button.
   * `"outline"` is an outlined button.
   * `"ghost"` is a transparent button.
   */
  @Prop({ reflect: true }) variant:
    | 'default'
    | 'outline'
    | 'ghost'
    | 'light'
    | 'link' = 'default';

  /**
   * Button selection state.
   */
  @Prop({ reflect: true }) selected: boolean = false;

  /**
   * If true, the user cannot interact with the button. Defaults to `false`.
   */
  @Prop({ reflect: true }) disabled: boolean = false;

  @Prop() disabledReason: string = '';

  @Prop({ reflect: true }) color:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'brand-primary'
    | 'brand-secondary'
    | 'dark'
    | 'light'
    | 'inverse' = 'primary';

  @Prop({ reflect: true }) darkModeColor:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'brand-primary'
    | 'brand-secondary'
    | 'dark'
    | 'light'
    | 'inverse';

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
   * Icon size.
   */
  @Prop() iconSize: 'sm' | 'md' | 'lg' | string = 'md';

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
  @State() hover = false;
  @State() slotHasContent = false;
  @State() computedColor: string;
  @State() theme: 'light' | 'dark';

  @Element() elm!: HTMLElement;
  private tabindex?: string | number;
  private nativeElement?: HTMLButtonElement;

  @Watch('color')
  @Watch('darkModeColor')
  colorChanged() {
    this.computedColor = this.getComputedColor();
  }

  @Listen('mouseup', { target: 'window' })
  windowMouseUp() {
    if (this.isActive) this.isActive = false;
  }

  @Listen('keyup', { target: 'window' })
  windowKeyUp(evt: { key: string }) {
    if (this.isActive && evt.key == ' ') this.isActive = false;
  }

  /**
   * Sets focus on the native `button` in `goat-button`. Use this method instead of the global
   * `button.focus()`.
   */
  @Method()
  async setFocus() {
    if (this.nativeElement) {
      this.nativeElement.focus();
      this.hasFocus = true;
    }
  }

  /**
   * Sets blur on the native `button` in `goat-button`. Use this method instead of the global
   * `button.blur()`.
   */
  @Method()
  async setBlur() {
    if (this.nativeElement) {
      this.nativeElement.blur();
      this.hasFocus = false;
    }
  }

  @Method()
  async triggerClick() {
    if (this.nativeElement) {
      this.nativeElement.click();
    }
  }

  private getIconSize() {
    if (this.iconSize) return this.iconSize;
    else return '1rem';
  }

  private renderIcon = (iconName: string) => {
    return (
      <goat-icon
        name={iconName}
        size={this.getIconSize()}
        class="icon inherit"
      />
    );
  };

  private clickHandler = (event: KeyboardEvent) => {
    if (!this.disabled && !this.showLoader) {
      this.goatClick.emit({
        element: this.elm,
      });
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

  private keyDownHandler = (evt: KeyboardEvent) => {
    if (evt.key == ' ' || evt.key == 'Enter') {
      this.isActive = true;
      this.clickHandler(evt);
    }
  };

  componentWillLoad() {
    if (this.elm) {
      // If the goat-button has a tabindex attribute we get the value
      // and pass it down to the native input, then remove it from the
      // goat-button to avoid causing tabbing twice on the same element
      if (this.elm.hasAttribute('tabindex')) {
        const tabindex = this.elm.getAttribute('tabindex');
        this.tabindex = tabindex !== null ? tabindex : undefined;
        this.elm.removeAttribute('tabindex');
      }
      if (this.elm.getAttributeNames)
        this.elm.getAttributeNames().forEach((name: string) => {
          if (name.includes('aria-')) {
            this.configAria[name] = this.elm.getAttribute(name);
            this.elm.removeAttribute(name);
          }
        });
      this.slotHasContent = this.elm.hasChildNodes();
    }
    this.colorChanged();
    this.theme = isDarkMode() ? 'dark' : 'light';
    observeThemeChange(() => {
      this.theme = isDarkMode() ? 'dark' : 'light';
      this.colorChanged();
    });
  }

  getComputedColor() {
    if (isDarkMode()) {
      if (this.darkModeColor) {
        return this.darkModeColor;
      }
    }
    return this.color;
  }

  private renderDisabledReason() {
    if (this.disabled && this.disabledReason)
      return (
        <div id={`disabled-reason-${this.gid}`} role="tooltip" class="sr-only">
          {this.disabledReason}
        </div>
      );
  }

  getNativeElementTagName() {
    if (this.href) return 'a';
    else return 'button';
  }

  computeColorLightOrDark() {
    const color = getComputedStyle(document.documentElement).getPropertyValue(
      `--color-${this.computedColor}`,
    );
    return isLightOrDark(color);
  }

  render() {
    const NativeElementTag = this.getNativeElementTagName();

    return (
      <Host
        has-focus={this.hasFocus}
        active={this.isActive}
        computed-color={this.computedColor}
      >
        <div
          class={{
            'button': true,
            [`size-${this.size || 'md'}`]: true,
            [`type-${this.kind}`]: true,
            [`variant-${this.variant}`]: true,
            [`color-${this.computedColor}`]: true,
            'hover': this.hover,
            'disabled': this.disabled,
            'selected': this.selected,
            'has-focus': this.hasFocus,
            'active': this.isActive,
            'has-content': this.slotHasContent,
            'has-icon': !!this.icon,
            'show-loader': this.showLoader,
            [`color-is-${this.computeColorLightOrDark()}`]: true,
          }}
        >
          <div class="button-background" />
          <NativeElementTag
            class="native-button"
            tabindex={this.tabindex}
            href={this.href}
            target={this.target}
            type={this.type}
            ref={(input: HTMLButtonElement) => (this.nativeElement = input)}
            onBlur={this.blurHandler}
            onFocus={this.focusHandler}
            onMouseOver={() => {
              this.hover = true;
            }}
            onMouseOut={() => {
              this.hover = false;
            }}
            onClick={this.clickHandler}
            onMouseDown={this.mouseDownHandler}
            onKeyDown={this.keyDownHandler}
            role="button"
            aria-describedby={
              this.disabled && this.disabledReason
                ? `disabled-reason-${this.gid}`
                : null
            }
            aria-disabled={(this.disabled || this.showLoader) + ''}
            {...this.configAria}
          >
            <div class="button-content">
              {!this.showLoader &&
                this.icon &&
                this.iconAlign == 'start' &&
                this.renderIcon(this.icon)}

              <div class="slot-container">
                <slot />
              </div>

              {this.showLoader && (
                <goat-spinner
                  hideBackground={true}
                  class="spinner loader inherit"
                  size={this.getIconSize()}
                />
              )}

              {!this.showLoader &&
                this.icon &&
                this.iconAlign == 'end' &&
                this.renderIcon(this.icon)}
            </div>
          </NativeElementTag>
          {this.renderDisabledReason()}
        </div>
      </Host>
    );
  }
}

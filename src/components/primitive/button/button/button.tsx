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
} from '../../../../utils/utils';

const PREDEFINED_BUTTON_COLORS = [
  'primary',
  'secondary',
  'success',
  'info',
  'warning',
  'error',
  'white',
  'black',
  'danger',
];

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
  @Element() elm!: HTMLElement;

  gid: string = getComponentIndex();

  /**
   * Button size.
   * Possible values are `"sm"`, `"md"`, `"lg"`, `"xl"`, `"2xl"`, `"full"`. Defaults to `"md"`.
   */
  @Prop({ reflect: true }) size: 'sm' | 'md' | 'lg' | 'xl' | '2xl' = 'md';

  /**
   * Button kind.
   * Possible values are `"default"`, `"simple"`, `"block"`. Defaults to `"default"`.
   * `"default"` is a long button.
   * `"simple"` is a text-only button.
   * `"block"` is a full-width button.
   */
  @Prop({ reflect: true }) kind: 'default' | 'simple' | 'block' = 'default';

  /**
   * Button type.
   * Possible values are `"button"`, `"submit"`, `"reset"`. Defaults to `"button"`.
   */
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

  /**
   * If button is disabled, the reason why it is disabled.
   */
  @Prop() disabledReason: string = '';

  /**
   * Button color.
   * Possible values are `"primary"`, `"secondary"`, `"success"`, `"danger"`, `"white"`. Defaults to `"primary"`.
   */
  @Prop({ reflect: true }) color:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'white'
    | 'black' = 'primary';

  /**
   * Button color in dark mode.
   * Possible values are `"primary"`, `"secondary"`, `"success"`, `"danger"`, `"white"`.
   */
  @Prop({ reflect: true }) darkModeColor:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'white'
    | 'black';

  /**
   * Icon which will displayed on button.
   * Possible values are icon names.
   */
  @Prop() icon: string;

  /**
   * Icon alignment.
   * Possible values are `"start"`, `"end"`. Defaults to `"end"`.
   */
  @Prop() iconAlign: 'start' | 'end' = 'end';

  /**
   * Icon size.
   * Possible values are `"sm"`, `"md"`, `"lg"`. Defaults to `"md"`.
   */
  @Prop() iconSize: 'sm' | 'md' | 'lg' | string = 'md';

  /**
   * If true, a loader will be displayed on button.
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
   * On click of button, a CustomEvent 'goat-button-click' will be triggered.
   */
  @Event({ eventName: 'goat-button-click' }) clickEmitter: EventEmitter;

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

  /**
   * Triggers a click event on the native `button` in `goat-button`. Use this method instead of the global
   * `button.click()`.
   */
  @Method()
  async triggerClick() {
    if (this.nativeElement) {
      this.nativeElement.click();
    }
  }

  /**
   * States
   */
  @State() hasFocus = false;
  @State() isActive = false;
  @State() hasHover = false;
  @State() slotHasContent = false;
  @State() computedColor: string;
  @State() theme: 'light' | 'dark';

  private tabindex?: string | number;
  private nativeElement?: HTMLButtonElement;
  private buttonElm?: HTMLDivElement;

  @Watch('color')
  @Watch('darkModeColor')
  colorChanged() {
    this.computedColor = this.#getComputedColor();
  }

  @Listen('mouseup', { target: 'window' })
  windowMouseUp() {
    if (this.isActive) this.isActive = false;
  }

  @Listen('keyup', { target: 'window' })
  windowKeyUp(evt: { key: string }) {
    if (this.isActive && evt.key == ' ') this.isActive = false;
  }

  #getIconSize() {
    if (this.iconSize) return this.iconSize;
    else return '1rem';
  }

  #renderIcon(iconName: string) {
    return (
      <goat-icon
        name={iconName}
        size={this.#getIconSize()}
        class="icon inherit"
      />
    );
  }

  #clickHandler = (event: KeyboardEvent) => {
    if (!this.disabled && !this.showLoader) {
      this.clickEmitter.emit({
        element: this.elm,
      });
    } else {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
  };

  #blurHandler = () => {
    this.hasFocus = false;
  };

  #focusHandler = () => {
    this.hasFocus = true;
  };

  #mouseOverHandler = () => {
    this.hasHover = true;
  };

  #mouseOutHandler = () => {
    this.hasHover = false;
  };

  #mouseDownHandler = () => {
    this.isActive = true;
  };

  #keyDownHandler = (evt: KeyboardEvent) => {
    if (!this.disabled && !this.showLoader) {
      if (!this.href && evt.key == 'Enter') {
        evt.preventDefault();
        this.isActive = true;
        this.#clickHandler(evt);
      } else if (this.href && (evt.key == 'Enter' || evt.key == ' ')) {
        evt.preventDefault();
        this.isActive = true;
        this.#clickHandler(evt);
        window.open(this.href, this.target);
      }
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

  #getComputedColor() {
    if (isDarkMode()) {
      if (this.darkModeColor) {
        return this.darkModeColor;
      }
    }
    return this.color;
  }

  #renderDisabledReason() {
    if (this.disabled && this.disabledReason)
      return (
        <div id={`disabled-reason-${this.gid}`} role="tooltip" class="sr-only">
          {this.disabledReason}
        </div>
      );
  }

  #getNativeElementTagName() {
    if (this.href) return 'a';
    else return 'button';
  }

  #computeColorLightOrDark() {
    if (this.buttonElm == null) return;
    let color = getComputedStyle(this.buttonElm).getPropertyValue(
      `--internal-button-color`,
    );
    if (this.hasHover)
      color = getComputedStyle(this.buttonElm).getPropertyValue(
        `--internal-button-color-hover`,
      );
    if (this.isActive)
      color = getComputedStyle(this.buttonElm).getPropertyValue(
        `--internal-button-color-active`,
      );
    return isLightOrDark(color);
  }

  #getStyles() {
    if (!PREDEFINED_BUTTON_COLORS.includes(this.computedColor)) {
      return {
        '--internal-button-color': `var(--color-${this.computedColor})`,
        '--internal-button-color-light': `var(--color-${this.computedColor}-10)`,
        '--internal-button-color-hover': `var(--color-${this.computedColor}-70, var(--color-${this.computedColor}-hover-60))`,
        '--internal-button-color-active': `var(--color-${this.computedColor}-80)`,
      };
    }
  }

  componentDidRender() {
    if (this.#computeColorLightOrDark() == 'dark')
      this.buttonElm.style.setProperty(
        '--internal-button-support-contrast-color',
        `var(--goat-button-support-contrast-color, white)`,
      );
    else
      this.buttonElm.style.setProperty(
        '--internal-button-support-contrast-color',
        `var(--goat-button-support-contrast-color, black)`,
      );
  }

  render() {
    const NativeElementTag = this.#getNativeElementTagName();

    return (
      <Host active={this.isActive} computed-color={this.computedColor}>
        <div
          style={this.#getStyles()}
          ref={(elm: HTMLDivElement) => (this.buttonElm = elm)}
          class={{
            'button': true,
            [`size-${this.size || 'md'}`]: true,
            [`type-${this.kind}`]: true,
            [`variant-${this.variant}`]: true,
            [`color-${this.computedColor}`]: true,
            'hover': this.hasHover,
            'disabled': this.disabled,
            'selected': this.selected,
            'has-focus': this.hasFocus,
            'active': this.isActive,
            'has-content': this.slotHasContent,
            'has-icon': !!this.icon,
            'show-loader': this.showLoader,
            [`color-is-${this.#computeColorLightOrDark()}`]: true,
          }}
        >
          <div class="button-background" />
          <NativeElementTag
            class="native-button"
            tabindex={this.tabindex}
            href={this.href}
            target={this.target}
            type={this.type}
            ref={(elm: HTMLButtonElement) => (this.nativeElement = elm)}
            onBlur={this.#blurHandler}
            onFocus={this.#focusHandler}
            onMouseOver={this.#mouseOverHandler}
            onMouseOut={this.#mouseOutHandler}
            onClick={this.#clickHandler}
            onMouseDown={this.#mouseDownHandler}
            onKeyDown={this.#keyDownHandler}
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
                this.#renderIcon(this.icon)}

              <div class="slot-container">
                <slot />
              </div>

              {this.showLoader && (
                <goat-spinner
                  hideBackground={true}
                  class="spinner loader inherit"
                  size={this.#getIconSize()}
                />
              )}

              {!this.showLoader &&
                this.icon &&
                this.iconAlign == 'end' &&
                this.#renderIcon(this.icon)}
            </div>
          </NativeElementTag>
          {this.#renderDisabledReason()}
        </div>
      </Host>
    );
  }
}

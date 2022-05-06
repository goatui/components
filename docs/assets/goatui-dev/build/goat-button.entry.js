import { r as registerInstance, f as createEvent, h, e as Host, g as getElement } from './index-433d423f.js';
import { g as getComponentIndex, E as ElementSize } from './utils-5b2b26db.js';

const buttonCss = "*{box-sizing:border-box}:host{font-family:var(--font-family-base)}::selection{color:var(--color-white, #ffffff);background:var(--color-primary, var(--color-blue-60, #0f62fe))}::-webkit-scrollbar{width:1rem;height:1rem}::-webkit-scrollbar-track{background:#f1f1f1}::-webkit-scrollbar-thumb{background:#888}::-webkit-scrollbar-thumb :hover{background:#555}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.center-content{display:flex;align-items:center;justify-content:center}:host([hidden]){display:none}@keyframes reveal{0%{opacity:0;transform:translateY(8px)}}:host{display:inline-block;height:var(--button-height, auto)}.button{position:relative;display:flex;align-items:center;height:var(--button-height, auto)}.button .native-button{height:100%;cursor:pointer;z-index:var(--z-index-button, 10);background:transparent;padding:0;border:0.125rem var(--button-border-style, solid) transparent;border-width:var(--button-border-width, 0.125rem);border-radius:var(--button-border-radius, var(--border-radius, 3px));outline:none}.button .native-button .slot-container{display:none}.button .button-content{display:flex;align-items:center;flex-direction:row;height:100%;gap:var(--spacing-2, 0.5rem);border-radius:2px;border:0.125rem solid transparent}.button .button-background{display:block;position:absolute;width:100%;height:100%;border-radius:var(--button-border-radius, var(--border-radius, 3px));pointer-events:none}.button.disabled .native-button{cursor:not-allowed}.button.has-content .slot-container{display:flex}.button.size-sm .button-content,.button.size-small .button-content{padding:0.25rem;font-size:var(--text-sm-font-size, 0.875rem);line-height:var(--text-sm-line-height, 1.25rem);letter-spacing:var(--text-sm-letter-spacing, 0rem);font-weight:var(--button-font-weight, var(--font-weight-medium, 500))}.button.size-sm.has-content .button-content,.button.size-small.has-content .button-content{padding:0.25rem 0.625rem}:host(.icon-only) .button.size-sm .button-content,:host(.icon-only) .button.size-small .button-content{padding:0.25rem}.button.size-md .button-content,.button.size-medium .button-content{padding:0.375rem;font-size:var(--text-sm-font-size, 0.875rem);line-height:var(--text-sm-line-height, 1.25rem);letter-spacing:var(--text-sm-letter-spacing, 0rem);font-weight:var(--button-font-weight, var(--font-weight-medium, 500))}.button.size-md.has-content .button-content,.button.size-medium.has-content .button-content{padding:0.375rem 0.875rem}:host(.icon-only) .button.size-md .button-content,:host(.icon-only) .button.size-medium .button-content{padding:0.375rem}.button.size-lg .button-content,.button.size-large .button-content{padding:0.375rem;font-size:var(--text-md-font-size, 1rem);line-height:var(--text-md-line-height, 1.5rem);letter-spacing:var(--text-md-letter-spacing, 0rem);font-weight:var(--button-font-weight, var(--font-weight-medium, 500))}.button.size-lg.has-content .button-content,.button.size-large.has-content .button-content{padding:0.375rem 0.75rem}:host(.icon-only) .button.size-lg .button-content,:host(.icon-only) .button.size-large .button-content{padding:0.375rem}.button.size-xl .button-content{padding:0.5rem;font-size:var(--text-md-font-size, 1rem);line-height:var(--text-md-line-height, 1.5rem);letter-spacing:var(--text-md-letter-spacing, 0rem);font-weight:var(--button-font-weight, var(--font-weight-medium, 500))}.button.size-xl.has-content .button-content{padding:0.5rem 1rem}:host(.icon-only) .button.size-xl .button-content{padding:0.5rem}.button.size-xxl .button-content{padding:0.75rem;font-size:var(--text-lg-font-size, 1.125rem);line-height:var(--text-lg-line-height, 1.75rem);letter-spacing:var(--text-lg-letter-spacing, 0rem);font-weight:var(--button-font-weight, var(--font-weight-medium, 500))}.button.size-xxl.has-content .button-content{padding:0.75rem 1.5rem}:host(.icon-only) .button.size-xxl .button-content{padding:0.75rem}.button.variant-default .native-button{color:var(--button-text-color, var(--color-white, #ffffff));border-color:var(--button-color, var(--color-primary, var(--color-blue-60, #0f62fe)))}.button.variant-default .button-background{background:var(--button-color-support, var(--button-color, var(--color-primary, var(--color-blue-60, #0f62fe))))}.button.variant-default:hover .native-button{border-color:var(--button-color-hover, var(--color-primary-70, var(--color-blue-70, #0043ce)))}.button.variant-default:hover .button-background{background:var(--button-color-hover, var(--color-primary-70, var(--color-blue-70, #0043ce)))}.button.variant-default.active .native-button,.button.variant-default.selected .native-button{border-color:var(--button-color-active, var(--color-primary-80, var(--color-blue-80, #002d9c)))}.button.variant-default.active .button-background,.button.variant-default.selected .button-background{background:var(--button-color-active, var(--color-primary-80, var(--color-blue-80, #002d9c)))}.button.variant-default.has-focus:not(.active) .native-button{border-color:var(--button-color-focus, var(--color-primary, var(--color-blue-60, #0f62fe)))}.button.variant-default.has-focus:not(.active) .native-button .button-content{border-color:var(--color-white, #ffffff)}.button.variant-default.disabled .native-button{color:var(--disabled-03, var(--color-gray-50, #8d8d8d));border-color:var(--text-disabled, var(--color-gray-30, #c6c6c6)) !important}.button.variant-default.disabled .button-background{background:var(--text-disabled, var(--color-gray-30, #c6c6c6)) !important}.button.variant-default.disabled.has-focus:not(.active) .native-button{border-color:var(--color-neutral, var(--color-gray-60, #6f6f6f)) !important}.button.variant-light .native-button{color:var(--button-color, var(--color-primary, var(--color-blue-60, #0f62fe)));border-color:var(--button-color, var(--color-primary, var(--color-blue-60, #0f62fe)))}.button.variant-light .button-background{background:var(--button-color-light, var(--color-primary-20, var(--color-blue-20, #d0e2ff)))}.button.variant-light:hover .native-button{color:var(--button-text-color, var(--color-white, #ffffff));border-color:var(--button-color, var(--color-primary, var(--color-blue-60, #0f62fe)))}.button.variant-light:hover .button-background{background:var(--button-color, var(--color-primary, var(--color-blue-60, #0f62fe)))}.button.variant-light.active .native-button,.button.variant-light.selected .native-button{color:var(--button-text-color, var(--color-white, #ffffff));border-color:var(--button-color-active, var(--color-primary-80, var(--color-blue-80, #002d9c)))}.button.variant-light.active .button-background,.button.variant-light.selected .button-background{background:var(--button-color-active, var(--color-primary-80, var(--color-blue-80, #002d9c)))}.button.variant-light.has-focus:not(.active) .native-button{border-color:var(--button-color-focus, var(--color-primary, var(--color-blue-60, #0f62fe)))}.button.variant-light.has-focus:not(.active) .native-button .button-content{border-color:var(--color-white, #ffffff)}.button.variant-light.disabled .native-button{color:var(--disabled-03, var(--color-gray-50, #8d8d8d));border-color:var(--text-disabled, var(--color-gray-30, #c6c6c6)) !important}.button.variant-light.disabled .button-background{background:var(--text-disabled, var(--color-gray-30, #c6c6c6)) !important}.button.variant-light.disabled.has-focus:not(.active) .native-button{border-color:var(--color-neutral, var(--color-gray-60, #6f6f6f)) !important}.button.variant-outline .native-button{color:var(--button-color, var(--color-primary, var(--color-blue-60, #0f62fe)));border-color:var(--button-color, var(--color-primary, var(--color-blue-60, #0f62fe)))}.button.variant-outline .button-background{background:transparent}.button.variant-outline:hover .native-button{color:var(--color-white, #ffffff)}.button.variant-outline:hover .button-background{background:var(--button-color, var(--color-primary, var(--color-blue-60, #0f62fe)))}.button.variant-outline.active .native-button,.button.variant-outline.selected .native-button{color:var(--color-white, #ffffff);border-color:var(--button-color-active, var(--color-primary-80, var(--color-blue-80, #002d9c)))}.button.variant-outline.active .button-background,.button.variant-outline.selected .button-background{background:var(--button-color-active, var(--color-primary-80, var(--color-blue-80, #002d9c)))}.button.variant-outline.has-focus:not(.active) .native-button{color:var(--color-white, #ffffff);border-color:var(--button-color-focus, var(--color-primary, var(--color-blue-60, #0f62fe)))}.button.variant-outline.has-focus:not(.active) .button-background{background:var(--button-color, var(--color-primary, var(--color-blue-60, #0f62fe)))}.button.variant-outline.has-focus:not(.active) .button-content{border-color:var(--color-white, #ffffff)}.button.variant-outline.disabled .native-button{color:var(--disabled-03, var(--color-gray-50, #8d8d8d)) !important;border-color:var(--text-disabled, var(--color-gray-30, #c6c6c6)) !important}.button.variant-outline.disabled .button-background{background:transparent !important}.button.variant-outline.disabled.has-focus:not(.active) .native-button{border-color:var(--color-neutral, var(--color-gray-60, #6f6f6f)) !important}.button.variant-ghost .native-button{color:var(--button-color, var(--color-primary, var(--color-blue-60, #0f62fe)));border-color:transparent}.button.variant-ghost .button-background{background:transparent}.button.variant-ghost:hover .native-button{color:var(--button-color-hover, var(--color-primary-70, var(--color-blue-70, #0043ce)))}.button.variant-ghost:hover .button-background{background:var(--hover-ui, var(--color-gray-10, #f4f4f4))}.button.variant-ghost.active .native-button,.button.variant-ghost.selected .native-button{color:var(--button-color-active, var(--color-primary-80, var(--color-blue-80, #002d9c)))}.button.variant-ghost.active .button-background,.button.variant-ghost.selected .button-background{background:var(--active-ui, var(--color-gray-30, #c6c6c6))}.button.variant-ghost.has-focus:not(.active) .native-button{border-color:var(--button-color-focus, var(--color-primary, var(--color-blue-60, #0f62fe)))}.button.variant-ghost.disabled .native-button{color:var(--disabled-03, var(--color-gray-50, #8d8d8d)) !important;border-color:transparent !important}.button.variant-ghost.disabled .button-background{background:transparent !important}.button.variant-ghost.disabled.has-focus:not(.active) .native-button{border-color:var(--button-color-focus, var(--color-neutral, var(--color-gray-60, #6f6f6f))) !important}.button.variant-link .native-button{color:var(--button-color, var(--color-primary, var(--color-blue-60, #0f62fe)));border-color:transparent}.button.variant-link .button-content{padding:0 !important}.button.variant-link .button-background{background:transparent}.button.variant-link:hover .native-button{color:var(--button-color-hover, var(--color-primary-70, var(--color-blue-70, #0043ce)))}.button.variant-link.active .native-button,.button.variant-link.selected .native-button{color:var(--button-color-active, var(--color-primary-80, var(--color-blue-80, #002d9c)))}.button.variant-link.has-focus:not(.active) .native-button{border-color:var(--button-color-focus, var(--color-primary, var(--color-blue-60, #0f62fe)))}.button.variant-link.disabled .native-button{color:var(--disabled-03, var(--color-gray-50, #8d8d8d)) !important;border-color:transparent !important}.button.variant-link.disabled .button-background{background:transparent !important}.button.variant-link.disabled.has-focus:not(.active) .native-button{border-color:var(--button-color-focus, var(--color-neutral, var(--color-gray-60, #6f6f6f))) !important}:host(.color-brand-primary) .button{--button-color:var(--color-brand-primary, #8a3ffc);--button-color-hover:var(--color-brand-primary-70, #6929c4);--button-color-active:var(--color-brand-primary-80, #491d8b);--button-color-light:var(--color-brand-primary-20, #e8daff);--button-color-support:var(--color-brand-primary, #8a3ffc)}:host(.color-brand-secondary) .button{--button-color:var(--color-brand-secondary, #007d79);--button-color-hover:var(--color-brand-secondary-70, #005d5d);--button-color-active:var(--color-brand-secondary-80, #004144);--button-color-light:var(--color-brand-secondary-20, #9ef0f0);--button-color-support:var(--color-brand-secondary, #007d79)}:host(.color-primary) .button{--button-color:var(--color-primary, var(--color-blue-60, #0f62fe));--button-color-hover:var(--color-primary-70, var(--color-blue-70, #0043ce));--button-color-active:var(--color-primary-80, var(--color-blue-80, #002d9c));--button-color-light:var(--color-primary-20, var(--color-blue-20, #d0e2ff));--button-color-support:var(--color-primary, var(--color-blue-60, #0f62fe))}:host(.color-success) .button{--button-color:var(--color-success, #198038);--button-color-hover:var(--color-success-70, #0e6027);--button-color-active:var(--color-success-80, #044317);--button-color-light:var(--color-success-20, #a7f0ba);--button-color-support:var(--color-success, #198038)}:host(.color-error) .button{--button-color:var(--color-error, #da1e28);--button-color-hover:var(--color-error-70, #a2191f);--button-color-active:var(--color-error-80, #750e13);--button-color-light:var(--color-error-20, #ffd7d9);--button-color-support:var(--color-error, #da1e28)}:host(.color-info) .button{--button-color:var(--color-info, #0f62fe);--button-color-hover:var(--color-info-70, #0043ce);--button-color-active:var(--color-info-80, #002d9c);--button-color-light:var(--color-info-20, #d0e2ff);--button-color-support:var(--color-info, #0f62fe)}:host(.color-warning) .button{--button-color:var(--color-warning, #8e6a00);--button-color-hover:var(--color-warning-70, #684e00);--button-color-active:var(--color-warning-80, #483700);--button-color-light:var(--color-warning-20, #fddc69);--button-color-support:var(--color-warning, #8e6a00)}:host(.color-secondary) .button{--button-color:var(--color-secondary, var(--color-warmGray-60, #726e6e));--button-color-hover:var(--color-secondary-70, var(--color-warmGray-70, #565151));--button-color-active:var(--color-secondary-80, var(--color-warmGray-80, #3c3838));--button-color-light:var(--color-secondary-20, var(--color-warmGray-20, #e5e0df));--button-color-support:var(--color-secondary, var(--color-warmGray-60, #726e6e))}:host(.full-height) .button{height:100%}.button.icon-end .button-content{flex-direction:row-reverse}:host([block]){display:block}:host([block]) .native-button{width:100%}:host([block]) .button-content{justify-content:center}:host([block]) .spinner{margin:auto}:host(.rounded) .native-button{border-radius:100%}:host(.rounded) .button-content{border-radius:100%}:host(.rounded) .button-background{border-radius:100%}:host(.color-dark) .button{--button-color:var(--color-black, #000000)}:host-context([data-theme=dark]):host(.color-dark) .button{--button-color:var(--color-white, #ffffff)}";

let Button = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.goatClick = createEvent(this, "goat:click", 7);
    this.gid = getComponentIndex();
    /**
     * Button size.
     * Possible values are `"sm"`, `"md"`, `"lg"`, `"xl"`, `"xxl"`. Defaults to `"md"`.
     */
    this.size = 'md';
    this.variant = 'default';
    /**
     * If true, fits button width to its parent width. Defaults to `false`.
     */
    this.block = false;
    /**
     * Button selection state.
     */
    this.selected = false;
    /**
     * If true, the user cannot interact with the button. Defaults to `false`.
     */
    this.disabled = false;
    this.disabledReason = '';
    /**
     * Icon position.
     */
    this.iconEnd = false;
    /**
     * Show loader.
     */
    this.showLoader = false;
    this.configAria = {};
    /**
     * Sets or retrieves the window or frame at which to target content.
     */
    this.target = '_self';
    this.hasFocus = false;
    this.isActive = false;
    this.slotHasContent = false;
    this.renderIcon = () => {
      return h("goat-icon", { name: this.icon, size: this.getIconSize(), class: 'icon inherit' });
    };
    this.clickHandler = (event) => {
      if (!this.disabled && !this.showLoader) {
        if (this.href) {
          window.open(this.href, this.target);
        }
        this.goatClick.emit();
      }
      else {
        event.preventDefault();
        event.stopPropagation();
        return;
      }
    };
    this.blurHandler = () => {
      this.hasFocus = false;
    };
    this.focusHandler = () => {
      this.hasFocus = true;
    };
    this.mouseDownHandler = () => {
      this.isActive = true;
    };
    this.keyDownHandler = (evt) => {
      if (evt.key == ' ') {
        this.isActive = true;
        this.clickHandler(evt);
      }
    };
  }
  windowMouseUp() {
    if (this.isActive)
      this.isActive = false;
  }
  windowKeyUp(evt) {
    if (this.isActive && (evt.key == ' '))
      this.isActive = false;
  }
  async setFocus() {
    if (this.nativeInput) {
      this.nativeInput.focus();
    }
  }
  async triggerClick() {
    if (this.nativeInput) {
      this.nativeInput.click();
    }
  }
  getIconSize() {
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
  componentWillLoad() {
    // If the ion-input has a tabindex attribute we get the value
    // and pass it down to the native input, then remove it from the
    // goat-input to avoid causing tabbing twice on the same element
    if (this.elm.hasAttribute('tabindex')) {
      const tabindex = this.elm.getAttribute('tabindex');
      this.tabindex = tabindex !== null ? tabindex : undefined;
      this.elm.removeAttribute('tabindex');
    }
    this.elm.getAttributeNames().forEach((name) => {
      if (name.includes('aria-')) {
        this.configAria[name] = this.elm.getAttribute(name);
        this.elm.removeAttribute(name);
      }
    });
    this.slotHasContent = this.elm.hasChildNodes();
  }
  renderDisabledReason() {
    if (this.disabled && this.disabledReason)
      return h("div", { id: `disabled-reason-${this.gid}`, role: 'tooltip', class: 'sr-only' }, this.disabledReason);
  }
  render() {
    return (h(Host, { "has-focus": this.hasFocus, active: this.isActive }, h("div", { class: {
        button: true,
        [`size-${this.size}`]: true,
        block: this.block,
        [`variant-${this.variant}`]: true,
        'disabled': this.disabled,
        'selected': this.selected,
        'has-focus': this.hasFocus,
        'active': this.isActive,
        'has-content': this.slotHasContent,
        'icon-end': this.iconEnd,
        'show-loader': this.showLoader,
      } }, h("div", { class: 'button-background' }), h("button", Object.assign({ class: "native-button", tabindex: this.tabindex, ref: input => this.nativeInput = input, onBlur: this.blurHandler, onFocus: this.focusHandler, onClick: this.clickHandler, onMouseDown: this.mouseDownHandler, onKeyDown: this.keyDownHandler, "aria-describedby": this.disabled && this.disabledReason ? `disabled-reason-${this.gid}` : null, "aria-disabled": (this.disabled || this.showLoader) + '' }, this.configAria), h("div", { class: 'button-content' }, this.showLoader && h("goat-spinner", { class: 'spinner inherit', size: this.getIconSize() }), !this.showLoader && this.icon && this.renderIcon(), !this.showLoader && h("div", { class: 'slot-container' }, h("slot", null)))), this.renderDisabledReason())));
  }
  get elm() { return getElement(this); }
};
Button.style = buttonCss;

export { Button as goat_button };

//# sourceMappingURL=goat-button.entry.js.map
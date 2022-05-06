import { r as registerInstance, f as createEvent, h, e as Host, g as getElement } from './index-433d423f.js';
import { g as getComponentIndex, E as ElementSize } from './utils-5b2b26db.js';

const tabCss = "*{box-sizing:border-box}:host{font-family:var(--font-family-base)}::selection{color:var(--color-white, #ffffff);background:var(--color-primary, var(--color-blue-60, #0f62fe))}::-webkit-scrollbar{width:1rem;height:1rem}::-webkit-scrollbar-track{background:#f1f1f1}::-webkit-scrollbar-thumb{background:#888}::-webkit-scrollbar-thumb :hover{background:#555}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.center-content{display:flex;align-items:center;justify-content:center}:host([hidden]){display:none}@keyframes reveal{0%{opacity:0;transform:translateY(8px)}}:host{display:inline-block}.tab{position:relative;display:flex;align-items:center;height:var(--button-height, auto)}.tab .native-button{height:100%;cursor:pointer;z-index:var(--z-index-button, 10);background:transparent;padding:0;border:none;border-bottom:2px solid transparent;outline:none}.tab .native-button .slot-container{display:none}.tab .tab-content{display:flex;align-items:center;flex-direction:row;height:100%;gap:var(--spacing-2, 0.5rem);border:2px solid transparent;border-bottom:0}.tab .tab-background{display:block;position:absolute;width:100%;height:100%;pointer-events:none}.tab.disabled .native-button{cursor:not-allowed}.tab.has-content .slot-container{display:flex}.tab.size-sm .tab-content,.tab.size-small .tab-content{padding:0.25rem 0.625rem;font-size:var(--text-sm-font-size, 0.875rem);line-height:var(--text-sm-line-height, 1.25rem);letter-spacing:var(--text-sm-letter-spacing, 0rem);font-weight:var(--button-font-weight, var(--font-weight-medium, 500))}.tab.size-md .tab-content,.tab.size-medium .tab-content{padding:0.375rem 0.875rem;font-size:var(--text-sm-font-size, 0.875rem);line-height:var(--text-sm-line-height, 1.25rem);letter-spacing:var(--text-sm-letter-spacing, 0rem);font-weight:var(--button-font-weight, var(--font-weight-medium, 500))}.tab.size-lg .tab-content,.tab.size-large .tab-content{padding:0.375rem;font-size:var(--text-md-font-size, 1rem);line-height:var(--text-md-line-height, 1.5rem);letter-spacing:var(--text-md-letter-spacing, 0rem);font-weight:var(--button-font-weight, var(--font-weight-medium, 500))}.tab.size-xl .tab-content{padding:0.5rem;font-size:var(--text-md-font-size, 1rem);line-height:var(--text-md-line-height, 1.5rem);letter-spacing:var(--text-md-letter-spacing, 0rem);font-weight:var(--button-font-weight, var(--font-weight-medium, 500))}.tab.size-xxl .tab-content{padding:0.75rem;font-size:var(--text-lg-font-size, 1.125rem);line-height:var(--text-lg-line-height, 1.75rem);letter-spacing:var(--text-lg-letter-spacing, 0rem);font-weight:var(--button-font-weight, var(--font-weight-medium, 500))}.tab .native-button{color:var(--text-secondary, var(--color-gray-70, #525252));border-bottom-color:var(--border-subtle-00, var(--color-gray-30, #c6c6c6))}.tab .tab-background{background:transparent}.tab:hover .native-button{color:var(--text-primary, var(--color-gray-100, #161616));border-bottom-color:var(--border-strong-01, var(--color-gray-50, #8d8d8d))}.tab.selected .native-button{color:var(--text-primary, var(--color-gray-100, #161616));border-bottom-color:var(--tab-color, var(--color-primary, var(--color-blue-60, #0f62fe)))}.tab.selected .tab-content{font-weight:var(--font-weight-bold, 700)}.tab.has-focus:not(.active) .native-button{border-bottom-color:var(--color-primary, var(--color-blue-60, #0f62fe))}.tab.has-focus:not(.active) .tab-content{border-color:var(--color-primary, var(--color-blue-60, #0f62fe))}.tab.disabled .native-button{color:var(--text-disabled, var(--color-gray-30, #c6c6c6));border-bottom-color:var(--border-disabled, var(--color-gray-30, #c6c6c6)) !important}.tab.disabled.has-focus:not(.active) .tab-content{border-color:transparent !important}:host(.color-brand-primary) .tab{--tab-color:var(--color-brand-primary, #8a3ffc)}:host(.color-brand-secondary) .tab{--tab-color:var(--color-brand-secondary, #007d79)}:host(.color-primary) .tab{--tab-color:var(--color-primary, var(--color-blue-60, #0f62fe))}:host(.color-success) .tab{--tab-color:var(--color-success, #198038)}:host(.color-error) .tab{--tab-color:var(--color-error, #da1e28)}:host(.color-info) .tab{--tab-color:var(--color-info, #0f62fe)}:host(.color-warning) .tab{--tab-color:var(--color-warning, #8e6a00)}:host(.color-secondary) .tab{--tab-color:var(--color-secondary, var(--color-warmGray-60, #726e6e))}";

let Tab = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.goatTabClick = createEvent(this, "goat:tab-click", 7);
    this.gid = getComponentIndex();
    /**
     * Button size.
     * Possible values are `"sm"`, `"md"`, `"lg"`, `"xl"`, `"xxl"`. Defaults to `"md"`.
     */
    this.size = 'md';
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
     * Show loader.
     */
    this.showLoader = false;
    this.hasFocus = false;
    this.isActive = false;
    this.slotHasContent = false;
    this.clickHandler = () => {
      this.goatTabClick.emit({
        value: this.value,
        target: this.target,
      });
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
        this.clickHandler();
      }
    };
    this.renderIcon = () => {
      return h("goat-icon", { name: this.icon, size: this.getIconSize(), class: 'icon inherit' });
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
    this.slotHasContent = this.elm.hasChildNodes();
  }
  renderDisabledReason() {
    if (this.disabled && this.disabledReason)
      return h("div", { id: `disabled-reason-${this.gid}`, role: 'tooltip', class: 'sr-only' }, this.disabledReason);
  }
  render() {
    return (h(Host, { "has-focus": this.hasFocus, active: this.isActive }, h("div", { class: {
        tab: true,
        [`size-${this.size}`]: true,
        'disabled': this.disabled,
        'selected': this.selected,
        'has-focus': this.hasFocus,
        'active': this.isActive,
        'has-content': this.slotHasContent,
        'show-loader': this.showLoader,
      } }, h("div", { class: 'tab-background' }), h("button", { class: 'native-button', tabindex: this.tabindex, ref: input => this.nativeInput = input, onBlur: this.blurHandler, onFocus: this.focusHandler, onClick: this.clickHandler, onMouseDown: this.mouseDownHandler, onKeyDown: this.keyDownHandler, disabled: this.disabled, "aria-describedby": this.disabled && this.disabledReason ? `disabled-reason-${this.gid}` : null, "aria-disabled": (this.disabled || this.showLoader) + '' }, h("div", { class: 'tab-content' }, this.showLoader && h("goat-spinner", { class: 'spinner inherit', size: this.getIconSize() }), !this.showLoader && this.icon && this.renderIcon(), !this.showLoader && h("div", { class: 'slot-container' }, h("slot", null)))), this.renderDisabledReason())));
  }
  get elm() { return getElement(this); }
};
Tab.style = tabCss;

export { Tab as goat_tab };

//# sourceMappingURL=goat-tab.entry.js.map
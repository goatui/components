import { r as registerInstance, f as createEvent, h, e as Host, g as getElement } from './index-a0beba19.js';
import { g as getComponentIndex } from './utils-5b2b26db.js';

const checkboxCss = "*{box-sizing:border-box}:host{font-family:var(--font-family-base)}::selection{color:var(--color-white, #ffffff);background:var(--color-primary, var(--color-blue-60, #0f62fe))}::-webkit-scrollbar{width:1rem;height:1rem}::-webkit-scrollbar-track{background:#f1f1f1}::-webkit-scrollbar-thumb{background:#888}::-webkit-scrollbar-thumb :hover{background:#555}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.center-content{display:flex;align-items:center;justify-content:center}:host([hidden]){display:none}@keyframes reveal{0%{opacity:0;transform:translateY(8px)}}@keyframes checkbox-check{0%{height:0;width:0;border-color:var(--color-white, #ffffff);transform:translate3d(0, 0, 0) rotate(45deg)}33%{height:0;width:33%;transform:translate3d(0, 0, 0) rotate(45deg)}100%{height:67%;width:33%;border-color:var(--color-white, #ffffff);transform:translate3d(-50%, -40%, 0) rotate(45deg)}}@keyframes checkbox-slash{0%{width:0;border-color:var(--color-white, #ffffff)}33%{width:33%}100%{width:67%;border-color:var(--color-white, #ffffff)}}:host{display:inline-block;color:var(--text-primary, var(--color-gray-100, #161616))}.checkbox{position:relative;display:flex;align-items:center}.checkbox.has-content{gap:var(--spacing-2, 0.5rem)}.checkbox .input-native{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.checkbox .box{position:relative;background:var(--field-01, var(--color-gray-10, #f4f4f4));border:1px solid var(--ui-04, var(--color-gray-50, #8d8d8d));border-radius:var(--border-radius, 3px);cursor:pointer;display:flex;align-items:center;justify-content:center}.checkbox .box:before{pointer-events:none;content:\"\";display:block;width:100%;height:100%;box-sizing:border-box;border-radius:var(--border-radius, 3px);border:1px solid transparent}.checkbox.rounded .box{border-radius:50%}.checkbox.rounded .box:before{border-radius:50%}.checkbox .tick{position:absolute;width:0;height:0}.checkbox.has-focus:not(.active) .box{outline:2px solid var(--color-primary, var(--color-blue-60, #0f62fe));border-color:transparent}.checkbox.has-focus:not(.active):not(.state-checked) .box:before{border-color:var(--icon-01, var(--color-gray-100, #161616))}:host(.light) .box{background-color:var(--field-02, #ffffff)}.checkbox.state-checked .box{background:var(--color-primary, var(--color-blue-60, #0f62fe));border-color:transparent}.checkbox.state-checked .tick{width:33%;height:67%;border-right:3px solid transparent;border-bottom:3px solid transparent;transform:rotate(45deg);transform-origin:0 100%}.checkbox.state-checked .tick.animate{animation:checkbox-check 125ms 250ms cubic-bezier(0.4, 0, 0.23, 1) forwards}.checkbox.state-checked .tick:not(.animate){border-color:var(--color-white, #ffffff);top:-15%;left:15%}.checkbox.state-checked:hover .box{background:var(--color-primary-70, var(--color-blue-70, #0043ce))}.checkbox.state-checked.active .box{border-color:var(--color-white, #ffffff)}.checkbox.state-checked.has-focus:not(.active) .box{outline:2px solid var(--color-primary, var(--color-blue-60, #0f62fe));border-color:var(--color-white, #ffffff)}.checkbox.state-intermediate .box{background:var(--color-primary, var(--color-blue-60, #0f62fe));border-color:transparent}.checkbox.state-intermediate .tick{width:67%;height:0;margin:auto;border-right:3px solid transparent;border-bottom:3px solid transparent;transform-origin:0 100%}.checkbox.state-intermediate .tick.animate{animation:checkbox-slash 125ms 250ms cubic-bezier(0.4, 0, 0.23, 1) forwards}.checkbox.state-intermediate .tick:not(.animate){border-color:var(--color-white, #ffffff)}.checkbox.state-intermediate:hover .box{background:var(--color-primary-90, var(--color-blue-90, #001d6c))}.checkbox.state-intermediate.active .box{border-color:var(--color-white, #ffffff)}.checkbox.state-intermediate.has-focus:not(.active) .box{outline:2px solid var(--color-primary, var(--color-blue-60, #0f62fe));border-color:var(--color-white, #ffffff)}.checkbox.size-sm{font-size:var(--text-sm-font-size, 0.875rem);line-height:var(--text-sm-line-height, 1.25rem);letter-spacing:var(--text-sm-letter-spacing, 0rem)}.checkbox.size-sm .box{width:1.25rem;height:1.25rem}.checkbox.size-md{font-size:var(--text-md-font-size, 1rem);line-height:var(--text-md-line-height, 1.5rem);letter-spacing:var(--text-md-letter-spacing, 0rem)}.checkbox.size-md .box{width:1.5rem;height:1.5rem}.checkbox.size-lg{font-size:var(--text-lg-font-size, 1.125rem);line-height:var(--text-lg-line-height, 1.75rem);letter-spacing:var(--text-lg-letter-spacing, 0rem)}.checkbox.size-lg .box{width:1.75rem;height:1.75rem}:host-context(.input-state-success) .checkbox .box{border-color:var(--color-success, #198038)}:host-context(.input-state-warning) .checkbox .box{border-color:var(--color-warning, #8e6a00)}:host-context(.input-state-error) .checkbox .box{border-color:var(--color-error, #da1e28)}.checkbox.readonly{cursor:default;color:var(--text-disabled, var(--color-gray-30, #c6c6c6)) !important;border-color:var(--text-disabled, var(--color-gray-30, #c6c6c6)) !important}.checkbox.readonly.state-checked .box{background:var(--text-disabled, var(--color-gray-30, #c6c6c6)) !important}.checkbox.readonly .box{border:1px solid var(--text-disabled, var(--color-gray-30, #c6c6c6)) !important}.checkbox.readonly .tick{border-color:var(--disabled-01, var(--color-gray-10, #f4f4f4)) !important}.checkbox.disabled{cursor:not-allowed;color:var(--text-disabled, var(--color-gray-30, #c6c6c6)) !important;border-color:var(--text-disabled, var(--color-gray-30, #c6c6c6)) !important}.checkbox.disabled.state-checked .box{background:var(--text-disabled, var(--color-gray-30, #c6c6c6)) !important}.checkbox.disabled .box{border:1px solid var(--text-disabled, var(--color-gray-30, #c6c6c6)) !important}.checkbox.disabled .tick{border-color:var(--disabled-01, var(--color-gray-10, #f4f4f4)) !important}";

const Checkbox = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.goatChange = createEvent(this, "goat:change", 7);
    this.goatBlur = createEvent(this, "goat:blur", 7);
    this.goatFocus = createEvent(this, "goat:focus", 7);
    this.gid = getComponentIndex();
    /**
     * The input field name.
     */
    this.name = `goat-input-${this.gid}`;
    /**
     * The input field value.
     */
    this.value = false;
    this.intermediate = false;
    this.rounded = false;
    /**
     * The button size.
     * Possible values are: `"sm"`, `"md"`, `"lg"`. Defaults to `"md"`.
     */
    this.size = 'md';
    /**
     * If true, required icon is show. Defaults to `false`.
     */
    this.required = false;
    this.readonly = false;
    /**
     * If true, the user cannot interact with the button. Defaults to `false`.
     */
    this.disabled = false;
    this.configAria = {};
    this.mouseDownHandler = () => {
      this.isActive = true;
    };
    this.keyDownHandler = (evt) => {
      if (evt.key == ' ') {
        evt.preventDefault();
        this.isActive = true;
        this.clickHandler(evt);
      }
    };
    this.tabindex = 1;
    this.hasFocus = false;
    this.animate = true;
    this.isActive = false;
    this.slotHasContent = false;
    this.clickHandler = (ev) => {
      if (!this.disabled && !this.readonly) {
        this.value = !JSON.parse(this.nativeInput.value);
        this.intermediate = false;
        this.goatChange.emit(ev);
        this.iconContainer.focus();
      }
    };
    this.blurHandler = (ev) => {
      this.hasFocus = false;
      this.goatBlur.emit(ev);
    };
    this.focusHandler = (ev) => {
      this.hasFocus = true;
      this.goatFocus.emit(ev);
    };
  }
  async getComponentId() {
    return this.gid;
  }
  /**
   * Sets focus on the native `input` in `goat-input`. Use this method instead of the global
   * `input.focus()`.
   */
  async setFocus() {
    if (this.nativeInput) {
      this.nativeInput.focus();
    }
  }
  /**
   * Sets blur on the native `input` in `goat-input`. Use this method instead of the global
   * `input.blur()`.
   */
  async setBlur() {
    if (this.nativeInput) {
      this.nativeInput.blur();
    }
  }
  windowMouseUp() {
    if (this.isActive)
      this.isActive = false;
  }
  windowKeyUp(evt) {
    if (this.isActive && (evt.key == ' '))
      this.isActive = false;
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
  render() {
    return (h(Host, { "has-focus": this.hasFocus, active: this.isActive }, h("label", { class: {
        'checkbox': true,
        'state-checked': this.value,
        'state-intermediate': !this.value && this.intermediate,
        [`size-${this.size}`]: true,
        'has-focus': this.hasFocus,
        'active': this.isActive,
        'disabled': this.disabled,
        'readonly': this.readonly,
        'required': this.required,
        'rounded': this.rounded,
        'has-content': this.slotHasContent,
      } }, h("div", Object.assign({ class: 'box', tabindex: this.tabindex, ref: elm => this.iconContainer = elm, onKeyUp: (evt) => {
        if (evt.keyCode === 13) {
          this.clickHandler(evt);
        }
      }, onMouseDown: this.mouseDownHandler, onKeyDown: this.keyDownHandler, onBlur: this.blurHandler, onFocus: this.focusHandler, role: "checkbox", "aria-disabled": this.disabled + '', "aria-required": this.required + '', "aria-checked": this.value + '' }, this.configAria), h("div", { class: {
        'tick': true,
        'animate': this.animate,
      } })), h("input", { type: 'checkbox', class: 'input-native', name: this.name, value: this.value + '', checked: this.value, "aria-hidden": 'true', required: this.required, ref: elm => this.nativeInput = elm, tabindex: '-1', onClick: this.clickHandler }), h("div", { class: 'slot-container' }, h("slot", null)))));
  }
  get elm() { return getElement(this); }
};
Checkbox.style = checkboxCss;

export { Checkbox as goat_checkbox };

//# sourceMappingURL=goat-checkbox.entry.js.map
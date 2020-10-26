import { r as registerInstance, e as createEvent, h, f as Host, g as getElement } from './index-db81e240.js';
import { d as debounceEvent, f as findItemLabel } from './utils-5858bcb5.js';

const p4InputCss = "*{box-sizing:border-box}::selection{color:#fff;background:#1890ff}:host{display:block}.input-component{position:relative;display:flex;box-sizing:border-box;min-width:0;margin-bottom:var(--space-3, 0.75rem);background-color:var(--color-white, #fff);border:1px solid var(--color-gray-6, #9f9eb2);font-variant:tabular-nums;list-style:none;font-feature-settings:\"tnum\";width:100%;color:var(--color-gray-5, #aaa9bb);line-height:1.5715;background-image:none;border-radius:2px;transition:all 0.3s;text-align:start;font-weight:400;letter-spacing:normal;cursor:text;}.input-component .native-input{font-family:var(--font-normal, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol);flex:1;border:none;outline:none;background:0 0;height:100%;width:100%;cursor:inherit;padding:0.25rem 0.75rem}.input-component .native-input::placeholder{color:#bfbfbf}.input-component .input-actions{line-height:0}.input-component .input-actions>*:last-child{margin-right:0.5rem}.input-component .input-actions button{height:100%;background:transparent;border:none;box-shadow:none;margin-left:0.5rem;padding:0;line-height:0}.input-component .input-actions button .icon{margin:0;padding:0;line-height:0}.input-component .input-actions .input-clear-icon{display:block;cursor:pointer}.input-component:not(.disabled):hover{color:var(--color-primary, var(--color-indigo-6, #4c48ff));border-color:var(--color-primary, var(--color-indigo-6, #4c48ff))}.input-component:not(.disabled):hover .input-clear-icon{display:block}.input-component.size-lg .native-input{font-size:var(--font-size-5, 1rem)}.input-component.size-md .native-input{font-size:var(--font-size-4, 0.875rem)}.input-component.size-sm .native-input{font-size:var(--font-size-3, 0.8125rem)}.input-component.variant-dashed{border-style:dashed}.input-component.disabled{background-color:#f5f5f5;cursor:not-allowed;opacity:1}:host(.has-focus) .input-component{color:var(--color-primary, var(--color-indigo-6, #4c48ff));border-color:var(--color-primary, var(--color-indigo-6, #4c48ff));outline:0;box-shadow:0 0 0 2px var(--color-blue-3, #afd4ff)}:host(.has-focus) .input-component .input-clear-icon{display:block}:host(.danger){}:host(.danger) .input-component{border-color:var(--color-red-6, #ff4c47)}:host(.danger) .input-component:hover{border-color:var(--color-red-6, #ff4c47);box-shadow:0 0 0 2px var(--color-red-3, #ffbbb9)}:host(.has-focus.danger) .input-component{box-shadow:0 0 0 2px var(--color-red-3, #ffbbb9)}.input-component{}.input-component.size-lg{height:2.75rem}.input-component.size-md{height:2rem}.input-component.size-sm{height:1.5rem}input::-webkit-outer-spin-button,input::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}input[type=number]{-moz-appearance:textfield}";

let inputIds = 0;
const P4Input = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.p4Input = createEvent(this, "p4Input", 7);
    this.p4Change = createEvent(this, "p4Change", 7);
    this.p4Blur = createEvent(this, "p4Blur", 7);
    this.p4Focus = createEvent(this, "p4Focus", 7);
    this.inputId = `p4-input-${inputIds++}`;
    this.hasFocus = false;
    /**
     * The input field name.
     */
    this.name = this.inputId;
    /**
     * The input field value.
     */
    this.value = '';
    /**
     * The input field size.
     * Possible values are: `"sm"`, `"md"`, `"lg"`. Defaults to `"md"`.
     */
    this.size = 'md';
    /**
     * Input field variants to add additional styling
     * Possible values are `"default"`, `"dashed"`. Defaults to `"default"`.
     */
    this.variant = 'default';
    /**
     * The type of control to display. The default type is text.
     */
    this.type = 'text';
    /**
     * If true, the user cannot interact with the button. Defaults to `false`.
     */
    this.disabled = false;
    /**
     * If true, required icon is show. Defaults to `false`.
     */
    this.required = false;
    /**
     * If `true`, a clear icon will appear in the input when there is a value. Clicking it clears the input.
     */
    this.clearInput = false;
    /**
     * Set the amount of time, in milliseconds, to wait to trigger the `p4Change` event after each keystroke.
     */
    this.debounce = 0;
    /**
     * Indicates whether the value of the control can be automatically completed by the browser.
     */
    this.autocomplete = 'off';
    this.onInput = (ev) => {
      const input = ev.target;
      if (input) {
        this.value = input.value || '';
      }
      this.p4Input.emit(ev);
    };
    this.onBlur = (ev) => {
      this.hasFocus = false;
      this.p4Blur.emit(ev);
    };
    this.onFocus = (ev) => {
      this.hasFocus = true;
      this.p4Focus.emit(ev);
    };
    this.clearTextOnEnter = (ev) => {
      if (ev.key === 'Enter') {
        this.clearTextInput(ev);
      }
    };
    this.clearTextInput = (ev) => {
      if (this.clearInput && !this.disabled && ev) {
        ev.preventDefault();
        ev.stopPropagation();
        // Attempt to focus input again after pressing clear button
        this.setFocus();
      }
      this.value = '';
      /**
       * This is needed for clearOnEdit
       * Otherwise the value will not be cleared
       * if user is inside the input
       */
      if (this.nativeInput) {
        this.nativeInput.value = '';
      }
    };
  }
  getCssClasses() {
    const cls = ['input-component'];
    cls.push('variant-' + this.variant);
    cls.push('size-' + this.size);
    cls.push('type-' + this.type);
    if (this.required)
      cls.push('required');
    if (this.disabled)
      cls.push('disabled');
    return cls.join(' ') + ' ';
  }
  /**
   * Sets focus on the native `input` in `ion-input`. Use this method instead of the global
   * `input.focus()`.
   */
  async setFocus() {
    if (this.nativeInput) {
      this.nativeInput.focus();
    }
  }
  /**
   * Sets blur on the native `input` in `ion-input`. Use this method instead of the global
   * `input.blur()`.
   */
  async setBlur() {
    if (this.nativeInput) {
      this.nativeInput.blur();
    }
  }
  /**
   * Update the native input element when the value changes
   */
  valueChanged() {
    this.p4Change.emit({ value: this.value == null ? this.value : this.value.toString() });
  }
  debounceChanged() {
    this.p4Change = debounceEvent(this.p4Change, this.debounce);
  }
  componentWillLoad() {
    // If the ion-input has a tabindex attribute we get the value
    // and pass it down to the native input, then remove it from the
    // ion-input to avoid causing tabbing twice on the same element
    if (this.el.hasAttribute('tabindex')) {
      const tabindex = this.el.getAttribute('tabindex');
      this.tabindex = tabindex !== null ? tabindex : undefined;
      this.el.removeAttribute('tabindex');
    }
  }
  connectedCallback() {
    this.debounceChanged();
    document.dispatchEvent(new CustomEvent('p4InputDidLoad', {
      detail: this.el,
    }));
  }
  disconnectedCallback() {
    document.dispatchEvent(new CustomEvent('p4InputDidUnload', {
      detail: this.el,
    }));
  }
  getValue() {
    return typeof this.value === 'number' ? this.value.toString() :
      (this.value || '').toString();
  }
  render() {
    const value = this.getValue();
    const labelId = this.inputId + '-lbl';
    const label = findItemLabel(this.el);
    if (label) {
      label.id = labelId;
      if (this.required)
        label.classList.add('required');
    }
    return (h(Host, { "aria-disabled": this.disabled ? 'true' : null, class: this.hasFocus ? 'has-focus' : null }, h("div", { class: this.getCssClasses() }, h("input", { class: "native-input", name: this.name, "aria-labelledby": labelId, ref: input => this.nativeInput = input, type: this.type, placeholder: this.placeholder, autocomplete: this.autocomplete, value: value, tabindex: this.tabindex, required: this.required, onInput: this.onInput, onBlur: this.onBlur, onFocus: this.onFocus, disabled: this.disabled }), h("div", { class: "input-actions" }, (this.clearInput && !this.disabled) && h("button", { "aria-label": "reset", type: "button", class: "input-clear-icon", onTouchStart: this.clearTextInput, onMouseDown: this.clearTextInput, onKeyDown: this.clearTextOnEnter }, h("p4-icon", { type: "x", size: "1.5em", class: "icon" }))))));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "value": ["valueChanged"],
    "debounce": ["debounceChanged"]
  }; }
};
P4Input.style = p4InputCss;

export { P4Input as p4_input };

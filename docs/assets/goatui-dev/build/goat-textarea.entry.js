import { r as registerInstance, f as createEvent, h, e as Host, g as getElement } from './index-433d423f.js';
import { g as getComponentIndex, d as debounceEvent } from './utils-5b2b26db.js';

const textareaCss = "*{box-sizing:border-box}:host{font-family:var(--font-family-base)}::selection{color:var(--color-white, #ffffff);background:var(--color-primary, var(--color-blue-60, #0f62fe))}::-webkit-scrollbar{width:1rem;height:1rem}::-webkit-scrollbar-track{background:#f1f1f1}::-webkit-scrollbar-thumb{background:#888}::-webkit-scrollbar-thumb :hover{background:#555}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.center-content{display:flex;align-items:center;justify-content:center}:host([hidden]){display:none}@keyframes reveal{0%{opacity:0;transform:translateY(8px)}}:host{display:block;margin-bottom:var(--spacing-3, 0.75rem);--input-border-radius:var(--border-radius, 3px);--input-border-style:solid;color:var(--text-primary, var(--color-gray-100, #161616))}.input-container{position:relative;display:flex;align-items:center;justify-content:center;background-color:var(--field-01, var(--color-gray-10, #f4f4f4));border:1px var(--input-border-style) var(--ui-04, var(--color-gray-50, #8d8d8d));border-radius:var(--input-border-radius);overflow:hidden;cursor:text;font-weight:var(--font-weight-regular);gap:var(--spacing-2, 0.5rem)}.input-container .input{flex:1;border:none;outline:none;background:none;width:100%;cursor:inherit;padding:0;color:var(--text-primary, var(--color-gray-100, #161616))}.input-container .input::placeholder{color:var(--text-placeholder, var(--color-gray-40, #a8a8a8))}.input-container .slot-container{display:flex;align-items:center;justify-content:center;line-height:0}.input-container .slot-container slot::slotted(*){padding-bottom:0 !important;margin-bottom:0 !important;color:var(--color-neutral-400, )}.input-container .slot-container slot::slotted(*) goat-icon{--color:var(--color-neutral-400, )}.input-container.start-slot-has-content .input{padding-left:var(--spacing-2, 0.5rem)}.input-container.end-slot-has-content .input{padding-right:var(--spacing-2, 0.5rem)}.input-container:not(.start-slot-has-content) .slot-container.start{display:none}.input-container:not(.end-slot-has-content) .slot-container.end{display:none}.input-container .input-action{cursor:pointer}.input-container .input-action:hover{--text-color:var(--text-secondary)}:host(.light) .input-container{background-color:var(--field-02, #ffffff)}.input-container.has-focus{outline:2px solid var(--color-primary, var(--color-blue-60, #0f62fe));border-color:transparent}:host-context(.input-statesuccess) .input-container{border-color:var(--support-success, #198038)}:host-context(.input-statesuccess) .input-container.has-focus{outline:2px solid var(--support-success, #198038)}:host-context(.input-statewarning) .input-container{border-color:var(--support-warning, #f1c21b)}:host-context(.input-statewarning) .input-container.has-focus{outline:2px solid var(--support-warning, #f1c21b)}:host-context(.input-stateerror) .input-container{border-color:var(--support-error, #da1e28)}:host-context(.input-stateerror) .input-container.has-focus{outline:2px solid var(--support-error, #da1e28)}:host([size=sm]) .input-container{padding:0.5rem 0.75rem;min-height:2.375rem}:host([size=sm]) .input-container .input{font-size:var(--text-sm-font-size, 0.875rem);line-height:var(--text-sm-line-height, 1.25rem);letter-spacing:var(--text-sm-letter-spacing, 0rem)}:host([size=sm]) .input-container slot::slotted(*){font-size:var(--text-sm-font-size, 0.875rem);line-height:var(--text-sm-line-height, 1.25rem);letter-spacing:var(--text-sm-letter-spacing, 0rem)}:host([size=md]) .input-container{padding:0.625rem 0.875rem;min-height:2.875rem}:host([size=md]) .input-container .input{font-size:var(--text-md-font-size, 1rem);line-height:var(--text-md-line-height, 1.5rem);letter-spacing:var(--text-md-letter-spacing, 0rem)}:host([size=md]) .input-container slot::slotted(*){font-size:var(--text-md-font-size, 1rem);line-height:var(--text-md-line-height, 1.5rem);letter-spacing:var(--text-md-letter-spacing, 0rem)}:host([size=lg]) .input-container{padding:0.75rem 1rem;min-height:3.375rem}:host([size=lg]) .input-container .input{font-size:var(--text-lg-font-size, 1.125rem);line-height:var(--text-lg-line-height, 1.75rem);letter-spacing:var(--text-lg-letter-spacing, 0rem)}:host([size=lg]) .input-container slot::slotted(*){font-size:var(--text-lg-font-size, 1.125rem);line-height:var(--text-lg-line-height, 1.75rem);letter-spacing:var(--text-lg-letter-spacing, 0rem)}:host([success]) .input-container{border-color:var(--color-success, #198038)}:host([error]) .input-container{border-color:var(--color-error, #da1e28);box-shadow:0 0 0 0.25rem rgba(239, 68, 68, 0.25)}:host([readonly]) .input-container{cursor:initial;background-color:var(--disabled-01, var(--color-gray-10, #f4f4f4)) !important;border-color:var(--disabled-01, var(--color-gray-10, #f4f4f4)) !important;opacity:1 !important}:host([disabled]){color:var(--text-disabled, var(--color-gray-30, #c6c6c6)) !important}:host([disabled]) .input-container{cursor:not-allowed;background-color:var(--disabled-01, var(--color-gray-10, #f4f4f4)) !important;border-color:var(--disabled-01, var(--color-gray-10, #f4f4f4)) !important;opacity:1 !important}:host([disabled]) .input-container .input{color:var(--text-disabled, var(--color-gray-30, #c6c6c6)) !important}input::-webkit-outer-spin-button,input::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}input[type=number]{-moz-appearance:textfield}.textarea{height:100%;align-items:flex-start}.textarea .input-native{height:100%;min-height:5rem;resize:vertical}";

let Textarea = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.p4Input = createEvent(this, "goat:input", 7);
    this.p4Change = createEvent(this, "goat:change", 7);
    this.p4Blur = createEvent(this, "goat:blur", 7);
    this.p4Focus = createEvent(this, "goat:focus", 7);
    this.p4ActionClick = createEvent(this, "goat:action-click", 7);
    this.gid = getComponentIndex();
    /**
     * The input field name.
     */
    this.name = `goat-input-${this.gid}`;
    /**
     * The button size.
     * Possible values are: `"sm"`, `"md"`, `"lg"`. Defaults to `"md"`.
     */
    this.size = 'md';
    /**
     * If true, the user cannot interact with the button. Defaults to `false`.
     */
    this.disabled = false;
    /**
     * If true, the user read the value cannot modify it. Defaults to `false`.
     */
    this.readonly = false;
    /**
     * The input state.
     * Possible values are: `"success"`, `"error"`, `"warning"`, 'default'. Defaults to `"default"`.
     */
    this.state = 'default';
    /**
     * If true, required icon is show. Defaults to `false`.
     */
    this.required = false;
    /**
     * Set the amount of time, in milliseconds, to wait to trigger the `goat:change` event after each keystroke.
     */
    this.debounce = 300;
    /**
     * If `true`, a clear icon will appear in the input when there is a value. Clicking it clears the input.
     */
    this.clearable = false;
    this.configAria = {};
    this.hasFocus = false;
    this.endSlotHasContent = false;
    this.inputHandler = (ev) => {
      const input = ev.target;
      if (input) {
        this.value = input.value || '';
      }
      this.p4Input.emit(ev);
      this.p4Change.emit(ev);
    };
    this.blurHandler = (ev) => {
      this.hasFocus = false;
      this.p4Blur.emit(ev);
    };
    this.focusHandler = (ev) => {
      this.hasFocus = true;
      this.p4Focus.emit(ev);
    };
    this.clearInput = (evt) => {
      this.nativeInput.value = '';
      this.inputHandler(evt);
    };
    this.keyDownHandler = (ev) => {
      if (ev.key === 'Escape' && this.clearable) {
        this.clearInput(ev);
      }
    };
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
  async getComponentId() {
    return this.gid;
  }
  debounceChanged() {
    this.p4Change = debounceEvent(this.p4Change, this.debounce);
  }
  getValue() {
    return (this.value || '').toString();
  }
  hasValue() {
    return this.getValue().length > 0;
  }
  componentWillLoad() {
    // If the ion-input has a tabindex attribute we get the value
    // and pass it down to the native input, then remove it from the
    // ion-input to avoid causing tabbing twice on the same element
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
    this.endSlotHasContent = !!this.elm.querySelector('[slot="end"]');
  }
  connectedCallback() {
    this.debounceChanged();
  }
  render() {
    return (h(Host, { "has-focus": this.hasFocus, "has-value": this.hasValue() }, h("div", { class: {
        'input-container': true,
        'textarea': true,
        'disabled': this.disabled,
        'readonly': this.readonly,
        'has-focus': this.hasFocus,
        'end-slot-has-content': this.endSlotHasContent,
      } }, h("textarea", Object.assign({ rows: 4, ref: input => this.nativeInput = input, required: this.required, class: 'input input-native', name: this.name, placeholder: this.placeholder, value: this.value, tabindex: this.tabindex, onKeyDown: this.keyDownHandler, onInput: this.inputHandler, onBlur: this.blurHandler, onFocus: this.focusHandler, disabled: this.disabled }, this.configAria)), this.clearable && this.hasValue() &&
      h("goat-icon", { class: 'clear inherit input-action', name: 'x-circle-fill', onClick: this.clearInput }), h("div", { class: 'slot-container end' }, h("slot", { name: 'end' })))));
  }
  get elm() { return getElement(this); }
  static get watchers() { return {
    "debounce": ["debounceChanged"]
  }; }
};
Textarea.style = textareaCss;

export { Textarea as goat_textarea };

//# sourceMappingURL=goat-textarea.entry.js.map
import { r as registerInstance, e as createEvent, h, f as Host, g as getElement } from './index-8956d8c0.js';
import { d as debounceEvent, f as findItemLabel } from './utils-0265ee21.js';

const p4InputCss = "*{box-sizing:border-box}::selection{color:var(--color-shades-white);background:var(--color-primary-500)}::-webkit-scrollbar{width:10px}::-webkit-scrollbar-track{background:#f1f1f1}::-webkit-scrollbar-thumb{background:#888}::-webkit-scrollbar-thumb :hover{background:#555}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.center-content{display:flex;align-items:center;justify-content:center}:host{display:block;padding-bottom:var(--space-3, 0.75rem);--input-border-radius:var(--border-radius, 5px);--input-border-style:solid}.input{position:relative;display:flex;box-sizing:border-box;background-color:var(--color-shades-white, #ffffff);border:1px var(--input-border-style) var(--border-color, #cbd5e1);border-radius:var(--input-border-radius);overflow:hidden;cursor:text;align-items:stretch;justify-content:center;}.input .native-input,.input .display-value{flex:1;border:none;outline:none;background:none;padding-left:var(--space-4, 1rem);padding-right:var(--space-4, 1rem);width:100%;cursor:inherit}.input .native-input::placeholder,.input .display-value::placeholder{color:var(--color-neutral-400, #94a3b8)}.input .slot-container{display:flex;align-items:center;justify-content:center}.input .slot-container slot::slotted(*){padding-bottom:0 !important;margin-bottom:0 !important;color:var(--color-neutral-400, #94a3b8)}.input .slot-container slot::slotted(*) p4-icon{--color:var(--color-neutral-400, #94a3b8)}.input .slot-container.start{padding-left:var(--space-3_5, 0.875rem)}.input .slot-container.end{padding-right:var(--space-3_5, 0.875rem)}.input .input-actions{line-height:0;display:flex}.input .input-actions .action-button{position:relative;box-shadow:none;background:var(--color-shades-white, #ffffff);padding:0 var(--space-3, 0.75rem) 0 var(--space-3, 0.75rem);border:none;border-left:1px solid var(--color-shades-white, #ffffff);border-right:1px solid var(--color-shades-white, #ffffff);margin:0;border-radius:0;line-height:0;cursor:pointer}.input .input-actions .action-button:last-child{border-right:none}.input .input-actions .action-button .action-icon{padding-bottom:0;--color:var(--color-neutral-600, #475569)}.input .input-actions .action-button:focus{outline:none;background:var(--color-neutral-300, #cbd5e1);border-color:var(--border-color, #cbd5e1)}.input .input-actions .action-button:focus .action-icon{--color:var(--color-neutral-800, #1e293b)}.input .input-actions .action-button:not(.action-button-disabled):active{background:var(--color-primary-500, #1d4ed8);border-color:var(--border-color, #cbd5e1)}.input .input-actions .action-button:not(.action-button-disabled):active .action-icon{--color:var(--color-shades-white, #ffffff)}.input .input-actions .action-button.action-button-disabled{cursor:not-allowed}.input .input-actions .action-button.action-button-disabled .action-icon{--color:var(--color-neutral-400, #94a3b8)}.input .input-actions .action-button.action-button-disabled:focus{background:var(--color-neutral-50, #f8fafc)}.input.start-slot-has-content .native-input,.input.start-slot-has-content .display-value{padding-left:var(--space-2, 0.5rem)}.input.input-has-actions .native-input,.input.input-has-actions .display-value,.input.end-slot-has-content .native-input,.input.end-slot-has-content .display-value{padding-right:var(--space-2, 0.5rem)}.input:not(.start-slot-has-content) .slot-container.start{display:none}.input:not(.end-slot-has-content) .slot-container.end{display:none}.input.input-size-lg .native-input,.input.input-size-lg .display-value{height:3.25rem;font-family:var(--font-family-paragraph, \"Inter\", sans-serif);font-style:normal;font-weight:normal;font-size:var(--font-size-p2, 1rem);line-height:var(--line-height-p2, 1.5rem);letter-spacing:-0.04em;padding-top:var(--space-3_5, 0.875rem);padding-bottom:var(--space-3_5, 0.875rem)}.input.input-size-md .native-input,.input.input-size-md .display-value{height:var(--space-11, 2.75rem);font-family:var(--font-family-paragraph, \"Inter\", sans-serif);font-style:normal;font-weight:normal;font-size:var(--font-size-p1, 0.875rem);line-height:var(--line-height-p1, 1.0625rem);letter-spacing:-0.04em;padding-top:var(--space-3, 0.75rem);padding-bottom:var(--space-3, 0.75rem)}.input.input-size-sm .native-input,.input.input-size-sm .display-value{height:var(--space-9, 2.25rem);font-family:var(--font-family-paragraph, \"Inter\", sans-serif);font-style:normal;font-weight:normal;font-size:var(--font-size-p1, 0.875rem);line-height:var(--line-height-p1, 1.0625rem);letter-spacing:-0.04em;padding-top:var(--space-2_5, 0.625rem);padding-bottom:var(--space-2_5, 0.625rem)}.input.input-disabled{background-color:var(--color-neutral-100, #f1f5f9);cursor:not-allowed;opacity:1}.input.input-disabled .native-input,.input.input-disabled .display-value{color:var(--color-neutral-400, #94a3b8)}:host([focused]) .input:not(.input-disabled){border-color:var(--color-primary-500, #1d4ed8);outline:none;box-shadow:0 0 0 0.25rem rgba(3, 155, 229, 0.25)}:host([focused]):host(.success) .input:not(.input-disabled){box-shadow:0 0 0 0.25rem rgba(16, 185, 129, 0.25)}:host([focused]):host(.error) .input:not(.input-disabled){box-shadow:0 0 0 0.25rem rgba(239, 68, 68, 0.25)}:host(.success) .input:not(.input-disabled){border-color:var(--color-success-500, #10b981)}:host(.error) .input:not(.input-disabled){border-color:var(--color-error-500, #ef4444)}input::-webkit-outer-spin-button,input::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}input[type=number]{-moz-appearance:textfield}";

let index = 0;
const P4Input = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.p4Input = createEvent(this, "p4:input", 7);
    this.p4Change = createEvent(this, "p4:change", 7);
    this.p4Blur = createEvent(this, "p4:blur", 7);
    this.p4Focus = createEvent(this, "p4:focus", 7);
    this.p4ActionClick = createEvent(this, "p4:action-click", 7);
    this.id = ++index;
    this.startSlotHasContent = false;
    this.endSlotHasContent = false;
    this.hasFocus = false;
    /**
     * The input field name.
     */
    this.name = `p4-input-${this.id}`;
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
     * The type of control to display.
     * Possible values are: `"text"`, `"password"`, `"number"`, `"email"`, `"tel"`. Defaults to `"text"`.
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
    this.debounce = 300;
    /**
     * Indicates whether the value of the control can be automatically completed by the browser.
     */
    this.autocomplete = 'off';
    this.actions = [];
    this.inputHandler = (ev) => {
      const input = ev.target;
      if (input) {
        this.value = input.value;
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
    this.actionClickHandler = (action) => {
      if (!action.disabled)
        this.p4ActionClick.emit(action);
    };
  }
  /**
   * Sets focus on the native `input` in `p4-input`. Use this method instead of the global
   * `input.focus()`.
   */
  async setFocus() {
    if (this.nativeInput) {
      this.nativeInput.focus();
    }
  }
  /**
   * Sets blur on the native `input` in `p4-input`. Use this method instead of the global
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
    let value = this.value;
    if (this.type === 'number') {
      if (value)
        this.value = JSON.parse(value + '');
    }
  }
  debounceChanged() {
    this.p4Change = debounceEvent(this.p4Change, this.debounce);
  }
  componentWillLoad() {
    // If the ion-input has a tabindex attribute we get the value
    // and pass it down to the native input, then remove it from the
    // p4-input to avoid causing tabbing twice on the same element
    if (this.elm.hasAttribute('tabindex')) {
      const tabindex = this.elm.getAttribute('tabindex');
      this.tabindex = tabindex !== null ? tabindex : undefined;
      this.elm.removeAttribute('tabindex');
    }
    const label = findItemLabel(this.elm);
    if (label) {
      label.id = `p4-input-${this.id}-lbl`;
      label.setAttribute('required', this.required + '');
    }
    this.startSlotHasContent = !!this.elm.querySelector('[slot="start"]');
    this.endSlotHasContent = !!this.elm.querySelector('[slot="end"]');
  }
  connectedCallback() {
    this.debounceChanged();
    document.dispatchEvent(new CustomEvent('p4InputDidLoad', {
      detail: this.elm,
    }));
  }
  disconnectedCallback() {
    document.dispatchEvent(new CustomEvent('p4InputDidUnload', {
      detail: this.elm,
    }));
  }
  getActionIconSize() {
    if (this.size == 'lg')
      return '1.5rem';
    if (this.size == 'sm')
      return '1rem';
    return '1.25rem';
  }
  render() {
    const labelId = `p4-input-${this.id}-lbl`;
    const label = findItemLabel(this.elm);
    const actions = this.actions;
    if (label) {
      label.id = labelId;
      label.setAttribute('required', this.required + '');
    }
    return (h(Host, { "aria-disabled": this.disabled ? 'true' : null, focused: this.hasFocus }, h("div", { class: {
        'input': true,
        [`input-type-${this.type}`]: true,
        [`input-size-${this.size}`]: true,
        'input-has-actions': !!actions.length,
        'input-disabled': this.disabled,
        'start-slot-has-content': this.startSlotHasContent,
        'end-slot-has-content': this.endSlotHasContent,
      } }, h("div", { class: 'slot-container start' }, h("slot", { name: 'start' })), h("input", { class: 'native-input', name: this.name, "aria-labelledby": labelId, ref: input => this.nativeInput = input, type: this.type, placeholder: this.placeholder, autocomplete: this.autocomplete, value: this.value, tabindex: this.tabindex, required: this.required, onInput: this.inputHandler, onBlur: this.blurHandler, onFocus: this.focusHandler, disabled: this.disabled }), h("div", { class: 'slot-container end' }, h("slot", { name: 'end' })), h("div", { class: 'input-actions' }, actions.map((action) => {
      return h("button", { type: 'button', class: {
          'action-button': true,
          'action-button-disabled': action.disabled,
        }, "aria-disabled": action.disabled, onClick: () => this.actionClickHandler(action) }, h("p4-icon", { type: action.icon, class: 'action-icon', size: this.getActionIconSize() }));
    })))));
  }
  get elm() { return getElement(this); }
  static get watchers() { return {
    "value": ["valueChanged"],
    "debounce": ["debounceChanged"]
  }; }
};
P4Input.style = p4InputCss;

export { P4Input as p4_input };

import { r as registerInstance, e as createEvent, h, f as Host } from './index-8956d8c0.js';

const p4CheckboxCss = "*{box-sizing:border-box}::selection{color:var(--color-shades-white);background:var(--color-primary-500)}::-webkit-scrollbar{width:10px}::-webkit-scrollbar-track{background:#f1f1f1}::-webkit-scrollbar-thumb{background:#888}::-webkit-scrollbar-thumb :hover{background:#555}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.center-content{display:flex;align-items:center;justify-content:center}:host{display:inline-block;padding-bottom:var(--space-3, 0.75rem)}.checkbox{position:relative;font-family:var(--font-family-paragraph, \"Inter\", sans-serif);font-style:normal;font-weight:normal;font-size:var(--font-size-p1, 0.875rem);line-height:var(--line-height-p1, 1.0625rem);letter-spacing:-0.04em;display:flex;align-items:center}.checkbox .native-input{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.checkbox .slot-container{padding-left:var(--space-2, 0.5rem)}.checkbox .icon-container{line-height:0}.checkbox .icon-container .checkbox-icon{background:var(--color-shades-white, #ffffff);--color:var(--color-neutral-400, #94a3b8)}.checkbox.checkbox-checked .checkbox-icon{--color:var(--color-primary-500, #1d4ed8)}.checkbox:not(.checkbox-checked):hover .checkbox-icon{--color:var(--color-primary-100, #bbcaf3)}:host([size=lg]) .checkbox{font-size:var(--font-size-p2, 1rem)}:host([size=md]) .checkbox{font-size:var(--font-size-p1, 0.875rem)}:host([size=sm]) .checkbox{font-size:var(--font-size-caption, 0.75rem)}:host([focused]) .icon-container{border-radius:var(--border-radius, 5px);outline:none;box-shadow:0 0 0 0.25rem rgba(3, 155, 229, 0.25)}:host([disabled]) .checkbox{cursor:not-allowed;color:var(--color-neutral-300, #cbd5e1)}:host([disabled]) .checkbox .checkbox-icon{--color:var(--color-neutral-300, #cbd5e1)}";

const P4Checkbox = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.p4Change = createEvent(this, "p4:change", 7);
    this.p4Blur = createEvent(this, "p4:blur", 7);
    this.p4Focus = createEvent(this, "p4:focus", 7);
    this.hasFocus = false;
    /**
     * The input field value.
     */
    this.value = false;
    /**
     * The button size.
     * Possible values are: `"sm"`, `"md"`, `"lg"`. Defaults to `"md"`.
     */
    this.size = 'md';
    /**
     * If true, required icon is show. Defaults to `false`.
     */
    this.required = false;
    /**
     * If true, the user cannot interact with the button. Defaults to `false`.
     */
    this.disabled = false;
    this.clickHandler = (ev) => {
      if (!this.disabled) {
        this.value = !JSON.parse(this.nativeInput.value);
        this.p4Change.emit(ev);
        this.iconContainer.focus();
      }
    };
    this.blurHandler = (ev) => {
      this.hasFocus = false;
      this.p4Blur.emit(ev);
    };
    this.focusHandler = (ev) => {
      this.hasFocus = true;
      this.p4Focus.emit(ev);
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
  getCheckboxSize() {
    let size;
    if (!this.size || this.size === 'md')
      size = '1.25rem';
    else if (this.size === 'lg')
      size = '1.5rem';
    else if (this.size === 'sm')
      size = '1rem';
    return size;
  }
  render() {
    return (h(Host, { focused: this.hasFocus, size: this.size }, h("label", { class: {
        'checkbox': true,
        'checkbox-checked': this.value,
      } }, h("div", { class: 'icon-container', tabindex: '0', ref: elm => this.iconContainer = elm, onKeyUp: (evt) => {
        if (evt.keyCode === 13) {
          this.clickHandler(evt);
        }
      }, "aria-disabled": this.disabled, onBlur: this.blurHandler, onFocus: this.focusHandler }, this.renderCheckBoxIcon()), h("input", { type: 'checkbox', class: 'native-input', value: this.value + '', required: this.required, ref: elm => this.nativeInput = elm, tabindex: '-1', onClick: this.clickHandler, "aria-disabled": this.disabled }), h("div", { class: 'slot-container' }, h("slot", null)))));
  }
  renderCheckBoxIcon() {
    return h("p4-icon", { type: this.value ? 'check-square-fill' : 'square', size: this.getCheckboxSize(), class: 'checkbox-icon' });
  }
};
P4Checkbox.style = p4CheckboxCss;

export { P4Checkbox as p4_checkbox };

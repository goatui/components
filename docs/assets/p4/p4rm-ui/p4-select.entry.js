import { r as registerInstance, e as createEvent, h, f as Host, g as getElement } from './index-db81e240.js';
import { d as debounceEvent } from './utils-5858bcb5.js';

const p4SelectCss = "*{box-sizing:border-box}::selection{color:#fff;background:#1890ff}:host{display:block}.input-component{position:relative;display:flex;box-sizing:border-box;min-width:0;margin-bottom:var(--space-3, 0.75rem);background-color:var(--color-white, #fff);border:1px solid var(--color-gray-6, #9f9eb2);font-variant:tabular-nums;list-style:none;font-feature-settings:\"tnum\";width:100%;color:var(--color-gray-5, #aaa9bb);line-height:1.5715;background-image:none;border-radius:2px;transition:all 0.3s;text-align:start;font-weight:400;letter-spacing:normal;cursor:text;}.input-component .native-input,.input-component .display-value{font-family:var(--font-normal, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol);flex:1;border:none;outline:none;background:0 0;height:100%;width:100%;cursor:inherit;padding:0.25rem 0.75rem}.input-component .native-input::placeholder,.input-component .display-value::placeholder{color:#bfbfbf}.input-component .input-actions{line-height:0}.input-component .input-actions>*:last-child{margin-right:0.5rem}.input-component .input-actions button{height:100%;background:transparent;border:none;box-shadow:none;margin-left:0.5rem;padding:0;line-height:0}.input-component .input-actions button .icon{margin:0;padding:0;line-height:0}.input-component .input-actions .input-clear-icon{display:block;cursor:pointer}.input-component:not(.disabled):hover{color:var(--color-primary, var(--color-indigo-6, #4c48ff));border-color:var(--color-primary, var(--color-indigo-6, #4c48ff))}.input-component:not(.disabled):hover .input-clear-icon{display:block}.input-component.size-lg .native-input,.input-component.size-lg .display-value{font-size:var(--font-size-5, 1rem)}.input-component.size-md .native-input,.input-component.size-md .display-value{font-size:var(--font-size-4, 0.875rem)}.input-component.size-sm .native-input,.input-component.size-sm .display-value{font-size:var(--font-size-3, 0.8125rem)}.input-component.variant-dashed{border-style:dashed}.input-component.disabled{background-color:#f5f5f5;cursor:not-allowed;opacity:1}:host(.has-focus) .input-component{color:var(--color-primary, var(--color-indigo-6, #4c48ff));border-color:var(--color-primary, var(--color-indigo-6, #4c48ff));outline:0;box-shadow:0 0 0 2px var(--color-blue-3, #afd4ff)}:host(.has-focus) .input-component .input-clear-icon{display:block}:host(.danger){}:host(.danger) .input-component{border-color:var(--color-red-6, #ff4c47)}:host(.danger) .input-component:hover{border-color:var(--color-red-6, #ff4c47);box-shadow:0 0 0 2px var(--color-red-3, #ffbbb9)}:host(.has-focus.danger) .input-component{box-shadow:0 0 0 2px var(--color-red-3, #ffbbb9)}.select-component{}.select-component.mode-read .native-input{display:none}.select-component.mode-edit .select-selection-item{display:none}.select-component .select-result{position:absolute;top:110%;width:100%;left:0;padding:4px 0;z-index:1000;background-color:white;box-shadow:0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);transition:background 1s cubic-bezier(0.075, 0.82, 0.165, 1)}.select-component .select-result .select-option{padding:0.25rem 0.75rem;cursor:pointer}.select-component .select-result .select-option.select-option-active{background-color:var(--color-gray-1, #f4f7fa)}.select-component .select-selection-item{flex:1}.select-component::placeholder{color:#bfbfbf}.select-component:hover{border-color:#40a9ff;border-right-width:1px !important}.select-component:focus,.select-component.focused{border-color:#40a9ff;border-right-width:1px !important;outline:0;-webkit-box-shadow:0 0 0 2px rgba(24, 144, 255, 0.2);box-shadow:0 0 0 2px rgba(24, 144, 255, 0.2)}.select-component .no-data{text-align:center;color:var(--color-gray-8, #626175);padding:15px}.select-component.size-lg{height:2.75rem}.select-component.size-md{height:2rem}.select-component.size-sm{height:1.5rem}";

let inputIds = 0;
const P4Select = class {
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
     * The button size.
     * Possible values are: `"sm"`, `"md"`, `"lg"`. Defaults to `"md"`.
     */
    this.size = 'md';
    /**
     * Button variants
     * Possible values are `"default"`, `"dashed"`. Defaults to `"default"`.
     */
    this.variant = 'default';
    /**
     * If true, required icon is show. Defaults to `false`.
     */
    this.required = false;
    /**
     * If true, the user cannot interact with the button. Defaults to `false`.
     */
    this.disabled = false;
    this.showLoader = false;
    this.filterOptions = true;
    this.config = { itemValue: 'value', itemLabel: 'label' };
    /**
     * If true, the user cannot interact with the button. Defaults to `false`.
     */
    this.options = [];
    /**
     * If `true`, a clear icon will appear in the input when there is a value. Clicking it clears the input.
     */
    this.clearInput = false;
    /**
     * Set the amount of time, in milliseconds, to wait to trigger the `onChange` event after each keystroke.
     */
    this.debounce = 0;
    this.mode = 'read';
    this.searchString = '';
    this.onChange = (item) => {
      if (!this.disabled) {
        this.value = this.getItemValue(item);
        this.p4Change.emit(item);
        setTimeout(() => this.mode = 'read');
      }
    };
    this.onInput = (ev) => {
      const input = ev.target;
      if (input) {
        this.value = input.value || '';
      }
      this.p4Input.emit(ev);
    };
    this.setEditable = () => {
      if (!this.disabled && this.mode == 'read') {
        this.mode = 'edit';
        setTimeout(() => {
          this.setFocus();
        }, 100);
      }
    };
    this.onBlur = (ev) => {
      this.hasFocus = false;
      this.mode = 'read';
      this.p4Blur.emit(ev);
    };
    this.onFocus = (ev) => {
      this.hasFocus = true;
      this.p4Focus.emit(ev);
    };
  }
  debounceChanged() {
    this.p4Change = debounceEvent(this.p4Change, this.debounce);
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
  optionsWatcher(newValue) {
    if (typeof newValue === 'string') {
      this.options = JSON.parse(newValue);
    }
  }
  configWatcher(newValue) {
    if (typeof newValue === 'string') {
      this.config = JSON.parse(newValue);
    }
  }
  getOptionLabelByValue(value) {
    if (typeof this.options !== 'string') {
      const item = this.options.find((item) => {
        return this.getItemValue(item) === value;
      });
      if (item)
        return this.getItemLabel(item);
      else
        return this.placeholder;
    }
  }
  getOptions() {
    if (typeof this.options !== 'string') {
      let options = this.options;
      if (this.filterOptions)
        options = this.options.filter((item) => {
          return (!this.searchString || this.getItemLabel(item).toLocaleLowerCase().includes(this.searchString.toLocaleLowerCase()));
        });
      if (this.mode == 'edit')
        return h("div", { class: "select-result" }, h("div", { class: "select-items" }, options.length ?
          options.map((item) => {
            return h("div", { class: "select-option", "data-value": this.getItemValue(item), "on-mouseover": (evt) => {
                evt.target.classList.add('select-option-active');
              }, "on-mouseleave": (evt) => {
                evt.target.classList.remove('select-option-active');
              }, "on-click": () => this.onChange(item) }, this.getItemLabel(item));
          })
          : h("div", { class: "no-data" }, h("svg", { class: "bi bi-inbox-fill", width: "5em", height: "5em", viewBox: "0 0 16 16", fill: "currentColor", xmlns: "http://www.w3.org/2000/svg" }, h("path", { "fill-rule": "evenodd", d: "M3.81 4.063A1.5 1.5 0 0 1 4.98 3.5h6.04a1.5 1.5 0 0 1 1.17.563l3.7 4.625a.5.5 0 0 1-.78.624l-3.7-4.624a.5.5 0 0 0-.39-.188H4.98a.5.5 0 0 0-.39.188L.89 9.312a.5.5 0 1 1-.78-.624l3.7-4.625z" }), h("path", { "fill-rule": "evenodd", d: "M.125 8.67A.5.5 0 0 1 .5 8.5h5A.5.5 0 0 1 6 9c0 .828.625 2 2 2s2-1.172 2-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .496.562l-.39 3.124a1.5 1.5 0 0 1-1.489 1.314H1.883a1.5 1.5 0 0 1-1.489-1.314l-.39-3.124a.5.5 0 0 1 .121-.393z" })), h("div", null, "No Data"))));
    }
  }
  getItemValue(item) {
    return item[this.config.itemValue];
  }
  getItemLabel(item) {
    return item[this.config.itemLabel];
  }
  getModeIcon() {
    if (this.showLoader)
      return h("p4-spinner", { class: "icon", size: "1em" });
    else if (this.mode === 'read') {
      return h("button", { type: "button", onClick: this.setEditable }, h("p4-icon", { type: "chevron-down", size: "1em", class: "icon" }));
    }
    else
      return h("p4-icon", { type: "search", size: "1em", class: "icon" });
  }
  getComponentStyleClasses() {
    const cls = ['component input-component select-component'];
    cls.push('variant-' + this.variant);
    cls.push('size-' + this.size);
    cls.push('mode-' + this.mode);
    if (this.required)
      cls.push('required');
    return cls.join(' ');
  }
  getValue() {
    return (this.value || '').toString();
  }
  hasValue() {
    return this.getValue().length > 0;
  }
  async componentWillLoad() {
    // If the ion-input has a tabindex attribute we get the value
    // and pass it down to the native input, then remove it from the
    // ion-input to avoid causing tabbing twice on the same element
    if (this.el.hasAttribute('tabindex')) {
      const tabindex = this.el.getAttribute('tabindex');
      this.tabindex = tabindex !== null ? tabindex : undefined;
      this.el.removeAttribute('tabindex');
    }
    document.addEventListener('click', (event) => {
      // @ts-ignore
      const isClickInside = this.el.shadowRoot.contains(event.path[0]);
      if (!isClickInside)
        this.mode = 'read';
    });
    this.optionsWatcher(this.options);
    this.configWatcher(this.config);
  }
  render() {
    return (h(Host, { "aria-disabled": this.disabled ? 'true' : null, class: { 'has-focus': this.hasFocus, 'has-value': this.hasValue() } }, h("div", { class: this.getComponentStyleClasses() }, h("input", { class: "native-input", ref: input => this.nativeInput = input, type: "text", placeholder: this.placeholder, tabindex: this.tabindex, onBlur: this.onBlur, onFocus: this.onFocus, onInput: this.onInput }), h("div", { class: "select-selection-item display-value", tabindex: "1", onFocus: this.setEditable, onClick: this.setEditable }, this.getOptionLabelByValue(this.value)), h("div", { class: "input-actions" }, this.getModeIcon()), this.getOptions())));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "debounce": ["debounceChanged"],
    "options": ["optionsWatcher"],
    "config": ["configWatcher"]
  }; }
};
P4Select.style = p4SelectCss;

export { P4Select as p4_select };

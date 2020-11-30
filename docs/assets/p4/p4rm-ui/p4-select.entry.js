import { r as registerInstance, e as createEvent, h, f as Host, g as getElement } from './index-4fe82ab4.js';
import { a as debounceEvent, f as findItemLabel } from './utils-7b05b85c.js';

const p4SelectCss = "*{box-sizing:border-box}::selection{color:#fff;background:#1890ff}:host{display:block}.input-component{font-family:var(--font-normal, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol);position:relative;display:flex;box-sizing:border-box;min-width:0;margin-bottom:var(--space-3, 0.75rem);background-color:var(--color-white, #fff);border:1px solid var(--color-gray-6, #9f9eb2);font-variant:tabular-nums;list-style:none;font-feature-settings:\"tnum\";width:100%;color:var(--color-gray-5, #aaa9bb);line-height:1.5715;background-image:none;border-radius:2px;transition:all 0.3s;text-align:start;font-weight:400;letter-spacing:normal;cursor:text;}.input-component .native-input,.input-component .display-value{font-family:var(--font-normal, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol);flex:1;border:none;outline:none;background:0 0;height:100%;width:100%;cursor:inherit;padding:0.25rem 0.75rem}.input-component .native-input::placeholder,.input-component .display-value::placeholder{color:#bfbfbf}.input-component .input-actions{line-height:0;display:flex}.input-component .input-actions>*:last-child{margin-right:0.5rem}.input-component .input-actions>*{height:100%;background:transparent;border:none;box-shadow:none;margin-left:0.5rem;padding:0;line-height:0}.input-component .input-actions .input-clear-icon{cursor:pointer}.input-component:not(.disabled):hover{color:var(--color-primary, var(--color-indigo-6, #4c48ff));border-color:var(--color-primary, var(--color-indigo-6, #4c48ff))}.input-component:not(.disabled):hover .input-clear-icon{display:inline-block}.input-component.size-lg .native-input,.input-component.size-lg .display-value{font-size:var(--font-size-5, 1rem)}.input-component.size-md .native-input,.input-component.size-md .display-value{font-size:var(--font-size-4, 0.875rem)}.input-component.size-sm .native-input,.input-component.size-sm .display-value{font-size:var(--font-size-3, 0.8125rem)}.input-component.variant-dashed{border-style:dashed}.input-component.disabled{background-color:#f5f5f5;cursor:not-allowed;opacity:1}:host(.has-focus) .input-component{color:var(--color-primary, var(--color-indigo-6, #4c48ff));border-color:var(--color-primary, var(--color-indigo-6, #4c48ff));outline:0;box-shadow:0 0 0 2px var(--color-blue-3, #afd4ff)}:host(.has-focus) .input-component .input-clear-icon{display:inline-block}:host(.danger){}:host(.danger) .input-component{border-color:var(--color-red-6, #ff4c47)}:host(.danger) .input-component:hover{border-color:var(--color-red-6, #ff4c47);box-shadow:0 0 0 2px var(--color-red-3, #ffbbb9)}:host(.has-focus.danger) .input-component{box-shadow:0 0 0 2px var(--color-red-3, #ffbbb9)}:host(.no-border) .input-component{border:0}.select-component{}.select-component .native-input{display:none}.select-component.mode-edit.type-typeahead .select-selection-item{display:none}.select-component.mode-edit.type-typeahead .native-input{display:block}.select-component.type-menu .display-value{color:var(--color-gray-10, #36363e)}.select-component .input-actions .btn-action:hover{cursor:pointer}.select-component .select-result{position:absolute;top:110%;width:100%;left:0;padding:0.2rem 0;z-index:1000;background-color:white;box-shadow:0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);transition:background 1s cubic-bezier(0.075, 0.82, 0.165, 1)}.select-component .select-result .select-option{padding:0.25rem 0.75rem;cursor:pointer}.select-component .select-result .select-option.select-option-active{background-color:var(--color-gray-2, #eef0f2)}.select-component .no-data{text-align:center;color:var(--color-gray-8, #626175);padding:15px}.select-component .no-data p4-icon{max-height:4em;max-width:4em}.select-component .no-data .no-data-text{font-size:1.2em}.select-component.size-lg{height:2.75rem}.select-component.size-lg .display-value{line-height:2}.select-component.size-md{height:2rem}.select-component.size-sm{height:1.5rem}.select-component.size-sm .display-value{line-height:1}:host(.has-value) .display-value{color:var(--color-gray-10, #36363e)}";

let inputIds = 0;
const P4Select = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.p4Input = createEvent(this, "p4Input", 7);
    this.p4Change = createEvent(this, "p4Change", 7);
    this.p4ActionClick = createEvent(this, "p4ActionClick", 7);
    this.p4Blur = createEvent(this, "p4Blur", 7);
    this.p4Focus = createEvent(this, "p4Focus", 7);
    this.inputId = `p4-select-${inputIds++}`;
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
    this.type = 'select';
    this.config = { itemValue: 'value', itemLabel: 'label' };
    /**
     * If true, the user cannot interact with the button. Defaults to `false`.
     */
    this.options = [];
    this.actions = [];
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
        this.setReadable();
        this.value = this.getItemValue(item);
        this.searchString = '';
        this.p4Change.emit({ value: this.value, item });
      }
    };
    this.onInput = (ev) => {
      const input = ev.target;
      if (input) {
        this.searchString = input.value || '';
      }
      this.p4Input.emit(ev);
    };
    this.onKeyDown = (ev) => {
      if (ev.key === 'Enter') {
        if (this.activeOption)
          this.onChange(this.activeOption);
      }
      else if (ev.key === 'ArrowDown') {
        const options = this.getDisplayOptions();
        if (!this.activeOption)
          this.activeOption = options[0];
        else {
          const index = options.findIndex((option) => {
            return this.getItemValue(option) == this.getItemValue(this.activeOption);
          });
          this.activeOption = options[(index + 1) % options.length];
        }
      }
      else if (ev.key === 'ArrowUp') {
        const options = this.getDisplayOptions();
        if (!this.activeOption)
          this.activeOption = options[options.length - 1];
        else {
          const index = options.findIndex((option) => {
            return this.getItemValue(option) == this.getItemValue(this.activeOption);
          });
          this.activeOption = options[((options.length + index - 1) % options.length)];
        }
      }
    };
    this.onActionClick = (action) => {
      this.p4ActionClick.emit(action.name);
    };
    this.setEditable = () => {
      if (!this.disabled && this.mode == 'read') {
        if (this.options.length) {
          if (this.value)
            this.activeOption = this.options.find((option) => {
              return this.getItemValue(option) === this.value;
            });
          else
            this.activeOption = this.options[0];
        }
        this.mode = 'edit';
        setTimeout(() => {
          this.setFocus();
        }, 100);
      }
    };
    this.setReadable = () => {
      if (!this.disabled && this.mode == 'edit') {
        this.mode = 'read';
      }
    };
    this.onBlur = (evt) => {
      this.hasFocus = false;
      this.p4Blur.emit(evt);
      setTimeout(() => {
        this.setReadable();
      }, 300);
    };
    this.onFocus = (ev) => {
      this.hasFocus = true;
      this.p4Focus.emit(ev);
    };
    this.clearTextOnEnter = (ev) => {
      if (ev.key === 'Enter')
        this.clearTextInput(ev);
    };
    this.clearTextInput = (ev) => {
      if (this.clearInput && !this.disabled && ev) {
        ev.preventDefault();
        ev.stopPropagation();
      }
      this.value = null;
      this.searchString = '';
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
  debounceChanged() {
    this.p4Change = debounceEvent(this.p4Change, this.debounce);
  }
  /**
   * Sets focus on the native `input` in `ion-input`. Use this method instead of the global
   * `input.focus()`.
   */
  async setFocus() {
    if (this.type === 'select' || this.type === 'menu')
      this.displayElement.focus();
    else if (this.nativeInput)
      this.nativeInput.focus();
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
  getOptionLabelByValue(value) {
    if (this.options) {
      const item = this.options.find((item) => {
        return this.getItemValue(item) === value;
      });
      if (item)
        return this.getItemLabel(item);
      else
        return this.placeholder;
    }
  }
  getItemValue(item) {
    return item[this.config.itemValue];
  }
  getItemLabel(item) {
    return item[this.config.itemLabel];
  }
  hasValue() {
    return (this.value || '').toString().length > 0;
  }
  getComponentStyleClasses() {
    const cls = ['component input-component select-component'];
    cls.push('variant-' + this.variant);
    cls.push('size-' + this.size);
    cls.push('mode-' + this.mode);
    cls.push('type-' + this.type);
    if (this.required)
      cls.push('required');
    if (this.disabled)
      cls.push('disabled');
    return cls.join(' ');
  }
  getActions() {
    return this.actions.map((action) => {
      return h("button", { class: "btn-action", type: "button", onClick: () => this.onActionClick(action) }, h("p4-icon", { type: action.icon, size: "1rem", class: "icon" }));
    });
  }
  getModeIcon() {
    if (this.showLoader)
      return h("button", { type: "button", disabled: true }, h("p4-spinner", { class: "icon", size: "1.5rem" }));
    else if (this.mode === 'read') {
      return h("button", { class: "btn-action", type: "button", onClick: () => setTimeout(() => this.setEditable()) }, h("p4-icon", { type: "chevron-down", size: "1rem", class: "icon" }));
    }
    else if (this.type === 'typeahead') {
      return h("button", { type: "button", disabled: true }, h("p4-icon", { type: "search", size: "1rem", class: "icon" }));
    }
    else {
      return h("button", { class: "btn-action", type: "button", onClick: () => setTimeout(() => this.setReadable()) }, h("p4-icon", { type: "chevron-up", size: "1rem", class: "icon" }));
    }
  }
  getDisplayOptions() {
    let options = [];
    if (typeof this.options !== 'string') {
      options = this.options;
      if (this.filterOptions)
        options = this.options.filter((item) => {
          return (!this.searchString || this.getItemLabel(item).toLocaleLowerCase().includes(this.searchString.toLocaleLowerCase()));
        });
    }
    return options;
  }
  getOptions() {
    if (typeof this.options !== 'string') {
      const options = this.getDisplayOptions();
      if (this.mode == 'edit')
        return h("div", { class: "select-result" }, h("div", { class: "select-items" }, options.length ?
          options.map((item) => {
            return h("div", { class: {
                'select-option': true,
                'select-option-active': (this.activeOption && this.getItemValue(item) === this.getItemValue(this.activeOption)),
              }, "data-value": this.getItemValue(item), "on-mouseover": () => {
                this.activeOption = item;
              }, "on-click": () => this.onChange(item) }, this.getItemLabel(item));
          })
          :
            (!this.searchString && !this.filterOptions && !this.showLoader) ?
              (h("div", { class: "no-data" }, h("p4-icon", { type: "pencil", size: "100%" }), h("div", { class: "no-data-text" }, "Please enter text to search")))
              : (h("div", { class: "no-data" }, h("p4-icon", { type: "inbox-fill", size: "100%" }), h("div", { class: "no-data-text" }, "No data")))));
    }
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
  }
  render() {
    const labelId = this.inputId + '-lbl';
    const label = findItemLabel(this.el);
    if (label) {
      label.id = labelId;
      if (this.required)
        label.classList.add('required');
    }
    return (h(Host, { "aria-disabled": this.disabled ? 'true' : null, class: { 'has-focus': this.hasFocus, 'has-value': this.hasValue() } }, h("div", { class: this.getComponentStyleClasses() }, h("input", { class: "native-input", ref: input => this.nativeInput = input, type: "text", "aria-labelledby": labelId, name: this.name, value: this.searchString, placeholder: this.placeholder, tabindex: this.tabindex, onBlur: this.onBlur, onFocus: this.onFocus, onInput: this.onInput, onKeyDown: this.onKeyDown }), h("div", { class: "select-selection-item display-value", tabindex: "1", onFocus: (evt) => {
        if (this.type === 'menu' || this.type === 'select') {
          this.onFocus(evt);
        }
        this.setEditable();
      }, ref: (el) => this.displayElement = el, onBlur: (evt) => {
        if (this.type === 'menu' || this.type === 'select') {
          this.onBlur(evt);
        }
      }, onKeyDown: (evt) => {
        if (this.type === 'menu' || this.type === 'select') {
          if (evt.key === 'Enter' || evt.key === 'ArrowUp' || evt.key === 'ArrowDown') {
            evt.preventDefault();
            this.onKeyDown(evt);
          }
        }
      }, onClick: this.setEditable }, this.type === 'menu' ? h("slot", null) : this.getOptionLabelByValue(this.value)), h("div", { class: "input-actions" }, (this.clearInput && this.type !== 'menu' && !this.disabled && this.hasValue()) && h("button", { "aria-label": "reset", type: "button", class: "input-clear-icon", onTouchStart: this.clearTextInput, onMouseDown: this.clearTextInput, onKeyDown: this.clearTextOnEnter }, h("p4-icon", { type: "x", size: "1.1rem", class: "icon" })), this.getActions(), this.getModeIcon()), this.getOptions())));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "debounce": ["debounceChanged"]
  }; }
};
P4Select.style = p4SelectCss;

export { P4Select as p4_select };

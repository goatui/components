import { r as registerInstance, e as createEvent, h, f as Host, g as getElement } from './index-8956d8c0.js';
import { f as findItemLabel } from './utils-0265ee21.js';

const p4SelectCss = "*{box-sizing:border-box}::selection{color:var(--color-shades-white);background:var(--color-primary-500)}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.center-content{display:flex;align-items:center;justify-content:center}:host{display:block;padding-bottom:var(--space-3, 0.75rem);--input-border-radius:var(--border-radius, 5px);--input-border-style:solid}.input{position:relative;display:flex;box-sizing:border-box;background-color:var(--color-shades-white, #ffffff);border:1px var(--input-border-style) var(--border-color, #cbd5e1);border-radius:var(--input-border-radius);overflow:hidden;cursor:text;align-items:stretch;justify-content:center;}.input .native-input,.input .display-value{flex:1;border:none;outline:none;background:none;padding-left:var(--space-4, 1rem);padding-right:var(--space-4, 1rem);width:100%;cursor:inherit}.input .native-input::placeholder,.input .display-value::placeholder{color:var(--color-neutral-400, #94a3b8)}.input .slot-container{display:flex;align-items:center;justify-content:center}.input .slot-container slot::slotted(*){padding-bottom:0 !important;margin-bottom:0 !important;color:var(--color-neutral-400, #94a3b8)}.input .slot-container slot::slotted(*) p4-icon{--color:v(color-neutral-400)}.input .slot-container.start{padding-left:var(--space-3_5, 0.875rem)}.input .slot-container.end{padding-right:var(--space-3_5, 0.875rem)}.input .input-actions{line-height:0;display:flex}.input .input-actions .action-button{position:relative;border:none;box-shadow:none;background:var(--color-neutral-100, #f1f5f9);padding:0 var(--space-3_5, 0.875rem) 0 var(--space-3_5, 0.875rem);margin:0;border-radius:0;line-height:0;border-left:1px solid var(--border-color, #cbd5e1);cursor:pointer}.input .input-actions .action-button .action-icon{padding-bottom:0;--color:v(color-neutral-600)}.input .input-actions .action-button:not(.action-button-disabled):focus{outline:none;background:var(--color-neutral-300, #cbd5e1)}.input .input-actions .action-button:not(.action-button-disabled):focus .action-icon{--color:v(color-neutral-800)}.input .input-actions .action-button:not(.action-button-disabled):active{background:var(--color-primary-500, #1d4ed8)}.input .input-actions .action-button:not(.action-button-disabled):active .action-icon{--color:v(color-shades-white)}.input .input-actions .action-button.action-button-disabled{cursor:not-allowed}.input .input-actions .action-button.action-button-disabled .action-icon{--color:v(color-neutral-300)}.input.start-slot-has-content .native-input,.input.start-slot-has-content .display-value{padding-left:var(--space-2, 0.5rem)}.input.input-has-actions .native-input,.input.input-has-actions .display-value,.input.end-slot-has-content .native-input,.input.end-slot-has-content .display-value{padding-right:var(--space-2, 0.5rem)}.input:not(.start-slot-has-content) .slot-container.start{display:none}.input:not(.end-slot-has-content) .slot-container.end{display:none}.input.input-size-lg .native-input,.input.input-size-lg .display-value{height:3.25rem;font-family:var(--font-family-paragraph, \"Roboto\", sans-serif);font-style:normal;font-weight:normal;font-size:var(--font-size-p2, 1rem);line-height:var(--line-height-p2, 1.5rem);letter-spacing:-0.04em;padding-top:var(--space-3_5, 0.875rem);padding-bottom:var(--space-3_5, 0.875rem)}.input.input-size-md .native-input,.input.input-size-md .display-value{height:var(--space-11, 2.75rem);font-family:var(--font-family-paragraph, \"Roboto\", sans-serif);font-style:normal;font-weight:normal;font-size:var(--font-size-p1, 0.875rem);line-height:var(--line-height-p1, 1.0625rem);letter-spacing:-0.04em;padding-top:var(--space-3, 0.75rem);padding-bottom:var(--space-3, 0.75rem)}.input.input-size-sm .native-input,.input.input-size-sm .display-value{height:var(--space-9, 2.25rem);font-family:var(--font-family-paragraph, \"Roboto\", sans-serif);font-style:normal;font-weight:normal;font-size:var(--font-size-p1, 0.875rem);line-height:var(--line-height-p1, 1.0625rem);letter-spacing:-0.04em;padding-top:var(--space-2_5, 0.625rem);padding-bottom:var(--space-2_5, 0.625rem)}.input.input-disabled{background-color:var(--color-neutral-100, #f1f5f9);cursor:not-allowed;opacity:1}.input.input-disabled .native-input,.input.input-disabled .display-value{color:var(--color-neutral-400, #94a3b8)}:host([focused]) .input:not(.input-disabled){border-color:var(--color-primary-500, #1d4ed8);outline:none;box-shadow:0 0 0 0.25rem rgba(3, 155, 229, 0.25)}:host([focused]):host(.success) .input:not(.input-disabled){box-shadow:0 0 0 0.25rem rgba(16, 185, 129, 0.25)}:host([focused]):host(.error) .input:not(.input-disabled){box-shadow:0 0 0 0.25rem rgba(239, 68, 68, 0.25)}:host(.success) .input:not(.input-disabled){border-color:var(--color-success-500, #10b981)}:host(.error) .input:not(.input-disabled){border-color:var(--color-error-500, #ef4444)}.select-container{position:relative;z-index:var(--z-index-dropdown-content, 200)}.select-container .display-value{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;cursor:pointer}.select-container .dropdown-result{position:absolute;width:max-content;line-height:0;transform:scale(0);transition:transform 0.1s ease-out 0s}.select-container.is-open .dropdown-result{transform:scale(1)}.select-container .input .input-actions .action-button.mode-button .clear-icon{--color:var(--color-error-700, #b91c1c);display:none}.select-container.bottom-left .dropdown-result{top:calc(100% + var(--space-1, 0.25rem));left:0;transform-origin:center top}.select-container.bottom-right .dropdown-result{top:calc(100% + var(--space-1, 0.25rem));right:0;transform-origin:center top}.select-container.top-left .dropdown-result{bottom:calc(100% + var(--space-1, 0.25rem));left:0;transform-origin:center bottom}.select-container.top-right .dropdown-result{bottom:calc(100% + var(--space-1, 0.25rem));right:0;transform-origin:center bottom}.select-container .search-loader{display:flex;align-items:center}:host([clear-input][has-value]) .input .input-actions .action-button.mode-button:hover .mode-icon,:host([clear-input][has-value]) .input .input-actions .action-button.mode-button:focus .mode-icon{display:none}:host([clear-input][has-value]) .input .input-actions .action-button.mode-button:hover .clear-icon,:host([clear-input][has-value]) .input .input-actions .action-button.mode-button:focus .clear-icon{display:block !important}";

let index = 0;
const P4Select = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.p4Change = createEvent(this, "p4:change", 7);
    this.p4ActionClick = createEvent(this, "p4:action-click", 7);
    this.p4Input = createEvent(this, "p4:input", 7);
    this.id = ++index;
    this.hasFocus = false;
    this.searchString = '';
    /**
     * The button size.
     * Possible values are: `"sm"`, `"md"`, `"lg"`. Defaults to `"md"`.
     */
    this.size = 'md';
    /**
     * Select type
     * Possible values are `"select"`, `"typeahead"`. Defaults to `"select"`.
     */
    this.type = 'select';
    /**
     * If true, required icon is show. Defaults to `false`.
     */
    this.required = false;
    /**
     * If true, the user cannot interact with the button. Defaults to `false`.
     */
    this.disabled = false;
    this.showLoader = false;
    this.isOpen = false;
    this.managed = false;
    this.config = { itemValue: 'value', itemLabel: 'label' };
    this.data = [];
    this.position = 'bottom-left';
    this.actions = [];
    /**
     * If `true`, a clear icon will appear in the input when there is a value. Clicking it clears the input.
     */
    this.clearInput = false;
    /**
     * The input field name.
     */
    this.name = `p4-select-${this.id}`;
    this.changeHandler = (item) => {
      if (!this.disabled) {
        this.value = this.getItemValue(item);
        this.p4Change.emit({ value: this.value, item });
      }
    };
    this.blurHandler = () => {
      this.hasFocus = false;
    };
    this.focusHandler = () => {
      this.hasFocus = true;
    };
    this.closeList = () => {
      if (!this.disabled && this.isOpen) {
        this.isOpen = false;
        setTimeout(() => this.setFocus(), 100);
      }
    };
    this.openList = () => {
      if (!this.disabled && !this.isOpen) {
        this.isOpen = true;
        if (this.type === 'typeahead') {
          this.searchString = '';
          setTimeout(() => this.nativeInput.focus(), 100);
        }
      }
    };
    this.toggleList = () => {
      if (this.isOpen)
        this.closeList();
      else
        this.openList();
    };
    this.actionClickHandler = (action) => {
      if (!action.disabled)
        this.p4ActionClick.emit(action);
    };
    this.keyDownHandler = (evt) => {
      if (evt.key === 'Enter') {
        evt.preventDefault();
        this.toggleList();
      }
      else if (evt.key === 'ArrowDown') {
        if (this.isOpen) {
          evt.preventDefault();
          //@ts-ignore
          this.listElement.setFocus();
        }
      }
      else if (evt.key === 'ArrowUp') {
        if (this.isOpen) {
          evt.preventDefault();
          //@ts-ignore
          this.listElement.setFocus(true); // focus on previous item
        }
      }
    };
    this.onInput = (ev) => {
      const input = ev.target;
      if (input) {
        this.searchString = input.value || '';
      }
      this.p4Input.emit(ev);
    };
  }
  /**
   * Sets focus on the native `input` in `ion-input`. Use this method instead of the global
   * `input.focus()`.
   */
  async setFocus() {
    this.displayElement.focus();
  }
  windowClick(evt) {
    const path = (evt.path || evt.composedPath());
    for (const elm of path) {
      if (elm == this.elm)
        return;
    }
    this.isOpen = false;
  }
  getItemValue(item) {
    if (!item)
      return null;
    return item[this.config.itemValue];
  }
  getItemLabel(item) {
    return item[this.config.itemLabel];
  }
  getActionIconSize() {
    if (this.size == 'lg')
      return '1.5rem';
    if (this.size == 'sm')
      return '1rem';
    return '1.25rem';
  }
  hasValue() {
    return (this.value || '').toString().length > 0;
  }
  getOptionLabelByValue(value) {
    if (this.data) {
      const item = this.data.find((item) => {
        return this.getItemValue(item) === value;
      });
      if (item)
        return this.getItemLabel(item);
      else
        return this.placeholder;
    }
  }
  render() {
    const labelId = `p4-select-${this.id}-lbl`;
    const label = findItemLabel(this.elm);
    if (label) {
      label.id = labelId;
      label.setAttribute('required', this.required + '');
    }
    const actions = this.actions;
    return (h(Host, { "aria-disabled": this.disabled ? 'true' : null, "has-value": this.hasValue(), focused: this.hasFocus, "is-open": this.isOpen, position: this.position }, h("div", { class: { 'select-container': true, [this.position]: true, 'is-open': this.isOpen } }, h("div", { class: {
        'select': true,
        'input': true,
        [`input-size-${this.size}`]: true,
        [`input-type-${this.type}`]: true,
        'input-has-actions': !!actions.length,
        'input-disabled': this.disabled,
      } }, ((this.type === 'select') || (this.type === 'typeahead' && !this.isOpen))
      && h("div", { class: 'display-value', ref: (el) => this.displayElement = el, tabindex: '0', onFocus: this.focusHandler, onBlur: this.blurHandler, onKeyDown: this.keyDownHandler, onClick: (evt) => {
          evt.preventDefault();
          this.toggleList();
        } }, this.getOptionLabelByValue(this.value)), ((this.type === 'typeahead' && this.isOpen))
      && h("input", { class: 'native-input', ref: input => this.nativeInput = input, type: 'text', "aria-labelledby": labelId, name: this.name, value: this.searchString, placeholder: this.placeholder, onBlur: this.blurHandler, onFocus: this.focusHandler, onInput: this.onInput, onKeyDown: this.keyDownHandler }), h("div", { class: 'input-actions' }, actions.map((action) => {
      return h("button", { type: 'button', class: {
          'action-button': true,
          'action-button-disabled': action.disabled,
        }, "aria-disabled": action.disabled, onClick: () => this.actionClickHandler(action) }, h("p4-icon", { type: action.icon, class: 'action-icon', size: this.getActionIconSize() }));
    }), !this.showLoader && this.getModeIcon())), h("div", { class: "dropdown-result" }, this.isOpen && this.renderDropdownList()))));
  }
  getModeIcon() {
    return h("button", { class: 'action-button mode-button', type: 'button', onClick: (evt) => {
        evt.preventDefault();
        if (this.clearInput && this.hasValue()) {
          if (!this.disabled)
            this.changeHandler();
        }
        else {
          this.toggleList();
        }
      } }, h("p4-icon", { type: this.isOpen ? 'chevron-up' : 'chevron-down', size: this.getActionIconSize(), class: 'action-icon mode-icon' }), h("p4-icon", { type: 'x-circle-fill', size: this.getActionIconSize(), class: 'action-icon clear-icon' }));
  }
  renderDropdownList() {
    if (typeof this.data !== 'string') {
      if (this.showLoader) {
        return h("div", { class: 'search-loader' }, h("p4-spinner", { size: this.getActionIconSize() }), "Loading...");
      }
      else {
        const data = this.filterData();
        return h("p4-list", { ref: (el) => this.listElement = el, data: data, value: this.value, "onP4:item-click": (evt) => {
            this.closeList();
            this.changeHandler(evt.detail.item);
          } });
      }
    }
  }
  filterData() {
    if (this.managed)
      return this.data;
    return this.data.filter((item) => {
      return (!this.searchString || this.getItemLabel(item).toLocaleLowerCase().includes(this.searchString.toLocaleLowerCase()));
    });
  }
  get elm() { return getElement(this); }
};
P4Select.style = p4SelectCss;

export { P4Select as p4_select };

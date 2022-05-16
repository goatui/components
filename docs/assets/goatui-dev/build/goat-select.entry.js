import { r as registerInstance, f as createEvent, h, e as Host, g as getElement } from './index-a0beba19.js';
import { g as getComponentIndex, d as debounceEvent, a as isMobile, b as isOutOfViewport } from './utils-5b2b26db.js';

const selectCss = "*{box-sizing:border-box}:host{font-family:var(--font-family-base)}::selection{color:var(--color-white, #ffffff);background:var(--color-primary, var(--color-blue-60, #0f62fe))}::-webkit-scrollbar{width:1rem;height:1rem}::-webkit-scrollbar-track{background:#f1f1f1}::-webkit-scrollbar-thumb{background:#888}::-webkit-scrollbar-thumb :hover{background:#555}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.center-content{display:flex;align-items:center;justify-content:center}:host([hidden]){display:none}@keyframes reveal{0%{opacity:0;transform:translateY(8px)}}:host{display:block;margin-bottom:var(--spacing-3, 0.75rem);--input-border-radius:var(--border-radius, 3px);--input-border-style:solid;color:var(--text-primary, var(--color-gray-100, #161616))}.input-container{position:relative;display:flex;align-items:center;justify-content:center;background-color:var(--field-01, var(--color-gray-10, #f4f4f4));border:1px var(--input-border-style) var(--ui-04, var(--color-gray-50, #8d8d8d));border-radius:var(--input-border-radius);overflow:hidden;cursor:text;font-weight:var(--font-weight-regular);gap:var(--spacing-2, 0.5rem)}.input-container .input{flex:1;border:none;outline:none;background:none;width:100%;cursor:inherit;padding:0;color:var(--text-primary, var(--color-gray-100, #161616))}.input-container .input::placeholder{color:var(--text-placeholder, var(--color-gray-40, #a8a8a8))}.input-container .slot-container{display:flex;align-items:center;justify-content:center;line-height:0}.input-container .slot-container slot::slotted(*){padding-bottom:0 !important;margin-bottom:0 !important;color:var(--color-neutral-400, )}.input-container .slot-container slot::slotted(*) goat-icon{--color:var(--color-neutral-400, )}.input-container.start-slot-has-content .input{padding-left:var(--spacing-2, 0.5rem)}.input-container.end-slot-has-content .input{padding-right:var(--spacing-2, 0.5rem)}.input-container:not(.start-slot-has-content) .slot-container.start{display:none}.input-container:not(.end-slot-has-content) .slot-container.end{display:none}.input-container .input-action{cursor:pointer}.input-container .input-action:hover{--text-color:var(--text-secondary)}:host(.light) .input-container{background-color:var(--field-02, #ffffff)}.input-container.has-focus{outline:2px solid var(--color-primary, var(--color-blue-60, #0f62fe));border-color:transparent}:host-context(.input-statesuccess) .input-container{border-color:var(--support-success, #198038)}:host-context(.input-statesuccess) .input-container.has-focus{outline:2px solid var(--support-success, #198038)}:host-context(.input-statewarning) .input-container{border-color:var(--support-warning, #f1c21b)}:host-context(.input-statewarning) .input-container.has-focus{outline:2px solid var(--support-warning, #f1c21b)}:host-context(.input-stateerror) .input-container{border-color:var(--support-error, #da1e28)}:host-context(.input-stateerror) .input-container.has-focus{outline:2px solid var(--support-error, #da1e28)}:host([size=sm]) .input-container{padding:0.5rem 0.75rem;min-height:2.375rem}:host([size=sm]) .input-container .input{font-size:var(--text-sm-font-size, 0.875rem);line-height:var(--text-sm-line-height, 1.25rem);letter-spacing:var(--text-sm-letter-spacing, 0rem)}:host([size=sm]) .input-container slot::slotted(*){font-size:var(--text-sm-font-size, 0.875rem);line-height:var(--text-sm-line-height, 1.25rem);letter-spacing:var(--text-sm-letter-spacing, 0rem)}:host([size=md]) .input-container{padding:0.625rem 0.875rem;min-height:2.875rem}:host([size=md]) .input-container .input{font-size:var(--text-md-font-size, 1rem);line-height:var(--text-md-line-height, 1.5rem);letter-spacing:var(--text-md-letter-spacing, 0rem)}:host([size=md]) .input-container slot::slotted(*){font-size:var(--text-md-font-size, 1rem);line-height:var(--text-md-line-height, 1.5rem);letter-spacing:var(--text-md-letter-spacing, 0rem)}:host([size=lg]) .input-container{padding:0.75rem 1rem;min-height:3.375rem}:host([size=lg]) .input-container .input{font-size:var(--text-lg-font-size, 1.125rem);line-height:var(--text-lg-line-height, 1.75rem);letter-spacing:var(--text-lg-letter-spacing, 0rem)}:host([size=lg]) .input-container slot::slotted(*){font-size:var(--text-lg-font-size, 1.125rem);line-height:var(--text-lg-line-height, 1.75rem);letter-spacing:var(--text-lg-letter-spacing, 0rem)}:host([success]) .input-container{border-color:var(--color-success, #198038)}:host([error]) .input-container{border-color:var(--color-error, #da1e28);box-shadow:0 0 0 0.25rem rgba(239, 68, 68, 0.25)}:host([readonly]) .input-container{cursor:initial;background-color:var(--disabled-01, var(--color-gray-10, #f4f4f4)) !important;border-color:var(--disabled-01, var(--color-gray-10, #f4f4f4)) !important;opacity:1 !important}:host([disabled]){color:var(--text-disabled, var(--color-gray-30, #c6c6c6)) !important}:host([disabled]) .input-container{cursor:not-allowed;background-color:var(--disabled-01, var(--color-gray-10, #f4f4f4)) !important;border-color:var(--disabled-01, var(--color-gray-10, #f4f4f4)) !important;opacity:1 !important}:host([disabled]) .input-container .input{color:var(--text-disabled, var(--color-gray-30, #c6c6c6)) !important}input::-webkit-outer-spin-button,input::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}input[type=number]{-moz-appearance:textfield}.dropdown{position:relative}.dropdown .dropdown-content{z-index:var(--z-index-dropdown-content, 40);position:absolute;width:max-content;line-height:0;transform:scale(0);transition:transform 0.1s ease-out 0s}.dropdown .chevron-down{transition:transform 0.1s ease-out 0s}.dropdown.is-open .dropdown-content{transform:scale(1)}.dropdown.is-open .chevron-down{transform:rotate(180deg)}.dropdown.bottom-right .dropdown-content{top:calc(100% + var(--spacing-2, 0.5rem));left:0;transform-origin:top}.dropdown.bottom-left .dropdown-content{top:calc(100% + var(--spacing-2, 0.5rem));right:0;transform-origin:top}.dropdown.top-right .dropdown-content{bottom:calc(100% + var(--spacing-2, 0.5rem));left:0;transform-origin:bottom}.dropdown.top-left .dropdown-content{bottom:calc(100% + var(--spacing-2, 0.5rem));right:0;transform-origin:bottom}.dropdown.center .dropdown-content{top:0;left:0;position:fixed;transform-origin:center;display:flex;align-items:center;width:100vw;height:100vh;justify-content:center;background:rgba(0, 0, 0, 0.5);pointer-events:none}.select .dropdown-content{width:100%;min-width:10rem}.select .menu{width:100%}.select .display-value{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;cursor:pointer}.select .multi-select-value{padding-inline-end:var(--spacing-2, 0.5rem)}.select .multi-select-value:last-child{padding-inline-end:0}.select .input-container:not(.has-value) .display-value{color:var(--text-placeholder, var(--color-gray-40, #a8a8a8))}.select .start-search{height:10rem;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:var(--spacing-3, 0.75rem)}";

const Select = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.goatChange = createEvent(this, "goat:change", 7);
    this.p4ActionClick = createEvent(this, "goat:action-click", 7);
    this.goatSearch = createEvent(this, "goat:search", 7);
    this.gid = getComponentIndex();
    /**
     * The input field name.
     */
    this.name = `goat-input-${this.gid}`;
    /**
     * The input field value.
     */
    this.value = '';
    this.multiple = false;
    /**
     * The select input size.
     * Possible values are: `"sm"`, `"md"`, `"lg"`. Defaults to `"md"`.
     */
    this.size = 'md';
    /**
     * Search type
     * Possible values are `"none"`, `"initial"`, `"contains"`, `"managed"`. Defaults to `"none"`.
     */
    this.search = 'none';
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
     * If true, the user cannot interact with the button. Defaults to `false`.
     */
    this.disabled = false;
    /**
     * If true, the user cannot interact with the button. Defaults to `false`.
     */
    this.readonly = false;
    this.showLoader = false;
    this.isOpen = false;
    this.configAria = {};
    /**
     *  [{
     *    label: 'Shivaji Varma',
     *    value: 'shivaji-varma'
     *  }]
     */
    this.items = [];
    this.positions = 'bottom-right,top-right,bottom-left,top-left';
    /**
     * If `true`, a clear icon will appear in the input when there is a value. Clicking it clears the input.
     */
    this.clearable = false;
    /**
     * Set the amount of time, in milliseconds, to wait to trigger the `goatChange` event after each keystroke.
     */
    this.debounce = 300;
    this.hasFocus = false;
    this.searchString = '';
    this.startSlotHasContent = false;
    this.endSlotHasContent = false;
    this.selectHandler = (selectItemValue) => {
      if (!this.disabled && !this.readonly) {
        this.addItem(selectItemValue);
      }
      this.closeList();
    };
    this.clearInput = () => {
      if (!this.disabled && !this.readonly) {
        this.removeItem(this.value);
      }
    };
    this.blurHandler = () => {
      this.hasFocus = false;
    };
    this.focusHandler = () => {
      this.hasFocus = true;
    };
    this.closeList = () => {
      if (!this.disabled && !this.readonly && this.isOpen) {
        this.isOpen = false;
        setTimeout(() => this.setFocus(), 100);
      }
    };
    this.openList = () => {
      if (!this.disabled && !this.readonly && !this.isOpen) {
        this.isOpen = true;
        if (this.search !== 'none') {
          this.searchString = '';
          setTimeout(() => {
            const dropdownContent = this.dropdownContentElm;
            this.dropdownContentHeight = dropdownContent.getBoundingClientRect().height;
            this.dropdownContentWidth = dropdownContent.getBoundingClientRect().width;
            this.fixPosition();
            this.nativeInput.focus();
          }, 100);
        }
        else {
          setTimeout(() => {
            const dropdownContent = this.dropdownContentElm;
            this.dropdownContentHeight = dropdownContent.getBoundingClientRect().height;
            this.dropdownContentWidth = dropdownContent.getBoundingClientRect().width;
            this.fixPosition();
          }, 100);
        }
      }
    };
    this.toggleList = () => {
      if (this.isOpen)
        this.closeList();
      else
        this.openList();
    };
    this.keyDownHandler = (evt) => {
      if (evt.key === 'Enter') {
        evt.preventDefault();
        this.toggleList();
      }
      else if (evt.key === 'ArrowDown') {
        if (this.isOpen) {
          console.log('inside select');
          evt.preventDefault();
          this.menuElm.setFocus();
        }
      }
      else if (evt.key === 'ArrowUp') {
        if (this.isOpen) {
          evt.preventDefault();
          this.menuElm.setFocus(); // focus on previous item
        }
      }
    };
    this.onInput = (ev) => {
      const input = ev.target;
      this.searchString = input.value || '';
      this.goatSearch.emit({ value: this.searchString });
    };
  }
  /**
   * Sets focus on the native `input` in `ion-input`. Use this method instead of the global
   * `input.focus()`.
   */
  async setFocus() {
    this.displayElement.focus();
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
  debounceChanged() {
    this.goatSearch = debounceEvent(this.goatSearch, this.debounce);
  }
  windowClick(evt) {
    const path = (evt.path || evt.composedPath());
    for (const elm of path) {
      if (elm == this.elm)
        return;
    }
    this.isOpen = false;
  }
  menuItemClick(evt) {
    this.selectHandler(evt.detail.value);
  }
  async getComponentId() {
    return this.gid;
  }
  tagDismissClick(evt) {
    this.removeItem(evt.detail.value);
  }
  getValues() {
    if (this.value)
      return this.value.toString().split(',');
    else
      return [];
  }
  addItem(selectItemValue) {
    let value = this.getValues();
    if (!value.includes(selectItemValue)) {
      if (!this.multiple)
        value = [];
      value.push(selectItemValue);
      this.value = value.join(',');
      this.goatChange.emit({ value: this.value, newItem: this.getItemByValue(selectItemValue) });
    }
  }
  removeItem(selectItemValue) {
    let value = this.getValues();
    if (value.includes(selectItemValue)) {
      value = value.filter(item => item !== selectItemValue);
      this.value = value.join(',');
      this.goatChange.emit({ value: this.value, removedItem: this.getItemByValue(selectItemValue) });
    }
  }
  hasValue() {
    return (this.value || '').toString().length > 0;
  }
  getItemByValue(value) {
    if (this.items) {
      return this.items.find((item) => {
        return item.value == value;
      });
    }
  }
  getDisplayValue() {
    if (!this.multiple) {
      if (this.items) {
        const item = this.getItemByValue(this.value);
        if (item) {
          return item.label;
        }
      }
      if (!this.disabled && !this.readonly) {
        return this.placeholder;
      }
      else {
        return h("span", null, "\u00A0");
      }
    }
    else {
      if (!this.value && !this.disabled && !this.readonly) {
        return this.placeholder;
      }
      else {
        return h("span", null, "\u00A0");
      }
    }
  }
  componentWillLoad() {
    if (this.positions)
      this.position = this.positions.split(',')[0];
    this.elm.getAttributeNames().forEach((name) => {
      if (name.includes('aria-')) {
        this.configAria[name] = this.elm.getAttribute(name);
        this.elm.removeAttribute(name);
      }
    });
    this.startSlotHasContent = !!this.elm.querySelector('[slot="start"]');
    this.endSlotHasContent = !!this.elm.querySelector('[slot="end"]');
  }
  fixPosition() {
    if (this.isOpen && this.dropdownContentHeight && this.dropdownContentWidth) {
      if (isMobile()) {
        this.position = 'center';
        return;
      }
      const positions = this.positions.split(',');
      for (let i = 0; i < positions.length; i++) {
        const dropdownButtonRect = this.elm.getBoundingClientRect();
        const dropdownContentRect = {};
        if (positions[i] === 'bottom-right') {
          dropdownContentRect.top = dropdownButtonRect.top + dropdownButtonRect.height;
          dropdownContentRect.bottom = dropdownContentRect.top + this.dropdownContentHeight;
          dropdownContentRect.left = dropdownButtonRect.left;
          dropdownContentRect.right = dropdownButtonRect.left + this.dropdownContentWidth;
        }
        else if (positions[i] === 'top-right') {
          dropdownContentRect.top = dropdownButtonRect.top - this.dropdownContentHeight;
          dropdownContentRect.bottom = dropdownButtonRect.top;
          dropdownContentRect.left = dropdownButtonRect.left;
          dropdownContentRect.right = dropdownButtonRect.left + this.dropdownContentWidth;
        }
        else if (positions[i] === 'bottom-left') {
          dropdownContentRect.top = dropdownButtonRect.top + dropdownButtonRect.height;
          dropdownContentRect.bottom = dropdownContentRect.top + this.dropdownContentHeight;
          dropdownContentRect.left = dropdownButtonRect.left - this.dropdownContentWidth;
          dropdownContentRect.right = dropdownButtonRect.left;
        }
        else if (positions[i] === 'top-left') {
          dropdownContentRect.top = dropdownButtonRect.top - this.dropdownContentHeight;
          dropdownContentRect.bottom = dropdownButtonRect.top;
          dropdownContentRect.left = dropdownButtonRect.left - this.dropdownContentWidth;
          dropdownContentRect.right = dropdownButtonRect.left;
        }
        const isOut = isOutOfViewport(dropdownContentRect);
        if (!isOut.any) {
          this.position = positions[i];
          break;
        }
      }
    }
  }
  ;
  connectedCallback() {
    this.debounceChanged();
  }
  renderMultiSelectValues() {
    const values = this.getValues();
    if (this.multiple && values.length) {
      return values.map((value) => {
        const item = this.getItemByValue(value);
        if (item) {
          return (h("goat-tag", { filter: true, class: 'multi-select-value', value: item.value }, item.label));
        }
      });
    }
  }
  render() {
    return (h(Host, { "has-value": this.hasValue(), "has-focus": this.hasFocus, "is-open": this.isOpen, position: this.position }, h("div", { class: { 'dropdown': true, 'select': true, [this.position]: true, 'is-open': this.isOpen } }, h("div", { class: {
        'input-container': true,
        [`search-${this.search}`]: true,
        'has-focus': this.hasFocus,
        'disabled': this.disabled,
        'readonly': this.readonly,
        'has-value': this.hasValue(),
        'start-slot-has-content': this.startSlotHasContent,
        'end-slot-has-content': this.endSlotHasContent,
      } }, h("div", { class: 'slot-container start' }, h("slot", { name: 'start' })), h("div", { class: 'multi-select-values' }, this.renderMultiSelectValues()), (() => {
      if (this.search !== 'none' && this.isOpen) {
        return h("input", Object.assign({ class: 'input input-native', ref: input => this.nativeInput = input, type: 'text', name: this.name, value: this.searchString, placeholder: this.placeholder, onBlur: this.blurHandler, onFocus: this.focusHandler, onInput: this.onInput, onKeyDown: this.keyDownHandler }, this.configAria));
      }
      else {
        return h("div", Object.assign({ class: 'input display-value', tabindex: '0', ref: input => this.displayElement = input, "aria-disabled": this.disabled ? 'true' : null, onFocus: this.focusHandler, onBlur: this.blurHandler, onKeyDown: this.keyDownHandler, onClick: (evt) => {
            evt.preventDefault();
            this.toggleList();
          } }, this.configAria), this.getDisplayValue());
      }
    })(), this.clearable && !this.multiple && this.hasValue() &&
      h("goat-icon", { class: 'clear input-action', name: 'x-circle-fill', size: this.size, onClick: this.clearInput, role: 'button' }), h("div", { class: 'slot-container end' }, h("slot", { name: 'end' })), this.getModeIcon()), h("div", { class: 'dropdown-content', ref: (elm) => this.dropdownContentElm = elm }, this.isOpen && this.renderDropdownList()))));
  }
  getModeIcon() {
    if (this.showLoader) {
      return h("goat-spinner", { class: 'input-action rainbow' });
    }
    if (!this.disabled && !this.readonly)
      return h("goat-icon", { name: 'chevron-down', size: this.size, class: 'input-action chevron-down', role: 'button', onClick: this.toggleList });
  }
  renderDropdownList() {
    if (this.search === 'managed' && !this.items.length) {
      return h("goat-menu", { class: 'menu', ref: (el) => this.menuElm = el }, h("div", { class: 'start-search' }, h("goat-icon", { name: 'search', size: this.size }), h("goat-text", { shade: 'secondary' }, "Start typing to perform search")));
    }
    if (this.items) {
      const filteredItems = this.filterItems();
      return h("goat-menu", { class: 'menu', empty: filteredItems.length == 0, ref: (el) => this.menuElm = el }, (() => {
        return filteredItems.map((item) => {
          return h("goat-menu-item", { value: item.value }, item.label || item.value);
        });
      })());
    }
  }
  filterItems() {
    if (this.search === 'managed')
      return this.items;
    return this.items.filter((item) => {
      return (!this.searchString || item.label.toLocaleLowerCase().includes(this.searchString.toLocaleLowerCase()));
    });
  }
  get elm() { return getElement(this); }
  static get watchers() { return {
    "debounce": ["debounceChanged"]
  }; }
};
Select.style = selectCss;

export { Select as goat_select };

//# sourceMappingURL=goat-select.entry.js.map
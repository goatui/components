import { Component, Element, Event, h, Host, Method, Prop, State, Watch } from '@stencil/core';
import { debounceEvent, findItemLabel } from '../../utils/utils';
let inputIds = 0;
export class P4Select {
  constructor() {
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
        this.p4Change.emit(item);
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
        if (this.options.length)
          this.activeOption = this.options[0];
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
    this.onBlur = () => {
      this.hasFocus = false;
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
    if (this.required)
      cls.push('required');
    if (this.disabled)
      cls.push('disabled');
    return cls.join(' ');
  }
  getActions() {
    return this.actions.map((action) => {
      return h("button", { type: "button", onClick: () => this.onActionClick(action) },
        h("p4-icon", { type: action.icon, size: "1rem", class: "icon" }));
    });
  }
  getModeIcon() {
    if (this.showLoader)
      return h("button", { type: "button", disabled: true },
        h("p4-spinner", { class: "icon", size: "1.5rem" }));
    else if (this.mode === 'read') {
      return h("button", { type: "button", onClick: () => setTimeout(() => this.setEditable()) },
        h("p4-icon", { type: "chevron-down", size: "1rem", class: "icon" }));
    }
    else {
      return h("button", { type: "button", disabled: true },
        h("p4-icon", { type: "search", size: "1rem", class: "icon" }));
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
        return h("div", { class: "select-result" },
          h("div", { class: "select-items" }, options.length ?
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
                (h("div", { class: "no-data" },
                  h("p4-icon", { type: "pencil", size: "100%" }),
                  h("div", { class: "no-data-text" }, "Please enter text to search")))
                : (h("div", { class: "no-data" },
                  h("p4-icon", { type: "inbox-fill", size: "100%" }),
                  h("div", { class: "no-data-text" }, "No data")))));
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
    this.optionsWatcher(this.options);
    this.configWatcher(this.config);
  }
  render() {
    const labelId = this.inputId + '-lbl';
    const label = findItemLabel(this.el);
    if (label) {
      label.id = labelId;
      if (this.required)
        label.classList.add('required');
    }
    return (h(Host, { "aria-disabled": this.disabled ? 'true' : null, class: { 'has-focus': this.hasFocus, 'has-value': this.hasValue() } },
      h("div", { class: this.getComponentStyleClasses() },
        h("input", { class: "native-input", ref: input => this.nativeInput = input, type: "text", "aria-labelledby": labelId, name: this.name, value: this.searchString, placeholder: this.placeholder, tabindex: this.tabindex, onBlur: this.onBlur, onFocus: this.onFocus, onInput: this.onInput, onKeyDown: this.onKeyDown }),
        h("div", { class: "select-selection-item display-value", tabindex: "1", onFocus: this.setEditable, onClick: this.setEditable }, this.getOptionLabelByValue(this.value)),
        h("div", { class: "input-actions" },
          (this.clearInput && !this.disabled && this.hasValue()) && h("button", { "aria-label": "reset", type: "button", class: "input-clear-icon", onTouchStart: this.clearTextInput, onMouseDown: this.clearTextInput, onKeyDown: this.clearTextOnEnter },
            h("p4-icon", { type: "x", size: "1.1rem", class: "icon" })),
          this.getActions(),
          this.getModeIcon()),
        this.getOptions())));
  }
  static get is() { return "p4-select"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["p4-select.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["p4-select.css"]
  }; }
  static get properties() { return {
    "name": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The input field name."
      },
      "attribute": "name",
      "reflect": false,
      "defaultValue": "this.inputId"
    },
    "placeholder": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The input field placeholder."
      },
      "attribute": "placeholder",
      "reflect": false
    },
    "value": {
      "type": "any",
      "mutable": true,
      "complexType": {
        "original": "string | number | undefined",
        "resolved": "number | string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The input field value."
      },
      "attribute": "value",
      "reflect": false
    },
    "size": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'sm' | 'md' | 'lg'",
        "resolved": "\"lg\" | \"md\" | \"sm\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The button size.\nPossible values are: `\"sm\"`, `\"md\"`, `\"lg\"`. Defaults to `\"md\"`."
      },
      "attribute": "size",
      "reflect": false,
      "defaultValue": "'md'"
    },
    "variant": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'default' | 'dashed'",
        "resolved": "\"dashed\" | \"default\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Button variants\nPossible values are `\"default\"`, `\"dashed\"`. Defaults to `\"default\"`."
      },
      "attribute": "variant",
      "reflect": false,
      "defaultValue": "'default'"
    },
    "required": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "If true, required icon is show. Defaults to `false`."
      },
      "attribute": "required",
      "reflect": false,
      "defaultValue": "false"
    },
    "disabled": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "If true, the user cannot interact with the button. Defaults to `false`."
      },
      "attribute": "disabled",
      "reflect": false,
      "defaultValue": "false"
    },
    "showLoader": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "show-loader",
      "reflect": false,
      "defaultValue": "false"
    },
    "filterOptions": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "filter-options",
      "reflect": false,
      "defaultValue": "true"
    },
    "config": {
      "type": "any",
      "mutable": false,
      "complexType": {
        "original": "any | string",
        "resolved": "any",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "config",
      "reflect": false,
      "defaultValue": "{ itemValue: 'value', itemLabel: 'label' }"
    },
    "options": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "any[] | string",
        "resolved": "any[] | string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "If true, the user cannot interact with the button. Defaults to `false`."
      },
      "attribute": "options",
      "reflect": false,
      "defaultValue": "[]"
    },
    "actions": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "any[]",
        "resolved": "any[]",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "defaultValue": "[]"
    },
    "clearInput": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "If `true`, a clear icon will appear in the input when there is a value. Clicking it clears the input."
      },
      "attribute": "clear-input",
      "reflect": false,
      "defaultValue": "false"
    },
    "debounce": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Set the amount of time, in milliseconds, to wait to trigger the `onChange` event after each keystroke."
      },
      "attribute": "debounce",
      "reflect": false,
      "defaultValue": "0"
    }
  }; }
  static get states() { return {
    "activeOption": {},
    "hasFocus": {},
    "mode": {},
    "searchString": {}
  }; }
  static get events() { return [{
      "method": "p4Input",
      "name": "p4Input",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Emitted when a keyboard input occurred."
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }, {
      "method": "p4Change",
      "name": "p4Change",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Emitted when the value has changed.."
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }, {
      "method": "p4ActionClick",
      "name": "p4ActionClick",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Emitted when the action button is clicked.."
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }, {
      "method": "p4Blur",
      "name": "p4Blur",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Emitted when the input loses focus."
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }, {
      "method": "p4Focus",
      "name": "p4Focus",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Emitted when the input has focus."
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
  static get methods() { return {
    "setFocus": {
      "complexType": {
        "signature": "() => Promise<void>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "Sets focus on the native `input` in `ion-input`. Use this method instead of the global\n`input.focus()`.",
        "tags": []
      }
    },
    "setBlur": {
      "complexType": {
        "signature": "() => Promise<void>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "Sets blur on the native `input` in `ion-input`. Use this method instead of the global\n`input.blur()`.",
        "tags": []
      }
    }
  }; }
  static get elementRef() { return "el"; }
  static get watchers() { return [{
      "propName": "debounce",
      "methodName": "debounceChanged"
    }, {
      "propName": "options",
      "methodName": "optionsWatcher"
    }, {
      "propName": "config",
      "methodName": "configWatcher"
    }]; }
}

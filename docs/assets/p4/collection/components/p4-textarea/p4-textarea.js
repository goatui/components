import { Component, Element, Event, h, Host, Method, Prop, State, Watch } from '@stencil/core';
import { debounceEvent, findItemLabel } from '../../utils/utils';
let inputIds = 0;
export class P4Textarea {
  constructor() {
    this.inputId = `p4-textarea-${inputIds++}`;
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
     * If true, the form will be in inline format. Defaults to `false`.
     */
    this.inline = false;
    /**
     * Button variants
     * Possible values are `"text"`. Defaults to `"text"`.
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
     * Set the amount of time, in milliseconds, to wait to trigger the `ionChange` event after each keystroke.
     */
    this.debounce = 0;
    this.onInputChange = (ev) => {
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
  debounceChanged() {
    this.p4Change = debounceEvent(this.p4Change, this.debounce);
  }
  getCssClasses() {
    const cls = ['component input-component textarea-component'];
    cls.push('variant-' + this.variant);
    cls.push('size-' + this.size);
    cls.push('type-' + this.type);
    if (this.required)
      cls.push('required');
    if (this.disabled)
      cls.push('disabled');
    return cls.join(' ');
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
    return (this.value || '').toString();
  }
  hasValue() {
    return this.getValue().length > 0;
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
    return (h(Host, { "aria-disabled": this.disabled ? 'true' : null, class: { 'has-focus': this.hasFocus, 'has-value': this.hasValue() } },
      h("div", { class: this.getCssClasses() },
        h("textarea", { rows: 4, ref: input => this.nativeInput = input, required: this.required, class: "native-input", name: this.name, "aria-labelledby": labelId, placeholder: this.placeholder, value: value, tabindex: this.tabindex, onInput: this.onInputChange, onBlur: this.onBlur, onFocus: this.onFocus, disabled: this.disabled }),
        h("div", { class: "input-actions" }, (this.clearInput && !this.disabled && this.hasValue()) && h("button", { "aria-label": "reset", type: "button", class: "input-clear-icon", onTouchStart: this.clearTextInput, onMouseDown: this.clearTextInput, onKeyDown: this.clearTextOnEnter },
          h("p4-icon", { type: "x", size: "1.1rem", class: "icon" }))))));
  }
  static get is() { return "p4-textarea"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["p4-textarea.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["p4-textarea.css"]
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
    "inline": {
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
        "text": "If true, the form will be in inline format. Defaults to `false`."
      },
      "attribute": "inline",
      "reflect": false,
      "defaultValue": "false"
    },
    "type": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'text' | 'number'",
        "resolved": "\"number\" | \"text\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Button variants\nPossible values are `\"text\"`. Defaults to `\"text\"`."
      },
      "attribute": "type",
      "reflect": false,
      "defaultValue": "'text'"
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
        "text": "Set the amount of time, in milliseconds, to wait to trigger the `ionChange` event after each keystroke."
      },
      "attribute": "debounce",
      "reflect": false,
      "defaultValue": "0"
    }
  }; }
  static get states() { return {
    "hasFocus": {}
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
      "propName": "value",
      "methodName": "valueChanged"
    }]; }
}

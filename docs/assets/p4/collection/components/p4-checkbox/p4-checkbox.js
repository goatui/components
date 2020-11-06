import { Component, Event, h, Host, Prop } from '@stencil/core';
export class P4Checkbox {
  constructor() {
    /**
     * Button variants
     * Possible values are `"default"`, `"dashed"`. Defaults to `"default"`.
     */
    this.variant = 'default';
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
    this.onChange = (event) => {
      if (!this.disabled) {
        this.value = !JSON.parse(event.target.value);
        this.p4Change.emit(event);
      }
    };
  }
  getCssClasses() {
    const cls = ['checkbox-component'];
    cls.push('variant-' + this.variant);
    cls.push('size-' + this.size);
    if (this.required)
      cls.push('required');
    if (this.disabled)
      cls.push('disabled');
    return cls.join(' ') + ' ';
  }
  render() {
    return (h(Host, null,
      h("div", { class: this.getCssClasses() },
        h("label", { class: "checkbox-wrapper" },
          h("span", { class: { 'checkbox': true, 'checkbox-checked': this.value, 'checkbox-disabled': this.disabled } },
            h("input", { type: "checkbox", class: "checkbox-input", value: this.value + '', onClick: this.onChange, disabled: this.disabled }),
            h("span", { class: "checkbox-inner" })),
          this.label && h("span", null, this.label)))));
  }
  static get is() { return "p4-checkbox"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["p4-checkbox.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["p4-checkbox.css"]
  }; }
  static get properties() { return {
    "label": {
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
        "text": "The checkbox label."
      },
      "attribute": "label",
      "reflect": false
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
    "value": {
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
        "text": "The input field value."
      },
      "attribute": "value",
      "reflect": false,
      "defaultValue": "false"
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
    }
  }; }
  static get events() { return [{
      "method": "p4Change",
      "name": "p4Change",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "On change of input a CustomEvent 'p4Change' will be triggered. Event details contains parent event, oldValue, newValue of input."
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
}

import { Component, Event, h, Host, Prop } from '@stencil/core';
export class P4Button {
  constructor() {
    /**
     * Button size.
     * Possible values are `"sm"`, `"md"`, `"lg"`. Defaults to `"md"`.
     */
    this.size = 'md';
    /**
     * Button variants
     * Possible values are `"default"`, `"primary"`, `"dashed"`, `"danger"`, `"link"`. Defaults to `"default"`.
     */
    this.variant = 'default';
    /**
     * If true, fits button width to its parent width. Defaults to `false`.
     */
    this.block = false;
    /**
     * If true, the user cannot interact with the button. Defaults to `false`.
     */
    this.disabled = false;
    this.onClick = (event) => {
      if (!this.disabled)
        this.p4Click.emit(event);
    };
  }
  getCssClasses() {
    let css = ['button-component'];
    if (this.block)
      css.push('block');
    css.push(`variant-${this.variant}`);
    css.push(`size-${this.size}`);
    return css.join(' ');
  }
  render() {
    return (h(Host, null,
      h("button", { class: this.getCssClasses(), onClick: this.onClick, disabled: this.disabled },
        h("slot", null))));
  }
  static get is() { return "p4-button"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["p4-button.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["p4-button.css"]
  }; }
  static get properties() { return {
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
        "text": "Button size.\nPossible values are `\"sm\"`, `\"md\"`, `\"lg\"`. Defaults to `\"md\"`."
      },
      "attribute": "size",
      "reflect": false,
      "defaultValue": "'md'"
    },
    "variant": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'default' | 'primary' | 'dashed' | 'danger' | 'link'",
        "resolved": "\"danger\" | \"dashed\" | \"default\" | \"link\" | \"primary\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Button variants\nPossible values are `\"default\"`, `\"primary\"`, `\"dashed\"`, `\"danger\"`, `\"link\"`. Defaults to `\"default\"`."
      },
      "attribute": "variant",
      "reflect": false,
      "defaultValue": "'default'"
    },
    "block": {
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
        "text": "If true, fits button width to its parent width. Defaults to `false`."
      },
      "attribute": "block",
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
      "method": "p4Click",
      "name": "p4Click",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "On click of button a CustomEvent 'p4Click' will be triggered."
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
}

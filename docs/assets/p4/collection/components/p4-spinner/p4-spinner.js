import { Component, h, Host, Prop } from '@stencil/core';
export class P4Spinner {
  constructor() {
    /**
     * Spinner variants to add additional styling
     * Possible values are `"default"`, `"primary"`, `"danger"`, `"success"`. Defaults to `"default"`.
     */
    this.variant = 'default';
    /**
     * The Icon size.
     * Possible values are: `"sm"`, `"md"`, `"lg"`. Defaults to `"md"`.
     */
    this.size = 'md';
  }
  getSize() {
    let size = '16px';
    if (this.size === 'lg')
      size = '32px';
    else if (this.size === 'sm')
      size = '12px';
    else if (this.size === 'md')
      size = '16px';
    else if (typeof this.size === 'string')
      size = this.size;
    return size;
  }
  getCssClasses() {
    const cls = ['spinner-component'];
    cls.push('variant-' + this.variant);
    return cls.join(' ');
  }
  render() {
    return (h(Host, null,
      h("div", { class: this.getCssClasses() },
        h("svg", { version: "1.1", class: "loader icon-svg", x: "0px", y: "0px", width: this.getSize(), height: this.getSize(), viewBox: "0 0 50 50", fill: "currentColor" },
          h("path", { fill: "#000", d: "M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z" },
            h("animateTransform", { attributeType: "xml", attributeName: "transform", type: "rotate", from: "0 25 25", to: "360 25 25", dur: "0.6s", repeatCount: "indefinite" }))))));
  }
  static get is() { return "p4-spinner"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["p4-spinner.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["p4-spinner.css"]
  }; }
  static get properties() { return {
    "variant": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'default' | 'primary' | 'danger' | 'success'",
        "resolved": "\"danger\" | \"default\" | \"primary\" | \"success\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Spinner variants to add additional styling\nPossible values are `\"default\"`, `\"primary\"`, `\"danger\"`, `\"success\"`. Defaults to `\"default\"`."
      },
      "attribute": "variant",
      "reflect": false,
      "defaultValue": "'default'"
    },
    "size": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'sm' | 'md' | 'lg' | string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The Icon size.\nPossible values are: `\"sm\"`, `\"md\"`, `\"lg\"`. Defaults to `\"md\"`."
      },
      "attribute": "size",
      "reflect": false,
      "defaultValue": "'md'"
    }
  }; }
}

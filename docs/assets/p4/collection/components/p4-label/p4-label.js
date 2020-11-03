import { Component, Host, h } from '@stencil/core';
export class P4Label {
  render() {
    return (h(Host, null,
      h("div", { class: "label-component" },
        h("slot", null))));
  }
  static get is() { return "p4-label"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["p4-label.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["p4-label.css"]
  }; }
}

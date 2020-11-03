import { Component, Host, h } from '@stencil/core';
export class P4Item {
  render() {
    return (h(Host, null,
      h("slot", null)));
  }
  static get is() { return "p4-item"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["p4-item.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["p4-item.css"]
  }; }
}

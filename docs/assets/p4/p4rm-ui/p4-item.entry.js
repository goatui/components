import { r as registerInstance, h, f as Host } from './index-db81e240.js';

const p4ItemCss = ":host{display:block}";

const P4Item = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
};
P4Item.style = p4ItemCss;

export { P4Item as p4_item };

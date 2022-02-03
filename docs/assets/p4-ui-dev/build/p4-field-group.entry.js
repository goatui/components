import { r as registerInstance, h, f as Host } from './index-8956d8c0.js';

const p4FieldGroupCss = ":host{display:block;padding-bottom:v(space-1)}";

const P4FieldGroup = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
};
P4FieldGroup.style = p4FieldGroupCss;

export { P4FieldGroup as p4_field_group };

import { r as registerInstance, h, f as Host } from './index-8956d8c0.js';

const p4ParagraphCss = ":host{display:block}";

const P4Paragraph = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
};
P4Paragraph.style = p4ParagraphCss;

export { P4Paragraph as p4_paragraph };

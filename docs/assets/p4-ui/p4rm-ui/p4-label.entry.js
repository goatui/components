import { r as registerInstance, h, f as Host } from './index-4fe82ab4.js';

const p4LabelCss = "*{box-sizing:border-box}::selection{color:#fff;background:#1890ff}:host{display:block}:host-context(.item){--color:initial;display:block;color:var(--color);font-family:var(--font-normal, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol);font-size:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;box-sizing:border-box}:host([text-wrap]){white-space:normal}::slotted(*) h1,::slotted(*) h2,::slotted(*) h3,::slotted(*) h4,::slotted(*) h5,::slotted(*) h6{text-overflow:inherit;overflow:inherit}.label-component{padding-bottom:0.5rem;display:inline-block}:host(.required)::before{display:inline-block;margin-right:4px;color:var(--color-red-6, #ff4c47);font-size:14px;font-family:SimSun, sans-serif;line-height:1;content:\"*\"}";

const P4Label = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("div", { class: "label-component" }, h("slot", null))));
  }
};
P4Label.style = p4LabelCss;

export { P4Label as p4_label };

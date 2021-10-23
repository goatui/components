import { r as registerInstance, h, f as Host } from './index-8956d8c0.js';

const p4LabelCss = "*{box-sizing:border-box}::selection{color:var(--color-shades-white);background:var(--color-primary-500)}::-webkit-scrollbar{width:10px}::-webkit-scrollbar-track{background:#f1f1f1}::-webkit-scrollbar-thumb{background:#888}::-webkit-scrollbar-thumb :hover{background:#555}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.center-content{display:flex;align-items:center;justify-content:center}:host{display:block;padding-bottom:var(--space-2, 0.5rem)}.label{font-family:var(--font-family-paragraph, \"Roboto\", sans-serif);font-style:normal;font-weight:normal;font-size:var(--font-size-p1, 0.875rem);line-height:var(--line-height-p1, 1.0625rem);letter-spacing:-0.04em;color:var(--color-neutral-900, #0f172a);overflow:hidden;white-space:nowrap;text-overflow:ellipsis;width:100%}.label .required{color:var(--color-error-500, #ef4444);padding-right:var(--space-1, 0.25rem)}";

const P4Label = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.required = false;
  }
  render() {
    return (h(Host, null, h("div", { class: "label" }, this.required && h("span", { class: "required" }, "*"), h("slot", null))));
  }
};
P4Label.style = p4LabelCss;

export { P4Label as p4_label };

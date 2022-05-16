import { r as registerInstance, h, e as Host, g as getElement } from './index-a0beba19.js';

const dividerCss = "*{box-sizing:border-box}:host{font-family:var(--font-family-base)}::selection{color:var(--color-white, #ffffff);background:var(--color-primary, var(--color-blue-60, #0f62fe))}::-webkit-scrollbar{width:1rem;height:1rem}::-webkit-scrollbar-track{background:#f1f1f1}::-webkit-scrollbar-thumb{background:#888}::-webkit-scrollbar-thumb :hover{background:#555}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.center-content{display:flex;align-items:center;justify-content:center}:host([hidden]){display:none}@keyframes reveal{0%{opacity:0;transform:translateY(8px)}}:host{color:var(--text-secondary, var(--color-gray-70, #525252));display:block}.divider{display:flex;margin:0}.divider:not(.vertical){width:100%;padding:var(--spacing-2, 0.5rem) 0;align-items:center;justify-content:center}.divider:not(.vertical) .line{width:100%;border-top:1px solid var(--border-color, var(--color-gray-50, #8d8d8d))}.divider:not(.vertical).has-content .slot-container{padding:0 var(--spacing-3, 0.75rem)}.divider.vertical{height:100%;padding:0 var(--spacing-2, 0.5rem);flex-direction:column;align-items:center;justify-content:center}.divider.vertical .line{height:100%;border-right:1px solid var(--border-color, var(--color-gray-50, #8d8d8d))}.divider.vertical.has-content .slot-container{padding:var(--spacing-3, 0.75rem) 0}:host(:not([vertical])){width:auto}:host([vertical]){height:auto}";

const Divider = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.vertical = false;
    this.slotHasContent = false;
  }
  componentWillLoad() {
    this.slotHasContent = this.elm.hasChildNodes();
  }
  render() {
    return (h(Host, null, h("div", { class: {
        'divider': true,
        'vertical': this.vertical,
        'has-content': this.slotHasContent,
      } }, h("div", { class: "line" }), h("div", { class: 'slot-container' }, h("slot", null)), h("div", { class: "line" }))));
  }
  get elm() { return getElement(this); }
};
Divider.style = dividerCss;

export { Divider as goat_divider };

//# sourceMappingURL=goat-divider.entry.js.map
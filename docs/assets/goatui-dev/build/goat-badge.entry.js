import { r as registerInstance, h, e as Host } from './index-433d423f.js';

const badgeCss = "*{box-sizing:border-box}:host{font-family:var(--font-family-base)}::selection{color:var(--color-white, #ffffff);background:var(--color-primary, var(--color-blue-60, #0f62fe))}::-webkit-scrollbar{width:1rem;height:1rem}::-webkit-scrollbar-track{background:#f1f1f1}::-webkit-scrollbar-thumb{background:#888}::-webkit-scrollbar-thumb :hover{background:#555}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.center-content{display:flex;align-items:center;justify-content:center}:host([hidden]){display:none}@keyframes reveal{0%{opacity:0;transform:translateY(8px)}}:host{display:inline-block}.badge{position:relative}.badge-content{position:absolute;z-index:var(--z-index-badge, 20);top:-0.375rem;right:-0.375rem;color:var(--color-white, #ffffff);display:flex;justify-content:center;width:1.125rem;height:1.125rem;align-items:center;background-color:var(--badge-color, var(--color-neutral, var(--color-gray-60, #6f6f6f)));border-radius:50%;padding:var(--spacing-1, 0.25rem);font-family:var(--font-family-secondary, Arial, Helvetica, sans-serif);font-size:0.7rem}:host(.color-success) .badge-content{background-color:var(--color-success, #198038)}:host(.color-warning) .badge-content{background-color:var(--color-warning, #8e6a00)}:host(.color-error) .badge-content{background-color:var(--color-error, #da1e28)}";

let Badge = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("div", { class: 'badge' }, this.content && h("div", { class: 'badge-content' }, this.content), h("slot", null))));
  }
};
Badge.style = badgeCss;

export { Badge as goat_badge };

//# sourceMappingURL=goat-badge.entry.js.map
import { r as registerInstance, h, g as getElement } from './index-a0beba19.js';

const sidenavCss = "*{box-sizing:border-box}:host{font-family:var(--font-family-base)}::selection{color:var(--color-white, #ffffff);background:var(--color-primary, var(--color-blue-60, #0f62fe))}::-webkit-scrollbar{width:1rem;height:1rem}::-webkit-scrollbar-track{background:#f1f1f1}::-webkit-scrollbar-thumb{background:#888}::-webkit-scrollbar-thumb :hover{background:#555}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.center-content{display:flex;align-items:center;justify-content:center}:host([hidden]){display:none}@keyframes reveal{0%{opacity:0;transform:translateY(8px)}}:host{display:block}.sidenav{width:16rem;background:var(--background, #ffffff)}";

const Sidenav = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.showLoader = false;
  }
  componentWillLoad() {
  }
  render() {
    return h("div", { class: 'sidenav' }, h("slot", null));
  }
  get elm() { return getElement(this); }
};
Sidenav.style = sidenavCss;

export { Sidenav as goat_sidenav };

//# sourceMappingURL=goat-sidenav.entry.js.map
import { r as registerInstance, h, e as Host } from './index-433d423f.js';

const tabPanelCss = "*{box-sizing:border-box}:host{font-family:var(--font-family-base)}::selection{color:var(--color-white, #ffffff);background:var(--color-primary, var(--color-blue-60, #0f62fe))}::-webkit-scrollbar{width:1rem;height:1rem}::-webkit-scrollbar-track{background:#f1f1f1}::-webkit-scrollbar-thumb{background:#888}::-webkit-scrollbar-thumb :hover{background:#555}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.center-content{display:flex;align-items:center;justify-content:center}:host([hidden]){display:none}@keyframes reveal{0%{opacity:0;transform:translateY(8px)}}:host{display:none}:host([active]){display:block}";

let TabPanel = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.active = false;
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
};
TabPanel.style = tabPanelCss;

export { TabPanel as goat_tab_panel };

//# sourceMappingURL=goat-tab-panel.entry.js.map
import { r as registerInstance, h, e as Host, g as getElement } from './index-a0beba19.js';

const tabsListCss = "*{box-sizing:border-box}:host{font-family:var(--font-family-base)}::selection{color:var(--color-white, #ffffff);background:var(--color-primary, var(--color-blue-60, #0f62fe))}::-webkit-scrollbar{width:1rem;height:1rem}::-webkit-scrollbar-track{background:#f1f1f1}::-webkit-scrollbar-thumb{background:#888}::-webkit-scrollbar-thumb :hover{background:#555}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.center-content{display:flex;align-items:center;justify-content:center}:host([hidden]){display:none}@keyframes reveal{0%{opacity:0;transform:translateY(8px)}}.tabs-list{display:flex;position:relative}.tabs-list slot::slotted(goat-button){display:block;margin:0;--button-border-width:0.125rem;--button-border-radius:0}.tabs-list:before{content:\"\";position:absolute;bottom:0;display:block;width:100%;border-bottom:2px solid var(--border-color, var(--color-gray-50, #8d8d8d))}.tabs-list .tabs-container{display:flex;z-index:1}";

const TabsList = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.variant = 'line';
    this.managed = false;
  }
  tabClick(evt) {
    if (!this.managed) {
      this.deselectAllTabs();
      evt.target.selected = true;
      if (evt.detail.target) {
      }
      else {
        console.warn("goat-tabs:: No target associated");
      }
    }
  }
  deselectAllTabs() {
    const tabs = this.elm.querySelectorAll('goat-tab');
    tabs.forEach(tab => {
      tab.selected = false;
    });
  }
  render() {
    return (h(Host, null, h("div", { class: { 'tabs-list': true, [`variant-${this.variant}`]: true } }, h("div", { class: "tabs-container" }, h("slot", null)))));
  }
  get elm() { return getElement(this); }
};
TabsList.style = tabsListCss;

export { TabsList as goat_tabs_list };

//# sourceMappingURL=goat-tabs-list.entry.js.map
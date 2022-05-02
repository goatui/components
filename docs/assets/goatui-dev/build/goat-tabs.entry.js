import { r as registerInstance, h, e as Host, g as getElement } from './index-433d423f.js';

const tabsCss = "*{box-sizing:border-box}:host{font-family:var(--font-family-base)}::selection{color:var(--color-white, #ffffff);background:var(--color-primary, var(--color-blue-60, #0f62fe))}::-webkit-scrollbar{width:1rem;height:1rem}::-webkit-scrollbar-track{background:#f1f1f1}::-webkit-scrollbar-thumb{background:#888}::-webkit-scrollbar-thumb :hover{background:#555}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.center-content{display:flex;align-items:center;justify-content:center}:host([hidden]){display:none}@keyframes reveal{0%{opacity:0;transform:translateY(8px)}}";

let Tabs = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  tabClick(evt) {
    if (evt.detail.target) {
      this.selectTab(evt.detail.target);
    }
  }
  selectTab(target) {
    const tabs = this.getTabs();
    for (let i = 0; i < tabs.length; i++) {
      tabs[i].selected = target === tabs[i].target;
    }
    const tabPanels = this.getTabPanels();
    for (let i = 0; i < tabPanels.length; i++) {
      tabPanels[i].active = target === tabPanels[i].value;
    }
  }
  getTabs() {
    return this.elm.querySelectorAll('goat-tab');
  }
  getTabPanels() {
    return this.elm.querySelectorAll('goat-tab-panel');
  }
  tabsHaveTarget() {
    return this.elm.querySelector('goat-tab[target]');
  }
  componentDidLoad() {
    if (!this.tabsHaveTarget()) {
      const tabs = this.getTabs();
      tabs.forEach((tab, index) => {
        tab.setAttribute('target', 'tab-' + index);
      });
      this.getTabPanels().forEach((tab, index) => {
        tab.setAttribute('value', 'tab-' + index);
      });
      if (tabs.length)
        this.selectTab('tab-0');
    }
    else {
      const selectedTab = this.elm.querySelector('goat-tab[selected]');
      if (selectedTab)
        this.selectTab(selectedTab['target']);
    }
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
  get elm() { return getElement(this); }
};
Tabs.style = tabsCss;

export { Tabs as goat_tabs };

//# sourceMappingURL=goat-tabs.entry.js.map
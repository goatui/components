import { Component, ComponentInterface, Element, h, Host, Listen } from '@stencil/core';

/**
 * @name Tabs
 * @description An interactive button with a range of presentation options.
 * @category Navigation
 * @tags navigation
 * @example <goat-tabs>
 *   <goat-tabs-list>
 *    <goat-tab selected >Tab 1</goat-tab>
 *    <goat-tab>Tab 2</goat-tab>
 *   </goat-tabs-list>
 * </goat-tabs>
 */
@Component({
  tag: 'goat-tabs',
  styleUrl: 'tabs.scss',
  shadow: true,
})
export class Tabs implements ComponentInterface {
  @Element() elm!: HTMLElement;

  @Listen('goat:tab-click')
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
      if (tabs.length) this.selectTab('tab-0');
    } else {
      const selectedTab = this.elm.querySelector('goat-tab[selected]');
      if (selectedTab) this.selectTab(selectedTab['target']);
    }
  }

  render() {
    return (
      <Host>
        <div class="tabs">
          <slot />
        </div>
      </Host>
    );
  }
}

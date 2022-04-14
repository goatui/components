import { Component, ComponentInterface, Element, h, Host, Listen, Prop } from '@stencil/core';

/**
 * @name Tabs
 * @description An interactive button with a range of presentation options.
 * @example <goat-tabs>
 *   <goat-tab selected >Tab 1</goat-tab>
 *   <goat-tab>Tab 2</goat-tab>
 * </goat-tabs>
 */
@Component({
  tag: 'goat-tabs',
  styleUrl: 'tabs.scss',
  shadow: true,
})
export class Tabs implements ComponentInterface {

  @Prop() variant: 'line' | 'contained' = 'line';

  @Prop() managed: boolean = false;

  @Element() elm!: HTMLElement;

  @Listen('goat:tab-click')
  tabClick(evt) {
    if (!this.managed) {
      this.deselectAllTabs();
      evt.target.selected = true;
      if(evt.detail.target) {

      } else {
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

    return (<Host>
      <div class={{ 'tabs': true, [`variant-${this.variant}`]: true }}>
        <div class="tabs-container">
          <slot />
        </div>
      </div>
    </Host>);
  }

}

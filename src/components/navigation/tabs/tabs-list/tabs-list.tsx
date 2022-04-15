import { Component, ComponentInterface, Element, h, Host, Listen, Prop } from '@stencil/core';

@Component({
  tag: 'goat-tabs-list',
  styleUrl: 'tabs-list.scss',
  shadow: true,
})
export class TabsList implements ComponentInterface {

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
      <div class={{ 'tabs-list': true, [`variant-${this.variant}`]: true }}>
        <div class="tabs-container">
          <slot />
        </div>
      </div>
    </Host>);
  }

}

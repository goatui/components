import { Component, ComponentInterface, h, Host, Prop } from '@stencil/core';

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
  styleUrl: 'goat-tabs.scss',
  shadow: true,
})
export class GoatTabs implements ComponentInterface {

  @Prop() variant: 'line' | 'contained' = 'line';

  @Prop() managed: boolean = false;

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

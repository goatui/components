import { Component, ComponentInterface, h, Host } from '@stencil/core';

/**
 * @name Tabs
 * @description An interactive button with a range of presentation options.
 * @example <goat-tabs>
 *   <goat-tab variant='outline'>Tab 1</goat-tab>
 *   </goat-tabs>
 */
@Component({
  tag: 'goat-tabs',
  styleUrl: 'goat-tabs.scss',
  shadow: true,
})
export class GoatTabs implements ComponentInterface {

  render() {

    return (<Host>
      <div class='button-group'>
        <slot />
      </div>
    </Host>);
  }

}

import { Component, ComponentInterface, h, Host } from '@stencil/core';

/**
 * @name MenuDivider
 * @description A divider to separate menu items.
 * @category Layout
 * @subcategory Menu
 * @childComponents true
 * @example <goat-divider style="width: 12rem;">or</goat-divider>
 */
@Component({
  tag: 'goat-menu-divider',
  styleUrl: 'menu-divider.scss',
  shadow: true,
})
export class MenuDivider implements ComponentInterface {
  render() {
    return (
      <Host>
        <div class="divider"></div>
      </Host>
    );
  }
}

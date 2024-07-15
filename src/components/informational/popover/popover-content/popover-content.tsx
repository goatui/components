import { Component, ComponentInterface, Element, h, Host } from '@stencil/core';
import { getComponentIndex } from '../../../../utils/utils';

/**
 * @name Popover Content
 * @description The PopoverContent component is used to display additional information.
 * @category Informational
 * @subcategory Popover
 * @childComponent true
 */
@Component({
  tag: 'goat-popover-content',
  styleUrl: 'popover-content.scss',
  shadow: true,
})
export class PopoverContent implements ComponentInterface {
  @Element() host!: HTMLElement;

  gid: string = getComponentIndex();

  render() {
    return (
      <Host>
        <div class="popover-content">
          <slot />

          <div class="arrow"></div>
        </div>
      </Host>
    );
  }
}

import { Component, ComponentInterface, h, Host } from '@stencil/core';

/**
 * @name Button Group
 * @description An interactive button with a range of presentation options.
 * @example <goat-button-group><goat-button>
 *   Button CTA
 *   </goat-button><goat-button>
 *   Button CTA
 *   </goat-button></goat-button-group>
 */
@Component({
  tag: 'goat-button-group',
  styleUrl: 'goat-button-group.scss',
  shadow: true,
})
export class GoatButtonGroup implements ComponentInterface {


  render() {
    return (<Host>
      <div class='button-group'>
        <slot/>
      </div>
    </Host>);
  }

}

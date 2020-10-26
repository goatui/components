import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'p4-item',
  styleUrl: 'p4-item.scss',
  shadow: true,
})
export class P4Item {

  render() {
    return (
      <Host>
        <slot/>
      </Host>
    );
  }

}

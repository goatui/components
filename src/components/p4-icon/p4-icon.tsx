import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'p4-icon',
  styleUrl: 'p4-icon.scss',
  shadow: true,
})
export class P4Icon {

  render() {
    return (
      <Host>
        testing
        <slot></slot>
      </Host>
    );
  }

}

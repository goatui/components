import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'p4-paragraph',
  styleUrl: 'p4-paragraph.css',
  shadow: true,
})
export class P4Paragraph {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}

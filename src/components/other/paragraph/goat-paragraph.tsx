import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'goat-paragraph',
  styleUrl: 'goat-paragraph.css',
  shadow: true,
})
export class GoatParagraph {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}

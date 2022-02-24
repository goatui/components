import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'goat-field-group',
  styleUrl: 'goat-field-group.scss',
  shadow: true,
})
export class GoatFieldGroup {

  render() {
    return (
      <Host>
        <slot/>
      </Host>
    );
  }

}

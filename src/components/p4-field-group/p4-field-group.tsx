import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'p4-field-group',
  styleUrl: 'p4-field-group.scss',
  shadow: true,
})
export class P4FieldGroup {

  render() {
    return (
      <Host>
        <slot/>
      </Host>
    );
  }

}

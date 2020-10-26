import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'p4-label',
  styleUrl: 'p4-label.scss',
  shadow: true,
})
export class P4Label {

  render() {
    return (
      <Host>
        <div class="label-component">
          <slot/>
        </div>
      </Host>
    );
  }

}

import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'p4-label',
  styleUrl: 'p4-label.scss',
  shadow: true,
})
export class P4Label {

  @Prop() required: boolean = false;

  render() {
    return (
      <Host>
        <div class="label">
          {this.required && <span class="required">*</span>}
          <slot></slot>
        </div>
      </Host>
    );
  }

}

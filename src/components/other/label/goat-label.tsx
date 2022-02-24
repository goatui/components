import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'goat-label',
  styleUrl: 'goat-label.scss',
  shadow: true,
})
export class GoatLabel {

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

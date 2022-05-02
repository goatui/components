import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'goat-date-picker',
  styleUrl: 'goat-date-picker.css',
  shadow: true,
})
export class GoatDatePicker {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}

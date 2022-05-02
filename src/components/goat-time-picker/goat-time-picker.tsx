import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'goat-time-picker',
  styleUrl: 'goat-time-picker.css',
  shadow: true,
})
export class GoatTimePicker {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}

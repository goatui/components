import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'goat-modal-content',
  styleUrl: 'modal-content.scss',
  shadow: true,
})
export class ModalContent {
  @Prop({ reflect: true }) type: 'text' | 'borderless' | 'default' = 'default';

  render() {
    return (
      <Host>
        <div class="modal-content">
          <slot />
        </div>
      </Host>
    );
  }
}

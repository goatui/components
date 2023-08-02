import { Component, ComponentInterface, Element, h, Host, Prop, State } from '@stencil/core';

@Component({
  tag: 'goat-container',
  styleUrl: 'container.scss',
  shadow: true,
})
export class Container implements ComponentInterface {
  @Prop({ reflect: true }) vertical: boolean = false;

  @State() slotHasContent = false;
  @Element() elm!: HTMLElement;

  componentWillLoad() {
    this.slotHasContent = this.elm.hasChildNodes();
  }

  render() {
    return (
      <Host>
        <div
          class={{
            'container': true,
            'has-content': this.slotHasContent,
          }}
        >
          <div class="slot-container">
            <slot />
          </div>
        </div>
      </Host>
    );
  }
}

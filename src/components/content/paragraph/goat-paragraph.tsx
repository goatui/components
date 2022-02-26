import { Component, h, Host, Prop } from '@stencil/core';


@Component({
  tag: 'goat-paragraph',
  styleUrl: 'goat-paragraph.scss',
  shadow: true,
})
export class GoatParagraph {

  @Prop() size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';

  render() {
    return (
      <Host size={this.size}>
        <p>
          <slot />
        </p>
      </Host>
    );
  }

}

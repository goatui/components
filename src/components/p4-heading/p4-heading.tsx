import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'p4-heading',
  styleUrl: 'p4-heading.scss',
  shadow: true,
})
export class P4Heading {

  @Prop() type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' = 'h1';

  @Prop() size: 'md' | 'sm' = 'md';

  @Prop() weight: 'semi-bold' | 'bold' | 'extra-bold' = 'semi-bold';

  render() {

    const HeadingTag = this.type;

    return (

      <Host>
        <HeadingTag class={`size-${this.size} weight-${this.weight}`}>
          <slot></slot>
        </HeadingTag>
      </Host>
    );
  }

}

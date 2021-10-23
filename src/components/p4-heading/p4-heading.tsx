import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'p4-heading',
  styleUrl: 'p4-heading.scss',
  shadow: true,
})
export class P4Heading {

  @Prop() type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' = 'h1';

  @Prop() size: string;

  @Prop() weight: 'semi-bold' | 'bold' | 'extra-bold' = 'semi-bold';

  componentWillLoad() {
    if (!this.size) {
      this.size = this.type;
    }
  }

  render() {

    const HeadingTag = this.type;

    return (

      <Host type={this.type} weight={this.weight} size={this.size}>
        <HeadingTag class={`heading size-${this.size} weight-${this.weight}`}>
          <slot></slot>
        </HeadingTag>
      </Host>
    );
  }

}

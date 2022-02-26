import { Component, h, Host, Prop } from '@stencil/core';


@Component({
  tag: 'goat-heading',
  styleUrl: 'goat-heading.scss',
  shadow: true,
})
export class GoatHeading {

  @Prop() level: 1 | 2 | 3 | 4 | 5 = 1;

  @Prop() size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';

  private getSize() {
    if (!this.size) {
      if (this.level === 1) {
        return 'xl';
      } else if (this.level === 2) {
        return 'lg';
      } else if (this.level === 3) {
        return 'md';
      } else if (this.level === 4) {
        return 'sm';
      } else if (this.level === 5) {
        return 'xs';
      }
    } else {
      return this.size;
    }
  }

  render() {

    const HeadingTag = `h${this.level}`;


    return (
      <Host level={this.level} size={this.getSize()}>
        <HeadingTag class="heading">
          <slot />
        </HeadingTag>
      </Host>
    );
  }

}

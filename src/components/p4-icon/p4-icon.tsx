import { Component, h, Host, Prop } from '@stencil/core';
import { ICONS } from './bootstrap-icons';


@Component({
  tag: 'p4-icon',
  styleUrl: 'p4-icon.scss',
  shadow: true,
})
export class P4Icon {

  @Prop() type: string;

  /**
   * The Icon size.
   * Possible values are: `"sm"`, `"md"`, `"lg"`. Defaults to `"md"`.
   */
  @Prop() size: 'sm' | 'md' | 'lg' | string = 'md';

  private getSize() {
    let size = '16px';
    if (this.size === 'lg')
      size = '32px';
    else if (this.size === 'sm')
      size = '12px';
    else if (this.size === 'md')
      size = '16px';
    else if (typeof this.size === 'string')
      size = this.size;
    return size;
  }

  private getCssClasses() {
    const cls = ['icon-component'];
    return cls.join(' ');
  }


  render() {
    let Icon = ICONS[this.type];
    if (!Icon)
      return null;
    Icon = Icon.replace('width="1em"', 'width="' + this.getSize() + '"').replace('height="1em"', 'height="' + this.getSize() + '"');
    return (
      <Host>
        <div innerHTML={Icon} class={this.getCssClasses()} />
      </Host>
    );
  }

}

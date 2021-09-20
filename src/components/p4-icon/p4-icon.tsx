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

  getSize() {
    let size;
    if (!this.size || this.size === 'md')
      size = '1.5rem';
    else if (this.size === 'lg')
      size = '3rem';
    else if (this.size === 'sm')
      size = '1rem';
    else if (typeof this.size === 'string')
      size = this.size;
    return size;
  }


  render() {
    let Icon = ICONS[this.type];
    if (!Icon)
      return null;
    Icon = Icon.replace(/width="([^"]+)"/, 'width="' + this.getSize() + '"').replace(/height="([^"]+)"/, 'height="' + this.getSize() + '"');
    return (
      <Host>
        <div innerHTML={Icon} class='icon' />
      </Host>
    );
  }

}

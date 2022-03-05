import { Component, h, Host, Prop } from '@stencil/core';
import { ICONS } from './bootstrap-icons';

/**
 * @name Icon
 * @description Renders a specified icon.
 * @example <goat-icon type="house"></goat-icon>
 */
@Component({
  tag: 'goat-icon',
  styleUrl: 'goat-icon.scss',
  shadow: true,
})
export class GoatIcon {

  @Prop({ reflect: true }) type: string = 'house';

  /**
   * The Icon size.
   * Possible values are: `"sm"`, `"md"`, `"lg"`, `"xl"` and size in pixel. Defaults to `"md"`.
   */
  @Prop({ reflect: true }) size: 'sm' | 'md' | 'lg' | 'xl' | string = 'md';

  @Prop({ reflect: true }) shade: 'primary' | 'secondary' | 'tertiary' = 'primary';

  private getSize() {
    let size;
    if (this.size === 'sm')
      size = '1.25rem';
    else if (!this.size || this.size === 'md')
      size = '1.5rem';
    else if (this.size === 'lg')
      size = '1.75rem';
    else if (this.size === 'xl')
      size = '2rem';
    else
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

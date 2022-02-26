import { Component, h, Host, Prop } from '@stencil/core';
import { ICONS } from './bootstrap-icons';
import { ElementSize } from '../../../utils/utils';


@Component({
  tag: 'goat-icon',
  styleUrl: 'goat-icon.scss',
  shadow: true,
})
export class GoatIcon {

  @Prop() type: string;

  /**
   * The Icon size.
   * Possible values are: `"sm"`, `"md"`, `"lg"`, `"xl"` and size in pixel. Defaults to `"md"`.
   */
  @Prop() size: ElementSize | string = ElementSize.MEDIUM;

  /**
   * Color variants.
   * Possible values are `"primary"`, `"success"`, `"warning"`, `"error"`, `"grey"`, `"inherit"`. Defaults to `"inherit"`.
   */
  @Prop() color: 'primary' | 'success' | 'warning' | 'error' | 'grey' | 'inherit' = 'inherit';

  private getSize() {
    let size;
    if (this.size === ElementSize.SMALL)
      size = '1.25rem';
    else if (!this.size || this.size === ElementSize.MEDIUM)
      size = '1.5rem';
    else if (this.size === ElementSize.LARGE)
      size = '1.75rem';
    else if (this.size === ElementSize.X_LARGE)
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
      <Host color={this.color}>
        <div innerHTML={Icon} class='icon' />
      </Host>
    );
  }

}

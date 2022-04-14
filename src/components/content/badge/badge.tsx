import { Component, h, Host, Prop } from '@stencil/core';

/**
 * @name Badge
 * @description Renders a specified badge.
 * @example <goat-badge content="5" class='color-error'> <goat-icon name="bell"></goat-icon></goat-badge>
 */
@Component({
  tag: 'goat-badge',
  styleUrl: 'badge.scss',
  shadow: true,
})
export class Badge {

  @Prop() content: string;


  render() {
    return (
      <Host>
        <div class='badge'>
          {this.content && <div class='badge-content'>{this.content}</div>}
          <slot />
        </div>
      </Host>
    );
  }

}

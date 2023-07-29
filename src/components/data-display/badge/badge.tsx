import { Component, h, Host, Prop } from '@stencil/core';


/**
 * @name Badge
 * @description Renders a specified badge.
 * @category Data Display
 * @tag content
 * @example <goat-badge content="5" class='color-error'> <goat-icon name="notification" size="lg"></goat-icon></goat-badge>
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
          <div class={{
            'badge-content': true,
            'has-content': this.content !== ''
          }}>{this.content}</div>
          <slot />
        </div>
      </Host>
    );
  }

}

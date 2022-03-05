import { Component, ComponentInterface, h, Host, Prop } from '@stencil/core';
import EmptyIcon from './empty.svg';
/**
 * @name Empty State
 * @description A message that displays when there is no information to display.
 * @example <goat-empty-state>
 *   <div slot="title">Empty</div>
 *   <div slot='description'>
 *     Nothing to display
 *   </div>
 * </goat-empty-state>
 */
@Component({
  tag: 'goat-empty-state',
  styleUrl: 'goat-empty-state.scss',
  shadow: true,
})
export class GoatEmptyState implements ComponentInterface {

  @Prop({ reflect: true }) illustration: 'no-data' = 'no-data';

  @Prop() vertical: boolean = false;

  render() {
    return (
      <Host>
        <div class='empty-state'>
          <div innerHTML={EmptyIcon} class='illustration' />
          <div class='content'>
            <div class='title'>
              <slot name='title' />
              <slot />
            </div>
            <div class='description'>
              <slot name='description' />
            </div>
            <div class='actions'>
              <slot name='actions' />
            </div>
          </div>
        </div>
      </Host>
    );
  }


}

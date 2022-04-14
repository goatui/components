import { Component, ComponentInterface, getAssetPath, h, Host, Prop } from '@stencil/core';


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
  styleUrl: 'empty-state.scss',
  shadow: true,
})
export class EmptyState implements ComponentInterface {

  @Prop({ reflect: true }) illustration: 'no-document' = 'no-document';

  @Prop() vertical: boolean = false;

  render() {
    return (
      <Host>
        <div class='empty-state'>
          <goat-svg class='illustration'
                    src={getAssetPath(`./assets/images/empty-state/${this.illustration}.svg`)} />

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

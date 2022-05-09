import { Component, ComponentInterface, h, Host } from '@stencil/core';

/**
 * @name Breadcrumb
 * @description Typography are used for rendering headlines, paragraphs and captions.
 * @example <goat-breadcrumb><goat-breadcrumb-item href="#">Home</goat-breadcrumb-item><goat-breadcrumb-item href="#" active>Page</goat-breadcrumb-item></goat-breadcrumb>
 */
@Component({
  tag: 'goat-breadcrumb',
  styleUrl: 'breadcrumb.scss',
  shadow: true,
})
export class Breadcrumb implements ComponentInterface {


  render() {
    return (
      <Host>
        <div class='breadcrumb'>
          <slot/>
        </div>
      </Host>
    );
  }


}

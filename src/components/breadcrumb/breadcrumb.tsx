import { Component, ComponentInterface, Element, h, Host } from '@stencil/core';

/**
 * @name Breadcrumb
 * @description A breadcrumb is a secondary navigation scheme that reveals the user's location in a website or web application.
 * @category Navigation
 * @tags navigation
 * @example <goat-breadcrumb><goat-breadcrumb-item href="#">Home</goat-breadcrumb-item><goat-breadcrumb-item href="#" active>Page</goat-breadcrumb-item></goat-breadcrumb>
 */
@Component({
  tag: 'goat-breadcrumb',
  styleUrl: 'breadcrumb.scss',
  shadow: true,
})
export class Breadcrumb implements ComponentInterface {
  @Element() elm!: HTMLElement;

  componentWillLoad() {
    this.elm.querySelectorAll('goat-breadcrumb-item').forEach((item, i) => {
      item.position = i + 1 + '';
    });
  }

  render() {
    return (
      <Host itemscope itemtype="http://schema.org/BreadcrumbList">
        <div class="breadcrumb">
          <slot />
        </div>
      </Host>
    );
  }
}

import { Component, h } from '@stencil/core';

/**
 * @name Header
 * @description Headers are compositions that extend standard navbar functionalities.
 * @category Navigation
 * @img /assets/img/header.png
 */
@Component({
  tag: 'goat-header',
  styleUrl: 'header.scss',
  shadow: true,
})
export class Header {

  renderLeftSection() {

    return (
      <div class='left-section section'>
        <slot name='left-section' />
      </div>
    );
  }

  renderRightSection() {
    return (
      <div class='right-section section'>
        <slot name='right-section' />
      </div>
    );
  }

  render() {
    return (
      <header class={{ 'header': true }}>
        <div class='header-content'>
          {this.renderLeftSection()}
          {this.renderRightSection()}
        </div>
      </header>
    );
  }
}

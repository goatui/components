import { Component, h, Prop } from '@stencil/core';

/**
 * @name Header
 * @description Headers are compositions that extend standard navbar functionalities.
 * @category Navigation
 * @img /assets/img/header.png
 * @imgDark /assets/img/header-dark.png
 */
@Component({
  tag: 'goat-header',
  styleUrl: 'header.scss',
  shadow: true,
})
export class Header {


  @Prop() float: boolean = false;

  render() {
    return (
      <div class='header-container'>
        <header class={{ 'header': true, 'float': this.float }}>
          <div class='left-section section'>
            <slot name='left' />
          </div>
          <div class='center-section section'>
            <slot  name='center' />
          </div>
          <div class='right-section section'>
            <slot name='right' />
          </div>
        </header>
      </div>
    );
  }
}

import { Component, Fragment, h, Prop } from '@stencil/core';

/**
 * @name Header
 * @description Headers are compositions that extend standard navbar functionalities.
 * @img /assets/img/header.png
 */
@Component({
  tag: 'goat-header',
  styleUrl: 'goat-header.scss',
  shadow: true,
})
export class GoatHeader {

  @Prop() bandLogo: string = 'https://goatui.com/assets/img/logo.svg';
  @Prop() brandName: string = 'Goat';
  @Prop() brandUrl: string = '#';
  @Prop() pageTitle: string = '';

  @Prop() type: 'simple' = 'simple';

  renderLeftSection() {
    return (
      <div class='left-section section'>
        <a class='brand-link' href={this.brandUrl}>
          <div class='brand'>
            <img src={this.bandLogo} class='logo' alt='Goat' /> <span class='brand-name'>{this.brandName}</span>
          </div>
        </a>
        {
          (() => {
            if (this.pageTitle)
              return <Fragment>
                <goat-divider vertical={true} class='page-title-divider' />
                <div class='page-title'>
                  {this.pageTitle}
                </div>
              </Fragment>;
          })()
        }

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
      <header class='header'>
        {this.renderLeftSection()}
        {this.renderRightSection()}
      </header>
    );
  }
}

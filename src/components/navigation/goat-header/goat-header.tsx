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

  @Prop() brandLogo: string = '';
  @Prop() brandName: string = '';
  @Prop() brandUrl: string = '#';
  @Prop() pageTitle: string = '';

  @Prop() type: 'simple' = 'simple';

  renderLeftSection() {
    return (
      <div class='left-section section'>
        <a class='brand-link' href={this.brandUrl}>
          <div class='brand'>
            {this.brandLogo && <img src={this.brandLogo} class='logo' alt={this.brandName} />}
            {this.brandName && <span class='brand-name'>{this.brandName}</span>}
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
        <div class='header-content'>
          {this.renderLeftSection()}
          {this.renderRightSection()}
        </div>
      </header>
    );
  }
}

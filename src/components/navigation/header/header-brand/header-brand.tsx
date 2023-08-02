import { Component, Fragment, h, Prop } from '@stencil/core';

@Component({
  tag: 'goat-header-brand',
  styleUrl: 'header-brand.scss',
  shadow: true,
})
export class HeaderBrand {

  @Prop() logo: string = '';
  @Prop() name: string = '';
  @Prop() href: string = '#';
  @Prop() subTitle: string = '';
  @Prop() color: string = 'brand-primary';

  render() {
    const isLogoSVG = this.logo.endsWith('.svg');
    return (
      <div class='header-brand'>
        <goat-link class='brand-link no-style' href={this.href}>
          <div class='brand'>
            {(() => {
              if (this.logo) {
                if (isLogoSVG) {
                  return <goat-svg class='logo inherit' src={this.logo} />;
                } else {
                  return <img src={this.logo} class='logo' alt={this.name} />;
                }
              }
            })()}
            {this.name && <span class='brand-name'>{this.name}</span>}
          </div>
        </goat-link>
        {
          (() => {
            if (this.subTitle)
              return <Fragment>
                <goat-divider vertical={true} class='subtitle-divider' />
                <div class='subtitle'>
                  {this.subTitle}
                </div>
              </Fragment>;
          })()
        }
      </div>
    );
  }
}

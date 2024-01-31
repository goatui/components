import { Component, Element, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'goat-footer-copyright',
  styleUrl: 'footer-copyright.scss',
  shadow: true,
})
export class FooterCopyright {
  @Element() elm!: HTMLElement;

  @Prop() copyright: string;

  @Prop() copyrightHref: string;

  @Prop() year = new Date().getFullYear();

  render() {
    return (
      <Host>
        <goat-text class={'legal'} type="legal" expressive={true}>
          &copy; {this.year}&nbsp;
          <goat-link href={this.copyrightHref}>{this.copyright}</goat-link>. All Rights Reserved.
        </goat-text>
      </Host>
    );
  }
}

import { Component, h, Host, Prop, State } from '@stencil/core';
import { isDarkMode, observeThemeChange } from '../../utils/utils';

@Component({
  tag: 'goat-image',
  styleUrl: 'image.scss',
  shadow: true,
})
export class Image {
  @Prop({ reflect: true }) src: string;

  @Prop({ reflect: true }) darkSrc: string;

  @Prop() imageTitle: string;

  @State() isDarkMode: boolean = isDarkMode();

  componentWillLoad() {
    observeThemeChange(() => {
      this.isDarkMode = isDarkMode();
    });
  }

  render() {
    if (this.isDarkMode && this.darkSrc) {
      return (
        <Host>
          <img src={this.darkSrc} alt={this.imageTitle} />
        </Host>
      );
    } else {
      return (
        <Host>
          <img src={this.src} alt={this.imageTitle} />
        </Host>
      );
    }
  }
}

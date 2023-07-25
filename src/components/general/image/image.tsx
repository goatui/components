import { Component, h, Host, Prop, State } from '@stencil/core';
import { isDarkMode, observeThemeChange } from '../../../utils/utils';

/**
 * @name Image
 * @description Icons are visual symbols used to represent ideas, objects, or actions. They communicate messages at a glance, afford interactivity, and draw attention to important information.
 * @category General
 * @example <goat-icon name="home"></goat-icon>
 */
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
    if(this.isDarkMode && this.darkSrc){
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

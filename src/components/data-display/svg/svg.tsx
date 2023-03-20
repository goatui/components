import { Component, h, Host, Prop, State, Watch } from '@stencil/core';
import { fetchIcon } from './datasource';

/**
 * @name SVG
 * @description Render SVG content from an external source.
 * @category Data Display
 * @example <goat-svg src="https://icons.getbootstrap.com/assets/icons/bug.svg"></goat-svg>
 */
@Component({
  tag: 'goat-svg',
  styleUrl: 'svg.scss',
  shadow: true,
})
export class Svg {

  @Prop() src: string = '';

  @State() svg: string = '';

  async fetchSvg(name: string) {
    if (this.src)
      this.svg = await fetchIcon(name);
  }


  @Watch('src')
  async handleNameChange(newValue: string) {
    this.svg = await fetchIcon(newValue);
  }

  async componentWillLoad() {
    await this.fetchSvg(this.src);
  }


  render() {
    return (
      <Host>
        <div innerHTML={this.svg} class={{ 'icon': true }} />
      </Host>
    );
  }

}

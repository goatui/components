import { Component, h, Host, Prop, State, Watch } from '@stencil/core';
import { fetchIcon } from './datasource';

/**
 * @name SVG
 * @description Render SVG content from an external source.
 * @category Data Display
 * @example <goat-svg src="https://icons.getbootstrap.com/assets/icons/bug.svg" size="2rem"></goat-svg>
 */
@Component({
  tag: 'goat-svg',
  styleUrl: 'svg.scss',
  shadow: true,
})
export class Svg {

  @Prop() src: string = '';

  @State() svg: string = '';

  /**
   * The Icon size.
   */
  @Prop({ reflect: true }) size: string;


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

  private getSize() {
    let size;
    if (this.size === 'xs') size = '0.5rem';
    else if (this.size === 'sm') size = '0.75rem';
    else if (this.size === 'md') size = '1rem';
    else if (this.size === 'lg') size = '1.5rem';
    else if (this.size === 'xl') size = '1.75rem';
    else size = this.size;
    return size;
  }

  render() {
    const svg = this.convertToDom(this.svg);
    let svgHtmlString = 'No icon found';
    if (svg.tagName === 'svg') {
      if (this.getSize()){
        svg.setAttribute('width', this.getSize());
        svg.setAttribute('height', this.getSize());
      }
      svg.setAttribute('fill', 'currentColor');
      svgHtmlString = svg.outerHTML;
    }

    return (
      <Host>
        <div innerHTML={svgHtmlString} class={{ 'icon': true }} />
      </Host>
    );
  }

  convertToDom(svg: string) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(svg, 'image/svg+xml');
    return doc.documentElement;
  }

}

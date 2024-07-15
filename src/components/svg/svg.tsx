import { Component, h, Host, Prop, State, Watch } from '@stencil/core';
import { fetchSVG } from './datasource';
import { convertToDomSVG } from '../../utils/utils';

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

  @Watch('src')
  async handleNameChange(newValue: string) {
    this.svg = await fetchSVG(newValue);
  }

  async componentWillLoad() {
    this.svg = await fetchSVG(this.src);
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
    const svg = convertToDomSVG(this.svg);
    let svgHtmlString = 'No icon found';
    if (svg.tagName === 'svg') {
      if (this.getSize()) {
        svg.setAttribute('width', this.getSize());
        svg.setAttribute('height', this.getSize());
      }
      svg.setAttribute('fill', 'currentColor');
      svgHtmlString = svg.outerHTML;
    }

    return (
      <Host>
        <div innerHTML={svgHtmlString} class={{ icon: true }} />
      </Host>
    );
  }
}

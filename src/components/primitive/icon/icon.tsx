import { Component, h, Host, Prop, State, Watch } from '@stencil/core';
import { fetchIcon } from './datasource';

/**
 * @name Icon
 * @description Icons are visual symbols used to represent ideas, objects, or actions.
 * @overview Icons are visual symbols used to represent ideas, objects, or actions. They communicate messages at a glance, afford interactivity, and draw attention to important information.
 * @category General
 * @example <goat-icon name="home" size="2rem"></goat-icon>
 */
@Component({
  tag: 'goat-icon',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class Icon {
  @Prop({ reflect: true }) name: string;

  /**
   * The Icon size.
   */
  @Prop({ reflect: true }) size: string;

  @State() svg: string = '';

  async fetchSvg(name: string) {
    if (this.name) this.svg = await fetchIcon(name);
  }

  @Watch('name')
  async handleNameChange(newValue: string) {
    this.svg = await fetchIcon(newValue);
  }

  async componentWillLoad() {
    setTimeout(() => {
      this.fetchSvg(this.name);
    });
  }

  private getSize() {
    let size;
    if (!this.size) size = '1rem';
    else if (this.size === 'xs') size = '0.5rem';
    else if (this.size === 'sm') size = '0.75rem';
    else if (this.size === 'md') size = '1rem';
    else if (this.size === 'lg') size = '1.5rem';
    else if (this.size === 'xl') size = '1.75rem';
    else if (!this.size.endsWith('px') && !this.size.endsWith('rem'))
      size = '1rem';
    else size = this.size;
    return size;
  }

  render() {
    if (this.svg === '') return <Host></Host>;

    const svg = this.convertToDom(this.svg);
    let svgHtmlString = 'No icon found';
    if (svg.tagName === 'svg') {
      svg.setAttribute('class', 'icon-svg');
      svg.setAttribute('width', this.getSize());
      svg.setAttribute('height', this.getSize());
      svgHtmlString = svg.outerHTML;
    }

    return (
      <Host>
        <div innerHTML={svgHtmlString} class={{ icon: true }}></div>
      </Host>
    );
  }

  convertToDom(svg: string) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(svg, 'image/svg+xml');
    return doc.documentElement;
  }
}

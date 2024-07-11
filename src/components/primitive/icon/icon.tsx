import { Component, h, Host, Prop, State, Watch } from '@stencil/core';
import { fetchIcon } from './datasource';
import { getSVGHTMLString } from '../../../utils/utils';

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
  /**
   * The identifier for the icon.
   * This name corresponds to a specific SVG asset in the icon set.
   */
  @Prop({ reflect: true }) name: string;

  /**
   * The size of the icon.
   * This can be specified in pixels (px) or rem units to control the icon's dimensions.
   * If a number is provided, it will be treated as rem units. For example, '16px', '2rem', or 2 would be valid values.
   */
  @Prop() size: string;

  @State() svg: string;

  @Watch('name')
  async handleNameChange(newValue: string) {
    await this.fetchSvg(newValue);
  }

  async fetchSvg(name: string) {
    if (this.name) {
      const svgXml = await fetchIcon(name);
      this.svg = getSVGHTMLString(svgXml);
    } else {
      this.svg = '';
    }
  }

  async componentWillLoad() {
    this.fetchSvg(this.name);
  }

  render() {
    const style = {};
    if (this.size !== undefined) {
      if (this.size === 'xs') style['--goat-icon-size'] = '0.5rem';
      else if (this.size === 'sm') style['--goat-icon-size'] = '0.75rem';
      else if (this.size === 'md') style['--goat-icon-size'] = '1rem';
      else if (this.size === 'lg') style['--goat-icon-size'] = '1.5rem';
      else if (this.size === 'xl') style['--goat-icon-size'] = '1.75rem';
      else if (this.size.endsWith('px') || this.size.endsWith('rem'))
        style['--goat-icon-size'] = this.size;
      else if (!isNaN(Number(this.size))) {
        style['--goat-icon-size'] = `${this.size}rem`;
      }
    }

    return (
      <Host>
        <div innerHTML={this.svg} class={{ icon: true }} style={style}></div>
      </Host>
    );
  }
}

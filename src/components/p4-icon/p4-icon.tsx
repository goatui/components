import { Component, h, Host, Prop } from '@stencil/core';
import Alarm from 'bootstrap-icons/icons/alarm.svg';
import ChevronLeft from 'bootstrap-icons/icons/chevron-left.svg';
import ChevronRight from 'bootstrap-icons/icons/chevron-right.svg';
import ChevronDown from 'bootstrap-icons/icons/chevron-down.svg';
import ChevronUp from 'bootstrap-icons/icons/chevron-up.svg';
import House from 'bootstrap-icons/icons/house.svg';
import Book from 'bootstrap-icons/icons/book.svg';
import ColumnsGap from 'bootstrap-icons/icons/columns-gap.svg';
import Search from 'bootstrap-icons/icons/search.svg';
import PieChartFill from 'bootstrap-icons/icons/pie-chart-fill.svg';
import Tools from 'bootstrap-icons/icons/tools.svg';
import Trash from 'bootstrap-icons/icons/trash.svg';
import X from 'bootstrap-icons/icons/x.svg';
import Envelope from 'bootstrap-icons/icons/envelope.svg';

const ICONS = {
  'alarm': Alarm,
  'chevron-left': ChevronLeft,
  'chevron-right': ChevronRight,
  'chevron-up': ChevronUp,
  'chevron-down': ChevronDown,
  'envelope': Envelope,
  'house': House,
  'book': Book,
  'columns-gap': ColumnsGap,
  'search': Search,
  'pie-chart-fill': PieChartFill,
  'tools': Tools,
  'trash': Trash,
  'x': X,
};

@Component({
  tag: 'p4-icon',
  styleUrl: 'p4-icon.scss',
  shadow: true,
})
export class P4Icon {

  @Prop() type = 'alarm';

  /**
   * Button variants
   * Possible values are `"default"`, `"primary"`, `"danger"`, `"success"`. Defaults to `"default"`.
   */
  @Prop() variant: 'default' | 'primary' | 'danger' | 'success' = 'default';

  /**
   * The button size.
   * Possible values are: `"sm"`, `"md"`, `"lg"`. Defaults to `"md"`.
   */
  @Prop() size: 'sm' | 'md' | 'lg' | string = 'md';

  getSize() {
    let size = 16;
    if (/^\d+$/.test(this.size))
      size = parseInt(this.size);
    else if (this.size === 'lg')
      size = 32;
    else if (this.size === 'sm')
      size = 12;
    return size + 'px';
  }

  getVariantClass() {
    let variant = 'variant-';
    if (!this.variant)
      variant = variant + 'default';
    else
      variant = variant + this.variant;
    return variant;
  }


  render() {
    let Icon = ICONS[this.type];
    if (!Icon)
      return null;
    Icon = Icon.replace('width="1em"', 'width="' + this.getSize() + '"').replace('height="1em"', 'height="' + this.getSize() + '"');
    return (
      <Host>
        <span innerHTML={Icon} class={`icon-component  ${this.getVariantClass()}`} />
      </Host>
    );
  }

}

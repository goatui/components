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
import InboxFill from 'bootstrap-icons/icons/inbox-fill.svg';
import Inbox from 'bootstrap-icons/icons/inbox.svg';
import InfoCircle from 'bootstrap-icons/icons/info-circle.svg';
import InfoCircleFill from 'bootstrap-icons/icons/info-circle-fill.svg';
import CaretDownFill from 'bootstrap-icons/icons/caret-down-fill.svg';
import CaretUpFill from 'bootstrap-icons/icons/caret-up-fill.svg';
import Pencil from 'bootstrap-icons/icons/pencil.svg';


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
  'inbox-fill': InboxFill,
  'inbox': Inbox,
  'info-circle': InfoCircle,
  'info-circle-fill': InfoCircleFill,
  'caret-down-fill': CaretDownFill,
  'caret-up-fill': CaretUpFill,
  'pencil': Pencil
};

@Component({
  tag: 'p4-icon',
  styleUrl: 'p4-icon.scss',
  shadow: true,
})
export class P4Icon {

  @Prop() type = 'alarm';

  /**
   * Icon variants to add additional styling
   * Possible values are `"default"`, `"primary"`, `"danger"`, `"success"`. Defaults to `"default"`.
   */
  @Prop() variant: 'default' | 'primary' | 'danger' | 'success' = 'default';

  /**
   * The Icon size.
   * Possible values are: `"sm"`, `"md"`, `"lg"`. Defaults to `"md"`.
   */
  @Prop() size: 'sm' | 'md' | 'lg' | string = 'md';

  private getSize() {
    let size = '16px';
    if (this.size === 'lg')
      size = '32px';
    else if (this.size === 'sm')
      size = '12px';
    else if (this.size === 'md')
      size = '16px';
    else if (typeof this.size === 'string')
      size = this.size;
    return size;
  }

  private getCssClasses() {
    const cls = ['icon-component'];
    cls.push('variant-' + this.variant);
    return cls.join(' ');
  }


  render() {
    let Icon = ICONS[this.type];
    if (!Icon)
      return null;
    Icon = Icon.replace('width="1em"', 'width="' + this.getSize() + '"').replace('height="1em"', 'height="' + this.getSize() + '"');
    return (
      <Host>
        <div innerHTML={Icon} class={this.getCssClasses()} />
      </Host>
    );
  }

}

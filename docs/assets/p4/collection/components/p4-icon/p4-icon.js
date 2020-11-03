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
import Info from 'bootstrap-icons/icons/info.svg';
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
  'pencil': Pencil,
  'info': Info
};
export class P4Icon {
  constructor() {
    this.type = 'alarm';
    /**
     * Icon variants to add additional styling
     * Possible values are `"default"`, `"primary"`, `"danger"`, `"success"`. Defaults to `"default"`.
     */
    this.variant = 'default';
    /**
     * The Icon size.
     * Possible values are: `"sm"`, `"md"`, `"lg"`. Defaults to `"md"`.
     */
    this.size = 'md';
  }
  getSize() {
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
  getCssClasses() {
    const cls = ['icon-component'];
    cls.push('variant-' + this.variant);
    return cls.join(' ');
  }
  render() {
    let Icon = ICONS[this.type];
    if (!Icon)
      return null;
    Icon = Icon.replace('width="1em"', 'width="' + this.getSize() + '"').replace('height="1em"', 'height="' + this.getSize() + '"');
    return (h(Host, null,
      h("div", { innerHTML: Icon, class: this.getCssClasses() })));
  }
  static get is() { return "p4-icon"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["p4-icon.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["p4-icon.css"]
  }; }
  static get properties() { return {
    "type": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "type",
      "reflect": false,
      "defaultValue": "'alarm'"
    },
    "variant": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'default' | 'primary' | 'danger' | 'success'",
        "resolved": "\"danger\" | \"default\" | \"primary\" | \"success\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Icon variants to add additional styling\nPossible values are `\"default\"`, `\"primary\"`, `\"danger\"`, `\"success\"`. Defaults to `\"default\"`."
      },
      "attribute": "variant",
      "reflect": false,
      "defaultValue": "'default'"
    },
    "size": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'sm' | 'md' | 'lg' | string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The Icon size.\nPossible values are: `\"sm\"`, `\"md\"`, `\"lg\"`. Defaults to `\"md\"`."
      },
      "attribute": "size",
      "reflect": false,
      "defaultValue": "'md'"
    }
  }; }
}

import { Component, ComponentInterface, h, Host, Prop } from '@stencil/core';


@Component({
  tag: 'goat-breadcrumb-item',
  styleUrl: 'breadcrumb-item.scss',
  shadow: true,
})
export class BreadcrumbItem implements ComponentInterface {


  /**
   * Hyperlink to navigate to on click.
   */
  @Prop() href: string;

  /**
   * Sets or retrieves the window or frame at which to target content.
   */
  @Prop() target: string;

  @Prop({ reflect: true }) active: boolean = false;

  render() {

    return (<Host itemprop='itemListElement' itemscope itemtype='http://schema.org/ListItem'>
      {this.active ? <goat-text itemprop='item'>
        <span itemProp='name'>
        <slot />
        </span>
      </goat-text> : <goat-link itemprop='item' href={this.href} target={this.target}>
        <span itemProp='name'>
        <slot />
        </span>
        <meta itemProp='position' content='3' />

      </goat-link>}
    </Host>);
  }


}

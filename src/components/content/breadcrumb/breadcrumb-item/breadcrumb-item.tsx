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

    return (<Host>
      {this.active ? <goat-text>
        <slot />
      </goat-text> : <goat-link href={this.href} target={this.target}>
        <slot />
      </goat-link>}
    </Host>);
  }


}

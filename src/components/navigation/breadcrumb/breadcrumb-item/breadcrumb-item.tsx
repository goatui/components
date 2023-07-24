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

  @Prop({ reflect: true }) position: string;

  @Prop({ reflect: true }) active: boolean = false;

  render() {
    return (
      <Host itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
        {this.active ? (
          <goat-text type="body-compact" expressive={false} inline={true}>
            <span itemProp="name">
              <slot />
            </span>
            <meta itemProp="position" content={this.position} />
          </goat-text>
        ) : (
          <goat-text type="body-compact" expressive={false} inline={true}>
            <goat-link itemprop="item" href={this.href} target={this.target}>
              <span itemProp="name">
                <slot />
              </span>
              <meta itemProp="position" content={this.position} />
            </goat-link>
          </goat-text>
        )}
      </Host>
    );
  }
}

import { Component, Element, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'goat-header-action',
  styleUrl: 'header-action.scss',
  shadow: true,
})
export class HeaderAction {
  /**
   * Button size.
   * Possible values are `"sm"`, `"md"`, `"lg"`, `"xl"`, `"xxl"`, `"none"`. Defaults to `"md"`.
   */
  @Prop() size: 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'none' = 'md';

  /**
   * Icon which will displayed on button.
   * Possible values are icon names.
   */
  @Prop() icon: string;

  /**
   * Sets or retrieves the window or frame at which to target content.
   */
  @Prop() target: string = '_self';

  @Prop() badge: string = '_self';

  /**
   * Hyperlink to navigate to on click.
   */
  @Prop() href: string;

  /**
   * Button selection state.
   */
  @Prop() selected: boolean = false;

  @Element() elm!: HTMLElement;

  @State() slotHasContent = false;

  @State() color: any;

  componentWillLoad() {
    const headerColor = this.elm.closest('goat-header').getAttribute('color');

    if (headerColor === 'light') {
      this.color = 'light';
    } else if (headerColor === 'dark') {
      this.color = 'light';
    } else {
      this.color = headerColor;
    }
    this.slotHasContent = this.elm.hasChildNodes();
  }

  render() {
    return (
      <goat-button
        class="header-action"
        color={this.color}
        variant={'default'}
        kind={'simple'}
        icon={this.icon}
        iconSize={'1.25rem'}
        href={this.href}
        selected={this.selected}
        target={this.target}
      >
        {this.slotHasContent && <slot></slot>}
      </goat-button>
    );
  }
}

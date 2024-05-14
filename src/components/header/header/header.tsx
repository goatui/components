import { Component, Element, h, Host, Prop, State, Watch } from '@stencil/core';
import { isLightOrDark, observeThemeChange } from '../../../utils/utils';

/**
 * @name Header
 * @description Header component is used to display a header with a brand, navigation, and actions.
 * @category Navigation
 * @img /assets/img/header.png
 * @imgDark /assets/img/header-dark.png
 */
@Component({
  tag: 'goat-header',
  styleUrl: 'header.scss',
  shadow: true,
})
export class Header {
  @Element() elm!: HTMLElement;

  @Prop() float: boolean = false;

  @Prop({ reflect: true }) color: 'light' | 'dark' | 'brand-primary' | 'brand-secondary' = 'light';

  @Watch('color')
  colorChanged() {
    this.computeColorLightOrDark();
  }

  computeColorLightOrDark() {
    const color = getComputedStyle(document.documentElement).getPropertyValue(`--color-${this.color}`);
    this.colorType = isLightOrDark(color);
  }

  @State() centerSlotHasContent = false;

  componentWillLoad() {
    this.colorChanged();
    this.centerSlotHasContent = !!this.elm.querySelector('[slot="center"]');
    observeThemeChange(() => {
      this.colorChanged();
    });
  }

  @State() colorType: string = 'unknown';

  render() {
    let columnType = 'three-column';
    if (!this.centerSlotHasContent) columnType = 'two-column';
    return (
      <Host color-is={this.colorType}>
        <div class="header-container">
          <header class={{ header: true, float: this.float, [columnType]: true }}>
            <div class="left-section section">
              <slot name="left" />
            </div>
            {this.centerSlotHasContent && (
              <div class="center-section section">
                <slot name="center" />
              </div>
            )}
            <div class="right-section section">
              <slot name="right" />
            </div>
          </header>
        </div>
      </Host>
    );
  }
}

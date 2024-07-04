import {
  Component,
  ComponentInterface,
  Element,
  h,
  Host,
  Listen,
  Prop,
} from '@stencil/core';
import { GoatTabCustomEvent } from '../../../../components';

@Component({
  tag: 'goat-tabs-list',
  styleUrl: 'tabs-list.scss',
  shadow: true,
})
export class TabsList implements ComponentInterface {
  @Prop() managed: boolean = false;

  @Prop({ reflect: true }) type: 'contained' | 'contained-bottom' | 'default' =
    'default';

  @Element() elm!: HTMLElement;

  @Listen('goat:tab-click')
  tabClick(evt: GoatTabCustomEvent<any>) {
    if (!this.managed) {
      this.deselectAllTabs();
      evt.target.selected = true;
      if (evt.detail.target) {
      } else {
        console.warn('goat-tabs:: No target associated');
      }
    }
  }

  deselectAllTabs() {
    const tabs = this.elm.querySelectorAll('goat-tab');
    tabs.forEach(tab => {
      tab.selected = false;
    });
  }

  render() {
    return (
      <Host>
        <div class={{ 'tabs-list': true, [`type-${this.type}`]: true }}>
          <div class="tabs-container">
            <slot />
          </div>
        </div>
      </Host>
    );
  }
}

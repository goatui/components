import { Component, ComponentInterface, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'goat-tab-panel',
  styleUrl: 'tab-panel.scss',
  shadow: true,
})
export class TabPanel implements ComponentInterface {

  @Prop({ reflect: true }) value: string;

  @Prop({ reflect: true }) active: boolean = false;

  render() {
    return (<Host>
      <slot />
    </Host>);
  }
}

import { Component, h, Host, Prop, State, Watch } from '@stencil/core';
import { fetchIcon } from './datasource';

@Component({
  tag: 'goat-svg',
  styleUrl: 'goat-svg.scss',
  shadow: true,
})
export class GoatSvg {

  @Prop({ reflect: true }) size = '2rem';

  @Prop() src: string = '';

  @State() svg: string = '';

  async fetchSvg(name: string) {
    if (this.src)
      this.svg = await fetchIcon(name);
  }


  @Watch('src')
  async handleNameChange(newValue: string) {
    this.svg = await fetchIcon(newValue);
  }

  async componentWillLoad() {
    await this.fetchSvg(this.src);
  }


  render() {
    return (
      <Host>
        <div innerHTML={this.svg} class={{ 'icon': true }} />
      </Host>
    );
  }

}

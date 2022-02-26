import { Component, h, Host, Prop } from '@stencil/core';


@Component({
  tag: 'goat-card',
  styleUrl: 'goat-card.scss',
  shadow: true,
})
export class GoatCard {


  @Prop() shadowLevel: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | undefined;

  render() {
    return (
      <Host shadow-level={this.shadowLevel}>
        <div class="card">
          <slot/>
        </div>
      </Host>
    );
  }

}

import { Component, ComponentInterface, Element, h, Host, Prop, State } from '@stencil/core';

/**
 * @name Divider
 * @description A divider can be used to segment content vertically or horizontally.
 * @example <goat-divider style="width: 12rem;">or</goat-divider>
 */
@Component({
  tag: 'goat-divider',
  styleUrl: 'goat-divider.scss',
  shadow: true,
})
export class GoatDivider implements ComponentInterface {


  @Prop({reflect: true}) vertical: boolean = false;

  @State() slotHasContent = false;
  @Element() elm!: HTMLElement;

  componentWillLoad() {
    this.slotHasContent = this.elm.hasChildNodes();
  }

  render() {
    return (
      <Host>
        <div class={{
          'divider': true,
          'vertical': this.vertical,
          'has-content': this.slotHasContent,
        }}>
          <div class="line"/>
          <div class='slot-container'>
            <slot />
          </div>
          <div class="line" />
        </div>
      </Host>
    );
  }


}

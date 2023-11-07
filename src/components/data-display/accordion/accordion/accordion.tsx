import { Component, Element, h, Host, Listen, Prop } from '@stencil/core';

/**
 * @name Accordion
 * @description An accordion is a vertically stacked list of headers that reveal or hide associated sections of content.
 * @category Data Display
 * @tags display
 * @img /assets/img/accordion.png
 * @imgDark /assets/img/accordion-dark.png
 */
@Component({
  tag: 'goat-accordion',
  styleUrl: 'accordion.scss',
  shadow: true,
})
export class Accordion {
  /**
   * The According size.
   */
  @Prop({ reflect: true }) size: 'sm' | 'md' | 'lg' = 'md';

  /**
   * Accordion item dropdown alignment.
   */
  @Prop({ reflect: true }) align: 'start' | 'end' = 'end';

  @Prop() multiple: boolean = false;

  @Element() elm!: HTMLElement;

  @Listen('goat:accordion-item-click')
  accordionItemClick(evt) {
    if (!this.multiple) {
      const accordionItems = this.elm.querySelectorAll('goat-accordion-item');
      accordionItems.forEach(item => {
        if (item !== evt.detail.element) {
          item.open = false;
        }
      });
    }
  }

  render() {
    return (
      <Host role="list">
        <slot />
      </Host>
    );
  }
}

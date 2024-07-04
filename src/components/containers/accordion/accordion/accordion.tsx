import { Component, Element, h, Host, Listen, Prop } from '@stencil/core';
import { GoatAccordionItemCustomEvent } from '../../../../components';

/**
 * @name Accordion
 * @description An accordion is a vertically stacked list of headers that reveal or hide associated sections of content.
 * @overview
 *  <p>The accordion component delivers large amounts of content in a small space through progressive disclosure. The header title give the user a high level overview of the content allowing the user to decide which sections to read.</p>
 *  <p>Accordions can make information processing and discovering more effective. However, it does hide content from users and it’s important to account for a user not noticing or reading all of the included content. If a user is likely to read all of the content then don’t use an accordion as it adds the burden of an extra click; instead use a full scrolling page with normal headers.</p>
 * @category Data Display
 * @tags display
 * @img /assets/img/accordion.webp
 * @imgDark /assets/img/accordion-dark.webp
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
  accordionItemClick(evt: GoatAccordionItemCustomEvent<any>) {
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
      <Host>
        <slot />
      </Host>
    );
  }
}

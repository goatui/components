import { Component, Element, h, Host, Listen, Prop } from '@stencil/core';

/**
 * @name Accordion
 * @description An accordion is a vertically stacked list of headers that reveal or hide associated sections of content.
 * @category Data Display
 * @tags display
 * @example <goat-accordion>
 *   <goat-accordion-item heading="Title 1"><goat-text>The accordion component delivers large amounts of content in a small space through progressive disclosure. The user gets key details about the underlying content and can choose to expand that content within the constraints of the accordion. Accordions work especially well on mobile interfaces or whenever vertical space is at a premium.</goat-text></goat-accordion-item>
 * </goat-accordion>
 */
@Component({
  tag: 'goat-accordion',
  styleUrl: 'accordion.scss',
  shadow: true,
})
export class Accordion {

  /**
   * The According size.
   * Possible values are: `"sm"`, `"md"`, `"lg"`. Defaults to `"md"`.
   */
  @Prop({ reflect: true }) size: 'sm' | 'md' | 'lg' = 'md';

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
      <Host role='list'>
        <slot />
      </Host>
    );
  }
}

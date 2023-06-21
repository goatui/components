import { Component, h, Host } from '@stencil/core';

/**
 * @name Accordion
 * @description An accordion is a vertically stacked list of headers that reveal or hide associated sections of content.
 * @category Data Display
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
  render() {
    return (
      <Host role='list'>
        <slot />
      </Host>
    );
  }
}

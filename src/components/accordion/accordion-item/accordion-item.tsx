import { Component, Element, Event, EventEmitter, h, Host, Prop, State } from '@stencil/core';
import { getComponentIndex } from '../../../utils/utils';

@Component({
  tag: 'goat-accordion-item',
  styleUrl: 'accordion-item.scss',
  shadow: true,
})
export class GoatAccordionItem {
  gid: string = getComponentIndex();

  /**
   * The menu item value.
   */
  @Prop() heading: string = 'Heading';

  /**
   * If true, the user cannot interact with the button. Defaults to `false`.
   */
  @Prop({ reflect: true }) disabled: boolean = false;

  /**
   * Menu item selection state.
   */
  @Prop({ reflect: true, mutable: true }) open: boolean = false;

  @Prop({ reflect: true }) icon: boolean = false;

  @State() hasFocus = false;

  /**
   * Emitted when the menu item is clicked.
   */
  @Event({ eventName: 'goat:accordion-item-click' }) goatAccordionItemClick: EventEmitter;

  @State() startSlotHasContent = false;
  @State() endSlotHasContent = false;

  @Element() elm!: HTMLElement;

  private blurHandler = () => {
    this.hasFocus = false;
  };

  private focusHandler = () => {
    this.hasFocus = true;
  };

  render = () => {
    return (
      <Host open={this.open} role="listitem">
        <div
          class={{
            'accordion-item': true,
            'open': this.open,
            'disabled': this.disabled,
          }}
        >
          <button
            type="button"
            aria-controls="content"
            class={{ 'accordion-heading': true, 'has-focus': this.hasFocus }}
            onBlur={this.blurHandler}
            onFocus={this.focusHandler}
            aria-disabled={this.disabled}
            on-click={() => {
              if (!this.disabled) {
                this.open = !this.open;
                this.hasFocus = true;
                this.goatAccordionItemClick.emit({ gid: this.gid, open: this.open, element: this.elm });
              }
            }}
            aria-expanded={this.open}
          >
            <goat-icon name="chevron--down" class="accordion-icon inherit" size="1rem" />
            <div part="title" class="accordion-title">
              <slot name="heading">{this.heading}</slot>
            </div>
          </button>
          <div class="item-section slot-main">
            <slot />
          </div>
        </div>
      </Host>
    );
  };
}

import { Component, ComponentInterface, Element, Event, EventEmitter, h, Host, Prop } from '@stencil/core';

/**
 * @name Tag
 * @description Use tags to label, categorize, or organize items using keywords that describe them.
 * @category Data Display
 * @tag controls
 * @example <goat-tag class="color-red">Important</goat-tag>
 */
@Component({
  tag: 'goat-tag',
  styleUrl: 'tag.scss',
  shadow: true,
})
export class Tag implements ComponentInterface {

  /**
   * Text size.
   */
  @Prop({ reflect: true }) size: 'sm' | 'md' = 'md';

  @Prop({ reflect: true }) filter: boolean = false;

  @Prop({ reflect: true }) value: string = '';

  @Event({ eventName: 'goat:click' }) goatClick: EventEmitter;

  @Event({ eventName: 'goat:tag-dismiss' }) goatTagDismissClick: EventEmitter;

  @Element() elm!: HTMLElement;

  private dismissClickHandler = () => {
    this.goatTagDismissClick.emit({ value: this.value || this.elm.textContent });
  };

  renderCloseButton() {
    if (!this.filter) {
      return;
    }
    const size = this.size === 'md' ? '24px' : '16px';
    return <button class='close-btn' onClick={() => this.dismissClickHandler()}>
      <goat-icon class='close-btn-icon inherit' name='x' size={size}></goat-icon>
    </button>;
  }

  render() {
    return (
      <Host>
        <div class={{ 'tag': true, [`size-${this.size}`]: true }}>
          <div class='tag-content'>
            <slot />
          </div>
          {this.renderCloseButton()}
        </div>
      </Host>
    );
  }
}

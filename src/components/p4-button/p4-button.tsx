import { Component, Event, EventEmitter, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'p4-button',
  styleUrl: 'p4-button.scss',
  shadow: true,
})
export class P4Button {


  /**
   * Button size.
   * Possible values are `"sm"`, `"md"`, `"lg"`. Defaults to `"md"`.
   */
  @Prop() size: 'sm' | 'md' | 'lg' = 'md';

  /**
   * Button variants
   * Possible values are `"default"`, `"primary"`, `"dashed"`, `"danger"`, `"link"`. Defaults to `"default"`.
   */
  @Prop() variant: 'default' | 'primary' | 'dashed' | 'danger' | 'link' = 'default';

  /**
   * If true, fits button width to its parent width. Defaults to `false`.
   */
  @Prop() block: boolean = false;

  /**
   * If true, the user cannot interact with the button. Defaults to `false`.
   */
  @Prop() disabled: boolean = false;

  getCssClasses() {
    let css = ['button-component'];
    if (this.block)
      css.push('block');
    css.push(`variant-${this.variant}`);
    css.push(`size-${this.size}`);
    return css.join(' ');
  }

  /**
   * On click of button a CustomEvent 'buttonClick' will be triggered.
   */
  @Event() buttonClick: EventEmitter;

  handleButtonClick(event: any) {
    if (!this.disabled)
      this.buttonClick.emit(event);
  }

  render() {

    return (
      <Host>
        <button
          class={this.getCssClasses()}
          onClick={(evt) => this.handleButtonClick(evt)}
          disabled={this.disabled}>
          <slot />
        </button>
      </Host>
    );
  }

}

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


  @Prop() icon: string;

  @Prop() showLoader: boolean = false;


  /**
   * On click of button a CustomEvent 'p4Click' will be triggered.
   */
  @Event() p4Click: EventEmitter;

  private onClick = (event: any) => {
    if (!this.disabled && !this.showLoader)
      this.p4Click.emit(event);
  };

  private getCssClasses() {
    let css = ['button-component'];
    if (this.block)
      css.push('block');
    css.push(`variant-${this.variant}`);
    css.push(`size-${this.size}`);
    return css.join(' ');
  }

  render() {

    return (
      <Host>
        <button
          class={this.getCssClasses()}
          onClick={this.onClick}
          disabled={this.disabled || this.showLoader}>
          {this.showLoader && <p4-spinner class="icon" size="1rem" />}
          <div class="slot-container" style={{'visibility': this.showLoader ? 'hidden' : 'visible'}}>
            {this.icon && <p4-icon type={this.icon} size="1rem" />}
            <slot />
          </div>
        </button>
      </Host>
    );
  }

}

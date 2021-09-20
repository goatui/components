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
   * Button type
   * Possible values are `"default"`, `"primary"`, `"ghost"`, `"link"`. Defaults to `"primary"`
   */
  @Prop() type: 'primary' | 'secondary' | 'ghost' = 'primary';

  /**
   * If true, fits button width to its parent width. Defaults to `false`.
   */
  @Prop() block: boolean = false;

  /**
   * If true, the user cannot interact with the button. Defaults to `false`.
   */
  @Prop() disabled: boolean = false;


  @Prop() icon: string;

  @Prop() iconPosition: 'left' | 'right' = 'left';

  @Prop() showLoader: boolean = false;


  /**
   * On click of button a CustomEvent 'p4Click' will be triggered.
   */
  @Event() p4Click: EventEmitter;

  private onClick = (event: any) => {
    if (!this.disabled && !this.showLoader)
      this.p4Click.emit(event);
  };

  getIconSize() {
    let size;
    if (!this.size || this.size === 'md')
      size = '1rem';
    else if (this.size === 'lg')
      size = '1.125rem';
    else if (this.size === 'sm')
      size = '0.725rem';
    return size;
  }

  renderIcon() {
    return <p4-icon type={this.icon} size={this.getIconSize()} class='icon' />;
  }

  render() {

    return (
      <Host>
        <button
          class={{
            'button': true,
            'button-block': this.block,
            [`button-type-${this.type}`]: true,
            [`button-size-${this.size}`]: true,
            [`button-icon-position-${this.iconPosition}`]: true,
          }}
          onClick={this.onClick}
          disabled={this.disabled || this.showLoader}>

          {this.showLoader && <p4-spinner class='spinner' size={this.getIconSize()} />}

          {!this.showLoader && this.icon && this.renderIcon()}

          {!this.showLoader && <div class='slot-container'>
            <slot></slot>
          </div>}

        </button>
      </Host>
    );
  }

}

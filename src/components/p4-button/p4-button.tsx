import { Component, Element, Event, EventEmitter, h, Host, Listen, Prop, State } from '@stencil/core';


let index = 0;

@Component({
  tag: 'p4-button',
  styleUrl: 'p4-button.scss',
  shadow: true,
})
export class P4Button {
  private id = ++index;

  @Element() elm!: HTMLElement;


  private tabindex?: string | number;


  /**
   * Button size.
   * Possible values are `"sm"`, `"md"`, `"lg"`. Defaults to `"md"`.
   */
  @Prop() size: 'sm' | 'md' | 'lg' = 'md';

  /**
   * Button variants.
   * Possible values are `"primary"`, `"secondary"`, `"danger"`, `"ghost-primary"`, `"ghost-secondary"`. Defaults to `"primary"`.
   */
  @Prop() variant: 'primary' | 'secondary' | 'danger' | 'ghost-primary' | 'ghost-secondary' = 'primary';

  /**
   * If true, fits button width to its parent width. Defaults to `false`.
   */
  @Prop() block: boolean = false;

  /**
   * If true, the user cannot interact with the button. Defaults to `false`.
   */
  @Prop() disabled: boolean = false;

  @Prop() disabledReason: string = '';
  /**
   * Icon which will displayed on button.
   * Possible values are bootstrap icon names.
   */
  @Prop() icon: string;

  /**
   * Icon position.
   */
  @Prop() iconEnd: boolean = false;

  @Prop() showLoader: boolean = false;

  @Prop() href: string;
  @Prop() target: '_self' | '_blank' = '_self';

  /**
   * On click of button, a CustomEvent 'p4:click' will be triggered.
   */
  @Event({ eventName: 'p4:click' }) p4Click: EventEmitter;


  @State() hasFocus = false;
  @State() isActive = false;
  @State() slotHasContent = false;

  @Listen('mouseup', { target: 'window' })
  windowMouseUp() {
    if (this.isActive)
      this.isActive = false;
  }

  @Listen('keyup', { target: 'window' })
  windowKeyUp(evt) {
    if (this.isActive && (evt.key == 'Enter' || evt.key == ' '))
      this.isActive = false;
  }


  private getIconSize = () => {
    let size;
    if (!this.size || this.size === 'md')
      size = '1rem';
    else if (this.size === 'lg')
      size = '1.125rem';
    else if (this.size === 'sm')
      size = '0.725rem';
    return size;
  };

  private renderIcon = () => {
    return <p4-icon type={this.icon} size={this.getIconSize()} class='icon' />;
  };

  private clickHandler = (event: PointerEvent) => {
    if (!this.disabled && !this.showLoader) {
      if (this.href) {
        window.open(this.href, this.target);
      }
      this.p4Click.emit(event);
    } else {
      event.preventDefault();
      return;
    }
  };

  private blurHandler = () => {
    this.hasFocus = false;
  };

  private focusHandler = () => {
    this.hasFocus = true;
  };

  private mouseDownHandler = () => {
    this.isActive = true;
  };

  private keyDownHandler = (evt) => {
    if (evt.key == 'Enter' || evt.key == ' ') this.isActive = true;
  };

  componentWillLoad() {
    // If the ion-input has a tabindex attribute we get the value
    // and pass it down to the native input, then remove it from the
    // p4-input to avoid causing tabbing twice on the same element
    if (this.elm.hasAttribute('tabindex')) {
      const tabindex = this.elm.getAttribute('tabindex');
      this.tabindex = tabindex !== null ? tabindex : undefined;
      this.elm.removeAttribute('tabindex');
    }
    this.slotHasContent = this.elm.hasChildNodes();
  }


  render() {
    return (<Host focused={this.hasFocus}
                  variant={this.variant}
                  active={this.isActive}
                  size={this.size}
                  icon-end={this.iconEnd}>
      <button
        class={{
          'button': true,
          'slot-has-content': this.slotHasContent,
        }}
        tabindex={this.tabindex}
        onBlur={this.blurHandler}
        onFocus={this.focusHandler}
        onClick={this.clickHandler}
        onMouseDown={this.mouseDownHandler}
        onKeyDown={this.keyDownHandler}
        aria-describedby={`disabledReason-${this.id}`}
        aria-disabled={this.disabled || this.showLoader}>

        {this.showLoader && <p4-spinner class='spinner' size={this.getIconSize()} />}

        {!this.showLoader && this.icon && this.renderIcon()}

        {!this.showLoader && <div class='slot-container'>
          <slot />
        </div>}
      </button>

      {
        this.disabled &&
        <div id={`disabledReason-${this.id}`} role='tooltip' class='sr-only'>
          {this.disabledReason ? this.disabledReason : 'Disabled'}
        </div>
      }
    </Host>);
  }

}

import { Component, Element, Event, EventEmitter, h, Host, Listen, Method, Prop, State } from '@stencil/core';


@Component({
  tag: 'p4-dropdown',
  styleUrl: 'p4-dropdown.scss',
  shadow: true,
})
export class P4Dropdown {

  @Element() elm!: HTMLElement;
  @State() hasFocus = false;
  @State() isOpen: boolean = false;

  /**
   * The button size.
   * Possible values are: `"sm"`, `"md"`, `"lg"`. Defaults to `"md"`.
   */
  @Prop() size: 'sm' | 'md' | 'lg' = 'md';


  @Prop() listVariant: any = 'default';
  @Prop() itemVariant: any = 'default';

  /**
   * If true, the user cannot interact with the button. Defaults to `false`.
   */
  @Prop() disabled: boolean = false;
  @Prop() showLoader: boolean = false;

  @Prop() data: any[] = [];


  /**
   * Emitted when the item is clicked.
   */
  @Event({ eventName: 'p4:dropdown:item-click' }) p4ItemClick: EventEmitter;


  private displayElement?: HTMLElement;
  private listElement?: HTMLElement;

  @Listen('click', { target: 'window' })
  windowClick(evt) {
    if (evt.target.closest('p4-dropdown') !== this.elm)
      this.closeList();
  }

  @Method()
  async setFocus() {
    this.displayElement.focus();
  }


  @Method()
  async setOpen(value = true) {
    this.isOpen = value;
  }

  private itemClickHandler = (item) => {
    if (!this.disabled)
      this.p4ItemClick.emit(item);
  };

  private closeList = () => {
    if (!this.disabled && this.isOpen) {
      this.isOpen = false;
      setTimeout(() => {
        this.setFocus();
      }, 100);
    }
  };

  private openList = () => {
    console.log('open');
    if (!this.disabled && !this.isOpen) {
      this.isOpen = true;
    }
  };

  private toggleList = () => {
    if (this.isOpen)
      this.closeList();
    else
      this.openList();
  };

  private blurHandler = () => {
    this.hasFocus = false;
  };

  private focusHandler = () => {
    this.hasFocus = true;
  };

  render() {
    return (<Host aria-disabled={this.disabled ? 'true' : null} class={{ 'has-focus': this.hasFocus }}>
      <div class='dropdown'>
        <button
          class='dropdown-button'
          ref={(el) => this.displayElement = el}
          onKeyDown={(evt) => {
            if (evt.key === 'Enter') {
              evt.preventDefault();
              this.toggleList();
            } else if (evt.key === 'ArrowDown') {
              if (this.isOpen) {
                evt.preventDefault();
                //@ts-ignore
                this.listElement.setFocus();
              }
            } else if (evt.key === 'ArrowUp') {
              if (this.isOpen) {
                evt.preventDefault();
                //@ts-ignore
                this.listElement.setFocus(true); // focus on previous item
              }
            }
          }}
          onBlur={this.blurHandler}
          onFocus={this.focusHandler}
          onClick={this.toggleList}
        >
          <div class='slot-container'>
            <slot />
          </div>
        </button>
        {this.isOpen && this.getOptions()}
      </div>
    </Host>);
  }

  private getOptions() {
    if (typeof this.data !== 'string') {
      return <div class='select-options'>
        <p4-list
          ref={(el) => this.listElement = el}
          data={this.data}
          variant={this.listVariant}
          itemVariant={this.itemVariant}
          onP4:item-click={(evt) => {
            this.closeList();
            this.itemClickHandler(evt.detail.item);
            setTimeout(() => {
              this.setFocus();
            }, 100);
          }} />
      </div>;
    }
  }

}

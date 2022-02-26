import { Component, Element, Event, EventEmitter, h, Host, Listen, Method, Prop, State } from '@stencil/core';


@Component({
  tag: 'goat-dropdown',
  styleUrl: 'goat-dropdown.scss',
  shadow: true,
})
export class GoatDropdown {
  @Element() elm!: HTMLElement;

  private displayElement?: HTMLElement;
  private listElement?: HTMLElement;

  @State() hasFocus = false;

  /**
   * The button size.
   * Possible values are: `"sm"`, `"md"`, `"lg"`. Defaults to `"md"`.
   */
  @Prop() size: 'sm' | 'md' | 'lg' = 'md';


  @Prop() listVariant: any = 'default';
  @Prop() itemVariant: any = 'default';

  @Prop({ mutable: true }) isOpen: boolean = false;

  /**
   * If true, the user cannot interact with the button. Defaults to `false`.
   */
  @Prop() disabled: boolean = false;
  @Prop() showLoader: boolean = false;

  @Prop() enableSearch: boolean = false;

  @Prop() data: any[] = [];

  @Prop() position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' = 'bottom-left';
  /**
   * Emitted when the item is clicked.
   */
  @Event({ eventName: 'goat:dropdown-item-click' }) p4ItemClick: EventEmitter;


  @Listen('click', { target: 'window' })
  windowClick(evt) {
    const path = (evt.path || evt.composedPath());
    for (const elm of path) {
      if (elm == this.elm)
        return;
    }
    this.isOpen = false;
  }

  @Method()
  async setFocus() {
    this.displayElement.focus();
  }

  private itemClickHandler = (detail) => {
    if (!this.disabled)
      this.p4ItemClick.emit(detail);
  };

  private closeList = () => {
    if (!this.disabled && this.isOpen) {
      this.isOpen = false;
      setTimeout(() => this.setFocus(), 100);
    }
  };

  private openList = () => {
    if (!this.disabled && !this.isOpen) {
      this.isOpen = true;
      setTimeout(() => this.setFocus(), 100);
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

  private keyDownHandler = (evt) => {
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
  };

  render() {
    return (<Host aria-disabled={this.disabled ? 'true' : null} focused={this.hasFocus} position={this.position} is-open={this.isOpen}>
      <div class={{ 'dropdown': true, [this.position]: true, 'is-open': this.isOpen }}>
        <button class='dropdown-button'
                ref={(el) => this.displayElement = el}
                onKeyDown={this.keyDownHandler}
                onBlur={this.blurHandler}
                onFocus={this.focusHandler}
                onClick={(evt) => {
                  evt.preventDefault();
                  this.toggleList();
                }}>
          <div class='slot-container'>
            <slot />
          </div>
        </button>
        <div class='dropdown-result'>
          {this.renderDropdownList()}
        </div>
      </div>
    </Host>);
  }

  private renderDropdownList() {
    if (this.isOpen && typeof this.data !== 'string') {
      return <goat-menu
        class="dropdown-list"
        ref={(el) => this.listElement = el}
        data={this.data}
        variant={this.listVariant}
        itemVariant={this.itemVariant}
        onGoat:item-click={(evt) => {
          this.closeList();
          this.itemClickHandler(evt.detail);
        }} />;
    }
  }

}

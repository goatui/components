import { Component, ComponentInterface, Element, h, Host, Listen, Method, Prop, State } from '@stencil/core';
import { isEventTriggerByElement, isMobile, isOutOfViewport } from '../../../utils/utils';

/**
 * @name Dropdown
 * @description Enables native inputs to be used within a Form field.
 * @img /assets/img/dropdown.png
 */
@Component({
  tag: 'goat-dropdown',
  styleUrl: 'goat-dropdown.scss',
  shadow: true,
})
export class GoatDropdown implements ComponentInterface {

  /**
   * The button size.
   * Possible values are: `"sm"`, `"md"`, `"lg"`. Defaults to `"md"`.
   */
  @Prop() size: 'sm' | 'md' | 'lg' = 'md';

  @Prop({ mutable: true }) isOpen: boolean = false;

  /**
   * If true, the user cannot interact with the button. Defaults to `false`.
   */
  @Prop() disabled: boolean = false;

  @Prop() positions: string = 'bottom-right,top-right,bottom-left,top-left';

  @Prop() items: any[] = null;

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

  @Listen('goat:menu-item-click', { target: 'window' })
  listenMenuItemClick(evt) {
    if (isEventTriggerByElement(evt, this.elm)) {
      this.closeList();
    }
    this.isOpen = false;
  }

  @Listen('goat:click', { target: 'window' })
  listenClick(evt) {
    if (isEventTriggerByElement(evt, this.elm)) {
      this.closeList();
    }
    this.isOpen = false;
  }

  @Listen('keydown', { target: 'window' })
  listenKeyDown(evt: KeyboardEvent) {
    if (isEventTriggerByElement(evt, this.elm)) {
      if (evt.key === 'Escape') {
        this.closeList();
      }
    }
  }

  @Element() elm!: HTMLElement;
  @State() hasFocus = false;
  @State() position: string;
  private displayElement?: HTMLElement;
  private dropdownContentHeight: any;
  private dropdownContentWidth: any;

  private closeList = () => {
    if (!this.disabled && this.isOpen) {
      this.isOpen = false;
      setTimeout(() => this.setFocus(), 100);
    }
  };

  private openList = () => {
    if (!this.disabled && !this.isOpen) {
      this.isOpen = true;
      setTimeout(() => {
        const dropdownContent = this.elm.querySelector('[slot="dropdown-content"]');
        this.dropdownContentHeight = dropdownContent.getBoundingClientRect().height;
        this.dropdownContentWidth = dropdownContent.getBoundingClientRect().width;
        this.fixPosition();
      }, 100);
    }
  };

  componentWillLoad() {
    if (this.positions)
      this.position = this.positions.split(',')[0];
  }

  @Listen('scroll', { target: 'window' })
  fixPosition() {
    if (this.isOpen && this.dropdownContentHeight && this.dropdownContentWidth) {

      if (isMobile()) {
        this.position = 'center';
        return;
      }

      const positions = this.positions.split(',');
      for (let i = 0; i < positions.length; i++) {
        const dropdownButtonRect: any = this.elm.getBoundingClientRect();
        const dropdownContentRect: any = {};
        if (positions[i] === 'bottom-right') {
          dropdownContentRect.top = dropdownButtonRect.top + dropdownButtonRect.height;
          dropdownContentRect.bottom = dropdownContentRect.top + this.dropdownContentHeight;
          dropdownContentRect.left = dropdownButtonRect.left;
          dropdownContentRect.right = dropdownButtonRect.left + this.dropdownContentWidth;
        } else if (positions[i] === 'top-right') {
          dropdownContentRect.top = dropdownButtonRect.top - this.dropdownContentHeight;
          dropdownContentRect.bottom = dropdownButtonRect.top;
          dropdownContentRect.left = dropdownButtonRect.left;
          dropdownContentRect.right = dropdownButtonRect.left + this.dropdownContentWidth;
        } else if (positions[i] === 'bottom-left') {
          dropdownContentRect.top = dropdownButtonRect.top + dropdownButtonRect.height;
          dropdownContentRect.bottom = dropdownContentRect.top + this.dropdownContentHeight;
          dropdownContentRect.left = dropdownButtonRect.left - this.dropdownContentWidth;
          dropdownContentRect.right = dropdownButtonRect.left;
        } else if (positions[i] === 'top-left') {
          dropdownContentRect.top = dropdownButtonRect.top - this.dropdownContentHeight;
          dropdownContentRect.bottom = dropdownButtonRect.top;
          dropdownContentRect.left = dropdownButtonRect.left - this.dropdownContentWidth;
          dropdownContentRect.right = dropdownButtonRect.left;
        }
        const isOut = isOutOfViewport(dropdownContentRect);
        if (!isOut.any) {
          this.position = positions[i];
          break;
        }
      }
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
    const $menuElm = this.getMenuElement();
    if (evt.key === 'Enter') {
      evt.preventDefault();
      this.toggleList();
    } else if (evt.key === 'ArrowDown') {
      if (this.isOpen) {
        evt.preventDefault();
        $menuElm?.setFocus();
      }
    } else if (evt.key === 'ArrowUp') {
      if (this.isOpen) {
        evt.preventDefault();
        $menuElm?.setFocus(); // focus on previous item
      }
    }
  };

  private getMenuElement() {
    return this.elm.querySelector('goat-menu');
  }

  renderItems() {
    if (this.items)
      return <goat-menu class="items">
        {this.items.map((item) => {
          return <goat-menu-item value={item.value}>
            {item.icon && <goat-icon type={item.icon} slot='start' size='sm' />}
            {item.label}
            {item.hint && <span slot='end'>{item.hint}</span>}
          </goat-menu-item>;
        })}
      </goat-menu>;
  }

  render() {
    return (<Host has-focus={this.hasFocus}>
      <div class={{
        'dropdown': true,
        [this.position]: true,
        'is-open': this.isOpen,
      }}>
        <button class='dropdown-button'
                ref={(el) => this.displayElement = el}
                onKeyDown={this.keyDownHandler}
                tabindex='-1'
                onBlur={this.blurHandler}
                onFocus={this.focusHandler}
                disabled={this.disabled}
                onClick={() => {
                  this.toggleList();
                }}>
          <div class='slot-container'>
            <slot />
          </div>
        </button>
        <div class='dropdown-content'>
          {this.renderItems()}
          <slot name='dropdown-content' />
        </div>
      </div>
    </Host>);
  }

}

import {
  Component,
  ComponentInterface,
  Element,
  Event,
  EventEmitter,
  h,
  Host,
  Listen,
  Method,
  Prop,
  State, Watch,
} from '@stencil/core';
import { debounceEvent, getGoatIndex } from '../../../utils/utils';
import { Components } from '../../../components';
import GoatMenu = Components.GoatMenu;


/**
 * @name Select
 * @description Allows the user to select one or more options using a dropdown.
 * @img /assets/img/select.png
 */
@Component({
  tag: 'goat-select',
  styleUrl: 'goat-select.scss',
  shadow: true,
})
export class GoatSelect implements ComponentInterface, InputComponentInterface {

  gid: string = getGoatIndex();


  /**
   * The input field name.
   */
  @Prop() name: string = `goat-input-${this.gid}`;

  /**
   * The input field placeholder.
   */
  @Prop() placeholder: string;

  /**
   * The input field value.
   */
  @Prop({ mutable: true }) value?: string | number;

  /**
   * The select input size.
   * Possible values are: `"sm"`, `"md"`, `"lg"`. Defaults to `"md"`.
   */
  @Prop({ reflect: true }) size: 'sm' | 'md' | 'lg' = 'md';

  /**
   * Search type
   * Possible values are `"none"`, `"initial"`, `"contains"`, `"managed"`. Defaults to `"none"`.
   */
  @Prop() search: 'none' | 'initial' | 'contains' | 'managed' = 'none';

  /**
   * The input state.
   * Possible values are: `"success"`, `"error"`, `"warning"`, 'default'. Defaults to `"default"`.
   */
  @Prop({ reflect: true }) state: 'success' | 'error' | 'warning' | 'default' = 'default';

  /**
   * If true, required icon is show. Defaults to `false`.
   */
  @Prop() required: boolean = false;

  /**
   * If true, the user cannot interact with the button. Defaults to `false`.
   */
  @Prop() disabled: boolean = false;

  @Prop() showLoader: boolean = false;

  @Prop({ mutable: true }) isOpen: boolean = false;

  @Prop({ reflect: true, mutable: true }) configAria: any = {};

  /**
   *  [{
   *    label: 'Shivaji Varma',
   *    value: 'shivaji-varma'
   *  }]
   */
  @Prop() items: any = [];

  @Prop() position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' = 'bottom-left';

  /**
   * If `true`, a clear icon will appear in the input when there is a value. Clicking it clears the input.
   */
  @Prop() clearable = false;

  /**
   * Set the amount of time, in milliseconds, to wait to trigger the `goatChange` event after each keystroke.
   */
  @Prop() debounce = 300;


  /**
   * Emitted when the value has changed.
   */
  @Event({ eventName: 'goat:change' }) goatChange: EventEmitter;

  /**
   * Emitted when the action button is clicked..
   */
  @Event({ eventName: 'goat:action-click' }) p4ActionClick: EventEmitter;

  /**
   * Emitted when a keyboard input occurred.
   */
  @Event({ eventName: 'goat:search' }) goatSearch: EventEmitter;

  /**
   * Sets focus on the native `input` in `ion-input`. Use this method instead of the global
   * `input.focus()`.
   */
  @Method()
  async setFocus() {
    this.displayElement.focus();
  }

  /**
   * Sets blur on the native `input` in `goat-input`. Use this method instead of the global
   * `input.blur()`.
   */
  @Method()
  async setBlur() {
    if (this.nativeInput) {
      this.nativeInput.blur();
    }
  }

  @Watch('debounce')
  protected debounceChanged() {
    this.goatSearch = debounceEvent(this.goatSearch, this.debounce);
  }

  @Listen('click', { target: 'window' })
  windowClick(evt) {
    const path = (evt.path || evt.composedPath());
    for (const elm of path) {
      if (elm == this.elm)
        return;
    }
    this.isOpen = false;
  }

  @Listen('goat:menu-item-click')
  menuItemClick(evt) {
    this.selectHandler(evt.detail.value);
  }

  @Method()
  async getGid() {
    return this.gid;
  }

  @Element() elm!: HTMLElement;
  private nativeInput?: HTMLInputElement;
  private displayElement?: HTMLElement;
  private menuElm?: GoatMenu;
  @State() hasFocus = false;
  @State() searchString: string = '';
  @State() startSlotHasContent = false;
  @State() endSlotHasContent = false;

  private selectHandler = (selectItemValue) => {
    if (!this.disabled) {
      this.value = selectItemValue;
      this.goatChange.emit({ value: this.value, item: this.getItemByValue(selectItemValue) });
    }
    this.closeList();
  };

  private clearInput = () => {
    this.selectHandler(undefined);
  };


  private blurHandler = () => {
    this.hasFocus = false;
  };

  private focusHandler = () => {
    this.hasFocus = true;
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
      if (this.search !== 'none') {
        this.searchString = '';
        setTimeout(() => this.nativeInput.focus(), 100);
      }
    }
  };

  private toggleList = () => {
    if (this.isOpen)
      this.closeList();
    else
      this.openList();
  };


  private keyDownHandler = (evt) => {
    if (evt.key === 'Enter') {
      evt.preventDefault();
      this.toggleList();
    } else if (evt.key === 'ArrowDown') {
      if (this.isOpen) {
        console.log('inside select');
        evt.preventDefault();
        this.menuElm.setFocus();
      }
    } else if (evt.key === 'ArrowUp') {
      if (this.isOpen) {
        evt.preventDefault();
        this.menuElm.setFocus(); // focus on previous item
      }
    }
  };

  private onInput = (ev: Event) => {
    const input = ev.target as HTMLInputElement;
    this.searchString = input.value || '';
    this.goatSearch.emit({ value: this.searchString });
  };

  private hasValue(): boolean {
    return (this.value || '').toString().length > 0;
  }

  getItemByValue(value) {
    if (this.items) {
      return this.items.find((item) => {
        return item.value === value;
      });
    }
  }

  getDisplayValue() {
    if (this.items) {
      const item = this.getItemByValue(this.value);
      if (item) {
        return item.label;
      }
    }
    return this.placeholder;
  }

  componentWillLoad() {
    this.elm.getAttributeNames().forEach((name: string) => {
      if (name.includes('aria-')) {
        this.configAria[name] = this.elm.getAttribute(name);
        this.elm.removeAttribute(name);
      }
    });
    this.startSlotHasContent = !!this.elm.querySelector('[slot="start"]');
    this.endSlotHasContent = !!this.elm.querySelector('[slot="end"]');
  }

  connectedCallback() {
    this.debounceChanged();
  }


  render() {

    return (<Host aria-disabled={this.disabled ? 'true' : null}
                  has-value={this.hasValue()}
                  has-focus={this.hasFocus}
                  is-open={this.isOpen}
                  position={this.position}>

      <div class={{ 'dropdown': true, 'select': true, [this.position]: true, 'is-open': this.isOpen }}>
        <div class={{
          'input-container': true,
          [`search-${this.search}`]: true,
          'has-focus': this.hasFocus,
          'disabled': this.disabled,
          'has-value': this.hasValue(),
          'start-slot-has-content': this.startSlotHasContent,
          'end-slot-has-content': this.endSlotHasContent,
        }}>

          <div class='slot-container start'>
            <slot name='start' />
          </div>

          {
            (() => {
              if (this.search !== 'none' && this.isOpen) {
                return <input class='input input-native'
                              ref={input => this.nativeInput = input}
                              type='text'
                              name={this.name}
                              value={this.searchString}
                              placeholder={this.placeholder}
                              onBlur={this.blurHandler}
                              onFocus={this.focusHandler}
                              onInput={this.onInput}
                              onKeyDown={this.keyDownHandler}
                              {...this.configAria}
                />;
              } else {
                return <div class='input display-value'
                            ref={(el) => this.displayElement = el}
                            tabindex='0'
                            onFocus={this.focusHandler}
                            onBlur={this.blurHandler}
                            onKeyDown={this.keyDownHandler}
                            onClick={(evt) => {
                              evt.preventDefault();
                              this.toggleList();
                            }}
                            {...this.configAria} >
                  {this.getDisplayValue()}
                </div>;
              }
            })()
          }


          {this.clearable && this.hasValue() &&
            <goat-icon class='clear input-action' type='x-circle-fill' size={this.size} onClick={this.clearInput}
                       role='button' />}

          <div class='slot-container end'>
            <slot name='end' />
          </div>

          {this.getModeIcon()}

        </div>
        <div class='dropdown-content'>
          {this.isOpen && this.renderDropdownList()}
        </div>
      </div>
    </Host>);
  }


  private getModeIcon() {
    if (this.showLoader) {
      return <goat-spinner class='input-action rainbow' />;
    }
    return <goat-icon type='chevron-down' size={this.size}
                      class='input-action chevron-down' role='button' onClick={this.toggleList} />;
  }

  private renderDropdownList() {
    if (this.search === 'managed' && !this.items.length) {
      return <goat-menu
        class='menu'
        ref={(el) => this.menuElm = el}>

       <div class="start-search">
               <goat-icon type='search' size={this.size} />
         <goat-text shade="secondary">Start typing to perform search</goat-text>
       </div>

      </goat-menu>;
    }


    if (this.items) {
      const filteredItems = this.filterItems();
      return <goat-menu
        class='menu'
        empty={filteredItems.length == 0}
        ref={(el) => this.menuElm = el}>

        {(() => {
          return filteredItems.map((item) => {
            return <goat-menu-item value={item.value}>
              {item.label || item.value}
            </goat-menu-item>;
          });
        })()}

      </goat-menu>;
    }
  }

  private filterItems() {
    if (this.search === 'managed')
      return this.items;
    return this.items.filter((item) => {
      return (!this.searchString || item.label.toLocaleLowerCase().includes(this.searchString.toLocaleLowerCase()));
    });
  }

}

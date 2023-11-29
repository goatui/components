import { Component, ComponentInterface, Element, Event, EventEmitter, h, Host, Listen, Method, Prop, State, Watch } from '@stencil/core';
import { debounceEvent, getComponentIndex, isOutOfViewport } from '../../../utils/utils';
import { Components } from '../../../components';
import GoatMenu = Components.GoatMenu;

/**
 * @name Select
 * @description Allows the user to select one or more options using a dropdown.
 * @category Form Inputs
 * @tags input, form
 * @img /assets/img/select.png
 * @imgDark /assets/img/select-dark.png
 */
@Component({
  tag: 'goat-select',
  styleUrl: 'select.scss',
  shadow: true,
})
export class Select implements ComponentInterface, InputComponentInterface {
  gid: string = getComponentIndex();

  /**
   * The input field name.
   */
  @Prop() name: string = `goat-input-${this.gid}`;

  /**
   * The input field placeholder.
   */
  @Prop() placeholder: string;

  @Prop() label: string;

  @Prop() helperText: string;

  @Prop() invalid: boolean = false;

  @Prop() invalidText: string;

  @Prop() warn: boolean = false;

  @Prop() warnText: string;

  /**
   * The input field value.
   */
  @Prop({ mutable: true }) value?: string | number = '';

  @Prop() multiple: boolean = false;

  @Prop() hideDropdownIcon: boolean = false;

  /**
   * The select input size.
   * Possible values are: `"sm"`, `"md"`, `"lg"`. Defaults to `"md"`.
   */
  @Prop({ reflect: true }) size: 'sm' | 'md' | 'lg' = 'md';

  @Prop({ reflect: true }) inline: boolean = false;

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
  @Prop({ reflect: true }) required: boolean = false;

  /**
   * If true, the user cannot interact with the button. Defaults to `false`.
   */
  @Prop({ reflect: true }) disabled: boolean = false;

  /**
   * If true, the user cannot interact with the button. Defaults to `false`.
   */
  @Prop({ reflect: true }) readonly: boolean = false;

  @Prop() showLoader: boolean = false;

  @Prop({ mutable: true }) isOpen: boolean = false;

  @Prop({ reflect: true, mutable: true }) configAria: any = {};

  /**
   *  [{
   *    label: 'Shivaji Varma',
   *    value: 'shivaji-varma',
   *    icon: 'person'
   *  }]
   */
  @Prop() items: any = [];

  @Prop() positions: string = 'bottom-right,top-right,bottom-left,top-left';

  /**
   * If `true`, a clear icon will appear in the input when there is a value. Clicking it clears the input.
   */
  @Prop() clearable: boolean = false;

  /**
   * Set the amount of time, in milliseconds, to wait to trigger the `goatChange` event after each keystroke.
   */
  @Prop() debounce = 300;

  /**
   * Emitted when the value has changed.
   */
  @Event({ eventName: 'goat:change' }) goatChange: EventEmitter;

  /**
   * Emitted when a keyboard input occurred.
   */
  @Event({ eventName: 'goat:search' }) goatSearch: EventEmitter;

  @Event({ eventName: 'goat:search-enter' }) goatSearchEnter: EventEmitter;

  /**
   * Sets focus on the native `input` in `ion-input`. Use this method instead of the global
   * `input.focus()`.
   */
  @Method()
  async setFocus(): Promise<void> {
    if (!this.isOpen && this.displayElement) {
      this.displayElement.focus();
    } else if (this.isOpen && this.nativeElement) {
      this.nativeElement.focus();
    }
  }

  /**
   * Sets blur on the native `input` in `goat-input`. Use this method instead of the global
   * `input.blur()`.
   */
  @Method()
  async setBlur() {
    if (this.nativeElement) {
      this.nativeElement.blur();
    }
  }

  @Watch('debounce')
  protected debounceChanged() {
    this.goatSearch = debounceEvent(this.goatSearch, this.debounce);
  }

  @Listen('click', { target: 'window' })
  windowClick(evt) {
    const path = evt.path || evt.composedPath();
    for (const elm of path) {
      if (elm == this.elm) return;
    }
    this.isOpen = false;
  }

  @Listen('goat:menu-item-click')
  menuItemClick(evt) {
    this.selectHandler(evt.detail.value);
  }

  @Method()
  async getComponentId() {
    return this.gid;
  }

  @Element() elm!: HTMLElement;
  private nativeElement?: HTMLInputElement;
  private dropdownContentElm?: HTMLElement;
  private menuElm?: GoatMenu;
  private dropdownContentHeight: any;
  private dropdownContentWidth: any;
  @State() hasFocus = false;
  @State() searchString: string = '';
  @State() startSlotHasContent = false;
  @State() endSlotHasContent = false;
  @State() position: string;
  private displayElement?: HTMLElement;

  @Listen('goat:tag-dismiss')
  tagDismissClick(evt) {
    this.removeItem(evt.detail.value);
  }

  private getValues() {
    if (this.value) return this.value.toString().split(',');
    else return [];
  }

  private addItem(selectItemValue) {
    let value = this.getValues();
    if (!value.includes(selectItemValue)) {
      if (!this.multiple) value = [];
      value.push(selectItemValue);
      this.value = value.join(',');
      this.goatChange.emit({ value: this.value, newItem: this.getItemByValue(selectItemValue) });
    }
  }

  private removeItem(selectItemValue) {
    let value = this.getValues();
    if (value.includes(selectItemValue)) {
      value = value.filter(item => item !== selectItemValue);
      this.value = value.join(',');
      this.goatChange.emit({ value: this.value, removedItem: this.getItemByValue(selectItemValue) });
    }
  }

  private selectHandler = selectItemValue => {
    if (!this.disabled && !this.readonly) {
      this.addItem(selectItemValue);
    }
    this.closeList();
  };

  private clearInput = () => {
    if (!this.disabled && !this.readonly) {
      this.removeItem(this.value);
    }
  };

  private blurHandler = () => {
    this.hasFocus = false;
  };

  private focusHandler = () => {
    this.hasFocus = true;
  };

  private closeList = () => {
    if (!this.disabled && !this.readonly && this.isOpen) {
      this.isOpen = false;
      setTimeout(() => this.setFocus(), 100);
    }
  };

  private openList = () => {
    if (!this.disabled && !this.readonly && !this.isOpen) {
      this.isOpen = true;
      if (this.search !== 'none') {
        this.searchString = '';
        setTimeout(() => {
          const dropdownContent = this.dropdownContentElm;
          this.dropdownContentHeight = dropdownContent.getBoundingClientRect().height;
          this.dropdownContentWidth = dropdownContent.getBoundingClientRect().width;
          this.fixPosition();
          this.nativeElement.focus();
        }, 100);
      } else {
        setTimeout(() => {
          const dropdownContent = this.dropdownContentElm;
          this.dropdownContentHeight = dropdownContent.getBoundingClientRect().height;
          this.dropdownContentWidth = dropdownContent.getBoundingClientRect().width;
          this.fixPosition();
        }, 100);
      }
    }
  };

  private toggleList = evt => {
    evt.stopPropagation();
    evt.preventDefault();
    if (this.isOpen) this.closeList();
    else this.openList();
  };

  private keyDownHandler = evt => {
    if (evt.key === 'Enter') {
      evt.preventDefault();
      this.toggleList(evt);
      this.goatSearchEnter.emit({
        value: this.searchString,
        currentItems: this.filterItems(),
      });
    } else if (evt.key === 'ArrowDown') {
      if (this.isOpen) {
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
    this.goatSearch.emit({
      value: this.searchString,
    });
  };

  private hasValue(): boolean {
    return (this.value || '').toString().length > 0;
  }

  private getItemByValue(value) {
    if (this.items) {
      return this.items.find(item => {
        return item.value == value;
      });
    }
  }

  private getDisplayValue() {
    if (!this.multiple) {
      if (this.items) {
        const item = this.getItemByValue(this.value);
        if (item) {
          return (
            <div class="display-value-container">
              {item.icon && <goat-icon name={item.icon} size="sm" />}
              {item.label}
            </div>
          );
        }
      }
      if (!this.disabled && !this.readonly) {
        return this.placeholder;
      } else {
        return <span>&nbsp;</span>;
      }
    } else {
      if (!this.value && !this.disabled && !this.readonly) {
        return this.placeholder;
      } else {
        return <span>&nbsp;</span>;
      }
    }
  }

  componentWillLoad() {
    if (this.positions) this.position = this.positions.split(',')[0];
    this.elm.getAttributeNames().forEach((name: string) => {
      if (name.includes('aria-')) {
        this.configAria[name] = this.elm.getAttribute(name);
        this.elm.removeAttribute(name);
      }
    });
    this.startSlotHasContent = !!this.elm.querySelector('[slot="start"]');
    this.endSlotHasContent = !!this.elm.querySelector('[slot="end"]');
  }

  @Listen('scroll', { target: 'window' })
  fixPosition() {
    const isMobile = false; //isMobile();
    if (this.isOpen && this.dropdownContentHeight && this.dropdownContentWidth) {
      if (isMobile) {
        this.position = 'center';
        return;
      } else if (this.position === 'center') {
        this.position = this.positions.split(',')[0];
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
  }

  connectedCallback() {
    this.debounceChanged();
  }

  renderMultiSelectValues() {
    const values = this.getValues();
    if (this.multiple && values.length) {
      return (
        <div class="multi-select-values">
          {values.map(value => {
            const item = this.getItemByValue(value);
            if (item) {
              return (
                <goat-tag filter={!this.disabled && !this.readonly} class="multi-select-value" value={item.value}>
                  {item.label}
                </goat-tag>
              );
            }
          })}
        </div>
      );
    }
  }

  render() {
    return (
      <Host has-value={this.hasValue()} has-focus={this.hasFocus} is-open={this.isOpen} position={this.position}>
        <div class={{ 'form-control': true, 'inline': this.inline }}>
          {this.label && (
            <label class="label">
              {this.required && <span class="required">*</span>}
              {this.label}
            </label>
          )}

          <div class="field">
            <div
              class={{
                'dropdown': true,
                'select': true,
                'multiple': this.multiple,
                [this.position]: true,
                'is-open': this.isOpen,
                [`search-${this.search}`]: true,
              }}
            >
              <div
                class={{
                  'input-container': true,
                  'has-focus': this.hasFocus,
                  'disabled': this.disabled,
                  'readonly': this.readonly,
                  'has-value': this.hasValue(),
                  'start-slot-has-content': this.startSlotHasContent,
                  'end-slot-has-content': this.endSlotHasContent,
                }}
              >
                <div class="slot-container start">
                  <slot name="start" />
                </div>

                {this.renderMultiSelectValues()}

                {(() => {
                  if (this.search !== 'none' && this.isOpen) {
                    return (
                      <input
                        class="input input-native"
                        ref={input => (this.nativeElement = input)}
                        type="text"
                        name={this.name}
                        value={this.searchString}
                        placeholder={this.placeholder}
                        onBlur={this.blurHandler}
                        onFocus={this.focusHandler}
                        onInput={this.onInput}
                        onKeyDown={this.keyDownHandler}
                        {...this.configAria}
                      />
                    );
                  } else {
                    return (
                      <div
                        class="input display-value"
                        tabindex="0"
                        ref={input => (this.displayElement = input)}
                        aria-disabled={this.disabled ? 'true' : null}
                        onFocus={this.focusHandler}
                        onBlur={this.blurHandler}
                        onKeyDown={this.keyDownHandler}
                        onClick={this.toggleList}
                        {...this.configAria}
                      >
                        {this.getDisplayValue()}
                      </div>
                    );
                  }
                })()}

                {this.clearable && !this.multiple && this.hasValue() && (
                  <goat-button class="clear input-action" size={'full'} color={'secondary'} kind={'simple'} variant="ghost" icon="close" onClick={this.clearInput} />
                )}

                <div class="slot-container end">
                  <slot name="end" />
                </div>

                {this.getModeIcon()}
              </div>
              <div class="dropdown-content" ref={elm => (this.dropdownContentElm = elm)}>
                {this.isOpen && this.renderDropdownList()}
              </div>
            </div>
          </div>
        </div>
      </Host>
    );
  }

  private getModeIcon() {
    if (this.showLoader) {
      return <goat-spinner class="input-action loader" />;
    }
    if (!this.disabled && !this.readonly && !this.hideDropdownIcon)
      return <goat-icon tabindex={-1} class="chevron-down color-secondary" size={this.size} name="chevron--down" onClick={this.toggleList}></goat-icon>;
  }

  private renderDropdownList() {
    if (this.search === 'managed' && !this.items.length) {
      return (
        <goat-menu class="menu" ref={el => (this.menuElm = el)} size={this.size}>
          <div class="start-search">
            <goat-icon name="search" size={this.size} />
            <goat-text class="text-secondary">Start typing to perform search</goat-text>
          </div>
        </goat-menu>
      );
    }

    if (this.items) {
      const filteredItems = this.filterItems();
      return (
        <goat-menu class="menu" empty={filteredItems.length == 0} ref={el => (this.menuElm = el)} size={this.size}>
          {(() => {
            return filteredItems.map(item => {
              return (
                <goat-menu-item value={item.value}>
                  {item.icon && <goat-icon name={item.icon} slot="start" size="sm" />}
                  {item.label || item.value}
                </goat-menu-item>
              );
            });
          })()}
        </goat-menu>
      );
    }
  }

  private filterItems() {
    if (this.search === 'managed') return this.items;
    return this.items.filter(item => {
      return !this.searchString || item.label.toLocaleLowerCase().includes(this.searchString.toLocaleLowerCase());
    });
  }
}

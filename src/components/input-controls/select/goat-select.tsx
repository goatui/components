/*
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
  State,
} from '@stencil/core';
import { findItemLabel } from '../../../utils/utils';

let index = 0;

/!**
 * @name Select
 * @description Allows the user to select one or more options using a dropdown.
 * @img /assets/img/select.png
 *!/
@Component({
  tag: 'goat-select',
  styleUrl: 'goat-select.scss',
  shadow: true,
})
export class GoatSelect implements ComponentInterface, InputComponentInterface {
  private id = ++index;
  @Element() elm!: HTMLElement;

  private nativeInput?: HTMLInputElement;
  private displayElement?: HTMLElement;
  private listElement?: HTMLElement;

  @State() hasFocus = false;

  @State() searchString: string = '';


  /!**
   * The input field placeholder.
   *!/
  @Prop() placeholder: string;
  /!**
   * The input field value.
   *!/
  @Prop({ mutable: true }) value?: string | number;
  /!**
   * The button size.
   * Possible values are: `"sm"`, `"md"`, `"lg"`. Defaults to `"md"`.
   *!/
  @Prop() size: 'sm' | 'md' | 'lg' = 'md';
  /!**
   * Select type
   * Possible values are `"select"`, `"typeahead"`. Defaults to `"select"`.
   *!/
  @Prop() type: 'select' | 'typeahead' = 'select';
  /!**
   * If true, required icon is show. Defaults to `false`.
   *!/
  @Prop() required: boolean = false;
  /!**
   * If true, the user cannot interact with the button. Defaults to `false`.
   *!/
  @Prop() disabled: boolean = false;
  @Prop() showLoader: boolean = false;
  @Prop({ mutable: true }) isOpen: boolean = false;

  @Prop() managed: boolean = false;
  @Prop() config: any = { itemValue: 'value', itemLabel: 'label' };

  @Prop() data: any = [];
  @Prop() position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' = 'bottom-left';
  @Prop() actions: any[] = [];

  /!**
   * If `true`, a clear icon will appear in the input when there is a value. Clicking it clears the input.
   *!/
  @Prop() clearInput = false;
  /!**
   * The input field name.
   *!/
  @Prop() name: string = `goat-select-${this.id}`;

  /!**
   * Emitted when the value has changed..
   *!/
  @Event({ eventName: 'goat:change' }) p4Change: EventEmitter;
  /!**
   * Emitted when the action button is clicked..
   *!/
  @Event({ eventName: 'goat:action-click' }) p4ActionClick: EventEmitter;
  /!**
   * Emitted when a keyboard input occurred.
   *!/
  @Event({ eventName: 'goat:input' }) p4Input: EventEmitter;

  /!**
   * Sets focus on the native `input` in `ion-input`. Use this method instead of the global
   * `input.focus()`.
   *!/
  @Method()
  async setFocus() {
    this.displayElement.focus();
  }

  /!**
   * Sets blur on the native `input` in `goat-input`. Use this method instead of the global
   * `input.blur()`.
   *!/
  @Method()
  async setBlur() {
    if (this.nativeInput) {
      this.nativeInput.blur();
    }
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

  private changeHandler = (item?) => {
    if (!this.disabled) {
      this.value = this.getItemValue(item);
      this.p4Change.emit({ value: this.value, item });
    }
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
      if (this.type === 'typeahead') {
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

  private getItemValue(item) {
    if (!item)
      return null;
    return item[this.config.itemValue];
  }

  private getItemLabel(item) {
    return item[this.config.itemLabel];
  }

  private getActionIconSize() {
    if (this.size == 'lg')
      return '1.5rem';
    if (this.size == 'sm')
      return '1rem';
    return '1.25rem';
  }

  private actionClickHandler = (action) => {
    if (!action.disabled)
      this.p4ActionClick.emit(action);
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

  private onInput = (ev: Event) => {
    const input = ev.target as HTMLInputElement;
    this.searchString = input.value || '';
    this.p4Input.emit(ev);
  };

  private hasValue(): boolean {
    return (this.value || '').toString().length > 0;
  }

  getOptionLabelByValue(value) {
    if (this.data) {
      const item = this.data.find((item) => {
        return this.getItemValue(item) === value;
      });
      if (item)
        return this.getItemLabel(item);
      else
        return this.placeholder;
    }
  }


  render() {
    const labelId = `goat-select-${this.id}-lbl`;
    const label = findItemLabel(this.elm);
    if (label) {
      label.id = labelId;
      label.setAttribute('required', this.required + '');
    }

    const actions = this.actions;

    return (<Host aria-disabled={this.disabled ? 'true' : null}
                  has-value={this.hasValue()}
                  focused={this.hasFocus}
                  is-open={this.isOpen}
                  position={this.position}>
      <div class={{ 'select-container': true, [this.position]: true, 'is-open': this.isOpen }}>
        <div class={{
          'select': true,
          'input-container': true,
          [`input-size-${this.size}`]: true,
          [`input-type-${this.type}`]: true,
          'input-has-actions': !!actions.length,
          'input-disabled': this.disabled,
        }}>

          {
            ((this.type === 'select') || (this.type === 'typeahead' && !this.isOpen))
            && <div class='input display-value'
                    ref={(el) => this.displayElement = el}
                    tabindex='0'
                    onFocus={this.focusHandler}
                    onBlur={this.blurHandler}
                    onKeyDown={this.keyDownHandler}
                    onClick={(evt) => {
                      evt.preventDefault();
                      this.toggleList();
                    }}>
              {this.getOptionLabelByValue(this.value)}
            </div>
          }


          {
            ((this.type === 'typeahead' && this.isOpen))
            && <input class='input input-native'
                      ref={input => this.nativeInput = input}
                      type='text'
                      aria-labelledby={labelId}
                      name={this.name}
                      value={this.searchString}
                      placeholder={this.placeholder}
                      onBlur={this.blurHandler}
                      onFocus={this.focusHandler}
                      onInput={this.onInput}
                      onKeyDown={this.keyDownHandler}
            />
          }


          <div class='input-actions'>
            {actions.map((action) => {
              return <button type='button'
                             class={{
                               'action-button': true,
                               'action-button-disabled': action.disabled,
                             }}
                             aria-disabled={action.disabled}
                             onClick={() => this.actionClickHandler(action)}>
                <goat-icon type={action.icon} class='action-icon' size={this.getActionIconSize()} />
              </button>;
            })}
            {!this.showLoader && this.getModeIcon()}
          </div>
        </div>
        <div class='dropdown-result'>
          {this.isOpen && this.renderDropdownList()}
        </div>
      </div>
    </Host>);
  }


  private getModeIcon() {
    return <button class='action-button mode-button' type='button'
                   onClick={(evt) => {
                     evt.preventDefault();
                     if (this.clearInput && this.hasValue()) {
                       if (!this.disabled)
                         this.changeHandler();
                     } else {
                       this.toggleList();
                     }
                   }}>
      <goat-icon type={this.isOpen ? 'chevron-up' : 'chevron-down'} size={this.getActionIconSize()}
                 class='action-icon mode-icon' />
      <goat-icon type='x-circle-fill' size={this.getActionIconSize()} class='action-icon clear-icon' />
    </button>;
  }

  private renderDropdownList() {
    if (typeof this.data !== 'string') {
      if (this.showLoader) {
        return <div class='search-loader'>
          <goat-spinner size={this.getActionIconSize()} />
          Loading...
        </div>;
      } else {
        const data = this.filterAndFormatData();
        return <goat-menu
          class='dropdown-list'
          ref={(el) => this.listElement = el}
          data={data}
          value={this.value}
          onGoat:item-click={(evt) => {
            this.closeList();
            this.changeHandler(this.findDataItem(evt.detail.item));
          }} />;
      }
    }
  }

  private filterAndFormatData(): any {
    if (this.managed)
      return this.data;
    return this.data.filter((item) => {
      return (!this.searchString || this.getItemLabel(item).toLocaleLowerCase().includes(this.searchString.toLocaleLowerCase()));
    }).map((item) => {
      return {
        label: this.getItemLabel(item),
        value: this.getItemValue(item),
      };
    });
  }

  private findDataItem(listItem): any {
    if (listItem) {
      return this.data.find((item) => {
        return this.getItemValue(item) === listItem.value;
      });
    }
  }

  [memberName: string]: any;

  getGid(): Promise<string> {
    return Promise.resolve('');
  }

}
*/

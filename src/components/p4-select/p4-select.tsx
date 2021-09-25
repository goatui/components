import { Component, Element, Event, EventEmitter, h, Host, Listen, Method, Prop, State } from '@stencil/core';
import { findItemLabel } from '../../utils/utils';

let inputIds = 0;

@Component({
  tag: 'p4-select',
  styleUrl: 'p4-select.scss',
  shadow: true,
})
export class P4Select {

  @Element() elm!: HTMLElement;
  @State() activeOption;
  @State() hasFocus = false;
  /**
   * The input field placeholder.
   */
  @Prop() placeholder: string;
  /**
   * The input field value.
   */
  @Prop() value?: string | number;
  /**
   * The button size.
   * Possible values are: `"sm"`, `"md"`, `"lg"`. Defaults to `"md"`.
   */
  @Prop() size: 'sm' | 'md' | 'lg' = 'md';
  /**
   * Button variants
   * Possible values are `"default"`, `"dashed"`. Defaults to `"default"`.
   */
  @Prop() variant: 'default' | 'dashed' = 'default';
  /**
   * If true, required icon is show. Defaults to `false`.
   */
  @Prop() required: boolean = false;
  /**
   * If true, the user cannot interact with the button. Defaults to `false`.
   */
  @Prop() disabled: boolean = false;
  @Prop() showLoader: boolean = false;
  @Prop() type: 'select' | 'dropdown' = 'select';
  @Prop() config: any = { itemValue: 'value', itemLabel: 'label' };
  /**
   * If true, the user cannot interact with the button. Defaults to `false`.
   */
  @Prop() options: any[] = [];
  @Prop() actions: any[] = [];
  /**
   * If `true`, a clear icon will appear in the input when there is a value. Clicking it clears the input.
   */
  @Prop() clearInput = false;
  /**
   * Emitted when the value has changed..
   */
  @Event() p4Change: EventEmitter;
  /**
   * Emitted when the action button is clicked..
   */
  @Event() p4ActionClick: EventEmitter;
  /**
   * Emitted when the input loses focus.
   */
  @Event() p4Blur: EventEmitter;
  /**
   * Emitted when the input has focus.
   */
  @Event() p4Focus: EventEmitter;


  @State() mode: 'open' | 'close' = 'close';
  @State() searchString: string = '';
  private displayElement?: HTMLElement;
  private listElement?: HTMLElement;
  private inputId = `p4-select-${inputIds++}`;
  /**
   * The input field name.
   */
  @Prop() name: string = this.inputId;

  /**
   * Sets focus on the native `input` in `ion-input`. Use this method instead of the global
   * `input.focus()`.
   */
  @Method()
  async setFocus() {
    this.displayElement.focus();
  }

  @Listen('click', { target: 'window' })
  windowClick(evt) {
    if (evt.target.closest('p4-select') !== this.elm)
      this.closeList();
  }

  getOptionLabelByValue(value) {
    if (this.options) {
      const item = this.options.find((item) => {
        return this.getItemValue(item) === value;
      });
      if (item)
        return this.getItemLabel(item);
      else
        return this.placeholder;
    }
  }

  render() {
    const labelId = this.inputId + '-lbl';
    const label = findItemLabel(this.elm);
    if (label) {
      label.id = labelId;
      if (this.required)
        label.classList.add('required');
    }


    return (
      <Host aria-disabled={this.disabled ? 'true' : null}
            class={{ 'has-focus': this.hasFocus, 'has-value': this.hasValue() }}>
        <div class='select'>
          <div class={{
            'input': true,
            [`input-variant-${this.variant}`]: true,
            [`input-size-${this.size}`]: true,
            [`input-type-${this.type}`]: true,
            'input-disabled': this.disabled,
          }}>

            <div class='display-value'
                 tabindex='1'
                 onFocus={this.focusHandler}
                 ref={(el) => this.displayElement = el}
                 onBlur={this.blurHandler}
                 onKeyDown={(evt) => {
                   if (evt.key === 'Enter') {
                     evt.preventDefault();
                     this.toggleList();
                   } else if (evt.key === 'ArrowDown') {
                     if (this.mode == 'open') {
                       evt.preventDefault();
                       //@ts-ignore
                       this.listElement.setFocus();
                     }
                   } else if (evt.key === 'ArrowUp') {
                     if (this.mode == 'open') {
                       evt.preventDefault();
                       //@ts-ignore
                       this.listElement.setFocus(true); // focus on previous item
                     }
                   }
                 }}
                 onClick={() => {
                   this.toggleList();
                 }}>
              {
                this.getOptionLabelByValue(this.value)
              }
            </div>
            <div class='input-actions'>
              {this.getModeIcon()}
            </div>
          </div>
          {this.mode == 'open' && this.getOptions()}
        </div>
      </Host>
    );
  }

  private changeHandler = (item) => {
    if (!this.disabled) {
      this.value = this.getItemValue(item);
      this.activeOption = item;
      this.p4Change.emit({ value: this.value, item });
    }
  };

  private closeList = () => {
    if (!this.disabled && this.mode == 'open') {
      this.mode = 'close';
      setTimeout(() => {
        this.setFocus();
      }, 100);
    }
  };

  private openList = () => {
    if (!this.disabled && this.mode == 'close') {
      this.mode = 'open';
    }
  };

  private toggleList = () => {
    if (this.mode === 'open')
      this.closeList();
    else
      this.openList();
  };

  private blurHandler = (evt) => {
    this.hasFocus = false;
    this.p4Blur.emit(evt);
    setTimeout(() => {
      this.openList();
    }, 300);
  };

  private focusHandler = (ev: FocusEvent) => {
    this.hasFocus = true;
    this.p4Focus.emit(ev);
  };

  private getItemValue(item) {
    return item[this.config.itemValue];
  }

  private getItemLabel(item) {
    return item[this.config.itemLabel];
  }

  private hasValue(): boolean {
    return (this.value || '').toString().length > 0;
  }

  private getActionIconSize() {
    if (this.size == 'lg')
      return '1.5rem';
    if (this.size == 'sm')
      return '1rem';
    return '1.25rem';
  }

  private getModeIcon() {
    return <button class='action-button' type='button' onClick={(evt) => {
      evt.preventDefault();
      setTimeout(() => {
        if (this.mode === 'open')
          this.closeList();
        else
          this.openList();
      });
      return false;
    }}>
      <p4-icon type={this.mode == 'open' ? 'chevron-up' : 'chevron-down'} size={this.getActionIconSize()}
               class='action-icon' />
    </button>;
  }

  private getOptions() {
    if (typeof this.options !== 'string') {
      let options = [];
      if (typeof this.options !== 'string') {
        options = this.options;
      }
      return <div class='select-options'>
        <p4-list
          ref={(el) => this.listElement = el}
          data={options}
          //  config={this.config}
          value={this.value}
          onP4:item-click={(evt) => {
            this.closeList();
            // this.
            this.changeHandler(evt.detail.item);
            setTimeout(() => {
              this.setFocus();
            }, 100);
          }} />
      </div>;
    }
  }

}

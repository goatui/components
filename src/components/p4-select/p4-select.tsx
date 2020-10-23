import { Component, Element, Event, EventEmitter, h, Host, Method, Prop, State, Watch } from '@stencil/core';
import { debounceEvent } from '../../utils/utils';

@Component({
  tag: 'p4-select',
  styleUrl: 'p4-select.scss',
  shadow: true,
})
export class P4Select {

  private nativeInput?: HTMLInputElement;

  /**
   * The input field label.
   */
  @Prop() label: string;

  /**
   * The input field placeholder.
   */
  @Prop() placeholder: string;

  /**
   * The input field value.
   */
  @Prop() value: string;

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
   * If true, the form will be in inline format. Defaults to `false`.
   */
  @Prop() inline: boolean = false;

  /**
   * If true, the user cannot interact with the button. Defaults to `false`.
   */
  @Prop() disabled: boolean = false;

  @Prop() showLoader: boolean = false;

  @Prop() filterOptions: boolean = true;


  @Prop() config: any | string = { itemValue: 'value', itemLabel: 'label' };


  /**
   * If true, the user cannot interact with the button. Defaults to `false`.
   */
  @Prop() options: any[] | string = [];
  private _options: any[];

  /**
   * If `true`, a clear icon will appear in the input when there is a value. Clicking it clears the input.
   */
  @Prop() clearInput = false;

  /**
   * Set the amount of time, in milliseconds, to wait to trigger the `onChange` event after each keystroke.
   */
  @Prop() debounce = 0;


  @Watch('debounce')
  protected debounceChanged() {
    this.p4Change = debounceEvent(this.p4Change, this.debounce);
  }

  /**
   * Emitted when a keyboard input occurred.
   */
  @Event() p4Input: EventEmitter;

  /**
   * Emitted when the value has changed..
   */
  @Event() p4Change: EventEmitter;

  /**
   * Emitted when the input loses focus.
   */
  @Event() p4Blur: EventEmitter;

  /**
   * Emitted when the input has focus.
   */
  @Event() p4Focus: EventEmitter;


  @Event() search: EventEmitter;

  @Element() private element: HTMLElement;

  @State() mode: 'edit' | 'read' = 'read';

  @State() searchString: string;

  /**
   * Sets focus on the native `input` in `ion-input`. Use this method instead of the global
   * `input.focus()`.
   */
  @Method()
  async setFocus() {
    if (this.nativeInput) {
      this.nativeInput.focus();
    }
  }

  /**
   * Sets blur on the native `input` in `ion-input`. Use this method instead of the global
   * `input.blur()`.
   */
  @Method()
  async setBlur() {
    if (this.nativeInput) {
      this.nativeInput.blur();
    }
  }


  async componentWillLoad() {
    const specifiedElement = this.element;

    document.addEventListener('click', (event) => {
      // @ts-ignore
      const isClickInside = specifiedElement.shadowRoot.contains(event.path[0]);

      if (!isClickInside)
        this.mode = 'read';
    });

    this.optionsWatcher(this.options);
    this.configWatcher(this.config);
  }

  @Watch('options')
  optionsWatcher(newValue: any[] | string) {
    if (typeof newValue === 'string') {
      this._options = JSON.parse(newValue);
    } else {
      this._options = newValue;
    }
  }

  @Watch('config')
  configWatcher(newValue: any[] | string) {
    if (typeof newValue === 'string') {
      this.config = JSON.parse(newValue);
    }
  }


  private onChange = (item) => {
    if (!this.disabled) {
      this.value = this.getItemValue(item);
      this.p4Change.emit(item);
      setTimeout(() => this.mode = 'read');
    }
  };

  private onInput = (ev: Event) => {
    const input = ev.target as HTMLInputElement | null;
    if (input) {
      this.value = input.value || '';
    }
    this.p4Input.emit(ev as KeyboardEvent);
  };


  getOptionLabelByValue(value) {
    const that = this;
    const item = that._options.find((item) => {
      return this.getItemValue(item) === value;
    });
    if (item)
      return this.getItemLabel(item);
    else
      return this.placeholder;
  }

  private getOptions() {
    const that = this;
    let options = this._options;
    if (this.filterOptions)
      options = this._options.filter((item) => {
        return (!this.searchString || this.getItemLabel(item).toLocaleLowerCase().includes(that.searchString.toLocaleLowerCase()));
      });

    if (this.mode == 'edit')
      return <div class="select-result">
        <div class="select-items">
          {
            options.length ?
              options.map((item) => {
                return <div class="ant-select-option" data-value={this.getItemValue(item)} on-mouseover={(evt) => {
                  evt.target.classList.add('ant-select-option-active');
                }} on-mouseleave={(evt) => {
                  evt.target.classList.remove('ant-select-option-active');
                }} on-click={() => this.onChange(item)}>
                  {this.getItemLabel(item)}
                </div>;
              })
              : <div class="no-data">
                <svg class="bi bi-inbox-fill" width="5em" height="5em" viewBox="0 0 16 16"
                     fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                        d="M3.81 4.063A1.5 1.5 0 0 1 4.98 3.5h6.04a1.5 1.5 0 0 1 1.17.563l3.7 4.625a.5.5 0 0 1-.78.624l-3.7-4.624a.5.5 0 0 0-.39-.188H4.98a.5.5 0 0 0-.39.188L.89 9.312a.5.5 0 1 1-.78-.624l3.7-4.625z" />
                  <path fill-rule="evenodd"
                        d="M.125 8.67A.5.5 0 0 1 .5 8.5h5A.5.5 0 0 1 6 9c0 .828.625 2 2 2s2-1.172 2-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .496.562l-.39 3.124a1.5 1.5 0 0 1-1.489 1.314H1.883a1.5 1.5 0 0 1-1.489-1.314l-.39-3.124a.5.5 0 0 1 .121-.393z" />
                </svg>
                <div>No Data</div>
              </div>
          }
        </div>
      </div>;
  }

  private wrapperOnClick = () => {
    if (this.mode == 'read') {
      this.mode = 'edit';
      this.searchString = '';
      setTimeout(() => {
        this.setFocus();
      }, 100);
    }
  };

  private wrapperOnFocus = () => {
    if (this.mode == 'read') {
      this.mode = 'edit';
      this.searchString = '';
      setTimeout(() => {
        this.setFocus();
      }, 100);
    }
  };

  private getItemValue(item) {
    return item[this.config.itemValue];
  }

  private getItemLabel(item) {
    return item[this.config.itemLabel];
  }



  private getModeIcon() {
    if (this.showLoader)
      return <p4-spinner size="1em" class="icon" />;
    else if (this.mode === 'read')
      return <p4-icon type="chevron-down" size="1em" class="icon" />;
    else
      return <p4-icon type="search" size="1em" class="icon" />;
  }


  getComponentStyleClasses() {
    const cls = ['select-component'];
    cls.push('variant-' + this.variant);
    cls.push('size-' + this.size);
    cls.push('mode-' + this.mode);
    if (this.required)
      cls.push('required');
    if (this.inline)
      cls.push('inline');

    return cls.join(' ');
  }

  render() {
    return (
      <Host>
        <div class={this.getComponentStyleClasses()}>
          <label>{this.label}</label>
          <div class="input-wrapper" tabindex="1" onFocus={this.wrapperOnFocus}
               onClick={this.wrapperOnClick}>
            <div class="select-search">
              <input class="native-input"
                     ref={input => this.nativeInput = input}
                     type="text"
                     placeholder={this.getOptionLabelByValue(this.value)}
                     onInput={this.onInput}
              />
            </div>
            <div class="select-selection-item">
              {this.getOptionLabelByValue(this.value)}
            </div>
            <div class="select-icons">
              {this.getModeIcon()}
            </div>
            {this.getOptions()}
          </div>
        </div>
      </Host>
    );
  }

}

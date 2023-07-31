import { Component, ComponentInterface, Element, Event, EventEmitter, h, Host, Listen, Method, Prop, State, Watch } from '@stencil/core';
import { debounceEvent, getComponentIndex, DRAG_EVENT_TYPES, DRAG_STOP_EVENT_TYPES, throttle } from '../../../utils/utils';

/**
 * @name Slider
 * @description Allows the user to select one or more options using a dropdown.
 * @category Form Inputs
 * @tags input, form
 * @img /assets/img/slider.jpg
 */
@Component({
  tag: 'goat-slider',
  styleUrl: 'slider.scss',
  shadow: true,
})
export class Slider implements ComponentInterface, InputComponentInterface {
  gid: string = getComponentIndex();

  /**
   * The input field name.
   */
  @Prop() name: string = `goat-input-${this.gid}`;

  @Prop() min: number = 0;

  @Prop() max: number = 100;

  /**
   * The input field value.
   */
  @Prop({ mutable: true }) value?: number = 0;

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

  @Prop({ reflect: true, mutable: true }) configAria: any = {};

  /**
   * Set the amount of time, in milliseconds, to wait to trigger the `goatChange` event after each keystroke.
   */
  @Prop() debounce = 300;

  /**
   * Emitted when the value has changed.
   */
  @Event({ eventName: 'goat:change' }) goatChange: EventEmitter;
  @Event({ eventName: 'goat:input' }) goatInput: EventEmitter;

  /**
   * Sets focus on the native `input` in `ion-input`. Use this method instead of the global
   * `input.focus()`.
   */
  @Method()
  async setFocus(): Promise<void> {
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
    this.goatChange = debounceEvent(this.goatChange, this.debounce);
    this.goatInput = debounceEvent(this.goatInput, this.debounce);
  }

  @Listen('click', { target: 'window' })
  windowClick(evt) {
    const path = evt.path || evt.composedPath();
    for (const elm of path) {
      if (elm == this.elm) return;
    }
  }

  @Method()
  async getComponentId() {
    return this.gid;
  }

  @Element() elm!: HTMLElement;
  private nativeInput?: HTMLInputElement;
  @State() hasFocus = false;
  @State() percentageValue = 0;
  @State() needsOnRelease = false;
  private displayElement?: HTMLElement;

  private hasValue(): boolean {
    return (this.value || '').toString().length > 0;
  }

  computePercentageValue = () => {
    this.percentageValue = (this.value / (this.max - this.min)) * 100;
  };

  componentWillLoad() {
    this.elm.getAttributeNames().forEach((name: string) => {
      if (name.includes('aria-')) {
        this.configAria[name] = this.elm.getAttribute(name);
        this.elm.removeAttribute(name);
      }
    });
    this.computePercentageValue();
  }

  onDragStart = event => {
    // Do nothing if component is disabled
    if (this.disabled || this.readonly) {
      return;
    }

    // Register drag stop handlers
    DRAG_STOP_EVENT_TYPES.forEach(element => {
      this.elm?.ownerDocument.addEventListener(element, this.onDragStop);
    });

    // Register drag handlers
    DRAG_EVENT_TYPES.forEach(element => {
      this.elm?.ownerDocument.addEventListener(element, this.onDrag);
    });

    this.hasFocus = true;

    //@ts-ignore
    this.onDrag(event);
  };

  /**
   * Unregisters "drag" and "drag stop" event handlers and calls sets the flag
   * indicating that the `onRelease` callback should be called.
   */
  onDragStop = () => {
    // Do nothing if component is disabled
    if (this.disabled || this.readonly) {
      return;
    }

    // Remove drag stop handlers
    DRAG_STOP_EVENT_TYPES.forEach(element => {
      this.elm?.ownerDocument.removeEventListener(element, this.onDragStop);
    });

    // Remove drag handlers
    DRAG_EVENT_TYPES.forEach(element => {
      this.elm?.ownerDocument.removeEventListener(element, this.onDrag);
    });

    this.goatChange.emit({
      value: this.value,
    });
  };

  _onDrag = event => {
    // Do nothing if component is disabled
    if (this.disabled || this.readonly) {
      return;
    }

    this.updateValue(event.clientX);
  };

  updateValue = current => {
    const start = this.slideElement.getBoundingClientRect().left;
    const total = this.slideElement.getBoundingClientRect().width;
    this.value = parseInt(String(((current - start) / total) * 100));
    if (this.value > this.max) {
      this.value = this.max;
    } else if (this.value < this.min) {
      this.value = this.min;
    }

    this.computePercentageValue();

    this.goatInput.emit({
      value: this.value,
    });
  };

  onDrag = throttle(this._onDrag, 1, {
    leading: true,
    trailing: false,
  });

  connectedCallback() {
    this.debounceChanged();
  }

  private slideElement?: HTMLElement;

  private blurHandler = () => {
    this.hasFocus = false;
  };

  private focusHandler = () => {
    this.hasFocus = true;
  };

  render() {
    return (
      <Host has-value={this.hasValue()} has-focus={this.hasFocus}>
        <div class="slider-container">
          <div class="slider-range-label">
            <span>{this.min}</span>
          </div>
          <div class={{ 'slider': true, 'has-focus': this.hasFocus }} ref={elm => (this.slideElement = elm)} onMouseDown={this.onDragStart} onTouchStart={this.onDragStart}>
            <div class="slider__thumb" onBlur={this.blurHandler} onFocus={this.focusHandler} tabindex={0} style={{ left: `${this.percentageValue}%` }}></div>
            <div class="slider__track"></div>
            <div class="slider__track--filled" style={{ width: `${this.percentageValue}%` }}></div>
          </div>
          <div class="slider-range-label">
            <span>{this.max}</span>
          </div>
          <div class="slide-input">
            <goat-number
              value={this.value}
              size="sm"
              hide-actions={true}
              onGoat:change={e => {
                e.stopPropagation();
              }}
              onGoat:input={e => {
                e.stopPropagation();
              }}
            ></goat-number>
          </div>
        </div>
      </Host>
    );
  }
}

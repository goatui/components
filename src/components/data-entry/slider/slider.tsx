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
  Watch,
} from '@stencil/core';
import {
  debounceEvent,
  DRAG_EVENT_TYPES,
  DRAG_STOP_EVENT_TYPES,
  getComponentIndex,
  secondsToHHMMSS,
  throttle,
} from '../../../utils/utils';

/**
 * @name Slider
 * @description Sliders allow users to make selections from a range of values.
 * @category Form Inputs
 * @tags input, form
 * @img /assets/img/slider.webp
 * @imgDark /assets/img/slider-dark.webp
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

  @Prop() hideLabels: boolean = false;

  @Prop() hideInput: boolean = false;

  @Prop() format: 'number' | 'time' = 'number';

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
  @Event({ eventName: 'goat:tooltip' }) goatTooltipOpen: EventEmitter;

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
    if (this.nativeElement) {
      this.nativeElement.blur();
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
  private nativeElement?: HTMLInputElement;
  @State() hasFocus = false;
  @State() needsOnRelease = false;
  private displayElement?: HTMLElement;

  private hasValue(): boolean {
    return (this.value || '').toString().length > 0;
  }

  componentWillLoad() {
    this.elm.getAttributeNames().forEach((name: string) => {
      if (name.includes('aria-')) {
        this.configAria[name] = this.elm.getAttribute(name);
        this.elm.removeAttribute(name);
      }
    });
  }

  onWheel = event => {
    // Do nothing if component is disabled
    if (this.disabled || this.readonly) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();

    let delta = 0;
    if (event.wheelDelta) {
      delta = event.wheelDelta / 120;
    } else if (event.detail) {
      delta = -event.detail / 3;
    }

    this.value = parseInt(String(this.value)) + delta;

    this.updateValue();
  };

  onDragStart = event => {
    event.preventDefault();
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

    this.goatTooltipOpen.emit({
      target: this.thumbElement,
      open: true,
    });

    this.updateByPosition(event.clientX);
  };

  updateByPosition = current => {
    const start = this.slideElement.getBoundingClientRect().left;
    const total = this.slideElement.getBoundingClientRect().width;
    this.value = parseInt(String(((current - start) / total) * 100));

    this.updateValue();
  };

  updateValue = () => {
    if (this.value == null || this.value < this.min) {
      this.value = this.min;
    } else if (this.value > this.max) {
      this.value = this.max;
    }

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

  @State()
  slideElementWidth: number | null = null;

  private slideElement?: HTMLElement;
  private thumbElement?: HTMLElement;

  private blurHandler = () => {
    this.hasFocus = false;
    this.goatTooltipOpen.emit({
      target: this.thumbElement,
      open: false,
    });
  };

  private focusHandler = () => {
    this.hasFocus = true;
  };

  private getFormattedValue(value) {
    if (this.format === 'time') return secondsToHHMMSS(value);
    return value;
  }

  componentDidLoad() {
    setTimeout(() => this.computeSliderWidth(), 1);
  }

  private computeSliderWidth() {
    //monaco.languages.typescript.javascriptDefaults.addExtraLib(this.extraLibs);
    if (this.slideElementWidth == null && !this.isInViewport(this.elm)) {
      setTimeout(() => this.computeSliderWidth(), 80);
      return;
    }

    this.slideElementWidth = this.slideElement.getBoundingClientRect().width;
  }

  isInViewport(element: HTMLElement) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top !== 0 && rect.left !== 0 && rect.bottom !== 0 && rect.right !== 0
    );
  }

  render() {
    return (
      <Host has-value={this.hasValue()} has-focus={this.hasFocus}>
        <div class="slider-container">
          <div class="slider-wrapper">
            {!this.hideLabels && (
              <div class="slider-range-label">
                <span>{this.getFormattedValue(this.min)}</span>
              </div>
            )}
            <div
              class={{ 'slider': true, 'has-focus': this.hasFocus }}
              ref={elm => (this.slideElement = elm)}
              onMouseDown={this.onDragStart}
              onTouchStart={this.onDragStart}
              onWheel={this.onWheel}
            >
              <div
                class="slider__thumb"
                onBlur={this.blurHandler}
                onFocus={this.focusHandler}
                ref={elm => (this.thumbElement = elm)}
                onMouseOver={_e => {
                  this.goatTooltipOpen.emit({
                    target: this.thumbElement,
                    open: true,
                  });
                }}
                onMouseLeave={_e => {
                  if (!this.hasFocus)
                    this.goatTooltipOpen.emit({
                      target: this.thumbElement,
                      open: false,
                    });
                }}
                tooltip-target={`slider-tooltip-${this.gid}`}
                tabIndex={0}
                style={{
                  left: `${
                    (this.value * (this.slideElementWidth | 0)) /
                    (this.max - this.min)
                  }px`,
                }}
              ></div>
              <div class="slider__track"></div>
              <div
                class="slider__track--filled"
                style={{
                  width: `${
                    (this.value * (this.slideElementWidth | 0)) /
                    (this.max - this.min)
                  }px`,
                }}
              ></div>
            </div>
            {!this.hideLabels && (
              <div class="slider-range-label">
                <span>{this.getFormattedValue(this.max)}</span>
              </div>
            )}
          </div>
          {!this.hideInput ? (
            <div class="slide-input">
              <goat-number
                class="input"
                value={this.value}
                size="sm"
                hide-actions={true}
                onGoat:change={e => {
                  e.stopPropagation();
                  this.value = e.target.value;
                  this.updateValue();
                }}
                onGoat:input={e => {
                  e.stopPropagation();
                }}
              ></goat-number>
            </div>
          ) : null}
        </div>
        <goat-tooltip
          id={`slider-tooltip-${this.gid}`}
          placements="top,bottom"
          managed={true}
        >
          {this.getFormattedValue(this.value)}
        </goat-tooltip>
      </Host>
    );
  }
}

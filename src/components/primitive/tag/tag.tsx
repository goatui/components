import {
  Component,
  ComponentInterface,
  Element,
  Event,
  EventEmitter,
  h,
  Host,
  Prop,
} from '@stencil/core';
import { ElementSize } from '../../../utils/utils';

/**
 * @name Tag
 * @description Use tags to label, categorize, or organize items using keywords that describe them.
 * @category Data Display
 * @tag controls
 * @example <goat-tag class="color-red">Important</goat-tag>
 */
@Component({
  tag: 'goat-tag',
  styleUrl: 'tag.scss',
  shadow: true,
})
export class Tag implements ComponentInterface {
  /**
   * Text size.
   */
  @Prop({ reflect: true }) size: 'sm' | 'md' = 'md';

  /**
   * If true, the tag will have a close icon.
   */
  @Prop() dismissible: boolean = false;

  /**
   * Tag color.
   * Possible values are: 'gray', 'blue', 'green', 'red', 'yellow', 'primary', 'success', 'info', 'warning', 'error'.
   */
  @Prop({ reflect: true }) color:
    | 'gray'
    | 'blue'
    | 'green'
    | 'red'
    | 'yellow'
    | 'primary'
    | 'success'
    | 'info'
    | 'warning'
    | 'error' = 'gray';

  /**
   * Tag value.
   */
  @Prop({ reflect: true }) value: string = '';

  /**
   * If true, the tag will be selected.
   */
  @Prop({ reflect: true }) selected: boolean = false;

  /**
   * Image source.
   */
  @Prop() imageSrc?: string;

  /**
   * Emitted when the tag is clicked.
   */
  @Event({ eventName: 'goat-tag--click' }) goatClick: EventEmitter;

  /**
   * Emitted when the close icon is clicked.
   */
  @Event({ eventName: 'goat-tag--dismiss' }) goatTagDismissClick: EventEmitter;

  @Element() elm!: HTMLElement;

  private dismissClickHandler = () => {
    this.goatTagDismissClick.emit({
      value: this.value || this.elm.textContent,
    });
  };

  private getIconSize() {
    switch (this.size) {
      case ElementSize.SMALL:
        return '1rem';
      case ElementSize.MEDIUM:
        return '1.25rem';
      default:
        return '1rem';
    }
  }

  renderCloseButton() {
    if (this.dismissible)
      return (
        <button class="close-btn" onClick={() => this.dismissClickHandler()}>
          <goat-icon
            class="close-btn-icon inherit"
            name="close"
            size={this.getIconSize()}
          ></goat-icon>
        </button>
      );
  }

  renderImage() {
    if (this.imageSrc)
      return <img src={this.imageSrc} alt="Tag image" class="tag-image" />;
  }

  render() {
    return (
      <Host>
        <div
          class={{
            tag: true,
            selected: this.selected,
            [`size-${this.size}`]: true,
            dismissible: this.dismissible,
            [`color-${this.color}`]: true,
          }}
        >
          {this.renderImage()}
          <div class="tag-content">
            <slot />
          </div>
          {this.renderCloseButton()}
        </div>
      </Host>
    );
  }
}

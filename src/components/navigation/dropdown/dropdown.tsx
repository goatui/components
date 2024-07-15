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
} from '@stencil/core';
import { getComponentIndex } from '../../../utils/utils';

/**
 * @name Dropdown
 * @description Enables native inputs to be used within a Form field.
 * @category Navigation
 * @img /assets/img/dropdown.webp
 * @imgDark /assets/img/dropdown-dark.webp
 */
@Component({
  tag: 'goat-dropdown',
  styleUrl: 'dropdown.scss',
  shadow: true,
})
export class Dropdown implements ComponentInterface {
  @Element() host!: HTMLElement;

  gid: string = getComponentIndex();

  menuRef: HTMLGoatMenuElement;
  popoverElm: any;
  triggerSlotRef: HTMLSlotElement;
  triggerRef: HTMLElement | HTMLGoatButtonElement;

  /**
   * The button size.
   * Possible values are: `"sm"`, `"md"`, `"lg"`. Defaults to `"md"`.
   */
  @Prop() size: 'sm' | 'md' | 'lg' = 'md';

  @Prop({ mutable: true, reflect: true }) open: boolean = false;

  @Prop({ reflect: true }) managed: boolean = false;

  /**
   * If true, the user cannot interact with the button. Defaults to `false`.
   */
  @Prop() disabled: boolean = false;

  @Prop({ reflect: true }) placements: string =
    'bottom-start,top-start,bottom-end,top-end';

  @Prop({ reflect: true }) trigger: 'click' | 'hover' | 'manual' = 'click';

  @Event({ eventName: 'goat-dropdown--item-click' })
  goatDropdownItemClick: EventEmitter;

  @Method()
  async setFocus() {
    this.setFocusOnTrigger();
  }

  setFocusOnTrigger() {
    (this.triggerRef as HTMLGoatButtonElement).setFocus
      ? (this.triggerRef as HTMLGoatButtonElement).setFocus()
      : this.triggerRef.focus();
  }

  private closeList = () => {
    this.popoverElm.hide();
  };

  @Listen('goat-popover--open')
  openHandler() {
    this.menuRef.setFocus();
  }

  componentDidLoad() {
    this.triggerRef = this.triggerSlotRef.assignedElements()[0] as HTMLElement;
    if (this.triggerRef.nodeName === 'SLOT') {
      const assignedElements = (
        this.triggerRef as HTMLSlotElement
      ).assignedElements();
      if (assignedElements.length) {
        this.triggerRef = assignedElements[0] as HTMLSlotElement;
      }
    }

    this.host.addEventListener('goat-menu-item--click', (evt: CustomEvent) => {
      this.goatDropdownItemClick.emit(evt.detail);
      this.setFocusOnTrigger();
      this.closeList();
    });

    this.host.addEventListener('keydown', evt => {
      if (evt.key === 'Escape') {
        evt.preventDefault();
        this.closeList();
      }
    });
  }

  render() {
    return (
      <Host>
        <goat-popover
          trigger={this.trigger}
          tip={'tab'}
          placements={this.placements}
          offset={0}
          class={{
            dropdown: true,
          }}
          ref={elm => (this.popoverElm = elm)}
        >
          <slot ref={el => (this.triggerSlotRef = el as HTMLSlotElement)} />

          <goat-popover-content class="dropdown-content">
            <goat-menu ref={elm => (this.menuRef = elm)} size={this.size}>
              <slot name="dropdown-menu" />
            </goat-menu>
          </goat-popover-content>
        </goat-popover>
      </Host>
    );
  }
}

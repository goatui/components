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
import {
  getComponentIndex,
  isEventTriggerByElement,
  throttle,
} from '../../../utils/utils';
import { computePosition, flip, offset, size } from '@floating-ui/dom';

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
  gid: string = getComponentIndex();
  /**
   * The button size.
   * Possible values are: `"sm"`, `"md"`, `"lg"`. Defaults to `"md"`.
   */
  @Prop() size: 'sm' | 'md' | 'lg' = 'md';

  @Prop({ mutable: true, reflect: true }) open: boolean = false;

  /**
   * If true, the user cannot interact with the button. Defaults to `false`.
   */
  @Prop() disabled: boolean = false;

  @Prop({ reflect: true }) placements: string =
    'bottom-start,top-start,bottom-end,top-end';

  @Element() elm!: HTMLElement;

  referenceElm: HTMLElement;
  dropdownButtonElm: HTMLElement;

  @Event({ eventName: 'goat:dropdown-item-click' })
  goatMenuItemClick: EventEmitter;

  @Listen('click', { target: 'window' })
  windowClick(evt) {
    const path = evt.path || evt.composedPath();
    for (const elm of path) {
      if (elm == this.elm) return;
    }
    let target: HTMLElement;
    for (const elm of path) {
      if (elm.hasAttribute && elm.hasAttribute('dropdown-target')) target = elm;
    }
    if (
      target &&
      target.getAttribute('dropdown-target') === this.elm.getAttribute('id')
    ) {
      this.referenceElm = target;
      this.toggleList();
    } else {
      this.open = false;
    }
  }

  @Method()
  async setFocus() {
    const firstChild = this.elm.children[0];

    // @ts-ignore
    if (firstChild && firstChild.setFocus)
      // @ts-ignore
      firstChild.setFocus();
  }

  @Listen('goat:menu-item-click', { target: 'window' })
  listenMenuItemClick(evt) {
    if (isEventTriggerByElement(evt, this.elm)) {
      this.closeList();
    }
    this.open = false;
  }

  @Listen('keydown', { target: 'window' })
  listenKeyDown(evt: KeyboardEvent) {
    if (isEventTriggerByElement(evt, this.elm)) {
      if (evt.key === 'Escape') {
        this.closeList();
      }
    }
  }

  private closeList = () => {
    if (!this.disabled && this.open) {
      this.open = false;
      setTimeout(() => {
        if (this.referenceElm && this.open) {
          // @ts-ignore
          if (this.referenceElm.setFocus) this.referenceElm.setFocus();
          else this.referenceElm.focus();
        }
      }, 80);
    }
  };

  private openList = () => {
    if (!this.disabled && !this.open) {
      this.open = true;
      setTimeout(() => {
        this.getMenuElement()?.setFocus();
      }, 300);
    }
  };

  componentDidUpdate() {
    if (this.open)
      // @ts-ignore
      this._fixPosition();
  }

  _fixPosition = throttle(
    callBack => {
      const positions = this.placements.split(',');
      const placement: any = positions[0];
      const fallbackPlacements: any = positions.splice(1);
      const dropdownContent: any =
        this.elm.shadowRoot.querySelector('.dropdown-content');
      const menuElm: any = this.getMenuElement();

      computePosition(this.referenceElm, dropdownContent, {
        placement: placement,
        // Try removing the middleware. The dropdown will
        // overflow the boundary's edge and get clipped!
        middleware: [
          offset(10),
          size({
            apply({ availableHeight }) {
              if (availableHeight < 10 * 16) return;
              menuElm.style.setProperty(
                '--list-max-height',
                `${availableHeight}px`,
              );
            },
            padding: 5,
          }),
          flip({
            fallbackPlacements: fallbackPlacements,
          }),
        ],
      }).then(({ x, y }) => {
        Object.assign(dropdownContent.style, {
          top: `${y}px`,
          left: `${x}px`,
        });
        if (callBack) callBack();
      });
    },
    80,
    {
      leading: true,
      trailing: false,
    },
  );

  @Listen('scroll', { target: 'window' })
  fixPosition() {
    if (this.open) {
      this._fixPosition();
    }
  }

  @Listen('resize', { target: 'window' })
  resizeHandler() {
    this.fixPosition();
  }

  componentWillLoad() {
    if (!this.elm.getAttribute('id')) {
      this.elm.setAttribute('id', `dropdown-${this.gid}`);
    }
  }

  private toggleList() {
    if (this.open) this.closeList();
    else this.openList();
  }

  private keyDownHandler = evt => {
    const $menuElm = this.getMenuElement();
    if (evt.key === 'Enter') {
      evt.preventDefault();
      this.toggleList();
    } else if (evt.key === 'ArrowDown') {
      if (this.open) {
        evt.preventDefault();
        $menuElm?.setFocus();
      }
    } else if (evt.key === 'ArrowUp') {
      if (this.open) {
        evt.preventDefault();
        $menuElm?.setFocus(); // focus on previous item
      }
    } else if (evt.key === 'Escape') {
      if (this.open) {
        evt.preventDefault();
        this.closeList();
      }
    }
  };

  private getMenuElement() {
    return this.elm.querySelector('goat-menu');
  }

  render() {
    return (
      <Host>
        <div
          class={{
            dropdown: true,
            open: this.open,
          }}
        >
          <button
            class="dropdown-button"
            onKeyDown={this.keyDownHandler}
            tabindex="-1"
            dropdown-target={`dropdown-${this.gid}`}
            ref={el => (this.dropdownButtonElm = el)}
            disabled={this.disabled}
            onClick={_evt => {
              this.referenceElm = this.dropdownButtonElm;
              this.toggleList();
            }}
          >
            <div class="slot-container">
              <slot />
            </div>
          </button>
          <div class="dropdown-content">
            <slot name="dropdown-content" />
          </div>
        </div>
      </Host>
    );
  }
}

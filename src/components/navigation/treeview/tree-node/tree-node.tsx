import { Component, Element, Event, EventEmitter, h, Host, Listen, Method, Prop, State } from '@stencil/core';
import { getComponentIndex } from '../../../../utils/utils';

@Component({
  tag: 'goat-tree-node',
  styleUrl: 'tree-node.scss',
  shadow: true,
})
export class GoatTreeNode {
  gid: string = getComponentIndex();

  private nativeInput?: HTMLElement;

  private tabindex?: string | number = 1;

  /**
   * The menu item value.
   */
  @Prop({ mutable: true }) value?: string | number | null;

  @Prop({ mutable: true }) label: string = '';

  /**
   * If true, the user cannot interact with the button. Defaults to `false`.
   */
  @Prop({ reflect: true }) disabled: boolean = false;

  /**
   * Menu item selection state.
   */
  @Prop({ reflect: true }) selected: boolean = false;

  @Prop({ reflect: true }) expand: boolean = true;

  @Prop({ reflect: true }) level: number = 0;

  /**
   * Emitted when the menu item is clicked.
   */
  @Event({ eventName: 'goat:tree-node-click' }) goatTreeNodeClick: EventEmitter;

  @State() hasChildNodes = false;

  /**
   * Sets focus on the native `input` in `goat-input`. Use this method instead of the global
   * `input.focus()`.
   */
  @Method()
  async setFocus() {
    if (this.nativeInput) {
      this.nativeInput.focus();
    }
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

  @Listen('mouseup', { target: 'window' })
  windowMouseUp() {
    if (this.isActive) this.isActive = false;
  }

  @Listen('keyup', { target: 'window' })
  windowKeyUp(evt) {
    if (this.isActive && evt.key == ' ') this.isActive = false;
  }

  @State() hasFocus = false;
  @State() isActive = false;
  @Element() elm!: HTMLElement;

  private clickHandler = event => {
    if (!this.disabled) {
      this.expand = !this.expand;
      this.goatTreeNodeClick.emit({
        value: this.value || this.label,
        expand: this.expand,
      });
      this.selected = true
    } else {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
  };

  private blurHandler = () => {
    this.hasFocus = false;
  };

  private focusHandler = () => {
    this.hasFocus = true;
  };

  private mouseDownHandler = () => {
    this.isActive = true;
  };

  private keyDownHandler = evt => {
    if (evt.key == ' ' || evt.key == 'Enter') {
      evt.preventDefault();
      this.isActive = true;
      this.selected = true;
      this.clickHandler(evt);
    } else if (evt.key === 'ArrowLeft') {
      evt.preventDefault();
      this.expand = false;
    } else if (evt.key === 'ArrowRight') {
      evt.preventDefault();
      if (this.expand && this.hasChildNodes) {
        const childNodes = this.elm.querySelectorAll('goat-tree-node');
        if (childNodes.length) {
          const firstChild = childNodes[0] as any;
          firstChild.setFocus();
        }
      } else {
        this.expand = true;
      }
    }
  };

  componentWillLoad() {
    // If the ion-input has a tabindex attribute we get the value
    // and pass it down to the native input, then remove it from the
    // goat-input to avoid causing tabbing twice on the same element
    if (this.elm.hasAttribute('tabindex')) {
      const tabindex = this.elm.getAttribute('tabindex');
      this.tabindex = tabindex !== null ? tabindex : undefined;
      this.elm.removeAttribute('tabindex');
    }
    const childNodes = this.elm.querySelectorAll('goat-tree-node');
    this.hasChildNodes = !!childNodes.length;
    childNodes.forEach((node: any) => {
      node.level = this.level + 1;
    });
    debugger;
  }

  render = () => {
    return (
      <Host active={this.isActive} has-focus={this.hasFocus}>
        <div class="tree-node">
          <div
            class={{
              'tree-node-content': true,
              'selected': this.selected,
              'active': this.isActive,
              'disabled': this.disabled,
              'has-focus': this.hasFocus,
            }}
            style={{ paddingLeft: `${(this.level + 1) * 2}rem` }}
            onClick={this.clickHandler}
            onMouseDown={this.mouseDownHandler}
            onKeyDown={this.keyDownHandler}
            aria-disabled={this.disabled}
            onBlur={this.blurHandler}
            onFocus={this.focusHandler}
            tabindex={this.tabindex}
            ref={el => (this.nativeInput = el as HTMLElement)}
          >
            {this.hasChildNodes && <goat-icon name={this.expand ? 'caret-down-fill' : 'caret-right-fill'} size="1rem" />}
            <span class="tree-node-label">{this.label}</span>
          </div>

          <div
            class={{
              'node-slot': true,
              'expanded': this.expand,
            }}
          >
            <slot></slot>
          </div>
        </div>
      </Host>
    );
  };
}

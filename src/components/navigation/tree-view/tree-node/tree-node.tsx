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
   * Hyperlink to navigate to on click.
   */
  @Prop() href: string;

  /**
   * If true, the user cannot interact with the button. Defaults to `false`.
   */
  @Prop({ reflect: true }) disabled: boolean = false;

  /**
   * Menu item selection state.
   */
  @Prop({ reflect: true }) selectedNode: string;

  @Prop({ reflect: true }) expanded: boolean = true;

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
      this.expanded = !this.expanded;
      this.goatTreeNodeClick.emit({
        value: this.value || this.label,
        expand: this.expanded,
        id: this.gid
      });
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

  isSelected() {
    if (this.value === undefined && this.label === undefined) return false;
    else if (this.value === undefined) return this.selectedNode === this.label;
    else return this.selectedNode === this.value;
  }

  private keyDownHandler = evt => {
    if (evt.key == ' ' || evt.key == 'Enter') {
      evt.preventDefault();
      this.isActive = true;
      this.clickHandler(evt);
    } else if (evt.key === 'ArrowLeft') {
      evt.preventDefault();
      this.expanded = false;
    } else if (evt.key === 'ArrowRight') {
      evt.preventDefault();
      if (this.expanded && this.hasChildNodes) {
        const childNodes = this.elm.querySelectorAll('goat-tree-node');
        if (childNodes.length) {
          const firstChild = childNodes[0] as any;
          firstChild.setFocus();
        }
      } else {
        this.expanded = true;
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

    const treeView = this.elm.closest('goat-tree-view');

    // @ts-ignore
    treeView.getSelectedNode().then((selectedNode: string) => {
      this.selectedNode = selectedNode;
    });

    // @ts-ignore
    treeView.subscribeToSelect((selectedNode: string) => {
      this.selectedNode = selectedNode;
    });

    const childNodes = this.elm.querySelectorAll('goat-tree-node');
    this.hasChildNodes = !!childNodes.length;
    childNodes.forEach((node: any) => {
      node.level = this.level + 1;
    });
  }

  render = () => {

    return (
      <Host active={this.isActive} has-focus={this.hasFocus}>


        <div class="tree-node">

          <a class="link" href={this.href}>
          <div
            class={{
              'tree-node-content': true,
              'selected': this.isSelected(),
              'active': this.isActive,
              'disabled': this.disabled,
              'has-focus': this.hasFocus,
            }}
            style={{ paddingLeft: `${this.level + 1}rem` }}
            onClick={this.clickHandler}
            onMouseDown={this.mouseDownHandler}
            onKeyDown={this.keyDownHandler}
            aria-disabled={this.disabled}
            onBlur={this.blurHandler}
            onFocus={this.focusHandler}
            tabindex={this.tabindex}
            ref={el => (this.nativeInput = el as HTMLElement)}
          >
            {this.hasChildNodes && <goat-icon name='chevron--right' class={{"expand-icon":true, "expanded": this.expanded}} size="1rem" />}

            {!this.hasChildNodes && <div class="icon-space" />}

            <span class="tree-node-label">{this.label}</span>
          </div>
          </a>

          <div
            class={{
              'node-slot': true,
              'expanded': this.expanded,
            }}
          >
            <slot></slot>
          </div>
        </div>
      </Host>
    );
  };
}

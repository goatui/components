import { Component, ComponentInterface, Element, h, Listen, Method, Prop, State, Watch } from '@stencil/core';

/**
 * @name Menu
 * @description Menus display a list of choices on temporary surfaces.
 * @category Navigation
 * @img /assets/img/menu.png
 * @imgDark /assets/img/menu-dark.png
 */
@Component({
  tag: 'goat-menu',
  styleUrl: 'menu.scss',
  shadow: true,
})
export class Menu implements ComponentInterface {
  @Element() elm!: HTMLElement;

  @Prop() showLoader: boolean = false;

  @Prop({ mutable: true }) value?: string | number;

  /**
   * The menu item size.
   * Possible values are: `"sm"`, `"md"`, `"lg"`. Defaults to `"md"`.
   */
  @Prop({ reflect: true }) size: 'sm' | 'md' | 'lg' = 'md';

  @Prop({ mutable: true }) empty: boolean = false;

  @Prop({ mutable: true }) emptyState: any = `{
    "headline": "No items",
    "description": "There are no items to display"
  }`;

  @State()
  internalEmptyState: any;

  @Watch('emptyState')
  parseEmptyState() {
    if (typeof this.emptyState === 'string') {
      this.internalEmptyState = JSON.parse(this.emptyState);
    } else {
      this.internalEmptyState = this.emptyState;
    }
  }

  @Listen('keydown', { target: 'window' })
  handleKeyDown(evt: KeyboardEvent) {
    const path = evt.composedPath();
    let menuItem = null;
    for (const elm of path) {
      // @ts-ignore
      if (elm.tagName === 'GOAT-MENU-ITEM') {
        menuItem = elm;
      }
      if (elm !== this.elm) continue;
      if (evt.key === 'ArrowDown') {
        evt.preventDefault();
        this.focusNextItem(menuItem);
      } else if (evt.key === 'ArrowUp') {
        evt.preventDefault();
        this.focusPreviousItem(menuItem);
      }
    }
  }

  /**
   * Sets focus on first menu item. Use this method instead of the global
   * `element.focus()`.
   */
  @Method()
  async setFocus() {
    const firstMenuItem = this.getFirstItem();
    firstMenuItem?.setFocus();
  }

  private getFirstItem() {
    return this.elm.querySelector('goat-menu-item');
  }

  private focusNextItem(currentItem) {
    let nextItem: any = currentItem.nextElementSibling;
    do {
      if (nextItem && nextItem.tagName === 'GOAT-MENU-ITEM' && !nextItem.disabled) {
        nextItem.setFocus();
        return;
      }
      if (!nextItem) {
        nextItem = this.elm.querySelector('goat-menu-item');
      } else {
        nextItem = nextItem.nextElementSibling;
      }
    } while (nextItem !== currentItem);
  }

  private focusPreviousItem(currentItem) {
    let previousItem: any = currentItem.previousElementSibling;
    do {
      if (previousItem && previousItem.tagName === 'GOAT-MENU-ITEM' && !previousItem.disabled) {
        previousItem.setFocus();
        return;
      }
      if (!previousItem) {
        previousItem = this.elm.querySelector('goat-menu-item:last-child');
      } else {
        previousItem = previousItem.previousElementSibling;
      }
    } while (previousItem !== currentItem);
  }

  componentDidLoad() {
    this.parseEmptyState();
  }

  render() {
    return (
      <div class="menu">
        <slot />
        {this.renderEmptyState()}
      </div>
    );
  }

  private renderEmptyState() {
    if (this.empty) return <goat-empty-state class="empty-menu" {...this.internalEmptyState} />;
  }
}

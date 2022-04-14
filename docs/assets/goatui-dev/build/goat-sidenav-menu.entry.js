import { r as registerInstance, h, g as getElement } from './index-433d423f.js';

const sidenavMenuCss = "*{box-sizing:border-box}:host{font-family:var(--font-family-base)}::selection{color:var(--color-white, #ffffff);background:var(--color-primary, var(--color-blue-60, #0f62fe))}::-webkit-scrollbar{width:1rem;height:1rem}::-webkit-scrollbar-track{background:#f1f1f1}::-webkit-scrollbar-thumb{background:#888}::-webkit-scrollbar-thumb :hover{background:#555}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.center-content{display:flex;align-items:center;justify-content:center}:host([hidden]){display:none}@keyframes reveal{0%{opacity:0;transform:translateY(8px)}}:host{display:inline-block;--list-border-radius:var(--border-radius, 3px);--list-max-height:inherit}.menu{background-color:var(--field-02, #ffffff);padding:var(--spacing-2, 0.5rem) 0;border:1px solid var(--color-neutral-200, );box-sizing:border-box;border-radius:var(--list-border-radius);box-shadow:var(--shadow-sm, 0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06))}";

let SidenavMenu = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.showLoader = false;
    this.empty = false;
    this.emptyState = `{
    "title": "No items",
    "description": "There are no items to display"
  }`;
  }
  parseEmptyState() {
    if (this.emptyState) {
      this.internalEmptyState = JSON.parse(this.emptyState);
    }
  }
  handleKeyDown(evt) {
    const path = evt.composedPath();
    let menuItem = null;
    for (const elm of path) {
      // @ts-ignore
      if (elm.tagName === 'GOAT-MENU-ITEM') {
        menuItem = elm;
      }
      if (elm !== this.elm)
        continue;
      if (evt.key === 'ArrowDown') {
        evt.preventDefault();
        this.focusNextItem(menuItem);
      }
      else if (evt.key === 'ArrowUp') {
        evt.preventDefault();
        this.focusPreviousItem(menuItem);
      }
    }
  }
  /**
   * Sets focus on first menu item. Use this method instead of the global
   * `element.focus()`.
   */
  async setFocus() {
    const firstMenuItem = this.getFirstItem();
    firstMenuItem === null || firstMenuItem === void 0 ? void 0 : firstMenuItem.setFocus();
  }
  getFirstItem() {
    return this.elm.querySelector('goat-menu-item');
  }
  focusNextItem(currentItem) {
    let nextItem = currentItem.nextElementSibling;
    do {
      if (nextItem && nextItem.tagName === 'GOAT-MENU-ITEM' && !nextItem.disabled) {
        nextItem.setFocus();
        return;
      }
      if (!nextItem) {
        nextItem = this.elm.querySelector('goat-menu-item');
      }
      else {
        nextItem = nextItem.nextElementSibling;
      }
    } while (nextItem !== currentItem);
  }
  focusPreviousItem(currentItem) {
    let previousItem = currentItem.previousElementSibling;
    do {
      if (previousItem && previousItem.tagName === 'GOAT-MENU-ITEM' && !previousItem.disabled) {
        previousItem.setFocus();
        return;
      }
      if (!previousItem) {
        previousItem = this.elm.querySelector('goat-menu-item:last-child');
      }
      else {
        previousItem = previousItem.previousElementSibling;
      }
    } while (previousItem !== currentItem);
  }
  componentWillLoad() {
    this.parseEmptyState();
  }
  render() {
    return h("div", { class: 'menu' }, h("slot", null), this.renderEmptyState());
  }
  renderEmptyState() {
    if (this.empty)
      return h("goat-empty-state", { class: "empty-menu" }, h("div", { slot: 'title' }, this.internalEmptyState.title), h("div", { slot: 'description' }, this.internalEmptyState.description));
  }
  get elm() { return getElement(this); }
  static get watchers() { return {
    "emptyState": ["parseEmptyState"]
  }; }
};
SidenavMenu.style = sidenavMenuCss;

export { SidenavMenu as goat_sidenav_menu };

//# sourceMappingURL=goat-sidenav-menu.entry.js.map
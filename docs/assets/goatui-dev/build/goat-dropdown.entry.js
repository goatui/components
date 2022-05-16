import { r as registerInstance, h, e as Host, g as getElement } from './index-a0beba19.js';
import { i as isEventTriggerByElement, a as isMobile, b as isOutOfViewport } from './utils-5b2b26db.js';

const dropdownCss = "*{box-sizing:border-box}:host{font-family:var(--font-family-base)}::selection{color:var(--color-white, #ffffff);background:var(--color-primary, var(--color-blue-60, #0f62fe))}::-webkit-scrollbar{width:1rem;height:1rem}::-webkit-scrollbar-track{background:#f1f1f1}::-webkit-scrollbar-thumb{background:#888}::-webkit-scrollbar-thumb :hover{background:#555}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.center-content{display:flex;align-items:center;justify-content:center}:host([hidden]){display:none}@keyframes reveal{0%{opacity:0;transform:translateY(8px)}}:host{display:inline-block;height:var(--dropdown-height, auto)}.dropdown{position:relative;height:var(--dropdown-height, auto)}.dropdown .dropdown-button{border:none;background:none;padding:0;margin:0;height:100%;width:100%}.dropdown .dropdown-button .slot-container{height:100%}.dropdown .dropdown-content{z-index:var(--z-index-dropdown-content, 40);position:absolute;width:max-content;line-height:0;transform:scale(0);transition:transform 0.1s ease-out 0s}.dropdown.is-open .dropdown-content{transform:scale(1)}.dropdown.bottom-right .dropdown-content{top:calc(100% + var(--spacing-2, 0.5rem));left:0;transform-origin:top}.dropdown.bottom-left .dropdown-content{top:calc(100% + var(--spacing-2, 0.5rem));right:0;transform-origin:top}.dropdown.top-right .dropdown-content{bottom:calc(100% + var(--spacing-2, 0.5rem));left:0;transform-origin:bottom}.dropdown.top-left .dropdown-content{bottom:calc(100% + var(--spacing-2, 0.5rem));right:0;transform-origin:bottom}.dropdown.center .dropdown-content{top:0;left:0;position:fixed;transform-origin:center;display:flex;align-items:center;width:100vw;height:100vh;justify-content:center;background:rgba(0, 0, 0, 0.5);pointer-events:none}.dropdown .items{min-width:12rem}:host([has-focus]) .dropdown{outline:none}";

const Dropdown = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * The button size.
     * Possible values are: `"sm"`, `"md"`, `"lg"`. Defaults to `"md"`.
     */
    this.size = 'md';
    this.isOpen = false;
    /**
     * If true, the user cannot interact with the button. Defaults to `false`.
     */
    this.disabled = false;
    this.positions = 'bottom-right,top-right,bottom-left,top-left';
    this.items = null;
    this.hasFocus = false;
    this.openList = () => {
      if (!this.disabled && !this.isOpen) {
        this.isOpen = true;
        setTimeout(() => {
          const dropdownContent = this.elm.querySelector('[slot="dropdown-content"]');
          this.dropdownContentHeight = dropdownContent.getBoundingClientRect().height;
          this.dropdownContentWidth = dropdownContent.getBoundingClientRect().width;
          this.fixPosition();
        }, 100);
      }
    };
    this.toggleList = () => {
      if (this.isOpen)
        this.closeList();
      else
        this.openList();
    };
    this.blurHandler = () => {
      this.hasFocus = false;
    };
    this.focusHandler = () => {
      this.hasFocus = true;
    };
    this.keyDownHandler = (evt) => {
      const $menuElm = this.getMenuElement();
      if (evt.key === 'Enter') {
        evt.preventDefault();
        this.toggleList();
      }
      else if (evt.key === 'ArrowDown') {
        if (this.isOpen) {
          evt.preventDefault();
          $menuElm === null || $menuElm === void 0 ? void 0 : $menuElm.setFocus();
        }
      }
      else if (evt.key === 'ArrowUp') {
        if (this.isOpen) {
          evt.preventDefault();
          $menuElm === null || $menuElm === void 0 ? void 0 : $menuElm.setFocus(); // focus on previous item
        }
      }
    };
  }
  windowClick(evt) {
    const path = (evt.path || evt.composedPath());
    for (const elm of path) {
      if (elm == this.elm)
        return;
    }
    this.isOpen = false;
  }
  async setFocus(elm) {
    const firstChild = elm.children[0] || this.elm.children[0];
    // @ts-ignore
    if (firstChild.setFocus)
      // @ts-ignore
      firstChild.setFocus();
  }
  listenMenuItemClick(evt) {
    if (isEventTriggerByElement(evt, this.elm)) {
      this.closeList();
    }
    this.isOpen = false;
  }
  listenClick(evt) {
    if (isEventTriggerByElement(evt, this.elm)) {
      this.closeList();
    }
    this.isOpen = false;
  }
  listenKeyDown(evt) {
    if (isEventTriggerByElement(evt, this.elm)) {
      if (evt.key === 'Escape') {
        this.closeList();
      }
    }
  }
  closeList() {
    if (!this.disabled && this.isOpen) {
      this.isOpen = false;
      setTimeout(() => {
        this.setFocus(this.elm);
      }, 100);
    }
  }
  ;
  componentWillLoad() {
    if (this.positions)
      this.position = this.positions.split(',')[0];
  }
  fixPosition() {
    if (this.isOpen && this.dropdownContentHeight && this.dropdownContentWidth) {
      if (isMobile()) {
        this.position = 'center';
        return;
      }
      const positions = this.positions.split(',');
      for (let i = 0; i < positions.length; i++) {
        const dropdownButtonRect = this.elm.getBoundingClientRect();
        const dropdownContentRect = {};
        if (positions[i] === 'bottom-right') {
          dropdownContentRect.top = dropdownButtonRect.top + dropdownButtonRect.height;
          dropdownContentRect.bottom = dropdownContentRect.top + this.dropdownContentHeight;
          dropdownContentRect.left = dropdownButtonRect.left;
          dropdownContentRect.right = dropdownButtonRect.left + this.dropdownContentWidth;
        }
        else if (positions[i] === 'top-right') {
          dropdownContentRect.top = dropdownButtonRect.top - this.dropdownContentHeight;
          dropdownContentRect.bottom = dropdownButtonRect.top;
          dropdownContentRect.left = dropdownButtonRect.left;
          dropdownContentRect.right = dropdownButtonRect.left + this.dropdownContentWidth;
        }
        else if (positions[i] === 'bottom-left') {
          dropdownContentRect.top = dropdownButtonRect.top + dropdownButtonRect.height;
          dropdownContentRect.bottom = dropdownContentRect.top + this.dropdownContentHeight;
          dropdownContentRect.left = dropdownButtonRect.left - this.dropdownContentWidth;
          dropdownContentRect.right = dropdownButtonRect.left;
        }
        else if (positions[i] === 'top-left') {
          dropdownContentRect.top = dropdownButtonRect.top - this.dropdownContentHeight;
          dropdownContentRect.bottom = dropdownButtonRect.top;
          dropdownContentRect.left = dropdownButtonRect.left - this.dropdownContentWidth;
          dropdownContentRect.right = dropdownButtonRect.left;
        }
        const isOut = isOutOfViewport(dropdownContentRect);
        if (!isOut.any) {
          this.position = positions[i];
          break;
        }
      }
    }
  }
  ;
  getMenuElement() {
    return this.elm.querySelector('goat-menu');
  }
  renderItems() {
    if (this.items)
      return h("goat-menu", { class: 'items' }, this.items.map((item) => {
        return h("goat-menu-item", { value: item.value, tabindex: this.isOpen ? '0' : '-1' }, item.icon && h("goat-icon", { name: item.icon, slot: 'start', size: 'sm' }), item.label, item.hint && h("span", { slot: 'end' }, item.hint));
      }));
  }
  render() {
    return (h(Host, { "has-focus": this.hasFocus, "is-open": this.isOpen }, h("div", { class: {
        'dropdown': true,
        [this.position]: true,
        'is-open': this.isOpen,
      } }, h("button", { class: 'dropdown-button', onKeyDown: this.keyDownHandler, tabindex: '-1', onBlur: this.blurHandler, onFocus: this.focusHandler, disabled: this.disabled, onClick: () => {
        this.toggleList();
      } }, h("div", { class: 'slot-container' }, h("slot", null))), h("div", { class: 'dropdown-content' }, this.renderItems(), h("slot", { name: 'dropdown-content' })))));
  }
  get elm() { return getElement(this); }
};
Dropdown.style = dropdownCss;

export { Dropdown as goat_dropdown };

//# sourceMappingURL=goat-dropdown.entry.js.map
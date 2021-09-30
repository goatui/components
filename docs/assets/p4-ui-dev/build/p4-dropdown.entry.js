import { r as registerInstance, e as createEvent, h, f as Host, g as getElement } from './index-8956d8c0.js';

const p4DropdownCss = "*{box-sizing:border-box}::selection{color:var(--color-shades-white);background:var(--color-primary-500)}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.center-content{display:flex;align-items:center;justify-content:center}:host{display:inline-block}.dropdown{position:relative;z-index:var(--z-index-dropdown-content, 200);height:100%;width:100%;border-radius:var(--border-radius, 5px)}.dropdown .dropdown-button{border:none;background:none;height:100%;width:100%}.dropdown .dropdown-result{position:absolute;width:max-content;line-height:0;transform:scale(0);transition:transform 0.1s ease-out 0s}.dropdown.is-open .dropdown-result{transform:scale(1)}.dropdown slot::slotted(*){font-family:var(--font-family-paragraph, \"Roboto\", sans-serif);font-style:normal;font-weight:normal;font-size:var(--font-size-p1, 0.875rem);line-height:var(--line-height-p1, 1.0625rem);letter-spacing:-0.04em;padding-bottom:0 !important;margin-bottom:0 !important;color:var(--color-neutral-400, #94a3b8)}.dropdown slot::slotted(*) p4-icon{--color:var(--color-neutral-400, #94a3b8)}.dropdown.bottom-left .dropdown-result{top:calc(100% + var(--space-1, 0.25rem));left:0;transform-origin:left top}.dropdown.bottom-right .dropdown-result{top:calc(100% + var(--space-1, 0.25rem));right:0;transform-origin:right top}.dropdown.top-left .dropdown-result{bottom:calc(100% + var(--space-1, 0.25rem));left:0;transform-origin:left bottom}.dropdown.top-right .dropdown-result{bottom:calc(100% + var(--space-1, 0.25rem));right:0;transform-origin:right bottom}:host([focused]) .dropdown .dropdown-button{outline:none;box-shadow:0 0 0 0.25rem rgba(3, 155, 229, 0.25)}";

const P4Dropdown = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.p4ItemClick = createEvent(this, "p4:dropdown-item-click", 7);
    this.hasFocus = false;
    /**
     * The button size.
     * Possible values are: `"sm"`, `"md"`, `"lg"`. Defaults to `"md"`.
     */
    this.size = 'md';
    this.listVariant = 'default';
    this.itemVariant = 'default';
    this.isOpen = false;
    /**
     * If true, the user cannot interact with the button. Defaults to `false`.
     */
    this.disabled = false;
    this.showLoader = false;
    this.data = [];
    this.position = 'bottom-left';
    this.itemClickHandler = (detail) => {
      if (!this.disabled)
        this.p4ItemClick.emit(detail);
    };
    this.closeList = () => {
      if (!this.disabled && this.isOpen) {
        this.isOpen = false;
        setTimeout(() => this.setFocus(), 100);
      }
    };
    this.openList = () => {
      if (!this.disabled && !this.isOpen) {
        this.isOpen = true;
        setTimeout(() => this.setFocus(), 100);
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
      if (evt.key === 'Enter') {
        evt.preventDefault();
        this.toggleList();
      }
      else if (evt.key === 'ArrowDown') {
        if (this.isOpen) {
          evt.preventDefault();
          //@ts-ignore
          this.listElement.setFocus();
        }
      }
      else if (evt.key === 'ArrowUp') {
        if (this.isOpen) {
          evt.preventDefault();
          //@ts-ignore
          this.listElement.setFocus(true); // focus on previous item
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
  async setFocus() {
    this.displayElement.focus();
  }
  render() {
    return (h(Host, { "aria-disabled": this.disabled ? 'true' : null, focused: this.hasFocus, position: this.position, "is-open": this.isOpen }, h("div", { class: { 'dropdown': true, [this.position]: true, 'is-open': this.isOpen } }, h("button", { class: 'dropdown-button', ref: (el) => this.displayElement = el, onKeyDown: this.keyDownHandler, onBlur: this.blurHandler, onFocus: this.focusHandler, onClick: (evt) => {
        evt.preventDefault();
        this.toggleList();
      } }, h("div", { class: 'slot-container' }, h("slot", null))), h("div", { class: 'dropdown-result' }, this.renderDropdownList()))));
  }
  renderDropdownList() {
    if (this.isOpen && typeof this.data !== 'string') {
      return h("p4-list", { ref: (el) => this.listElement = el, data: this.data, variant: this.listVariant, itemVariant: this.itemVariant, "onP4:item-click": (evt) => {
          this.closeList();
          this.itemClickHandler(evt.detail);
        } });
    }
  }
  get elm() { return getElement(this); }
};
P4Dropdown.style = p4DropdownCss;

export { P4Dropdown as p4_dropdown };

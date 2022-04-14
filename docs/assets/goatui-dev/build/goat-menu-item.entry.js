import { r as registerInstance, f as createEvent, h, e as Host, g as getElement } from './index-433d423f.js';
import { g as getComponentIndex } from './utils-5b2b26db.js';

const menuItemCss = "*{box-sizing:border-box}:host{font-family:var(--font-family-base)}::selection{color:var(--color-white, #ffffff);background:var(--color-primary, var(--color-blue-60, #0f62fe))}::-webkit-scrollbar{width:1rem;height:1rem}::-webkit-scrollbar-track{background:#f1f1f1}::-webkit-scrollbar-thumb{background:#888}::-webkit-scrollbar-thumb :hover{background:#555}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.center-content{display:flex;align-items:center;justify-content:center}:host([hidden]){display:none}@keyframes reveal{0%{opacity:0;transform:translateY(8px)}}:host{display:block}.menu-item{cursor:pointer;font-size:var(--text-md-font-size, 1rem);line-height:var(--text-md-line-height, 1.5rem);letter-spacing:var(--text-md-letter-spacing, 0rem);padding:var(--spacing-2, 0.5rem) var(--spacing-4, 1rem);box-sizing:border-box;display:flex;align-items:center;gap:var(--spacing-2, 0.5rem);color:var(--text-secondary, var(--color-gray-70, #525252));outline:none}.menu-item .item-section{display:flex;align-items:center}.menu-item .slot-main{display:block;flex:1;text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.menu-item .slot-end{color:var(--text-05, var(--color-gray-60, #6f6f6f))}.menu-item:hover,.menu-item.has-focus:not(.active){background:var(--hover-ui, var(--color-gray-10, #f4f4f4));color:var(--text-primary, var(--color-gray-100, #161616))}.menu-item:hover .slot-end,.menu-item.has-focus:not(.active) .slot-end{color:var(--icon-01, var(--color-gray-100, #161616))}.menu-item.active,.menu-item.selected{background:var(--selected-ui, var(--color-gray-20, #e0e0e0))}.menu-item.has-focus:not(.active){outline:2px solid var(--color-primary, var(--color-blue-60, #0f62fe))}.menu-item.disabled{cursor:not-allowed;color:var(--text-disabled, var(--color-gray-30, #c6c6c6)) !important;background-color:var(--disabled-01, var(--color-gray-10, #f4f4f4)) !important}.menu-item.disabled:hover,.menu-item.disabled.has-focus:not(.active){color:var(--text-disabled, var(--color-gray-30, #c6c6c6)) !important;background-color:var(--disabled-01, var(--color-gray-10, #f4f4f4)) !important}.menu-item.disabled.active,.menu-item.disabled.selected{color:var(--text-disabled, var(--color-gray-30, #c6c6c6)) !important;background-color:var(--disabled-01, var(--color-gray-10, #f4f4f4)) !important}.menu-item:not(.start-slot-has-content) .slot-start{display:none}.menu-item:not(.end-slot-has-content) .slot-end{display:none}";

let GoatMenu = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.goatMenuItemClick = createEvent(this, "goat:menu-item-click", 7);
    this.gid = getComponentIndex();
    this.tabindex = 1;
    /**
     * If true, the user cannot interact with the button. Defaults to `false`.
     */
    this.disabled = false;
    /**
     * Menu item selection state.
     */
    this.selected = false;
    this.startSlotHasContent = false;
    this.endSlotHasContent = false;
    this.hasFocus = false;
    this.isActive = false;
    this.clickHandler = (event) => {
      if (!this.disabled) {
        this.goatMenuItemClick.emit({
          value: this.value || this.elm.innerText
        });
      }
      else {
        event.preventDefault();
        event.stopPropagation();
        return;
      }
    };
    this.blurHandler = () => {
      this.hasFocus = false;
    };
    this.focusHandler = () => {
      this.hasFocus = true;
    };
    this.mouseDownHandler = () => {
      this.isActive = true;
    };
    this.keyDownHandler = (evt) => {
      if (evt.key == ' ') {
        evt.preventDefault();
        this.isActive = true;
        this.clickHandler(evt);
      }
    };
    this.render = () => {
      return h(Host, { active: this.isActive, "has-focus": this.hasFocus }, h("div", { ref: (el) => this.nativeInput = el, class: {
          'menu-item': true,
          'selected': this.selected,
          'active': this.isActive,
          'disabled': this.disabled,
          'has-focus': this.hasFocus,
          'start-slot-has-content': this.startSlotHasContent,
          'end-slot-has-content': this.endSlotHasContent,
        }, tabindex: this.tabindex, onBlur: this.blurHandler, onFocus: this.focusHandler, onClick: this.clickHandler, onMouseDown: this.mouseDownHandler, onKeyDown: this.keyDownHandler, "aria-disabled": this.disabled }, h("div", { class: "item-section slot-start" }, h("slot", { name: "start" })), h("div", { class: 'item-section slot-main' }, h("slot", null)), h("div", { class: "item-section slot-end" }, h("slot", { name: "end" }))));
    };
  }
  /**
   * Sets focus on the native `input` in `goat-input`. Use this method instead of the global
   * `input.focus()`.
   */
  async setFocus() {
    if (this.nativeInput) {
      this.nativeInput.focus();
    }
  }
  /**
   * Sets blur on the native `input` in `goat-input`. Use this method instead of the global
   * `input.blur()`.
   */
  async setBlur() {
    if (this.nativeInput) {
      this.nativeInput.blur();
    }
  }
  windowMouseUp() {
    if (this.isActive)
      this.isActive = false;
  }
  windowKeyUp(evt) {
    if (this.isActive && (evt.key == ' '))
      this.isActive = false;
  }
  componentWillLoad() {
    // If the ion-input has a tabindex attribute we get the value
    // and pass it down to the native input, then remove it from the
    // goat-input to avoid causing tabbing twice on the same element
    if (this.elm.hasAttribute('tabindex')) {
      const tabindex = this.elm.getAttribute('tabindex');
      this.tabindex = tabindex !== null ? tabindex : undefined;
      this.elm.removeAttribute('tabindex');
    }
    this.startSlotHasContent = !!this.elm.querySelector('[slot="start"]');
    this.endSlotHasContent = !!this.elm.querySelector('[slot="end"]');
  }
  get elm() { return getElement(this); }
};
GoatMenu.style = menuItemCss;

export { GoatMenu as goat_menu_item };

//# sourceMappingURL=goat-menu-item.entry.js.map
import { r as registerInstance, e as createEvent, h, f as Host, g as getElement } from './index-8956d8c0.js';

const p4ButtonCss = "*{box-sizing:border-box}::selection{color:var(--color-shades-white);background:var(--color-primary-500)}::-webkit-scrollbar{width:10px}::-webkit-scrollbar-track{background:#f1f1f1}::-webkit-scrollbar-thumb{background:#888}::-webkit-scrollbar-thumb :hover{background:#555}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.center-content{display:flex;align-items:center;justify-content:center}:host{display:inline-block;padding-bottom:var(--space-3, 0.75rem);--button-border-radius:var(--border-radius, 5px);--button-border-style:solid}.button{position:relative;box-sizing:border-box;display:flex;align-items:center;flex-direction:row;cursor:pointer;width:100%;border:1px var(--button-border-style) transparent;border-radius:var(--button-border-radius)}.button .slot-container{width:100%}:host([icon]) .button.slot-has-content{gap:var(--space-1_5, 0.375rem)}:host([block]){display:block}:host([size=lg]) .button{padding:var(--space-3_5, 0.875rem) var(--space-5, 1.25rem);font-family:var(--font-family-paragraph, \"Inter\", sans-serif);font-style:normal;font-weight:normal;font-size:var(--font-size-p2, 1rem);line-height:var(--line-height-p2, 1.5rem);letter-spacing:-0.04em;font-weight:var(--font-weight-semi-bold, 600)}:host([size=md]) .button{padding:var(--space-3, 0.75rem) 1.125rem;font-family:var(--font-family-paragraph, \"Inter\", sans-serif);font-style:normal;font-weight:normal;font-size:var(--font-size-p1, 0.875rem);line-height:var(--line-height-p1, 1.0625rem);letter-spacing:-0.04em;font-weight:var(--font-weight-semi-bold, 600)}:host([size=sm]) .button{padding:var(--space-2, 0.5rem) var(--space-3, 0.75rem);font-family:var(--font-family-paragraph, \"Inter\", sans-serif);font-style:normal;font-weight:normal;font-size:var(--font-size-caption, 0.75rem);line-height:var(--line-height-caption, 1.125rem);letter-spacing:-0.04em;font-weight:var(--font-weight-semi-bold, 600)}:host([variant=primary]):host(:not([ghost])) .button{color:var(--color-neutral-50, #f8fafc);background:var(--color-primary-500, #1d4ed8);border-color:var(--color-primary-500, #1d4ed8)}:host([variant=primary]):host(:not([ghost])) .button .spinner,:host([variant=primary]):host(:not([ghost])) .button .icon{--color:var(--color-neutral-50, #f8fafc)}:host([variant=primary]):host(:not([ghost])) .button:hover{background:var(--color-primary-300, #6183e4);border-color:var(--color-primary-300, #6183e4)}:host([variant=primary]):host(:not([ghost])):host([active]) .button{background:var(--color-primary-700, #112f82);border-color:var(--color-primary-700, #112f82)}:host([variant=primary]):host([ghost]) .button{color:var(--color-primary-500, #1d4ed8);background:var(--color-shades-white, #ffffff);border-color:var(--color-primary-500, #1d4ed8)}:host([variant=primary]):host([ghost]) .button .spinner,:host([variant=primary]):host([ghost]) .button .icon{--color:var(--color-primary-500, #1d4ed8)}:host([variant=primary]):host([ghost]) .button:hover{color:var(--color-primary-300, #6183e4);border-color:var(--color-primary-300, #6183e4)}:host([variant=primary]):host([ghost]):host([active]) .button{color:var(--color-primary-300, #6183e4);background:var(--color-primary-50, #e8edfb);border-color:var(--color-primary-200, #8ea7ec)}:host([variant=secondary]):host(:not([ghost])) .button{color:var(--color-neutral-900, #0f172a);background:var(--color-secondary-500, #f7ce46);border-color:var(--color-secondary-500, #f7ce46)}:host([variant=secondary]):host(:not([ghost])) .button .spinner,:host([variant=secondary]):host(:not([ghost])) .button .icon{--color:var(--color-neutral-900, #0f172a)}:host([variant=secondary]):host(:not([ghost])) .button:hover{background:var(--color-secondary-300, #f9dd7e);border-color:var(--color-secondary-300, #f9dd7e)}:host([variant=secondary]):host(:not([ghost])):host([active]) .button{color:var(--color-shades-white, #ffffff);background:var(--color-secondary-700, #947c2a);border-color:var(--color-secondary-700, #947c2a)}:host([variant=secondary]):host([ghost]) .button{color:var(--color-secondary-500, #f7ce46);background:var(--color-shades-white, #ffffff);border-color:var(--color-secondary-500, #f7ce46)}:host([variant=secondary]):host([ghost]) .button .spinner,:host([variant=secondary]):host([ghost]) .button .icon{--color:var(--color-secondary-500, #f7ce46)}:host([variant=secondary]):host([ghost]) .button:hover{color:var(--color-secondary-300, #f9dd7e);border-color:var(--color-secondary-300, #f9dd7e)}:host([variant=secondary]):host([ghost]):host([active]) .button{color:var(--color-secondary-600, #c6a538);background:var(--color-secondary-50, #fefaed);border-color:var(--color-secondary-200, #fbe7a3)}:host([variant=danger]):host(:not([ghost])) .button{color:var(--color-neutral-50, #f8fafc);background:var(--color-error-500, #ef4444);border-color:var(--color-error-500, #ef4444)}:host([variant=danger]):host(:not([ghost])) .button .spinner,:host([variant=danger]):host(:not([ghost])) .button .icon{--color:var(--color-neutral-50, #f8fafc)}:host([variant=danger]):host(:not([ghost])) .button:hover{background:var(--color-error-300, #fca5a5);border-color:var(--color-error-300, #fca5a5)}:host([variant=danger]):host(:not([ghost])):host([active]) .button{background:var(--color-error-700, #b91c1c);border-color:var(--color-error-700, #b91c1c)}:host([variant=danger]):host([ghost]) .button{color:var(--color-error-500, #ef4444);background:var(--color-shades-white, #ffffff);border-color:var(--color-error-500, #ef4444)}:host([variant=danger]):host([ghost]) .button .spinner,:host([variant=danger]):host([ghost]) .button .icon{--color:var(--color-error-500, #ef4444)}:host([variant=danger]):host([ghost]) .button:hover{color:var(--color-error-300, #fca5a5);border-color:var(--color-error-300, #fca5a5)}:host([variant=danger]):host([ghost]):host([active]) .button{color:var(--color-error-300, #fca5a5);background:var(--color-error-50, #fef2f2);border-color:var(--color-error-200, #fecaca)}:host([focused]:not([active])) .button{outline:none;box-shadow:0 0 0 0.25rem rgba(3, 155, 229, 0.25)}:host([icon-end]) .button{flex-direction:row-reverse}:host([disabled]) .button{cursor:not-allowed;color:var(--color-neutral-400, #94a3b8) !important;background:var(--color-neutral-200, #e2e8f0) !important;border-color:var(--color-neutral-200, #e2e8f0) !important}:host([disabled]) .button .spinner,:host([disabled]) .button .icon{--color:var(--color-neutral-900, #0f172a) !important}:host([disabled]):host([ghost]) .button{background:var(--color-neutral-100, #f1f5f9) !important;border-color:var(--color-neutral-400, #94a3b8) !important}";

let index = 0;
const P4Button = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.p4Click = createEvent(this, "p4:click", 7);
    this.id = ++index;
    /**
     * Button size.
     * Possible values are `"sm"`, `"md"`, `"lg"`. Defaults to `"md"`.
     */
    this.size = 'md';
    /**
     * Button variants.
     * Possible values are `"primary"`, `"secondary"`, `"danger"`, `"ghost-primary"`, `"ghost-secondary"`. Defaults to `"primary"`.
     */
    this.variant = 'primary';
    /**
     * If true, fits button width to its parent width. Defaults to `false`.
     */
    this.block = false;
    /**
     * If true, the user cannot interact with the button. Defaults to `false`.
     */
    this.disabled = false;
    this.disabledReason = '';
    /**
     * Icon position.
     */
    this.iconEnd = false;
    this.showLoader = false;
    this.target = '_self';
    this.hasFocus = false;
    this.isActive = false;
    this.slotHasContent = false;
    this.getIconSize = () => {
      let size;
      if (!this.size || this.size === 'md')
        size = '1rem';
      else if (this.size === 'lg')
        size = '1.125rem';
      else if (this.size === 'sm')
        size = '0.725rem';
      return size;
    };
    this.renderIcon = () => {
      return h("p4-icon", { type: this.icon, size: this.getIconSize(), class: 'icon' });
    };
    this.clickHandler = (event) => {
      if (!this.disabled && !this.showLoader) {
        if (this.href) {
          window.open(this.href, this.target);
        }
        this.p4Click.emit(event);
      }
      else {
        event.preventDefault();
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
      if (evt.key == 'Enter' || evt.key == ' ')
        this.isActive = true;
    };
  }
  windowMouseUp() {
    if (this.isActive)
      this.isActive = false;
  }
  windowKeyUp(evt) {
    if (this.isActive && (evt.key == 'Enter' || evt.key == ' '))
      this.isActive = false;
  }
  componentWillLoad() {
    // If the ion-input has a tabindex attribute we get the value
    // and pass it down to the native input, then remove it from the
    // p4-input to avoid causing tabbing twice on the same element
    if (this.elm.hasAttribute('tabindex')) {
      const tabindex = this.elm.getAttribute('tabindex');
      this.tabindex = tabindex !== null ? tabindex : undefined;
      this.elm.removeAttribute('tabindex');
    }
    this.slotHasContent = this.elm.hasChildNodes();
  }
  render() {
    return (h(Host, { focused: this.hasFocus, variant: this.variant, active: this.isActive, size: this.size, icon: this.icon, "icon-end": this.iconEnd }, h("button", { class: {
        'button': true,
        'slot-has-content': this.slotHasContent,
      }, tabindex: this.tabindex, onBlur: this.blurHandler, onFocus: this.focusHandler, onClick: this.clickHandler, onMouseDown: this.mouseDownHandler, onKeyDown: this.keyDownHandler, "aria-describedby": `disabledReason-${this.id}`, "aria-disabled": this.disabled || this.showLoader }, this.showLoader && h("p4-spinner", { class: 'spinner', size: this.getIconSize() }), !this.showLoader && this.icon && this.renderIcon(), !this.showLoader && h("div", { class: 'slot-container' }, h("slot", null))), this.disabled &&
      h("div", { id: `disabledReason-${this.id}`, role: 'tooltip', class: 'sr-only' }, this.disabledReason ? this.disabledReason : 'Disabled')));
  }
  get elm() { return getElement(this); }
};
P4Button.style = p4ButtonCss;

export { P4Button as p4_button };

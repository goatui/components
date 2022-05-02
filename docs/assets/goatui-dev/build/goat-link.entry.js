import { r as registerInstance, h, e as Host, g as getElement } from './index-433d423f.js';
import { g as getComponentIndex } from './utils-5b2b26db.js';

const linkCss = "*{box-sizing:border-box}:host{font-family:var(--font-family-base)}::selection{color:var(--color-white, #ffffff);background:var(--color-primary, var(--color-blue-60, #0f62fe))}::-webkit-scrollbar{width:1rem;height:1rem}::-webkit-scrollbar-track{background:#f1f1f1}::-webkit-scrollbar-thumb{background:#888}::-webkit-scrollbar-thumb :hover{background:#555}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.center-content{display:flex;align-items:center;justify-content:center}:host([hidden]){display:none}@keyframes reveal{0%{opacity:0;transform:translateY(8px)}}:host{display:inline-block}.link{border-radius:var(--border-radius, 3px);display:flex;align-items:center;flex-direction:row;cursor:pointer;text-decoration:var(--link-decoration, none);color:var(--link-color, var(--link-01, var(--color-blue-60, #0f62fe)))}.link:hover{color:var(--link-color-hover, var(--hover-primary-text, var(--color-blue-70, #0043ce)));text-decoration:var(--link-decoration-hover, underline)}.link:visited{color:var(--link-color-visited, var(--visited-link, #8a3ffc))}.link.active{color:var(--link-color-active, var(--text-primary, var(--color-gray-100, #161616)))}:host(.no-style) .link{color:inherit !important;text-decoration:none !important}:host(.no-decoration) .link{text-decoration:none !important}:host(.inline) .link{text-decoration:var(--link-decoration, underline)}.link.has-focus:not(.active){text-decoration:none;outline:2px solid var(--color-primary, var(--color-blue-60, #0f62fe))}";

let Link = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.gid = getComponentIndex();
    this.hasFocus = false;
    this.isActive = false;
    this.tabindex = 1;
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
      if (evt.key == 'Enter' || evt.key == ' ') {
        this.isActive = true;
      }
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
  async triggerClick() {
    if (this.nativeInput) {
      this.nativeInput.click();
    }
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
  }
  render() {
    return (h(Host, { "has-focus": this.hasFocus, active: this.isActive }, h("a", { class: {
        'link': true,
        'has-focus': this.hasFocus,
        'active': this.isActive,
      }, href: this.href, target: this.target, ref: input => this.nativeInput = input, tabindex: this.tabindex, onBlur: this.blurHandler, onFocus: this.focusHandler, onMouseDown: this.mouseDownHandler, onKeyDown: this.keyDownHandler }, h("slot", null))));
  }
  get elm() { return getElement(this); }
};
Link.style = linkCss;

export { Link as goat_link };

//# sourceMappingURL=goat-link.entry.js.map
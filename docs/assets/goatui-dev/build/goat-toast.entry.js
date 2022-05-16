import { r as registerInstance, h, e as Host, g as getElement } from './index-a0beba19.js';
import { c as isDarkMode, o as observeThemeChange } from './utils-5b2b26db.js';

const toastCss = "*{box-sizing:border-box}:host{font-family:var(--font-family-base)}::selection{color:var(--color-white, #ffffff);background:var(--color-primary, var(--color-blue-60, #0f62fe))}::-webkit-scrollbar{width:1rem;height:1rem}::-webkit-scrollbar-track{background:#f1f1f1}::-webkit-scrollbar-thumb{background:#888}::-webkit-scrollbar-thumb :hover{background:#555}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.center-content{display:flex;align-items:center;justify-content:center}:host([hidden]){display:none}@keyframes reveal{0%{opacity:0;transform:translateY(8px)}}:host{display:inline-block;margin-bottom:var(--spacing-3, 0.75rem)}.toast{border-radius:var(--border-radius, 3px);display:flex;align-items:center;gap:var(--spacing-2, 0.5rem);padding:var(--spacing-2, 0.5rem) var(--spacing-4, 1rem);border:1px solid var(--ui-03, var(--color-gray-20, #e0e0e0));box-shadow:var(--shadow-lg, 0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03));background-color:var(--background, #ffffff)}.toast .content{flex:1;color:var(--text-primary, var(--color-gray-100, #161616))}.toast .content .message{font-size:var(--text-md-font-size, 1rem);line-height:var(--text-md-line-height, 1.5rem);letter-spacing:var(--text-md-letter-spacing, 0rem)}.toast .content .description{font-size:var(--text-sm-font-size, 0.875rem);line-height:var(--text-sm-line-height, 1.25rem);letter-spacing:var(--text-sm-letter-spacing, 0rem)}.toast .state-icon{line-height:0}:host([state=info]) .state-icon{color:var(--color-info, #0f62fe)}:host([state=success]) .state-icon{color:var(--color-success, #198038)}:host([state=warning]) .state-icon{color:var(--color-warning, #8e6a00)}:host([state=error]) .state-icon{color:var(--color-error, #da1e28)}";

const Toast = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.message = '';
    this.state = 'info';
    this.isDarkMode = isDarkMode();
  }
  componentWillLoad() {
    observeThemeChange(() => {
      this.isDarkMode = isDarkMode();
    });
  }
  renderStateIcon() {
    if (this.state === 'success') {
      return h("goat-icon", { class: 'inherit', name: 'check-circle-fill', size: 'sm' });
    }
    else if (this.state === 'error') {
      return h("goat-icon", { class: 'inherit', name: 'x-circle-fill', size: 'sm' });
    }
    else if (this.state === 'info') {
      return h("goat-icon", { class: 'inherit', name: 'info-circle-fill', size: 'sm' });
    }
    else if (this.state === 'warning') {
      return h("goat-icon", { class: 'inherit', name: 'exclamation-circle-fill', size: 'sm' });
    }
  }
  render() {
    return (h(Host, null, h("div", { class: { 'toast': true, 'dark-mode': this.isDarkMode }, role: 'alert' }, h("div", { class: 'state-icon' }, this.renderStateIcon()), h("div", { class: 'content' }, h("div", { class: 'message' }, this.message)))));
  }
  get elm() { return getElement(this); }
};
Toast.style = toastCss;

export { Toast as goat_toast };

//# sourceMappingURL=goat-toast.entry.js.map
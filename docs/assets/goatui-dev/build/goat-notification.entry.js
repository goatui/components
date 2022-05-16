import { r as registerInstance, f as createEvent, h, e as Host, g as getElement } from './index-a0beba19.js';
import { c as isDarkMode, o as observeThemeChange, E as ElementSize } from './utils-5b2b26db.js';

const notificationCss = "*{box-sizing:border-box}:host{font-family:var(--font-family-base)}::selection{color:var(--color-white, #ffffff);background:var(--color-primary, var(--color-blue-60, #0f62fe))}::-webkit-scrollbar{width:1rem;height:1rem}::-webkit-scrollbar-track{background:#f1f1f1}::-webkit-scrollbar-thumb{background:#888}::-webkit-scrollbar-thumb :hover{background:#555}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.center-content{display:flex;align-items:center;justify-content:center}:host([hidden]){display:none}@keyframes reveal{0%{opacity:0;transform:translateY(8px)}}:host{display:block;margin-bottom:var(--spacing-3, 0.75rem)}.notification{border-style:solid;border-color:transparent;display:flex}.notification .state-icon{padding:var(--spacing-5, 1.25rem) var(--spacing-4, 1rem)}.notification .content{flex:1;padding:var(--spacing-4, 1rem) 0}.notification .content .title{font-size:var(--text-md-font-size, 1rem);line-height:var(--text-md-line-height, 1.5rem);letter-spacing:var(--text-md-letter-spacing, 0rem);font-weight:var(--font-weight-bold, 700)}.notification .content .subtitle{font-size:var(--text-sm-font-size, 0.875rem);line-height:var(--text-sm-line-height, 1.25rem);letter-spacing:var(--text-sm-letter-spacing, 0rem)}.notification .close-button{margin:0;padding:var(--spacing-3, 0.75rem)}:host(:not([dismissible])) .content{padding-inline-end:var(--spacing-4, 1rem)}:host([state=info]) .notification{border-left-color:var(--support-info-inverse, #4589ff);color:var(--text-inverse, #ffffff);background:var(--background-inverse, var(--color-gray-80, #393939));border-width:0 0 0 3px}:host([state=info]) .notification .close-button{--button-color:var(--text-inverse, #ffffff)}:host([state=info]) .notification .state-icon{color:var(--support-info-inverse, #4589ff)}:host([state=info]) .notification.low-contrast{color:var(--color-neutral-100);border-color:var(--support-info, #0043ce);background:var(--color-info-10, #edf5ff);border-width:1px 1px 1px 3px}:host([state=info]) .notification.low-contrast .close-button{--button-color:var(--color-neutral-100, var(--color-gray-100, #161616))}:host([state=info]) .notification.low-contrast .state-icon{color:var(--support-info, #0043ce)}:host([state=success]) .notification{border-left-color:var(--support-success-inverse, #42be65);color:var(--text-inverse, #ffffff);background:var(--background-inverse, var(--color-gray-80, #393939));border-width:0 0 0 3px}:host([state=success]) .notification .close-button{--button-color:var(--text-inverse, #ffffff)}:host([state=success]) .notification .state-icon{color:var(--support-success-inverse, #42be65)}:host([state=success]) .notification.low-contrast{color:var(--color-neutral-100);border-color:var(--support-success, #198038);background:var(--color-success-10, #defbe6);border-width:1px 1px 1px 3px}:host([state=success]) .notification.low-contrast .close-button{--button-color:var(--color-neutral-100, var(--color-gray-100, #161616))}:host([state=success]) .notification.low-contrast .state-icon{color:var(--support-success, #198038)}:host([state=warning]) .notification{border-left-color:var(--support-warning-inverse, #f1c21b);color:var(--text-inverse, #ffffff);background:var(--background-inverse, var(--color-gray-80, #393939));border-width:0 0 0 3px}:host([state=warning]) .notification .close-button{--button-color:var(--text-inverse, #ffffff)}:host([state=warning]) .notification .state-icon{color:var(--support-warning-inverse, #f1c21b)}:host([state=warning]) .notification.low-contrast{color:var(--color-neutral-100);border-color:var(--support-warning, #f1c21b);background:var(--color-warning-10, #fcf4d6);border-width:1px 1px 1px 3px}:host([state=warning]) .notification.low-contrast .close-button{--button-color:var(--color-neutral-100, var(--color-gray-100, #161616))}:host([state=warning]) .notification.low-contrast .state-icon{color:var(--support-warning, #f1c21b)}:host([state=error]) .notification{border-left-color:var(--support-error-inverse, #fa4d56);color:var(--text-inverse, #ffffff);background:var(--background-inverse, var(--color-gray-80, #393939));border-width:0 0 0 3px}:host([state=error]) .notification .close-button{--button-color:var(--text-inverse, #ffffff)}:host([state=error]) .notification .state-icon{color:var(--support-error-inverse, #fa4d56)}:host([state=error]) .notification.low-contrast{color:var(--color-neutral-100);border-color:var(--support-error, #da1e28);background:var(--color-error-10, #fff1f1);border-width:1px 1px 1px 3px}:host([state=error]) .notification.low-contrast .close-button{--button-color:var(--color-neutral-100, var(--color-gray-100, #161616))}:host([state=error]) .notification.low-contrast .state-icon{color:var(--support-error, #da1e28)}";

const Notification = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.goatDismiss = createEvent(this, "goat:dismiss", 7);
    this.state = 'info';
    this.lowContrast = false;
    this.dismissible = false;
    this.actionable = true;
    this.actionName = 'dismiss';
    this.actionLabel = 'Dismiss';
    this.hidden = false;
    this.isDarkMode = isDarkMode();
  }
  componentWillLoad() {
    observeThemeChange(() => {
      this.isDarkMode = isDarkMode();
    });
  }
  render() {
    return (h(Host, { state: this.state, hidden: this.hidden }, h("div", { class: { 'notification': true, 'low-contrast': this.lowContrast }, role: 'alert' }, h("div", { class: 'state-icon' }, this.renderStateIcon()), h("div", { class: 'content' }, h("div", { class: 'title' }, h("slot", { name: 'title' }), h("slot", null)), h("div", { class: 'subtitle' }, h("slot", { name: 'subtitle' }))), this.renderAction(), this.renderCloseButton())));
  }
  renderAction() {
    if (this.actionable)
      return (h("div", { class: 'action' }, h("slot", { name: 'action' })));
  }
  renderCloseButton() {
    if (this.dismissible) {
      return (h("div", { class: "close-button-container" }, h("goat-button", { class: { 'close-button': true }, "aria-label": 'Close alert', size: ElementSize.SMALL, icon: 'x', variant: 'link', "onGoat:click": (evt) => {
          this.hidden = true;
          this.goatDismiss.emit(evt);
        } })));
    }
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
  get elm() { return getElement(this); }
};
Notification.style = notificationCss;

export { Notification as goat_notification };

//# sourceMappingURL=goat-notification.entry.js.map
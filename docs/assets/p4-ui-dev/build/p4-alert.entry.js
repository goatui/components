import { r as registerInstance, e as createEvent, h, f as Host, g as getElement } from './index-8956d8c0.js';

const p4AlertCss = "*{box-sizing:border-box}::selection{color:var(--color-shades-white);background:var(--color-primary-500)}::-webkit-scrollbar{width:10px}::-webkit-scrollbar-track{background:#f1f1f1}::-webkit-scrollbar-thumb{background:#888}::-webkit-scrollbar-thumb :hover{background:#555}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.center-content{display:flex;align-items:center;justify-content:center}:host{display:block;padding-bottom:var(--space-3, 0.75rem)}.alert{border-radius:var(--border-radius, 5px);display:flex;padding:var(--space-2, 0.5rem) var(--space-6, 1.5rem)}.alert .content{flex:1;display:flex;align-items:center}.alert .content .message{font-family:var(--font-family-paragraph, \"Inter\", sans-serif);font-style:normal;font-weight:normal;font-size:var(--font-size-p2, 1rem);line-height:var(--line-height-p2, 1.5rem);letter-spacing:-0.04em}.alert .content .description{color:var(--color-neutral-600, #475569)}.alert .close-btn{cursor:pointer;--button-border-style:none;padding-bottom:0}:host([state=info]) .alert{background-color:var(--color-primary-50, #e8edfb)}:host([state=info]) .alert .content .message{color:var(--color-primary-600, #173ead)}:host([state=success]) .alert{background-color:var(--color-success-50, #ecfdf5)}:host([state=success]) .alert .content .message{color:var(--color-success-600, #059669)}:host([state=warning]) .alert{background-color:var(--color-warning-50, #fffbeb)}:host([state=warning]) .alert .content .message{color:var(--color-warning-600, #d97706)}:host([state=error]) .alert{background-color:var(--color-error-50, #fef2f2)}:host([state=error]) .alert .content .message{color:var(--color-error-600, #dc2626)}:host([hidden]){display:none}";

const P4Alert = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.p4Click = createEvent(this, "p4:dismiss", 7);
    this.state = 'info';
    this.message = '';
    this.dismissible = false;
    this.description = '';
    this.hidden = false;
  }
  render() {
    let variant;
    if (this.state === 'info') {
      variant = 'primary';
    }
    else if (this.state === 'success') {
      variant = 'success';
    }
    else if (this.state === 'error') {
      variant = 'danger';
    }
    else if (this.state === 'warning') {
      variant = 'warning';
    }
    return (h(Host, { state: this.state, hidden: this.hidden }, h("div", { class: 'alert', role: 'alert' }, h("div", { class: 'content' }, h("div", { class: 'content-wrapper' }, h("div", { class: 'message' }, this.message), this.description ? h("div", { class: 'description' }, this.description) : null)), this.dismissible ? h("p4-button", { class: 'close-btn', variant: variant, ghost: true, icon: 'x-lg', "onP4:click": (evt) => {
        this.hidden = true;
        this.p4Click.emit(evt);
      } }) : null)));
  }
  get elm() { return getElement(this); }
};
P4Alert.style = p4AlertCss;

export { P4Alert as p4_alert };

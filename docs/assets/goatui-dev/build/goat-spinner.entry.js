import { r as registerInstance, h, e as Host } from './index-a0beba19.js';
import { E as ElementSize } from './utils-5b2b26db.js';

const spinnerCss = "*{box-sizing:border-box}:host{font-family:var(--font-family-base)}::selection{color:var(--color-white, #ffffff);background:var(--color-primary, var(--color-blue-60, #0f62fe))}::-webkit-scrollbar{width:1rem;height:1rem}::-webkit-scrollbar-track{background:#f1f1f1}::-webkit-scrollbar-thumb{background:#888}::-webkit-scrollbar-thumb :hover{background:#555}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.center-content{display:flex;align-items:center;justify-content:center}:host([hidden]){display:none}@keyframes reveal{0%{opacity:0;transform:translateY(8px)}}:host{display:inline-block}:host .spinner{line-height:0}:host .spinner path{fill:var(--text-primary, var(--color-gray-100, #161616))}:host(.inherit) .spinner path{fill:currentColor}@keyframes rainbow{0%{fill:var(--color-brand-primary, #8a3ffc)}16%{fill:var(--color-brand-secondary, #007d79)}32%{fill:var(--color-primary, var(--color-blue-60, #0f62fe))}48%{fill:var(--color-success, #198038)}64%{fill:var(--color-warning, #8e6a00)}80%{fill:var(--color-error, #da1e28)}90%{fill:var(--color-secondary, var(--color-warmGray-60, #726e6e))}100%{fill:var(--color-brand-primary, #8a3ffc)}}:host(.rainbow) .spinner path{fill:var(--color-primary, var(--color-blue-60, #0f62fe));animation-name:rainbow;animation-duration:5s;animation-iteration-count:infinite}";

const Spinner = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * The Icon size.
     * Possible values are: `"sm"`, `"md"`, `"lg"`, `"xl"` and size in pixel. Defaults to `"md"`.
     */
    this.size = 'md';
  }
  getSize() {
    let size;
    if (this.size === ElementSize.SMALL)
      size = '1.25rem';
    else if (!this.size || this.size === ElementSize.MEDIUM)
      size = '1.5rem';
    else if (this.size === ElementSize.LARGE)
      size = '1.75rem';
    else if (this.size === ElementSize.X_LARGE)
      size = '2rem';
    else
      size = this.size;
    return size;
  }
  render() {
    return (h(Host, null, h("div", { class: 'spinner' }, h("svg", { version: '1.1', class: 'loader icon-svg', x: '0px', y: '0px', width: this.getSize(), height: this.getSize(), viewBox: '0 0 50 50', fill: 'currentColor' }, h("path", { d: 'M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z' }, h("animateTransform", { attributeType: 'xml', attributeName: 'transform', type: 'rotate', from: '0 25 25', to: '360 25 25', dur: '0.6s', repeatCount: 'indefinite' }))))));
  }
};
Spinner.style = spinnerCss;

export { Spinner as goat_spinner };

//# sourceMappingURL=goat-spinner.entry.js.map
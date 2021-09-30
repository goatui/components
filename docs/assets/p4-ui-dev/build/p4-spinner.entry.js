import { r as registerInstance, h, f as Host } from './index-8956d8c0.js';

const p4SpinnerCss = "*{box-sizing:border-box}::selection{color:var(--color-shades-white);background:var(--color-primary-500)}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.center-content{display:flex;align-items:center;justify-content:center}:host{display:inline-block;--color:var(--color-primary-500, #1d4ed8)}:host .spinner path{fill:var(--color)}.spinner{line-height:0}:host(.primary) .spinner path{fill:var(--color-primary-500, #1d4ed8)}:host(.secondary) .spinner path{fill:var(--color-secondary-500, #f7ce46)}:host(.error) .spinner path{fill:var(--color-error-500, #ef4444)}:host(.success) .spinner path{fill:var(--color-success-500, #10b981)}";

const P4Spinner = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * The Icon size.
     * Possible values are: `"sm"`, `"md"`, `"lg"`. Defaults to `"md"`.
     */
    this.size = 'md';
  }
  getSize() {
    let size;
    if (!this.size || this.size === 'md')
      size = '1.5rem';
    else if (this.size === 'lg')
      size = '3rem';
    else if (this.size === 'sm')
      size = '1rem';
    else if (typeof this.size === 'string')
      size = this.size;
    return size;
  }
  render() {
    return (h(Host, null, h("div", { class: "spinner" }, h("svg", { version: "1.1", class: "loader icon-svg", x: "0px", y: "0px", width: this.getSize(), height: this.getSize(), viewBox: "0 0 50 50", fill: "currentColor" }, h("path", { d: "M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z" }, h("animateTransform", { attributeType: "xml", attributeName: "transform", type: "rotate", from: "0 25 25", to: "360 25 25", dur: "0.6s", repeatCount: "indefinite" }))))));
  }
};
P4Spinner.style = p4SpinnerCss;

export { P4Spinner as p4_spinner };

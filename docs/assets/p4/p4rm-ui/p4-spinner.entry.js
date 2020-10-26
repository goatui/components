import { r as registerInstance, h, f as Host } from './index-db81e240.js';

const p4SpinnerCss = ":host{display:inline-block}.spinner-component.variant-default{color:var(--color-black, #000)}.spinner-component.variant-primary{color:var(--color-primary, var(--color-indigo-6, #4c48ff))}.spinner-component.variant-danger{color:var(--color-red-6, #ff4c47)}.spinner-component.variant-success{color:var(--color-green-6, #48ff4d)}";

const P4Spinner = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * Spinner variants to add additional styling
     * Possible values are `"default"`, `"primary"`, `"danger"`, `"success"`. Defaults to `"default"`.
     */
    this.variant = 'default';
    /**
     * The Icon size.
     * Possible values are: `"sm"`, `"md"`, `"lg"`. Defaults to `"md"`.
     */
    this.size = 'md';
  }
  getSize() {
    let size = '16px';
    if (this.size === 'lg')
      size = '32px';
    else if (this.size === 'sm')
      size = '12px';
    else if (this.size === 'md')
      size = '16px';
    else if (typeof this.size === 'string')
      size = this.size;
    return size;
  }
  getCssClasses() {
    const cls = ['spinner-component'];
    cls.push('variant-' + this.variant);
    return cls.join(' ');
  }
  render() {
    return (h(Host, null, h("div", { class: this.getCssClasses() }, h("svg", { version: "1.1", class: "loader icon-svg", x: "0px", y: "0px", width: this.getSize(), height: this.getSize(), viewBox: "0 0 50 50", fill: "currentColor" }, h("path", { fill: "#000", d: "M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z" }, h("animateTransform", { attributeType: "xml", attributeName: "transform", type: "rotate", from: "0 25 25", to: "360 25 25", dur: "0.6s", repeatCount: "indefinite" }))))));
  }
};
P4Spinner.style = p4SpinnerCss;

export { P4Spinner as p4_spinner };

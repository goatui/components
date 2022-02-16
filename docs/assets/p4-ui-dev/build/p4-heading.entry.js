import { r as registerInstance, h, f as Host } from './index-8956d8c0.js';

const p4HeadingCss = "*{box-sizing:border-box}::selection{color:var(--color-shades-white);background:var(--color-primary-500)}::-webkit-scrollbar{width:10px}::-webkit-scrollbar-track{background:#f1f1f1}::-webkit-scrollbar-thumb{background:#888}::-webkit-scrollbar-thumb :hover{background:#555}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.center-content{display:flex;align-items:center;justify-content:center}:host{display:block;padding-bottom:var(--space-3, 0.75rem)}:host([size=h1]) .heading{font-family:var(--font-family-paragraph, \"Inter\", sans-serif);font-style:normal;font-weight:normal;font-size:var(--font-size-h1, 3rem);line-height:var(--line-height-h1, 3.5rem);letter-spacing:-0.04em;padding:0;margin:0}:host([size=h2]) .heading{font-family:var(--font-family-paragraph, \"Inter\", sans-serif);font-style:normal;font-weight:normal;font-size:var(--font-size-h2, 2.4375rem);line-height:var(--line-height-h2, 2.9375rem);letter-spacing:-0.04em;padding:0;margin:0}:host([size=h3]) .heading{font-family:var(--font-family-paragraph, \"Inter\", sans-serif);font-style:normal;font-weight:normal;font-size:var(--font-size-h3, 2.0625rem);line-height:var(--line-height-h3, 2.5rem);letter-spacing:-0.04em;padding:0;margin:0}:host([size=h4]) .heading{font-family:var(--font-family-paragraph, \"Inter\", sans-serif);font-style:normal;font-weight:normal;font-size:var(--font-size-h4, 1.75rem);line-height:var(--line-height-h4, 2.125rem);letter-spacing:-0.04em;padding:0;margin:0}:host([size=h5]) .heading{font-family:var(--font-family-paragraph, \"Inter\", sans-serif);font-style:normal;font-weight:normal;font-size:var(--font-size-h5, 1.4375rem);line-height:var(--line-height-h5, 1.75rem);letter-spacing:-0.04em;padding:0;margin:0}:host([size=h6]) .heading{font-family:var(--font-family-paragraph, \"Inter\", sans-serif);font-style:normal;font-weight:normal;font-size:var(--font-size-h6, 1.1875rem);line-height:var(--line-height-h6, 1.4375rem);letter-spacing:-0.04em;padding:0;margin:0}:host([weight=semi-bold]) .heading{font-weight:var(--font-weight-semi-bold, 600)}:host([weight=bold]) .heading{font-weight:var(--font-weight-bold, bold)}:host([weight=extra-bold]) .heading{font-weight:var(--font-weight-extra-bold, 800)}";

const P4Heading = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.type = 'h1';
    this.size = 'h1';
    this.weight = 'semi-bold';
  }
  componentWillLoad() {
    if (!this.size) {
      this.size = this.type;
    }
  }
  render() {
    const HeadingTag = this.type;
    return (h(Host, { type: this.type, weight: this.weight, size: this.size }, h(HeadingTag, { class: `heading size-${this.size} weight-${this.weight}` }, h("slot", null))));
  }
};
P4Heading.style = p4HeadingCss;

export { P4Heading as p4_heading };

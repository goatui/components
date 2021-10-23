import { r as registerInstance, h, f as Host } from './index-8956d8c0.js';

const p4HeadingCss = "*{box-sizing:border-box}::selection{color:var(--color-shades-white);background:var(--color-primary-500)}::-webkit-scrollbar{width:10px}::-webkit-scrollbar-track{background:#f1f1f1}::-webkit-scrollbar-thumb{background:#888}::-webkit-scrollbar-thumb :hover{background:#555}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.center-content{display:flex;align-items:center;justify-content:center}:host{display:block;padding-bottom:var(--space-3, 0.75rem)}:host([size=h1]) .heading{font-family:var(--font-family-paragraph, \"Roboto\", sans-serif);font-style:normal;font-weight:normal;font-size:var(--font-size-h1, 48px);line-height:var(--line-height-h1, 56px);letter-spacing:-0.04em;padding:0;margin:0}:host([size=h2]) .heading{font-family:var(--font-family-paragraph, \"Roboto\", sans-serif);font-style:normal;font-weight:normal;font-size:var(--font-size-h2, 39px);line-height:var(--line-height-h2, 47px);letter-spacing:-0.04em;padding:0;margin:0}:host([size=h3]) .heading{font-family:var(--font-family-paragraph, \"Roboto\", sans-serif);font-style:normal;font-weight:normal;font-size:var(--font-size-h3, 33px);line-height:var(--line-height-h3, 40px);letter-spacing:-0.04em;padding:0;margin:0}:host([size=h4]) .heading{font-family:var(--font-family-paragraph, \"Roboto\", sans-serif);font-style:normal;font-weight:normal;font-size:var(--font-size-h4, 28px);line-height:var(--line-height-h4, 34px);letter-spacing:-0.04em;padding:0;margin:0}:host([size=h5]) .heading{font-family:var(--font-family-paragraph, \"Roboto\", sans-serif);font-style:normal;font-weight:normal;font-size:var(--font-size-h5, 23px);line-height:var(--line-height-h5, 28px);letter-spacing:-0.04em;padding:0;margin:0}:host([size=h6]) .heading{font-family:var(--font-family-paragraph, \"Roboto\", sans-serif);font-style:normal;font-weight:normal;font-size:var(--font-size-h6, 19px);line-height:var(--line-height-h6, 23px);letter-spacing:-0.04em;padding:0;margin:0}:host([weight=semi-bold]) .heading{font-weight:var(--font-weight-semi-bold, 600)}:host([weight=bold]) .heading{font-weight:var(--font-weight-bold, bold)}:host([weight=extra-bold]) .heading{font-weight:var(--font-weight-extra-bold, 800)}";

const P4Heading = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.type = 'h1';
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

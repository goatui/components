import { r as registerInstance, h, f as Host } from './index-8956d8c0.js';

const p4HeadingCss = "*{box-sizing:border-box}::selection{color:var(--color-shades-white);background:var(--color-primary-500)}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.center-content{display:flex;align-items:center;justify-content:center}:host{display:block}h1{font-family:var(--font-family-paragraph, \"Roboto\", sans-serif);font-style:normal;font-weight:normal;font-size:var(--font-size-h1, 48px);line-height:var(--line-height-h1, 56px);letter-spacing:-0.04em;font-weight:var(--font-weight-semi-bold, 600);padding:0 0 var(--space-3, 0.75rem) 0;margin:0}h1.weight-bold{font-weight:var(--font-weight-bold, bold)}h1.weight-extra-bold{font-weight:var(--font-weight-extra-bold, 800)}h2{font-family:var(--font-family-paragraph, \"Roboto\", sans-serif);font-style:normal;font-weight:normal;font-size:var(--font-size-h2, 39px);line-height:var(--line-height-h2, 47px);letter-spacing:-0.04em;font-weight:var(--font-weight-semi-bold, 600);padding:0 0 var(--space-3, 0.75rem) 0;margin:0}h2.weight-bold{font-weight:var(--font-weight-bold, bold)}h2.weight-extra-bold{font-weight:var(--font-weight-extra-bold, 800)}h3{font-family:var(--font-family-paragraph, \"Roboto\", sans-serif);font-style:normal;font-weight:normal;font-size:var(--font-size-h3, 33px);line-height:var(--line-height-h3, 40px);letter-spacing:-0.04em;font-weight:var(--font-weight-semi-bold, 600);padding:0 0 var(--space-3, 0.75rem) 0;margin:0}h3.weight-bold{font-weight:var(--font-weight-bold, bold)}h3.weight-extra-bold{font-weight:var(--font-weight-extra-bold, 800)}h4{font-family:var(--font-family-paragraph, \"Roboto\", sans-serif);font-style:normal;font-weight:normal;font-size:var(--font-size-h4, 28px);line-height:var(--line-height-h4, 34px);letter-spacing:-0.04em;font-weight:var(--font-weight-semi-bold, 600);padding:0 0 var(--space-3, 0.75rem) 0;margin:0}h4.weight-bold{font-weight:var(--font-weight-bold, bold)}h4.weight-extra-bold{font-weight:var(--font-weight-extra-bold, 800)}h5{font-family:var(--font-family-paragraph, \"Roboto\", sans-serif);font-style:normal;font-weight:normal;font-size:var(--font-size-h5, 23px);line-height:var(--line-height-h5, 28px);letter-spacing:-0.04em;font-weight:var(--font-weight-semi-bold, 600);padding:0 0 var(--space-3, 0.75rem) 0;margin:0}h5.weight-bold{font-weight:var(--font-weight-bold, bold)}h5.weight-extra-bold{font-weight:var(--font-weight-extra-bold, 800)}";

const P4Heading = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.type = 'h1';
    this.size = 'md';
    this.weight = 'semi-bold';
  }
  render() {
    const HeadingTag = this.type;
    return (h(Host, null, h(HeadingTag, { class: `size-${this.size} weight-${this.weight}` }, h("slot", null))));
  }
};
P4Heading.style = p4HeadingCss;

export { P4Heading as p4_heading };

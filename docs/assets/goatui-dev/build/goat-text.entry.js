import { r as registerInstance, h, e as Host } from './index-433d423f.js';

const textCss = "*{box-sizing:border-box}:host{font-family:var(--font-family-base)}::selection{color:var(--color-white, #ffffff);background:var(--color-primary, var(--color-blue-60, #0f62fe))}::-webkit-scrollbar{width:1rem;height:1rem}::-webkit-scrollbar-track{background:#f1f1f1}::-webkit-scrollbar-thumb{background:#888}::-webkit-scrollbar-thumb :hover{background:#555}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.center-content{display:flex;align-items:center;justify-content:center}:host([hidden]){display:none}@keyframes reveal{0%{opacity:0;transform:translateY(8px)}}.heading{font-weight:var(--font-weight-semi-bold, 600);margin:0}.paragraph{margin:0}:host([type=heading]){display:block;margin-bottom:var(--spacing-4, 1rem)}:host([type=heading]):host([size=xl]) .heading{font-size:var(--display-xl-font-size, 3.75rem);line-height:var(--display-xl-line-height, 4.625rem);letter-spacing:var(--display-xl-letter-spacing, -0.02rem)}:host([type=heading]):host([size=lg]) .heading{font-size:var(--display-lg-font-size, 3rem);line-height:var(--display-lg-line-height, 3.75rem);letter-spacing:var(--display-lg-letter-spacing, -0.02rem)}:host([type=heading]):host([size=md]) .heading{font-size:var(--display-md-font-size, 2.25rem);line-height:var(--display-md-line-height, 2.75rem);letter-spacing:var(--display-md-letter-spacing, 0rem)}:host([type=heading]):host([size=sm]) .heading{font-size:var(--display-sm-font-size, 1.875rem);line-height:var(--display-sm-line-height, 2.375rem);letter-spacing:var(--display-sm-letter-spacing, 0rem)}:host([type=heading]):host([size=xs]) .heading{font-size:var(--display-xs-font-size, 1.5rem);line-height:var(--display-xs-line-height, 2rem);letter-spacing:var(--display-xs-letter-spacing, 0rem)}:host([type=paragraph]){display:block;margin-bottom:var(--spacing-4, 1rem)}:host([type=paragraph]):host([size=xl]) .paragraph{font-size:var(--text-xl-font-size, 1.25rem);line-height:var(--text-xl-line-height, 1.875rem);letter-spacing:var(--text-xl-letter-spacing, 0rem)}:host([type=paragraph]):host([size=lg]) .paragraph{font-size:var(--text-lg-font-size, 1.125rem);line-height:var(--text-lg-line-height, 1.75rem);letter-spacing:var(--text-lg-letter-spacing, 0rem)}:host([type=paragraph]):host([size=md]) .paragraph{font-size:var(--text-md-font-size, 1rem);line-height:var(--text-md-line-height, 1.5rem);letter-spacing:var(--text-md-letter-spacing, 0rem)}:host([type=paragraph]):host([size=sm]) .paragraph{font-size:var(--text-sm-font-size, 0.875rem);line-height:var(--text-sm-line-height, 1.25rem);letter-spacing:var(--text-sm-letter-spacing, 0rem)}:host([type=paragraph]):host([size=xs]) .paragraph{font-size:var(--text-xs-font-size, 0.75rem);line-height:var(--text-xs-line-height, 1.125rem);letter-spacing:var(--text-xs-letter-spacing, 0rem)}:host([type=text]){display:inline-block}:host([type=text]):host([size=xl]) .text{font-size:var(--text-xl-font-size, 1.25rem);line-height:var(--text-xl-line-height, 1.875rem);letter-spacing:var(--text-xl-letter-spacing, 0rem)}:host([type=text]):host([size=lg]) .text{font-size:var(--text-lg-font-size, 1.125rem);line-height:var(--text-lg-line-height, 1.75rem);letter-spacing:var(--text-lg-letter-spacing, 0rem)}:host([type=text]):host([size=md]) .text{font-size:var(--text-md-font-size, 1rem);line-height:var(--text-md-line-height, 1.5rem);letter-spacing:var(--text-md-letter-spacing, 0rem)}:host([type=text]):host([size=sm]) .text{font-size:var(--text-sm-font-size, 0.875rem);line-height:var(--text-sm-line-height, 1.25rem);letter-spacing:var(--text-sm-letter-spacing, 0rem)}:host([type=text]):host([size=xs]) .text{font-size:var(--text-xs-font-size, 0.75rem);line-height:var(--text-xs-line-height, 1.125rem);letter-spacing:var(--text-xs-letter-spacing, 0rem)}:host{color:var(--text-color, var(--text-primary, var(--color-gray-100, #161616)))}:host:host([shade=secondary]){color:var(--text-shade-secondary, var(--text-secondary, var(--color-gray-70, #525252)))}:host:host([shade=tertiary]){color:var(--text-share-tertiary, var(--text-05, var(--color-gray-60, #6f6f6f)))}:host(.inherit){color:inherit}";

let Text = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.type = 'text';
    this.shade = 'primary';
    /**
     * The heading level.
     */
    this.level = 1;
  }
  render() {
    return (h(Host, null, (() => {
      if (this.type === 'heading')
        return this.renderHeading();
      else if (this.type === 'paragraph')
        return this.renderParagraph();
      else if (this.type === 'text')
        return this.renderText();
    })()));
  }
  componentWillLoad() {
    if (this.type === 'heading') {
      if (!this.size) {
        if (this.level === 1) {
          this.size = 'xl';
        }
        else if (this.level === 2) {
          this.size = 'lg';
        }
        else if (this.level === 3) {
          this.size = 'md';
        }
        else if (this.level === 4) {
          this.size = 'sm';
        }
        else if (this.level === 5) {
          this.size = 'xs';
        }
      }
    }
    else {
      if (!this.size) {
        this.size = 'md';
      }
    }
  }
  renderHeading() {
    const HeadingTag = `h${this.level}`;
    return (h(HeadingTag, { class: 'heading' }, h("slot", null)));
  }
  renderParagraph() {
    return (h("p", { class: { 'paragraph': true, [`size-${this.size}`]: true } }, h("slot", null)));
  }
  renderText() {
    return (h("span", { class: { 'text': true, [`size-${this.size}`]: true } }, h("slot", null)));
  }
};
Text.style = textCss;

export { Text as goat_text };

//# sourceMappingURL=goat-text.entry.js.map
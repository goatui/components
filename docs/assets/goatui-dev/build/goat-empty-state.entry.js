import { r as registerInstance, h, e as Host, i as getAssetPath, g as getElement } from './index-a0beba19.js';
import { l as loadScript } from './utils-5b2b26db.js';

async function loadDOMPurify() {
  const version = '2.3.6';
  // @ts-ignore
  await loadScript(`https://cdnjs.cloudflare.com/ajax/libs/dompurify/${version}/purify.min.js`);
}

const emptyStateCss = "*{box-sizing:border-box}:host{font-family:var(--font-family-base)}::selection{color:var(--color-white, #ffffff);background:var(--color-primary, var(--color-blue-60, #0f62fe))}::-webkit-scrollbar{width:1rem;height:1rem}::-webkit-scrollbar-track{background:#f1f1f1}::-webkit-scrollbar-thumb{background:#888}::-webkit-scrollbar-thumb :hover{background:#555}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.center-content{display:flex;align-items:center;justify-content:center}:host([hidden]){display:none}@keyframes reveal{0%{opacity:0;transform:translateY(8px)}}:host{display:block}.empty-state{display:flex;padding:var(--spacing-3, 0.75rem);justify-content:center;gap:var(--spacing-8, 2rem);height:100%;align-items:center;max-width:var(--container-lg, 64rem);margin:auto}.illustration{height:100%;display:flex;--empty-state-outline:var(--color-brand-primary, #8a3ffc);--empty-state-bg-primary:var(--color-brand-secondary, #007d79);--empty-state-bg-secondary:var(--color-brand-secondary-40, #08bdba);--empty-state-bg-tertiary:var(--color-brand-secondary-30, #3ddbd9);--empty-state-text:var(--text-primary, var(--color-gray-100, #161616));--empty-state-bg-surface:var(--background, #ffffff);--empty-state-green:var(--color-success-50, #24a148)}.illustration svg{height:100%}:host-context([data-theme=dark]) .illustration{--empty-state-bg-secondary:var(--color-brand-secondary-80, #004144);--empty-state-bg-tertiary:var(--color-brand-secondary-100, #081a1c)}.content{display:flex;flex-direction:column;justify-content:center}.content .title{font-size:var(--text-md-font-size, 1rem);line-height:var(--text-md-line-height, 1.5rem);letter-spacing:var(--text-md-letter-spacing, 0rem);font-weight:var(--font-weight-semi-bold, 600);margin-bottom:var(--spacing-2, 0.5rem);color:var(--text-color, var(--text-primary, var(--color-gray-100, #161616)))}.content .description{font-size:var(--text-sm-font-size, 0.875rem);line-height:var(--text-sm-line-height, 1.25rem);letter-spacing:var(--text-sm-letter-spacing, 0rem);margin-bottom:var(--spacing-4, 1rem);color:var(--text-color, var(--text-secondary, var(--color-gray-70, #525252)))}:host(.content-center) .content{align-items:center}.empty-state:not(.vertical) .illustration{width:50%}.empty-state:not(.vertical) .content{width:50%}.empty-state.vertical{flex-direction:column;gap:var(--spacing-5, 1.25rem)}.empty-state.vertical .illustration{height:auto;width:100%;justify-content:center}";

const EmptyState = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.illustration = 'no-document';
    this.actionVariant = 'default';
    this.actionDisabled = false;
    this.vertical = false;
  }
  resizeHandler() {
    this.vertical = this.elm.clientWidth < 768;
  }
  async componentWillLoad() {
    if (!window['DOMPurify']) {
      await loadDOMPurify();
    }
  }
  componentDidLoad() {
    this.resizeHandler();
  }
  render() {
    return (h(Host, null, h("div", { class: { 'empty-state': true, 'vertical': this.vertical } }, h("div", { class: 'illustration' }, h("goat-svg", { src: getAssetPath(`./assets/images/empty-state/${this.illustration}.svg`) })), h("div", { class: 'content' }, this.headline && h("div", { class: 'title' }, this.headline), this.description && h("div", { class: 'description', innerHTML: window['DOMPurify'].sanitize(this.description) }), h("div", { class: 'actions' }, this.action &&
      h("goat-button", { href: this.actionUrl, icon: 'arrow-right', iconEnd: true, disabled: this.actionDisabled, variant: this.actionVariant }, this.action))))));
  }
  get elm() { return getElement(this); }
};
EmptyState.style = emptyStateCss;

export { EmptyState as goat_empty_state };

//# sourceMappingURL=goat-empty-state.entry.js.map
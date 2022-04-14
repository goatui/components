import { r as registerInstance, h, e as Host, i as getAssetPath } from './index-433d423f.js';

const emptyStateCss = "*{box-sizing:border-box}:host{font-family:var(--font-family-base)}::selection{color:var(--color-white, #ffffff);background:var(--color-primary, var(--color-blue-60, #0f62fe))}::-webkit-scrollbar{width:1rem;height:1rem}::-webkit-scrollbar-track{background:#f1f1f1}::-webkit-scrollbar-thumb{background:#888}::-webkit-scrollbar-thumb :hover{background:#555}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.center-content{display:flex;align-items:center;justify-content:center}:host([hidden]){display:none}@keyframes reveal{0%{opacity:0;transform:translateY(8px)}}:host{display:block;width:100%;height:100%;padding:var(--spacing-3, 0.75rem)}.empty-state{display:flex;width:100%;height:100%;align-items:center;justify-content:center;flex-direction:column}.illustration{max-width:var(--container-sm, 40rem);--empty-state-outline:var(--color-brand-primary, #8a3ffc);--empty-state-bg-primary:var(--color-brand-secondary, #AADCEC);--empty-state-bg-secondary:var(--color-brand-secondary-40, #CFF5F9);--empty-state-bg-tertiary:var(--color-brand-secondary-30, #E0FCFD);--empty-state-text:var(--text-primary, var(--color-gray-100, #161616));--empty-state-bg-surface:var(--background, #ffffff);--empty-state-green:var(--color-success-50, #24a148)}.illustration svg{width:100%}:host-context([data-theme=dark]) .illustration{--empty-state-bg-secondary:var(--color-brand-secondary-80, #5589A9);--empty-state-bg-tertiary:var(--color-brand-secondary-100, #204671)}.content{display:flex;align-items:center;flex-direction:column;padding:var(--spacing-2, 0.5rem) 0;text-align:center;justify-content:center}.content .title{font-size:var(--text-md-font-size, 1rem);line-height:var(--text-md-line-height, 1.5rem);letter-spacing:var(--text-md-letter-spacing, 0rem);font-weight:var(--font-weight-semi-bold, 600);margin-bottom:var(--spacing-2, 0.5rem);color:var(--text-color, var(--text-primary, var(--color-gray-100, #161616)))}.content .description{font-size:var(--text-sm-font-size, 0.875rem);line-height:var(--text-sm-line-height, 1.25rem);letter-spacing:var(--text-sm-letter-spacing, 0rem);margin-bottom:var(--spacing-4, 1rem);color:var(--text-color, var(--text-secondary, var(--color-gray-70, #525252)))}@media (min-width: 600px){:host([vertical]) .empty-state{flex-direction:row;gap:var(--spacing-8, 2rem)}:host([vertical]) .empty-state .content{align-items:normal;text-align:left}}";

let EmptyState = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.illustration = 'no-document';
    this.vertical = false;
  }
  render() {
    return (h(Host, null, h("div", { class: 'empty-state' }, h("goat-svg", { class: 'illustration', src: getAssetPath(`./assets/images/empty-state/${this.illustration}.svg`) }), h("div", { class: 'content' }, h("div", { class: 'title' }, h("slot", { name: 'title' }), h("slot", null)), h("div", { class: 'description' }, h("slot", { name: 'description' })), h("div", { class: 'actions' }, h("slot", { name: 'actions' }))))));
  }
};
EmptyState.style = emptyStateCss;

export { EmptyState as goat_empty_state };

//# sourceMappingURL=goat-empty-state.entry.js.map
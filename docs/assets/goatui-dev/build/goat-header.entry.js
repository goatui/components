import { r as registerInstance, h, F as Fragment } from './index-433d423f.js';

const headerCss = "*{box-sizing:border-box}:host{font-family:var(--font-family-base)}::selection{color:var(--color-white, #ffffff);background:var(--color-primary, var(--color-blue-60, #0f62fe))}::-webkit-scrollbar{width:1rem;height:1rem}::-webkit-scrollbar-track{background:#f1f1f1}::-webkit-scrollbar-thumb{background:#888}::-webkit-scrollbar-thumb :hover{background:#555}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.center-content{display:flex;align-items:center;justify-content:center}:host([hidden]){display:none}@keyframes reveal{0%{opacity:0;transform:translateY(8px)}}:host{display:block}.header{height:var(--header-height, var(--spacing-12, 3rem));padding:0 var(--spacing-8, 2rem);display:flex;align-items:center}@media (max-width: 599px){.header{padding:0 var(--spacing-4, 1rem)}}.header-content{box-sizing:border-box;display:flex;width:100%;--dropdown-height:100%;--button-height:100%}.header-content .section{display:flex;align-items:center}.header-content .left-section{flex:1}.header-content .left-section .brand-link{display:flex;align-items:center}.header-content .left-section .brand{display:flex;align-items:center;gap:var(--spacing-3, 0.75rem);height:100%;padding:0 var(--spacing-2, 0.5rem);font-weight:var(--font-weight-bold, 700)}.header-content .left-section .brand .logo{height:2rem}.header-content .left-section .page-title-divider{height:66%}.header-content .left-section .page-title{padding:0 var(--spacing-2, 0.5rem)}.header-content .right-section slot::slotted(*){height:100%;display:flex;align-items:center;gap:var(--header-action-gap, 0)}:host(.actions-separated) .header-content{--header-action-gap:var(--spacing-2, 0.5rem)}:host(:not(.actions-separated)) .header-content{--button-border-radius:none}.header{background-color:var(--color-white, #ffffff)}.header .header-content{background-color:var(--color-white, #ffffff)}.header .left-section .brand{color:var(--text-primary, var(--color-gray-100, #161616))}.header .left-section .brand-link{--button-text-color:var(--text-primary, var(--color-gray-100, #161616));--button-color:transparent;--button-color-hover:var(--color-brand-primary-20, #e8daff);--button-color-active:var(--color-brand-primary-30, #d4bbff);--button-color-focus:var(--color-brand-primary, #8a3ffc)}.header .left-section .page-title{color:var(--color-neutral-50, var(--color-gray-50, #8d8d8d))}.header slot::slotted(*){--button-text-color:var(--text-primary, var(--color-gray-100, #161616));--button-color:transparent;--button-color-hover:var(--color-brand-primary-20, #e8daff);--button-color-active:var(--color-brand-primary-30, #d4bbff);--button-color-focus:var(--color-brand-primary, #8a3ffc)}:host-context([data-theme=dark]) .header{background-color:var(--color-black, #000000)}:host-context([data-theme=dark]) .header .header-content{background-color:var(--color-black, #000000)}:host(.float) .header,:host-context([data-theme=dark]):host(.float){background-color:transparent}:host(.float) .header .header-content,:host-context([data-theme=dark]):host(.float) .header-content{border-radius:var(--border-radius, 3px);border:1px solid var(--ui-03, var(--color-gray-20, #e0e0e0));box-shadow:var(--shadow-md, 0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06))}:host(.brand) .header{background-color:var(--color-brand-secondary-10, #d9fbfb)}:host(.brand) .header .header-content{background-color:var(--color-brand-secondary-10, #d9fbfb)}:host(.brand) .header .left-section .brand{color:var(--color-brand-primary, #8a3ffc)}:host(.brand) .header .left-section .page-title{color:var(--color-neutral-50, var(--color-gray-50, #8d8d8d))}:host(.brand) .header slot::slotted(*){--button-text-color:var(--color-brand-primary, #8a3ffc)}:host-context([data-theme=dark]):host(.brand) .header{background-color:var(--color-black, #000000)}:host-context([data-theme=dark]):host(.brand) .header .header-content{background-color:var(--color-black, #000000)}";

let Header = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.brandLogo = '';
    this.brandName = '';
    this.brandUrl = '#';
    this.pageTitle = '';
    this.type = 'simple';
  }
  renderLeftSection() {
    const isLogoSVG = this.brandLogo.endsWith('.svg');
    return (h("div", { class: 'left-section section' }, h("goat-button", { class: 'brand-link full-height', variant: 'link', href: this.brandUrl }, h("div", { class: 'brand' }, (() => {
      if (this.brandLogo) {
        if (isLogoSVG) {
          return h("goat-svg", { class: 'logo inherit', src: this.brandLogo });
        }
        else {
          return h("img", { src: this.brandLogo, class: 'logo', alt: this.brandName });
        }
      }
    })(), this.brandName && h("span", { class: 'brand-name' }, this.brandName))), (() => {
      if (this.pageTitle)
        return h(Fragment, null, h("goat-divider", { vertical: true, class: 'page-title-divider' }), h("div", { class: 'page-title' }, this.pageTitle));
    })()));
  }
  renderRightSection() {
    return (h("div", { class: 'right-section section' }, h("slot", { name: 'right-section' })));
  }
  render() {
    return (h("header", { class: { 'header': true, [`type-${this.type}`]: true } }, h("div", { class: 'header-content' }, this.renderLeftSection(), this.renderRightSection())));
  }
};
Header.style = headerCss;

export { Header as goat_header };

//# sourceMappingURL=goat-header.entry.js.map
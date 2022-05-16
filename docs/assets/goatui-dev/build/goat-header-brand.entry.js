import { r as registerInstance, h, F as Fragment } from './index-a0beba19.js';

const headerBrandCss = "*{box-sizing:border-box}:host{font-family:var(--font-family-base)}::selection{color:var(--color-white, #ffffff);background:var(--color-primary, var(--color-blue-60, #0f62fe))}::-webkit-scrollbar{width:1rem;height:1rem}::-webkit-scrollbar-track{background:#f1f1f1}::-webkit-scrollbar-thumb{background:#888}::-webkit-scrollbar-thumb :hover{background:#555}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.center-content{display:flex;align-items:center;justify-content:center}:host([hidden]){display:none}@keyframes reveal{0%{opacity:0;transform:translateY(8px)}}:host{display:block}.header-brand{display:flex;align-items:center}.header-brand .brand{display:flex;align-items:center;gap:var(--spacing-3, 0.75rem);height:100%;padding:0 var(--spacing-2, 0.5rem);font-weight:var(--font-weight-bold, 700)}.header-brand .logo{height:2rem}.subtitle-divider{height:1.5rem}.subtitle{padding:0 var(--spacing-2, 0.5rem)}.header-brand{color:var(--text-primary, var(--color-gray-100, #161616))}.header-brand .brand-link{--button-text-color:var(--text-primary, var(--color-gray-100, #161616));--button-color:transparent;--button-color-hover:var(--color-brand-primary-20, #e8daff);--button-color-active:var(--color-brand-primary-30, #d4bbff);--button-color-focus:var(--color-brand-primary, #8a3ffc)}.header-brand .subtitle{color:var(--color-neutral-50, var(--color-gray-50, #8d8d8d))}:host-context(.brand) .header-brand{color:var(--color-brand-primary, #8a3ffc)}:host-context(.brand) .header-brand .subtitle{color:var(--color-neutral-50, var(--color-gray-50, #8d8d8d))}";

const HeaderBrand = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.logo = '';
    this.name = '';
    this.href = '#';
    this.subTitle = '';
  }
  render() {
    const isLogoSVG = this.logo.endsWith('.svg');
    return (h("div", { class: 'header-brand' }, h("goat-link", { class: 'brand-link full-height no-style', href: this.href }, h("div", { class: 'brand' }, (() => {
      if (this.logo) {
        if (isLogoSVG) {
          return h("goat-svg", { class: 'logo inherit', src: this.logo });
        }
        else {
          return h("img", { src: this.logo, class: 'logo', alt: this.name });
        }
      }
    })(), this.name && h("span", { class: 'brand-name' }, this.name))), (() => {
      if (this.subTitle)
        return h(Fragment, null, h("goat-divider", { vertical: true, class: 'subtitle-divider' }), h("div", { class: 'subtitle' }, this.subTitle));
    })()));
  }
};
HeaderBrand.style = headerBrandCss;

export { HeaderBrand as goat_header_brand };

//# sourceMappingURL=goat-header-brand.entry.js.map
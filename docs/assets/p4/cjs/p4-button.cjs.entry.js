'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-9711ecf8.js');

const p4ButtonCss = ":host{color:red}@keyframes ripple{0%{transform:scale(0, 0);opacity:1}20%{transform:scale(25, 25);opacity:1}100%{opacity:0;transform:scale(40, 40)}}.button-component{font-weight:var(--font-weight-regular, 400);letter-spacing:var(--letter-spacing-solid, 0rem);line-height:0;box-shadow:0 2px 0 rgba(0, 0, 0, 0.015);border-radius:var(--radius-2, 6px);cursor:pointer;text-align:center;outline:none;transition:all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);font-family:var(--font-normal, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol);position:relative;margin-bottom:12px;}.button-component:after{content:\"\";display:block;position:absolute;height:100%;width:100%;opacity:0;left:0;top:0;transition:all 0.8s}.button-component:active:after{width:0;height:0;opacity:1;top:50%;left:50%;transition:0s}.button-component.size-lg{height:40px;padding:0 15px;font-size:16px}.button-component.size-md{padding:0 15px;height:32px;font-size:14px}.button-component.size-sm{height:24px;padding:0 7px;font-size:14px}.button-component.variant-default,.button-component.variant-dashed{color:var(--color-gray-10, #36363e);background-color:var(--color-white, #fff);border:1px solid var(--color-gray-6, #9f9eb2)}.button-component.variant-default:after,.button-component.variant-dashed:after{background:var(--color-indigo-3, #bcbaff)}.button-component.variant-default:hover,.button-component.variant-default:focus,.button-component.variant-dashed:hover,.button-component.variant-dashed:focus{color:var(--color-primary, var(--color-indigo-6, #4c48ff));border-color:var(--color-primary, var(--color-indigo-6, #4c48ff))}.button-component.variant-dashed{border-style:dashed}.button-component.variant-primary{color:var(--color-white, #fff);background-color:var(--color-primary, var(--color-indigo-6, #4c48ff));border:1px solid var(--color-primary, var(--color-indigo-6, #4c48ff))}.button-component.variant-primary:after{background:var(--color-indigo-3, #bcbaff)}.button-component.variant-primary:hover,.button-component.variant-primary:focus{background-color:var(--color-indigo-5, #7d79ff)}.button-component.variant-danger{color:var(--color-white, #fff);background-color:var(--color-red-6, #ff4c47);border:1px solid var(--color-red-6, #ff4c47)}.button-component.variant-danger:after{background:var(--color-red-3, #ffbbb9)}.button-component.variant-danger:hover,.button-component.variant-danger:focus{background-color:var(--color-red-5, #ff7c78)}.button-component.variant-link{color:var(--color-primary, var(--color-indigo-6, #4c48ff));background-color:var(--color-white, #fff);border:none;box-shadow:none}.button-component.variant-link:after{background-color:var(--color-white, #fff)}.button-component.variant-link:hover,.button-component.variant-link:focus{background-color:var(--color-white, #fff)}.button-component[disabled],.button-component[disabled=true]{color:var(--color-gray-5, #aaa9bb);background-color:var(--color-gray-1, #f4f7fa);border-color:var(--color-gray-5, #aaa9bb);cursor:not-allowed}.button-component[disabled]:hover,.button-component[disabled=true]:hover{color:var(--color-gray-5, #aaa9bb);background-color:var(--color-gray-1, #f4f7fa);border-color:var(--color-gray-5, #aaa9bb)}.button-component.variant-link[disabled],.button-component.variant-link[disabled=true]{color:var(--color-gray-5, #aaa9bb);background-color:var(--color-white, #fff)}.button-component.block{width:100%}";

const P4Button = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.p4Click = index.createEvent(this, "p4Click", 7);
    /**
     * Button size.
     * Possible values are `"sm"`, `"md"`, `"lg"`. Defaults to `"md"`.
     */
    this.size = 'md';
    /**
     * Button variants
     * Possible values are `"default"`, `"primary"`, `"dashed"`, `"danger"`, `"link"`. Defaults to `"default"`.
     */
    this.variant = 'default';
    /**
     * If true, fits button width to its parent width. Defaults to `false`.
     */
    this.block = false;
    /**
     * If true, the user cannot interact with the button. Defaults to `false`.
     */
    this.disabled = false;
    this.onClick = (event) => {
      if (!this.disabled)
        this.p4Click.emit(event);
    };
  }
  getCssClasses() {
    let css = ['button-component'];
    if (this.block)
      css.push('block');
    css.push(`variant-${this.variant}`);
    css.push(`size-${this.size}`);
    return css.join(' ');
  }
  render() {
    return (index.h(index.Host, null, index.h("button", { class: this.getCssClasses(), onClick: this.onClick, disabled: this.disabled }, index.h("slot", null))));
  }
};
P4Button.style = p4ButtonCss;

exports.p4_button = P4Button;

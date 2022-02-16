import { r as registerInstance, h, f as Host, g as getElement } from './index-8956d8c0.js';

const p4AvatarCss = "*{box-sizing:border-box}::selection{color:var(--color-shades-white);background:var(--color-primary-500)}::-webkit-scrollbar{width:10px}::-webkit-scrollbar-track{background:#f1f1f1}::-webkit-scrollbar-thumb{background:#888}::-webkit-scrollbar-thumb :hover{background:#555}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.center-content{display:flex;align-items:center;justify-content:center}:host{display:inline-block}.avatar{border-radius:50%;display:flex;justify-content:center;align-items:center;overflow:hidden;color:var(--color-neutral-50, #f8fafc);font-family:var(--font-family-paragraph, \"Inter\", sans-serif);font-style:normal;font-weight:normal;font-size:var(--font-size-p2, 1rem);line-height:var(--line-height-p2, 1.5rem);letter-spacing:-0.04em}.avatar .image{width:100%;height:100%}:host([type=initials]) .avatar{background:var(--color-primary-500, #1d4ed8)}:host([type=image]) .avatar{background:var(--color-primary-100, #bbcaf3)}:host([size=lg]) .avatar{font-family:var(--font-family-paragraph, \"Inter\", sans-serif);font-style:normal;font-weight:normal;font-size:var(--font-size-h5, 1.4375rem);line-height:var(--line-height-h5, 1.75rem);letter-spacing:-0.04em;font-weight:var(--font-weight-bold, bold)}:host([size=sm]) .avatar{font-family:var(--font-family-paragraph, \"Inter\", sans-serif);font-style:normal;font-weight:normal;font-size:var(--font-size-caption, 0.75rem);line-height:var(--line-height-caption, 1.125rem);letter-spacing:-0.04em}";

const P4Avatar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.size = 'md';
    this.name = '';
    this.src = '';
  }
  getInitials() {
    const name = this.name.split(' ');
    let firstName = name[0] ? name[0].charAt(0).toUpperCase() : '';
    let lastName = name[1] ? name[1].charAt(0).toUpperCase() : '';
    return `${firstName}${lastName}`;
  }
  getSize() {
    let size;
    if (!this.size || this.size === 'md')
      size = '2rem';
    else if (this.size === 'lg')
      size = '3rem';
    else if (this.size === 'sm')
      size = '1.5rem';
    else if (typeof this.size === 'string')
      size = this.size;
    return size;
  }
  getFontSize() {
    if (this.size === 'sm' || this.size === 'md' || this.size === 'lg')
      return undefined;
    else {
      const size = this.getSize();
      const fontSize = this.getSize().match(/^\d+(\.\d{1,2})?/)[0];
      return (fontSize / 2) + size.replace(/^\d+(\.\d{1,2})?/, '');
    }
  }
  render() {
    return (h(Host, { size: this.size, title: this.name, type: this.src ? 'image' : 'initials' }, h("div", { class: 'avatar', style: { width: this.getSize(), height: this.getSize(), fontSize: this.getFontSize() } }, this.src ? h("img", { class: 'image', src: this.src, alt: this.name }) : h("div", { class: 'initials' }, this.getInitials()))));
  }
  get elm() { return getElement(this); }
};
P4Avatar.style = p4AvatarCss;

export { P4Avatar as p4_avatar };

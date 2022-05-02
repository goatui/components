import { r as registerInstance, h, e as Host, g as getElement } from './index-433d423f.js';

const avatarCss = "*{box-sizing:border-box}:host{font-family:var(--font-family-base)}::selection{color:var(--color-white, #ffffff);background:var(--color-primary, var(--color-blue-60, #0f62fe))}::-webkit-scrollbar{width:1rem;height:1rem}::-webkit-scrollbar-track{background:#f1f1f1}::-webkit-scrollbar-thumb{background:#888}::-webkit-scrollbar-thumb :hover{background:#555}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.center-content{display:flex;align-items:center;justify-content:center}:host([hidden]){display:none}@keyframes reveal{0%{opacity:0;transform:translateY(8px)}}:host{display:inline-block;pointer-events:none}.avatar-container{display:flex;align-items:center;gap:var(--spacing-2, 0.5rem);line-height:0}.avatar{border-radius:50%;display:flex;justify-content:center;align-items:center;overflow:hidden;color:var(--color-white, #ffffff);font-size:var(--text-md-font-size, 1rem);line-height:var(--text-md-line-height, 1.5rem);letter-spacing:var(--text-md-letter-spacing, 0rem)}.avatar .image{width:100%;height:100%}:host(.square) .avatar{border-radius:10px}.avatar.avatar-initials{background:var(--avatar-bg-color, var(--color-brand-primary, #8a3ffc))}.avatar.avatar-image{background:var(--color-brand-primary-30, #d4bbff)}:host(.inverted) .avatar{color:var(--color-brand-primary, #8a3ffc)}:host(.inverted) .avatar.avatar-initials{background:var(--avatar-bg-color, var(--color-white, #ffffff))}";

let Avatar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * Avatar size.
     */
    this.size = '2rem';
    this.name = '';
    this.src = '';
  }
  getInitials() {
    const name = this.name.split(' ');
    let firstName = name[0] ? name[0].charAt(0).toUpperCase() : '';
    let lastName = name[1] ? name[1].charAt(0).toUpperCase() : '';
    return `${firstName}${lastName}`;
  }
  getFontSize() {
    const size = this.size;
    const fontSize = this.size.match(/^\d+(\.\d{1,2})?/)[0];
    // @ts-ignore
    return (fontSize * 4 / 10) + size.replace(/^\d+(\.\d{1,2})?/, '');
  }
  render() {
    const cssCls = ['avatar'];
    if (this.src) {
      cssCls.push('avatar-image');
    }
    else {
      cssCls.push('avatar-initials');
    }
    return (h(Host, { title: this.name }, h("div", { class: 'avatar-container' }, h("div", { class: cssCls.join(' '), style: { width: this.size, height: this.size, fontSize: this.getFontSize() } }, (() => {
      if (this.src) {
        return h("img", { class: 'image', src: this.src, alt: this.name });
      }
      else {
        return h("div", { class: 'initials' }, this.getInitials());
      }
    })()))));
  }
  get elm() { return getElement(this); }
};
Avatar.style = avatarCss;

export { Avatar as goat_avatar };

//# sourceMappingURL=goat-avatar.entry.js.map
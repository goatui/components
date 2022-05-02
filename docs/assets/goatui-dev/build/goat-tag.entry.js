import { r as registerInstance, f as createEvent, h, e as Host, g as getElement } from './index-433d423f.js';

const tagCss = "*{box-sizing:border-box}:host{font-family:var(--font-family-base)}::selection{color:var(--color-white, #ffffff);background:var(--color-primary, var(--color-blue-60, #0f62fe))}::-webkit-scrollbar{width:1rem;height:1rem}::-webkit-scrollbar-track{background:#f1f1f1}::-webkit-scrollbar-thumb{background:#888}::-webkit-scrollbar-thumb :hover{background:#555}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.center-content{display:flex;align-items:center;justify-content:center}:host([hidden]){display:none}@keyframes reveal{0%{opacity:0;transform:translateY(8px)}}:host{display:inline-block}.tag{font-size:var(--text-sm-font-size, 0.875rem);line-height:var(--text-sm-line-height, 1.25rem);letter-spacing:var(--text-sm-letter-spacing, 0rem);background:var(--tag-background-color, var(--tag-background-gray, #e0e0e0));color:var(--tag-color, var(--tag-color-gray, #393939));display:flex;align-items:center}.tag-content{padding:0 0.5rem}:host([filter]) .tag-content{padding-inline-end:0.25rem}.close-btn{border-radius:12px;padding:0;margin:0;border:none;background:transparent;line-height:0;cursor:pointer}.close-btn:hover{background:var(--tag-color, var(--tag-hover-gray, #c6c6c6))}.close-btn:hover .close-btn-icon{color:var(--background, #ffffff)}.tag.size-md{height:1.5rem;border-radius:12px}.tag.size-sm{height:1.125rem;border-radius:9px}:host(.color-gray) .tag{--tag-background-color:var(--tag-background-gray, #e0e0e0);--tag-color:var(--tag-color-gray, #393939);--tag-hover-color:var(--tag-hover-gray, #c6c6c6)}:host(.color-blue) .tag{--tag-background-color:var(--tag-background-blue, #d0e2ff);--tag-color:var(--tag-color-blue, #002d9c);--tag-hover-color:var(--tag-hover-blue, #a6c8ff)}:host(.color-green) .tag{--tag-background-color:var(--tag-background-green, #a7f0ba);--tag-color:var(--tag-color-green, #044317);--tag-hover-color:var(--tag-hover-green, #6fdc8c)}:host(.color-red) .tag{--tag-background-color:var(--tag-background-red, #ffd7d9);--tag-color:var(--tag-color-red, #750e13);--tag-hover-color:var(--tag-hover-red, #ffb3b8)}:host(.color-yellow) .tag{--tag-background-color:var(--tag-background-yellow, #fddc69);--tag-color:var(--tag-color-yellow, #483700);--tag-hover-color:var(--tag-hover-yellow, #f1c21b)}:host(.color-primary) .tag{--tag-background-color:var(--tag-background-primary, var(--color-blue-20, #d0e2ff));--tag-color:var(--tag-color-primary, var(--color-blue-80, #002d9c));--tag-hover-color:var(--tag-hover-primary, var(--color-blue-30, #a6c8ff))}:host(.color-success) .tag{--tag-background-color:var(--tag-background-success, #a7f0ba);--tag-color:var(--tag-color-success, #044317);--tag-hover-color:var(--tag-hover-success, #6fdc8c)}:host(.color-info) .tag{--tag-background-color:var(--tag-background-info, #d0e2ff);--tag-color:var(--tag-color-info, #002d9c);--tag-hover-color:var(--tag-hover-info, #a6c8ff)}:host(.color-warning) .tag{--tag-background-color:var(--tag-background-warning, #fddc69);--tag-color:var(--tag-color-warning, #483700);--tag-hover-color:var(--tag-hover-warning, #f1c21b)}:host(.color-error) .tag{--tag-background-color:var(--tag-background-error, #ffd7d9);--tag-color:var(--tag-color-error, #750e13);--tag-hover-color:var(--tag-hover-error, #ffb3b8)}";

let Tag = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.goatClick = createEvent(this, "goat:click", 7);
    this.goatTagDismissClick = createEvent(this, "goat:tag-dismiss", 7);
    /**
     * Text size.
     */
    this.size = 'md';
    this.filter = false;
    this.value = '';
    this.dismissClickHandler = () => {
      this.goatTagDismissClick.emit({ value: this.value || this.elm.textContent });
    };
  }
  renderCloseButton() {
    if (!this.filter) {
      return;
    }
    const size = this.size === 'md' ? '24px' : '16px';
    return h("button", { class: 'close-btn', onClick: () => this.dismissClickHandler() }, h("goat-icon", { class: 'close-btn-icon inherit', name: 'x', size: size }));
  }
  render() {
    return (h(Host, null, h("div", { class: { 'tag': true, [`size-${this.size}`]: true } }, h("div", { class: 'tag-content' }, h("slot", null)), this.renderCloseButton())));
  }
  get elm() { return getElement(this); }
};
Tag.style = tagCss;

export { Tag as goat_tag };

//# sourceMappingURL=goat-tag.entry.js.map
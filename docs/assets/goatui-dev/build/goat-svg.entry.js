import { r as registerInstance, h, e as Host } from './index-433d423f.js';

const cache = {};
// TODO: prevent duplicated request when rendering multiple icons with same name simultaneously
async function fetchIcon(url) {
  if (!url)
    return '';
  if (cache[url]) {
    return cache[url];
  }
  const res = await fetch(url, {
    method: 'GET',
    mode: 'cors',
    credentials: 'omit',
  });
  cache[url] = await res.text();
  return cache[url];
}

const svgCss = "*{box-sizing:border-box}:host{font-family:var(--font-family-base)}::selection{color:var(--color-white, #ffffff);background:var(--color-primary, var(--color-blue-60, #0f62fe))}::-webkit-scrollbar{width:1rem;height:1rem}::-webkit-scrollbar-track{background:#f1f1f1}::-webkit-scrollbar-thumb{background:#888}::-webkit-scrollbar-thumb :hover{background:#555}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.center-content{display:flex;align-items:center;justify-content:center}:host([hidden]){display:none}@keyframes reveal{0%{opacity:0;transform:translateY(8px)}}:host{display:inline-block}.icon{line-height:0;height:100%;width:100%}svg{height:100%;width:100%}:host(.inherit) .icon{color:inherit}";

let Svg = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.src = '';
    this.svg = '';
  }
  async fetchSvg(name) {
    if (this.src)
      this.svg = await fetchIcon(name);
  }
  async handleNameChange(newValue) {
    this.svg = await fetchIcon(newValue);
  }
  async componentWillLoad() {
    await this.fetchSvg(this.src);
  }
  render() {
    return (h(Host, null, h("div", { innerHTML: this.svg, class: { 'icon': true } })));
  }
  static get watchers() { return {
    "src": ["handleNameChange"]
  }; }
};
Svg.style = svgCss;

export { Svg as goat_svg };

//# sourceMappingURL=goat-svg.entry.js.map
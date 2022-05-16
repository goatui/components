import { r as registerInstance, h, e as Host } from './index-a0beba19.js';

const cache = {};
// TODO: prevent duplicated request when rendering multiple icons with same name simultaneously
async function fetchIcon(name) {
  if (!name)
    return '';
  if (cache[name]) {
    return cache[name];
  }
  const res = await fetch(`https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.0/icons/${name}.svg`, {
    method: 'GET',
    mode: 'cors',
    credentials: 'omit',
  });
  cache[name] = await res.text();
  return cache[name];
}

const iconCss = "*{box-sizing:border-box}:host{font-family:var(--font-family-base)}::selection{color:var(--color-white, #ffffff);background:var(--color-primary, var(--color-blue-60, #0f62fe))}::-webkit-scrollbar{width:1rem;height:1rem}::-webkit-scrollbar-track{background:#f1f1f1}::-webkit-scrollbar-thumb{background:#888}::-webkit-scrollbar-thumb :hover{background:#555}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.center-content{display:flex;align-items:center;justify-content:center}:host([hidden]){display:none}@keyframes reveal{0%{opacity:0;transform:translateY(8px)}}:host{display:inline-block}.icon{line-height:0;color:var(--icon-color, var(--text-primary, var(--color-gray-100, #161616)))}:host(.inherit) .icon{color:inherit}";

const Icon = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * The Icon size.
     * Possible values are: `"sm"`, `"md"`, `"lg"`, `"xl"` and size in pixel. Defaults to `"md"`.
     */
    this.size = 'md';
    this.svg = '';
  }
  async fetchSvg(name) {
    if (this.name)
      this.svg = await fetchIcon(name);
  }
  async handleNameChange(newValue) {
    this.svg = await fetchIcon(newValue);
  }
  async componentWillLoad() {
    await this.fetchSvg(this.name);
  }
  getSize() {
    let size;
    if (this.size === 'sm')
      size = '1.25rem';
    else if (!this.size || this.size === 'md')
      size = '1.5rem';
    else if (this.size === 'lg')
      size = '1.75rem';
    else if (this.size === 'xl')
      size = '2rem';
    else
      size = this.size;
    return size;
  }
  render() {
    const icon = this.svg.replace(/width="([^"]+)"/, 'width="' + this.getSize() + '"').replace(/height="([^"]+)"/, 'height="' + this.getSize() + '"');
    return (h(Host, null, h("div", { innerHTML: icon, class: { 'icon': true } })));
  }
  static get watchers() { return {
    "name": ["handleNameChange"]
  }; }
};
Icon.style = iconCss;

export { Icon as goat_icon };

//# sourceMappingURL=goat-icon.entry.js.map
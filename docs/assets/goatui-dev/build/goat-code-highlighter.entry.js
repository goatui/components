import { r as registerInstance, h, e as Host, g as getElement } from './index-433d423f.js';
import { l as loadScript } from './utils-5b2b26db.js';

async function loadPrism() {
  const version = '1.27.0';
  // @ts-ignore
  await loadScript(`https://cdnjs.cloudflare.com/ajax/libs/prism/${version}/components/prism-core.min.js`);
  await loadScript(`https://cdnjs.cloudflare.com/ajax/libs/prism/${version}/plugins/autoloader/prism-autoloader.min.js`);
}

const codeHighlighterCss = "code[class*=language-],pre[class*=language-]{color:#393A34;font-family:\"Consolas\", \"Bitstream Vera Sans Mono\", \"Courier New\", Courier, monospace;direction:ltr;text-align:left;white-space:pre;word-spacing:normal;word-break:normal;font-size:0.9em;line-height:1.2em;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;hyphens:none}pre>code[class*=language-]{font-size:1em}pre[class*=language-]::-moz-selection,pre[class*=language-] ::-moz-selection,code[class*=language-]::-moz-selection,code[class*=language-] ::-moz-selection{background:#C1DEF1}pre[class*=language-]::selection,pre[class*=language-] ::selection,code[class*=language-]::selection,code[class*=language-] ::selection{background:#C1DEF1}pre[class*=language-]{padding:1em;margin:0.5em 0;overflow:auto;border:1px solid #dddddd;background-color:white}:not(pre)>code[class*=language-]{padding:0.2em;padding-top:1px;padding-bottom:1px;background:#f8f8f8;border:1px solid #dddddd}.token.comment,.token.prolog,.token.doctype,.token.cdata{color:#008000;font-style:italic}.token.namespace{opacity:0.7}.token.string{color:#A31515}.token.punctuation,.token.operator{color:#393A34;}.token.url,.token.symbol,.token.number,.token.boolean,.token.variable,.token.constant,.token.inserted{color:#36acaa}.token.atrule,.token.keyword,.token.attr-value,.language-autohotkey .token.selector,.language-json .token.boolean,.language-json .token.number,code[class*=language-css]{color:#0000ff}.token.function{color:#393A34}.token.deleted,.language-autohotkey .token.tag{color:#9a050f}.token.selector,.language-autohotkey .token.keyword{color:#00009f}.token.important{color:#e90}.token.important,.token.bold{font-weight:bold}.token.italic{font-style:italic}.token.class-name,.language-json .token.property{color:#2B91AF}.token.tag,.token.selector{color:#800000}.token.attr-name,.token.property,.token.regex,.token.entity{color:#ff0000}.token.directive.tag .tag{background:#ffff00;color:#393A34}.line-numbers.line-numbers .line-numbers-rows{border-right-color:#a5a5a5}.line-numbers .line-numbers-rows>span:before{color:#2B91AF}.line-highlight.line-highlight{background:rgba(193, 222, 241, 0.2);background:-webkit-linear-gradient(left, rgba(193, 222, 241, 0.2) 70%, rgba(221, 222, 241, 0));background:linear-gradient(to right, rgba(193, 222, 241, 0.2) 70%, rgba(221, 222, 241, 0))}:host-context([data-theme=dark]){}:host-context([data-theme=dark]) pre[class*=language-],:host-context([data-theme=dark]) code[class*=language-]{color:#d4d4d4;font-size:13px;text-shadow:none;font-family:Menlo, Monaco, Consolas, \"Andale Mono\", \"Ubuntu Mono\", \"Courier New\", monospace;direction:ltr;text-align:left;white-space:pre;word-spacing:normal;word-break:normal;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;hyphens:none}:host-context([data-theme=dark]) pre[class*=language-]::selection,:host-context([data-theme=dark]) code[class*=language-]::selection,:host-context([data-theme=dark]) pre[class*=language-] *::selection,:host-context([data-theme=dark]) code[class*=language-] *::selection{text-shadow:none;background:#264F78}@media print{:host-context([data-theme=dark]) pre[class*=language-],:host-context([data-theme=dark]) code[class*=language-]{text-shadow:none}}:host-context([data-theme=dark]) pre[class*=language-]{padding:1em;margin:0.5em 0;overflow:auto;background:#1e1e1e}:host-context([data-theme=dark]) :not(pre)>code[class*=language-]{padding:0.1em 0.3em;border-radius:0.3em;color:#db4c69;background:#1e1e1e}:host-context([data-theme=dark]) .namespace{opacity:0.7}:host-context([data-theme=dark]) .token.doctype .token.doctype-tag{color:#569CD6}:host-context([data-theme=dark]) .token.doctype .token.name{color:#9cdcfe}:host-context([data-theme=dark]) .token.comment,:host-context([data-theme=dark]) .token.prolog{color:#6a9955}:host-context([data-theme=dark]) .token.punctuation,:host-context([data-theme=dark]) .language-html .language-css .token.punctuation,:host-context([data-theme=dark]) .language-html .language-javascript .token.punctuation{color:#d4d4d4}:host-context([data-theme=dark]) .token.property,:host-context([data-theme=dark]) .token.tag,:host-context([data-theme=dark]) .token.boolean,:host-context([data-theme=dark]) .token.number,:host-context([data-theme=dark]) .token.constant,:host-context([data-theme=dark]) .token.symbol,:host-context([data-theme=dark]) .token.inserted,:host-context([data-theme=dark]) .token.unit{color:#b5cea8}:host-context([data-theme=dark]) .token.selector,:host-context([data-theme=dark]) .token.attr-name,:host-context([data-theme=dark]) .token.string,:host-context([data-theme=dark]) .token.char,:host-context([data-theme=dark]) .token.builtin,:host-context([data-theme=dark]) .token.deleted{color:#ce9178}:host-context([data-theme=dark]) .language-css .token.string.url{text-decoration:underline}:host-context([data-theme=dark]) .token.operator,:host-context([data-theme=dark]) .token.entity{color:#d4d4d4}:host-context([data-theme=dark]) .token.operator.arrow{color:#569CD6}:host-context([data-theme=dark]) .token.atrule{color:#ce9178}:host-context([data-theme=dark]) .token.atrule .token.rule{color:#c586c0}:host-context([data-theme=dark]) .token.atrule .token.url{color:#9cdcfe}:host-context([data-theme=dark]) .token.atrule .token.url .token.function{color:#dcdcaa}:host-context([data-theme=dark]) .token.atrule .token.url .token.punctuation{color:#d4d4d4}:host-context([data-theme=dark]) .token.keyword{color:#569CD6}:host-context([data-theme=dark]) .token.keyword.module,:host-context([data-theme=dark]) .token.keyword.control-flow{color:#c586c0}:host-context([data-theme=dark]) .token.function,:host-context([data-theme=dark]) .token.function .token.maybe-class-name{color:#dcdcaa}:host-context([data-theme=dark]) .token.regex{color:#d16969}:host-context([data-theme=dark]) .token.important{color:#569cd6}:host-context([data-theme=dark]) .token.italic{font-style:italic}:host-context([data-theme=dark]) .token.constant{color:#9cdcfe}:host-context([data-theme=dark]) .token.class-name,:host-context([data-theme=dark]) .token.maybe-class-name{color:#4ec9b0}:host-context([data-theme=dark]) .token.console{color:#9cdcfe}:host-context([data-theme=dark]) .token.parameter{color:#9cdcfe}:host-context([data-theme=dark]) .token.interpolation{color:#9cdcfe}:host-context([data-theme=dark]) .token.punctuation.interpolation-punctuation{color:#569cd6}:host-context([data-theme=dark]) .token.boolean{color:#569cd6}:host-context([data-theme=dark]) .token.property,:host-context([data-theme=dark]) .token.variable,:host-context([data-theme=dark]) .token.imports .token.maybe-class-name,:host-context([data-theme=dark]) .token.exports .token.maybe-class-name{color:#9cdcfe}:host-context([data-theme=dark]) .token.selector{color:#d7ba7d}:host-context([data-theme=dark]) .token.escape{color:#d7ba7d}:host-context([data-theme=dark]) .token.tag{color:#569cd6}:host-context([data-theme=dark]) .token.tag .token.punctuation{color:#808080}:host-context([data-theme=dark]) .token.cdata{color:#808080}:host-context([data-theme=dark]) .token.attr-name{color:#9cdcfe}:host-context([data-theme=dark]) .token.attr-value,:host-context([data-theme=dark]) .token.attr-value .token.punctuation{color:#ce9178}:host-context([data-theme=dark]) .token.attr-value .token.punctuation.attr-equals{color:#d4d4d4}:host-context([data-theme=dark]) .token.entity{color:#569cd6}:host-context([data-theme=dark]) .token.namespace{color:#4ec9b0}:host-context([data-theme=dark]) pre[class*=language-javascript],:host-context([data-theme=dark]) code[class*=language-javascript],:host-context([data-theme=dark]) pre[class*=language-jsx],:host-context([data-theme=dark]) code[class*=language-jsx],:host-context([data-theme=dark]) pre[class*=language-typescript],:host-context([data-theme=dark]) code[class*=language-typescript],:host-context([data-theme=dark]) pre[class*=language-tsx],:host-context([data-theme=dark]) code[class*=language-tsx]{color:#9cdcfe}:host-context([data-theme=dark]) pre[class*=language-css],:host-context([data-theme=dark]) code[class*=language-css]{color:#ce9178}:host-context([data-theme=dark]) pre[class*=language-html],:host-context([data-theme=dark]) code[class*=language-html]{color:#d4d4d4}:host-context([data-theme=dark]) .language-regex .token.anchor{color:#dcdcaa}:host-context([data-theme=dark]) .language-html .token.punctuation{color:#808080}:host-context([data-theme=dark]) pre[class*=language-]>code[class*=language-]{position:relative;z-index:1}:host-context([data-theme=dark]) .line-highlight.line-highlight{background:#f7ebc6;box-shadow:inset 5px 0 0 #f7d87c;z-index:0}pre[class*=language-].line-numbers{position:relative;padding-left:3.8em;counter-reset:linenumber}pre[class*=language-].line-numbers>code{position:relative;white-space:inherit}.line-numbers .line-numbers-rows{position:absolute;pointer-events:none;top:0;font-size:100%;left:-3.8em;width:3em;letter-spacing:-1px;border-right:1px solid #999;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.line-numbers-rows>span{display:block;counter-increment:linenumber}.line-numbers-rows>span:before{content:counter(linenumber);color:#999;display:block;padding-right:0.8em;text-align:right}*{box-sizing:border-box}:host{font-family:var(--font-family-base)}::selection{color:var(--color-white, #ffffff);background:var(--color-primary, var(--color-blue-60, #0f62fe))}::-webkit-scrollbar{width:1rem;height:1rem}::-webkit-scrollbar-track{background:#f1f1f1}::-webkit-scrollbar-thumb{background:#888}::-webkit-scrollbar-thumb :hover{background:#555}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.center-content{display:flex;align-items:center;justify-content:center}:host([hidden]){display:none}@keyframes reveal{0%{opacity:0;transform:translateY(8px)}}:host{display:block;height:100%}.code-loader{height:20rem;background-color:var(--field-01, var(--color-gray-10, #f4f4f4));display:flex;align-items:center;justify-content:center;gap:var(--spacing-2, 0.5rem)}.code-highlighter{position:relative;height:100%;background-color:var(--color-brand-primary-10, #f6f2ff);padding:var(--spacing-3, 0.75rem);color:var(--text-primary, var(--color-gray-100, #161616))}.code-highlighter .scroll-wrapper{height:100%;overflow-y:auto}.code-highlighter .scroll-wrapper .line-numbers-wrapper{height:100%;position:relative;font-size:var(--text-sm-font-size, 0.875rem);line-height:var(--text-sm-line-height, 1.25rem);letter-spacing:var(--text-sm-letter-spacing, 0rem)}.code-highlighter .scroll-wrapper .line-numbers-wrapper.line-numbers{margin-left:3.8rem}.code-highlighter .scroll-wrapper .line-numbers-wrapper .highlighter{margin:0;padding:0}.code-highlighter .copy-btn{position:absolute;top:var(--spacing-3, 0.75rem);right:var(--spacing-3, 0.75rem)}:host-context([data-theme=dark]) .code-highlighter{background-color:var(--color-brand-primary-100, #1c0f30)}";

let CodeHighlighter = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.language = 'javascript';
    this.lineNumbers = false;
    this.value = '';
    this.compiledCode = '';
  }
  languageWatcher() {
    this.renderPrism();
  }
  themeWatcher() {
    this.renderPrism();
  }
  async componentWillLoad() {
    if (!window['Prism']) {
      await loadPrism();
      // @ts-ignore
      const Prism = window['Prism'];
      Prism.manual = true;
    }
  }
  componentDidLoad() {
    setTimeout(() => this.renderPrism(), 1000);
  }
  decode(str) {
    return str.replace(/&lt;/g, "<").replace(/&gt;/g, ">");
  }
  renderPrism() {
    // @ts-ignore
    const Prism = window['Prism'];
    let value = this.value;
    if (!value) {
      value = this.elm.innerHTML;
    }
    value = this.decode(value);
    value = value.trim();
    const formatted = Prism.highlight(value, Prism.languages[this.language], this.language);
    let lineNumbersWrapper = '';
    if (this.lineNumbers) {
      const linesNum = formatted.split('\n').length;
      const lines = new Array(linesNum + 1).join('<span></span>');
      lineNumbersWrapper = `<span aria-hidden='true' class='line-numbers-rows'>${lines}</span>`;
    }
    this.compiledCode = formatted + lineNumbersWrapper;
  }
  handleCopyClick() {
    window.navigator.clipboard.writeText(this.value);
    alert('copied');
  }
  render() {
    return (h(Host, null, this.compiledCode && h("div", { class: 'code-highlighter' }, h("div", { class: 'scroll-wrapper' }, h("div", { class: { 'line-numbers-wrapper': true, 'line-numbers': this.lineNumbers } }, h("pre", { dir: 'ltr', class: 'highlighter line-numbers', innerHTML: this.compiledCode }))), h("goat-button", { class: 'copy-btn color-secondary', size: "sm", variant: 'ghost', icon: 'files', "aria-label": 'Copy code', title: 'Copy code', "onGoat:click": this.handleCopyClick })), !this.compiledCode && h("div", { class: 'code-loader' }, h("goat-spinner", { class: "rainbow" }), "Loading code...")));
  }
  get elm() { return getElement(this); }
  static get watchers() { return {
    "language": ["languageWatcher"],
    "lineNumbers": ["themeWatcher"]
  }; }
};
CodeHighlighter.style = codeHighlighterCss;

export { CodeHighlighter as goat_code_highlighter };

//# sourceMappingURL=goat-code-highlighter.entry.js.map
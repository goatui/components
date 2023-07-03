import { Component, ComponentInterface, Element, h, Host, Prop, State, Watch } from '@stencil/core';
import { loadPrism } from '../../../3d-party/prism';

enum Language {
  markup = 'markup',
  css = 'css',
  clike = 'clike',
  javascript = 'javascript',
  abap = 'abap',
  actionscript = 'actionscript',
  ada = 'ada',
  apacheconf = 'apacheconf',
  apl = 'apl',
  applescript = 'applescript',
  arduino = 'arduino',
  arff = 'arff',
  asciidoc = 'asciidoc',
  asm6502 = 'asm6502',
  aspnet = 'aspnet',

  autohotkey = 'autohotkey',
  autoit = 'autoit',
  bash = 'bash',
  basic = 'basic',
  batch = 'batch',
  bison = 'bison',
  brainfuck = 'brainfuck',
  bro = 'bro',
  c = 'c',
  csharp = 'csharp',
  cpp = 'cpp',
  coffeescript = 'coffeescript',
  clojure = 'clojure',
  crystal = 'crystal',
  csp = 'csp',
  cssExtras = 'css-extras',
  d = 'd',
  dart = 'dart',
  diff = 'diff',
  django = 'django',
  docker = 'docker',
  eiffel = 'eiffel',
  elixir = 'elixir',
  elm = 'elm',
  erb = 'erb',
  erlang = 'erlang',
  fsharp = 'fsharp',
  flow = 'flow',
  fortran = 'fortran',
  gedcom = 'gedcom',
  gherkin = 'gherkin',
  git = 'git',
  glsl = 'glsl',
  go = 'go',
  graphql = 'graphql',
  groovy = 'groovy',
  haml = 'haml',
  handlebars = 'handlebars',
  haskell = 'haskell',
  haxe = 'haxe',
  http = 'http',
  hpkp = 'hpkp',
  hsts = 'hsts',
  ichigojam = 'ichigojam',
  icon = 'icon',
  inform7 = 'inform7',
  ini = 'ini',
  io = 'io',
  j = 'j',
  java = 'java',
  jolie = 'jolie',
  json = 'json',
  jsx = 'jsx',
  julia = 'julia',

  keyman = 'keyman',
  kotlin = 'kotlin',
  latex = 'latex',
  less = 'less',
  lilypond = 'lilypond',
  liquid = 'liquid',
  lisp = 'lisp',
  livescript = 'livescript',
  lolcode = 'lolcode',
  lua = 'lua',
  makefile = 'makefile',
  markdown = 'markdown',
  markupTemplating = 'markup-templating',
  matlab = 'matlab',
  mel = 'mel',
  mizar = 'mizar',
  monkey = 'monkey',
  n4js = 'n4js',
  nasm = 'nasm',
  nginx = 'nginx',
  nim = 'nim',
  nix = 'nix',
  nsis = 'nsis',
  objectivec = 'objectivec',
  ocaml = 'ocaml',
  opencl = 'opencl',
  oz = 'oz',
  parigp = 'parigp',
  parser = 'parser',
  pascal = 'pascal',
  perl = 'perl',
  php = 'php',
  phpExtras = 'php-extras',
  plsql = 'plsql',
  powershell = 'powershell',
  processing = 'processing',
  prolog = 'prolog',
  properties = 'properties',
  protobuf = 'protobuf',
  pug = 'pug',
  puppet = 'puppet',
  pure = 'pure',
  python = 'python',
  q = 'q',
  qore = 'qore',
  r = 'r',
}


/**
 * @name Code Highlighter
 * @description A browser based code highlighter.
 * @category Data Display
 * @tag display, code
 * @img /assets/img/code-highlighter.png
 */
@Component({
  tag: 'goat-code-highlighter',
  styleUrl: 'code-highlighter.scss',
  shadow: true,
})
export class CodeHighlighter implements ComponentInterface {


  @Prop() language: string = Language.javascript;

  @Prop() lineNumbers: boolean = false;

  @Prop() value: string = '';

  @State() compiledCode: string = '';

  private parsedValue: string = '';

  @Watch('language')
  languageWatcher() {
    this.renderPrism();
  }

  @Watch('lineNumbers')
  themeWatcher() {
    this.renderPrism();
  }


  @Element() elm!: HTMLElement;

  async componentWillLoad() {
    if (!window['Prism']) {
      await loadPrism();
      // @ts-ignore
      const Prism = window['Prism'];
      const autoloader = Prism.plugins.autoloader;
      if (autoloader) {
        const all = [];
        for (const key in Language) {
          all.push(Language[key]);
        }
        autoloader.loadLanguages(all);
      }
    }
  }

  componentDidLoad() {
    setTimeout(() => this.renderPrism(), 1000);
  }

  decode(str: string) {
    return str.replace(/&lt;/g, '<').replace(/&gt;/g, '>');
  }

  private renderPrism() {
    // @ts-ignore
    const Prism = window['Prism'];

    let value = this.value;
    if (!value) {
      value = this.elm.innerHTML;
    }
    value = this.decode(value);
    this.parsedValue = value.trim();
    const formatted = Prism.highlight(this.parsedValue, Prism.languages[this.language], this.language);
    let lineNumbersWrapper = '';
    if (this.lineNumbers) {
      const linesNum = formatted.split('\n').length;
      const lines = new Array(linesNum + 1).join('<span></span>');
      lineNumbersWrapper = `<span aria-hidden='true' class='line-numbers-rows'>${lines}</span>`;
    }
    this.compiledCode = formatted + lineNumbersWrapper;
  }

  handleCopyClick() {
    window.navigator.clipboard.writeText(this.parsedValue);
    alert('copied');
  }

  render() {
    return (
      <Host>
        {this.compiledCode && <div class='code-highlighter'>
          <div class='scroll-wrapper'>
            <div class={{ 'line-numbers-wrapper': true, 'line-numbers': this.lineNumbers }}>
              <pre dir='ltr' class='highlighter line-numbers' innerHTML={this.compiledCode} />
            </div>
          </div>
          <goat-button class='copy-btn color-secondary icon-only'
                       size='sm'
                       variant='ghost'
                       aria-label='Copy code'
                       title='Copy code' onGoat:click={() => {
            this.handleCopyClick();
          }}>
            <goat-icon name='files' size='1rem' />
          </goat-button>

        </div>}
        {!this.compiledCode && <div class='code-loader'>
          <goat-spinner class='rainbow' />
          Loading code...
        </div>}
      </Host>
    );
  }

}

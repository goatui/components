import { Component, ComponentInterface, Element, h, Host, Prop, State, Watch } from '@stencil/core';
import { loadPrism } from '../../../3d-party/prism';
import * as beautify from 'js-beautify/js';

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
 * @imgDark /assets/img/code-highlighter-dark.png
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

  @Prop() format: boolean = true;

  @Prop() hideCopy: boolean = false;

  @State() compiledCode: string = null;

  private codeString: string = '';
  private parsedCodeString: string = '';

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
    this.codeString = '';
    if (this.value) {
      this.codeString = this.value;
    } else if (this.elm.querySelector('code')) {
      this.codeString = this.elm.querySelector('code').innerHTML;
    }
    this.codeString = this.decode(this.codeString);
    if (!window['Prism']) {
      await loadPrism();
    }
  }

  componentDidLoad() {
    // @ts-ignore
    const Prism = window['Prism'];
    const autoloader = Prism.plugins.autoloader;
    if (autoloader) {
      if (!Prism.languages[this.language]) autoloader.loadLanguages([this.language]);
    }
    setTimeout(() => this.renderPrism(), 1000);
  }

  decode(str: string) {
    return str.replace(/&lt;/g, '<').replace(/&gt;/g, '>');
  }

  private renderPrism() {
    if ((this.format && this.language === 'javascript') || this.language === 'html' || this.language === 'css') {
      switch (this.language) {
        case 'javascript':
          this.parsedCodeString = beautify.js(this.codeString, { wrap_line_length: 120 });
          break;
        case 'html':
          this.parsedCodeString = beautify.html(this.codeString, { wrap_line_length: 120 });
          break;
        case 'css':
          this.parsedCodeString = beautify.css(this.codeString, { wrap_line_length: 120 });
          break;
      }
      this.populateCode();
    } else {
      this.parsedCodeString = this.codeString;
      this.populateCode();
    }
  }

  private populateCode() {
    // @ts-ignore
    const Prism = window['Prism'];
    const formatted = Prism.highlight(this.parsedCodeString, Prism.languages[this.language], this.language);
    let lineNumbersWrapper = '';
    if (this.lineNumbers) {
      const linesNum = formatted.split('\n').length;
      const lines = new Array(linesNum + 1).join('<span></span>');
      lineNumbersWrapper = `<span aria-hidden='true' class='line-numbers-rows'>${lines}</span>`;
    }
    this.compiledCode = formatted + lineNumbersWrapper;
  }

  handleCopyClick() {
    window.navigator.clipboard.writeText(this.parsedCodeString);
    alert('copied');
  }

  render() {
    return (
      <Host>
        {this.compiledCode !== null && (
          <div class="code-highlighter">
            <div class="scroll-wrapper">
              <div class={{ 'line-numbers-wrapper': true, 'line-numbers': this.lineNumbers }}>
                <pre dir="ltr" class="highlighter line-numbers" innerHTML={this.compiledCode} />
              </div>
            </div>
            {!this.hideCopy && (
              <goat-button
                class="copy-btn icon-only"
                size="sm"
                color="secondary"
                variant="ghost"
                aria-label="Copy code"
                title="Copy code"
                icon="copy"
                onGoat:click={() => {
                  this.handleCopyClick();
                }}
              ></goat-button>
            )}
          </div>
        )}
        {this.compiledCode === null && (
          <div class="code-loader">
            <goat-spinner />
            Loading code...
          </div>
        )}
      </Host>
    );
  }
}

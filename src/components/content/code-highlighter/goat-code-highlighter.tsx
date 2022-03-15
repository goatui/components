import { Component, ComponentInterface, Element, h, Host, Prop, State, Watch } from '@stencil/core';
import loadPrism from '../../../3d-party/prism';


/**
 * @name Code Highlighter
 * @description A browser based code highlighter.
 * @img /assets/img/code-highlighter.png
 */
@Component({
  tag: 'goat-code-highlighter',
  styleUrl: 'goat-code-highlighter.scss',
  shadow: true,
})
export class GoatCodeHighlighter implements ComponentInterface {


  @Prop() language: 'markup' | 'css' | 'clike' | 'javascript' | 'abap' | 'actionscript' | 'ada' | 'apacheconf' | 'apl' | 'applescript' | 'arduino' | 'arff' | 'asciidoc' | 'asm6502' | 'aspnet' | 'autohotkey' | 'autoit' | 'bash' | 'basic' | 'batch' | 'bison' | 'brainfuck' | 'bro' | 'c' | 'csharp' | 'cpp' | 'coffeescript' | 'clojure' | 'crystal' | 'csp' | 'css-extras' | 'd' | 'dart' | 'diff' | 'django' | 'docker' | 'eiffel' | 'elixir' | 'elm' | 'erb' | 'erlang' | 'fsharp' | 'flow' | 'fortran' | 'gedcom' | 'gherkin' | 'git' | 'glsl' | 'gml' | 'go' | 'graphql' | 'groovy' | 'haml' | 'handlebars' | 'haskell' | 'haxe' | 'http' | 'hpkp' | 'hsts' | 'ichigojam' | 'icon' | 'inform7' | 'ini' | 'io' | 'j' | 'java' | 'jolie' | 'json' | 'julia' | 'keyman' | 'kotlin' | 'latex' | 'less' | 'liquid' | 'lisp' | 'livescript' | 'lolcode' | 'lua' | 'makefile' | 'markdown' | 'markup-templating' | 'matlab' | 'mel' | 'mizar' | 'monkey' | 'n4js' | 'nasm' | 'nginx' | 'nim' | 'nix' | 'nsis' | 'objectivec' | 'ocaml' | 'opencl' | 'oz' | 'parigp' | 'parser' | 'pascal' | 'perl' | 'php' | 'php-extras' | 'plsql' | 'powershell' | 'processing' | 'prolog' | 'properties' | 'protobuf' | 'pug' | 'puppet' | 'pure' | 'python' | 'q' | 'qore' | 'r' | 'jsx' | 'tsx' | 'renpy' | 'reason' | 'rest' | 'rip' | 'roboconf' | 'ruby' | 'rust' | 'sas' | 'sass' | 'scss' | 'scala' | 'scheme' | 'smalltalk' | 'smarty' | 'sql' | 'soy' | 'stylus' | 'swift' | 'tap' | 'tcl' | 'textile' | 'tt2' | 'twig' | 'typescript' | 'vbnet' | 'velocity' | 'verilog' | 'vhdl' | 'vim' | 'visual-basic' | 'wasm' | 'wiki' | 'xeora' | 'xojo' | 'xquery' | 'yaml' = 'javascript';

  @Prop() lineNumbers: boolean = false;

  @Prop() value: string = '';

  @State() compiledCode: string = '';

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
      Prism.manual = true;

    }
  }

  componentDidLoad() {
    setTimeout(() => this.renderPrism(), 1000);
  }

  private renderPrism() {
    // @ts-ignore
    const Prism = window['Prism'];

    let value = this.value;
    if (!value) {
      value = this.elm.innerHTML;
    }
    value = value.replace(/&lt;/g,"<").replace(/&gt;/g,">");
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
    return (
      <Host>
        {this.compiledCode && <div class='code-highlighter'>
          <div class='scroll-wrapper'>
            <div class={{ 'line-numbers-wrapper': true, 'line-numbers': this.lineNumbers }}>
              <pre class='highlighter line-numbers' innerHTML={this.compiledCode} />
            </div>
          </div>
          <goat-button class='copy-btn' color='secondary' variant='ghost' icon='files' aria-label='Copy code'
                       title='Copy code' onGoat:click={this.handleCopyClick} />
        </div>}
        {!this.compiledCode && <div class='code-loader'>
          <goat-spinner class="rainbow"/>
          Loading code...
        </div>}
      </Host>
    );
  }

}

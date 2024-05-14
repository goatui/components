import { Component, ComponentInterface, Element, Fragment, h, Host, Prop, State, Watch } from '@stencil/core';
import { loadPrism } from '../../3d-party/prism';
import * as beautify from 'js-beautify/js';
import { getComponentIndex } from '../../utils/utils';
import { Language } from './constants';

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
  gid: string = getComponentIndex();

  @Prop({ reflect: true }) language: string = Language.javascript;

  @Prop({ reflect: true }) lineNumbers: boolean = false;

  @Prop() value: string = '';

  @Prop({ reflect: true, mutable: true }) format: boolean;

  @Prop({ reflect: true }) inline: boolean = false;

  @Prop() hideCopy: boolean = false;

  @State() compiledCode: string = null;

  @State() copyState: 'idle' | 'copied' = 'idle';

  private codeString: string = '';
  private parsedCodeString: string = '';

  @Watch('value')
  valueWatcher() {
    if (this.value) {
      this.codeString = this.value;
    }
    this.renderPrism();
  }

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
    if (typeof this.format === 'undefined') {
      this.format = !this.inline;
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
      if (!Prism.languages[this.language]) {
        autoloader.loadLanguages([this.language], () => {
          this.renderPrism();
        });
      }
    } else {
      this.renderPrism();
    }
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

  async handleCopyClick() {
    const textToCopy = this.parsedCodeString;
    // Navigator clipboard api needs a secure context (https)
    // Use the 'out of viewport hidden text area' trick
    const textArea = document.createElement('textarea');
    textArea.value = textToCopy;

    // Move textarea out of the viewport so it's not visible
    textArea.style.position = 'absolute';
    textArea.style.left = '-999999px';

    document.body.prepend(textArea);
    textArea.select();

    try {
      document.execCommand('copy');
    } catch (error) {
      console.error(error);
    } finally {
      textArea.remove();
    }

    this.copyState = 'copied';

    setTimeout(() => {
      this.copyState = 'idle';
    }, 3000);
  }

  render() {
    let HighlighterTab = 'pre';
    if (this.inline) HighlighterTab = 'div';
    let copiedText = 'Copy to clipboard';
    if (this.copyState === 'copied') copiedText = 'Copied to clipboard';

    return (
      <Host>
        {this.compiledCode !== null && (
          <div
            class="code-highlighter"
            on-click={async () => {
              if (this.inline) await this.handleCopyClick();
            }}
          >
            <div class="scroll-wrapper">
              <goat-notification-manager position="top-right" name={'code-highlighter-' + this.gid}></goat-notification-manager>
              <div class={{ 'line-numbers-wrapper': true, 'line-numbers': this.lineNumbers }}>
                <HighlighterTab class="highlighter line-numbers" innerHTML={this.compiledCode} />
              </div>
            </div>
            {!this.hideCopy && this.copyState === 'idle' && !this.inline && (
              <Fragment>
                <goat-button
                  class="copy-btn icon-only"
                  size="sm"
                  color={'secondary'}
                  variant={'ghost'}
                  aria-label="Copy to clipboard"
                  icon={'copy'}
                  tooltip-target={'copy-to-tooltip' + this.gid}
                  onGoat:click={async () => {
                    await this.handleCopyClick();
                  }}
                ></goat-button>
              </Fragment>
            )}
            {!this.hideCopy && this.copyState === 'copied' && !this.inline && (
              <div>
                <goat-button class="copy-btn icon-only test" size="sm" color={'success'} variant={'default'} aria-label="Copied code" title="Copied code" icon={'checkmark'}>
                  Copied
                </goat-button>
              </div>
            )}
            {!this.hideCopy && this.inline && <goat-tooltip id={'copy-to-clipboard-' + this.gid}>{copiedText}</goat-tooltip>}

            <goat-tooltip id={'copy-to-tooltip' + this.gid} placements="bottom">
              Save the record
            </goat-tooltip>
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

import { Component, Event, EventEmitter, h, Host, Prop, Watch } from '@stencil/core';
import { debounceEvent, loadScript } from '../../../utils/utils';

let scriptLoaded = false;

@Component({
  tag: 'goat-code-editor',
  styleUrl: 'goat-code-editor.scss',
  shadow: true,
})
export class GoatCodeEditor {

  private editorElement?: HTMLElement;
  private editorMonacoInstance;

  /**
   * The input field name.
   */
  @Prop() name: string;

  /**
   * The input field value.
   */
  @Prop({ mutable: true }) value: string;


  /**
   * If true, the user cannot interact with the button. Defaults to `false`.
   */
  @Prop() disabled: boolean = false;

  @Prop() theme: 'vs-light' | 'vs-dark' = 'vs-light';

  @Prop() language: 'javascript' | 'json' | 'html' = 'javascript';

  @Prop() lineNumbers: 'off' | 'on' = 'on';

  /**
   * Emitted when the value has changed..
   */
  @Event({ eventName: 'goat:change' }) p4Change: EventEmitter;

  /**
   * Set the amount of time, in milliseconds, to wait to trigger the `onChange` event after each keystroke.
   */
  @Prop() debounce = 250;


  @Watch('debounce')
  protected debounceChanged() {
    this.p4Change = debounceEvent(this.p4Change, this.debounce);
  }

  @Watch('disabled')
  disabledWatcher(newValue: string) {
    this.editorMonacoInstance.updateOptions({ readOnly: newValue });
  }

  @Watch('language')
  languageWatcher(newValue: string) {
    window['monaco'].editor.setModelLanguage(this.editorMonacoInstance.getModel(), newValue);
  }

  @Watch('theme')
  themeWatcher(newValue: string) {
    window['monaco'].editor.setTheme(newValue);
  }

  @Watch('value')
  valueWatcher(newValue: string) {
    if (this.editorMonacoInstance.getValue() !== this.value) {
      this.editorMonacoInstance.setValue(newValue);
    }
  }


  async componentWillLoad() {
    this.debounceChanged();
    if (!scriptLoaded) {
      scriptLoaded = true;
      const version = '0.21.2';
      // @ts-ignore
      window['require'] = { paths: { 'vs': `https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/${version}/min/vs` } };
      await loadScript(`https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/${version}/min/vs/loader.js`);
      await loadScript(`https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/${version}/min/vs/editor/editor.main.nls.js`);
      await loadScript(`https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/${version}/min/vs/editor/editor.main.js`);
    }
  }

  componentDidLoad() {
    setTimeout(() => this.initializeMonaco(), 1000);
  }

  private initializeMonaco() {
    const monaco = window['monaco'];

    //monaco.languages.typescript.javascriptDefaults.addExtraLib(this.extraLibs);

    this.editorElement.innerHTML = '';

    this.editorMonacoInstance = monaco.editor.create(this.editorElement, {
      value: this.value,
      lineNumbers: this.lineNumbers,
      language: this.language,
      theme: this.theme,
      readOnly: this.disabled,
    });

    this.editorMonacoInstance.onDidChangeModelContent(() => {
      this.value = this.editorMonacoInstance.getValue();
      this.p4Change.emit({ value: this.value });
    });
  }

  getCssClasses() {
    const cls = ['component', 'code-editor-component'];
    cls.push(this.theme);
    if (this.disabled)
      cls.push('disabled');
    return cls.join(' ');
  }


  render() {
    return (
      <Host>
        <div class={this.getCssClasses()}>
          <div class='editor' ref={el => this.editorElement = el} />
        </div>
      </Host>
    );
  }

}

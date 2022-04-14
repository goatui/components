import { Component, ComponentInterface, Event, EventEmitter, h, Host, Method, Prop, State, Watch } from '@stencil/core';
import { debounceEvent, getComponentIndex } from '../../../utils/utils';
import loadMonaco from '../../../3d-party/monaco';

/**
 * @name Code Editor
 * @description A browser based code editor.
 * @img /assets/img/code-editor.png
 */
@Component({
  tag: 'goat-code-editor',
  styleUrl: 'code-editor.scss',
  shadow: true,
})
export class CodeEditor implements ComponentInterface, InputComponentInterface {

  gid: string = getComponentIndex();


  /**
   * The input field name.
   */
  @Prop() name: string = `goat-input-${this.gid}`;

  /**
   * The input field value.
   */
  @Prop({ mutable: true }) value: string;

  /**
   * If true, required icon is show. Defaults to `false`.
   */
  @Prop({ reflect: true }) required: boolean = false;


  /**
   * If true, the user cannot interact with the button. Defaults to `false`.
   */
  @Prop({reflect: true}) disabled: boolean = false;

  @Prop({reflect: true}) readonly : boolean = false;

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

  @State() hasFocus = false;


  @Watch('debounce')
  protected debounceChanged() {
    this.p4Change = debounceEvent(this.p4Change, this.debounce);
  }

  @Watch('disabled')
  disabledWatcher(newValue: string) {
    this.editorMonacoInstance.updateOptions({ readOnly: newValue || this.readonly});
  }

  @Watch('readonly')
  readonlyWatcher(newValue: string) {
    this.editorMonacoInstance.updateOptions({ readOnly: newValue || this.disabled});
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

  @Method()
  async getComponentId() {
    return this.gid;
  }

  /**
   * Sets focus on the native `input` in `goat-input`. Use this method instead of the global
   * `input.focus()`.
   */
  @Method()
  async setFocus() {
    if (this.editorMonacoInstance) {
      this.editorMonacoInstance.focus();
    }
  }

  /**
   * Sets blur on the native `input` in `goat-input`. Use this method instead of the global
   * `input.blur()`.
   */
  @Method()
  async setBlur() {
    if (this.editorMonacoInstance) {
      this.editorMonacoInstance.blur();
    }
  }

  private editorElement?: HTMLElement;
  @State() editorMonacoInstance: any;

  async componentWillLoad() {
    this.debounceChanged();
    if (!window['monaco']) {
      await loadMonaco();
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
      readOnly: this.disabled || this.readonly,
    });


    this.editorMonacoInstance.onDidChangeModelContent(() => {
      this.value = this.editorMonacoInstance.getValue();
      this.p4Change.emit({ value: this.value });
    });

    this.editorMonacoInstance.onDidFocusEditorText(() => {
      this.hasFocus = true;
    });

    this.editorMonacoInstance.onDidBlurEditorText(() => {
      this.hasFocus = false;
    });
  }

  render() {
    return (
      <Host>
        <div class={{
          'component': true,
          'code-editor-component': true,
          [this.theme]: true,
          'disabled': this.disabled,
          'readonly': this.readonly,
          'has-focus': this.hasFocus,
        }}>
          <div class='editor' ref={el => this.editorElement = el} />
          {!this.editorMonacoInstance && <div class='code-editor-loader'>
            <goat-spinner class='rainbow' />
            Loading editor...
          </div>}
        </div>


      </Host>
    );
  }

}

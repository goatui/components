import { Component, ComponentInterface, Event, EventEmitter, h, Host, Method, Prop, State, Watch } from '@stencil/core';
import { debounceEvent, getComponentIndex } from '../../../utils/utils';
import { Editor } from '@tiptap/core';
import StarterKit from '@tiptap/starter-kit';
import Document from '@tiptap/extension-document';
import Paragraph from '@tiptap/extension-paragraph';
import Text from '@tiptap/extension-text';

/**
 * @name HTML Editor
 * @description HTML Editor component is a WYSIWYG editor that allows users to edit HTML content.
 * @category Up coming
 * @tags input, form
 * @img /assets/img/html-editor.png
 * @imgDark /assets/img/html-editor-dark.png
 */
@Component({
  tag: 'goat-html-editor',
  styleUrl: 'html-editor.scss',
  shadow: false,
})
export class HtmlEditor implements ComponentInterface, InputComponentInterface {
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
  @Prop({ reflect: true }) disabled: boolean = false;

  @Prop({ reflect: true }) readonly: boolean = false;

  @Prop() theme: 'vs-light' | 'vs-dark' = 'vs-light';

  @Prop() lineNumbers: 'off' | 'on' = 'on';

  /**
   * Emitted when the value has changed..
   */
  @Event({ eventName: 'goat:change' }) goatChange: EventEmitter;

  /**
   * Set the amount of time, in milliseconds, to wait to trigger the `onChange` event after each keystroke.
   */
  @Prop() debounce = 250;

  @State() hasFocus = false;

  @Watch('debounce')
  protected debounceChanged() {
    this.goatChange = debounceEvent(this.goatChange, this.debounce);
  }

  @Watch('disabled')
  disabledWatcher(newValue: boolean) {
    if (newValue) {
      this.editorInstance.enableReadOnlyMode('123');
    } else {
      this.editorInstance.disableReadOnlyMode('123');
    }
  }

  @Watch('readonly')
  readonlyWatcher(newValue: string) {
    this.editorInstance.updateOptions({ readOnly: newValue || this.disabled });
  }

  @Watch('theme')
  themeWatcher(newValue: string) {
    window['monaco'].editor.setTheme(newValue);
  }

  @Watch('value')
  valueWatcher(newValue: string) {
    if (this.editorInstance.getValue() !== this.value) {
      this.editorInstance.setValue(newValue);
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
    if (this.editorInstance) {
      this.editorInstance.focus();
    }
  }

  /**
   * Sets blur on the native `input` in `goat-input`. Use this method instead of the global
   * `input.blur()`.
   */
  @Method()
  async setBlur() {
    if (this.editorInstance) {
      this.editorInstance.blur();
    }
  }

  private editorElement?: HTMLElement;

  @State()
  editorInstance: any;

  async componentWillLoad() {
    this.debounceChanged();
    /*if (!window['CKEDITOR']) {
      await loadQuilljs();
    }*/
  }

  componentDidLoad() {
    setTimeout(() => this.initializeEditor(), 1000);
  }

  private initializeEditor() {
    //const CKEDITOR = window['CKEDITOR'];

    this.editorElement.innerHTML = '';

    // This sample still does not showcase all CKEditor 5 features (!)
    // Visit https://ckeditor.com/docs/ckeditor5/latest/features/index.html to browse all the features.
    this.editorInstance = new Editor({
      element: this.editorElement,
      extensions: [StarterKit, Document, Paragraph, Text],
      content: '<p>Hello World!</p>',
    });
  }

  render() {
    return (
      <Host>
        <div
          class={{
            'component': true,
            'code-editor-component': true,
            [this.theme]: true,
            'disabled': this.disabled,
            'readonly': this.readonly,
            'has-focus': this.hasFocus,
          }}
        >
          <div class="toolbar">
            <goat-button-group>
              <goat-button
                icon="undo"
                variant="outline"
                color="secondary"
                size={'sm'}
                onGoat:click={() => {
                  this.editorInstance.commands.undo();
                }}
              ></goat-button>
              <goat-button
                icon="redo"
                color="secondary"
                size={'sm'}
                onGoat:click={() => {
                  this.editorInstance.commands.redo();
                }}
              ></goat-button>
            </goat-button-group>

            <goat-button-group>
              <goat-button
                icon="text--align--left"
                variant="outline"
                color="secondary"
                size={'sm'}
                onGoat:click={() => {
                  // this.editorInstance.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'left');
                }}
              ></goat-button>

              <goat-button
                icon="text--align--center"
                variant="outline"
                color="secondary"
                size={'sm'}
                onGoat:click={() => {
                  // this.editorInstance.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'center');
                }}
              ></goat-button>

              <goat-button
                icon="text--align--right"
                variant="outline"
                color="secondary"
                size={'sm'}
                onGoat:click={() => {
                  //.editorInstance.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'right');
                }}
              ></goat-button>
            </goat-button-group>

            <goat-button-group>
              <goat-button
                icon="text--bold"
                variant="outline"
                color="secondary"
                size={'sm'}
                onGoat:click={() => {
                  this.editorInstance.commands.toggleBold();
                }}
              ></goat-button>

              <goat-button
                icon="text--italic"
                variant="outline"
                color="secondary"
                size={'sm'}
                onGoat:click={() => {
                  this.editorInstance.commands.toggleItalic();
                }}
              ></goat-button>
            </goat-button-group>
          </div>
          <div class="editor" ref={el => (this.editorElement = el)}></div>
          {!this.editorInstance && (
            <div class="code-editor-loader">
              <goat-spinner />
              Loading editor...
            </div>
          )}
        </div>
      </Host>
    );
  }
}

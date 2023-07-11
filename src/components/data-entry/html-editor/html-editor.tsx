import { Component, ComponentInterface, Event, EventEmitter, h, Host, Method, Prop, State, Watch } from '@stencil/core';
import { debounceEvent, getComponentIndex } from '../../../utils/utils';
import loadQuilljs from '../../../3d-party/quilljs';

/**
 * @name HTML Editor
 * @description A browser based code editor.
 * @category Form Inputs
 * @tags input, form
 * @img /assets/img/code-editor.png
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
  @Prop({reflect: true}) disabled: boolean = false;

  @Prop({reflect: true}) readonly : boolean = false;

  @Prop() theme: 'vs-light' | 'vs-dark' = 'vs-light';

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
  disabledWatcher(newValue: boolean) {
    if (newValue) {
      this.editorMonacoInstance.enableReadOnlyMode("123")
    } else {
      this.editorMonacoInstance.disableReadOnlyMode("123")
    }

  }

  @Watch('readonly')
  readonlyWatcher(newValue: string) {
    this.editorMonacoInstance.updateOptions({ readOnly: newValue || this.disabled});
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
    if (!window['CKEDITOR']) {
      await loadQuilljs();
    }
  }


  componentDidLoad() {
    setTimeout(() => this.initializeMonaco(), 1000);
  }

  private initializeMonaco() {
    const CKEDITOR = window['CKEDITOR'];

    this.editorElement.innerHTML = '';

    // This sample still does not showcase all CKEditor 5 features (!)
    // Visit https://ckeditor.com/docs/ckeditor5/latest/features/index.html to browse all the features.
    CKEDITOR.ClassicEditor.create(this.editorElement, {
      // https://ckeditor.com/docs/ckeditor5/latest/features/toolbar/toolbar.html#extended-toolbar-configuration-format
      toolbar: [
        'undo', 'redo',
        '|',
        'sourceEditing',
        '|',
        'wproofreader',
        '|',
        'heading',
        '|',
        'bold', 'italic', 'strikethrough', 'code',
        '|',
        'bulletedList', 'numberedList', 'todoList',
        '|',
        'link', 'uploadImage', 'insertTable', 'blockQuote', 'codeBlock', 'horizontalLine', 'specialCharacters'
      ],
      // Changing the language of the interface requires loading the language file using the <script> tag.
      // language: 'es',
      list: {
        properties: {
          styles: true,
          startIndex: true,
          reversed: true,
        },
      },
      // https://ckeditor.com/docs/ckeditor5/latest/features/headings.html#configuration
      heading: {
        options: [
          { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
          { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
          { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' },
          { model: 'heading3', view: 'h3', title: 'Heading 3', class: 'ck-heading_heading3' },
          { model: 'heading4', view: 'h4', title: 'Heading 4', class: 'ck-heading_heading4' },
          { model: 'heading5', view: 'h5', title: 'Heading 5', class: 'ck-heading_heading5' },
          { model: 'heading6', view: 'h6', title: 'Heading 6', class: 'ck-heading_heading6' },
        ],
      },
      // https://ckeditor.com/docs/ckeditor5/latest/features/editor-placeholder.html#using-the-editor-configuration
      placeholder: 'Welcome to CKEditor 5!',

      // https://ckeditor.com/docs/ckeditor5/latest/features/mentions.html#configuration
      mention: {
        feeds: [
          {
            marker: '@',
            feed: [
              '@apple', '@bears', '@brownie', '@cake', '@cake', '@candy', '@canes', '@chocolate', '@cookie', '@cotton', '@cream',
              '@cupcake', '@danish', '@donut', '@dragée', '@fruitcake', '@gingerbread', '@gummi', '@ice', '@jelly-o',
              '@liquorice', '@macaroon', '@marzipan', '@oat', '@pie', '@plum', '@pudding', '@sesame', '@snaps', '@soufflé',
              '@sugar', '@sweet', '@topping', '@wafer',
            ],
            minimumCharacters: 1,
          },
        ],
      },
      // The "super-build" contains more premium features that require additional configuration, disable them below.
      // Do not turn them on unless you read the documentation and know how to configure them and setup the editor.
      plugins: [
        'Autoformat',
        'BlockQuote',
        'Bold',
        'CloudServices',
        'Essentials',
        'Heading',
        'Markdown'
      ],
    }).then( editor => {
      console.log( 'Editor was initialized', editor );
      // @ts-ignore
      window.testeditor = editor;
      this.editorMonacoInstance = editor;
      const toolbarElement = editor.ui.view.toolbar.element;
      editor.on('change:isReadOnly', (_evt, _propertyName, isReadOnly) => {
        if (isReadOnly) {
          toolbarElement.style.display = 'none';
        } else {
          toolbarElement.style.display = 'flex';
        }
      });
    })
      .catch( error => {
        console.error( error );
      } );
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

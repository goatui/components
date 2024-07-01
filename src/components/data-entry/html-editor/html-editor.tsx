import {
  Component,
  ComponentInterface,
  Event,
  EventEmitter,
  h,
  Host,
  Method,
  Prop,
  State,
  Watch,
} from '@stencil/core';
import { debounceEvent, getComponentIndex } from '../../../utils/utils';
import { Editor } from '@tiptap/core';
import StarterKit from '@tiptap/starter-kit';
import Document from '@tiptap/extension-document';
import Paragraph from '@tiptap/extension-paragraph';
import TextStyle from '@tiptap/extension-text-style';
import FontFamily from '@tiptap/extension-font-family';
import Underline from '@tiptap/extension-underline';
import Mention from '@tiptap/extension-mention';
import Text from '@tiptap/extension-text';
import * as beautify from 'js-beautify/js';
import { computePosition, offset } from '@floating-ui/dom';

/**
 * @name HTML Editor
 * @description HTML Editor component is a WYSIWYG editor that allows users to edit HTML content.
 * @category Up coming
 * @tags input, form
 * @img /assets/img/html-editor.webp
 * @imgDark /assets/img/html-editor-dark.webp
 */
@Component({
  tag: 'goat-html-editor',
  styleUrl: 'html-editor.scss',
  shadow: true,
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

  @Prop({ reflect: true }) layer?: 'background' | '01' | '02';

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

  @Prop() mentions: { label: string; value: string }[] = [];

  /**
   * Emitted when the value has changed..
   */
  @Event({ eventName: 'goat:change' }) goatChange: EventEmitter;

  /**
   * Set the amount of time, in milliseconds, to wait to trigger the `onChange` event after each keystroke.
   */
  @Prop() debounce = 250;

  @State() hasFocus = false;

  @State()
  filteredMentionValues: string[] = [];

  @Watch('debounce')
  protected debounceChanged() {
    this.goatChange = debounceEvent(this.goatChange, this.debounce);
  }

  @Watch('disabled')
  disabledWatcher(newValue: boolean) {
    this.editorInstance.setEditable(!newValue);
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
    if (
      beautify.html(this.editorInstance.getHTML(), {
        wrap_line_length: 120,
      }) !== this.value
    ) {
      this.editorInstance.commands.setContent(newValue);
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
      this.editorInstance.chain().focus().run();
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

  copiedContent: any = '';

  private initializeEditor() {
    const that = this;

    this.editorElement.innerHTML = '';

    // This sample still does not showcase all CKEditor 5 features (!)
    // Visit https://ckeditor.com/docs/ckeditor5/latest/features/index.html to browse all the features.
    this.editorInstance = new Editor({
      element: this.editorElement,
      extensions: [
        StarterKit,
        Document,
        Paragraph,
        Text,
        Underline,
        TextStyle,
        FontFamily,
        Mention.configure({
          HTMLAttributes: {
            class: 'mention',
          },
          renderHTML({ options, node }) {
            const item = that.getMentionItem(node.attrs.id);
            return [
              'a',
              { ...options.HTMLAttributes },
              `${options.suggestion.char}${item ? item.label : node.attrs.id}`,
            ];
          },
          suggestion: {
            allowSpaces: true,
            items: function ({ query }) {
              return that.mentions
                .filter(item =>
                  item.label.toLowerCase().startsWith(query.toLowerCase()),
                )
                .map(item => item.value)
                .slice(0, 5);
            },
            render: function () {
              return {
                onStart: props => {
                  that.mentionCommand = props.command;
                  that.filteredMentionValues = props.items;
                  computePosition(props.decorationNode, that.dropdownContent, {
                    placement: 'bottom-start',
                    // Try removing the middleware. The dropdown will
                    // overflow the boundary's edge and get clipped!
                    middleware: [offset(10)],
                  }).then(({ x, y }) => {
                    Object.assign(that.dropdownContent.style, {
                      top: `${y}px`,
                      left: `${x}px`,
                    });
                  });
                },
                onKeyDown(props) {
                  if (props.event.key === 'Escape') {
                    return true;
                  }
                },

                onUpdate: props => {
                  that.filteredMentionValues = props.items;
                  computePosition(props.decorationNode, that.dropdownContent, {
                    placement: 'bottom-start',
                    // Try removing the middleware. The dropdown will
                    // overflow the boundary's edge and get clipped!
                    middleware: [offset(10)],
                  }).then(({ x, y }) => {
                    Object.assign(that.dropdownContent.style, {
                      top: `${y}px`,
                      left: `${x}px`,
                    });
                  });
                },
                onExit: () => {
                  console.log('onExit');
                  that.filteredMentionValues = [];
                },
              };
            },
          },
        }),
      ],
      content: this.value,
    });

    this.editorInstance.on('update', () => {
      this.value = beautify.html(this.editorInstance.getHTML(), {
        wrap_line_length: 120,
      });

      this.goatChange.emit({ value: this.value });
    });

    this.editorElement.addEventListener('click', e => {
      // Focus the editor when the user clicks anywhere on the editor
      if (this.editorElement == e.target)
        this.editorInstance.commands.focus('end');
    });
  }

  renderToolbar() {
    return (
      <div class="toolbar">
        <div class={'action-group'}>
          <goat-button
            icon="undo"
            variant="ghost"
            color="dark"
            darkModeColor="light"
            onGoat:click={() => {
              this.editorInstance.commands.undo();
            }}
          ></goat-button>

          <goat-button
            icon="redo"
            variant="ghost"
            color="dark"
            darkModeColor="light"
            onGoat:click={() => {
              this.editorInstance.commands.redo();
            }}
          ></goat-button>
        </div>

        {/*<div class={'action-group'}>
              <goat-button
                icon="cut"
                variant="ghost"
                color="dark"
                onGoat:click={() => {
                  const from = this.editorInstance.state.selection.from;
                  const to = this.editorInstance.state.selection.to;
                  this.copiedContent =
                    this.editorInstance.state.doc.textBetween(from, to);
                  document.execCommand('cut');
                }}
              ></goat-button>

              <goat-button
                icon="copy"
                variant="ghost"
                color="dark"
                onGoat:click={() => {
                  const from = this.editorInstance.state.selection.from;
                  const to = this.editorInstance.state.selection.to;
                  this.copiedContent =
                    this.editorInstance.state.doc.textBetween(from, to);
                  document.execCommand('copy');
                }}
              ></goat-button>

              <goat-button
                icon="paste"
                variant="ghost"
                color="dark"
                onGoat:click={() => {
                  this.editorInstance.chain().focus().run();
                  this.editorInstance.commands.insertContent(
                    this.copiedContent,
                  );
                }}
              ></goat-button>
            </div>*/}

        {/* <goat-button
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
              ></goat-button> */}

        <div class={'action-group'}>
          <goat-button
            icon="text--bold"
            variant="ghost"
            color="dark"
            darkModeColor="light"
            onGoat:click={() => {
              this.editorInstance.chain().focus().toggleBold().run();
            }}
          ></goat-button>

          <goat-button
            icon="text--italic"
            variant="ghost"
            color="dark"
            darkModeColor="light"
            onGoat:click={() => {
              this.editorInstance.chain().focus().toggleItalic().run();
            }}
          ></goat-button>

          <goat-button
            icon="text--underline"
            variant="ghost"
            color="dark"
            darkModeColor="light"
            onGoat:click={() => {
              this.editorInstance.chain().focus().toggleUnderline().run();
            }}
          ></goat-button>
        </div>

        <div class={'action-group'}>
          <goat-button
            icon="list--bulleted"
            variant="ghost"
            color="dark"
            darkModeColor="light"
            onGoat:click={() => {
              this.editorInstance.chain().focus().toggleBulletList().run();
            }}
          ></goat-button>

          <goat-button
            icon="list--numbered"
            variant="ghost"
            color="dark"
            darkModeColor="light"
            onGoat:click={() => {
              this.editorInstance.chain().focus().toggleOrderedList().run();
            }}
          ></goat-button>
        </div>
      </div>
    );
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
          <goat-tabs type="contained-bottom">
            <goat-tab-panel layer={this.layer}>
              <div class="wysiwyg-container">
                {this.renderToolbar()}
                <div class="editor" ref={el => (this.editorElement = el)}></div>
              </div>

              {!this.editorInstance && (
                <div class="editor-loader">
                  <goat-spinner />
                  Loading editor...
                </div>
              )}
            </goat-tab-panel>

            <goat-tab-panel>
              <goat-code-editor
                class="html-code-editor"
                value={this.value}
                readonly={this.readonly}
                disabled={this.disabled}
                language="html"
                onGoat:change={evt => {
                  this.value = evt.detail.value;
                }}
              ></goat-code-editor>
            </goat-tab-panel>

            <goat-tabs-list class={'tabs-list'}>
              <goat-tab>WYSIWYG</goat-tab>
              <goat-tab>HTML</goat-tab>
            </goat-tabs-list>
          </goat-tabs>
        </div>

        <goat-menu
          class="mention-menu"
          ref={elm => (this.dropdownContent = elm)}
          onGoat:menu-item-click={evt => {
            this.mentionCommand({ id: evt.detail.value });
          }}
        >
          {this.filteredMentionValues.map(value => {
            const item = this.getMentionItem(value);

            return (
              <goat-menu-item value={item.value}>{item.label}</goat-menu-item>
            );
          })}
        </goat-menu>
      </Host>
    );
  }

  getMentionItem(value: string) {
    return this.mentions.find(item => item.value == value);
  }

  mentionCommand: any;
  dropdownContent: HTMLElement;
}

import { EventEmitter } from '../../stencil-public-runtime';
export declare class P4ScriptEditor {
  private editorElement?;
  private editorMonacoInstance;
  /**
   * The input field name.
   */
  name: string;
  /**
   * The input field value.
   */
  value: string;
  /**
   * If true, the user cannot interact with the button. Defaults to `false`.
   */
  disabled: boolean;
  theme: 'vs-light' | 'vs-dark';
  language: 'javascript' | 'json' | 'html';
  lineNumbers: 'off' | 'on';
  /**
   * Emitted when the value has changed..
   */
  p4Change: EventEmitter;
  /**
   * Set the amount of time, in milliseconds, to wait to trigger the `onChange` event after each keystroke.
   */
  debounce: number;
  protected debounceChanged(): void;
  disabledWatcher(newValue: string): void;
  languageWatcher(newValue: string): void;
  themeWatcher(newValue: string): void;
  valueWatcher(newValue: string): void;
  componentWillLoad(): Promise<void>;
  componentDidLoad(): void;
  private initializeMonaco;
  getCssClasses(): string;
  render(): any;
}

/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface P4Button {
        /**
          * If true, fits button width to its parent width. Defaults to `false`.
         */
        "block": boolean;
        /**
          * If true, the user cannot interact with the button. Defaults to `false`.
         */
        "disabled": boolean;
        "href": string;
        /**
          * Icon which will displayed on button. Possible values are bootstrap icon names.
         */
        "icon": string;
        /**
          * Icon position. Possible values are `"left"`, `"right"`. Defaults to `"left"`.
         */
        "iconPosition": 'left' | 'right';
        "showLoader": boolean;
        /**
          * Button size. Possible values are `"sm"`, `"md"`, `"lg"`. Defaults to `"md"`.
         */
        "size": 'sm' | 'md' | 'lg';
        "target": '_self' | '_blank';
        /**
          * Button variants. Possible values are `"primary"`, `"secondary"`, `"ghost-primary"`, `"ghost-secondary"`. Defaults to `"primary"`.
         */
        "variant": 'primary' | 'secondary' | 'ghost-primary' | 'ghost-secondary';
    }
    interface P4Checkbox {
        /**
          * If true, the user cannot interact with the button. Defaults to `false`.
         */
        "disabled": boolean;
        /**
          * The checkbox label.
         */
        "label": string;
        /**
          * If true, required icon is show. Defaults to `false`.
         */
        "required": boolean;
        /**
          * The button size. Possible values are: `"sm"`, `"md"`, `"lg"`. Defaults to `"md"`.
         */
        "size": 'sm' | 'md' | 'lg';
        /**
          * The input field value.
         */
        "value": boolean;
    }
    interface P4Icon {
        /**
          * The Icon size. Possible values are: `"sm"`, `"md"`, `"lg"`. Defaults to `"md"`.
         */
        "size": 'sm' | 'md' | 'lg' | string;
        "type": string;
    }
    interface P4Input {
        /**
          * Indicates whether the value of the control can be automatically completed by the browser.
         */
        "autocomplete": 'on' | 'off';
        /**
          * If `true`, a clear icon will appear in the input when there is a value. Clicking it clears the input.
         */
        "clearInput": boolean;
        /**
          * Set the amount of time, in milliseconds, to wait to trigger the `p4Change` event after each keystroke.
         */
        "debounce": number;
        /**
          * If true, the user cannot interact with the button. Defaults to `false`.
         */
        "disabled": boolean;
        /**
          * The input field name.
         */
        "name": string;
        /**
          * The input field placeholder.
         */
        "placeholder": string;
        /**
          * If true, required icon is show. Defaults to `false`.
         */
        "required": boolean;
        /**
          * Sets blur on the native `input` in `ion-input`. Use this method instead of the global `input.blur()`.
         */
        "setBlur": () => Promise<void>;
        /**
          * Sets focus on the native `input` in `ion-input`. Use this method instead of the global `input.focus()`.
         */
        "setFocus": () => Promise<void>;
        /**
          * The input field size. Possible values are: `"sm"`, `"md"`, `"lg"`. Defaults to `"md"`.
         */
        "size": 'sm' | 'md' | 'lg';
        /**
          * The type of control to display. The default type is text.
         */
        "type": ('text' | 'password' | 'number' | 'email' | 'tel');
        /**
          * The input field value.
         */
        "value"?: string | number | null;
        /**
          * Input field variants to add additional styling Possible values are `"default"`, `"dashed"`. Defaults to `"default"`.
         */
        "variant": 'default' | 'dashed';
    }
    interface P4Item {
    }
    interface P4Label {
        "required": boolean;
    }
    interface P4ScriptEditor {
        /**
          * Set the amount of time, in milliseconds, to wait to trigger the `onChange` event after each keystroke.
         */
        "debounce": number;
        /**
          * If true, the user cannot interact with the button. Defaults to `false`.
         */
        "disabled": boolean;
        "language": 'javascript' | 'json' | 'html';
        "lineNumbers": 'off' | 'on';
        /**
          * The input field name.
         */
        "name": string;
        "theme": 'vs-light' | 'vs-dark';
        /**
          * The input field value.
         */
        "value": string;
    }
    interface P4Spinner {
        /**
          * The Icon size. Possible values are: `"sm"`, `"md"`, `"lg"`. Defaults to `"md"`.
         */
        "size": 'sm' | 'md' | 'lg' | string;
    }
    interface P4Table {
        /**
          * Grid columns configuration. [ {   "name":"name",   "label":"Name",   "width":300,   "fixed":true  }, {   "name":"age",   "label":"Age" } ]
         */
        "columns": any[];
        /**
          * Grid data to display on table [{  'id': '5e7118ddce4b3d577956457f',  'age': 21,  'name': 'John',  'company': 'India',  'email': 'john@example.com',  'phone': '+1 (839) 560-3581',  'address': '326 Irving Street, Grimsley, Texas, 4048'  }]
         */
        "dataSource": any[];
        "keyField": string;
        "selectedRowKeys": string[];
        "selectionType": 'checkbox' | undefined;
    }
}
declare global {
    interface HTMLP4ButtonElement extends Components.P4Button, HTMLStencilElement {
    }
    var HTMLP4ButtonElement: {
        prototype: HTMLP4ButtonElement;
        new (): HTMLP4ButtonElement;
    };
    interface HTMLP4CheckboxElement extends Components.P4Checkbox, HTMLStencilElement {
    }
    var HTMLP4CheckboxElement: {
        prototype: HTMLP4CheckboxElement;
        new (): HTMLP4CheckboxElement;
    };
    interface HTMLP4IconElement extends Components.P4Icon, HTMLStencilElement {
    }
    var HTMLP4IconElement: {
        prototype: HTMLP4IconElement;
        new (): HTMLP4IconElement;
    };
    interface HTMLP4InputElement extends Components.P4Input, HTMLStencilElement {
    }
    var HTMLP4InputElement: {
        prototype: HTMLP4InputElement;
        new (): HTMLP4InputElement;
    };
    interface HTMLP4ItemElement extends Components.P4Item, HTMLStencilElement {
    }
    var HTMLP4ItemElement: {
        prototype: HTMLP4ItemElement;
        new (): HTMLP4ItemElement;
    };
    interface HTMLP4LabelElement extends Components.P4Label, HTMLStencilElement {
    }
    var HTMLP4LabelElement: {
        prototype: HTMLP4LabelElement;
        new (): HTMLP4LabelElement;
    };
    interface HTMLP4ScriptEditorElement extends Components.P4ScriptEditor, HTMLStencilElement {
    }
    var HTMLP4ScriptEditorElement: {
        prototype: HTMLP4ScriptEditorElement;
        new (): HTMLP4ScriptEditorElement;
    };
    interface HTMLP4SpinnerElement extends Components.P4Spinner, HTMLStencilElement {
    }
    var HTMLP4SpinnerElement: {
        prototype: HTMLP4SpinnerElement;
        new (): HTMLP4SpinnerElement;
    };
    interface HTMLP4TableElement extends Components.P4Table, HTMLStencilElement {
    }
    var HTMLP4TableElement: {
        prototype: HTMLP4TableElement;
        new (): HTMLP4TableElement;
    };
    interface HTMLElementTagNameMap {
        "p4-button": HTMLP4ButtonElement;
        "p4-checkbox": HTMLP4CheckboxElement;
        "p4-icon": HTMLP4IconElement;
        "p4-input": HTMLP4InputElement;
        "p4-item": HTMLP4ItemElement;
        "p4-label": HTMLP4LabelElement;
        "p4-script-editor": HTMLP4ScriptEditorElement;
        "p4-spinner": HTMLP4SpinnerElement;
        "p4-table": HTMLP4TableElement;
    }
}
declare namespace LocalJSX {
    interface P4Button {
        /**
          * If true, fits button width to its parent width. Defaults to `false`.
         */
        "block"?: boolean;
        /**
          * If true, the user cannot interact with the button. Defaults to `false`.
         */
        "disabled"?: boolean;
        "href"?: string;
        /**
          * Icon which will displayed on button. Possible values are bootstrap icon names.
         */
        "icon"?: string;
        /**
          * Icon position. Possible values are `"left"`, `"right"`. Defaults to `"left"`.
         */
        "iconPosition"?: 'left' | 'right';
        /**
          * On click of button a CustomEvent 'p4Click' will be triggered.
         */
        "onP4Click"?: (event: CustomEvent<any>) => void;
        "showLoader"?: boolean;
        /**
          * Button size. Possible values are `"sm"`, `"md"`, `"lg"`. Defaults to `"md"`.
         */
        "size"?: 'sm' | 'md' | 'lg';
        "target"?: '_self' | '_blank';
        /**
          * Button variants. Possible values are `"primary"`, `"secondary"`, `"ghost-primary"`, `"ghost-secondary"`. Defaults to `"primary"`.
         */
        "variant"?: 'primary' | 'secondary' | 'ghost-primary' | 'ghost-secondary';
    }
    interface P4Checkbox {
        /**
          * If true, the user cannot interact with the button. Defaults to `false`.
         */
        "disabled"?: boolean;
        /**
          * The checkbox label.
         */
        "label"?: string;
        /**
          * On change of input a CustomEvent 'p4Change' will be triggered. Event details contains parent event, oldValue, newValue of input.
         */
        "onP4Change"?: (event: CustomEvent<any>) => void;
        /**
          * If true, required icon is show. Defaults to `false`.
         */
        "required"?: boolean;
        /**
          * The button size. Possible values are: `"sm"`, `"md"`, `"lg"`. Defaults to `"md"`.
         */
        "size"?: 'sm' | 'md' | 'lg';
        /**
          * The input field value.
         */
        "value"?: boolean;
    }
    interface P4Icon {
        /**
          * The Icon size. Possible values are: `"sm"`, `"md"`, `"lg"`. Defaults to `"md"`.
         */
        "size"?: 'sm' | 'md' | 'lg' | string;
        "type"?: string;
    }
    interface P4Input {
        /**
          * Indicates whether the value of the control can be automatically completed by the browser.
         */
        "autocomplete"?: 'on' | 'off';
        /**
          * If `true`, a clear icon will appear in the input when there is a value. Clicking it clears the input.
         */
        "clearInput"?: boolean;
        /**
          * Set the amount of time, in milliseconds, to wait to trigger the `p4Change` event after each keystroke.
         */
        "debounce"?: number;
        /**
          * If true, the user cannot interact with the button. Defaults to `false`.
         */
        "disabled"?: boolean;
        /**
          * The input field name.
         */
        "name"?: string;
        /**
          * Emitted when the input loses focus.
         */
        "onP4Blur"?: (event: CustomEvent<any>) => void;
        /**
          * Emitted when the value has changed..
         */
        "onP4Change"?: (event: CustomEvent<any>) => void;
        /**
          * Emitted when the input has focus.
         */
        "onP4Focus"?: (event: CustomEvent<any>) => void;
        /**
          * Emitted when a keyboard input occurred.
         */
        "onP4Input"?: (event: CustomEvent<any>) => void;
        /**
          * The input field placeholder.
         */
        "placeholder"?: string;
        /**
          * If true, required icon is show. Defaults to `false`.
         */
        "required"?: boolean;
        /**
          * The input field size. Possible values are: `"sm"`, `"md"`, `"lg"`. Defaults to `"md"`.
         */
        "size"?: 'sm' | 'md' | 'lg';
        /**
          * The type of control to display. The default type is text.
         */
        "type"?: ('text' | 'password' | 'number' | 'email' | 'tel');
        /**
          * The input field value.
         */
        "value"?: string | number | null;
        /**
          * Input field variants to add additional styling Possible values are `"default"`, `"dashed"`. Defaults to `"default"`.
         */
        "variant"?: 'default' | 'dashed';
    }
    interface P4Item {
    }
    interface P4Label {
        "required"?: boolean;
    }
    interface P4ScriptEditor {
        /**
          * Set the amount of time, in milliseconds, to wait to trigger the `onChange` event after each keystroke.
         */
        "debounce"?: number;
        /**
          * If true, the user cannot interact with the button. Defaults to `false`.
         */
        "disabled"?: boolean;
        "language"?: 'javascript' | 'json' | 'html';
        "lineNumbers"?: 'off' | 'on';
        /**
          * The input field name.
         */
        "name"?: string;
        /**
          * Emitted when the value has changed..
         */
        "onP4Change"?: (event: CustomEvent<any>) => void;
        "theme"?: 'vs-light' | 'vs-dark';
        /**
          * The input field value.
         */
        "value"?: string;
    }
    interface P4Spinner {
        /**
          * The Icon size. Possible values are: `"sm"`, `"md"`, `"lg"`. Defaults to `"md"`.
         */
        "size"?: 'sm' | 'md' | 'lg' | string;
    }
    interface P4Table {
        /**
          * Grid columns configuration. [ {   "name":"name",   "label":"Name",   "width":300,   "fixed":true  }, {   "name":"age",   "label":"Age" } ]
         */
        "columns"?: any[];
        /**
          * Grid data to display on table [{  'id': '5e7118ddce4b3d577956457f',  'age': 21,  'name': 'John',  'company': 'India',  'email': 'john@example.com',  'phone': '+1 (839) 560-3581',  'address': '326 Irving Street, Grimsley, Texas, 4048'  }]
         */
        "dataSource"?: any[];
        "keyField"?: string;
        "onP4CellClick"?: (event: CustomEvent<any>) => void;
        "onP4SelectChange"?: (event: CustomEvent<any>) => void;
        "selectedRowKeys"?: string[];
        "selectionType"?: 'checkbox' | undefined;
    }
    interface IntrinsicElements {
        "p4-button": P4Button;
        "p4-checkbox": P4Checkbox;
        "p4-icon": P4Icon;
        "p4-input": P4Input;
        "p4-item": P4Item;
        "p4-label": P4Label;
        "p4-script-editor": P4ScriptEditor;
        "p4-spinner": P4Spinner;
        "p4-table": P4Table;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "p4-button": LocalJSX.P4Button & JSXBase.HTMLAttributes<HTMLP4ButtonElement>;
            "p4-checkbox": LocalJSX.P4Checkbox & JSXBase.HTMLAttributes<HTMLP4CheckboxElement>;
            "p4-icon": LocalJSX.P4Icon & JSXBase.HTMLAttributes<HTMLP4IconElement>;
            "p4-input": LocalJSX.P4Input & JSXBase.HTMLAttributes<HTMLP4InputElement>;
            "p4-item": LocalJSX.P4Item & JSXBase.HTMLAttributes<HTMLP4ItemElement>;
            "p4-label": LocalJSX.P4Label & JSXBase.HTMLAttributes<HTMLP4LabelElement>;
            "p4-script-editor": LocalJSX.P4ScriptEditor & JSXBase.HTMLAttributes<HTMLP4ScriptEditorElement>;
            "p4-spinner": LocalJSX.P4Spinner & JSXBase.HTMLAttributes<HTMLP4SpinnerElement>;
            "p4-table": LocalJSX.P4Table & JSXBase.HTMLAttributes<HTMLP4TableElement>;
        }
    }
}

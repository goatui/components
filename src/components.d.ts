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
        "disabledReason": string;
        "href": string;
        /**
          * Icon which will displayed on button. Possible values are bootstrap icon names.
         */
        "icon": string;
        /**
          * Icon position.
         */
        "iconEnd": boolean;
        "showLoader": boolean;
        /**
          * Button size. Possible values are `"sm"`, `"md"`, `"lg"`. Defaults to `"md"`.
         */
        "size": 'sm' | 'md' | 'lg';
        "target": '_self' | '_blank';
        /**
          * Button variants. Possible values are `"primary"`, `"secondary"`, `"danger"`, `"ghost-primary"`, `"ghost-secondary"`. Defaults to `"primary"`.
         */
        "variant": 'primary' | 'secondary' | 'danger' | 'ghost-primary' | 'ghost-secondary';
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
          * Sets blur on the native `input` in `p4-input`. Use this method instead of the global `input.blur()`.
         */
        "setBlur": () => Promise<void>;
        /**
          * Sets focus on the native `input` in `p4-input`. Use this method instead of the global `input.focus()`.
         */
        "setFocus": () => Promise<void>;
        /**
          * The button size. Possible values are: `"sm"`, `"md"`, `"lg"`. Defaults to `"md"`.
         */
        "size": 'sm' | 'md' | 'lg';
        /**
          * The input field value.
         */
        "value": boolean;
    }
    interface P4Dropdown {
        "data": any[];
        /**
          * If true, the user cannot interact with the button. Defaults to `false`.
         */
        "disabled": boolean;
        "isOpen": boolean;
        "itemVariant": any;
        "listVariant": any;
        "position": 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
        "setFocus": () => Promise<void>;
        "showLoader": boolean;
        /**
          * The button size. Possible values are: `"sm"`, `"md"`, `"lg"`. Defaults to `"md"`.
         */
        "size": 'sm' | 'md' | 'lg';
    }
    interface P4FieldGroup {
    }
    interface P4Heading {
        "size": 'md' | 'sm';
        "type": 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
        "weight": 'semi-bold' | 'bold' | 'extra-bold';
    }
    interface P4Icon {
        /**
          * The Icon size. Possible values are: `"sm"`, `"md"`, `"lg"`. Defaults to `"md"`.
         */
        "size": 'sm' | 'md' | 'lg' | string;
        "type": string;
    }
    interface P4Input {
        "actions": any[];
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
          * Sets blur on the native `input` in `p4-input`. Use this method instead of the global `input.blur()`.
         */
        "setBlur": () => Promise<void>;
        /**
          * Sets focus on the native `input` in `p4-input`. Use this method instead of the global `input.focus()`.
         */
        "setFocus": () => Promise<void>;
        /**
          * The input field size. Possible values are: `"sm"`, `"md"`, `"lg"`. Defaults to `"md"`.
         */
        "size": 'sm' | 'md' | 'lg';
        /**
          * The type of control to display. Possible values are: `"text"`, `"password"`, `"number"`, `"email"`, `"tel"`. Defaults to `"text"`.
         */
        "type": ('text' | 'password' | 'number' | 'email' | 'tel');
        /**
          * The input field value.
         */
        "value"?: string | number | null;
    }
    interface P4Label {
        "required": boolean;
    }
    interface P4List {
        "data": any[];
        "emptyState": any;
        "itemVariant": 'default' | 'icon' | 'img' | 'caption' | 'icon-caption' | 'img-caption';
        /**
          * Sets focus on the first item of list.
         */
        "setFocus": (previousItem?: boolean) => Promise<void>;
        "showLoader": boolean;
        "value"?: string | number;
        "variant": 'default' | 'group';
    }
    interface P4Paragraph {
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
    interface P4Select {
        "actions": any[];
        /**
          * If `true`, a clear icon will appear in the input when there is a value. Clicking it clears the input.
         */
        "clearInput": boolean;
        "config": any;
        "data": any;
        /**
          * If true, the user cannot interact with the button. Defaults to `false`.
         */
        "disabled": boolean;
        "isOpen": boolean;
        "managed": boolean;
        /**
          * The input field name.
         */
        "name": string;
        /**
          * The input field placeholder.
         */
        "placeholder": string;
        "position": 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
        /**
          * If true, required icon is show. Defaults to `false`.
         */
        "required": boolean;
        /**
          * Sets focus on the native `input` in `ion-input`. Use this method instead of the global `input.focus()`.
         */
        "setFocus": () => Promise<void>;
        "showLoader": boolean;
        /**
          * The button size. Possible values are: `"sm"`, `"md"`, `"lg"`. Defaults to `"md"`.
         */
        "size": 'sm' | 'md' | 'lg';
        /**
          * Select type Possible values are `"select"`, `"typeahead"`. Defaults to `"select"`.
         */
        "type": 'select' | 'typeahead';
        /**
          * The input field value.
         */
        "value"?: string | number;
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
    interface P4Textarea {
        "actions": any[];
        /**
          * Set the amount of time, in milliseconds, to wait to trigger the `p4:change` event after each keystroke.
         */
        "debounce": number;
        /**
          * If true, the user cannot interact with the button. Defaults to `false`.
         */
        "disabled": boolean;
        /**
          * If true, the form will be in inline format. Defaults to `false`.
         */
        "inline": boolean;
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
          * The button size. Possible values are: `"sm"`, `"md"`, `"lg"`. Defaults to `"md"`.
         */
        "size": 'sm' | 'md' | 'lg';
        /**
          * The input field value.
         */
        "value": string;
        /**
          * Button variants Possible values are `"default"`, `"dashed"`. Defaults to `"default"`.
         */
        "variant": 'default' | 'dashed';
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
    interface HTMLP4DropdownElement extends Components.P4Dropdown, HTMLStencilElement {
    }
    var HTMLP4DropdownElement: {
        prototype: HTMLP4DropdownElement;
        new (): HTMLP4DropdownElement;
    };
    interface HTMLP4FieldGroupElement extends Components.P4FieldGroup, HTMLStencilElement {
    }
    var HTMLP4FieldGroupElement: {
        prototype: HTMLP4FieldGroupElement;
        new (): HTMLP4FieldGroupElement;
    };
    interface HTMLP4HeadingElement extends Components.P4Heading, HTMLStencilElement {
    }
    var HTMLP4HeadingElement: {
        prototype: HTMLP4HeadingElement;
        new (): HTMLP4HeadingElement;
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
    interface HTMLP4LabelElement extends Components.P4Label, HTMLStencilElement {
    }
    var HTMLP4LabelElement: {
        prototype: HTMLP4LabelElement;
        new (): HTMLP4LabelElement;
    };
    interface HTMLP4ListElement extends Components.P4List, HTMLStencilElement {
    }
    var HTMLP4ListElement: {
        prototype: HTMLP4ListElement;
        new (): HTMLP4ListElement;
    };
    interface HTMLP4ParagraphElement extends Components.P4Paragraph, HTMLStencilElement {
    }
    var HTMLP4ParagraphElement: {
        prototype: HTMLP4ParagraphElement;
        new (): HTMLP4ParagraphElement;
    };
    interface HTMLP4ScriptEditorElement extends Components.P4ScriptEditor, HTMLStencilElement {
    }
    var HTMLP4ScriptEditorElement: {
        prototype: HTMLP4ScriptEditorElement;
        new (): HTMLP4ScriptEditorElement;
    };
    interface HTMLP4SelectElement extends Components.P4Select, HTMLStencilElement {
    }
    var HTMLP4SelectElement: {
        prototype: HTMLP4SelectElement;
        new (): HTMLP4SelectElement;
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
    interface HTMLP4TextareaElement extends Components.P4Textarea, HTMLStencilElement {
    }
    var HTMLP4TextareaElement: {
        prototype: HTMLP4TextareaElement;
        new (): HTMLP4TextareaElement;
    };
    interface HTMLElementTagNameMap {
        "p4-button": HTMLP4ButtonElement;
        "p4-checkbox": HTMLP4CheckboxElement;
        "p4-dropdown": HTMLP4DropdownElement;
        "p4-field-group": HTMLP4FieldGroupElement;
        "p4-heading": HTMLP4HeadingElement;
        "p4-icon": HTMLP4IconElement;
        "p4-input": HTMLP4InputElement;
        "p4-label": HTMLP4LabelElement;
        "p4-list": HTMLP4ListElement;
        "p4-paragraph": HTMLP4ParagraphElement;
        "p4-script-editor": HTMLP4ScriptEditorElement;
        "p4-select": HTMLP4SelectElement;
        "p4-spinner": HTMLP4SpinnerElement;
        "p4-table": HTMLP4TableElement;
        "p4-textarea": HTMLP4TextareaElement;
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
        "disabledReason"?: string;
        "href"?: string;
        /**
          * Icon which will displayed on button. Possible values are bootstrap icon names.
         */
        "icon"?: string;
        /**
          * Icon position.
         */
        "iconEnd"?: boolean;
        /**
          * On click of button, a CustomEvent 'p4:click' will be triggered.
         */
        "onP4:click"?: (event: CustomEvent<any>) => void;
        "showLoader"?: boolean;
        /**
          * Button size. Possible values are `"sm"`, `"md"`, `"lg"`. Defaults to `"md"`.
         */
        "size"?: 'sm' | 'md' | 'lg';
        "target"?: '_self' | '_blank';
        /**
          * Button variants. Possible values are `"primary"`, `"secondary"`, `"danger"`, `"ghost-primary"`, `"ghost-secondary"`. Defaults to `"primary"`.
         */
        "variant"?: 'primary' | 'secondary' | 'danger' | 'ghost-primary' | 'ghost-secondary';
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
          * Emitted when the input loses focus.
         */
        "onP4:blur"?: (event: CustomEvent<any>) => void;
        /**
          * On change of input a CustomEvent 'p4:change' will be triggered. Event details contains parent event, oldValue, newValue of input.
         */
        "onP4:change"?: (event: CustomEvent<any>) => void;
        /**
          * Emitted when the input has focus.
         */
        "onP4:focus"?: (event: CustomEvent<any>) => void;
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
    interface P4Dropdown {
        "data"?: any[];
        /**
          * If true, the user cannot interact with the button. Defaults to `false`.
         */
        "disabled"?: boolean;
        "isOpen"?: boolean;
        "itemVariant"?: any;
        "listVariant"?: any;
        /**
          * Emitted when the item is clicked.
         */
        "onP4:dropdown-item-click"?: (event: CustomEvent<any>) => void;
        "position"?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
        "showLoader"?: boolean;
        /**
          * The button size. Possible values are: `"sm"`, `"md"`, `"lg"`. Defaults to `"md"`.
         */
        "size"?: 'sm' | 'md' | 'lg';
    }
    interface P4FieldGroup {
    }
    interface P4Heading {
        "size"?: 'md' | 'sm';
        "type"?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
        "weight"?: 'semi-bold' | 'bold' | 'extra-bold';
    }
    interface P4Icon {
        /**
          * The Icon size. Possible values are: `"sm"`, `"md"`, `"lg"`. Defaults to `"md"`.
         */
        "size"?: 'sm' | 'md' | 'lg' | string;
        "type"?: string;
    }
    interface P4Input {
        "actions"?: any[];
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
          * Emitted when the action button is clicked.
         */
        "onP4:action-click"?: (event: CustomEvent<any>) => void;
        /**
          * Emitted when the input loses focus.
         */
        "onP4:blur"?: (event: CustomEvent<any>) => void;
        /**
          * Emitted when the value has changed.
         */
        "onP4:change"?: (event: CustomEvent<any>) => void;
        /**
          * Emitted when the input has focus.
         */
        "onP4:focus"?: (event: CustomEvent<any>) => void;
        /**
          * Emitted when a keyboard input occurred.
         */
        "onP4:input"?: (event: CustomEvent<any>) => void;
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
          * The type of control to display. Possible values are: `"text"`, `"password"`, `"number"`, `"email"`, `"tel"`. Defaults to `"text"`.
         */
        "type"?: ('text' | 'password' | 'number' | 'email' | 'tel');
        /**
          * The input field value.
         */
        "value"?: string | number | null;
    }
    interface P4Label {
        "required"?: boolean;
    }
    interface P4List {
        "data"?: any[];
        "emptyState"?: any;
        "itemVariant"?: 'default' | 'icon' | 'img' | 'caption' | 'icon-caption' | 'img-caption';
        /**
          * Emitted when the item is clicked.
         */
        "onP4:item-click"?: (event: CustomEvent<any>) => void;
        "showLoader"?: boolean;
        "value"?: string | number;
        "variant"?: 'default' | 'group';
    }
    interface P4Paragraph {
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
        "onP4:change"?: (event: CustomEvent<any>) => void;
        "theme"?: 'vs-light' | 'vs-dark';
        /**
          * The input field value.
         */
        "value"?: string;
    }
    interface P4Select {
        "actions"?: any[];
        /**
          * If `true`, a clear icon will appear in the input when there is a value. Clicking it clears the input.
         */
        "clearInput"?: boolean;
        "config"?: any;
        "data"?: any;
        /**
          * If true, the user cannot interact with the button. Defaults to `false`.
         */
        "disabled"?: boolean;
        "isOpen"?: boolean;
        "managed"?: boolean;
        /**
          * The input field name.
         */
        "name"?: string;
        /**
          * Emitted when the action button is clicked..
         */
        "onP4:action-click"?: (event: CustomEvent<any>) => void;
        /**
          * Emitted when the value has changed..
         */
        "onP4:change"?: (event: CustomEvent<any>) => void;
        /**
          * Emitted when a keyboard input occurred.
         */
        "onP4:input"?: (event: CustomEvent<any>) => void;
        /**
          * The input field placeholder.
         */
        "placeholder"?: string;
        "position"?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
        /**
          * If true, required icon is show. Defaults to `false`.
         */
        "required"?: boolean;
        "showLoader"?: boolean;
        /**
          * The button size. Possible values are: `"sm"`, `"md"`, `"lg"`. Defaults to `"md"`.
         */
        "size"?: 'sm' | 'md' | 'lg';
        /**
          * Select type Possible values are `"select"`, `"typeahead"`. Defaults to `"select"`.
         */
        "type"?: 'select' | 'typeahead';
        /**
          * The input field value.
         */
        "value"?: string | number;
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
        "onP4:table-cell-click"?: (event: CustomEvent<any>) => void;
        "onP4:table-select-change"?: (event: CustomEvent<any>) => void;
        "selectedRowKeys"?: string[];
        "selectionType"?: 'checkbox' | undefined;
    }
    interface P4Textarea {
        "actions"?: any[];
        /**
          * Set the amount of time, in milliseconds, to wait to trigger the `p4:change` event after each keystroke.
         */
        "debounce"?: number;
        /**
          * If true, the user cannot interact with the button. Defaults to `false`.
         */
        "disabled"?: boolean;
        /**
          * If true, the form will be in inline format. Defaults to `false`.
         */
        "inline"?: boolean;
        /**
          * The input field name.
         */
        "name"?: string;
        /**
          * Emitted when the action button is clicked.
         */
        "onP4:action-click"?: (event: CustomEvent<any>) => void;
        /**
          * Emitted when the input loses focus.
         */
        "onP4:blur"?: (event: CustomEvent<any>) => void;
        /**
          * Emitted when the value has changed..
         */
        "onP4:change"?: (event: CustomEvent<any>) => void;
        /**
          * Emitted when the input has focus.
         */
        "onP4:focus"?: (event: CustomEvent<any>) => void;
        /**
          * Emitted when a keyboard input occurred.
         */
        "onP4:input"?: (event: CustomEvent<any>) => void;
        /**
          * The input field placeholder.
         */
        "placeholder"?: string;
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
        "value"?: string;
        /**
          * Button variants Possible values are `"default"`, `"dashed"`. Defaults to `"default"`.
         */
        "variant"?: 'default' | 'dashed';
    }
    interface IntrinsicElements {
        "p4-button": P4Button;
        "p4-checkbox": P4Checkbox;
        "p4-dropdown": P4Dropdown;
        "p4-field-group": P4FieldGroup;
        "p4-heading": P4Heading;
        "p4-icon": P4Icon;
        "p4-input": P4Input;
        "p4-label": P4Label;
        "p4-list": P4List;
        "p4-paragraph": P4Paragraph;
        "p4-script-editor": P4ScriptEditor;
        "p4-select": P4Select;
        "p4-spinner": P4Spinner;
        "p4-table": P4Table;
        "p4-textarea": P4Textarea;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "p4-button": LocalJSX.P4Button & JSXBase.HTMLAttributes<HTMLP4ButtonElement>;
            "p4-checkbox": LocalJSX.P4Checkbox & JSXBase.HTMLAttributes<HTMLP4CheckboxElement>;
            "p4-dropdown": LocalJSX.P4Dropdown & JSXBase.HTMLAttributes<HTMLP4DropdownElement>;
            "p4-field-group": LocalJSX.P4FieldGroup & JSXBase.HTMLAttributes<HTMLP4FieldGroupElement>;
            "p4-heading": LocalJSX.P4Heading & JSXBase.HTMLAttributes<HTMLP4HeadingElement>;
            "p4-icon": LocalJSX.P4Icon & JSXBase.HTMLAttributes<HTMLP4IconElement>;
            "p4-input": LocalJSX.P4Input & JSXBase.HTMLAttributes<HTMLP4InputElement>;
            "p4-label": LocalJSX.P4Label & JSXBase.HTMLAttributes<HTMLP4LabelElement>;
            "p4-list": LocalJSX.P4List & JSXBase.HTMLAttributes<HTMLP4ListElement>;
            "p4-paragraph": LocalJSX.P4Paragraph & JSXBase.HTMLAttributes<HTMLP4ParagraphElement>;
            "p4-script-editor": LocalJSX.P4ScriptEditor & JSXBase.HTMLAttributes<HTMLP4ScriptEditorElement>;
            "p4-select": LocalJSX.P4Select & JSXBase.HTMLAttributes<HTMLP4SelectElement>;
            "p4-spinner": LocalJSX.P4Spinner & JSXBase.HTMLAttributes<HTMLP4SpinnerElement>;
            "p4-table": LocalJSX.P4Table & JSXBase.HTMLAttributes<HTMLP4TableElement>;
            "p4-textarea": LocalJSX.P4Textarea & JSXBase.HTMLAttributes<HTMLP4TextareaElement>;
        }
    }
}

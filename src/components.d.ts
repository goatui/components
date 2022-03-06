/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface GoatAlert {
        "dismissible": boolean;
        "state": 'success' | 'error' | 'info' | 'warning';
    }
    interface GoatAvatar {
        "name": string;
        /**
          * Avatar size.
         */
        "size": string;
        "src": string;
    }
    interface GoatButton {
        /**
          * If true, fits button width to its parent width. Defaults to `false`.
         */
        "block": boolean;
        /**
          * Color variants.
         */
        "color": 'primary' | 'secondary' | 'info' | 'success' | 'error' | 'warning';
        "configAria": any;
        /**
          * If true, the user cannot interact with the button. Defaults to `false`.
         */
        "disabled": boolean;
        "disabledReason": string;
        /**
          * Hyperlink to navigate to on click.
         */
        "href": string;
        /**
          * Icon which will displayed on button. Possible values are bootstrap icon names.
         */
        "icon": string;
        /**
          * Icon position.
         */
        "iconEnd": boolean;
        /**
          * Button selection state.
         */
        "selected": boolean;
        /**
          * Show loader.
         */
        "showLoader": boolean;
        /**
          * Button size. Possible values are `"sm"`, `"md"`, `"lg"`, `"xl"`, `"xxl"`. Defaults to `"md"`.
         */
        "size": 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
        /**
          * Sets or retrieves the window or frame at which to target content.
         */
        "target": string;
        "triggerClick": () => Promise<void>;
        "variant": 'default' | 'light' | 'outline' | 'link';
    }
    interface GoatCard {
        "shadowLevel": 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | undefined;
    }
    interface GoatCheckbox {
        "configAria": any;
        /**
          * If true, the user cannot interact with the button. Defaults to `false`.
         */
        "disabled": boolean;
        "getGid": () => Promise<string>;
        "intermediate": boolean;
        /**
          * The checkbox label.
         */
        "label": string;
        /**
          * The input field name.
         */
        "name": string;
        /**
          * If true, required icon is show. Defaults to `false`.
         */
        "required": boolean;
        "rounded": boolean;
        /**
          * Sets blur on the native `input` in `goat-input`. Use this method instead of the global `input.blur()`.
         */
        "setBlur": () => Promise<void>;
        /**
          * Sets focus on the native `input` in `goat-input`. Use this method instead of the global `input.focus()`.
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
    interface GoatCodeEditor {
        /**
          * Set the amount of time, in milliseconds, to wait to trigger the `onChange` event after each keystroke.
         */
        "debounce": number;
        /**
          * If true, the user cannot interact with the button. Defaults to `false`.
         */
        "disabled": boolean;
        "getGid": () => Promise<string>;
        "language": 'javascript' | 'json' | 'html';
        "lineNumbers": 'off' | 'on';
        /**
          * The input field name.
         */
        "name": string;
        /**
          * If true, required icon is show. Defaults to `false`.
         */
        "required": boolean;
        /**
          * Sets blur on the native `input` in `goat-input`. Use this method instead of the global `input.blur()`.
         */
        "setBlur": () => Promise<void>;
        /**
          * Sets focus on the native `input` in `goat-input`. Use this method instead of the global `input.focus()`.
         */
        "setFocus": () => Promise<void>;
        "theme": 'vs-light' | 'vs-dark';
        /**
          * The input field value.
         */
        "value": string;
    }
    interface GoatDivider {
        "vertical": boolean;
    }
    interface GoatDropdown {
        /**
          * If true, the user cannot interact with the button. Defaults to `false`.
         */
        "disabled": boolean;
        "isOpen": boolean;
        "positions": string;
        "setFocus": () => Promise<void>;
        /**
          * The button size. Possible values are: `"sm"`, `"md"`, `"lg"`. Defaults to `"md"`.
         */
        "size": 'sm' | 'md' | 'lg';
    }
    interface GoatEmptyState {
        "illustration": 'no-data';
        "vertical": boolean;
    }
    interface GoatFlowDesigner {
        "activities": any[];
        "disabled": boolean;
    }
    interface GoatFormControl {
        /**
          * The caption for the form control.
         */
        "caption": string;
        "error": string;
        /**
          * The label for the form control.
         */
        "label": string;
        /**
          * Whether the form control is required.
         */
        "required": boolean;
        "success": string;
        "warning": string;
    }
    interface GoatIcon {
        "shade": 'primary' | 'secondary' | 'tertiary';
        /**
          * The Icon size. Possible values are: `"sm"`, `"md"`, `"lg"`, `"xl"` and size in pixel. Defaults to `"md"`.
         */
        "size": 'sm' | 'md' | 'lg' | 'xl' | string;
        "type": string;
    }
    interface GoatInput {
        /**
          * Indicates whether the value of the control can be automatically completed by the browser.
         */
        "autocomplete": 'on' | 'off';
        /**
          * If `true`, a clear icon will appear in the input when there is a value. Clicking it clears the input.
         */
        "clearable": boolean;
        "configAria": any;
        /**
          * Set the amount of time, in milliseconds, to wait to trigger the `goatChange` event after each keystroke.
         */
        "debounce": number;
        /**
          * If true, the user cannot interact with the button. Defaults to `false`.
         */
        "disabled": boolean;
        "getGid": () => Promise<string>;
        /**
          * The input field name.
         */
        "name": string;
        /**
          * The input field placeholder.
         */
        "placeholder": string;
        /**
          * If true, the user cannot interact with the button. Defaults to `false`.
         */
        "readonly": boolean;
        /**
          * If true, required icon is show. Defaults to `false`.
         */
        "required": boolean;
        /**
          * Sets blur on the native `input` in `goat-input`. Use this method instead of the global `input.blur()`.
         */
        "setBlur": () => Promise<void>;
        /**
          * Sets focus on the native `input` in `goat-input`. Use this method instead of the global `input.focus()`.
         */
        "setFocus": () => Promise<void>;
        /**
          * The input field size. Possible values are: `"sm"`, `"md"`, `"lg"`. Defaults to `"md"`.
         */
        "size": 'sm' | 'md' | 'lg';
        /**
          * The input state. Possible values are: `"success"`, `"error"`, `"warning"`, 'default'. Defaults to `"default"`.
         */
        "state": 'success' | 'error' | 'warning' | 'default';
        /**
          * The type of control to display. Possible values are: `"text"`, `"password"`, `"number"`, `"email"`, `"tel"`. Defaults to `"text"`.
         */
        "type": ('text' | 'password' | 'number' | 'email' | 'tel');
        /**
          * The input field value.
         */
        "value"?: string | number | null;
    }
    interface GoatLink {
        /**
          * Color variants Possible values are `"primary"`, `"success"`, `"warning"`, `"error"`, `"info"`, `"inherit"`. Defaults to `"inherit"`.
         */
        "color": 'primary' | 'success' | 'warning' | 'error' | 'info' | 'inherit';
        "decoration": boolean;
        /**
          * Hyperlink to navigate to on click.
         */
        "href": string;
        /**
          * Sets or retrieves the window or frame at which to target content.
         */
        "target": string;
        "triggerClick": () => Promise<void>;
    }
    interface GoatMenu {
        "empty": boolean;
        "emptyState": string;
        /**
          * Sets focus on first menu item. Use this method instead of the global `element.focus()`.
         */
        "setFocus": () => Promise<void>;
        "showLoader": boolean;
        "value"?: string | number;
    }
    interface GoatMenuItem {
        "color": 'primary' | 'error' | 'warning' | 'success' | 'neutral';
        /**
          * If true, the user cannot interact with the button. Defaults to `false`.
         */
        "disabled": boolean;
        /**
          * Menu item selection state.
         */
        "selected": boolean;
        /**
          * Sets blur on the native `input` in `goat-input`. Use this method instead of the global `input.blur()`.
         */
        "setBlur": () => Promise<void>;
        /**
          * Sets focus on the native `input` in `goat-input`. Use this method instead of the global `input.focus()`.
         */
        "setFocus": () => Promise<void>;
        /**
          * The menu item value.
         */
        "value"?: string | number | null;
    }
    interface GoatSelect {
        /**
          * If `true`, a clear icon will appear in the input when there is a value. Clicking it clears the input.
         */
        "clearable": boolean;
        "configAria": any;
        /**
          * Set the amount of time, in milliseconds, to wait to trigger the `goatChange` event after each keystroke.
         */
        "debounce": number;
        /**
          * If true, the user cannot interact with the button. Defaults to `false`.
         */
        "disabled": boolean;
        "getGid": () => Promise<string>;
        "isOpen": boolean;
        /**
          * [{   label: 'Shivaji Varma',   value: 'shivaji-varma' }]
         */
        "items": any;
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
          * Search type Possible values are `"none"`, `"initial"`, `"contains"`, `"managed"`. Defaults to `"none"`.
         */
        "search": 'none' | 'initial' | 'contains' | 'managed';
        /**
          * Sets blur on the native `input` in `goat-input`. Use this method instead of the global `input.blur()`.
         */
        "setBlur": () => Promise<void>;
        /**
          * Sets focus on the native `input` in `ion-input`. Use this method instead of the global `input.focus()`.
         */
        "setFocus": () => Promise<void>;
        "showLoader": boolean;
        /**
          * The select input size. Possible values are: `"sm"`, `"md"`, `"lg"`. Defaults to `"md"`.
         */
        "size": 'sm' | 'md' | 'lg';
        /**
          * The input state. Possible values are: `"success"`, `"error"`, `"warning"`, 'default'. Defaults to `"default"`.
         */
        "state": 'success' | 'error' | 'warning' | 'default';
        /**
          * The input field value.
         */
        "value"?: string | number;
    }
    interface GoatSpinner {
        /**
          * The Icon size. Possible values are: `"sm"`, `"md"`, `"lg"`, `"xl"` and size in pixel. Defaults to `"md"`.
         */
        "size": 'sm' | 'md' | 'lg' | 'xl' | string;
    }
    interface GoatTable {
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
    interface GoatText {
        /**
          * The heading level.
         */
        "level": 1 | 2 | 3 | 4 | 5;
        "shade": 'primary' | 'secondary' | 'tertiary';
        /**
          * Text size.
         */
        "size": 'xs' | 'sm' | 'md' | 'lg' | 'xl';
        "type": 'heading' | 'paragraph' | 'text';
    }
    interface GoatTextarea {
        /**
          * If `true`, a clear icon will appear in the input when there is a value. Clicking it clears the input.
         */
        "clearable": boolean;
        "configAria": any;
        /**
          * Set the amount of time, in milliseconds, to wait to trigger the `goat:change` event after each keystroke.
         */
        "debounce": number;
        /**
          * If true, the user cannot interact with the button. Defaults to `false`.
         */
        "disabled": boolean;
        "getGid": () => Promise<string>;
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
          * The input state. Possible values are: `"success"`, `"error"`, `"warning"`, 'default'. Defaults to `"default"`.
         */
        "state": 'success' | 'error' | 'warning' | 'default';
        /**
          * The input field value.
         */
        "value": string;
    }
}
declare global {
    interface HTMLGoatAlertElement extends Components.GoatAlert, HTMLStencilElement {
    }
    var HTMLGoatAlertElement: {
        prototype: HTMLGoatAlertElement;
        new (): HTMLGoatAlertElement;
    };
    interface HTMLGoatAvatarElement extends Components.GoatAvatar, HTMLStencilElement {
    }
    var HTMLGoatAvatarElement: {
        prototype: HTMLGoatAvatarElement;
        new (): HTMLGoatAvatarElement;
    };
    interface HTMLGoatButtonElement extends Components.GoatButton, HTMLStencilElement {
    }
    var HTMLGoatButtonElement: {
        prototype: HTMLGoatButtonElement;
        new (): HTMLGoatButtonElement;
    };
    interface HTMLGoatCardElement extends Components.GoatCard, HTMLStencilElement {
    }
    var HTMLGoatCardElement: {
        prototype: HTMLGoatCardElement;
        new (): HTMLGoatCardElement;
    };
    interface HTMLGoatCheckboxElement extends Components.GoatCheckbox, HTMLStencilElement {
    }
    var HTMLGoatCheckboxElement: {
        prototype: HTMLGoatCheckboxElement;
        new (): HTMLGoatCheckboxElement;
    };
    interface HTMLGoatCodeEditorElement extends Components.GoatCodeEditor, HTMLStencilElement {
    }
    var HTMLGoatCodeEditorElement: {
        prototype: HTMLGoatCodeEditorElement;
        new (): HTMLGoatCodeEditorElement;
    };
    interface HTMLGoatDividerElement extends Components.GoatDivider, HTMLStencilElement {
    }
    var HTMLGoatDividerElement: {
        prototype: HTMLGoatDividerElement;
        new (): HTMLGoatDividerElement;
    };
    interface HTMLGoatDropdownElement extends Components.GoatDropdown, HTMLStencilElement {
    }
    var HTMLGoatDropdownElement: {
        prototype: HTMLGoatDropdownElement;
        new (): HTMLGoatDropdownElement;
    };
    interface HTMLGoatEmptyStateElement extends Components.GoatEmptyState, HTMLStencilElement {
    }
    var HTMLGoatEmptyStateElement: {
        prototype: HTMLGoatEmptyStateElement;
        new (): HTMLGoatEmptyStateElement;
    };
    interface HTMLGoatFlowDesignerElement extends Components.GoatFlowDesigner, HTMLStencilElement {
    }
    var HTMLGoatFlowDesignerElement: {
        prototype: HTMLGoatFlowDesignerElement;
        new (): HTMLGoatFlowDesignerElement;
    };
    interface HTMLGoatFormControlElement extends Components.GoatFormControl, HTMLStencilElement {
    }
    var HTMLGoatFormControlElement: {
        prototype: HTMLGoatFormControlElement;
        new (): HTMLGoatFormControlElement;
    };
    interface HTMLGoatIconElement extends Components.GoatIcon, HTMLStencilElement {
    }
    var HTMLGoatIconElement: {
        prototype: HTMLGoatIconElement;
        new (): HTMLGoatIconElement;
    };
    interface HTMLGoatInputElement extends Components.GoatInput, HTMLStencilElement {
    }
    var HTMLGoatInputElement: {
        prototype: HTMLGoatInputElement;
        new (): HTMLGoatInputElement;
    };
    interface HTMLGoatLinkElement extends Components.GoatLink, HTMLStencilElement {
    }
    var HTMLGoatLinkElement: {
        prototype: HTMLGoatLinkElement;
        new (): HTMLGoatLinkElement;
    };
    interface HTMLGoatMenuElement extends Components.GoatMenu, HTMLStencilElement {
    }
    var HTMLGoatMenuElement: {
        prototype: HTMLGoatMenuElement;
        new (): HTMLGoatMenuElement;
    };
    interface HTMLGoatMenuItemElement extends Components.GoatMenuItem, HTMLStencilElement {
    }
    var HTMLGoatMenuItemElement: {
        prototype: HTMLGoatMenuItemElement;
        new (): HTMLGoatMenuItemElement;
    };
    interface HTMLGoatSelectElement extends Components.GoatSelect, HTMLStencilElement {
    }
    var HTMLGoatSelectElement: {
        prototype: HTMLGoatSelectElement;
        new (): HTMLGoatSelectElement;
    };
    interface HTMLGoatSpinnerElement extends Components.GoatSpinner, HTMLStencilElement {
    }
    var HTMLGoatSpinnerElement: {
        prototype: HTMLGoatSpinnerElement;
        new (): HTMLGoatSpinnerElement;
    };
    interface HTMLGoatTableElement extends Components.GoatTable, HTMLStencilElement {
    }
    var HTMLGoatTableElement: {
        prototype: HTMLGoatTableElement;
        new (): HTMLGoatTableElement;
    };
    interface HTMLGoatTextElement extends Components.GoatText, HTMLStencilElement {
    }
    var HTMLGoatTextElement: {
        prototype: HTMLGoatTextElement;
        new (): HTMLGoatTextElement;
    };
    interface HTMLGoatTextareaElement extends Components.GoatTextarea, HTMLStencilElement {
    }
    var HTMLGoatTextareaElement: {
        prototype: HTMLGoatTextareaElement;
        new (): HTMLGoatTextareaElement;
    };
    interface HTMLElementTagNameMap {
        "goat-alert": HTMLGoatAlertElement;
        "goat-avatar": HTMLGoatAvatarElement;
        "goat-button": HTMLGoatButtonElement;
        "goat-card": HTMLGoatCardElement;
        "goat-checkbox": HTMLGoatCheckboxElement;
        "goat-code-editor": HTMLGoatCodeEditorElement;
        "goat-divider": HTMLGoatDividerElement;
        "goat-dropdown": HTMLGoatDropdownElement;
        "goat-empty-state": HTMLGoatEmptyStateElement;
        "goat-flow-designer": HTMLGoatFlowDesignerElement;
        "goat-form-control": HTMLGoatFormControlElement;
        "goat-icon": HTMLGoatIconElement;
        "goat-input": HTMLGoatInputElement;
        "goat-link": HTMLGoatLinkElement;
        "goat-menu": HTMLGoatMenuElement;
        "goat-menu-item": HTMLGoatMenuItemElement;
        "goat-select": HTMLGoatSelectElement;
        "goat-spinner": HTMLGoatSpinnerElement;
        "goat-table": HTMLGoatTableElement;
        "goat-text": HTMLGoatTextElement;
        "goat-textarea": HTMLGoatTextareaElement;
    }
}
declare namespace LocalJSX {
    interface GoatAlert {
        "dismissible"?: boolean;
        "onGoat:dismiss"?: (event: CustomEvent<any>) => void;
        "state"?: 'success' | 'error' | 'info' | 'warning';
    }
    interface GoatAvatar {
        "name"?: string;
        /**
          * Avatar size.
         */
        "size"?: string;
        "src"?: string;
    }
    interface GoatButton {
        /**
          * If true, fits button width to its parent width. Defaults to `false`.
         */
        "block"?: boolean;
        /**
          * Color variants.
         */
        "color"?: 'primary' | 'secondary' | 'info' | 'success' | 'error' | 'warning';
        "configAria"?: any;
        /**
          * If true, the user cannot interact with the button. Defaults to `false`.
         */
        "disabled"?: boolean;
        "disabledReason"?: string;
        /**
          * Hyperlink to navigate to on click.
         */
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
          * On click of button, a CustomEvent 'goat:click' will be triggered.
         */
        "onGoat:click"?: (event: CustomEvent<any>) => void;
        /**
          * Button selection state.
         */
        "selected"?: boolean;
        /**
          * Show loader.
         */
        "showLoader"?: boolean;
        /**
          * Button size. Possible values are `"sm"`, `"md"`, `"lg"`, `"xl"`, `"xxl"`. Defaults to `"md"`.
         */
        "size"?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
        /**
          * Sets or retrieves the window or frame at which to target content.
         */
        "target"?: string;
        "variant"?: 'default' | 'light' | 'outline' | 'link';
    }
    interface GoatCard {
        "shadowLevel"?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | undefined;
    }
    interface GoatCheckbox {
        "configAria"?: any;
        /**
          * If true, the user cannot interact with the button. Defaults to `false`.
         */
        "disabled"?: boolean;
        "intermediate"?: boolean;
        /**
          * The checkbox label.
         */
        "label"?: string;
        /**
          * The input field name.
         */
        "name"?: string;
        /**
          * Emitted when the input loses focus.
         */
        "onGoat:blur"?: (event: CustomEvent<any>) => void;
        /**
          * On change of input a CustomEvent 'goat:change' will be triggered. Event details contains parent event, oldValue, newValue of input.
         */
        "onGoat:change"?: (event: CustomEvent<any>) => void;
        /**
          * Emitted when the input has focus.
         */
        "onGoat:focus"?: (event: CustomEvent<any>) => void;
        /**
          * If true, required icon is show. Defaults to `false`.
         */
        "required"?: boolean;
        "rounded"?: boolean;
        /**
          * The button size. Possible values are: `"sm"`, `"md"`, `"lg"`. Defaults to `"md"`.
         */
        "size"?: 'sm' | 'md' | 'lg';
        /**
          * The input field value.
         */
        "value"?: boolean;
    }
    interface GoatCodeEditor {
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
        "onGoat:change"?: (event: CustomEvent<any>) => void;
        /**
          * If true, required icon is show. Defaults to `false`.
         */
        "required"?: boolean;
        "theme"?: 'vs-light' | 'vs-dark';
        /**
          * The input field value.
         */
        "value"?: string;
    }
    interface GoatDivider {
        "vertical"?: boolean;
    }
    interface GoatDropdown {
        /**
          * If true, the user cannot interact with the button. Defaults to `false`.
         */
        "disabled"?: boolean;
        "isOpen"?: boolean;
        "positions"?: string;
        /**
          * The button size. Possible values are: `"sm"`, `"md"`, `"lg"`. Defaults to `"md"`.
         */
        "size"?: 'sm' | 'md' | 'lg';
    }
    interface GoatEmptyState {
        "illustration"?: 'no-data';
        "vertical"?: boolean;
    }
    interface GoatFlowDesigner {
        "activities"?: any[];
        "disabled"?: boolean;
    }
    interface GoatFormControl {
        /**
          * The caption for the form control.
         */
        "caption"?: string;
        "error"?: string;
        /**
          * The label for the form control.
         */
        "label"?: string;
        /**
          * Whether the form control is required.
         */
        "required"?: boolean;
        "success"?: string;
        "warning"?: string;
    }
    interface GoatIcon {
        "shade"?: 'primary' | 'secondary' | 'tertiary';
        /**
          * The Icon size. Possible values are: `"sm"`, `"md"`, `"lg"`, `"xl"` and size in pixel. Defaults to `"md"`.
         */
        "size"?: 'sm' | 'md' | 'lg' | 'xl' | string;
        "type"?: string;
    }
    interface GoatInput {
        /**
          * Indicates whether the value of the control can be automatically completed by the browser.
         */
        "autocomplete"?: 'on' | 'off';
        /**
          * If `true`, a clear icon will appear in the input when there is a value. Clicking it clears the input.
         */
        "clearable"?: boolean;
        "configAria"?: any;
        /**
          * Set the amount of time, in milliseconds, to wait to trigger the `goatChange` event after each keystroke.
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
        "onGoat:blur"?: (event: CustomEvent<any>) => void;
        /**
          * Emitted when the value has changed.
         */
        "onGoat:change"?: (event: CustomEvent<any>) => void;
        /**
          * Emitted when the input has focus.
         */
        "onGoat:focus"?: (event: CustomEvent<any>) => void;
        /**
          * Emitted when a keyboard input occurred.
         */
        "onGoat:input"?: (event: CustomEvent<any>) => void;
        /**
          * The input field placeholder.
         */
        "placeholder"?: string;
        /**
          * If true, the user cannot interact with the button. Defaults to `false`.
         */
        "readonly"?: boolean;
        /**
          * If true, required icon is show. Defaults to `false`.
         */
        "required"?: boolean;
        /**
          * The input field size. Possible values are: `"sm"`, `"md"`, `"lg"`. Defaults to `"md"`.
         */
        "size"?: 'sm' | 'md' | 'lg';
        /**
          * The input state. Possible values are: `"success"`, `"error"`, `"warning"`, 'default'. Defaults to `"default"`.
         */
        "state"?: 'success' | 'error' | 'warning' | 'default';
        /**
          * The type of control to display. Possible values are: `"text"`, `"password"`, `"number"`, `"email"`, `"tel"`. Defaults to `"text"`.
         */
        "type"?: ('text' | 'password' | 'number' | 'email' | 'tel');
        /**
          * The input field value.
         */
        "value"?: string | number | null;
    }
    interface GoatLink {
        /**
          * Color variants Possible values are `"primary"`, `"success"`, `"warning"`, `"error"`, `"info"`, `"inherit"`. Defaults to `"inherit"`.
         */
        "color"?: 'primary' | 'success' | 'warning' | 'error' | 'info' | 'inherit';
        "decoration"?: boolean;
        /**
          * Hyperlink to navigate to on click.
         */
        "href"?: string;
        /**
          * Sets or retrieves the window or frame at which to target content.
         */
        "target"?: string;
    }
    interface GoatMenu {
        "empty"?: boolean;
        "emptyState"?: string;
        "showLoader"?: boolean;
        "value"?: string | number;
    }
    interface GoatMenuItem {
        "color"?: 'primary' | 'error' | 'warning' | 'success' | 'neutral';
        /**
          * If true, the user cannot interact with the button. Defaults to `false`.
         */
        "disabled"?: boolean;
        /**
          * Emitted when the menu item is clicked.
         */
        "onGoat:menu-item-click"?: (event: CustomEvent<any>) => void;
        /**
          * Menu item selection state.
         */
        "selected"?: boolean;
        /**
          * The menu item value.
         */
        "value"?: string | number | null;
    }
    interface GoatSelect {
        /**
          * If `true`, a clear icon will appear in the input when there is a value. Clicking it clears the input.
         */
        "clearable"?: boolean;
        "configAria"?: any;
        /**
          * Set the amount of time, in milliseconds, to wait to trigger the `goatChange` event after each keystroke.
         */
        "debounce"?: number;
        /**
          * If true, the user cannot interact with the button. Defaults to `false`.
         */
        "disabled"?: boolean;
        "isOpen"?: boolean;
        /**
          * [{   label: 'Shivaji Varma',   value: 'shivaji-varma' }]
         */
        "items"?: any;
        /**
          * The input field name.
         */
        "name"?: string;
        /**
          * Emitted when the action button is clicked..
         */
        "onGoat:action-click"?: (event: CustomEvent<any>) => void;
        /**
          * Emitted when the value has changed.
         */
        "onGoat:change"?: (event: CustomEvent<any>) => void;
        /**
          * Emitted when a keyboard input occurred.
         */
        "onGoat:search"?: (event: CustomEvent<any>) => void;
        /**
          * The input field placeholder.
         */
        "placeholder"?: string;
        "position"?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
        /**
          * If true, required icon is show. Defaults to `false`.
         */
        "required"?: boolean;
        /**
          * Search type Possible values are `"none"`, `"initial"`, `"contains"`, `"managed"`. Defaults to `"none"`.
         */
        "search"?: 'none' | 'initial' | 'contains' | 'managed';
        "showLoader"?: boolean;
        /**
          * The select input size. Possible values are: `"sm"`, `"md"`, `"lg"`. Defaults to `"md"`.
         */
        "size"?: 'sm' | 'md' | 'lg';
        /**
          * The input state. Possible values are: `"success"`, `"error"`, `"warning"`, 'default'. Defaults to `"default"`.
         */
        "state"?: 'success' | 'error' | 'warning' | 'default';
        /**
          * The input field value.
         */
        "value"?: string | number;
    }
    interface GoatSpinner {
        /**
          * The Icon size. Possible values are: `"sm"`, `"md"`, `"lg"`, `"xl"` and size in pixel. Defaults to `"md"`.
         */
        "size"?: 'sm' | 'md' | 'lg' | 'xl' | string;
    }
    interface GoatTable {
        /**
          * Grid columns configuration. [ {   "name":"name",   "label":"Name",   "width":300,   "fixed":true  }, {   "name":"age",   "label":"Age" } ]
         */
        "columns"?: any[];
        /**
          * Grid data to display on table [{  'id': '5e7118ddce4b3d577956457f',  'age': 21,  'name': 'John',  'company': 'India',  'email': 'john@example.com',  'phone': '+1 (839) 560-3581',  'address': '326 Irving Street, Grimsley, Texas, 4048'  }]
         */
        "dataSource"?: any[];
        "keyField"?: string;
        "onGoat:table-cell-click"?: (event: CustomEvent<any>) => void;
        "onGoat:table-select-change"?: (event: CustomEvent<any>) => void;
        "selectedRowKeys"?: string[];
        "selectionType"?: 'checkbox' | undefined;
    }
    interface GoatText {
        /**
          * The heading level.
         */
        "level"?: 1 | 2 | 3 | 4 | 5;
        "shade"?: 'primary' | 'secondary' | 'tertiary';
        /**
          * Text size.
         */
        "size"?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
        "type"?: 'heading' | 'paragraph' | 'text';
    }
    interface GoatTextarea {
        /**
          * If `true`, a clear icon will appear in the input when there is a value. Clicking it clears the input.
         */
        "clearable"?: boolean;
        "configAria"?: any;
        /**
          * Set the amount of time, in milliseconds, to wait to trigger the `goat:change` event after each keystroke.
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
        "onGoat:action-click"?: (event: CustomEvent<any>) => void;
        /**
          * Emitted when the input loses focus.
         */
        "onGoat:blur"?: (event: CustomEvent<any>) => void;
        /**
          * Emitted when the value has changed..
         */
        "onGoat:change"?: (event: CustomEvent<any>) => void;
        /**
          * Emitted when the input has focus.
         */
        "onGoat:focus"?: (event: CustomEvent<any>) => void;
        /**
          * Emitted when a keyboard input occurred.
         */
        "onGoat:input"?: (event: CustomEvent<any>) => void;
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
          * The input state. Possible values are: `"success"`, `"error"`, `"warning"`, 'default'. Defaults to `"default"`.
         */
        "state"?: 'success' | 'error' | 'warning' | 'default';
        /**
          * The input field value.
         */
        "value"?: string;
    }
    interface IntrinsicElements {
        "goat-alert": GoatAlert;
        "goat-avatar": GoatAvatar;
        "goat-button": GoatButton;
        "goat-card": GoatCard;
        "goat-checkbox": GoatCheckbox;
        "goat-code-editor": GoatCodeEditor;
        "goat-divider": GoatDivider;
        "goat-dropdown": GoatDropdown;
        "goat-empty-state": GoatEmptyState;
        "goat-flow-designer": GoatFlowDesigner;
        "goat-form-control": GoatFormControl;
        "goat-icon": GoatIcon;
        "goat-input": GoatInput;
        "goat-link": GoatLink;
        "goat-menu": GoatMenu;
        "goat-menu-item": GoatMenuItem;
        "goat-select": GoatSelect;
        "goat-spinner": GoatSpinner;
        "goat-table": GoatTable;
        "goat-text": GoatText;
        "goat-textarea": GoatTextarea;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "goat-alert": LocalJSX.GoatAlert & JSXBase.HTMLAttributes<HTMLGoatAlertElement>;
            "goat-avatar": LocalJSX.GoatAvatar & JSXBase.HTMLAttributes<HTMLGoatAvatarElement>;
            "goat-button": LocalJSX.GoatButton & JSXBase.HTMLAttributes<HTMLGoatButtonElement>;
            "goat-card": LocalJSX.GoatCard & JSXBase.HTMLAttributes<HTMLGoatCardElement>;
            "goat-checkbox": LocalJSX.GoatCheckbox & JSXBase.HTMLAttributes<HTMLGoatCheckboxElement>;
            "goat-code-editor": LocalJSX.GoatCodeEditor & JSXBase.HTMLAttributes<HTMLGoatCodeEditorElement>;
            "goat-divider": LocalJSX.GoatDivider & JSXBase.HTMLAttributes<HTMLGoatDividerElement>;
            "goat-dropdown": LocalJSX.GoatDropdown & JSXBase.HTMLAttributes<HTMLGoatDropdownElement>;
            "goat-empty-state": LocalJSX.GoatEmptyState & JSXBase.HTMLAttributes<HTMLGoatEmptyStateElement>;
            "goat-flow-designer": LocalJSX.GoatFlowDesigner & JSXBase.HTMLAttributes<HTMLGoatFlowDesignerElement>;
            "goat-form-control": LocalJSX.GoatFormControl & JSXBase.HTMLAttributes<HTMLGoatFormControlElement>;
            "goat-icon": LocalJSX.GoatIcon & JSXBase.HTMLAttributes<HTMLGoatIconElement>;
            "goat-input": LocalJSX.GoatInput & JSXBase.HTMLAttributes<HTMLGoatInputElement>;
            "goat-link": LocalJSX.GoatLink & JSXBase.HTMLAttributes<HTMLGoatLinkElement>;
            "goat-menu": LocalJSX.GoatMenu & JSXBase.HTMLAttributes<HTMLGoatMenuElement>;
            "goat-menu-item": LocalJSX.GoatMenuItem & JSXBase.HTMLAttributes<HTMLGoatMenuItemElement>;
            "goat-select": LocalJSX.GoatSelect & JSXBase.HTMLAttributes<HTMLGoatSelectElement>;
            "goat-spinner": LocalJSX.GoatSpinner & JSXBase.HTMLAttributes<HTMLGoatSpinnerElement>;
            "goat-table": LocalJSX.GoatTable & JSXBase.HTMLAttributes<HTMLGoatTableElement>;
            "goat-text": LocalJSX.GoatText & JSXBase.HTMLAttributes<HTMLGoatTextElement>;
            "goat-textarea": LocalJSX.GoatTextarea & JSXBase.HTMLAttributes<HTMLGoatTextareaElement>;
        }
    }
}

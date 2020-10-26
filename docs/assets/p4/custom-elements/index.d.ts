/* P4rmUi custom elements bundle */

import { Components, JSX } from "../types/components";

interface P4Button extends Components.P4Button, HTMLElement {}
export const P4Button: {
  prototype: P4Button;
  new (): P4Button;
};

interface P4Icon extends Components.P4Icon, HTMLElement {}
export const P4Icon: {
  prototype: P4Icon;
  new (): P4Icon;
};

interface P4Input extends Components.P4Input, HTMLElement {}
export const P4Input: {
  prototype: P4Input;
  new (): P4Input;
};

interface P4Item extends Components.P4Item, HTMLElement {}
export const P4Item: {
  prototype: P4Item;
  new (): P4Item;
};

interface P4Label extends Components.P4Label, HTMLElement {}
export const P4Label: {
  prototype: P4Label;
  new (): P4Label;
};

interface P4Select extends Components.P4Select, HTMLElement {}
export const P4Select: {
  prototype: P4Select;
  new (): P4Select;
};

interface P4Spinner extends Components.P4Spinner, HTMLElement {}
export const P4Spinner: {
  prototype: P4Spinner;
  new (): P4Spinner;
};

interface P4Textarea extends Components.P4Textarea, HTMLElement {}
export const P4Textarea: {
  prototype: P4Textarea;
  new (): P4Textarea;
};

/**
 * Utility to define all custom elements within this package using the tag name provided in the component's source. 
 * When defining each custom element, it will also check it's safe to define by:
 *
 * 1. Ensuring the "customElements" registry is available in the global context (window).
 * 2. The component tag name is not already defined.
 *
 * Use the standard [customElements.define()](https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry/define) 
 * method instead to define custom elements individually, or to provide a different tag name.
 */
export declare const defineCustomElements: (opts?: any) => void;

/**
 * Used to manually set the base path where assets can be found.
 * If the script is used as "module", it's recommended to use "import.meta.url",
 * such as "setAssetPath(import.meta.url)". Other options include
 * "setAssetPath(document.currentScript.src)", or using a bundler's replace plugin to
 * dynamically set the path at build time, such as "setAssetPath(process.env.ASSET_PATH)".
 * But do note that this configuration depends on how your script is bundled, or lack of
 * bunding, and where your assets can be loaded from. Additionally custom bundling
 * will have to ensure the static assets are copied to its build directory.
 */
export declare const setAssetPath: (path: string) => void;

export { Components, JSX };

export * from '../types';

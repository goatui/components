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
        /**
          * The button size. Possible values are: `"sm"`, `"md"`, `"lg"`. Defaults to `"md"`.
         */
        "size": 'sm' | 'md' | 'lg';
        /**
          * Button variants Possible values are `"default"`, `"primary"`, `"dashed"`, `"danger"`, `"link"`. Defaults to `"default"`.
         */
        "variant": 'default' | 'primary' | 'dashed' | 'danger' | 'link';
    }
    interface P4Icon {
    }
}
declare global {
    interface HTMLP4ButtonElement extends Components.P4Button, HTMLStencilElement {
    }
    var HTMLP4ButtonElement: {
        prototype: HTMLP4ButtonElement;
        new (): HTMLP4ButtonElement;
    };
    interface HTMLP4IconElement extends Components.P4Icon, HTMLStencilElement {
    }
    var HTMLP4IconElement: {
        prototype: HTMLP4IconElement;
        new (): HTMLP4IconElement;
    };
    interface HTMLElementTagNameMap {
        "p4-button": HTMLP4ButtonElement;
        "p4-icon": HTMLP4IconElement;
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
        /**
          * On click of button a CustomEvent 'buttonClick' will be triggered.
         */
        "onButtonClick"?: (event: CustomEvent<any>) => void;
        /**
          * The button size. Possible values are: `"sm"`, `"md"`, `"lg"`. Defaults to `"md"`.
         */
        "size"?: 'sm' | 'md' | 'lg';
        /**
          * Button variants Possible values are `"default"`, `"primary"`, `"dashed"`, `"danger"`, `"link"`. Defaults to `"default"`.
         */
        "variant"?: 'default' | 'primary' | 'dashed' | 'danger' | 'link';
    }
    interface P4Icon {
    }
    interface IntrinsicElements {
        "p4-button": P4Button;
        "p4-icon": P4Icon;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "p4-button": LocalJSX.P4Button & JSXBase.HTMLAttributes<HTMLP4ButtonElement>;
            "p4-icon": LocalJSX.P4Icon & JSXBase.HTMLAttributes<HTMLP4IconElement>;
        }
    }
}

import { EventEmitter } from '../stencil-public-runtime';
export declare const debounceEvent: (event: EventEmitter, wait: number) => EventEmitter;
export declare const debounce: (func: (...args: any[]) => void, wait?: number) => (...args: any[]) => any;
export declare function loadScriptModule(src: any): Promise<unknown>;
export declare const findItemLabel: (componentEl: HTMLElement) => HTMLP4LabelElement;

import { B as BUILD, c as consoleDevInfo, p as plt, w as win, H, d as doc, N as NAMESPACE, a as promiseResolve, b as bootstrapLazy } from './index-8956d8c0.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

/*
 Stencil Client Patch Browser v2.8.0 | MIT Licensed | https://stenciljs.com
 */
const getDynamicImportFunction = (namespace) => `__sc_import_${namespace.replace(/\s|-/g, '_')}`;
const patchBrowser = () => {
    // NOTE!! This fn cannot use async/await!
    if (BUILD.isDev && !BUILD.isTesting) {
        consoleDevInfo('Running in development mode.');
    }
    if (BUILD.cssVarShim) {
        // shim css vars
        plt.$cssShim$ = win.__cssshim;
    }
    if (BUILD.cloneNodeFix) {
        // opted-in to polyfill cloneNode() for slot polyfilled components
        patchCloneNodeFix(H.prototype);
    }
    if (BUILD.profile && !performance.mark) {
        // not all browsers support performance.mark/measure (Safari 10)
        performance.mark = performance.measure = () => {
            /*noop*/
        };
        performance.getEntriesByName = () => [];
    }
    // @ts-ignore
    const scriptElm = BUILD.scriptDataOpts || BUILD.safari10 || BUILD.dynamicImportShim
        ? Array.from(doc.querySelectorAll('script')).find((s) => new RegExp(`\/${NAMESPACE}(\\.esm)?\\.js($|\\?|#)`).test(s.src) ||
            s.getAttribute('data-stencil-namespace') === NAMESPACE)
        : null;
    const importMeta = import.meta.url;
    const opts = BUILD.scriptDataOpts ? scriptElm['data-opts'] || {} : {};
    if (BUILD.safari10 && 'onbeforeload' in scriptElm && !history.scrollRestoration /* IS_ESM_BUILD */) {
        // Safari < v11 support: This IF is true if it's Safari below v11.
        // This fn cannot use async/await since Safari didn't support it until v11,
        // however, Safari 10 did support modules. Safari 10 also didn't support "nomodule",
        // so both the ESM file and nomodule file would get downloaded. Only Safari
        // has 'onbeforeload' in the script, and "history.scrollRestoration" was added
        // to Safari in v11. Return a noop then() so the async/await ESM code doesn't continue.
        // IS_ESM_BUILD is replaced at build time so this check doesn't happen in systemjs builds.
        return {
            then() {
                /* promise noop */
            },
        };
    }
    if (!BUILD.safari10 && importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    else if (BUILD.dynamicImportShim || BUILD.safari10) {
        opts.resourcesUrl = new URL('.', new URL(scriptElm.getAttribute('data-resources-url') || scriptElm.src, win.location.href)).href;
        if (BUILD.dynamicImportShim) {
            patchDynamicImport(opts.resourcesUrl, scriptElm);
        }
        if (BUILD.dynamicImportShim && !win.customElements) {
            // module support, but no custom elements support (Old Edge)
            // @ts-ignore
            return import(/* webpackChunkName: "polyfills-dom" */ './dom-1f98a75f.js').then(() => opts);
        }
    }
    return promiseResolve(opts);
};
const patchDynamicImport = (base, orgScriptElm) => {
    const importFunctionName = getDynamicImportFunction(NAMESPACE);
    try {
        // test if this browser supports dynamic imports
        // There is a caching issue in V8, that breaks using import() in Function
        // By generating a random string, we can workaround it
        // Check https://bugs.chromium.org/p/chromium/issues/detail?id=990810 for more info
        win[importFunctionName] = new Function('w', `return import(w);//${Math.random()}`);
    }
    catch (e) {
        // this shim is specifically for browsers that do support "esm" imports
        // however, they do NOT support "dynamic" imports
        // basically this code is for old Edge, v18 and below
        const moduleMap = new Map();
        win[importFunctionName] = (src) => {
            const url = new URL(src, base).href;
            let mod = moduleMap.get(url);
            if (!mod) {
                const script = doc.createElement('script');
                script.type = 'module';
                script.crossOrigin = orgScriptElm.crossOrigin;
                script.src = URL.createObjectURL(new Blob([`import * as m from '${url}'; window.${importFunctionName}.m = m;`], {
                    type: 'application/javascript',
                }));
                mod = new Promise((resolve) => {
                    script.onload = () => {
                        resolve(win[importFunctionName].m);
                        script.remove();
                    };
                });
                moduleMap.set(url, mod);
                doc.head.appendChild(script);
            }
            return mod;
        };
    }
};
const patchCloneNodeFix = (HTMLElementPrototype) => {
    const nativeCloneNodeFn = HTMLElementPrototype.cloneNode;
    HTMLElementPrototype.cloneNode = function (deep) {
        if (this.nodeName === 'TEMPLATE') {
            return nativeCloneNodeFn.call(this, deep);
        }
        const clonedNode = nativeCloneNodeFn.call(this, false);
        const srcChildNodes = this.childNodes;
        if (deep) {
            for (let i = 0; i < srcChildNodes.length; i++) {
                // Node.ATTRIBUTE_NODE === 2, and checking because IE11
                if (srcChildNodes[i].nodeType !== 2) {
                    clonedNode.appendChild(srcChildNodes[i].cloneNode(true));
                }
            }
        }
        return clonedNode;
    };
};

patchBrowser().then(options => {
  globalScripts();
  return bootstrapLazy([["p4-select",[[1,"p4-select",{"placeholder":[1],"value":[1032],"size":[1],"type":[1],"required":[4],"disabled":[4],"showLoader":[4,"show-loader"],"isOpen":[4,"is-open"],"managed":[4],"config":[8],"data":[8],"position":[1],"actions":[16],"clearInput":[4,"clear-input"],"name":[1],"hasFocus":[32],"searchString":[32],"setFocus":[64]},[[8,"click","windowClick"]]]]],["p4-button",[[1,"p4-button",{"size":[1],"variant":[1],"block":[4],"disabled":[4],"disabledReason":[1,"disabled-reason"],"icon":[1],"iconEnd":[4,"icon-end"],"showLoader":[4,"show-loader"],"href":[1],"target":[1],"hasFocus":[32],"isActive":[32],"slotHasContent":[32]},[[9,"mouseup","windowMouseUp"],[8,"keyup","windowKeyUp"]]]]],["p4-dropdown",[[1,"p4-dropdown",{"size":[1],"listVariant":[8,"list-variant"],"itemVariant":[8,"item-variant"],"isOpen":[4,"is-open"],"disabled":[4],"showLoader":[4,"show-loader"],"data":[16],"position":[1],"hasFocus":[32],"setFocus":[64]},[[8,"click","windowClick"]]]]],["p4-table",[[1,"p4-table",{"columns":[16],"dataSource":[16],"selectionType":[1,"selection-type"],"selectedRowKeys":[16],"keyField":[1,"key-field"],"hoverRecord":[32],"isSelectAll":[32]}]]],["p4-input",[[1,"p4-input",{"name":[1],"placeholder":[1],"value":[1032],"size":[1],"type":[1],"disabled":[4],"required":[4],"clearInput":[4,"clear-input"],"debounce":[2],"autocomplete":[1],"actions":[16],"startSlotHasContent":[32],"endSlotHasContent":[32],"hasFocus":[32],"setFocus":[64],"setBlur":[64]}]]],["p4-textarea",[[1,"p4-textarea",{"name":[1],"placeholder":[1],"value":[1025],"size":[1],"variant":[1],"inline":[4],"disabled":[4],"required":[4],"debounce":[2],"actions":[16],"hasFocus":[32],"setFocus":[64],"setBlur":[64]}]]],["p4-field-group",[[1,"p4-field-group"]]],["p4-heading",[[1,"p4-heading",{"type":[1],"size":[1],"weight":[1]}]]],["p4-label",[[1,"p4-label",{"required":[4]}]]],["p4-paragraph",[[1,"p4-paragraph"]]],["p4-script-editor",[[1,"p4-script-editor",{"name":[1],"value":[1025],"disabled":[4],"theme":[1],"language":[1],"lineNumbers":[1,"line-numbers"],"debounce":[2]}]]],["p4-icon",[[1,"p4-icon",{"type":[1],"size":[1]}]]],["p4-checkbox",[[1,"p4-checkbox",{"label":[1],"value":[1028],"size":[1],"required":[4],"disabled":[4],"hasFocus":[32],"setFocus":[64],"setBlur":[64]}]]],["p4-list",[[1,"p4-list",{"data":[1040],"variant":[1],"itemVariant":[1,"item-variant"],"showLoader":[4,"show-loader"],"value":[1032],"emptyState":[1032,"empty-state"],"focusItemId":[32],"activeItemId":[32],"invalidData":[32],"setFocus":[64]}]]],["p4-spinner",[[1,"p4-spinner",{"size":[1]}]]]], options);
});

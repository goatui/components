import { B as BUILD, c as consoleDevInfo, p as plt, w as win, H, d as doc, N as NAMESPACE, a as promiseResolve, b as bootstrapLazy } from './index-433d423f.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

/*
 Stencil Client Patch Browser v2.14.0 | MIT Licensed | https://stenciljs.com
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
        // because the mark/measure APIs are designed to write entries to a buffer in the browser that does not exist,
        // simply stub the implementations out.
        // TODO(STENCIL-323): Remove this patch when support for older browsers is removed (breaking)
        // @ts-ignore
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
            return import(/* webpackChunkName: "polyfills-dom" */ './dom-03c5c953.js').then(() => opts);
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
  return bootstrapLazy([["goat-table",[[1,"goat-table",{"columns":[16],"data":[16],"selectionType":[1,"selection-type"],"selectedRowKeys":[1040],"keyField":[1,"key-field"],"managed":[4],"sortable":[4],"sortBy":[1025,"sort-by"],"sortOrder":[1025,"sort-order"],"paginate":[4],"page":[2],"pageSize":[2,"page-size"],"totalItems":[1032,"total-items"],"emptyState":[1032,"empty-state"],"hoveredCell":[32],"isSelectAll":[32]}]]],["goat-dropdown",[[1,"goat-dropdown",{"size":[1],"isOpen":[1028,"is-open"],"disabled":[4],"positions":[1],"items":[16],"hasFocus":[32],"position":[32],"setFocus":[64]},[[8,"click","windowClick"],[8,"goat:menu-item-click","listenMenuItemClick"],[8,"goat:click","listenClick"],[8,"keydown","listenKeyDown"],[9,"scroll","fixPosition"]]]]],["goat-header",[[1,"goat-header",{"brandLogo":[1,"brand-logo"],"brandName":[1,"brand-name"],"brandUrl":[1,"brand-url"],"pageTitle":[1,"page-title"],"type":[1]}]]],["goat-notification-manager",[[1,"goat-notification-manager",{"name":[513],"position":[1],"notifications":[32],"isDarkMode":[32]},[[8,"goat:toast","listenToast"],[8,"goat:notification","listenNotification"]]]]],["goat-sidenav-menu",[[1,"goat-sidenav-menu",{"showLoader":[4,"show-loader"],"value":[1032],"empty":[1028],"emptyState":[1025,"empty-state"],"internalEmptyState":[32],"setFocus":[64]},[[8,"keydown","handleKeyDown"]]]]],["goat-code-highlighter",[[1,"goat-code-highlighter",{"language":[1],"lineNumbers":[4,"line-numbers"],"value":[1],"compiledCode":[32]}]]],["goat-breadcrumb-item",[[1,"goat-breadcrumb-item",{"href":[1],"target":[1],"active":[516]}]]],["goat-tab",[[1,"goat-tab",{"size":[1],"selected":[516],"disabled":[516],"disabledReason":[1,"disabled-reason"],"icon":[1],"label":[1],"value":[1],"target":[1],"showLoader":[4,"show-loader"],"hasFocus":[32],"isActive":[32],"slotHasContent":[32],"setFocus":[64],"triggerClick":[64]},[[9,"mouseup","windowMouseUp"],[8,"keyup","windowKeyUp"]]]]],["goat-code-editor",[[1,"goat-code-editor",{"name":[1],"value":[1025],"required":[516],"disabled":[516],"readonly":[516],"theme":[1],"language":[1],"lineNumbers":[1,"line-numbers"],"debounce":[2],"hasFocus":[32],"editorMonacoInstance":[32],"getComponentId":[64],"setFocus":[64],"setBlur":[64]}]]],["goat-flow-designer",[[1,"goat-flow-designer",{"blockSize":[2,"block-size"],"activities":[16],"disabled":[4],"activityHeight":[32],"activityWidth":[32],"lines":[32]},[[0,"mouseup","handleMouseDown"]]]]],["goat-input",[[1,"goat-input",{"name":[1],"placeholder":[1],"value":[1032],"size":[513],"state":[513],"type":[1],"disabled":[516],"readonly":[516],"required":[516],"clearable":[4],"debounce":[2],"autocomplete":[1],"configAria":[1544,"config-aria"],"startSlotHasContent":[32],"endSlotHasContent":[32],"hasFocus":[32],"getComponentId":[64],"setFocus":[64],"setBlur":[64]}]]],["goat-textarea",[[1,"goat-textarea",{"name":[1],"placeholder":[1],"value":[1025],"size":[513],"disabled":[516],"readonly":[516],"state":[513],"required":[4],"debounce":[2],"clearable":[4],"configAria":[1544,"config-aria"],"hasFocus":[32],"endSlotHasContent":[32],"setFocus":[64],"setBlur":[64],"getComponentId":[64]}]]],["goat-avatar",[[1,"goat-avatar",{"size":[1],"name":[1],"src":[1]}]]],["goat-badge",[[1,"goat-badge",{"content":[1]}]]],["goat-breadcrumb",[[1,"goat-breadcrumb"]]],["goat-button-group",[[1,"goat-button-group"]]],["goat-card",[[1,"goat-card",{"shadowLevel":[1,"shadow-level"]}]]],["goat-date-picker",[[1,"goat-date-picker"]]],["goat-sidenav",[[1,"goat-sidenav",{"showLoader":[4,"show-loader"]}]]],["goat-sidenav-menu-item",[[1,"goat-sidenav-menu-item",{"value":[1032],"disabled":[516],"selected":[516],"startSlotHasContent":[32],"endSlotHasContent":[32],"hasFocus":[32],"isActive":[32],"setFocus":[64],"setBlur":[64]},[[9,"mouseup","windowMouseUp"],[8,"keyup","windowKeyUp"]]]]],["goat-tab-panel",[[1,"goat-tab-panel",{"value":[513],"active":[516]}]]],["goat-tabs",[[1,"goat-tabs",null,[[0,"goat:tab-click","tabClick"]]]]],["goat-tabs-list",[[1,"goat-tabs-list",{"variant":[1],"managed":[4]},[[0,"goat:tab-click","tabClick"]]]]],["goat-time-picker",[[1,"goat-time-picker"]]],["goat-tag",[[1,"goat-tag",{"size":[513],"filter":[516],"value":[513]}]]],["goat-svg",[[1,"goat-svg",{"src":[1],"svg":[32]}]]],["goat-icon",[[1,"goat-icon",{"name":[513],"size":[513],"svg":[32]}]]],["goat-button",[[1,"goat-button",{"size":[1],"variant":[1],"block":[516],"selected":[516],"disabled":[516],"disabledReason":[1,"disabled-reason"],"icon":[1],"iconEnd":[4,"icon-end"],"showLoader":[4,"show-loader"],"href":[1],"configAria":[1544,"config-aria"],"target":[1],"hasFocus":[32],"isActive":[32],"slotHasContent":[32],"setFocus":[64],"triggerClick":[64]},[[9,"mouseup","windowMouseUp"],[8,"keyup","windowKeyUp"]]]]],["goat-empty-state",[[1,"goat-empty-state",{"illustration":[513],"headline":[513],"description":[513],"action":[513],"actionUrl":[1,"action-url"],"actionVariant":[1,"action-variant"],"actionDisabled":[4,"action-disabled"],"vertical":[32]},[[9,"resize","resizeHandler"]]]]],["goat-menu",[[1,"goat-menu",{"showLoader":[4,"show-loader"],"value":[1032],"empty":[1028],"emptyState":[1032,"empty-state"],"internalEmptyState":[32],"setFocus":[64]},[[8,"keydown","handleKeyDown"]]]]],["goat-menu-item",[[1,"goat-menu-item",{"value":[1032],"disabled":[516],"selected":[516],"startSlotHasContent":[32],"endSlotHasContent":[32],"hasFocus":[32],"isActive":[32],"setFocus":[64],"setBlur":[64]},[[9,"mouseup","windowMouseUp"],[8,"keyup","windowKeyUp"]]]]],["goat-select",[[1,"goat-select",{"name":[1],"placeholder":[1],"value":[1032],"multiple":[4],"size":[513],"search":[1],"state":[513],"required":[516],"disabled":[516],"readonly":[516],"showLoader":[4,"show-loader"],"isOpen":[1028,"is-open"],"configAria":[1544,"config-aria"],"items":[8],"positions":[1],"clearable":[4],"debounce":[2],"hasFocus":[32],"searchString":[32],"startSlotHasContent":[32],"endSlotHasContent":[32],"position":[32],"setFocus":[64],"setBlur":[64],"getComponentId":[64]},[[8,"click","windowClick"],[0,"goat:menu-item-click","menuItemClick"],[0,"goat:tag-dismiss","tagDismissClick"],[9,"scroll","fixPosition"]]]]],["goat-notification",[[1,"goat-notification",{"state":[1],"lowContrast":[4,"low-contrast"],"dismissible":[4],"actionable":[4],"actionName":[1,"action-name"],"actionLabel":[1,"action-label"],"hidden":[32],"isDarkMode":[32]}]]],["goat-toast",[[1,"goat-toast",{"message":[1],"state":[513],"isDarkMode":[32]}]]],["goat-canvas",[[1,"goat-canvas",{"unitSize":[2,"unit-size"],"lines":[16],"padding":[2],"viewbox":[1],"computedViewbox":[32],"paths":[32]}]]],["goat-checkbox",[[1,"goat-checkbox",{"name":[1],"label":[1],"value":[1028],"intermediate":[1028],"rounded":[4],"size":[1],"required":[516],"readonly":[516],"disabled":[516],"configAria":[1544,"config-aria"],"hasFocus":[32],"animate":[32],"isActive":[32],"slotHasContent":[32],"getComponentId":[64],"setFocus":[64],"setBlur":[64]},[[9,"mouseup","windowMouseUp"],[8,"keyup","windowKeyUp"]]]]],["goat-divider",[[1,"goat-divider",{"vertical":[516],"slotHasContent":[32]}]]],["goat-form-control",[[1,"goat-form-control",{"label":[1],"caption":[1],"error":[1],"warning":[1],"success":[1],"inline":[4],"required":[4]}]]],["goat-link",[[1,"goat-link",{"href":[1],"target":[1],"hasFocus":[32],"isActive":[32],"triggerClick":[64]},[[9,"mouseup","windowMouseUp"],[8,"keyup","windowKeyUp"]]]]],["goat-text",[[1,"goat-text",{"type":[513],"shade":[513],"level":[2],"size":[1537]}]]],["goat-spinner",[[1,"goat-spinner",{"size":[1]}]]]], options);
});

//# sourceMappingURL=goatui.esm.js.map
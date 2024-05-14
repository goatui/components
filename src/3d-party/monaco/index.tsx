import { loadScript } from '../../utils/utils';
import { getAssetPath } from '@stencil/core';

const VERSION = '0.48.0';
export default async function loadMonaco() {
  if (process.env.THIRD_PARTY_ASSETS == 'LOCAL') {
    // @ts-ignore
    window['require'] = { paths: { vs: getAssetPath('./assets/node_modules/monaco-editor/min/vs') } };
    await loadScript(getAssetPath('./assets/node_modules/monaco-editor/min/vs/loader.js'));
    await loadScript(getAssetPath('./assets/node_modules/monaco-editor/min/vs/editor/editor.main.nls.js'));
    await loadScript(getAssetPath('./assets/node_modules/monaco-editor/min/vs/editor/editor.main.js'));
  } else {
    // @ts-ignore
    window['require'] = { paths: { vs: `https://cdn.jsdelivr.net/npm/monaco-editor@${VERSION}/min/vs` } };
    await loadScript(`https://cdn.jsdelivr.net/npm/monaco-editor@${VERSION}/min/vs/loader.js`);
    await loadScript(`https://cdn.jsdelivr.net/npm/monaco-editor@${VERSION}/min/vs/editor/editor.main.nls.js`);
    await loadScript(`https://cdn.jsdelivr.net/npm/monaco-editor@${VERSION}/min/vs/editor/editor.main.js`);
  }
}

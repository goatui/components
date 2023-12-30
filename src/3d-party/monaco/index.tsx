import { loadScript } from '../../utils/utils';
import { getAssetPath } from '@stencil/core';

//const VERSION = '0.40.0';
export default async function loadMonaco() {
  // @ts-ignore
  window['require'] = { paths: { vs: getAssetPath('./assets/node_modules/monaco-editor/min/vs') } };
  await loadScript(getAssetPath('./assets/node_modules/monaco-editor/min/vs/loader.js'));
  await loadScript(getAssetPath('./assets/node_modules/monaco-editor/min/vs/editor/editor.main.nls.js'));
  await loadScript(getAssetPath('./assets/node_modules/monaco-editor/min/vs/editor/editor.main.js'));
}

import { loadScript, waitUntil } from '../../utils/utils';
import { getAssetPath } from '@stencil/core';

const VERSION = '0.48.0';

let loadMonacoCalled = false;

export default async function loadMonaco() {
  if (loadMonacoCalled) {
    await waitUntil(() => !!window['monaco']);
    return;
  }

  loadMonacoCalled = true;

  if (process.env.THIRD_PARTY_ASSETS == 'LOCAL') {
    window['require'] = {
      // @ts-ignore
      paths: { vs: getAssetPath('./assets/node_modules/monaco-editor/min/vs') },
    };
    await loadScript(
      getAssetPath('./assets/node_modules/monaco-editor/min/vs/loader.js'),
    );
    await loadScript(
      getAssetPath(
        './assets/node_modules/monaco-editor/min/vs/editor/editor.main.nls.js',
      ),
    );
    await loadScript(
      getAssetPath(
        './assets/node_modules/monaco-editor/min/vs/editor/editor.main.js',
      ),
    );
  } else {
    window['require'] = {
      // @ts-ignore
      paths: {
        vs: `https://cdn.jsdelivr.net/npm/monaco-editor@${VERSION}/min/vs`,
      },
    };
    await loadScript(
      `https://cdn.jsdelivr.net/npm/monaco-editor@${VERSION}/min/vs/loader.js`,
    );
    await loadScript(
      `https://cdn.jsdelivr.net/npm/monaco-editor@${VERSION}/min/vs/editor/editor.main.nls.js`,
    );
    await loadScript(
      `https://cdn.jsdelivr.net/npm/monaco-editor@${VERSION}/min/vs/editor/editor.main.js`,
    );
  }
}

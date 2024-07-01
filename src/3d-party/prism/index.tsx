import { loadScript, waitUntil } from '../../utils/utils';
import { getAssetPath } from '@stencil/core';

const VERSION = '1.29.0';

let loadPrismCalled = false;

export async function loadPrism() {
  if (loadPrismCalled) {
    await waitUntil(() => !!window['Prism']);
    return;
  }

  loadPrismCalled = true;

  if (process.env.THIRD_PARTY_ASSETS == 'LOCAL') {
    await loadScript(
      getAssetPath(
        './assets/node_modules/prismjs/components/prism-core.min.js',
      ),
    );
    await loadScript(
      getAssetPath(
        './assets/node_modules/prismjs/plugins/autoloader/prism-autoloader.min.js',
      ),
    );
  } else {
    await loadScript(
      `https://cdn.jsdelivr.net/npm/prismjs@${VERSION}/components/prism-core.min.js`,
    );
    await loadScript(
      `https://cdn.jsdelivr.net/npm/prismjs@${VERSION}/plugins/autoloader/prism-autoloader.min.js`,
    );
  }
}

let loadPrismLanguageCalled: any = {};

export async function loadPrismLanguage(language: string) {
  // @ts-ignore
  const Prism = window['Prism'];

  if (loadPrismLanguageCalled[language]) {
    await waitUntil(() => !!Prism.languages[language]);
    return;
  }

  loadPrismLanguageCalled[language] = true;

  await autoLoader(language);
}

export async function autoLoader(language: string) {
  // @ts-ignore
  const Prism = window['Prism'];
  const autoloader = Prism.plugins.autoloader;
  return await new Promise(resolve => {
    autoloader.loadLanguages([language], () => {
      resolve(1);
    });
  });
}

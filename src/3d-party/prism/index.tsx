import { loadScript } from '../../utils/utils';
import { getAssetPath } from '@stencil/core';

const VERSION = '1.29.0';

export async function loadPrism() {
  if (process.env.THIRD_PARTY_ASSETS == 'LOCAL') {
    await loadScript(getAssetPath('./assets/node_modules/prismjs/components/prism-core.min.js'));
    await loadScript(getAssetPath('./assets/node_modules/prismjs/plugins/autoloader/prism-autoloader.min.js'));
  } else {
    await loadScript(`https://cdn.jsdelivr.net/npm/prismjs@${VERSION}/components/prism-core.min.js`);
    await loadScript(`https://cdn.jsdelivr.net/npm/prismjs@${VERSION}/plugins/autoloader/prism-autoloader.min.js`);
  }
}

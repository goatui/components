import { loadScript } from '../../utils/utils';
import { getAssetPath } from '@stencil/core';

//const VERSION = '1.27.0';

export async function loadPrism() {
  // @ts-ignore
  await loadScript(getAssetPath('./assets/node_modules/prismjs/components/prism-core.min.js'));
  await loadScript(getAssetPath('./assets/node_modules/prismjs/plugins/autoloader/prism-autoloader.min.js'));
}

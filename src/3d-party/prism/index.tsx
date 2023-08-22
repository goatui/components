import {loadScript} from '../../utils/utils';

const VERSION = '1.27.0';

export async function loadPrism() {
  // @ts-ignore
  await loadScript(`https://cdn.jsdelivr.net/npm/prismjs@${VERSION}/components/prism-core.min.js`);
  await loadScript(`https://cdn.jsdelivr.net/npm/prismjs@${VERSION}/plugins/autoloader/prism-autoloader.min.js`);
}

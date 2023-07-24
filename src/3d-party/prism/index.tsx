import { loadScript } from '../../utils/utils';

export const PRISM_VERSION = '1.27.0';

export async function loadPrism() {
  // @ts-ignore
  await loadScript(`https://cdnjs.cloudflare.com/ajax/libs/prism/${PRISM_VERSION}/components/prism-core.min.js`);
  await loadScript(`https://cdnjs.cloudflare.com/ajax/libs/prism/${PRISM_VERSION}/plugins/autoloader/prism-autoloader.min.js`);
  await loadScript(`https://unpkg.com/prettier@3.0.0/standalone.js`);
  await loadScript(`https://unpkg.com/prettier@3.0.0/plugins/estree.js`);
  await loadScript(`https://unpkg.com/prettier@3.0.0/plugins/babel.js`);
  await loadScript(`https://unpkg.com/prettier@3.0.0/plugins/html.js`);
}

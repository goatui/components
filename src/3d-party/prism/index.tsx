import { loadScript } from '../../utils/utils';

export default async function loadPrism() {
  const version = '1.27.0';
  // @ts-ignore
  await loadScript(`https://cdnjs.cloudflare.com/ajax/libs/prism/${version}/components/prism-core.min.js`);
  await loadScript(`https://cdnjs.cloudflare.com/ajax/libs/prism/${version}/plugins/autoloader/prism-autoloader.min.js`);
}

import { loadScript } from '../../utils/utils';

export const PRISM_VERSION = '1.27.0';

export async function loadPrism() {
  // @ts-ignore
  await loadScript(`https://cdnjs.cloudflare.com/ajax/libs/prism/${PRISM_VERSION}/prism.js`);
}

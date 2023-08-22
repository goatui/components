import {loadScript} from '../../utils/utils';

const VERSION = '3.0.5';

export async function loadDompurify() {
  // @ts-ignore
  await loadScript(`https://cdn.jsdelivr.net/npm/dompurify@${VERSION}/dist/purify.min.js`);
}

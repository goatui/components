import { loadScript } from '../../utils/utils';

export default async function loadDOMPurify() {
  const version = '2.3.6';
  // @ts-ignore
  await loadScript(`https://cdnjs.cloudflare.com/ajax/libs/dompurify/${version}/purify.min.js`);
}

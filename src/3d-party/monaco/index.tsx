import { loadScript } from '../../utils/utils';

const VERSION = '0.40.0';
export default async function loadMonaco() {

  // @ts-ignore
  window['require'] = { paths: { 'vs': `https://cdn.jsdelivr.net/npm/monaco-editor@${VERSION}/min/vs` } };
  await loadScript(`https://cdn.jsdelivr.net/npm/monaco-editor@${VERSION}/min/vs/loader.js`);
  await loadScript(`https://cdn.jsdelivr.net/npm/monaco-editor@${VERSION}/min/vs/editor/editor.main.nls.js`);
  await loadScript(`https://cdn.jsdelivr.net/npm/monaco-editor@${VERSION}/min/vs/editor/editor.main.js`);
}

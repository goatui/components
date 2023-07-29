import { loadScript } from '../../utils/utils';

export default async function loadMonaco() {
  const version = '0.40.0';
  // @ts-ignore
  window['require'] = { paths: { 'vs': `https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/${version}/min/vs` } };
  await loadScript(`https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/${version}/min/vs/loader.js`);
  await loadScript(`https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/${version}/min/vs/editor/editor.main.nls.js`);
  await loadScript(`https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/${version}/min/vs/editor/editor.main.js`);
}

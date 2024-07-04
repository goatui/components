import { loadScript, waitUntil } from '../../utils/utils';
import { getAssetPath } from '@stencil/core';

let loadD3Called = false;

export async function loadD3JS() {
  if (loadD3Called) {
    await waitUntil(() => !!window['d3']);
    return;
  }

  loadD3Called = true;

  if (process.env.THIRD_PARTY_ASSETS == 'LOCAL')
    await loadScript(getAssetPath('./assets/node_modules/d3/dist/d3.min.js'));
  else await loadScript('https://cdn.jsdelivr.net/npm/d3@7.9.0/dist/d3.min.js');

  await waitUntil(() => !!window['d3']);
}

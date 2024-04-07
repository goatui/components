import { loadScript } from '../../utils/utils';
import { getAssetPath } from '@stencil/core';


export default async function loadGoogleCharts() {
  if (process.env.THIRD_PARTY_ASSETS=='LOCAL')
    await loadScript(getAssetPath('./assets/node_modules/d3/dist/d3.min.js'));
  else
    await loadScript('https://cdn.jsdelivr.net/npm/d3@7.9.0/dist/d3.min.js');
}

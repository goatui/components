import { loadScript } from '../../utils/utils';
import { getAssetPath } from '@stencil/core';

export default async function loadGoogleCharts() {
  await loadScript(getAssetPath('./assets/node_modules/d3/dist/d3.min.js'));
}

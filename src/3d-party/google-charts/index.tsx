import { loadScript } from '../../utils/utils';

export default async function loadGoogleCharts() {
  await loadScript(`https://www.gstatic.com/charts/loader.js`);
}

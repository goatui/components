import { loadScript } from '../../utils/utils';

export default async function loadGoogleCharts() {
  await loadScript(`https://d3js.org/d3.v6.js`);
}

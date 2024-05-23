import { chartColors } from '../chart-colors';

export type PieItem = {
  name: string;
  value: number;
};

export function getColorScale(data: PieItem[]) {
  const d3 = window['d3'];
  return d3
    .scaleOrdinal()
    .domain(data.map(d => d.name))
    .range(chartColors);
}

export function getPieData(data: PieItem[]) {
  const d3 = window['d3'];

  // Compute the position of each group on the pie:
  const pie = d3
    .pie()
    .sort(null) // Do not sort group by size
    .value(d => d.value);
  return pie(data);
}

export type ChartColor = {
  color: string;
  hoverColor: string;
};

export function convertToHex(colorName: string): string {
  const computed = getComputedStyle(document.documentElement).getPropertyValue(
    colorName,
  );
  return computed ? computed : colorName;
}

export const chartColors: ChartColor[] = [
  {
    color: 'var(--color-purple-70)',
    hoverColor: 'var(--color-purple-80)',
  },
  {
    color: 'var(--color-cyan-50)',
    hoverColor: 'var(--color-cyan-60)',
  },
  {
    color: 'var(--color-teal-60)',
    hoverColor: 'var(--color-teal-70)',
  },
  {
    color: 'var(--color-magenta-70)',
    hoverColor: 'var(--color-magenta-80)',
  },
];

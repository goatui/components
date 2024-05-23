/**
 * Run in deno:
 * ```cmd
 * deno run -A icons-update-from-metadata.ts
 * ```
 */
import {
  colors,
  hoverColors,
} from 'https://cdn.jsdelivr.net/npm/@carbon/colors@11.22.0/es/index.js';
import { ICON_BASE_URL } from '../src/components/icon/constants.ts';

function camelToSnakeCase(str: string): string {
  return str.replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`);
}

function parseColorMaps(colors) {
  return Object.keys(colors)
    .filter(color => typeof colors[color] === 'object')
    .map(color => {
      return `${camelToSnakeCase(color)}: (
      ${Object.keys(colors[color]).map(key => {
        return key + ':' + colors[color][key];
      })}
    )`;
    });
}

const scssColors = `$colors: (
  ${parseColorMaps(colors)},
  ${parseColorMaps(hoverColors)}
)`;

console.log(scssColors);

const response = await fetch(ICON_BASE_URL + '/metadata.json');
const result = await response.json();
await Deno.writeTextFile(
  '../src/components/icon/icons.ts',
  `export default ${JSON.stringify(
    result.icons.map(icon => {
      return {
        name: icon.name,
        label: icon.friendlyName,
        path: icon.assets[icon.assets.length - 1].filepath,
      };
    }),
    null,
    2,
  )}`,
);
await Deno.writeTextFile(
  '../astro-docs/public/assets/icons.json',
  `${JSON.stringify(
    result.icons.map(icon => {
      return {
        name: icon.name,
        label: icon.friendlyName,
        path: icon.assets[icon.assets.length - 1].filepath,
        aliases: icon.aliases,
      };
    }),
    null,
    2,
  )}`,
);

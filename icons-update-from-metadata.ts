// Run in deno: deno run -A icons-update-from-metadata.ts
import { ICON_BASE_URL } from './src/components/general/icon/constants.ts';

const response = await fetch(ICON_BASE_URL + '/metadata.json');

const result = await response.json();

await Deno.writeTextFile(
  './src/components/general/icon/icons.ts',
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
  './docs/assets/icons.json',
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

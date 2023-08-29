// Run in deno: deno run -A icons-update-from-metadata.ts
import {ICON_BASE_URL} from "./src/components/general/icon/constants.ts";

const response = await fetch(ICON_BASE_URL + '/metadata.json');

const result = await response.json();

const outputJson = result.icons.map((icon)=>{
  return {
    name: icon.name,
    label: icon.friendlyName,
    path: icon.assets[icon.assets.length - 1].filepath
  }
});

await Deno.writeTextFile('./src/components/general/icon/icons.ts', `export default ${JSON.stringify(outputJson, null, 2)}`);



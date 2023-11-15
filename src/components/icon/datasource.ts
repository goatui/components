import icons from "./icons";
import {ICON_BASE_URL} from "./constants";

export async function fetchIcon(name: string) {
  if (!name) return '';

  const cache = await caches.open('goat-icons');
  const icon = icons.find((icon: any) => {
    if (icon.name === name) {
      return icon;
    }
  });

  if (!icon) return '';

  const request = new Request(`${ICON_BASE_URL}/svg/${icon.path}`);
  let response = await cache.match(request);
  if (response) {
    const result = await response.text();
    return result;
  }
  response = await fetch(request.url, {
    method: 'GET',
    mode: 'cors',
    credentials: 'omit',
  });
  const result = await response.text();
  if (response.status === 200) {
    await cache.put(request, new Response(result));
  }
  return result;
}


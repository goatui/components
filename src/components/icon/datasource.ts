import icons from './icons';
import { ICON_BASE_URL } from './constants';
import { getAssetPath } from '@stencil/core';

export async function fetchIcon(name: string) {
  if (!name) return '';

  const cache = await window.caches.open('goat-icons');
  const icon = icons.find((icon: any) => {
    if (icon.name === name) {
      return icon;
    }
  });

  if (!icon) return '';

  let iconBaseUrl: string;
  if (process.env.THIRD_PARTY_ASSETS == 'LOCAL') {
    iconBaseUrl = getAssetPath('./assets/node_modules/@carbon/icons');
  } else {
    iconBaseUrl = ICON_BASE_URL;
  }

  const request = new Request(`${iconBaseUrl}/svg/${icon.path}`);
  let response = await cache.match(request);
  if (response) {
    return await response.text();
  }
  response = await fetch(request.url, {
    method: 'GET',
    mode: 'cors',
    credentials: 'omit',
  });
  const result = await response.text();
  if (response.status === 200 && process.env.THIRD_PARTY_ASSETS == 'REMOTE') {
    await cache.put(request, new Response(result));
  }
  return result;
}

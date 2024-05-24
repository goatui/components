import icons from './icons';
import { ICON_BASE_URL } from './constants';
import { getAssetPath } from '@stencil/core';
import { createCacheFetch } from '../../utils/utils';

export async function fetchIcon(name: string) {
  if (!name) return '';

  const cacheFetch = await createCacheFetch('goat-icons');

  const icon = icons.find((icon: any) => icon.name === name);

  if (!icon) return '';

  let iconBaseUrl: string;
  if (process.env.THIRD_PARTY_ASSETS == 'LOCAL') {
    iconBaseUrl = getAssetPath('./assets/node_modules/@carbon/icons');
  } else {
    iconBaseUrl = ICON_BASE_URL;
  }

  return await cacheFetch(`${iconBaseUrl}/svg/${icon.path}`);
}

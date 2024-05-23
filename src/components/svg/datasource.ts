import { createCacheFetch } from '../../utils/utils';

const cacheFetch = await createCacheFetch('goat-svg');

export async function fetchSVG(url) {
  if (!url) return '';

  return await cacheFetch(url);
}

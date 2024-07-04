import { createCacheFetch } from '../../../utils/utils';

export async function fetchSVG(url) {
  if (!url) return '';

  const cacheFetch = await createCacheFetch('goat-svg');

  return await cacheFetch(url);
}

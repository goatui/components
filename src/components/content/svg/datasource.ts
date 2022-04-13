const cache: Record<string, string> = {};

// TODO: prevent duplicated request when rendering multiple icons with same name simultaneously
export async function fetchIcon(url) {
  if (!url) return '';
  if (cache[url]) {
    return cache[url];
  }
  const res = await fetch(url, {
    method: 'GET',
    mode: 'cors',
    credentials: 'omit',
  });
  cache[url] = await res.text();
  return cache[url];
}

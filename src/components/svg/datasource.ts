export async function fetchSVG(url) {
  if (!url) return '';

  const cache = await window.caches.open('goat-svg');

  const request = new Request(url);
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
  if (response.status === 200) {
    await cache.put(request, new Response(result));
  }
  return result;
}

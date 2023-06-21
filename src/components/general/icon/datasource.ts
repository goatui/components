export async function fetchIcon(name: string) {
  if (!name) return '';

  const cache = await caches.open('goat-icons');
  const request = new Request(`https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/icons/${name}.svg`);
  let response = await cache.match(request);
  if (response) {
    return response.text();
  }
  response = await fetch(request.url, {
    method: 'GET',
    mode: 'cors',
    credentials: 'omit',
  });
  const result = await response.text();
  await cache.put(request, new Response(result));
  return result;
}

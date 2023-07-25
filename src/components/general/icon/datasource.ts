import icons from "./icons";

export async function fetchIcon(name: string) {
  if (!name) return '';

  const cache = await caches.open('goat-icons');
  const icon = icons.find((icon: any) => {
    if (icon.name === name) {
      return icon;
    }
  });

  if (!icon) return '';

  const request = new Request(`https://cdn.jsdelivr.net/npm/@carbon/icons@11.23.0/svg/32${icon.folder ? icon.folder : ''}/${icon.name}.svg`);
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


const cache: Record<string, string> = {};

// TODO: prevent duplicated request when rendering multiple icons with same name simultaneously
export async function fetchIcon(name: string) {
  if (!name) return '';
  if (cache[name]) {
    return cache[name];
  }
  const res = await fetch(`https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.0/icons/${name}.svg`, {
    method: 'GET',
    mode: 'cors',
    credentials: 'omit',
  });
  cache[name] = await res.text();
  return cache[name];
}

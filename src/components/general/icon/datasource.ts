export async function fetchIcon(name: string) {
  if (!name) return '';
  let result = window.localStorage.getItem(`icon_${name}`);
  if (result) {
    return result;
  }
  const res = await fetch(`https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/icons/${name}.svg`, {
    method: 'GET',
    mode: 'cors',
    credentials: 'omit',
  });
  result = await res.text();
  window.localStorage.setItem(`icon_${name}`, result);
  return result;
}

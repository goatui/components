export async function fetchIcon(url) {
  if (!url) return '';
  let result = window.localStorage.getItem(url);
  if (result) {
    return result;
  }
  const res = await fetch(url, {
    method: 'GET',
    mode: process.env.THIRD_PARTY_ASSETS == 'LOCAL' ? 'no-cors' :'cors',
    credentials: 'omit',
  });
  result = await res.text();
  window.localStorage.setItem(url, result);
  return result;
}

const debounceEvent = (event, wait) => {
  const original = event._original || event;
  return {
    _original: event,
    emit: debounce(original.emit.bind(original), wait),
  };
};
const debounce = (func, wait = 0) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(func, wait, ...args);
  };
};
async function loadScriptModule(src) {
  return new Promise(resolve => {
    const script = document.createElement('script');
    script.src = src;
    script.type = 'module';
    script.addEventListener('load', () => {
      resolve();
    });
    document.head.appendChild(script);
  });
}
async function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = src;
    script.addEventListener('load', () => {
      resolve();
    });
    document.head.appendChild(script);
  });
}
const findItemLabel = (componentEl) => {
  const itemEl = componentEl.closest('p4-item');
  if (itemEl) {
    return itemEl.querySelector('p4-label');
  }
  return null;
};
const getSelectedKeys = (map) => {
  const result = [];
  for (const key in map)
    if (map[key])
      result.push(key);
  return result;
};

export { debounceEvent as a, debounce as d, findItemLabel as f, loadScript as l };

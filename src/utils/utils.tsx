import { EventEmitter } from '@stencil/core';

export const debounceEvent = (event: EventEmitter, wait: number): EventEmitter => {
  const original = (event as any)._original || event;
  return {
    _original: event,
    emit: debounce(original.emit.bind(original), wait),
  } as EventEmitter;
};

export const debounce = (func: (...args: any[]) => void, wait = 0) => {
  let timer: any;
  return (...args: any[]): any => {
    clearTimeout(timer);
    timer = setTimeout(func, wait, ...args);
  };
};

export async function loadScriptModule(src) {
  return new Promise(resolve => {
    const script = document.createElement('script');
    script.src = src;
    script.type = 'module';
    script.addEventListener('load', () => {
      resolve(true);
    });
    document.head.appendChild(script);
  });
}

export async function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = src;
    script.addEventListener('load', () => {
      resolve(true);
    });
    document.head.appendChild(script);
  });
}

export const findItemLabel = (componentEl: HTMLElement) => {
  const itemEl = componentEl.closest('p4-item');
  if (itemEl) {
    return itemEl.querySelector('p4-label');
  }
  return null;
};

export const getSelectedKeys = (map) => {
  const result = [];
  for (const key in map)
    if (map[key])
      result.push(key);
  return result;
};

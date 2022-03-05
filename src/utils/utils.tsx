import { EventEmitter } from '@stencil/core';

export const getGoatIndex = (() => {
  let counter = 1;
  return (function() {
    return `${counter++}`;
  });
})();

export const isOutOfViewport = function(bounding: DOMRect) {

  // Check if it's out of the viewport on each side
  const out: any = {};
  out.top = bounding.top < 0;
  out.left = bounding.left < 0;
  out.bottom = bounding.bottom > (window.innerHeight || document.documentElement.clientHeight);
  out.right = bounding.right > (window.innerWidth || document.documentElement.clientWidth);
  out.any = out.top || out.left || out.bottom || out.right;
  out.all = out.top && out.left && out.bottom && out.right;

  return out;

};

export const observeThemeChange = (() => {
  let callbacks = [];
  const elem = document.querySelector('html');
  let lastClassName = elem.className;
  window.setInterval(function() {
    let className = elem.className;
    if (className !== lastClassName) {
      callbacks.forEach(callback => callback());
      lastClassName = className;
    }
  }, 10);
  return (function(callback) {
    callbacks.push(callback);
  });
})();

export const isDarkMode = () => {
  return document.querySelector('html').classList.contains('dark');
};

export enum ElementSize {
  SMALL = 'sm',
  MEDIUM = 'md',
  LARGE = 'lg',
  X_LARGE = 'xl',
  XX_LARGE = 'xxl',
  XXX_LARGE = 'xxxl',
}


// 'primary' | 'secondary' | 'info' | 'success' | 'error' | 'warning'

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
  const itemEl = componentEl.closest('p4-field-group');
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

export const getFromObject = (obj, path, defaultValue = undefined) => {
  const travel = regexp =>
    String.prototype.split
      .call(path, regexp)
      .filter(Boolean)
      .reduce((res, key) => (res !== null && res !== undefined ? res[key] : res), obj);
  const result = travel(/[,[\]]+?/) || travel(/[,[\].]+?/);
  return result === undefined || result === obj ? defaultValue : result;
};

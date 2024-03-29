import { EventEmitter } from '@stencil/core';

/**
 * Event types that trigger "drags".
 */
export const DRAG_EVENT_TYPES = new Set(['mousemove', 'touchmove']);

/**
 * Event types that trigger a "drag" to stop.
 */
export const DRAG_STOP_EVENT_TYPES = new Set(['mouseup', 'touchend', 'touchcancel']);

export const getComponentIndex = (() => {
  let counter = 1;
  return function () {
    return `${counter++}`;
  };
})();

export const generateUniqueId = () => {
  return `${Date.now()}Math.random().toString(16).substr(2)`;
};

export const isOutOfViewport = (bounding: DOMRect) => {
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
  const elem = document.documentElement;
  let lastClassName = elem.getAttribute('data-theme');
  window.setInterval(function () {
    let className = elem.getAttribute('data-theme');
    if (className !== lastClassName) {
      callbacks.forEach(callback => callback());
      lastClassName = className;
    }
  }, 10);
  return function (callback) {
    callbacks.push(callback);
  };
})();

export const isDarkMode = () => {
  return document.documentElement.getAttribute('data-theme') == 'dark';
};

export enum ElementSize {
  SMALL = 'sm',
  MEDIUM = 'md',
  LARGE = 'lg',
  X_LARGE = 'xl',
  XX_LARGE = 'xxl',
  XXX_LARGE = 'xxxl',
}

export function isEventTriggerByElement(event, element) {
  const path = event.composedPath();
  for (const elm of path) {
    if (elm === element) return true;
  }
  return false;
}

export function isEventNotTriggerByElement(event, element) {
  const path = event.composedPath();
  for (const elm of path) {
    if (elm !== element) return true;
  }
  return false;
}

export function throttle(fn, threshhold, scope) {
  threshhold || (threshhold = 250);
  var last, deferTimer;
  return function () {
    var context = scope || this;

    var now = +new Date(),
      args = arguments;
    if (last && now < last + threshhold) {
      // hold on to it
      clearTimeout(deferTimer);
      deferTimer = setTimeout(function () {
        last = now;
        fn.apply(context, args);
      }, threshhold);
    } else {
      last = now;
      fn.apply(context, args);
    }
  };
}

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
  return new Promise(resolve => {
    const script = document.createElement('script');
    script.src = src;
    script.addEventListener('load', () => {
      resolve(true);
    });
    document.head.appendChild(script);
  });
}

export const getFromObject = (obj, path, defaultValue = undefined) => {
  const travel = regexp =>
    String.prototype.split
      .call(path, regexp)
      .filter(Boolean)
      .reduce((res, key) => (res !== null && res !== undefined ? res[key] : res), obj);
  const result = travel(/[,[\]]+?/) || travel(/[,[\].]+?/);
  return result === undefined || result === obj ? defaultValue : result;
};

export function isLightOrDark(color) {
  // Variables for red, green, blue values
  let r, g, b, hsp;

  // Check the format of the color, HEX or RGB?
  if (color.match(/^rgb/)) {
    // If HEX --> store the red, green, blue values in separate variables
    color = color.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);

    r = color[1];
    g = color[2];
    b = color[3];
  } else {
    // If RGB --> Convert it to HEX: http://gist.github.com/983661
    color = +('0x' + color.slice(1).replace(color.length < 5 && /./g, '$&$&'));

    r = color >> 16;
    g = (color >> 8) & 255;
    b = color & 255;
  }

  // HSP (Highly Sensitive Poo) equation from http://alienryderflex.com/hsp.html
  hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b));

  // Using the HSP value, determine whether the color is light or dark
  if (hsp > 127.5) {
    return 'light';
  } else {
    return 'dark';
  }
}

export function getNextLayer(layer?: 'background' | '01' | '02') {
  if (!layer || layer == 'background') return '01';
  if (layer == '01') return '02';
  if (layer == '02') return 'background';
}

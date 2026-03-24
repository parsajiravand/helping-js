/**
 * Advanced utilities: search, caches, easing (ported from helper-js).
 */

export function binarySearch(arr, target, compare = (a, b) => a - b) {
  let lo = 0;
  let hi = arr.length - 1;
  while (lo <= hi) {
    const mid = (lo + hi) >> 1;
    const c = compare(arr[mid], target);
    if (c === 0) return mid;
    if (c < 0) lo = mid + 1;
    else hi = mid - 1;
  }
  return -1;
}

export class ArrayKeyMap {
  constructor(keyFn) {
    this._keyFn = keyFn;
    this._map = new Map();
  }

  set(item) {
    const k = this._keyFn(item);
    this._map.set(k, item);
    return this;
  }

  get(key) {
    return this._map.get(key);
  }

  has(key) {
    return this._map.has(key);
  }

  delete(key) {
    return this._map.delete(key);
  }

  values() {
    return [...this._map.values()];
  }
}

export class Cache {
  constructor(maxSize = 100) {
    this._max = maxSize;
    this._m = new Map();
  }

  has(key) {
    return this._m.has(key);
  }

  get(key) {
    if (!this._m.has(key)) return undefined;
    const v = this._m.get(key);
    this._m.delete(key);
    this._m.set(key, v);
    return v;
  }

  set(key, value) {
    if (this._m.has(key)) this._m.delete(key);
    this._m.set(key, value);
    while (this._m.size > this._max) {
      const first = this._m.keys().next().value;
      this._m.delete(first);
    }
    return this;
  }
}

export function attachCache(fn, cache = new Cache()) {
  return (...args) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);
    const v = fn(...args);
    cache.set(key, v);
    return v;
  };
}

export function easeInOutQuad(t) {
  return t < 0.5 ? 2 * t * t : 1 - (-2 * t + 2) ** 2 / 2;
}

export function resolveArgsByType(args, types) {
  const r = [];
  let i = 0;
  for (let j = 0; j < types.length; j++) {
    const t = types[j];
    if (i >= args.length) {
      r.push(undefined);
      continue;
    }
    if (t === 'string' && typeof args[i] === 'string') r.push(args[i++]);
    else if (t === 'number' && typeof args[i] === 'number') r.push(args[i++]);
    else if (t === 'function' && typeof args[i] === 'function') r.push(args[i++]);
    else if (t === 'object' && args[i] !== null && typeof args[i] === 'object') r.push(args[i++]);
    else r.push(undefined);
  }
  return r;
}

export function windowLoaded() {
  if (typeof document === 'undefined' || typeof window === 'undefined') {
    return Promise.resolve();
  }
  if (document.readyState === 'complete') return Promise.resolve();
  return new Promise((resolve) => {
    window.addEventListener('load', resolve, { once: true });
  });
}

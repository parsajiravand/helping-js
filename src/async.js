/**
 * Async / promise helpers (ported from helper-js; debounceImmediate uses spread args).
 */

import { splitArray } from './array';
import { isFunction } from './types';

export function promiseTimeout(ms, value) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(value), ms);
  });
}

export function promisePin(promise) {
  let settled = false;
  let result;
  let err;
  promise.then(
    (v) => {
      settled = true;
      result = v;
    },
    (e) => {
      settled = true;
      err = e;
    }
  );
  return () => {
    if (!settled) return undefined;
    if (err) throw err;
    return result;
  };
}

export function waitTime(ms) {
  return promiseTimeout(ms);
}

export async function waitFor(condition, interval = 50, timeout = 60000) {
  const start = Date.now();
  while (Date.now() - start < timeout) {
    if (await resolveValueOrGetter(condition)) return true;
    await promiseTimeout(interval);
  }
  return false;
}

function resolveValueOrGetter(v, ...args) {
  return typeof v === 'function' ? v(...args) : v;
}

export async function retry(fn, times = 3, delay = 0) {
  let lastErr;
  for (let i = 0; i < times; i++) {
    try {
      return await fn();
    } catch (e) {
      lastErr = e;
      if (delay > 0) await promiseTimeout(delay);
    }
  }
  throw lastErr;
}

export function debounceTrailing(fn, wait) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), wait);
  };
}

export function debounceImmediate(fn, wait) {
  let timer;
  return (...args) => {
    if (!timer) {
      fn(...args);
      timer = setTimeout(() => {
        timer = undefined;
      }, wait);
    } else {
      clearTimeout(timer);
      timer = setTimeout(() => {
        timer = undefined;
        fn(...args);
      }, wait);
    }
  };
}

export async function executePromiseGetters(getters) {
  const parts = splitArray(getters, 10);
  const results = [];
  for (let i = 0; i < parts.length; i++) {
    const batch = parts[i];
    const batchResults = await Promise.all(batch.map((g) => (isFunction(g) ? g() : g)));
    results.push(...batchResults);
  }
  return results;
}

export function continuous(fn, interval) {
  let stopped = false;
  const run = async () => {
    while (!stopped) {
      await Promise.resolve(fn());
      await promiseTimeout(interval);
    }
  };
  run();
  return () => {
    stopped = true;
  };
}

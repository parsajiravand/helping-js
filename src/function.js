/**
 * Function composition helpers (ported from helper-js).
 */

export function resolveValueOrGetter(valueOrGetter, ...args) {
  return typeof valueOrGetter === 'function' ? valueOrGetter(...args) : valueOrGetter;
}

export function executeWithCount(fn, count) {
  let n = 0;
  return (...args) => {
    if (n >= count) return undefined;
    n++;
    return fn(...args);
  };
}

export function watchChange(getValue, fn, interval = 100) {
  let last = getValue();
  const id = setInterval(() => {
    const cur = getValue();
    if (cur !== last) {
      last = cur;
      fn(cur);
    }
  }, interval);
  return () => clearInterval(id);
}

export function bindContext(fn, ctx) {
  return fn.bind(ctx);
}

export function applyFinally(fn, onFinally) {
  return async (...args) => {
    try {
      return await fn(...args);
    } finally {
      await resolveValueOrGetter(onFinally);
    }
  };
}

export function joinFunctionsByResult(...fns) {
  return (...args) => {
    let r;
    for (let i = 0; i < fns.length; i++) {
      r = fns[i](...args);
    }
    return r;
  };
}

export function joinFunctionsByNext(...fns) {
  return (initial) => {
    let r = initial;
    for (let i = 0; i < fns.length; i++) {
      r = fns[i](r);
    }
    return r;
  };
}

export function mapObjectTree(obj, mapper) {
  if (obj == null || typeof obj !== 'object') return obj;
  const walk = (o) => {
    if (o == null || typeof o !== 'object') return o;
    if (Array.isArray(o)) return o.map((x) => walk(x));
    const next = {};
    for (const k of Object.keys(o)) {
      next[k] = walk(mapper(o[k], k, o));
    }
    return next;
  };
  return walk(obj);
}

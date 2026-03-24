/**
 * URL helpers (ported from helper-js). getUrlParam is browser-only.
 */

export function pathJoin(...parts) {
  return parts
    .filter(Boolean)
    .map((p, i) => {
      let s = String(p).replace(/\\/g, '/');
      if (i > 0) s = s.replace(/^\/+/, '');
      if (i < parts.length - 1) s = s.replace(/\/+$/, '');
      return s;
    })
    .join('/');
}

/**
 * Read query param from current location (browser). Returns undefined in Node or if no document.
 */
export function getUrlParam(name, url) {
  if (typeof document === 'undefined' && url == null) return undefined;
  const search =
    url != null
      ? (() => {
          try {
            return new URL(url, 'http://x').search;
          } catch {
            return '';
          }
        })()
      : typeof document !== 'undefined'
        ? window.location.search
        : '';
  const params = new URLSearchParams(search.startsWith('?') ? search : `?${search}`);
  return params.get(name) ?? undefined;
}

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUrlParam = getUrlParam;
exports.pathJoin = pathJoin;
/**
 * URL helpers (ported from helper-js). getUrlParam is browser-only.
 */

function pathJoin() {
  for (var _len = arguments.length, parts = new Array(_len), _key = 0; _key < _len; _key++) {
    parts[_key] = arguments[_key];
  }
  return parts.filter(Boolean).map(function (p, i) {
    var s = String(p).replace(/\\/g, '/');
    if (i > 0) s = s.replace(/^\/+/, '');
    if (i < parts.length - 1) s = s.replace(/\/+$/, '');
    return s;
  }).join('/');
}

/**
 * Read query param from current location (browser). Returns undefined in Node or if no document.
 */
function getUrlParam(name, url) {
  var _params$get;
  if (typeof document === 'undefined' && url == null) return undefined;
  var search = url != null ? function () {
    try {
      return new URL(url, 'http://x').search;
    } catch (_unused) {
      return '';
    }
  }() : typeof document !== 'undefined' ? window.location.search : '';
  var params = new URLSearchParams(search.startsWith('?') ? search : "?".concat(search));
  return (_params$get = params.get(name)) !== null && _params$get !== void 0 ? _params$get : undefined;
}
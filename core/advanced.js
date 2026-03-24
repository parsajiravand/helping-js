"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Cache = exports.ArrayKeyMap = void 0;
exports.attachCache = attachCache;
exports.binarySearch = binarySearch;
exports.easeInOutQuad = easeInOutQuad;
exports.resolveArgsByType = resolveArgsByType;
exports.windowLoaded = windowLoaded;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * Advanced utilities: search, caches, easing (ported from helper-js).
 */

function binarySearch(arr, target) {
  var compare = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (a, b) {
    return a - b;
  };
  var lo = 0;
  var hi = arr.length - 1;
  while (lo <= hi) {
    var mid = lo + hi >> 1;
    var c = compare(arr[mid], target);
    if (c === 0) return mid;
    if (c < 0) lo = mid + 1;else hi = mid - 1;
  }
  return -1;
}
var ArrayKeyMap = exports.ArrayKeyMap = /*#__PURE__*/function () {
  function ArrayKeyMap(keyFn) {
    _classCallCheck(this, ArrayKeyMap);
    this._keyFn = keyFn;
    this._map = new Map();
  }
  return _createClass(ArrayKeyMap, [{
    key: "set",
    value: function set(item) {
      var k = this._keyFn(item);
      this._map.set(k, item);
      return this;
    }
  }, {
    key: "get",
    value: function get(key) {
      return this._map.get(key);
    }
  }, {
    key: "has",
    value: function has(key) {
      return this._map.has(key);
    }
  }, {
    key: "delete",
    value: function _delete(key) {
      return this._map["delete"](key);
    }
  }, {
    key: "values",
    value: function values() {
      return _toConsumableArray(this._map.values());
    }
  }]);
}();
var Cache = exports.Cache = /*#__PURE__*/function () {
  function Cache() {
    var maxSize = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;
    _classCallCheck(this, Cache);
    this._max = maxSize;
    this._m = new Map();
  }
  return _createClass(Cache, [{
    key: "has",
    value: function has(key) {
      return this._m.has(key);
    }
  }, {
    key: "get",
    value: function get(key) {
      if (!this._m.has(key)) return undefined;
      var v = this._m.get(key);
      this._m["delete"](key);
      this._m.set(key, v);
      return v;
    }
  }, {
    key: "set",
    value: function set(key, value) {
      if (this._m.has(key)) this._m["delete"](key);
      this._m.set(key, value);
      while (this._m.size > this._max) {
        var first = this._m.keys().next().value;
        this._m["delete"](first);
      }
      return this;
    }
  }]);
}();
function attachCache(fn) {
  var cache = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Cache();
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    var key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);
    var v = fn.apply(void 0, args);
    cache.set(key, v);
    return v;
  };
}
function easeInOutQuad(t) {
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
}
function resolveArgsByType(args, types) {
  var r = [];
  var i = 0;
  for (var j = 0; j < types.length; j++) {
    var t = types[j];
    if (i >= args.length) {
      r.push(undefined);
      continue;
    }
    if (t === 'string' && typeof args[i] === 'string') r.push(args[i++]);else if (t === 'number' && typeof args[i] === 'number') r.push(args[i++]);else if (t === 'function' && typeof args[i] === 'function') r.push(args[i++]);else if (t === 'object' && args[i] !== null && _typeof(args[i]) === 'object') r.push(args[i++]);else r.push(undefined);
  }
  return r;
}
function windowLoaded() {
  if (typeof document === 'undefined' || typeof window === 'undefined') {
    return Promise.resolve();
  }
  if (document.readyState === 'complete') return Promise.resolve();
  return new Promise(function (resolve) {
    window.addEventListener('load', resolve, {
      once: true
    });
  });
}
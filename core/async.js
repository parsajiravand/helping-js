"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.continuous = continuous;
exports.debounceImmediate = debounceImmediate;
exports.debounceTrailing = debounceTrailing;
exports.executePromiseGetters = executePromiseGetters;
exports.promisePin = promisePin;
exports.promiseTimeout = promiseTimeout;
exports.retry = retry;
exports.waitFor = waitFor;
exports.waitTime = waitTime;
var _array = require("./array");
var _types = require("./types");
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; } /**
 * Async / promise helpers (ported from helper-js; debounceImmediate uses spread args).
 */
function promiseTimeout(ms, value) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      return resolve(value);
    }, ms);
  });
}
function promisePin(promise) {
  var settled = false;
  var result;
  var err;
  promise.then(function (v) {
    settled = true;
    result = v;
  }, function (e) {
    settled = true;
    err = e;
  });
  return function () {
    if (!settled) return undefined;
    if (err) throw err;
    return result;
  };
}
function waitTime(ms) {
  return promiseTimeout(ms);
}
function waitFor(_x) {
  return _waitFor.apply(this, arguments);
}
function _waitFor() {
  _waitFor = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(condition) {
    var interval,
      timeout,
      start,
      _args2 = arguments;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.n) {
        case 0:
          interval = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : 50;
          timeout = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : 60000;
          start = Date.now();
        case 1:
          if (!(Date.now() - start < timeout)) {
            _context2.n = 5;
            break;
          }
          _context2.n = 2;
          return resolveValueOrGetter(condition);
        case 2:
          if (!_context2.v) {
            _context2.n = 3;
            break;
          }
          return _context2.a(2, true);
        case 3:
          _context2.n = 4;
          return promiseTimeout(interval);
        case 4:
          _context2.n = 1;
          break;
        case 5:
          return _context2.a(2, false);
      }
    }, _callee2);
  }));
  return _waitFor.apply(this, arguments);
}
function resolveValueOrGetter(v) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  return typeof v === 'function' ? v.apply(void 0, args) : v;
}
function retry(_x2) {
  return _retry.apply(this, arguments);
}
function _retry() {
  _retry = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(fn) {
    var times,
      delay,
      lastErr,
      i,
      _args3 = arguments,
      _t;
    return _regenerator().w(function (_context3) {
      while (1) switch (_context3.p = _context3.n) {
        case 0:
          times = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : 3;
          delay = _args3.length > 2 && _args3[2] !== undefined ? _args3[2] : 0;
          i = 0;
        case 1:
          if (!(i < times)) {
            _context3.n = 6;
            break;
          }
          _context3.p = 2;
          _context3.n = 3;
          return fn();
        case 3:
          return _context3.a(2, _context3.v);
        case 4:
          _context3.p = 4;
          _t = _context3.v;
          lastErr = _t;
          if (!(delay > 0)) {
            _context3.n = 5;
            break;
          }
          _context3.n = 5;
          return promiseTimeout(delay);
        case 5:
          i++;
          _context3.n = 1;
          break;
        case 6:
          throw lastErr;
        case 7:
          return _context3.a(2);
      }
    }, _callee3, null, [[2, 4]]);
  }));
  return _retry.apply(this, arguments);
}
function debounceTrailing(fn, wait) {
  var timer;
  return function () {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    clearTimeout(timer);
    timer = setTimeout(function () {
      return fn.apply(void 0, args);
    }, wait);
  };
}
function debounceImmediate(fn, wait) {
  var timer;
  return function () {
    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }
    if (!timer) {
      fn.apply(void 0, args);
      timer = setTimeout(function () {
        timer = undefined;
      }, wait);
    } else {
      clearTimeout(timer);
      timer = setTimeout(function () {
        timer = undefined;
        fn.apply(void 0, args);
      }, wait);
    }
  };
}
function executePromiseGetters(_x3) {
  return _executePromiseGetters.apply(this, arguments);
}
function _executePromiseGetters() {
  _executePromiseGetters = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(getters) {
    var parts, results, i, batch, batchResults;
    return _regenerator().w(function (_context4) {
      while (1) switch (_context4.n) {
        case 0:
          parts = (0, _array.splitArray)(getters, 10);
          results = [];
          i = 0;
        case 1:
          if (!(i < parts.length)) {
            _context4.n = 4;
            break;
          }
          batch = parts[i];
          _context4.n = 2;
          return Promise.all(batch.map(function (g) {
            return (0, _types.isFunction)(g) ? g() : g;
          }));
        case 2:
          batchResults = _context4.v;
          results.push.apply(results, _toConsumableArray(batchResults));
        case 3:
          i++;
          _context4.n = 1;
          break;
        case 4:
          return _context4.a(2, results);
      }
    }, _callee4);
  }));
  return _executePromiseGetters.apply(this, arguments);
}
function continuous(fn, interval) {
  var stopped = false;
  var run = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            if (stopped) {
              _context.n = 3;
              break;
            }
            _context.n = 1;
            return Promise.resolve(fn());
          case 1:
            _context.n = 2;
            return promiseTimeout(interval);
          case 2:
            _context.n = 0;
            break;
          case 3:
            return _context.a(2);
        }
      }, _callee);
    }));
    return function run() {
      return _ref.apply(this, arguments);
    };
  }();
  run();
  return function () {
    stopped = true;
  };
}
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addClass = addClass;
exports.appendTo = appendTo;
exports.createElementFromHTML = createElementFromHTML;
exports.hasClass = hasClass;
exports.insertAfter = insertAfter;
exports.insertBefore = insertBefore;
exports.off = off;
exports.on = on;
exports.once = once;
exports.prependTo = prependTo;
exports.removeClass = removeClass;
exports.viewportPositionToFixed = viewportPositionToFixed;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * Browser DOM helpers — do not import in Node-only SSR bundles.
 */

function getEl(el) {
  return typeof el === 'string' ? document.querySelector(el) : el;
}
function createElementFromHTML(html) {
  if (typeof document === 'undefined') return null;
  var t = document.createElement('template');
  t.innerHTML = html.trim();
  return t.content.firstChild;
}
function on(el, event, handler, options) {
  if (typeof document === 'undefined') return function () {};
  var node = getEl(el);
  if (!node) return function () {};
  node.addEventListener(event, handler, options);
  return function () {
    return off(node, event, handler, options);
  };
}
function off(el, event, handler, options) {
  if (typeof document === 'undefined') return;
  var node = getEl(el);
  if (node) node.removeEventListener(event, handler, options);
}
function once(el, event, handler, options) {
  return on(el, event, handler, _objectSpread(_objectSpread({}, options), {}, {
    once: true
  }));
}
function insertBefore(el, ref) {
  if (typeof document === 'undefined') return;
  var n = getEl(el);
  var r = getEl(ref);
  if (n && r && r.parentNode) r.parentNode.insertBefore(n, r);
}
function insertAfter(el, ref) {
  if (typeof document === 'undefined') return;
  var n = getEl(el);
  var r = getEl(ref);
  if (n && r && r.parentNode) r.parentNode.insertBefore(n, r.nextSibling);
}
function prependTo(el, parent) {
  if (typeof document === 'undefined') return;
  var n = getEl(el);
  var p = getEl(parent);
  if (n && p) p.insertBefore(n, p.firstChild);
}
function appendTo(el, parent) {
  if (typeof document === 'undefined') return;
  var n = getEl(el);
  var p = getEl(parent);
  if (n && p) p.appendChild(n);
}
function hasClass(el, className) {
  if (typeof document === 'undefined') return false;
  var n = getEl(el);
  return !!(n && n.classList && n.classList.contains(className));
}
function addClass(el, className) {
  var _n$classList;
  if (typeof document === 'undefined') return;
  var n = getEl(el);
  if (n && n.classList) (_n$classList = n.classList).add.apply(_n$classList, _toConsumableArray(String(className).split(/\s+/).filter(Boolean)));
}
function removeClass(el, className) {
  var _n$classList2;
  if (typeof document === 'undefined') return;
  var n = getEl(el);
  if (n && n.classList) (_n$classList2 = n.classList).remove.apply(_n$classList2, _toConsumableArray(String(className).split(/\s+/).filter(Boolean)));
}

/**
 * Fixed: use viewportPosition.y for vertical offset (ported from helper-js).
 */
function viewportPositionToFixed(el, viewportPosition) {
  if (typeof document === 'undefined' || !viewportPosition) return;
  var node = getEl(el);
  if (!node) return;
  var x = viewportPosition.x,
    y = viewportPosition.y;
  node.style.position = 'fixed';
  node.style.left = "".concat(x, "px");
  node.style.top = "".concat(y, "px");
}
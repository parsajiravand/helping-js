"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TreeData = void 0;
exports.walkTreeData = walkTreeData;
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/**
 * Tree data helpers (ported from helper-js; TreeData.clone rewritten).
 */

function walkTreeData(root, childrenKey, visitor) {
  function walk(node, parent, depth) {
    if (node == null) return;
    visitor(node, parent, depth);
    var ch = node[childrenKey];
    if (Array.isArray(ch)) {
      for (var i = 0; i < ch.length; i++) {
        walk(ch[i], node, depth + 1);
      }
    }
  }
  walk(root, null, 0);
}
function cloneTreeNode(node, childrenKey) {
  if (node == null || _typeof(node) !== 'object') return node;
  var copy = Array.isArray(node) ? node.slice() : _objectSpread({}, node);
  var ch = copy[childrenKey];
  if (Array.isArray(ch)) {
    copy[childrenKey] = ch.map(function (c) {
      return cloneTreeNode(c, childrenKey);
    });
  }
  return copy;
}
var TreeData = exports.TreeData = /*#__PURE__*/function () {
  function TreeData(data) {
    var childrenKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'children';
    _classCallCheck(this, TreeData);
    this.data = data;
    this.childrenKey = childrenKey;
  }
  return _createClass(TreeData, [{
    key: "clone",
    value: function clone() {
      return new TreeData(cloneTreeNode(this.data, this.childrenKey), this.childrenKey);
    }
  }]);
}();
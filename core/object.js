"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assign = assign;
exports.cloneObject = cloneObject;
exports.dotGet = dotGet;
exports.dotSet = dotSet;
exports.findAll = findAll;
exports.iterateAll = iterateAll;
exports.joinRows = joinRows;
exports.mapObjects = mapObjects;
exports.objectAssign = objectAssign;
exports.objectAssignField = objectAssignField;
exports.objectDefineProxyProperty = objectDefineProxyProperty;
exports.objectExcept = objectExcept;
exports.objectMap = objectMap;
exports.objectOnly = objectOnly;
exports.unset = unset;
exports.withoutUndefined = withoutUndefined;
var _types = require("./types");
/**
 * Object helpers (ported from helper-js); dotSet guards prototype pollution.
 */

var PROTO_POLLUTION_KEYS = new Set(['__proto__', 'constructor', 'prototype']);
function isSafePathSegment(key) {
  return !PROTO_POLLUTION_KEYS.has(key);
}
function cloneObject(obj) {
  return JSON.parse(JSON.stringify(obj));
}
function objectMap(obj, fn) {
  var r = {};
  for (var _i = 0, _Object$keys = Object.keys(obj); _i < _Object$keys.length; _i++) {
    var k = _Object$keys[_i];
    r[k] = fn(obj[k], k);
  }
  return r;
}
function objectOnly(obj, keys) {
  var r = {};
  for (var i = 0; i < keys.length; i++) {
    var k = keys[i];
    if (Object.prototype.hasOwnProperty.call(obj, k)) r[k] = obj[k];
  }
  return r;
}
function objectExcept(obj, keys) {
  var set = new Set(keys);
  var r = {};
  for (var _i2 = 0, _Object$keys2 = Object.keys(obj); _i2 < _Object$keys2.length; _i2++) {
    var k = _Object$keys2[_i2];
    if (!set.has(k)) r[k] = obj[k];
  }
  return r;
}
function iterateAll(obj, fn) {
  var path = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  if (!(0, _types.isPlainObject)(obj)) return;
  for (var _i3 = 0, _Object$keys3 = Object.keys(obj); _i3 < _Object$keys3.length; _i3++) {
    var k = _Object$keys3[_i3];
    var v = obj[k];
    var p = path.concat(k);
    fn(v, k, p);
    if ((0, _types.isPlainObject)(v)) iterateAll(v, fn, p);
  }
}
function findAll(obj, fn) {
  var r = [];
  iterateAll(obj, function (v, k, p) {
    if (fn(v, k, p)) r.push({
      value: v,
      key: k,
      path: p
    });
  });
  return r;
}
function dotGet(obj, path) {
  if (!path) return obj;
  var parts = (0, _types.isString)(path) ? path.split('.') : path;
  var cur = obj;
  for (var i = 0; i < parts.length; i++) {
    if (cur == null) return undefined;
    cur = cur[parts[i]];
  }
  return cur;
}
function dotSet(obj, path, value) {
  if (!path) return obj;
  var parts = (0, _types.isString)(path) ? path.split('.') : path;
  if (parts.length === 0) return obj;
  var cur = obj;
  for (var i = 0; i < parts.length - 1; i++) {
    var key = parts[i];
    if (!isSafePathSegment(key)) return obj;
    if (cur[key] == null || !(0, _types.isPlainObject)(cur[key])) cur[key] = {};
    cur = cur[key];
  }
  var last = parts[parts.length - 1];
  if (!isSafePathSegment(last)) return obj;
  cur[last] = value;
  return obj;
}
function unset(obj, path) {
  var parts = (0, _types.isString)(path) ? path.split('.') : path;
  if (parts.length === 0) return obj;
  var cur = obj;
  for (var i = 0; i < parts.length - 1; i++) {
    var key = parts[i];
    if (!isSafePathSegment(key)) return obj;
    if (cur[key] == null) return obj;
    cur = cur[key];
  }
  var last = parts[parts.length - 1];
  if (!isSafePathSegment(last)) return obj;
  delete cur[last];
  return obj;
}
function assign(target) {
  for (var _len = arguments.length, sources = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    sources[_key - 1] = arguments[_key];
  }
  return Object.assign.apply(Object, [target].concat(sources));
}
function objectAssign(target) {
  for (var _len2 = arguments.length, sources = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    sources[_key2 - 1] = arguments[_key2];
  }
  return Object.assign.apply(Object, [target].concat(sources));
}
function objectAssignField(field) {
  return function (target, source) {
    if (source && Object.prototype.hasOwnProperty.call(source, field)) {
      target[field] = source[field];
    }
    return target;
  };
}
function withoutUndefined(obj) {
  var r = {};
  for (var _i4 = 0, _Object$keys4 = Object.keys(obj); _i4 < _Object$keys4.length; _i4++) {
    var k = _Object$keys4[_i4];
    if (obj[k] !== undefined) r[k] = obj[k];
  }
  return r;
}
function objectDefineProxyProperty(obj, name, descriptor) {
  Object.defineProperty(obj, name, descriptor);
  return obj;
}
function mapObjects(arr, keyField) {
  var r = {};
  for (var i = 0; i < arr.length; i++) {
    var item = arr[i];
    r[item[keyField]] = item;
  }
  return r;
}
function joinRows(rows, keyFn) {
  var r = {};
  for (var i = 0; i < rows.length; i++) {
    var row = rows[i];
    var k = keyFn(row);
    if (!r[k]) r[k] = [];
    r[k].push(row);
  }
  return r;
}
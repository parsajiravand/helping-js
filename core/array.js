"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.arrayAt = arrayAt;
exports.arrayBetween = arrayBetween;
exports.arrayDiff = arrayDiff;
exports.arrayDistinct = arrayDistinct;
exports.arrayFilter = arrayFilter;
exports.arrayFirst = arrayFirst;
exports.arrayFlat = arrayFlat;
exports.arrayLast = arrayLast;
exports.arrayRemove = arrayRemove;
exports.arrayRemoveBySortedIndexes = arrayRemoveBySortedIndexes;
exports.arrayWithout = arrayWithout;
exports.arrayWithoutEnd = arrayWithoutEnd;
exports.getArrayItemSiblingsByOffsets = getArrayItemSiblingsByOffsets;
exports.groupArray = groupArray;
exports.indexesOf = indexesOf;
exports.splitArray = splitArray;
exports.toArrayIfNot = toArrayIfNot;
var _types = require("./types");
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; } /**
 * Array helpers (ported from helper-js; arrayDiff second branch aligned with first).
 */
function arrayRemove(arr, item) {
  var i = arr.indexOf(item);
  if (i >= 0) arr.splice(i, 1);
  return arr;
}
function arrayRemoveBySortedIndexes(arr, sortedIndexes) {
  for (var i = sortedIndexes.length - 1; i >= 0; i--) {
    arr.splice(sortedIndexes[i], 1);
  }
  return arr;
}
function arrayAt(arr, index) {
  if (index < 0) index = arr.length + index;
  return arr[index];
}
function arrayFirst(arr) {
  return arr[0];
}
function arrayLast(arr) {
  return arr[arr.length - 1];
}

/**
 * Compare two sorted arrays; returns [onlyInA, onlyInB] with multiplicity preserved.
 */
function arrayDiff(a, b) {
  var r1 = [];
  var r2 = [];
  var ia = 0;
  var ib = 0;
  while (ia < a.length && ib < b.length) {
    var va = a[ia];
    var vb = b[ib];
    if (va < vb) {
      r1.push(va);
      ia++;
    } else if (va > vb) {
      r2.push(vb);
      ib++;
    } else {
      var na = 0;
      var nb = 0;
      while (ia + na < a.length && a[ia + na] === va) na++;
      while (ib + nb < b.length && b[ib + nb] === vb) nb++;
      var diff = na - nb;
      var item = va;
      ia += na;
      ib += nb;
      if (diff < 0) {
        diff === -1 ? r1.push(item) : r1.push.apply(r1, _toConsumableArray(new Array(-diff).fill(item)));
      } else if (diff > 0) {
        diff === 1 ? r2.push(item) : r2.push.apply(r2, _toConsumableArray(new Array(diff).fill(item)));
      }
    }
  }
  if (ia < a.length) r1.push.apply(r1, _toConsumableArray(a.slice(ia)));
  if (ib < b.length) r2.push.apply(r2, _toConsumableArray(b.slice(ib)));
  return [r1, r2];
}
function indexesOf(arr, item) {
  var r = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === item) r.push(i);
  }
  return r;
}
function getArrayItemSiblingsByOffsets(arr, item, offsets) {
  var i = arr.indexOf(item);
  if (i < 0) return [];
  var r = [];
  for (var j = 0; j < offsets.length; j++) {
    var o = offsets[j];
    var k = i + o;
    if (k >= 0 && k < arr.length) r.push(arr[k]);
  }
  return r;
}
function toArrayIfNot(arrOrItem) {
  return (0, _types.isArray)(arrOrItem) ? arrOrItem : [arrOrItem];
}
function splitArray(arr, n) {
  var r = [];
  for (var i = 0; i < arr.length; i += n) {
    r.push(arr.slice(i, i + n));
  }
  return r;
}
function groupArray(arr, groupCount) {
  var r = [];
  var n = Math.ceil(arr.length / groupCount);
  for (var i = 0; i < groupCount; i++) {
    r.push(arr.slice(i * n, (i + 1) * n));
  }
  return r;
}
function arrayDistinct(arr) {
  return _toConsumableArray(new Set(arr));
}
function arrayBetween(arr, start, end) {
  return arr.filter(function (item) {
    return item >= start && item <= end;
  });
}
function arrayWithoutEnd(arr, n) {
  return arr.slice(0, arr.length - n);
}
function arrayFlat(arr) {
  var depth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return arr.flat(depth);
}
function arrayFilter(arr, fn) {
  return arr.filter(fn);
}
function arrayWithout(arr) {
  for (var _len = arguments.length, items = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    items[_key - 1] = arguments[_key];
  }
  var set = new Set(items);
  return arr.filter(function (x) {
    return !set.has(x);
  });
}
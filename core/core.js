"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isPromise = exports.isRegExp = exports.isFile = exports.isEvent = exports.isDate = exports.isPlainObject = exports.isObject = exports.isArray = exports.isPrimitive = exports.isNumeric = exports.isNumber = exports.isString = exports.isBoolean = exports.isFunction = exports.isUndefinedOrNullOrEmpty = exports.isUndefinedOrNull = exports.isEmptyString = exports.isNull = exports.isUndefined = exports.toRawTypeLC = exports.toRawType = exports.toType = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /** @preserve
                                                                                                                                                                                                                                                                               * check-javascript-type
                                                                                                                                                                                                                                                                               * Creator:parsa jiravand
                                                                                                                                                                                                                                                                               * check javascript type simple.
                                                                                                                                                                                                                                                                               * MIT License
                                                                                                                                                                                                                                                                               */

var _regex = require("./regex");

var _safeTypes = require("./safe-types");

// --- Convenience inspection utilities ---

var toType = exports.toType = function toType(value) {
  return typeof value === "undefined" ? "undefined" : _typeof(value);
};

var toRawType = exports.toRawType = function toRawType(value) {
  return Object.prototype.toString.call(value).slice(8, -1);
};

var toRawTypeLC = exports.toRawTypeLC = function toRawTypeLC(value) {
  return toRawType(value).toLowerCase();
};

var isUndefined = exports.isUndefined = function isUndefined(value) {
  return value === undefined;
};

var isNull = exports.isNull = function isNull(value) {
  return value === null;
};

var isEmptyString = exports.isEmptyString = function isEmptyString(value) {
  return value === "";
};

var isUndefinedOrNull = exports.isUndefinedOrNull = function isUndefinedOrNull(value) {
  return isUndefined(value) || isNull(value);
};

var isUndefinedOrNullOrEmpty = exports.isUndefinedOrNullOrEmpty = function isUndefinedOrNullOrEmpty(value) {
  return isUndefinedOrNull(value) || isEmptyString(value);
};

var isFunction = exports.isFunction = function isFunction(value) {
  return toType(value) === "function";
};

var isBoolean = exports.isBoolean = function isBoolean(value) {
  return toType(value) === "boolean";
};

var isString = exports.isString = function isString(value) {
  return toType(value) === "string";
};

var isNumber = exports.isNumber = function isNumber(value) {
  return toType(value) === "number";
};

var isNumeric = exports.isNumeric = function isNumeric(value) {
  return _regex.RX_NUMBER.test(String(value));
};

var isPrimitive = exports.isPrimitive = function isPrimitive(value) {
  return isBoolean(value) || isString(value) || isNumber(value);
};

var isArray = exports.isArray = function isArray(value) {
  return Array.isArray(value);
};

// Quick object check
// This is primarily used to tell Objects from primitive values
// when we know the value is a JSON-compliant type
// Note object could be a complex type like array, Date, etc.
var isObject = exports.isObject = function isObject(obj) {
  return obj !== null && (typeof obj === "undefined" ? "undefined" : _typeof(obj)) === "object";
};

// Strict object type check
// Only returns true for plain JavaScript objects
var isPlainObject = exports.isPlainObject = function isPlainObject(obj) {
  return Object.prototype.toString.call(obj) === "[object Object]";
};

var isDate = exports.isDate = function isDate(value) {
  return value instanceof Date;
};

var isEvent = exports.isEvent = function isEvent(value) {
  return value instanceof Event;
};

var isFile = exports.isFile = function isFile(value) {
  return value instanceof _safeTypes.File;
};

var isRegExp = exports.isRegExp = function isRegExp(value) {
  return toRawType(value) === "RegExp";
};

var isPromise = exports.isPromise = function isPromise(value) {
  return !isUndefinedOrNull(value) && isFunction(value.then) && isFunction(value.catch);
};
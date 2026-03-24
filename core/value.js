"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isEmptyValue = isEmptyValue;
var _types = require("./types");
/**
 * Value emptiness check (ported from helper-js `empty` as isEmptyValue).
 */

/**
 * True for null, undefined, empty string, empty array, empty plain object,
 * false, NaN, or 0 (per helper-js semantics).
 */
function isEmptyValue(value) {
  if ((0, _types.isUndefinedOrNull)(value)) return true;
  if ((0, _types.isBoolean)(value) && value === false) return true;
  if ((0, _types.isNumber)(value) && (Number.isNaN(value) || value === 0)) return true;
  if ((0, _types.isString)(value) && value === '') return true;
  if ((0, _types.isArray)(value) && value.length === 0) return true;
  if ((0, _types.isPlainObject)(value) && Object.keys(value).length === 0) return true;
  return false;
}
/**
 * Value emptiness check (ported from helper-js `empty` as isEmptyValue).
 */

import {
  isArray,
  isBoolean,
  isNumber,
  isPlainObject,
  isString,
  isUndefinedOrNull,
} from './types';

/**
 * True for null, undefined, empty string, empty array, empty plain object,
 * false, NaN, or 0 (per helper-js semantics).
 */
export function isEmptyValue(value) {
  if (isUndefinedOrNull(value)) return true;
  if (isBoolean(value) && value === false) return true;
  if (isNumber(value) && (Number.isNaN(value) || value === 0)) return true;
  if (isString(value) && value === '') return true;
  if (isArray(value) && value.length === 0) return true;
  if (isPlainObject(value) && Object.keys(value).length === 0) return true;
  return false;
}

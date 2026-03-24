"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.between = between;
exports.notGreaterThan = notGreaterThan;
exports.notLessThan = notLessThan;
exports.randChoice = randChoice;
exports.randInt = randInt;
exports.strPad = strPad;
/**
 * Number and numeric helpers (ported from helper-js with strPad fix).
 */

function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function randChoice(arr) {
  return arr[randInt(0, arr.length - 1)];
}
function between(value, min, max) {
  return Math.min(Math.max(value, min), max);
}
function notLessThan(value, min) {
  return Math.max(value, min);
}
function notGreaterThan(value, max) {
  return Math.min(value, max);
}

/**
 * Pad string to length with character (left). Returns the padded result.
 */
function strPad(str, length) {
  var padChar = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ' ';
  var s = String(str);
  var pad = String(padChar).charAt(0) || ' ';
  var r = s;
  while (r.length < length) {
    r = pad + r;
  }
  return r;
}
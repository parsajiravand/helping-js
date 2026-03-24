"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.camelCase = camelCase;
exports.camelToWords = camelToWords;
exports.kebabCase = kebabCase;
exports.randString = randString;
exports.reverseString = reverseString;
exports.snakeCase = snakeCase;
exports.studlyCase = studlyCase;
exports.titleCase = titleCase;
var _number = require("./number");
/**
 * String case and random helpers (ported from helper-js).
 */

function studlyCase(str) {
  var s = String(str);
  return s && s[0].toUpperCase() + s.slice(1);
}
function kebabCase(str) {
  return String(str).replace(/([a-z])([A-Z])/g, '$1-$2').replace(/[\s_]+/g, '-').toLowerCase().replace(/^-+|-+$/g, '');
}
function snakeCase(str) {
  return String(str).replace(/([a-z])([A-Z])/g, '$1_$2').replace(/[\s-]+/g, '_').toLowerCase();
}
function camelCase(str) {
  return String(str).replace(/(?:^\w|[A-Z]|\b\w)/g, function (letter, index) {
    return index === 0 ? letter.toLowerCase() : letter.toUpperCase();
  }).replace(/\s+/g, '');
}
function camelToWords(str) {
  return String(str).replace(/([A-Z])/g, ' $1').trim();
}
function titleCase(str) {
  return String(str).replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}
var RAND_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
function randString(length) {
  var r = '';
  var max = RAND_CHARS.length - 1;
  for (var i = 0; i < length; i += 1) {
    r += RAND_CHARS[(0, _number.randInt)(0, max)];
  }
  return r;
}
function reverseString(str) {
  return String(str).split('').reverse().join('');
}
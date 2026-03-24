/**
 * String case and random helpers (ported from helper-js).
 */

import { randInt } from './number';

export function studlyCase(str) {
  const s = String(str);
  return s && s[0].toUpperCase() + s.slice(1);
}

export function kebabCase(str) {
  return String(str)
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase()
    .replace(/^-+|-+$/g, '');
}

export function snakeCase(str) {
  return String(str)
    .replace(/([a-z])([A-Z])/g, '$1_$2')
    .replace(/[\s-]+/g, '_')
    .toLowerCase();
}

export function camelCase(str) {
  return String(str)
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (letter, index) =>
      index === 0 ? letter.toLowerCase() : letter.toUpperCase()
    )
    .replace(/\s+/g, '');
}

export function camelToWords(str) {
  return String(str).replace(/([A-Z])/g, ' $1').trim();
}

export function titleCase(str) {
  return String(str).replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}

const RAND_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

export function randString(length) {
  let r = '';
  const max = RAND_CHARS.length - 1;
  for (let i = 0; i < length; i += 1) {
    r += RAND_CHARS[randInt(0, max)];
  }
  return r;
}

export function reverseString(str) {
  return String(str).split('').reverse().join('');
}

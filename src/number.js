/**
 * Number and numeric helpers (ported from helper-js with strPad fix).
 */

export function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function randChoice(arr) {
  return arr[randInt(0, arr.length - 1)];
}

export function between(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

export function notLessThan(value, min) {
  return Math.max(value, min);
}

export function notGreaterThan(value, max) {
  return Math.min(value, max);
}

/**
 * Pad string to length with character (left). Returns the padded result.
 */
export function strPad(str, length, padChar = ' ') {
  const s = String(str);
  const pad = String(padChar).charAt(0) || ' ';
  let r = s;
  while (r.length < length) {
    r = pad + r;
  }
  return r;
}

/**
 * Object helpers (ported from helper-js); dotSet guards prototype pollution.
 */

import { isPlainObject, isString } from './types';

const PROTO_POLLUTION_KEYS = new Set(['__proto__', 'constructor', 'prototype']);

function isSafePathSegment(key) {
  return !PROTO_POLLUTION_KEYS.has(key);
}

export function cloneObject(obj) {
  return JSON.parse(JSON.stringify(obj));
}

export function objectMap(obj, fn) {
  const r = {};
  for (const k of Object.keys(obj)) {
    r[k] = fn(obj[k], k);
  }
  return r;
}

export function objectOnly(obj, keys) {
  const r = {};
  for (let i = 0; i < keys.length; i++) {
    const k = keys[i];
    if (Object.prototype.hasOwnProperty.call(obj, k)) r[k] = obj[k];
  }
  return r;
}

export function objectExcept(obj, keys) {
  const set = new Set(keys);
  const r = {};
  for (const k of Object.keys(obj)) {
    if (!set.has(k)) r[k] = obj[k];
  }
  return r;
}

export function iterateAll(obj, fn, path = []) {
  if (!isPlainObject(obj)) return;
  for (const k of Object.keys(obj)) {
    const v = obj[k];
    const p = path.concat(k);
    fn(v, k, p);
    if (isPlainObject(v)) iterateAll(v, fn, p);
  }
}

export function findAll(obj, fn) {
  const r = [];
  iterateAll(obj, (v, k, p) => {
    if (fn(v, k, p)) r.push({ value: v, key: k, path: p });
  });
  return r;
}

export function dotGet(obj, path) {
  if (!path) return obj;
  const parts = isString(path) ? path.split('.') : path;
  let cur = obj;
  for (let i = 0; i < parts.length; i++) {
    if (cur == null) return undefined;
    cur = cur[parts[i]];
  }
  return cur;
}

export function dotSet(obj, path, value) {
  if (!path) return obj;
  const parts = isString(path) ? path.split('.') : path;
  if (parts.length === 0) return obj;
  let cur = obj;
  for (let i = 0; i < parts.length - 1; i++) {
    const key = parts[i];
    if (!isSafePathSegment(key)) return obj;
    if (cur[key] == null || !isPlainObject(cur[key])) cur[key] = {};
    cur = cur[key];
  }
  const last = parts[parts.length - 1];
  if (!isSafePathSegment(last)) return obj;
  cur[last] = value;
  return obj;
}

export function unset(obj, path) {
  const parts = isString(path) ? path.split('.') : path;
  if (parts.length === 0) return obj;
  let cur = obj;
  for (let i = 0; i < parts.length - 1; i++) {
    const key = parts[i];
    if (!isSafePathSegment(key)) return obj;
    if (cur[key] == null) return obj;
    cur = cur[key];
  }
  const last = parts[parts.length - 1];
  if (!isSafePathSegment(last)) return obj;
  delete cur[last];
  return obj;
}

export function assign(target, ...sources) {
  return Object.assign(target, ...sources);
}

export function objectAssign(target, ...sources) {
  return Object.assign(target, ...sources);
}

export function objectAssignField(field) {
  return (target, source) => {
    if (source && Object.prototype.hasOwnProperty.call(source, field)) {
      target[field] = source[field];
    }
    return target;
  };
}

export function withoutUndefined(obj) {
  const r = {};
  for (const k of Object.keys(obj)) {
    if (obj[k] !== undefined) r[k] = obj[k];
  }
  return r;
}

export function objectDefineProxyProperty(obj, name, descriptor) {
  Object.defineProperty(obj, name, descriptor);
  return obj;
}

export function mapObjects(arr, keyField) {
  const r = {};
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    r[item[keyField]] = item;
  }
  return r;
}

export function joinRows(rows, keyFn) {
  const r = {};
  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    const k = keyFn(row);
    if (!r[k]) r[k] = [];
    r[k].push(row);
  }
  return r;
}

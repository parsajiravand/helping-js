/**
 * Array helpers (ported from helper-js; arrayDiff second branch aligned with first).
 */

import { isArray } from './types';

export function arrayRemove(arr, item) {
  const i = arr.indexOf(item);
  if (i >= 0) arr.splice(i, 1);
  return arr;
}

export function arrayRemoveBySortedIndexes(arr, sortedIndexes) {
  for (let i = sortedIndexes.length - 1; i >= 0; i--) {
    arr.splice(sortedIndexes[i], 1);
  }
  return arr;
}

export function arrayAt(arr, index) {
  if (index < 0) index = arr.length + index;
  return arr[index];
}

export function arrayFirst(arr) {
  return arr[0];
}

export function arrayLast(arr) {
  return arr[arr.length - 1];
}

/**
 * Compare two sorted arrays; returns [onlyInA, onlyInB] with multiplicity preserved.
 */
export function arrayDiff(a, b) {
  const r1 = [];
  const r2 = [];
  let ia = 0;
  let ib = 0;
  while (ia < a.length && ib < b.length) {
    const va = a[ia];
    const vb = b[ib];
    if (va < vb) {
      r1.push(va);
      ia++;
    } else if (va > vb) {
      r2.push(vb);
      ib++;
    } else {
      let na = 0;
      let nb = 0;
      while (ia + na < a.length && a[ia + na] === va) na++;
      while (ib + nb < b.length && b[ib + nb] === vb) nb++;
      const diff = na - nb;
      const item = va;
      ia += na;
      ib += nb;
      if (diff < 0) {
        diff === -1 ? r1.push(item) : r1.push(...new Array(-diff).fill(item));
      } else if (diff > 0) {
        diff === 1 ? r2.push(item) : r2.push(...new Array(diff).fill(item));
      }
    }
  }
  if (ia < a.length) r1.push(...a.slice(ia));
  if (ib < b.length) r2.push(...b.slice(ib));
  return [r1, r2];
}

export function indexesOf(arr, item) {
  const r = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) r.push(i);
  }
  return r;
}

export function getArrayItemSiblingsByOffsets(arr, item, offsets) {
  const i = arr.indexOf(item);
  if (i < 0) return [];
  const r = [];
  for (let j = 0; j < offsets.length; j++) {
    const o = offsets[j];
    const k = i + o;
    if (k >= 0 && k < arr.length) r.push(arr[k]);
  }
  return r;
}

export function toArrayIfNot(arrOrItem) {
  return isArray(arrOrItem) ? arrOrItem : [arrOrItem];
}

export function splitArray(arr, n) {
  const r = [];
  for (let i = 0; i < arr.length; i += n) {
    r.push(arr.slice(i, i + n));
  }
  return r;
}

export function groupArray(arr, groupCount) {
  const r = [];
  const n = Math.ceil(arr.length / groupCount);
  for (let i = 0; i < groupCount; i++) {
    r.push(arr.slice(i * n, (i + 1) * n));
  }
  return r;
}

export function arrayDistinct(arr) {
  return [...new Set(arr)];
}

export function arrayBetween(arr, start, end) {
  return arr.filter((item) => item >= start && item <= end);
}

export function arrayWithoutEnd(arr, n) {
  return arr.slice(0, arr.length - n);
}

export function arrayFlat(arr, depth = 1) {
  return arr.flat(depth);
}

export function arrayFilter(arr, fn) {
  return arr.filter(fn);
}

export function arrayWithout(arr, ...items) {
  const set = new Set(items);
  return arr.filter((x) => !set.has(x));
}

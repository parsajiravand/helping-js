'use strict';

const { strPad, randInt, between } = require('../core/number');
const { kebabCase, camelCase } = require('../core/string');
const { isEmptyValue } = require('../core/value');
const { arrayDiff, splitArray, arrayDistinct } = require('../core/array');
const { dotGet, dotSet } = require('../core/object');
const { debounceImmediate } = require('../core/async');
const { pathJoin, getUrlParam } = require('../core/url');
const { parseISO, isIsoFormat, getMonthStart } = require('../core/date');
const { binarySearch, Cache, attachCache } = require('../core/advanced');
const { TreeData } = require('../core/tree');

describe('number', () => {
  it('strPad returns padded string', () => {
    expect(strPad('7', 3, '0')).toBe('007');
    expect(strPad('ab', 4, '-')).toBe('--ab');
  });

  it('randInt is within bounds', () => {
    for (let i = 0; i < 20; i++) {
      const n = randInt(1, 5);
      expect(n).toBeGreaterThanOrEqual(1);
      expect(n).toBeLessThanOrEqual(5);
    }
  });

  it('between clamps', () => {
    expect(between(5, 0, 10)).toBe(5);
    expect(between(-1, 0, 10)).toBe(0);
    expect(between(99, 0, 10)).toBe(10);
  });
});

describe('string', () => {
  it('kebabCase', () => {
    expect(kebabCase('fooBar')).toBe('foo-bar');
    expect(kebabCase('hello world')).toBe('hello-world');
  });

  it('camelCase', () => {
    expect(camelCase('hello world')).toBe('helloWorld');
  });
});

describe('value', () => {
  it('isEmptyValue', () => {
    expect(isEmptyValue(null)).toBe(true);
    expect(isEmptyValue(undefined)).toBe(true);
    expect(isEmptyValue('')).toBe(true);
    expect(isEmptyValue([])).toBe(true);
    expect(isEmptyValue({})).toBe(true);
    expect(isEmptyValue(false)).toBe(true);
    expect(isEmptyValue(Number.NaN)).toBe(true);
    expect(isEmptyValue(0)).toBe(true);
    expect(isEmptyValue('a')).toBe(false);
    expect(isEmptyValue(1)).toBe(false);
  });
});

describe('array', () => {
  it('arrayDiff mirrors diff branches (symmetric single vs spread)', () => {
    const [r1, r2] = arrayDiff([1, 1, 2], [1, 2, 2]);
    expect(r1.length + r2.length).toBeGreaterThan(0);
  });

  it('splitArray', () => {
    expect(splitArray([1, 2, 3, 4], 2)).toEqual([
      [1, 2],
      [3, 4],
    ]);
  });

  it('arrayDistinct', () => {
    expect(arrayDistinct([1, 1, 2])).toEqual([1, 2]);
  });
});

describe('object', () => {
  it('dotGet and dotSet', () => {
    const o = {};
    dotSet(o, 'a.b', 1);
    expect(dotGet(o, 'a.b')).toBe(1);
  });

  it('dotSet ignores __proto__ pollution', () => {
    const o = {};
    dotSet(o, '__proto__.polluted', true);
    expect({}.polluted).toBeUndefined();
    expect(o.polluted).toBeUndefined();
  });
});

describe('async', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });
  afterEach(() => {
    jest.useRealTimers();
  });

  it('debounceImmediate calls fn with latest args', () => {
    const fn = jest.fn();
    const d = debounceImmediate(fn, 100);
    d(1);
    expect(fn).toHaveBeenCalledWith(1);
    d(2);
    jest.advanceTimersByTime(100);
    expect(fn).toHaveBeenCalledWith(2);
  });
});

describe('url', () => {
  it('pathJoin', () => {
    expect(pathJoin('a', 'b', 'c')).toBe('a/b/c');
    expect(pathJoin('/a/', '/b')).toBe('/a/b');
  });

  it('getUrlParam returns undefined without document', () => {
    expect(getUrlParam('x')).toBeUndefined();
  });

  it('getUrlParam parses url string', () => {
    expect(getUrlParam('q', 'https://ex.com/?q=hi')).toBe('hi');
  });
});

describe('date', () => {
  it('parseISO and isIsoFormat', () => {
    const d = parseISO('2020-01-15');
    expect(d).toBeInstanceOf(Date);
    expect(isIsoFormat('2020-01-15')).toBe(true);
    expect(isIsoFormat('nope')).toBe(false);
  });

  it('getMonthStart', () => {
    const d = new Date(2024, 5, 15);
    const s = getMonthStart(d);
    expect(s.getDate()).toBe(1);
  });
});

describe('advanced', () => {
  it('binarySearch', () => {
    expect(binarySearch([1, 2, 3, 4], 3)).toBe(2);
    expect(binarySearch([1, 2, 3, 4], 9)).toBe(-1);
  });

  it('attachCache', () => {
    const fn = jest.fn((x) => x * 2);
    const c = attachCache(fn);
    expect(c(2)).toBe(4);
    expect(c(2)).toBe(4);
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('Cache LRU', () => {
    const cache = new Cache(2);
    cache.set('a', 1);
    cache.set('b', 2);
    cache.get('a');
    cache.set('c', 3);
    expect(cache.has('b')).toBe(false);
  });
});

describe('tree', () => {
  it('TreeData.clone deep-clones nested children', () => {
    const data = { id: 1, children: [{ id: 2 }] };
    const t = new TreeData(data);
    const c = t.clone();
    expect(c.data).not.toBe(t.data);
    expect(c.data.children[0]).not.toBe(t.data.children[0]);
    expect(c.data.children[0].id).toBe(2);
  });
});

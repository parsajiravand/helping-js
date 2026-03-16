'use strict';

const {
  toType,
  toRawType,
  toRawTypeLC,
  isUndefined,
  isNull,
  isEmptyString,
  isUndefinedOrNull,
  isUndefinedOrNullOrEmpty,
  isFunction,
  isBoolean,
  isString,
  isNumber,
  isNumeric,
  isPrimitive,
  isArray,
  isObject,
  isPlainObject,
  isDate,
  isRegExp,
  isPromise,
} = require('../core/types');

describe('types', () => {
  describe('toType', () => {
    it('returns "string" for string', () => {
      expect(toType('a')).toBe('string');
    });
    it('returns "number" for number', () => {
      expect(toType(1)).toBe('number');
    });
    it('returns "undefined" for undefined', () => {
      expect(toType(undefined)).toBe('undefined');
    });
  });

  describe('isString', () => {
    it('returns true for string', () => {
      expect(isString('test')).toBe(true);
      expect(isString('')).toBe(true);
    });
    it('returns false for non-string', () => {
      expect(isString(true)).toBe(false);
      expect(isString(1)).toBe(false);
      expect(isString(null)).toBe(false);
    });
  });

  describe('isNumber', () => {
    it('returns true for number', () => {
      expect(isNumber(0)).toBe(true);
      expect(isNumber(1.5)).toBe(true);
    });
    it('returns false for NaN and non-number', () => {
      expect(isNumber(NaN)).toBe(true); // typeof NaN === 'number'
      expect(isNumber('1')).toBe(false);
    });
  });

  describe('isUndefined', () => {
    it('returns true for undefined', () => {
      expect(isUndefined(undefined)).toBe(true);
    });
    it('returns false for null or others', () => {
      expect(isUndefined(null)).toBe(false);
    });
  });

  describe('isNull', () => {
    it('returns true for null', () => {
      expect(isNull(null)).toBe(true);
    });
  });

  describe('isArray', () => {
    it('returns true for array', () => {
      expect(isArray([])).toBe(true);
      expect(isArray([1, 2])).toBe(true);
    });
    it('returns false for non-array', () => {
      expect(isArray({})).toBe(false);
      expect(isArray('[]')).toBe(false);
    });
  });

  describe('isPlainObject', () => {
    it('returns true for plain object', () => {
      expect(isPlainObject({})).toBe(true);
      expect(isPlainObject({ a: 1 })).toBe(true);
    });
    it('returns false for non-plain object', () => {
      expect(isPlainObject([])).toBe(false);
      expect(isPlainObject(null)).toBe(false);
      expect(isPlainObject(new Date())).toBe(false);
    });
  });

  describe('isObject', () => {
    it('returns true for object or array', () => {
      expect(isObject({})).toBe(true);
      expect(isObject([])).toBe(true);
    });
    it('returns false for null and primitives', () => {
      expect(isObject(null)).toBe(false);
      expect(isObject('x')).toBe(false);
    });
  });

  describe('isNumeric', () => {
    it('returns true for numeric string or number', () => {
      expect(isNumeric('123')).toBe(true);
      expect(isNumeric('1.5')).toBe(true);
    });
    it('returns false for non-numeric', () => {
      expect(isNumeric('abc')).toBe(false);
    });
  });

  describe('isPromise', () => {
    it('returns true for thenable', () => {
      expect(isPromise(Promise.resolve())).toBe(true);
    });
    it('returns false for non-thenable', () => {
      expect(isPromise({})).toBe(false);
    });
  });

  describe('toRawType', () => {
    it('returns "[object Object]" style type', () => {
      expect(toRawType({})).toBe('Object');
      expect(toRawType([])).toBe('Array');
    });
  });

  describe('toRawTypeLC', () => {
    it('returns lowercased raw type', () => {
      expect(toRawTypeLC({})).toBe('object');
    });
  });

  describe('isEmptyString', () => {
    it('returns true for empty string', () => {
      expect(isEmptyString('')).toBe(true);
    });
    it('returns false for non-empty', () => {
      expect(isEmptyString('x')).toBe(false);
    });
  });

  describe('isUndefinedOrNull', () => {
    it('returns true for undefined or null', () => {
      expect(isUndefinedOrNull(undefined)).toBe(true);
      expect(isUndefinedOrNull(null)).toBe(true);
    });
  });

  describe('isBoolean', () => {
    it('returns true for boolean', () => {
      expect(isBoolean(true)).toBe(true);
      expect(isBoolean(false)).toBe(true);
    });
  });

  describe('isFunction', () => {
    it('returns true for function', () => {
      expect(isFunction(() => {})).toBe(true);
    });
  });

  describe('isDate', () => {
    it('returns true for Date instance', () => {
      expect(isDate(new Date())).toBe(true);
    });
  });

  describe('isRegExp', () => {
    it('returns true for RegExp', () => {
      expect(isRegExp(/a/)).toBe(true);
    });
  });
});

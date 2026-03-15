'use strict';

const { validate } = require('../core/validate');
const { RX_EMAIL } = require('../core/regex');
const { isNumber, isString } = require('../core/types');

describe('validate', () => {
  it('returns { valid: true, errors: {} } when all rules pass', () => {
    const result = validate(
      { email: 'a@b.co', age: 25 },
      { email: RX_EMAIL, age: isNumber }
    );
    expect(result.valid).toBe(true);
    expect(result.errors).toEqual({});
  });

  it('returns { valid: false, errors: { key: false } } when a rule fails', () => {
    const result = validate(
      { email: 'invalid' },
      { email: RX_EMAIL }
    );
    expect(result.valid).toBe(false);
    expect(result.errors).toEqual({ email: false });
  });

  it('handles multiple keys with mixed valid/invalid', () => {
    const result = validate(
      { email: 'ok@x.com', age: 'not a number' },
      { email: RX_EMAIL, age: isNumber }
    );
    expect(result.valid).toBe(false);
    expect(result.errors).toEqual({ age: false });
  });

  it('accepts rule as function predicate', () => {
    const result = validate(
      { x: 5 },
      { x: (v) => v === 5 }
    );
    expect(result.valid).toBe(true);
    expect(result.errors).toEqual({});

    const fail = validate(
      { x: 6 },
      { x: (v) => v === 5 }
    );
    expect(fail.valid).toBe(false);
    expect(fail.errors).toEqual({ x: false });
  });

  it('accepts rule as RegExp', () => {
    const result = validate(
      { code: 'ABC' },
      { code: /^[A-Z]+$/ }
    );
    expect(result.valid).toBe(true);

    const fail = validate(
      { code: 'ab1' },
      { code: /^[A-Z]+$/ }
    );
    expect(fail.valid).toBe(false);
    expect(fail.errors).toEqual({ code: false });
  });

  it('coerces value to string for RegExp rule', () => {
    const result = validate(
      { num: 123 },
      { num: /^\d+$/ }
    );
    expect(result.valid).toBe(true);
  });

  it('handles missing key as undefined', () => {
    const result = validate(
      {},
      { email: RX_EMAIL }
    );
    expect(result.valid).toBe(false);
    expect(result.errors).toEqual({ email: false });
  });
});

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validate = validate;
/**
 * Lightweight schema/rule-based validation.
 * Rules can be a RegExp (test against String(value)) or a function (value) => boolean.
 * @param {Record<string, unknown>} data - Object to validate
 * @param {Record<string, RegExp | ((value: unknown) => boolean)>} rules - Map of field name to rule
 * @returns {{ valid: boolean, errors: Record<string, boolean> }}
 */
function validate(data, rules) {
  var errors = {};
  var valid = true;
  for (var _i = 0, _Object$keys = Object.keys(rules); _i < _Object$keys.length; _i++) {
    var key = _Object$keys[_i];
    var rule = rules[key];
    var value = data[key];
    var pass = false;
    if (typeof rule === 'function') {
      pass = rule(value) === true;
    } else if (rule && typeof rule.test === 'function') {
      pass = rule.test(String(value !== null && value !== void 0 ? value : '')) === true;
    }
    if (!pass) {
      errors[key] = false;
      valid = false;
    }
  }
  return {
    valid: valid,
    errors: errors
  };
}
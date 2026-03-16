/**
 * Lightweight schema/rule-based validation.
 * Rules can be a RegExp (test against String(value)) or a function (value) => boolean.
 * @param {Record<string, unknown>} data - Object to validate
 * @param {Record<string, RegExp | ((value: unknown) => boolean)>} rules - Map of field name to rule
 * @returns {{ valid: boolean, errors: Record<string, boolean> }}
 */
export function validate(data, rules) {
  const errors = {};
  let valid = true;

  for (const key of Object.keys(rules)) {
    const rule = rules[key];
    const value = data[key];

    let pass = false;
    if (typeof rule === 'function') {
      pass = rule(value) === true;
    } else if (rule && typeof rule.test === 'function') {
      pass = rule.test(String(value ?? '')) === true;
    }

    if (!pass) {
      errors[key] = false;
      valid = false;
    }
  }

  return { valid, errors };
}

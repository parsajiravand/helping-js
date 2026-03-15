export type Rule = RegExp | ((value: unknown) => boolean);

export interface ValidateResult {
  valid: boolean;
  errors: Record<string, boolean>;
}

/**
 * Validate an object against a map of rules (RegExp or predicate function).
 */
export function validate(
  data: Record<string, unknown>,
  rules: Record<string, Rule>
): ValidateResult;

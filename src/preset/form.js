/**
 * Form validation preset: type checkers + email/phone/url regex + validate().
 * Import from 'helping-js/preset/form' or 'helping-js/core/preset/form'.
 */

export {
  isString,
  isNumber,
  isNumeric,
  isUndefinedOrNull,
  isUndefinedOrNullOrEmpty,
  isEmptyString,
} from '../types';

export { RX_EMAIL, RX_URL, RX_PHONE } from '../regex';

export { validate } from '../validate';

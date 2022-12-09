'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var HAS_WINDOW_SUPPORT = exports.HAS_WINDOW_SUPPORT = typeof window !== 'undefined';
var HAS_DOCUMENT_SUPPORT = exports.HAS_DOCUMENT_SUPPORT = typeof document !== 'undefined';
var HAS_NAVIGATOR_SUPPORT = exports.HAS_NAVIGATOR_SUPPORT = typeof navigator !== 'undefined';
var HAS_PROMISE_SUPPORT = exports.HAS_PROMISE_SUPPORT = typeof Promise !== 'undefined';
/* istanbul ignore next: JSDOM always returns false */
var HAS_MUTATION_OBSERVER_SUPPORT = exports.HAS_MUTATION_OBSERVER_SUPPORT = typeof MutationObserver !== 'undefined' || typeof WebKitMutationObserver !== 'undefined' || typeof MozMutationObserver !== 'undefined';

var IS_BROWSER = exports.IS_BROWSER = HAS_WINDOW_SUPPORT && HAS_DOCUMENT_SUPPORT && HAS_NAVIGATOR_SUPPORT;

var WINDOW = exports.WINDOW = HAS_WINDOW_SUPPORT ? window : {};
var DOCUMENT = exports.DOCUMENT = HAS_DOCUMENT_SUPPORT ? document : {};
var NAVIGATOR = exports.NAVIGATOR = HAS_NAVIGATOR_SUPPORT ? navigator : {};
var USER_AGENT = exports.USER_AGENT = (NAVIGATOR.userAgent || '').toLowerCase();

var IS_JSDOM = exports.IS_JSDOM = USER_AGENT.indexOf('jsdom') > 0;
var IS_IE = exports.IS_IE = /msie|trident/.test(USER_AGENT);

var HAS_TOUCH_SUPPORT = exports.HAS_TOUCH_SUPPORT = IS_BROWSER && ('ontouchstart' in DOCUMENT.documentElement || NAVIGATOR.maxTouchPoints > 0);

var HAS_POINTER_EVENT_SUPPORT = exports.HAS_POINTER_EVENT_SUPPORT = IS_BROWSER && Boolean(WINDOW.PointerEvent || WINDOW.MSPointerEvent);

/* istanbul ignore next: JSDOM only checks for 'IntersectionObserver' */
var HAS_INTERACTION_OBSERVER_SUPPORT = exports.HAS_INTERACTION_OBSERVER_SUPPORT = IS_BROWSER && 'IntersectionObserver' in WINDOW && 'IntersectionObserverEntry' in WINDOW &&
// Edge 15 and UC Browser lack support for `isIntersecting`
// but we an use `intersectionRatio > 0` instead
// 'isIntersecting' in window.IntersectionObserverEntry.prototype &&
'intersectionRatio' in WINDOW.IntersectionObserverEntry.prototype;
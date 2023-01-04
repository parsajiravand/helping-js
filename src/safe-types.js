import { HAS_WINDOW_SUPPORT, HAS_DOCUMENT_SUPPORT,HAS_NAVIGATOR_SUPPORT } from "./supoort";

export const WINDOW = HAS_WINDOW_SUPPORT ? window : {}
export const DOCUMENT = HAS_DOCUMENT_SUPPORT ? document : {}
export const NAVIGATOR = HAS_NAVIGATOR_SUPPORT ? navigator : {}
export const USER_AGENT = (NAVIGATOR.userAgent || '').toLowerCase()
/* istanbul ignore next */
export const Element = HAS_WINDOW_SUPPORT
  ? WINDOW.Element
  : class Element extends Object {};

/* istanbul ignore next */
export const HTMLElement = HAS_WINDOW_SUPPORT
  ? WINDOW.HTMLElement
  : class HTMLElement extends Element {};

/* istanbul ignore next */
export const SVGElement = HAS_WINDOW_SUPPORT
  ? WINDOW.SVGElement
  : class SVGElement extends Element {};

/* istanbul ignore next */
export const File = HAS_WINDOW_SUPPORT
  ? WINDOW.File
  : class File extends Object {};

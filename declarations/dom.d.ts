export function createElementFromHTML(html: string): ChildNode | null;

export function on(
  el: Element | string | null,
  event: string,
  handler: EventListener,
  options?: AddEventListenerOptions
): () => void;

export function off(
  el: Element | string | null,
  event: string,
  handler: EventListener,
  options?: EventListenerOptions
): void;

export function once(
  el: Element | string | null,
  event: string,
  handler: EventListener,
  options?: AddEventListenerOptions
): () => void;

export function insertBefore(el: Element | string | null, ref: Element | string | null): void;
export function insertAfter(el: Element | string | null, ref: Element | string | null): void;
export function prependTo(el: Element | string | null, parent: Element | string | null): void;
export function appendTo(el: Element | string | null, parent: Element | string | null): void;

export function hasClass(el: Element | string | null, className: string): boolean;
export function addClass(el: Element | string | null, className: string): void;
export function removeClass(el: Element | string | null, className: string): void;

export function viewportPositionToFixed(
  el: Element | string | null,
  viewportPosition: { x: number; y: number }
): void;

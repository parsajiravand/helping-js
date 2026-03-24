/**
 * Browser DOM helpers — do not import in Node-only SSR bundles.
 */

function getEl(el) {
  return typeof el === 'string' ? document.querySelector(el) : el;
}

export function createElementFromHTML(html) {
  if (typeof document === 'undefined') return null;
  const t = document.createElement('template');
  t.innerHTML = html.trim();
  return t.content.firstChild;
}

export function on(el, event, handler, options) {
  if (typeof document === 'undefined') return () => {};
  const node = getEl(el);
  if (!node) return () => {};
  node.addEventListener(event, handler, options);
  return () => off(node, event, handler, options);
}

export function off(el, event, handler, options) {
  if (typeof document === 'undefined') return;
  const node = getEl(el);
  if (node) node.removeEventListener(event, handler, options);
}

export function once(el, event, handler, options) {
  return on(el, event, handler, { ...options, once: true });
}

export function insertBefore(el, ref) {
  if (typeof document === 'undefined') return;
  const n = getEl(el);
  const r = getEl(ref);
  if (n && r && r.parentNode) r.parentNode.insertBefore(n, r);
}

export function insertAfter(el, ref) {
  if (typeof document === 'undefined') return;
  const n = getEl(el);
  const r = getEl(ref);
  if (n && r && r.parentNode) r.parentNode.insertBefore(n, r.nextSibling);
}

export function prependTo(el, parent) {
  if (typeof document === 'undefined') return;
  const n = getEl(el);
  const p = getEl(parent);
  if (n && p) p.insertBefore(n, p.firstChild);
}

export function appendTo(el, parent) {
  if (typeof document === 'undefined') return;
  const n = getEl(el);
  const p = getEl(parent);
  if (n && p) p.appendChild(n);
}

export function hasClass(el, className) {
  if (typeof document === 'undefined') return false;
  const n = getEl(el);
  return !!(n && n.classList && n.classList.contains(className));
}

export function addClass(el, className) {
  if (typeof document === 'undefined') return;
  const n = getEl(el);
  if (n && n.classList) n.classList.add(...String(className).split(/\s+/).filter(Boolean));
}

export function removeClass(el, className) {
  if (typeof document === 'undefined') return;
  const n = getEl(el);
  if (n && n.classList) n.classList.remove(...String(className).split(/\s+/).filter(Boolean));
}

/**
 * Fixed: use viewportPosition.y for vertical offset (ported from helper-js).
 */
export function viewportPositionToFixed(el, viewportPosition) {
  if (typeof document === 'undefined' || !viewportPosition) return;
  const node = getEl(el);
  if (!node) return;
  const { x, y } = viewportPosition;
  node.style.position = 'fixed';
  node.style.left = `${x}px`;
  node.style.top = `${y}px`;
}

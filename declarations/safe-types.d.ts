export const WINDOW: Window | Record<string, never>;
export const DOCUMENT: Document | Record<string, never>;
export const NAVIGATOR: Navigator | Record<string, never>;
export const USER_AGENT: string;
export const Element: typeof globalThis.Element | (new () => object);
export const HTMLElement: typeof globalThis.HTMLElement | (new () => object);
export const SVGElement: typeof globalThis.SVGElement | (new () => object);
export const File: typeof globalThis.File | (new () => object);

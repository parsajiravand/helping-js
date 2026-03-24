export function promiseTimeout<T>(ms: number, value?: T): Promise<T>;
export function promisePin<T>(promise: Promise<T>): () => T | undefined;
export function waitTime(ms: number): Promise<void>;
export function waitFor(
  condition: boolean | (() => boolean | Promise<boolean>),
  interval?: number,
  timeout?: number
): Promise<boolean>;
export function retry<T>(fn: () => Promise<T>, times?: number, delay?: number): Promise<T>;
export function debounceTrailing<T extends unknown[]>(fn: (...args: T) => void, wait: number): (...args: T) => void;
export function debounceImmediate<T extends unknown[]>(fn: (...args: T) => void, wait: number): (...args: T) => void;
export function executePromiseGetters<T>(getters: Array<T | (() => T | Promise<T>)>): Promise<T[]>;
export function continuous(fn: () => void | Promise<void>, interval: number): () => void;

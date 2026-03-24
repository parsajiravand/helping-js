export function binarySearch<T>(
  arr: T[],
  target: T,
  compare?: (a: T, b: T) => number
): number;

export class ArrayKeyMap<T> {
  constructor(keyFn: (item: T) => string | number);
  set(item: T): this;
  get(key: string | number): T | undefined;
  has(key: string | number): boolean;
  delete(key: string | number): boolean;
  values(): T[];
}

export class Cache<T = unknown> {
  constructor(maxSize?: number);
  has(key: string): boolean;
  get(key: string): T | undefined;
  set(key: string, value: T): this;
}

export function attachCache<T extends unknown[], R>(
  fn: (...args: T) => R,
  cache?: Cache<R>
): (...args: T) => R;

export function easeInOutQuad(t: number): number;

export function resolveArgsByType(args: unknown[], types: string[]): unknown[];

export function windowLoaded(): Promise<void>;

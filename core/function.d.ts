export function resolveValueOrGetter<T>(valueOrGetter: T | ((...args: unknown[]) => T), ...args: unknown[]): T;
export function executeWithCount<T extends unknown[]>(
  fn: (...args: T) => unknown,
  count: number
): (...args: T) => unknown;
export function watchChange<T>(getValue: () => T, fn: (value: T) => void, interval?: number): () => void;
export function bindContext<T extends (...args: unknown[]) => unknown>(fn: T, ctx: unknown): T;
export function applyFinally<T extends unknown[]>(
  fn: (...args: T) => Promise<unknown>,
  onFinally: unknown
): (...args: T) => Promise<unknown>;
export function joinFunctionsByResult<T extends unknown[]>(
  ...fns: Array<(...args: T) => unknown>
): (...args: T) => unknown;
export function joinFunctionsByNext(...fns: Array<(arg: unknown) => unknown>): (initial: unknown) => unknown;
export function mapObjectTree(obj: unknown, mapper: (value: unknown, key: string, parent: unknown) => unknown): unknown;

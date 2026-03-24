export function cloneObject<T>(obj: T): T;
export function objectMap<T extends Record<string, unknown>>(
  obj: T,
  fn: (value: T[keyof T], key: keyof T) => unknown
): Record<string, unknown>;
export function objectOnly<T extends Record<string, unknown>>(obj: T, keys: (keyof T)[]): Partial<T>;
export function objectExcept<T extends Record<string, unknown>>(obj: T, keys: (keyof T)[]): Partial<T>;
export function iterateAll(
  obj: Record<string, unknown>,
  fn: (value: unknown, key: string, path: string[]) => void,
  path?: string[]
): void;
export function findAll(
  obj: Record<string, unknown>,
  fn: (value: unknown, key: string, path: string[]) => boolean
): Array<{ value: unknown; key: string; path: string[] }>;
export function dotGet(obj: unknown, path: string | string[]): unknown;
export function dotSet(obj: Record<string, unknown>, path: string | string[], value: unknown): Record<string, unknown>;
export function unset(obj: Record<string, unknown>, path: string | string[]): Record<string, unknown>;
export function assign<T extends object>(target: T, ...sources: Partial<T>[]): T;
export function objectAssign<T extends object>(target: T, ...sources: Partial<T>[]): T;
export function objectAssignField(field: string): <T extends object>(target: T, source: Partial<T>) => T;
export function withoutUndefined<T extends Record<string, unknown>>(obj: T): Partial<T>;
export function objectDefineProxyProperty(
  obj: object,
  name: string | symbol,
  descriptor: PropertyDescriptor
): object;
export function mapObjects<T extends Record<string, unknown>>(arr: T[], keyField: keyof T): Record<string, T>;
export function joinRows<T>(rows: T[], keyFn: (row: T) => string): Record<string, T[]>;

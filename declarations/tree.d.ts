export function walkTreeData<T extends Record<string, unknown>>(
  root: T,
  childrenKey: keyof T,
  visitor: (node: T, parent: T | null, depth: number) => void
): void;

export class TreeData<T extends Record<string, unknown>> {
  constructor(data: T, childrenKey?: string);
  data: T;
  childrenKey: string;
  clone(): TreeData<T>;
}

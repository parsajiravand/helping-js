export function cloneDate(d: Date): Date;
export function addDate(
  date: Date,
  delta?: { years?: number; months?: number; days?: number; hours?: number; minutes?: number; seconds?: number }
): Date;
export function getMonthStart(date: Date): Date;
export function getMonthEnd(date: Date): Date;
export function getCalendar(
  year: number,
  month: number
): Array<Array<{ date: Date; label: string } | null>>;
export function parseISO(str: string): Date | null;
export function isIsoFormat(str: unknown): boolean;

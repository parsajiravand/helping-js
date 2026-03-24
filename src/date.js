/**
 * Date helpers (ported from helper-js).
 */

import { splitArray } from './array';
import { studlyCase } from './string';

export function cloneDate(d) {
  return new Date(d.getTime());
}

export function addDate(date, { years = 0, months = 0, days = 0, hours = 0, minutes = 0, seconds = 0 } = {}) {
  const r = cloneDate(date);
  if (years) r.setFullYear(r.getFullYear() + years);
  if (months) r.setMonth(r.getMonth() + months);
  if (days) r.setDate(r.getDate() + days);
  if (hours) r.setHours(r.getHours() + hours);
  if (minutes) r.setMinutes(r.getMinutes() + minutes);
  if (seconds) r.setSeconds(r.getSeconds() + seconds);
  return r;
}

export function getMonthStart(date) {
  const d = cloneDate(date);
  d.setDate(1);
  d.setHours(0, 0, 0, 0);
  return d;
}

export function getMonthEnd(date) {
  const d = cloneDate(date);
  d.setMonth(d.getMonth() + 1, 0);
  d.setHours(23, 59, 59, 999);
  return d;
}

const WEEKDAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export function getCalendar(year, month) {
  const first = new Date(year, month - 1, 1);
  const startWeekday = first.getDay();
  const daysInMonth = getMonthEnd(first).getDate();
  const cells = [];
  for (let i = 0; i < startWeekday; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(new Date(year, month - 1, d));
  const weeks = splitArray(cells, 7);
  return weeks.map((week) =>
    week.map((day) =>
      day
        ? { date: day, label: studlyCase(WEEKDAYS[day.getDay()].slice(0, 3)) }
        : null
    )
  );
}

export function parseISO(str) {
  const d = new Date(str);
  return Number.isNaN(d.getTime()) ? null : d;
}

export function isIsoFormat(str) {
  return /^\d{4}-\d{2}-\d{2}/.test(String(str));
}

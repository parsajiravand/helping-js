"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addDate = addDate;
exports.cloneDate = cloneDate;
exports.getCalendar = getCalendar;
exports.getMonthEnd = getMonthEnd;
exports.getMonthStart = getMonthStart;
exports.isIsoFormat = isIsoFormat;
exports.parseISO = parseISO;
var _array = require("./array");
var _string = require("./string");
/**
 * Date helpers (ported from helper-js).
 */

function cloneDate(d) {
  return new Date(d.getTime());
}
function addDate(date) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    _ref$years = _ref.years,
    years = _ref$years === void 0 ? 0 : _ref$years,
    _ref$months = _ref.months,
    months = _ref$months === void 0 ? 0 : _ref$months,
    _ref$days = _ref.days,
    days = _ref$days === void 0 ? 0 : _ref$days,
    _ref$hours = _ref.hours,
    hours = _ref$hours === void 0 ? 0 : _ref$hours,
    _ref$minutes = _ref.minutes,
    minutes = _ref$minutes === void 0 ? 0 : _ref$minutes,
    _ref$seconds = _ref.seconds,
    seconds = _ref$seconds === void 0 ? 0 : _ref$seconds;
  var r = cloneDate(date);
  if (years) r.setFullYear(r.getFullYear() + years);
  if (months) r.setMonth(r.getMonth() + months);
  if (days) r.setDate(r.getDate() + days);
  if (hours) r.setHours(r.getHours() + hours);
  if (minutes) r.setMinutes(r.getMinutes() + minutes);
  if (seconds) r.setSeconds(r.getSeconds() + seconds);
  return r;
}
function getMonthStart(date) {
  var d = cloneDate(date);
  d.setDate(1);
  d.setHours(0, 0, 0, 0);
  return d;
}
function getMonthEnd(date) {
  var d = cloneDate(date);
  d.setMonth(d.getMonth() + 1, 0);
  d.setHours(23, 59, 59, 999);
  return d;
}
var WEEKDAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
function getCalendar(year, month) {
  var first = new Date(year, month - 1, 1);
  var startWeekday = first.getDay();
  var daysInMonth = getMonthEnd(first).getDate();
  var cells = [];
  for (var i = 0; i < startWeekday; i++) cells.push(null);
  for (var d = 1; d <= daysInMonth; d++) cells.push(new Date(year, month - 1, d));
  var weeks = (0, _array.splitArray)(cells, 7);
  return weeks.map(function (week) {
    return week.map(function (day) {
      return day ? {
        date: day,
        label: (0, _string.studlyCase)(WEEKDAYS[day.getDay()].slice(0, 3))
      } : null;
    });
  });
}
function parseISO(str) {
  var d = new Date(str);
  return Number.isNaN(d.getTime()) ? null : d;
}
function isIsoFormat(str) {
  return /^\d{4}-\d{2}-\d{2}/.test(String(str));
}
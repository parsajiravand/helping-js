"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// --- General ---

var RX_ARRAY_NOTATION = exports.RX_ARRAY_NOTATION = /\[(\d+)]/g;
var RX_BV_PREFIX = exports.RX_BV_PREFIX = /^(BV?)/;
var RX_DIGITS = exports.RX_DIGITS = /^\d+$/;
var RX_EXTENSION = exports.RX_EXTENSION = /^\..+/;
var RX_HASH = exports.RX_HASH = /^#/;
var RX_HASH_ID = exports.RX_HASH_ID = /^#[A-Za-z]+[\w\-:.]*$/;
var RX_HTML_TAGS = exports.RX_HTML_TAGS = /(<([^>]+)>)/gi;
var RX_HYPHENATE = exports.RX_HYPHENATE = /\B([A-Z])/g;
var RX_LOWER_UPPER = exports.RX_LOWER_UPPER = /([a-z])([A-Z])/g;
var RX_NUMBER = exports.RX_NUMBER = /^[0-9]*\.?[0-9]+$/;
var RX_PLUS = exports.RX_PLUS = /\+/g;
var RX_REGEXP_REPLACE = exports.RX_REGEXP_REPLACE = /[-/\\^$*+?.()|[\]{}]/g;
var RX_SPACES = exports.RX_SPACES = /[\s\uFEFF\xA0]+/g;
var RX_SPACE_SPLIT = exports.RX_SPACE_SPLIT = /\s+/;
var RX_STAR = exports.RX_STAR = /\/\*$/;
var RX_START_SPACE_WORD = exports.RX_START_SPACE_WORD = /(\s|^)(\w)/g;
var RX_TRIM_LEFT = exports.RX_TRIM_LEFT = /^\s+/;
var RX_TRIM_RIGHT = exports.RX_TRIM_RIGHT = /\s+$/;
var RX_UNDERSCORE = exports.RX_UNDERSCORE = /_/g;
var RX_UN_KEBAB = exports.RX_UN_KEBAB = /-(\w)/g;

// --- Date ---

// Loose YYYY-MM-DD matching, ignores any appended time inforation
// Matches '1999-12-20', '1999-1-1', '1999-01-20T22:51:49.118Z', '1999-01-02 13:00:00'
var RX_DATE = exports.RX_DATE = /^\d+-\d\d?-\d\d?(?:\s|T|$)/;

// Used to split off the date parts of the YYYY-MM-DD string
var RX_DATE_SPLIT = exports.RX_DATE_SPLIT = /-|\s|T/;

// Time string RegEx (optional seconds)
var RX_TIME = exports.RX_TIME = /^([0-1]?[0-9]|2[0-3]):[0-5]?[0-9](:[0-5]?[0-9])?$/;

// --- URL ---

// HREFs must end with a hash followed by at least one non-hash character
var RX_HREF = exports.RX_HREF = /^.*(#[^#]+)$/;

var RX_ENCODED_COMMA = exports.RX_ENCODED_COMMA = /%2C/g;
var RX_ENCODE_REVERSE = exports.RX_ENCODE_REVERSE = /[!'()*]/g;
var RX_QUERY_START = exports.RX_QUERY_START = /^(\?|#|&)/;

// --- Aspect ---

var RX_ASPECT = exports.RX_ASPECT = /^\d+(\.\d*)?[/:]\d+(\.\d*)?$/;
var RX_ASPECT_SEPARATOR = exports.RX_ASPECT_SEPARATOR = /[/:]/;

// --- Grid ---

var RX_COL_CLASS = exports.RX_COL_CLASS = /^col-/;

// --- Icon ---

var RX_ICON_PREFIX = exports.RX_ICON_PREFIX = /^BIcon/;

// --- Locale ---

var RX_STRIP_LOCALE_MODS = exports.RX_STRIP_LOCALE_MODS = /-u-.+/;
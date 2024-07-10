"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// --- General ---

var RX_ARRAY_NOTATION = exports.RX_ARRAY_NOTATION = /\[(\d+)]/g; //get array notation
var RX_DIGITS = exports.RX_DIGITS = /^\d+$/; //digits
var RX_EXTENSION = exports.RX_EXTENSION = /^\..+/; //.test
var RX_HASH = exports.RX_HASH = /^#/; //#test
var RX_HASH_ID = exports.RX_HASH_ID = /^#[A-Za-z]+[\w\-:.]*$/; //#test
var RX_HTML_TAGS = exports.RX_HTML_TAGS = /(<([^>]+)>)/gi; //<div>
var RX_HYPHENATE = exports.RX_HYPHENATE = /\B([A-Z])/g; //teSt
var RX_LOWER_UPPER = exports.RX_LOWER_UPPER = /([a-z])([A-Z])/g; //testTAt lower befoer upper
var RX_NUMBER = exports.RX_NUMBER = /^[0-9]*\.?[0-9]+$/; //123123 just number
var RX_PLUS = exports.RX_PLUS = /\+/g; //get plus
var RX_REGEXP_REPLACE = exports.RX_REGEXP_REPLACE = /[-/\\^$*+?.()|[\]{}]/g; //check [-/\\^$*+?.()|[\]{}]
var RX_SPACES = exports.RX_SPACES = /[\s\uFEFF\xA0]+/g; //get spaces
var RX_SPACE_SPLIT = exports.RX_SPACE_SPLIT = /\s+/; //first split spaces
// export const RX_STAR = /\/\*$/
var RX_START_SPACE_WORD = exports.RX_START_SPACE_WORD = /(\s|^)(\w)/g; //get start space+charchter space charachters
var RX_TRIM_LEFT = exports.RX_TRIM_LEFT = /^\s+/; //get spaces from start
var RX_TRIM_RIGHT = exports.RX_TRIM_RIGHT = /\s+$/; //get spaces from end
var RX_UNDERSCORE = exports.RX_UNDERSCORE = /_/g; //get _
var RX_UN_KEBAB = exports.RX_UN_KEBAB = /-(\w)/g; //get -+charchter charchter

// --- Date ---

// Loose YYYY-MM-DD matching, ignores any appended time inforation
// Matches '1999-12-20', '1999-1-1', '1999-01-20T22:51:49.118Z', '1999-01-02 13:00:00'
var RX_DATE = exports.RX_DATE = /^\d+-\d\d?-\d\d?(?:\s|T|$)/; //get time first slice


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

// --- Locale ---

var RX_STRIP_LOCALE_MODS = exports.RX_STRIP_LOCALE_MODS = /-u-.+/;
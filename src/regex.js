// --- General ---

export const RX_ARRAY_NOTATION = /\[(\d+)]/g
export const RX_DIGITS = /^\d+$/ 
export const RX_EXTENSION = /^\..+/ //.test
export const RX_HASH = /^#/ //#test
export const RX_HASH_ID = /^#[A-Za-z]+[\w\-:.]*$/ //#test
export const RX_HTML_TAGS = /(<([^>]+)>)/gi //<div>
export const RX_HYPHENATE = /\B([A-Z])/g //teSt
export const RX_LOWER_UPPER = /([a-z])([A-Z])/g //testTAt lower befoer upper
export const RX_NUMBER = /^[0-9]*\.?[0-9]+$/ //123123 just number
export const RX_PLUS = /\+/g //get plus
export const RX_REGEXP_REPLACE = /[-/\\^$*+?.()|[\]{}]/g //check [-/\\^$*+?.()|[\]{}]
export const RX_SPACES = /[\s\uFEFF\xA0]+/g //get spaces
export const RX_SPACE_SPLIT = /\s+/ //first split spaces
// export const RX_STAR = /\/\*$/
export const RX_START_SPACE_WORD = /(\s|^)(\w)/g //get start space+charchter space charachters
export const RX_TRIM_LEFT = /^\s+/ //get spaces from start
export const RX_TRIM_RIGHT = /\s+$/ //get spaces from end
export const RX_UNDERSCORE = /_/g //get _
export const RX_UN_KEBAB = /-(\w)/g //get -+charchter charchter

// --- Date ---

// Loose YYYY-MM-DD matching, ignores any appended time inforation
// Matches '1999-12-20', '1999-1-1', '1999-01-20T22:51:49.118Z', '1999-01-02 13:00:00'
export const RX_DATE = /^\d+-\d\d?-\d\d?(?:\s|T|$)/ //get time first slice



// Time string RegEx (optional seconds)
export const RX_TIME = /^([0-1]?[0-9]|2[0-3]):[0-5]?[0-9](:[0-5]?[0-9])?$/

// --- URL ---

// HREFs must end with a hash followed by at least one non-hash character
export const RX_HREF = /^.*(#[^#]+)$/

export const RX_ENCODED_COMMA = /%2C/g
export const RX_ENCODE_REVERSE = /[!'()*]/g
export const RX_QUERY_START = /^(\?|#|&)/

// --- Aspect ---

export const RX_ASPECT = /^\d+(\.\d*)?[/:]\d+(\.\d*)?$/
export const RX_ASPECT_SEPARATOR = /[/:]/


// --- Locale ---

export const RX_STRIP_LOCALE_MODS = /-u-.+/

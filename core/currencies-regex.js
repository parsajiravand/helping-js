"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// --- Currency ---

// Currency format (USD)
var RX_CURRENCY_USD = exports.RX_CURRENCY_USD = /^\$?\d{1,3}(,\d{3})*(\.\d{2})?$/;
var RX_CURRENCY_EUR = exports.RX_CURRENCY_EUR = /^\d{1,3}(.\d{3})*(,\d{2})?€$/;
var RX_CURRENCY_GBP = exports.RX_CURRENCY_GBP = /^\d{1,3}(,\d{3})*(.\d{2})?£$/;
var RX_CURRENCY_JPY = exports.RX_CURRENCY_JPY = /^¥\d{1,3}(,\d{3})*$/;
var RX_CURRENCY_CNY = exports.RX_CURRENCY_CNY = /^¥\d{1,3}(,\d{3})*(.\d{2})?$/;
var RX_CURRENCY_KRW = exports.RX_CURRENCY_KRW = /^₩\d{1,3}(,\d{3})*(.\d{2})?$/;
var RX_CURRENCY_INR = exports.RX_CURRENCY_INR = /^₹\d{1,3}(,\d{3})*(.\d{2})?$/;
var RX_CURRENCY_RUB = exports.RX_CURRENCY_RUB = /^\d{1,3}(,\d{3})*(.\d{2})?₽$/;
var RX_CURRENCY_BRL = exports.RX_CURRENCY_BRL = /^R\$\d{1,3}(.\d{3})*(,\d{2})?$/;
var RX_CURRENCY_AUD = exports.RX_CURRENCY_AUD = /^\$\d{1,3}(,\d{3})*(.\d{2})?$/;
var RX_CURRENCY_CAD = exports.RX_CURRENCY_CAD = /^\$\d{1,3}(,\d{3})*(.\d{2})?$/;
var RX_CURRENCY_CHF = exports.RX_CURRENCY_CHF = /^CHF\d{1,3}(,\d{3})*(.\d{2})?$/;
var RX_CURRENCY_SEK = exports.RX_CURRENCY_SEK = /^kr\d{1,3}(,\d{3})*(.\d{2})?$/;
var RX_CURRENCY_NOK = exports.RX_CURRENCY_NOK = /^kr\d{1,3}(,\d{3})*(.\d{2})?$/;
var RX_CURRENCY_DKK = exports.RX_CURRENCY_DKK = /^kr\d{1,3}(,\d{3})*(.\d{2})?$/;
var RX_CURRENCY_HKD = exports.RX_CURRENCY_HKD = /^HK\$\d{1,3}(,\d{3})*(.\d{2})?$/;
var RX_CURRENCY_TWD = exports.RX_CURRENCY_TWD = /^NT\$\d{1,3}(,\d{3})*(.\d{2})?$/;
var RX_CURRENCY_SGD = exports.RX_CURRENCY_SGD = /^S\$\d{1,3}(,\d{3})*(.\d{2})?$/;
var RX_CURRENCY_MYR = exports.RX_CURRENCY_MYR = /^RM\d{1,3}(,\d{3})*(.\d{2})?$/;
var RX_CURRENCY_PHP = exports.RX_CURRENCY_PHP = /^₱\d{1,3}(,\d{3})*(.\d{2})?$/;
var RX_CURRENCY_IDR = exports.RX_CURRENCY_IDR = /^Rp\d{1,3}(,\d{3})*(.\d{2})?$/;
var RX_CURRENCY_VND = exports.RX_CURRENCY_VND = /^₫\d{1,3}(,\d{3})*(.\d{2})?$/;
var RX_CURRENCY_THB = exports.RX_CURRENCY_THB = /^฿\d{1,3}(,\d{3})*(.\d{2})?$/;
var RX_CURRENCY_TRY = exports.RX_CURRENCY_TRY = /^₺\d{1,3}(,\d{3})*(.\d{2})?$/;
var RX_CURRENCY_ZAR = exports.RX_CURRENCY_ZAR = /^R\d{1,3}(,\d{3})*(.\d{2})?$/;
var RX_CURRENCY_NZD = exports.RX_CURRENCY_NZD = /^NZ\$\d{1,3}(,\d{3})*(.\d{2})?$/;
var RX_CURRENCY_ILS = exports.RX_CURRENCY_ILS = /^₪\d{1,3}(,\d{3})*(.\d{2})?$/;
var RX_CURRENCY_EGP = exports.RX_CURRENCY_EGP = /^E£\d{1,3}(,\d{3})*(.\d{2})?$/;
var RX_CURRENCY_KWD = exports.RX_CURRENCY_KWD = /^KD\d{1,3}(,\d{3})*(.\d{2})?$/;
var RX_CURRENCY_AED = exports.RX_CURRENCY_AED = /^د.إ\d{1,3}(,\d{3})*(.\d{2})?$/;
var RX_CURRENCY_SAR = exports.RX_CURRENCY_SAR = /^SR\d{1,3}(,\d{3})*(.\d{2})?$/;
var RX_CURRENCY_CZK = exports.RX_CURRENCY_CZK = /^Kč\d{1,3}(,\d{3})*(.\d{2})?$/;
var RX_CURRENCY_PLN = exports.RX_CURRENCY_PLN = /^zł\d{1,3}(,\d{3})*(.\d{2})?$/;
var RX_CURRENCY_HUF = exports.RX_CURRENCY_HUF = /^Ft\d{1,3}(,\d{3})*(.\d{2})?$/;
var RX_CURRENCY_RON = exports.RX_CURRENCY_RON = /^lei\d{1,3}(,\d{3})*(.\d{2})?$/;
var RX_CURRENCY_BGN = exports.RX_CURRENCY_BGN = /^лв\d{1,3}(,\d{3})*(.\d{2})?$/;
var RX_CURRENCY_HRK = exports.RX_CURRENCY_HRK = /^kn\d{1,3}(,\d{3})*(.\d{2})?$/;
var RX_CURRENCY_ISK = exports.RX_CURRENCY_ISK = /^kr\d{1,3}(,\d{3})*(.\d{2})?$/;
# Currency Regex
<!-- Description -->
Currency Regex is a collection of regular expressions for validating currency formats. It includes the following currencies:

## Usage

1. You can import in your js file es6 (modules,vue,react,...)

```javascript
import { RX_CURRENCY_EUR } from "helping-js/core/currencies-regex"; // Check URL

const value = "1.000,00€";
if (RX_CURRENCY_EUR.test(value)) {
  console.log("Valid Currency");
} else {
  console.log("Invalid Currency");
}
```

2. You can import in your js file es5 (nodejs)

```javascript
const { RX_CURRENCY_EUR } = require("helping-js/core/currencies-regex"); // Check URL

const value = "1.000,00€";
if (RX_CURRENCY_EUR.test(value)) {
    console.log("Valid Currency");
} else {
    console.log("Invalid Currency");
}
```

3. You can usage from CDN (only modules)

```javascript
import { RX_CURRENCY_EUR } from "https://unpkg.com/browse/helping-js/core/currencies-regex.js";

const value = "+98123456789";
if (RX_CURRENCY_EUR.test(value)) {
  console.log("Valid Currency");
} else {
    console.log("Invalid Currency");
}
```


## Currencies
| Title | Const           | Regex                              | Sample      | Description                 |
| ----- | --------------- | ---------------------------------- | ----------- | --------------------------- |
| USD   | RX_CURRENCY_USD | /^\$?\d{1,3}(,\d{3})\*(\.\d{2})?$/ | $1,000.00   | US Dollar                   |
| EUR   | RX_CURRENCY_EUR | /^\d{1,3}(.\d{3})\*(,\d{2})?€$/    | 1.000,00€   | Euro                        |
| GBP   | RX_CURRENCY_GBP | /^\d{1,3}(,\d{3})\*(.\d{2})?£$/    | 1,000.00£   | British Pound               |
| JPY   | RX_CURRENCY_JPY | /^¥\d{1,3}(,\d{3})\*$/             | ¥1,000      | Japanese Yen                |
| CNY   | RX_CURRENCY_CNY | /^¥\d{1,3}(,\d{3})\*(.\d{2})?$/    | ¥1,000.00   | Chinese Yuan                |
| KRW   | RX_CURRENCY_KRW | /^₩\d{1,3}(,\d{3})\*(.\d{2})?$/    | ₩1,000.00   | South Korean Won            |
| INR   | RX_CURRENCY_INR | /^₹\d{1,3}(,\d{3})\*(.\d{2})?$/    | ₹1,000.00   | Indian Rupee                |
| RUB   | RX_CURRENCY_RUB | /^\d{1,3}(,\d{3})\*(.\d{2})?₽$/    | 1,000.00₽   | Russian Ruble               |
| BRL   | RX_CURRENCY_BRL | /^R\$\d{1,3}(.\d{3})\*(,\d{2})?$/  | R$1.000,00  | Brazilian Real              |
| AUD   | RX_CURRENCY_AUD | /^\$\d{1,3}(,\d{3})\*(.\d{2})?$/   | $1,000.00   | Australian Dollar           |
| CAD   | RX_CURRENCY_CAD | /^\$\d{1,3}(,\d{3})\*(.\d{2})?$/   | $1,000.00   | Canadian Dollar             |
| CHF   | RX_CURRENCY_CHF | /^CHF\d{1,3}(,\d{3})\*(.\d{2})?$/  | CHF1,000.00 | Swiss Franc                 |
| SEK   | RX_CURRENCY_SEK | /^kr\d{1,3}(,\d{3})\*(.\d{2})?$/   | kr1.000,00  | Swedish Krona               |
| NOK   | RX_CURRENCY_NOK | /^kr\d{1,3}(,\d{3})\*(.\d{2})?$/   | kr1.000,00  | Norwegian Krone             |
| DKK   | RX_CURRENCY_DKK | /^kr\d{1,3}(,\d{3})\*(.\d{2})?$/   | kr1.000,00  | Danish Krone                |
| HKD   | RX_CURRENCY_HKD | /^HK\$\d{1,3}(,\d{3})\*(.\d{2})?$/ | HK$1,000.00 | Hong Kong Dollar            |
| TWD   | RX_CURRENCY_TWD | /^NT\$\d{1,3}(,\d{3})\*(.\d{2})?$/ | NT$1,000.00 | New Taiwan Dollar           |
| SGD   | RX_CURRENCY_SGD | /^S\$\d{1,3}(,\d{3})\*(.\d{2})?$/  | S$1,000.00  | Singapore Dollar            |
| MYR   | RX_CURRENCY_MYR | /^RM\d{1,3}(,\d{3})\*(.\d{2})?$/   | RM1,000.00  | Malaysian Ringgit           |
| PHP   | RX_CURRENCY_PHP | /^₱\d{1,3}(,\d{3})\*(.\d{2})?$/    | ₱1,000.00   | Philippine Peso             |
| IDR   | RX_CURRENCY_IDR | /^Rp\d{1,3}(,\d{3})\*(.\d{2})?$/   | Rp1.000,00  | Indonesian Rupiah           |
| VND   | RX_CURRENCY_VND | /^₫\d{1,3}(,\d{3})\*(.\d{2})?$/    | ₫1.000,00   | Vietnamese Dong             |
| THB   | RX_CURRENCY_THB | /^฿\d{1,3}(,\d{3})\*(.\d{2})?$/    | ฿1,000.00   | Thai Baht                   |
| TRY   | RX_CURRENCY_TRY | /^₺\d{1,3}(,\d{3})\*(.\d{2})?$/    | ₺1.000,00   | Turkish Lira                |
| ZAR   | RX_CURRENCY_ZAR | /^R\d{1,3}(,\d{3})\*(.\d{2})?$/    | R1.000,00   | South African Rand          |
| NZD   | RX_CURRENCY_NZD | /^NZ\$\d{1,3}(,\d{3})\*(.\d{2})?$/ | NZ$1,000.00 | New Zealand Dollar          |
| ILS   | RX_CURRENCY_ILS | /^₪\d{1,3}(,\d{3})\*(.\d{2})?$/    | ₪1,000.00   | Israeli Shekel              |
| EGP   | RX_CURRENCY_EGP | /^E£\d{1,3}(,\d{3})\*(.\d{2})?$/   | E£1,000.00  | Egyptian Pound              |
| KWD   | RX_CURRENCY_KWD | /^KD\d{1,3}(,\d{3})\*(.\d{2})?$/   | KD1,000.00  | Kuwaiti Dinar               |
| AED   | RX_CURRENCY_AED | /^د.إ\d{1,3}(,\d{3})\*(.\d{2})?$/  | د.إ1,000.00 | United Arab Emirates Dirham |
| SAR   | RX_CURRENCY_SAR | /^SR\d{1,3}(,\d{3})\*(.\d{2})?$/   | SR1,000.00  | Saudi Riyal                 |
| CZK   | RX_CURRENCY_CZK | /^Kč\d{1,3}(,\d{3})\*(.\d{2})?$/   | Kč1.000,00  | Czech Koruna                |
| PLN   | RX_CURRENCY_PLN | /^zł\d{1,3}(,\d{3})\*(.\d{2})?$/   | zł1.000,00  | Polish Zloty                |
| HUF   | RX_CURRENCY_HUF | /^Ft\d{1,3}(,\d{3})\*(.\d{2})?$/   | Ft1.000,00  | Hungarian Forint            |
| RON   | RX_CURRENCY_RON | /^lei\d{1,3}(,\d{3})\*(.\d{2})?$/  | lei1.000,00 | Romanian Leu                |
| BGN   | RX_CURRENCY_BGN | /^лв\d{1,3}(,\d{3})\*(.\d{2})?$/   | лв1.000,00  | Bulgarian Lev               |
| HRK   | RX_CURRENCY_HRK | /^kn\d{1,3}(,\d{3})\*(.\d{2})?$/   | kn1.000,00  | Croatian Kuna               |
| ISK   | RX_CURRENCY_ISK | /^kr\d{1,3}(,\d{3})\*(.\d{2})?$/   | kr1.000,00  | Icelandic Krona             |

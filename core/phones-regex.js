"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

// --- Phone ---

// Argentina phone number format
var RX_PHONE_AR = exports.RX_PHONE_AR = /^(?:\+54|0)?(11|[1-9][1-9])\d{8}$/;

// Australia phone number format
var RX_PHONE_AU = exports.RX_PHONE_AU = /^(?:\+61|0)[2-478](?:[ -]?[0-9]){8}$/;

// Brazil phone number format
var RX_PHONE_BR = exports.RX_PHONE_BR = /^(?:\+55|0)[1-9][1-9][0-9]{8,9}$/;

// Canada phone number format
var RX_PHONE_CA = exports.RX_PHONE_CA = /^(?:\+1[-.●]?)?\(?([2-9][0-8][0-9])\)?[-.●]?([2-9][0-9]{2})[-.●]?([0-9]{4})$/;

// China phone number format
var RX_PHONE_CN = exports.RX_PHONE_CN = /^(?:\+86)?1[3-9][0-9]{9}$/;

// Egypt phone number format
var RX_PHONE_EG = exports.RX_PHONE_EG = /^(?:\+20|0)?1[0125]\d{8}$/;

// France phone number format
var RX_PHONE_FR = exports.RX_PHONE_FR = /^(?:\+33|0)[1-9](?:[ .-]?[0-9]{2}){4}$/;

// Germany phone number format
var RX_PHONE_DE = exports.RX_PHONE_DE = /^(?:\+49|0)[1-9][0-9]{1,4}[ -]?[0-9]{3,14}$/;

// India phone number format
var RX_PHONE_IN = exports.RX_PHONE_IN = /^(?:\+91|0)?[6-9][0-9]{9}$/;

// Indonesia phone number format
var RX_PHONE_ID = exports.RX_PHONE_ID = /^(?:\+62|0)[2-9]\d{7,11}$/;

// Italy phone number format
var RX_PHONE_IT = exports.RX_PHONE_IT = /^(?:\+39)?\s?3[1-9]\d{8}$/;

// Japan phone number format
var RX_PHONE_JP = exports.RX_PHONE_JP = /^(?:\+81|0)[6-9]0[0-9]{8}$/;

// Mexico phone number format
var RX_PHONE_MX = exports.RX_PHONE_MX = /^(?:\+52)?(1)?\s?\d{10}$/;

// Nigeria phone number format
var RX_PHONE_NG = exports.RX_PHONE_NG = /^(?:\+234|0)?[789]\d{9}$/;

// Russia phone number format
var RX_PHONE_RU = exports.RX_PHONE_RU = /^(?:\+7|8)?[489][0-9]{9,10}$/;

// Saudi Arabia phone number format
var RX_PHONE_SA = exports.RX_PHONE_SA = /^(?:\+966|0)?5\d{8}$/;

// South Africa phone number format
var RX_PHONE_ZA = exports.RX_PHONE_ZA = /^(?:\+27|0)[6-8][0-9]{8}$/;

// South Korea phone number format
var RX_PHONE_KR = exports.RX_PHONE_KR = /^(?:\+82|0)?1[0-9]{9,10}$/;

// Spain phone number format
var RX_PHONE_ES = exports.RX_PHONE_ES = /^(?:\+34)?\s?(6\d{1}|7[1-9])\d{7}$/;

// Turkey phone number format
var RX_PHONE_TR = exports.RX_PHONE_TR = /^(?:\+90|0)?5\d{9}$/;

// UK phone number format
var RX_PHONE_UK = exports.RX_PHONE_UK = /^(?:\+44|0)7\d{9}$/;

// US phone number format
var RX_PHONE_US = exports.RX_PHONE_US = /^(?:\+1[-.●]?)?\(?([2-9][0-8][0-9])\)?[-.●]?([2-9][0-9]{2})[-.●]?([0-9]{4})$/;

// Afghanistan phone number format
var RX_PHONE_AF = exports.RX_PHONE_AF = /^(?:\+93|0)?[7-9]\d{8}$/;

// Albania phone number format
var RX_PHONE_AL = exports.RX_PHONE_AL = /^(?:\+355|0)?6\d{8}$/;

// Algeria phone number format
var RX_PHONE_DZ = exports.RX_PHONE_DZ = /^(?:\+213|0)?[5-7]\d{8}$/;

// Andorra phone number format
var RX_PHONE_AD = exports.RX_PHONE_AD = /^(?:\+376)?\d{6}$/;

// Angola phone number format
var RX_PHONE_AO = exports.RX_PHONE_AO = /^(?:\+244)?[29]\d{7,8}$/;

// Antigua and Barbuda phone number format
var RX_PHONE_AG = exports.RX_PHONE_AG = /^(?:\+1-268)?[0-9]{7}$/;

// Armenia phone number format
var RX_PHONE_AM = exports.RX_PHONE_AM = /^(?:\+374|0)?(77|99|55|98|44)\d{6}$/;

// Austria phone number format
var RX_PHONE_AT = exports.RX_PHONE_AT = /^(?:\+43|0)?6\d{1,3}\d{6,10}$/;

// Azerbaijan phone number format
var RX_PHONE_AZ = exports.RX_PHONE_AZ = /^(?:\+994|0)?(50|51|55|70|77)\d{7}$/;

// Bahrain phone number format
var RX_PHONE_BH = exports.RX_PHONE_BH = /^(?:\+973)?\d{8}$/;

// Bangladesh phone number format
var RX_PHONE_BD = exports.RX_PHONE_BD = /^(?:\+880|0)?1[3-9]\d{8}$/;

// Barbados phone number format
var RX_PHONE_BB = exports.RX_PHONE_BB = /^(?:\+1-246)?[0-9]{7}$/;

// Belarus phone number format
var RX_PHONE_BY = exports.RX_PHONE_BY = /^(?:\+375|0)?(25|29|33|44)\d{7}$/;

// Belgium phone number format
var RX_PHONE_BE = exports.RX_PHONE_BE = /^(?:\+32|0)?4\d{8}$/;

// Belize phone number format
var RX_PHONE_BZ = exports.RX_PHONE_BZ = /^(?:\+501)?[0-9]{7}$/;

// Benin phone number format
var RX_PHONE_BJ = exports.RX_PHONE_BJ = /^(?:\+229)?[0-9]{8}$/;

// Bhutan phone number format
var RX_PHONE_BT = exports.RX_PHONE_BT = /^(?:\+975|0)?1[6789]\d{7}$/;

// Bolivia phone number format
var RX_PHONE_BO = exports.RX_PHONE_BO = /^(?:\+591|0)?[67]\d{7}$/;

// Bosnia and Herzegovina phone number format
var RX_PHONE_BA = exports.RX_PHONE_BA = /^(?:\+387|0)?6\d{7,8}$/;

// Botswana phone number format
var RX_PHONE_BW = exports.RX_PHONE_BW = /^(?:\+267)?[2-9]\d{7}$/;

// Brunei phone number format
var RX_PHONE_BN = exports.RX_PHONE_BN = /^(?:\+673)?[2-9]\d{6,7}$/;

// Bulgaria phone number format
var RX_PHONE_BG = exports.RX_PHONE_BG = /^(?:\+359|0)?8[7-9]\d{7}$/;

// Burkina Faso phone number format
var RX_PHONE_BF = exports.RX_PHONE_BF = /^(?:\+226)?[0-9]{8}$/;

// Burundi phone number format
var RX_PHONE_BI = exports.RX_PHONE_BI = /^(?:\+257)?[0-9]{8}$/;

// Cambodia phone number format
var RX_PHONE_KH = exports.RX_PHONE_KH = /^(?:\+855|0)?[1-9]\d{7,8}$/;

// Cameroon phone number format
var RX_PHONE_CM = exports.RX_PHONE_CM = /^(?:\+237)?[2368]\d{8}$/;

// Cape Verde phone number format
var RX_PHONE_CV = exports.RX_PHONE_CV = /^(?:\+238)?[2-9]\d{6}$/;

// Central African Republic phone number format
var RX_PHONE_CF = exports.RX_PHONE_CF = /^(?:\+236)?[2-7]\d{7}$/;

// Chad phone number format
var RX_PHONE_TD = exports.RX_PHONE_TD = /^(?:\+235)?[6-9]\d{7}$/;

// Chile phone number format
var RX_PHONE_CL = exports.RX_PHONE_CL = /^(?:\+56|0)[2-9]\d{8}$/;

// Colombia phone number format
var RX_PHONE_CO = exports.RX_PHONE_CO = /^(?:\+57|0)?[1-9]\d{7,9}$/;

// Comoros phone number format
var RX_PHONE_KM = exports.RX_PHONE_KM = /^(?:\+269)?[3-7]\d{6}$/;

// Costa Rica phone number format
var RX_PHONE_CR = exports.RX_PHONE_CR = /^(?:\+506)?[2-8]\d{7}$/;

// Croatia phone number format
var RX_PHONE_HR = exports.RX_PHONE_HR = /^(?:\+385|0)?9[1-9]\d{6,7}$/;

// Cuba phone number format
var RX_PHONE_CU = exports.RX_PHONE_CU = /^(?:\+53|0)?[5-9]\d{7}$/;

// Cyprus phone number format
var RX_PHONE_CY = exports.RX_PHONE_CY = /^(?:\+357|0)?[9-9]\d{7}$/;

// Czech Republic phone number format
var RX_PHONE_CZ = exports.RX_PHONE_CZ = /^(?:\+420)?[2-9]\d{8}$/;

// Denmark phone number format
var RX_PHONE_DK = exports.RX_PHONE_DK = /^(?:\+45)?[2-9]\d{7}$/;

// Djibouti phone number format
var RX_PHONE_DJ = exports.RX_PHONE_DJ = /^(?:\+253)?[2-7]\d{6}$/;

// Dominica phone number format
var RX_PHONE_DM = exports.RX_PHONE_DM = /^(?:\+1-767)?[0-9]{7}$/;

// Dominican Republic phone number format
var RX_PHONE_DO = exports.RX_PHONE_DO = /^(?:\+1-809|1-829|1-849)?[0-9]{7}$/;

// Ecuador phone number format
var RX_PHONE_EC = exports.RX_PHONE_EC = /^(?:\+593|0)?[2-9]\d{7,8}$/;

// El Salvador phone number format
var RX_PHONE_SV = exports.RX_PHONE_SV = /^(?:\+503)?[2-7]\d{7}$/;

// Equatorial Guinea phone number format
var RX_PHONE_GQ = exports.RX_PHONE_GQ = /^(?:\+240)?[222-229]\d{6}$/;

// Eritrea phone number format
var RX_PHONE_ER = exports.RX_PHONE_ER = /^(?:\+291)?[1-8]\d{6}$/;

// Estonia phone number format
var RX_PHONE_EE = exports.RX_PHONE_EE = /^(?:\+372)?[2-7]\d{7,8}$/;

// Eswatini (Swaziland) phone number format
var RX_PHONE_SZ = exports.RX_PHONE_SZ = /^(?:\+268)?[7-9]\d{7}$/;

// Ethiopia phone number format
var RX_PHONE_ET = exports.RX_PHONE_ET = /^(?:\+251|0)?[1-9]\d{8}$/;

// Fiji phone number format
var RX_PHONE_FJ = exports.RX_PHONE_FJ = /^(?:\+679)?[3-9]\d{6}$/;

// Finland phone number format
var RX_PHONE_FI = exports.RX_PHONE_FI = /^(?:\+358|0)?[4-9]\d{8,9}$/;

// Gabon phone number format
var RX_PHONE_GA = exports.RX_PHONE_GA = /^(?:\+241)?[2-7]\d{6}$/;

// Gambia phone number format
var RX_PHONE_GM = exports.RX_PHONE_GM = /^(?:\+220)?[2-9]\d{6}$/;

// Georgia phone number format
var RX_PHONE_GE = exports.RX_PHONE_GE = /^(?:\+995|0)?(5[79]|7[0-4]|7[67]|790)\d{7}$/;

// Ghana phone number format
var RX_PHONE_GH = exports.RX_PHONE_GH = /^(?:\+233|0)?[2-9]\d{8}$/;

// Greece phone number format
var RX_PHONE_GR = exports.RX_PHONE_GR = /^(?:\+30|0)?(6[89]|[27])\d{8}$/;

// Grenada phone number format
var RX_PHONE_GD = exports.RX_PHONE_GD = /^(?:\+1-473)?[0-9]{7}$/;

// Guatemala phone number format
var RX_PHONE_GT = exports.RX_PHONE_GT = /^(?:\+502)?[2-8]\d{7}$/;

// Guinea phone number format
var RX_PHONE_GN = exports.RX_PHONE_GN = /^(?:\+224)?[2-9]\d{7}$/;

// Guinea-Bissau phone number format
var RX_PHONE_GW = exports.RX_PHONE_GW = /^(?:\+245)?[5-9]\d{6}$/;

// Guyana phone number format
var RX_PHONE_GY = exports.RX_PHONE_GY = /^(?:\+592)?[2-9]\d{6}$/;

// Haiti phone number format
var RX_PHONE_HT = exports.RX_PHONE_HT = /^(?:\+509)?[2-9]\d{7}$/;

// Honduras phone number format
var RX_PHONE_HN = exports.RX_PHONE_HN = /^(?:\+504)?[2-9]\d{7,8}$/;

// Hungary phone number format
var RX_PHONE_HU = exports.RX_PHONE_HU = /^(?:\+36|0)?[1-9]\d{8}$/;

// Iceland phone number format
var RX_PHONE_IS = exports.RX_PHONE_IS = /^(?:\+354)?[3-9]\d{6,7}$/;

// Iran phone number format
var RX_PHONE_IR = exports.RX_PHONE_IR = /^(?:\+98|0)?[1-9]\d{8,9}$/;

// Iraq phone number format
var RX_PHONE_IQ = exports.RX_PHONE_IQ = /^(?:\+964|0)?7\d{9}$/;

// Ireland phone number format
var RX_PHONE_IE = exports.RX_PHONE_IE = /^(?:\+353|0)?[1-9]\d{8}$/;

// Israel phone number format
var RX_PHONE_IL = exports.RX_PHONE_IL = /^(?:\+972|0)?5[012345689]\d{7}$/;

// Jamaica phone number format
var RX_PHONE_JM = exports.RX_PHONE_JM = /^(?:\+1-876)?[0-9]{7}$/;

// Jordan phone number format
var RX_PHONE_JO = exports.RX_PHONE_JO = /^(?:\+962|0)?7\d{8}$/;

// Kazakhstan phone number format
var RX_PHONE_KZ = exports.RX_PHONE_KZ = /^(?:\+7|8)?7\d{9}$/;

// Kenya phone number format
var RX_PHONE_KE = exports.RX_PHONE_KE = /^(?:\+254|0)?[1-9]\d{8}$/;

// Kiribati phone number format
var RX_PHONE_KI = exports.RX_PHONE_KI = /^(?:\+686)?[2-9]\d{4,6}$/;

// Kosovo phone number format
var RX_PHONE_XK = exports.RX_PHONE_XK = /^(?:\+383)?4[3-9]\d{6,7}$/;

// Kuwait phone number format
var RX_PHONE_KW = exports.RX_PHONE_KW = /^(?:\+965)?[1-9]\d{7}$/;

// Kyrgyzstan phone number format
var RX_PHONE_KG = exports.RX_PHONE_KG = /^(?:\+996|0)?[1-9]\d{8}$/;

// Laos phone number format
var RX_PHONE_LA = exports.RX_PHONE_LA = /^(?:\+856|0)?2[0-9]\d{7}$/;

// Latvia phone number format
var RX_PHONE_LV = exports.RX_PHONE_LV = /^(?:\+371)?2\d{7}$/;

// Lebanon phone number format
var RX_PHONE_LB = exports.RX_PHONE_LB = /^(?:\+961|0)?[1-9]\d{6,7}$/;

// Lesotho phone number format
var RX_PHONE_LS = exports.RX_PHONE_LS = /^(?:\+266)?[1-9]\d{7,8}$/;

// Liberia phone number format
var RX_PHONE_LR = exports.RX_PHONE_LR = /^(?:\+231)?[1-9]\d{7,8}$/;

// Libya phone number format
var RX_PHONE_LY = exports.RX_PHONE_LY = /^(?:\+218|0)?9\d{8}$/;

// Liechtenstein phone number format
var RX_PHONE_LI = exports.RX_PHONE_LI = /^(?:\+423)?[1-9]\d{6,7}$/;

// Lithuania phone number format
var RX_PHONE_LT = exports.RX_PHONE_LT = /^(?:\+370)?6\d{7,8}$/;

// Luxembourg phone number format
var RX_PHONE_LU = exports.RX_PHONE_LU = /^(?:\+352)?[1-9]\d{8}$/;

// Madagascar phone number format
var RX_PHONE_MG = exports.RX_PHONE_MG = /^(?:\+261|0)?3[0-9]\d{7}$/;

// Malawi phone number format
var RX_PHONE_MW = exports.RX_PHONE_MW = /^(?:\+265|0)?[1-9]\d{8}$/;

// Malaysia phone number format
var RX_PHONE_MY = exports.RX_PHONE_MY = /^(?:\+60|0)?1[0-9]\d{7,8}$/;

// Maldives phone number format
var RX_PHONE_MV = exports.RX_PHONE_MV = /^(?:\+960)?[1-9]\d{6,7}$/;

// Mali phone number format
var RX_PHONE_ML = exports.RX_PHONE_ML = /^(?:\+223)?[1-9]\d{7,8}$/;

// Malta phone number format
var RX_PHONE_MT = exports.RX_PHONE_MT = /^(?:\+356)?[1-9]\d{7,8}$/;

// Marshall Islands phone number format
var RX_PHONE_MH = exports.RX_PHONE_MH = /^(?:\+692)?[1-9]\d{4,6}$/;

// Mauritania phone number format
var RX_PHONE_MR = exports.RX_PHONE_MR = /^(?:\+222)?[1-9]\d{6,7}$/;

// Mauritius phone number format
var RX_PHONE_MU = exports.RX_PHONE_MU = /^(?:\+230)?[1-9]\d{7}$/;

// Micronesia phone number format
var RX_PHONE_FM = exports.RX_PHONE_FM = /^(?:\+691)?[1-9]\d{4,6}$/;

// Moldova phone number format
var RX_PHONE_MD = exports.RX_PHONE_MD = /^(?:\+373|0)?[1-9]\d{7,8}$/;

// Monaco phone number format
var RX_PHONE_MC = exports.RX_PHONE_MC = /^(?:\+377)?[1-9]\d{6,7}$/;

// Mongolia phone number format
var RX_PHONE_MN = exports.RX_PHONE_MN = /^(?:\+976|0)?[1-9]\d{7,8}$/;

// Montenegro phone number format
var RX_PHONE_ME = exports.RX_PHONE_ME = /^(?:\+382|0)?[1-9]\d{7,8}$/;

// Morocco phone number format
var RX_PHONE_MA = exports.RX_PHONE_MA = /^(?:\+212|0)?[5-9]\d{8}$/;

// Mozambique phone number format
var RX_PHONE_MZ = exports.RX_PHONE_MZ = /^(?:\+258|0)?[1-9]\d{7,8}$/;

// Myanmar phone number format
var RX_PHONE_MM = exports.RX_PHONE_MM = /^(?:\+95|0)?[1-9]\d{8}$/;

// Namibia phone number format
var RX_PHONE_NA = exports.RX_PHONE_NA = /^(?:\+264|0)?[1-9]\d{7,8}$/;

// Nauru phone number format
var RX_PHONE_NR = exports.RX_PHONE_NR = /^(?:\+674)?[1-9]\d{4,6}$/;

// Nepal phone number format
var RX_PHONE_NP = exports.RX_PHONE_NP = /^(?:\+977|0)?[1-9]\d{7,8}$/;

// Netherlands phone number format
var RX_PHONE_NL = exports.RX_PHONE_NL = /^(?:\+31|0)?[1-9]\d{8,9}$/;

// New Zealand phone number format
var RX_PHONE_NZ = exports.RX_PHONE_NZ = /^(?:\+64|0)?[2-9]\d{7,9}$/;

// Nicaragua phone number format
var RX_PHONE_NI = exports.RX_PHONE_NI = /^(?:\+505)?[1-9]\d{7,8}$/;

// Niger phone number format
var RX_PHONE_NE = exports.RX_PHONE_NE = /^(?:\+227)?[1-9]\d{7,8}$/;

// North Macedonia phone number format
var RX_PHONE_MK = exports.RX_PHONE_MK = /^(?:\+389|0)?[1-9]\d{7,8}$/;

// Norway phone number format
var RX_PHONE_NO = exports.RX_PHONE_NO = /^(?:\+47)?[1-9]\d{7,8}$/;

// Oman phone number format
var RX_PHONE_OM = exports.RX_PHONE_OM = /^(?:\+968)?[1-9]\d{7,8}$/;

// Pakistan phone number format
var RX_PHONE_PK = exports.RX_PHONE_PK = /^(?:\+92|0)?3[0-9]\d{8}$/;

// Palau phone number format
var RX_PHONE_PW = exports.RX_PHONE_PW = /^(?:\+680)?[1-9]\d{4,6}$/;

// Panama phone number format
var RX_PHONE_PA = exports.RX_PHONE_PA = /^(?:\+507)?[1-9]\d{7,8}$/;

// Papua New Guinea phone number format
var RX_PHONE_PG = exports.RX_PHONE_PG = /^(?:\+675)?[1-9]\d{7,8}$/;

// Paraguay phone number format
var RX_PHONE_PY = exports.RX_PHONE_PY = /^(?:\+595|0)?[1-9]\d{7,8}$/;

// Peru phone number format
var RX_PHONE_PE = exports.RX_PHONE_PE = /^(?:\+51|0)?[1-9]\d{7,8}$/;

// Philippines phone number format
var RX_PHONE_PH = exports.RX_PHONE_PH = /^(?:\+63|0)?9[0-9]\d{7,8}$/;

// Poland phone number format
var RX_PHONE_PL = exports.RX_PHONE_PL = /^(?:\+48|0)?[1-9]\d{8,9}$/;

// Portugal phone number format
var RX_PHONE_PT = exports.RX_PHONE_PT = /^(?:\+351)?[1-9]\d{8,9}$/;

// Qatar phone number format
var RX_PHONE_QA = exports.RX_PHONE_QA = /^(?:\+974)?[1-9]\d{7,8}$/;

// Romania phone number format
var RX_PHONE_RO = exports.RX_PHONE_RO = /^(?:\+40|0)?7[0-9]\d{8}$/;

// Rwanda phone number format
var RX_PHONE_RW = exports.RX_PHONE_RW = /^(?:\+250)?[1-9]\d{7,8}$/;

// Saint Kitts and Nevis phone number format
var RX_PHONE_KN = exports.RX_PHONE_KN = /^(?:\+1-869)?[0-9]{7}$/;

// Saint Lucia phone number format
var RX_PHONE_LC = exports.RX_PHONE_LC = /^(?:\+1-758)?[0-9]{7}$/;

// Saint Vincent and the Grenadines phone number format
var RX_PHONE_VC = exports.RX_PHONE_VC = /^(?:\+1-784)?[0-9]{7}$/;

// Samoa phone number format
var RX_PHONE_WS = exports.RX_PHONE_WS = /^(?:\+685)?[1-9]\d{5,7}$/;

// San Marino phone number format
var RX_PHONE_SM = exports.RX_PHONE_SM = /^(?:\+378)?[1-9]\d{5,7}$/;

// Sao Tome and Principe phone number format
var RX_PHONE_ST = exports.RX_PHONE_ST = /^(?:\+239)?[1-9]\d{6,7}$/;

// Senegal phone number format
var RX_PHONE_SN = exports.RX_PHONE_SN = /^(?:\+221)?[1-9]\d{7,8}$/;

// Serbia phone number format
var RX_PHONE_RS = exports.RX_PHONE_RS = /^(?:\+381|0)?6[0-9]\d{6,7}$/;

// Seychelles phone number format
var RX_PHONE_SC = exports.RX_PHONE_SC = /^(?:\+248)?[1-9]\d{6,7}$/;

// Sierra Leone phone number format
var RX_PHONE_SL = exports.RX_PHONE_SL = /^(?:\+232)?[1-9]\d{6,7}$/;

// Singapore phone number format
var RX_PHONE_SG = exports.RX_PHONE_SG = /^(?:\+65)?[1-9]\d{7,8}$/;

// Slovakia phone number format
var RX_PHONE_SK = exports.RX_PHONE_SK = /^(?:\+421|0)?[1-9]\d{8,9}$/;

// Slovenia phone number format
var RX_PHONE_SI = exports.RX_PHONE_SI = /^(?:\+386|0)?[1-9]\d{7,8}$/;

// Solomon Islands phone number format
var RX_PHONE_SB = exports.RX_PHONE_SB = /^(?:\+677)?[1-9]\d{5,7}$/;

// Somalia phone number format
var RX_PHONE_SO = exports.RX_PHONE_SO = /^(?:\+252)?[1-9]\d{7,8}$/;

// South Sudan phone number format
var RX_PHONE_SS = exports.RX_PHONE_SS = /^(?:\+211)?[1-9]\d{7,8}$/;

// Sri Lanka phone number format
var RX_PHONE_LK = exports.RX_PHONE_LK = /^(?:\+94|0)?7[0-9]\d{7}$/;

// Sudan phone number format
var RX_PHONE_SD = exports.RX_PHONE_SD = /^(?:\+249|0)?9[0-9]\d{7}$/;

// Suriname phone number format
var RX_PHONE_SR = exports.RX_PHONE_SR = /^(?:\+597)?[1-9]\d{6,7}$/;

// Sweden phone number format
var RX_PHONE_SE = exports.RX_PHONE_SE = /^(?:\+46|0)?7[0-9]\d{8}$/;

// Switzerland phone number format
var RX_PHONE_CH = exports.RX_PHONE_CH = /^(?:\+41|0)?7[0-9]\d{8}$/;

// Syria phone number format
var RX_PHONE_SY = exports.RX_PHONE_SY = /^(?:\+963|0)?9[0-9]\d{7}$/;

// Taiwan phone number format
var RX_PHONE_TW = exports.RX_PHONE_TW = /^(?:\+886|0)?9[0-9]\d{7}$/;

// Tajikistan phone number format
var RX_PHONE_TJ = exports.RX_PHONE_TJ = /^(?:\+992|0)?9[0-9]\d{8}$/;

// Tanzania phone number format
var RX_PHONE_TZ = exports.RX_PHONE_TZ = /^(?:\+255|0)?7[0-9]\d{8}$/;

// Thailand phone number format
var RX_PHONE_TH = exports.RX_PHONE_TH = /^(?:\+66|0)?[1-9]\d{8}$/;

// Timor-Leste phone number format
var RX_PHONE_TL = exports.RX_PHONE_TL = /^(?:\+670)?7[0-9]\d{6,7}$/;

// Togo phone number format
var RX_PHONE_TG = exports.RX_PHONE_TG = /^(?:\+228)?[1-9]\d{7,8}$/;

// Tonga phone number format
var RX_PHONE_TO = exports.RX_PHONE_TO = /^(?:\+676)?[1-9]\d{4,6}$/;

// Trinidad and Tobago phone number format
var RX_PHONE_TT = exports.RX_PHONE_TT = /^(?:\+1-868)?[0-9]{7}$/;

// Tunisia phone number format
var RX_PHONE_TN = exports.RX_PHONE_TN = /^(?:\+216)?[1-9]\d{7,8}$/;

// Turkmenistan phone number format
var RX_PHONE_TM = exports.RX_PHONE_TM = /^(?:\+993|0)?6[0-9]\d{7}$/;

// Tuvalu phone number format
var RX_PHONE_TV = exports.RX_PHONE_TV = /^(?:\+688)?[1-9]\d{4,6}$/;

// Uganda phone number format
var RX_PHONE_UG = exports.RX_PHONE_UG = /^(?:\+256|0)?7[0-9]\d{8}$/;

// Ukraine phone number format
var RX_PHONE_UA = exports.RX_PHONE_UA = /^(?:\+380|0)?9[0-9]\d{8}$/;

// United Arab Emirates phone number format
var RX_PHONE_AE = exports.RX_PHONE_AE = /^(?:\+971|0)?5[0-9]\d{7}$/;

// Uruguay phone number format
var RX_PHONE_UY = exports.RX_PHONE_UY = /^(?:\+598|0)?9[0-9]\d{7}$/;

// Uzbekistan phone number format
var RX_PHONE_UZ = exports.RX_PHONE_UZ = /^(?:\+998|0)?9[0-9]\d{8}$/;

// Vanuatu phone number format
var RX_PHONE_VU = exports.RX_PHONE_VU = /^(?:\+678)?[1-9]\d{4,6}$/;

// Vatican City phone number format
var RX_PHONE_VA = exports.RX_PHONE_VA = /^(?:\+39|0)?6[0-9]\d{6,7}$/;

// Venezuela phone number format
var RX_PHONE_VE = exports.RX_PHONE_VE = /^(?:\+58|0)?4[1-9]\d{7}$/;

// Vietnam phone number format
var RX_PHONE_VN = exports.RX_PHONE_VN = /^(?:\+84|0)?[1-9]\d{8,9}$/;

// Yemen phone number format
var RX_PHONE_YE = exports.RX_PHONE_YE = /^(?:\+967|0)?7[0-9]\d{8}$/;

// Zambia phone number format
var RX_PHONE_ZM = exports.RX_PHONE_ZM = /^(?:\+260|0)?9[0-9]\d{7}$/;

// Zimbabwe phone number format
var RX_PHONE_ZW = exports.RX_PHONE_ZW = /^(?:\+263|0)?7[0-9]\d{8}$/;
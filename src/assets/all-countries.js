// Array of country objects for the flag dropdown.

// Here is the criteria for the plugin to support a given country/territory
// - It has an iso2 code: https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
// - It has it's own country calling code (it is not a sub-region of another country): https://en.wikipedia.org/wiki/List_of_country_calling_codes
// - It has a flag in the region-flags project: https://github.com/behdad/region-flags/tree/gh-pages/png
// - It is supported by libphonenumber (it must be listed on this page): https://github.com/googlei18n/libphonenumber/blob/master/resources/ShortNumberMetadata.xml

// Each country array has the following information:
// [
//    Country name,
//    iso2 code,
//    International dial code,
//    Order (if >1 country with same dial code),
//    Area codes
// ]
const allCountries = [["Afganistan", "af", "93"], ["Arnavutluk", "al", "355"], ["Cezayir", "dz", "213"], ["Amerikan Samoası", "as", "1684"], ["Andora", "ad", "376"], ["Angola", "ao", "244"], ["Anguilla", "ai", "1264"], ["Antigua ve Barbuda", "ag", "1268"], ["Arjantin", "ar", "54"], ["Ermenistan", "am", "374"], ["Aruba", "aw", "297"], ["Avustralya", "au", "61", 0], ["Avusturya", "at", "43"], ["Azerbaycan", "az", "994"], ["Bahamalar", "bs", "1242"], ["Bahreyn", "bh", "973"], ["Bangladeş", "bd", "880"], ["Barbados", "bb", "1246"], ["Beyaz Rusya", "by", "375"], ["Belçika", "be", "32"], ["Belize", "bz", "501"], ["Benin", "bj", "229"], ["Bermuda", "bm", "1441"], ["Bhutan", "bt", "975"], ["Bolivya", "bo", "591"], ["Bosna Hersek", "ba", "387"], ["Botsvana", "bw", "267"], ["Brezilya", "br", "55"], ["Hint Okyanusu İngiliz Bölgesi", "io", "246"], ["İngiliz Virgin Adaları", "vg", "1284"], ["Brunei", "bn", "673"], ["Bulgaristan", "bg", "359"], ["Burkina Faso", "bf", "226"], ["Burundi", "bi", "257"], ["Kamboçya", "kh", "855"], ["Kamerun", "cm", "237"], ["Kanada", "ca", "1", 1, ["204", "226", "236", "249", "250", "289", "306", "343", "365", "387", "403", "416", "418", "431", "437", "438", "450", "506", "514", "519", "548", "579", "581", "587", "604", "613", "639", "647", "672", "705", "709", "742", "778", "780", "782", "807", "819", "825", "867", "873", "902", "905"]], ["Cape Verde", "cv", "238"], [null, "bq", "599", 1], ["Kayman Adaları", "ky", "1345"], ["Orta Afrika Cumhuriyeti", "cf", "236"], ["Çad", "td", "235"], ["Şili", "cl", "56"], ["Çin", "cn", "86"], ["Christmas Adası", "cx", "61", 2], ["Cocos Adaları", "cc", "61", 1], ["Kolombiya", "co", "57"], ["Komorlar", "km", "269"], ["Kongo Demokratik Cumhuriyeti", "cd", "243"], ["Kongo", "cg", "242"], ["Cook Adaları", "ck", "682"], ["Kosta Rika", "cr", "506"], ["Fildişi Sahilleri", "ci", "225"], ["Hırvatistan", "hr", "385"], ["Küba", "cu", "53"], [null, "cw", "599", 0], ["Güney Kıbrıs Rum Kesimi", "cy", "357"], ["Çek Cumhuriyeti", "cz", "420"], ["Danimarka", "dk", "45"], ["Cibuti", "dj", "253"], ["Dominik", "dm", "1767"], ["Dominik Cumhuriyeti", "do", "1", 2, ["809", "829", "849"]], ["Ekvator", "ec", "593"], ["Mısır", "eg", "20"], ["El Salvador", "sv", "503"], ["Ekvator Ginesi", "gq", "240"], ["Eritre", "er", "291"], ["Estonya", "ee", "372"], ["Etiyopya", "et", "251"], ["Falkland Adaları (Malvinalar)", "fk", "500"], ["Faroe Adaları", "fo", "298"], ["Fiji", "fj", "679"], ["Finlandiya", "fi", "358", 0], ["Fransa", "fr", "33"], ["Fransız Guyanası", "gf", "594"], ["Fransız Polinezyası", "pf", "689"], ["Gabon", "ga", "241"], ["Gambia", "gm", "220"], ["Gürcistan", "ge", "995"], ["Almanya", "de", "49"], ["Gana", "gh", "233"], ["Cebelitarık", "gi", "350"], ["Yunanistan", "gr", "30"], ["Grönland", "gl", "299"], ["Granada", "gd", "1473"], ["Guadeloupe", "gp", "590", 0], ["Guam", "gu", "1671"], ["Guatemala", "gt", "502"], ["Guernsey", "gg", "44", 1], ["Gine", "gn", "224"], ["Gine-Bissau", "gw", "245"], ["Guyana", "gy", "592"], ["Haiti", "ht", "509"], ["Honduras", "hn", "504"], ["Hong Kong SAR - Çin", "hk", "852"], ["Macaristan", "hu", "36"], ["İzlanda", "is", "354"], ["Hindistan", "in", "91"], ["Endonezya", "id", "62"], ["İran", "ir", "98"], ["Irak", "iq", "964"], ["İrlanda", "ie", "353"], ["Man Adası", "im", "44", 2], ["İsrail", "il", "972"], ["İtalya", "it", "39", 0], ["Jamaika", "jm", "1876"], ["Japonya", "jp", "81"], ["Jersey", "je", "44", 3], ["Ürdün", "jo", "962"], ["Kazakistan", "kz", "7", 1], ["Kenya", "ke", "254"], ["Kiribati", "ki", "686"], [null, "xk", "383"], ["Kuveyt", "kw", "965"], ["Kırgızistan", "kg", "996"], ["Laos", "la", "856"], ["Letonya", "lv", "371"], ["Lübnan", "lb", "961"], ["Lesotho", "ls", "266"], ["Liberya", "lr", "231"], ["Libya", "ly", "218"], ["Liechtenstein", "li", "423"], ["Litvanya", "lt", "370"], ["Lüksemburg", "lu", "352"], ["Makao S.A.R. Çin", "mo", "853"], ["Makedonya", "mk", "389"], ["Madagaskar", "mg", "261"], ["Malavi", "mw", "265"], ["Malezya", "my", "60"], ["Maldivler", "mv", "960"], ["Mali", "ml", "223"], ["Malta", "mt", "356"], ["Marshall Adaları", "mh", "692"], ["Martinik", "mq", "596"], ["Moritanya", "mr", "222"], ["Mauritius", "mu", "230"], ["Mayotte", "yt", "262", 1], ["Meksika", "mx", "52"], ["Mikronezya Federal Eyaletleri", "fm", "691"], ["Moldovya Cumhuriyeti", "md", "373"], ["Monako", "mc", "377"], ["Moğolistan", "mn", "976"], ["Karadağ", "me", "382"], ["Montserrat", "ms", "1664"], ["Fas", "ma", "212", 0], ["Mozambik", "mz", "258"], ["Myanmar", "mm", "95"], ["Namibya", "na", "264"], ["Nauru", "nr", "674"], ["Nepal", "np", "977"], ["Hollanda", "nl", "31"], ["Yeni Kaledonya", "nc", "687"], ["Yeni Zelanda", "nz", "64"], ["Nikaragua", "ni", "505"], ["Nijer", "ne", "227"], ["Nijerya", "ng", "234"], ["Niue", "nu", "683"], ["Norfolk Adası", "nf", "672"], ["Kuzey Kore", "kp", "850"], ["Kuzey Mariana Adaları", "mp", "1670"], ["Norveç", "no", "47", 0], ["Umman", "om", "968"], ["Pakistan", "pk", "92"], ["Palau", "pw", "680"], ["Filistin Bölgesi", "ps", "970"], ["Panama", "pa", "507"], ["Papua Yeni Gine", "pg", "675"], ["Paraguay", "py", "595"], ["Peru", "pe", "51"], ["Filipinler", "ph", "63"], ["Polonya", "pl", "48"], ["Portekiz", "pt", "351"], ["Porto Riko", "pr", "1", 3, ["787", "939"]], ["Katar", "qa", "974"], ["Reunion", "re", "262", 0], ["Romanya", "ro", "40"], ["Rusya Federasyonu", "ru", "7", 0], ["Ruanda", "rw", "250"], [null, "bl", "590", 1], ["Saint Helena", "sh", "290"], ["Saint Kitts ve Nevis", "kn", "1869"], ["Saint Lucia", "lc", "1758"], [null, "mf", "590", 2], ["Saint Pierre ve Miquelon", "pm", "508"], ["Saint Vincent ve Grenadinler", "vc", "1784"], ["Samoa", "ws", "685"], ["San Marino", "sm", "378"], ["Sao Tome ve Principe", "st", "239"], ["Suudi Arabistan", "sa", "966"], ["Senegal", "sn", "221"], ["Sırbistan", "rs", "381"], ["Seyşeller", "sc", "248"], ["Sierra Leone", "sl", "232"], ["Singapur", "sg", "65"], [null, "sx", "1721"], ["Slovakya", "sk", "421"], ["Slovenya", "si", "386"], ["Solomon Adaları", "sb", "677"], ["Somali", "so", "252"], ["Güney Afrika", "za", "27"], ["Güney Kore", "kr", "82"], [null, "ss", "211"], ["İspanya", "es", "34"], ["Sri Lanka", "lk", "94"], ["Sudan", "sd", "249"], ["Surinam", "sr", "597"], ["Svalbard ve Jan Mayen", "sj", "47", 1], ["Svaziland", "sz", "268"], ["İsveç", "se", "46"], ["İsviçre", "ch", "41"], ["Suriye", "sy", "963"], ["Tayvan", "tw", "886"], ["Tacikistan", "tj", "992"], ["Tanzanya", "tz", "255"], ["Tayland", "th", "66"], ["Doğu Timor", "tl", "670"], ["Togo", "tg", "228"], ["Tokelau", "tk", "690"], ["Tonga", "to", "676"], ["Trinidad ve Tobago", "tt", "1868"], ["Tunus", "tn", "216"], ["Türkiye", "tr", "90"], ["Türkmenistan", "tm", "993"], ["Turks ve Caicos Adaları", "tc", "1649"], ["Tuvalu", "tv", "688"], ["ABD Virgin Adaları", "vi", "1340"], ["Uganda", "ug", "256"], ["Ukrayna", "ua", "380"], ["Birleşik Arap Emirlikleri", "ae", "971"], ["Birleşik Krallık", "gb", "44", 0], ["Amerika Birleşik Devletleri", "us", "1", 0], ["Uruguay", "uy", "598"], ["Özbekistan", "uz", "998"], ["Vanuatu", "vu", "678"], ["Vatikan", "va", "39", 1], ["Venezuela", "ve", "58"], ["Vietnam", "vn", "84"], ["Wallis ve Futuna", "wf", "681"], ["Batı Sahara", "eh", "212", 1], ["Yemen", "ye", "967"], ["Zambiya", "zm", "260"], ["Zimbabve", "zw", "263"], ["Aland Adaları", "ax", "358", 1]];


export default allCountries.map(country => ({
  name: country[0],
  iso2: country[1].toUpperCase(),
  dialCode: country[2],
  priority: country[3] || 0,
  areaCodes: country[4] || null,
}));

iahmDBApp.factory('language', [function () {


    var language = {};

    language.languages = [
        {
            "id": "aa",
            "en_name": "Afar",
            "fr_name": "afar",
            "es_name": "afar",
            "it_name": "afar",
            "de_name": "Afar",
            "pt_name": "afar",
            "ca_name": "àfar"
        },
        {
            "id": "ab",
            "en_name": "Abkhazian",
            "fr_name": "abkhaze",
            "es_name": "abjaso; abjasiano",
            "it_name": "abkhazian",
            "de_name": "Abchasisch",
            "pt_name": "abecásio; abcásio",
            "ca_name": "abkhaz"
        },
        {
            "id": "ae",
            "en_name": "Avestan",
            "fr_name": "avestique",
            "es_name": "avéstico",
            "it_name": "avestan",
            "de_name": "Avestisch",
            "pt_name": "avestan",
            "ca_name": "avèstic"
        },
        {
            "id": "af",
            "en_name": "Afrikaans",
            "fr_name": "afrikaans",
            "es_name": "afrikaans",
            "it_name": "afrikaans",
            "de_name": "Afrikaans",
            "pt_name": "africânder",
            "ca_name": "afrikaans"
        },
        {
            "id": "ak",
            "en_name": "Akan",
            "fr_name": "akan",
            "es_name": "akano",
            "it_name": "akan",
            "de_name": "Akan",
            "pt_name": "akan",
            "ca_name": "àkan"
        },
        {
            "id": "am",
            "en_name": "Amharic",
            "fr_name": "amharique",
            "es_name": "amárico",
            "it_name": "amarico",
            "de_name": "Amharisch",
            "pt_name": "amárico",
            "ca_name": "amhàric"
        },
        {
            "id": "an",
            "en_name": "Aragonese",
            "fr_name": "aragonais",
            "es_name": "aragonés",
            "it_name": "aragonese",
            "de_name": "Aragonesisch",
            "pt_name": "aragonês",
            "ca_name": "aragonès"
        },
        {
            "id": "ar",
            "en_name": "Arabic",
            "fr_name": "arabe",
            "es_name": "árabe",
            "it_name": "arabo",
            "de_name": "Arabisch",
            "pt_name": "árabe",
            "ca_name": "àrab"
        },
        {
            "id": "as",
            "en_name": "Assamese",
            "fr_name": "assamais",
            "es_name": "asamés",
            "it_name": "assamese",
            "de_name": "Assamesisch; Assami",
            "pt_name": "assamês",
            "ca_name": "assamès"
        },
        {
            "id": "av",
            "en_name": "Avaric",
            "fr_name": "avar",
            "es_name": "avar",
            "it_name": "avarico",
            "de_name": "(Neij-)Awarisch",
            "pt_name": "avárico",
            "ca_name": "àvar"
        },
        {
            "id": "ay",
            "en_name": "Aymara",
            "fr_name": "aymara",
            "es_name": "aimara",
            "it_name": "aymara",
            "de_name": "Aymara",
            "pt_name": "aimará",
            "ca_name": "aimara"
        },
        {
            "id": "az",
            "en_name": "Azerbaijani",
            "fr_name": "azéri",
            "es_name": "azerí",
            "it_name": "azero",
            "de_name": "Aserbaidschanisch",
            "pt_name": "azerbaijano",
            "ca_name": "àzeri; azerbaidjanès"
        },
        {
            "id": "ba",
            "en_name": "Bashkir",
            "fr_name": "bachkir",
            "es_name": "baskir",
            "it_name": "baschiro",
            "de_name": "Baschkirisch",
            "pt_name": "baxequir",
            "ca_name": "baixkir"
        },
        {
            "id": "be",
            "en_name": "Belarusian",
            "fr_name": "biélorusse",
            "es_name": "bielorruso",
            "it_name": "bielorusso",
            "de_name": "Wissrussisch",
            "pt_name": "bielorusso; bielo-russo",
            "ca_name": "bielorús"
        },
        {
            "id": "bg",
            "en_name": "Bulgarian",
            "fr_name": "bulgare",
            "es_name": "búlgaro",
            "it_name": "bulgaro",
            "de_name": "Bulgarisch",
            "pt_name": "búlgaro",
            "ca_name": "búlgar"
        },
        {
            "id": "bh",
            "en_name": "Bihari languages",
            "fr_name": "langues biharis",
            "es_name": "bhojpurí",
            "it_name": "lingue bihari",
            "de_name": "Bihari",
            "pt_name": "biari",
            "ca_name": "bihari"
        },
        {
            "id": "bi",
            "en_name": "Bislama",
            "fr_name": "bichlamar",
            "es_name": "bislama",
            "it_name": "bislama",
            "de_name": "Bislama",
            "pt_name": "bislamá bichlamar",
            "ca_name": "bislama"
        },
        {
            "id": "bm",
            "en_name": "Bambara",
            "fr_name": "bambara",
            "es_name": "bambara",
            "it_name": "bambara",
            "de_name": "Bambara",
            "pt_name": "bâmbara",
            "ca_name": "bambara"
        },
        {
            "id": "bn",
            "en_name": "Bengali",
            "fr_name": "bengali",
            "es_name": "bengalí",
            "it_name": "bengalese",
            "de_name": "Bengali",
            "pt_name": "bengali; bangla",
            "ca_name": "bengalí"
        },
        {
            "id": "bo",
            "en_name": "Tibetan",
            "fr_name": "tibétain",
            "es_name": "tibetano",
            "it_name": "tibetano",
            "de_name": "Tibetisch",
            "pt_name": "tibetano",
            "ca_name": "tibetà"
        },
        {
            "id": "br",
            "en_name": "Breton",
            "fr_name": "breton",
            "es_name": "bretón",
            "it_name": "bretone",
            "de_name": "Bretonisch",
            "pt_name": "bretão",
            "ca_name": "bretó"
        },
        {
            "id": "bs",
            "en_name": "Bosnian",
            "fr_name": "bosniaque",
            "es_name": "bosnio",
            "it_name": "bosniaco",
            "de_name": "Bosnisch",
            "pt_name": "bósnio",
            "ca_name": "bosnià"
        },
        {
            "id": "ca",
            "en_name": "Catalan",
            "fr_name": "catalan",
            "es_name": "catalán",
            "it_name": "catalano",
            "de_name": "Katalanisch",
            "pt_name": "catalão",
            "ca_name": "català"
        },
        {
            "id": "ce",
            "en_name": "Chechen",
            "fr_name": "tchétchène",
            "es_name": "checheno",
            "it_name": "chechen",
            "de_name": "Tschetschenisch",
            "pt_name": "tchecheno ou checheno",
            "ca_name": "txetxè"
        },
        {
            "id": "ch",
            "en_name": "Chamorro",
            "fr_name": "chamorro",
            "es_name": "chamorro",
            "it_name": "chamorro",
            "de_name": "Chamorro",
            "pt_name": "chamorro",
            "ca_name": "chamorro"
        },
        {
            "id": "co",
            "en_name": "Corsican",
            "fr_name": "corse",
            "es_name": "corso",
            "it_name": "corso",
            "de_name": "Korsisch",
            "pt_name": "corso",
            "ca_name": "cors"
        },
        {
            "id": "cr",
            "en_name": "Cree",
            "fr_name": "cree",
            "es_name": "cree",
            "it_name": "cree",
            "de_name": "Cree",
            "pt_name": "cree",
            "ca_name": "cree"
        },
        {
            "id": "cs",
            "en_name": "Czech",
            "fr_name": "tchèque",
            "es_name": "checo",
            "it_name": "ceco",
            "de_name": "Tschechisch",
            "pt_name": "tcheco",
            "ca_name": "txec"
        },
        {
            "id": "cv",
            "en_name": "Chuvash",
            "fr_name": "tchouvache",
            "es_name": "chuvasio",
            "it_name": "chuvash",
            "de_name": "Tschuwaschisch",
            "pt_name": "chuvash",
            "ca_name": "txuvaix"
        },
        {
            "id": "cy",
            "en_name": "Welsh",
            "fr_name": "gallois",
            "es_name": "galés",
            "it_name": "gallese",
            "de_name": "Walisisch",
            "pt_name": "galês",
            "ca_name": "gal·lès"
        },
        {
            "id": "da",
            "en_name": "Danish",
            "fr_name": "danois",
            "es_name": "danés",
            "it_name": "danese",
            "de_name": "Dänisch",
            "pt_name": "dinamarquês",
            "ca_name": "danès"
        },
        {
            "id": "de",
            "en_name": "German",
            "fr_name": "allemand",
            "es_name": "alemán",
            "it_name": "tedesco",
            "de_name": "Deutsch",
            "pt_name": "alemão",
            "ca_name": "alemany"
        },
        {
            "id": "dv",
            "en_name": "Divehi; Dhivehi; Maldivian",
            "fr_name": "maldivien",
            "es_name": "maldivo",
            "it_name": "divehi; dhivehi; maldiviano",
            "de_name": "Dhivehi",
            "pt_name": "divehi; maldívio",
            "ca_name": "divehi"
        },
        {
            "id": "dz",
            "en_name": "Dzongkha",
            "fr_name": "dzongkha",
            "es_name": "dzongkha",
            "it_name": "dzongkha",
            "de_name": "Dzongkha",
            "pt_name": "dzongkha; zoncá",
            "ca_name": "dzongka"
        },
        {
            "id": "ee",
            "en_name": "Ewe",
            "fr_name": "éwé",
            "es_name": "ewe",
            "it_name": "ewe",
            "de_name": "Ewe",
            "pt_name": "éwé ou Jeje",
            "ca_name": "ewe"
        },
        {
            "id": "el",
            "en_name": "Greek, Modern",
            "fr_name": "grec moderne",
            "es_name": "griego (moderno)",
            "it_name": "greco moderno",
            "de_name": "(Nej-)Griechisch",
            "pt_name": "grego moderno",
            "ca_name": "grec modern"
        },
        {
            "id": "en",
            "en_name": "English",
            "fr_name": "anglais",
            "es_name": "inglés",
            "it_name": "inglese",
            "de_name": "Änglisch",
            "pt_name": "inglês",
            "ca_name": "anglès"
        },
        {
            "id": "eo",
            "en_name": "Esperanto",
            "fr_name": "espéranto",
            "es_name": "esperanto",
            "it_name": "esperanto",
            "de_name": "Esperanto",
            "pt_name": "esperanto",
            "ca_name": "esperanto"
        },
        {
            "id": "es",
            "en_name": "Spanish",
            "fr_name": "espagnol",
            "es_name": "español",
            "it_name": "spagnolo",
            "de_name": "Spanisch",
            "pt_name": "castelhano",
            "ca_name": "castellà"
        },
        {
            "id": "et",
            "en_name": "Estonian",
            "fr_name": "estonien",
            "es_name": "estonio",
            "it_name": "estone",
            "de_name": "Estnisch",
            "pt_name": "estoniano",
            "ca_name": "estonià"
        },
        {
            "id": "eu",
            "en_name": "Basque",
            "fr_name": "basque",
            "es_name": "euskera",
            "it_name": "basco",
            "de_name": "Baskisch",
            "pt_name": "basco",
            "ca_name": "èuscar; basc"
        },
        {
            "id": "fa",
            "en_name": "Persian",
            "fr_name": "persan",
            "es_name": "persa",
            "it_name": "persiano",
            "de_name": "Persisch",
            "pt_name": "persa",
            "ca_name": "persa"
        },
        {
            "id": "ff",
            "en_name": "Fulah",
            "fr_name": "peul",
            "es_name": "fula",
            "it_name": "fulah",
            "de_name": "Ful",
            "pt_name": "fula",
            "ca_name": "ful"
        },
        {
            "id": "fi",
            "en_name": "Finnish",
            "fr_name": "finnois",
            "es_name": "finés; finlandés",
            "it_name": "finlandese",
            "de_name": "Finnisch",
            "pt_name": "finlandês",
            "ca_name": "finès; finlandès"
        },
        {
            "id": "fj",
            "en_name": "Fijian",
            "fr_name": "fidjien",
            "es_name": "fiyiano; fiyi",
            "it_name": "figiano",
            "de_name": "Fidschi",
            "pt_name": "fidjiano",
            "ca_name": "fijià; fiji"
        },
        {
            "id": "fo",
            "en_name": "Faroese",
            "fr_name": "féroïen",
            "es_name": "feroés",
            "it_name": "faeroese",
            "de_name": "Färöisch",
            "pt_name": "feroês ou feróico",
            "ca_name": "feroès"
        },
        {
            "id": "fr",
            "en_name": "French",
            "fr_name": "français",
            "es_name": "francés",
            "it_name": "francese",
            "de_name": "Franzesisch",
            "pt_name": "francês",
            "ca_name": "francès"
        },
        {
            "id": "fy",
            "en_name": "Western Frisian",
            "fr_name": "frison occidental",
            "es_name": "frisón; frisio",
            "it_name": "frisone occidentale",
            "de_name": "Friisisch",
            "pt_name": "frisão ou frísio",
            "ca_name": "frisó"
        },
        {
            "id": "ga",
            "en_name": "Irish",
            "fr_name": "irlandais",
            "es_name": "irlandés; gaélico",
            "it_name": "irlandese",
            "de_name": "Irisch",
            "pt_name": "irlandês",
            "ca_name": "gaèlic irlandès; irlandès"
        },
        {
            "id": "gd",
            "en_name": "Gaelic",
            "fr_name": "gaélique",
            "es_name": "gaélico",
            "it_name": "gaelico",
            "de_name": "Gälisch",
            "pt_name": "gaélico",
            "ca_name": "gaèlic"
        },
        {
            "id": "gl",
            "en_name": "Galician",
            "fr_name": "galicien",
            "es_name": "gallego",
            "it_name": "galiziano",
            "de_name": "Galicisch",
            "pt_name": "galego",
            "ca_name": "gallec"
        },
        {
            "id": "gn",
            "en_name": "Guarani",
            "fr_name": "guarani",
            "es_name": "guaraní",
            "it_name": "guarani",
            "de_name": "Guaraní",
            "pt_name": "guarani",
            "ca_name": "guaraní"
        },
        {
            "id": "gu",
            "en_name": "Gujarati",
            "fr_name": "goudjrati",
            "es_name": "guyaratí; guyaratí",
            "it_name": "gujarati",
            "de_name": "Gujarati",
            "pt_name": "gujarati; guzerate",
            "ca_name": "gujarati"
        },
        {
            "id": "gv",
            "en_name": "Manx",
            "fr_name": "manx; mannois",
            "es_name": "manés; gaélico manés o de Isla de Man",
            "it_name": "manx",
            "de_name": "Manx",
            "pt_name": "manês; manx",
            "ca_name": "manx; gaèlic manx"
        },
        {
            "id": "ha",
            "en_name": "Hausa",
            "fr_name": "haoussa",
            "es_name": "hausa",
            "it_name": "hausa",
            "de_name": "Hausa",
            "pt_name": "hauçá",
            "ca_name": "haussa"
        },
        {
            "id": "he",
            "en_name": "Hebrew",
            "fr_name": "hébreu",
            "es_name": "hebreo",
            "it_name": "ebraico",
            "de_name": "Hebräisch",
            "pt_name": "hebraico",
            "ca_name": "hebreu"
        },
        {
            "id": "hi",
            "en_name": "Hindi",
            "fr_name": "hindi",
            "es_name": "hindi; hindú",
            "it_name": "hindi",
            "de_name": "Hindi",
            "pt_name": "hindi; híndi; indi",
            "ca_name": "hindi"
        },
        {
            "id": "ho",
            "en_name": "Hiri Motu",
            "fr_name": "hiri motu",
            "es_name": "hiri motu",
            "it_name": "hiri motu",
            "de_name": "Hiri Motu",
            "pt_name": "hiri motu",
            "ca_name": "motu; hiri motu"
        },
        {
            "id": "hr",
            "en_name": "Croatian",
            "fr_name": "croate",
            "es_name": "croata",
            "it_name": "croato",
            "de_name": "Kroatisch",
            "pt_name": "croata",
            "ca_name": "croat"
        },
        {
            "id": "ht",
            "en_name": "Haitian; Haitian Creole",
            "fr_name": "haïtien; créole haïtien",
            "es_name": "haitiano",
            "it_name": "haitiano; haitiano creolo",
            "de_name": "Haitianisch",
            "pt_name": "criolo haitiano; Haitian",
            "ca_name": "haitià; crioll haitià"
        },
        {
            "id": "hu",
            "en_name": "Hungarian",
            "fr_name": "hongrois",
            "es_name": "húngaro",
            "it_name": "ungherese",
            "de_name": "Ungarisch",
            "pt_name": "húngaro",
            "ca_name": "hongarès"
        },
        {
            "id": "hy",
            "en_name": "Armenian",
            "fr_name": "arménien",
            "es_name": "armenio",
            "it_name": "armeno",
            "de_name": "Armenisch",
            "pt_name": "armênio",
            "ca_name": "armeni"
        },
        {
            "id": "hz",
            "en_name": "Herero",
            "fr_name": "herero",
            "es_name": "herero",
            "it_name": "herero",
            "de_name": "Herero",
            "pt_name": "hereró",
            "ca_name": "herero"
        },
        {
            "id": "id",
            "en_name": "Indonesian",
            "fr_name": "indonésien",
            "es_name": "indonesio",
            "it_name": "indonesiano",
            "de_name": "Indonesisch",
            "pt_name": "indonésio",
            "ca_name": "indonesi; bahasa indonesia; malai"
        },
        {
            "id": "ig",
            "en_name": "Igbo",
            "fr_name": "igbo",
            "es_name": "igbo",
            "it_name": "igbo",
            "de_name": "Ibo",
            "pt_name": "ibo",
            "ca_name": "igbo; ibo"
        },
        {
            "id": "ii",
            "en_name": "Sichuan Yi; Nuosu",
            "fr_name": "yi de Sichuan",
            "es_name": "yi de Sichuán",
            "it_name": "sichuan yi; nuosu",
            "de_name": "Sichuanhua",
            "pt_name": "yi de Sichuan",
            "ca_name": "yi"
        },
        {
            "id": "ik",
            "en_name": "Inupiaq",
            "fr_name": "inupiaq",
            "es_name": "inupiaq",
            "it_name": "inupiaq",
            "de_name": "Inupiaq",
            "pt_name": "inupiaq",
            "ca_name": "esquimal; èsquim; inuit; inupiaq"
        },
        {
            "id": "io",
            "en_name": "Ido",
            "fr_name": "ido",
            "es_name": "ido",
            "it_name": "ido",
            "de_name": "Ido",
            "pt_name": "ido",
            "ca_name": "esperanto; ido"
        },
        {
            "id": "is",
            "en_name": "Icelandic",
            "fr_name": "islandais",
            "es_name": "islandés",
            "it_name": "islandese",
            "de_name": "Isländisch",
            "pt_name": "islandês",
            "ca_name": "islandès"
        },
        {
            "id": "it",
            "en_name": "Italian",
            "fr_name": "italien",
            "es_name": "italiano",
            "it_name": "italiano",
            "de_name": "Italienisch",
            "pt_name": "italiano",
            "ca_name": "italià"
        },
        {
            "id": "iu",
            "en_name": "Inuktitut",
            "fr_name": "inuktitut",
            "es_name": "inuktitut",
            "it_name": "inuktitut",
            "de_name": "Inuktitut",
            "pt_name": "inuktitut",
            "ca_name": "esquimal; èsquim; inuit; inuktitut"
        },
        {
            "id": "ja",
            "en_name": "Japanese",
            "fr_name": "japonais",
            "es_name": "japonés",
            "it_name": "giapponese",
            "de_name": "Japanisch",
            "pt_name": "japonês",
            "ca_name": "japonès"
        },
        {
            "id": "jv",
            "en_name": "Javanese",
            "fr_name": "javanais",
            "es_name": "javanés",
            "it_name": "javanese",
            "de_name": "Javanisch",
            "pt_name": "javanês",
            "ca_name": "javanès"
        },
        {
            "id": "ka",
            "en_name": "Georgian",
            "fr_name": "géorgien",
            "es_name": "georgiano",
            "it_name": "georgiano",
            "de_name": "Georgisch",
            "pt_name": "georgiano",
            "ca_name": "georgià"
        },
        {
            "id": "kg",
            "en_name": "Kongo",
            "fr_name": "kongo",
            "es_name": "kongo",
            "it_name": "kongo",
            "de_name": "Kongo; Kikongo",
            "pt_name": "quicongo",
            "ca_name": "kongo"
        },
        {
            "id": "ki",
            "en_name": "Kikuyu; Gikuyu",
            "fr_name": "kikuyu",
            "es_name": "kikuyu",
            "it_name": "kikuyu; gikuyu",
            "de_name": "Kikuyu",
            "pt_name": "kikuyu; Gikuyu",
            "ca_name": "kikuiu"
        },
        {
            "id": "kj",
            "en_name": "Kuanyama; Kwanyama",
            "fr_name": "kuanyama; kwanyama",
            "es_name": "kuanyama",
            "it_name": "kuanyama; kwanyama",
            "de_name": "Kuanyama",
            "pt_name": "cuanhama",
            "ca_name": "kwanyama"
        },
        {
            "id": "kk",
            "en_name": "Kazakh",
            "fr_name": "kazakh",
            "es_name": "kazajo; kazajio",
            "it_name": "kazako",
            "de_name": "Kasachisch",
            "pt_name": "cazaque",
            "ca_name": "kazakh"
        },
        {
            "id": "kl",
            "en_name": "Kalaallisut; Greenlandic",
            "fr_name": "groenlandais",
            "es_name": "groenlandés; kalaallisut",
            "it_name": "kalaallisut; groenlandese",
            "de_name": "Kalaallisut; Grönländisch",
            "pt_name": "groenlandês",
            "ca_name": "grenlandès; groenlandès"
        },
        {
            "id": "km",
            "en_name": "Central Khmer",
            "fr_name": "khmer central",
            "es_name": "camboyano; jemer",
            "it_name": "khmer centrale",
            "de_name": "Khmer",
            "pt_name": "khmer",
            "ca_name": "khmer"
        },
        {
            "id": "kn",
            "en_name": "Kannada",
            "fr_name": "kannada",
            "es_name": "canarés",
            "it_name": "kannada",
            "de_name": "Kannada; Kanaresisch",
            "pt_name": "kannada",
            "ca_name": "kannada"
        },
        {
            "id": "ko",
            "en_name": "Korean",
            "fr_name": "coréen",
            "es_name": "coreano",
            "it_name": "coreano",
            "de_name": "Koreanisch",
            "pt_name": "coreano",
            "ca_name": "coreà"
        },
        {
            "id": "kr",
            "en_name": "Kanuri",
            "fr_name": "kanouri",
            "es_name": "kanuri",
            "it_name": "kanuri",
            "de_name": "Kanuri",
            "pt_name": "canúri",
            "ca_name": "kanuri"
        },
        {
            "id": "ks",
            "en_name": "Kashmiri",
            "fr_name": "kashmiri",
            "es_name": "cachemiro",
            "it_name": "kashmiri",
            "de_name": "Kaschmiri",
            "pt_name": "cachemir",
            "ca_name": "caixmiri"
        },
        {
            "id": "ku",
            "en_name": "Kurdish",
            "fr_name": "kurde",
            "es_name": "kurdo",
            "it_name": "curdo",
            "de_name": "Kurdisch",
            "pt_name": "curdo",
            "ca_name": "kurd"
        },
        {
            "id": "kv",
            "en_name": "Komi",
            "fr_name": "kom",
            "es_name": "komi",
            "it_name": "komi",
            "de_name": "Komi",
            "pt_name": "komi",
            "ca_name": "komi; ziriè"
        },
        {
            "id": "kw",
            "en_name": "Cornish",
            "fr_name": "cornique",
            "es_name": "córnico",
            "it_name": "cornish",
            "de_name": "Kornisch",
            "pt_name": "córnico",
            "ca_name": "còrnic"
        },
        {
            "id": "ky",
            "en_name": "Kirghiz; Kyrgyz",
            "fr_name": "kirghiz",
            "es_name": "kirguís",
            "it_name": "kirghizo; chirghiso",
            "de_name": "Kirgisisch",
            "pt_name": "quirguiz",
            "ca_name": "kirguís"
        },
        {
            "id": "la",
            "en_name": "Latin",
            "fr_name": "latin",
            "es_name": "latín",
            "it_name": "latino",
            "de_name": "Latynisch",
            "pt_name": "latim",
            "ca_name": "llatí"
        },
        {
            "id": "lb",
            "en_name": "Luxembourgish; Letzeburgesch",
            "fr_name": "luxembourgeois",
            "es_name": "luxemburgués",
            "it_name": "lussemburghese",
            "de_name": "Letzeburgisch",
            "pt_name": "luxemburguês",
            "ca_name": "luxemburguès"
        },
        {
            "id": "lg",
            "en_name": "Ganda",
            "fr_name": "ganda",
            "es_name": "luganda",
            "it_name": "ganda",
            "de_name": "Ganda",
            "pt_name": "ganda",
            "ca_name": "ganda"
        },
        {
            "id": "li",
            "en_name": "Limburgan; Limburger; Limburgish",
            "fr_name": "limbourgeois",
            "es_name": "limburgués",
            "it_name": "limburgan",
            "de_name": "Limburgisch",
            "pt_name": "limburguês",
            "ca_name": "limburguès"
        },
        {
            "id": "ln",
            "en_name": "Lingala",
            "fr_name": "lingala",
            "es_name": "lingala",
            "it_name": "lingala",
            "de_name": "Lingala",
            "pt_name": "lingala",
            "ca_name": "lingala"
        },
        {
            "id": "lo",
            "en_name": "Lao",
            "fr_name": "lao",
            "es_name": "lao",
            "it_name": "lao",
            "de_name": "Lao",
            "pt_name": "laociano",
            "ca_name": "laosià"
        },
        {
            "id": "lt",
            "en_name": "Lithuanian",
            "fr_name": "lituanien",
            "es_name": "lituano",
            "it_name": "lituano",
            "de_name": "Litauisch",
            "pt_name": "lituano",
            "ca_name": "lituà"
        },
        {
            "id": "lu",
            "en_name": "Luba-Katanga",
            "fr_name": "luba-katanga",
            "es_name": "luba-katanga",
            "it_name": "luba-katanga",
            "de_name": "Luba-Katanga",
            "pt_name": "luba-katanga",
            "ca_name": "luba"
        },
        {
            "id": "lv",
            "en_name": "Latvian",
            "fr_name": "letton",
            "es_name": "letón",
            "it_name": "lettone",
            "de_name": "Lettisch",
            "pt_name": "letão",
            "ca_name": "letó"
        },
        {
            "id": "mg",
            "en_name": "Malagasy",
            "fr_name": "malgache",
            "es_name": "malgache; malagasy",
            "it_name": "malagasy",
            "de_name": "Madagassisch",
            "pt_name": "malgaxe",
            "ca_name": "malgaix"
        },
        {
            "id": "mh",
            "en_name": "Marshallese",
            "fr_name": "marshall",
            "es_name": "marshalés",
            "it_name": "marshallese",
            "de_name": "Marshallisch",
            "pt_name": "marshallês",
            "ca_name": "marshallès"
        },
        {
            "id": "mi",
            "en_name": "Maori",
            "fr_name": "maori",
            "es_name": "maorí",
            "it_name": "maori",
            "de_name": "Maori",
            "pt_name": "maori",
            "ca_name": "maori"
        },
        {
            "id": "mk",
            "en_name": "Macedonian",
            "fr_name": "macédonien",
            "es_name": "macedonio",
            "it_name": "macedone",
            "de_name": "Mazedonisch",
            "pt_name": "macedônio",
            "ca_name": "macedònic"
        },
        {
            "id": "ml",
            "en_name": "Malayalam",
            "fr_name": "malayalam",
            "es_name": "malayalam",
            "it_name": "malayalam",
            "de_name": "Malayalam",
            "pt_name": "malaiala",
            "ca_name": "malaialam"
        },
        {
            "id": "mn",
            "en_name": "Mongolian",
            "fr_name": "mongol",
            "es_name": "mongol",
            "it_name": "mongolo",
            "de_name": "Mongolisch",
            "pt_name": "mongol",
            "ca_name": "mongol"
        },
        {
            "id": "mr",
            "en_name": "Marathi",
            "fr_name": "marathe",
            "es_name": "maratí",
            "it_name": "marathi",
            "de_name": "Marathi",
            "pt_name": "marata",
            "ca_name": "marathi"
        },
        {
            "id": "ms",
            "en_name": "Malay",
            "fr_name": "malais",
            "es_name": "malayo",
            "it_name": "malay",
            "de_name": "Malaiisch",
            "pt_name": "malaio",
            "ca_name": "malai"
        },
        {
            "id": "mt",
            "en_name": "Maltese",
            "fr_name": "maltais",
            "es_name": "maltés",
            "it_name": "maltese",
            "de_name": "Maltesisch",
            "pt_name": "maltês",
            "ca_name": "maltès"
        },
        {
            "id": "my",
            "en_name": "Burmese",
            "fr_name": "birman",
            "es_name": "birmano",
            "it_name": "burmese",
            "de_name": "Birmanisch",
            "pt_name": "birmanês; burmês",
            "ca_name": "birmà"
        },
        {
            "id": "na",
            "en_name": "Nauru",
            "fr_name": "nauruan",
            "es_name": "nauruano",
            "it_name": "nauru",
            "de_name": "Nauruisch",
            "pt_name": "nauru",
            "ca_name": "nauruà"
        },
        {
            "id": "nb",
            "en_name": "Bokmål, Norwegian; Norwegian Bokmål",
            "fr_name": "norvégien bokmål",
            "es_name": "noruego bokmål",
            "it_name": "bokmål, norvegiese; bokmål norvegese",
            "de_name": "Bokmål-Norwegisch",
            "pt_name": "norueguês bokmål",
            "ca_name": "noruec; bokmål; bokmål noruec; riksmål"
        },
        {
            "id": "nd",
            "en_name": "Ndebele, North; North Ndebele",
            "fr_name": "ndébélé du Nord",
            "es_name": "ndebele del norte",
            "it_name": "ndebele del nord",
            "de_name": "Nerdlig Ndebele",
            "pt_name": "ndebele do norte",
            "ca_name": "ndebele septentrional; ndebele del nord"
        },
        {
            "id": "ne",
            "en_name": "Nepali",
            "fr_name": "népalais",
            "es_name": "nepalí",
            "it_name": "nepalese",
            "de_name": "Nepalesisch",
            "pt_name": "nepali; nepalês",
            "ca_name": "nepalès"
        },
        {
            "id": "ng",
            "en_name": "Ndonga",
            "fr_name": "ndonga",
            "es_name": "ndonga",
            "it_name": "ndonga",
            "de_name": "Ndonga",
            "pt_name": "ndonga",
            "ca_name": "ovambo; ndonga"
        },
        {
            "id": "nl",
            "en_name": "Dutch; Flemish",
            "fr_name": "néerlandais; flamand",
            "es_name": "neerlandés; holandés",
            "it_name": "olandese; fiammingo",
            "de_name": "Niderländisch",
            "pt_name": "holandês",
            "ca_name": "neerlandès; flamenc; holandès"
        },
        {
            "id": "nn",
            "en_name": "Norwegian",
            "fr_name": "norvégien",
            "es_name": "nynorsk",
            "it_name": "nynorsk norvegese",
            "de_name": "Nynorsk-Norwegisch",
            "pt_name": "novo norueguês",
            "ca_name": "noruec nynorsk"
        },
        {
            "id": "no",
            "en_name": "Norwegian",
            "fr_name": "norvégien",
            "es_name": "noruego",
            "it_name": "norvegese",
            "de_name": "Norwegisch",
            "pt_name": "norueguês",
            "ca_name": "noruec"
        },
        {
            "id": "nr",
            "en_name": "Ndebele, South; South Ndebele",
            "fr_name": "ndébélé du Sud",
            "es_name": "ndebele del sur",
            "it_name": "ndebele del sud",
            "de_name": "Sidlig Ndebele",
            "pt_name": "ndebele do sul",
            "ca_name": "ndebele meridional; ndebele del sud"
        },
        {
            "id": "nv",
            "en_name": "Navajo; Navaho",
            "fr_name": "navaho",
            "es_name": "navajo",
            "it_name": "navajo; navaho",
            "de_name": "Navajo",
            "pt_name": "navajo; navaho",
            "ca_name": "navaho; navajo"
        },
        {
            "id": "ny",
            "en_name": "Chichewa; Chewa; Nyanja",
            "fr_name": "chichewa; chewa; nyanja",
            "es_name": "chichewa",
            "it_name": "chichewa; chewa; nyanja",
            "de_name": "Chichewa",
            "pt_name": "cinyanja; chewa; nyanja",
            "ca_name": "nyanja; chewa; chichewa"
        },
        {
            "id": "oj",
            "en_name": "Ojibwa",
            "fr_name": "ojibwa",
            "es_name": "ojibwa",
            "it_name": "ojibwa",
            "de_name": "Anishinabe",
            "pt_name": "ojibwa",
            "ca_name": "ojibwa"
        },
        {
            "id": "om",
            "en_name": "Oromo",
            "fr_name": "galla",
            "es_name": "oromo",
            "it_name": "oromo",
            "de_name": "Oromo",
            "pt_name": "oromo",
            "ca_name": "oromo"
        },
        {
            "id": "or",
            "en_name": "Oriya",
            "fr_name": "oriya",
            "es_name": "oriya",
            "it_name": "oriya",
            "de_name": "Oriya",
            "pt_name": "oriya",
            "ca_name": "oriya"
        },
        {
            "id": "os",
            "en_name": "Ossetian; Ossetic",
            "fr_name": "ossète",
            "es_name": "osético",
            "it_name": "osseto",
            "de_name": "Ossetisch",
            "pt_name": "oseto",
            "ca_name": "osset"
        },
        {
            "id": "pa",
            "en_name": "Panjabi; Punjabi",
            "fr_name": "pendjabi",
            "es_name": "panyabí; penyabi",
            "it_name": "panjabi; punjabi",
            "de_name": "Punjabi",
            "pt_name": "punjabi",
            "ca_name": "panjabi"
        },
        {
            "id": "pi",
            "en_name": "Pali",
            "fr_name": "pali",
            "es_name": "pali",
            "it_name": "pali",
            "de_name": "Pali",
            "pt_name": "páli",
            "ca_name": "pali"
        },
        {
            "id": "pl",
            "en_name": "Polish",
            "fr_name": "polonais",
            "es_name": "polaco",
            "it_name": "polacco",
            "de_name": "Polnisch",
            "pt_name": "polonês; polaco",
            "ca_name": "polonès"
        },
        {
            "id": "ps",
            "en_name": "Pushto; Pashto",
            "fr_name": "pachto",
            "es_name": "pastú; pashto",
            "it_name": "pasthu; afgano",
            "de_name": "Paschtunisch",
            "pt_name": "pashto",
            "ca_name": "paixtu"
        },
        {
            "id": "pt",
            "en_name": "Portuguese",
            "fr_name": "portugais",
            "es_name": "portugués",
            "it_name": "portoghese",
            "de_name": "Portugiesisch",
            "pt_name": "português",
            "ca_name": "portuguès"
        },
        {
            "id": "qu",
            "en_name": "Quechua",
            "fr_name": "quechua",
            "es_name": "quechua",
            "it_name": "quechua",
            "de_name": "Quechua",
            "pt_name": "quechua; quéchua",
            "ca_name": "quítxua"
        },
        {
            "id": "rm",
            "en_name": "Romansh",
            "fr_name": "romanche",
            "es_name": "retorrománico",
            "it_name": "romansh",
            "de_name": "Rätoromanisch",
            "pt_name": "reto-romano",
            "ca_name": "retoromànic"
        },
        {
            "id": "rn",
            "en_name": "Rundi",
            "fr_name": "rundi",
            "es_name": "kirundi",
            "it_name": "rundi",
            "de_name": "Kirundi",
            "pt_name": "rundi",
            "ca_name": "rundi"
        },
        {
            "id": "ro",
            "en_name": "Romanian; Moldavian; Moldovan",
            "fr_name": "roumain; moldave",
            "es_name": "rumano",
            "it_name": "romeno",
            "de_name": "Rumänisch",
            "pt_name": "romeno",
            "ca_name": "romanès"
        },
        {
            "id": "ru",
            "en_name": "Russian",
            "fr_name": "russe",
            "es_name": "ruso",
            "it_name": "russo",
            "de_name": "Russisch",
            "pt_name": "russo",
            "ca_name": "rus"
        },
        {
            "id": "rw",
            "en_name": "Kinyarwanda",
            "fr_name": "rwanda",
            "es_name": "ruandés",
            "it_name": "kinyarwanda",
            "de_name": "Kinyarwanda",
            "pt_name": "kinyaruanda",
            "ca_name": "ruanda"
        },
        {
            "id": "sa",
            "en_name": "Sanskrit",
            "fr_name": "sanskrit",
            "es_name": "sánscrito",
            "it_name": "sanscrito",
            "de_name": "Sanskrit",
            "pt_name": "sânscrito",
            "ca_name": "sànscrit"
        },
        {
            "id": "sc",
            "en_name": "Sardinian",
            "fr_name": "sarde",
            "es_name": "sardo",
            "it_name": "sardo",
            "de_name": "Sardisch",
            "pt_name": "sardo",
            "ca_name": "sard"
        },
        {
            "id": "sd",
            "en_name": "Sindhi",
            "fr_name": "sindhi",
            "es_name": "sindhi",
            "it_name": "sindhi",
            "de_name": "Sindhi",
            "pt_name": "sindi",
            "ca_name": "sindhi"
        },
        {
            "id": "se",
            "en_name": "Northern Sami",
            "fr_name": "sami du Nord",
            "es_name": "sami septentrional",
            "it_name": "sami del nord",
            "de_name": "Samisch",
            "pt_name": "sami do norte",
            "ca_name": "sami; saami; sàmic"
        },
        {
            "id": "sg",
            "en_name": "Sango",
            "fr_name": "sango",
            "es_name": "sango",
            "it_name": "sango",
            "de_name": "Sango",
            "pt_name": "sango",
            "ca_name": "sango"
        },
        {
            "id": "si",
            "en_name": "Sinhala; Sinhalese",
            "fr_name": "singhalais",
            "es_name": "cingalés",
            "it_name": "sinhala; sinhalese",
            "de_name": "Singhalesisch",
            "pt_name": "sinhalês; cingalês",
            "ca_name": "singalès"
        },
        {
            "id": "sk",
            "en_name": "Slovak",
            "fr_name": "slovaque",
            "es_name": "eslovaco",
            "it_name": "slovacco",
            "de_name": "Slowakisch",
            "pt_name": "eslovaco",
            "ca_name": "eslovac"
        },
        {
            "id": "sl",
            "en_name": "Slovenian",
            "fr_name": "slovène",
            "es_name": "esloveno",
            "it_name": "sloveno",
            "de_name": "Slowenisch",
            "pt_name": "esloveno",
            "ca_name": "eslovè; eslovènic"
        },
        {
            "id": "sm",
            "en_name": "Samoan",
            "fr_name": "samoan",
            "es_name": "samoano",
            "it_name": "samoano",
            "de_name": "Samoanisch",
            "pt_name": "samoano",
            "ca_name": "samoà"
        },
        {
            "id": "sn",
            "en_name": "Shona",
            "fr_name": "shona",
            "es_name": "shona",
            "it_name": "shona",
            "de_name": "Shona",
            "pt_name": "chona",
            "ca_name": "shona"
        },
        {
            "id": "so",
            "en_name": "Somali",
            "fr_name": "somali",
            "es_name": "somalí",
            "it_name": "somalo",
            "de_name": "Somali",
            "pt_name": "somali",
            "ca_name": "somali"
        },
        {
            "id": "sq",
            "en_name": "Albanian",
            "fr_name": "albanais",
            "es_name": "albanés",
            "it_name": "albanese",
            "de_name": "Albanisch",
            "pt_name": "albanês",
            "ca_name": "albanès"
        },
        {
            "id": "sr",
            "en_name": "Serbian",
            "fr_name": "serbe",
            "es_name": "serbio",
            "it_name": "serbo",
            "de_name": "Serbisch",
            "pt_name": "sérvio",
            "ca_name": "serbi"
        },
        {
            "id": "ss",
            "en_name": "Swati",
            "fr_name": "swati",
            "es_name": "suazi; swati; siSwati",
            "it_name": "swati",
            "de_name": "Siswati",
            "pt_name": "swati",
            "ca_name": "swazi"
        },
        {
            "id": "st",
            "en_name": "Sotho, Southern",
            "fr_name": "sotho du Sud",
            "es_name": "sesotho",
            "it_name": "sotho del sud",
            "de_name": "Sesotho",
            "pt_name": "seSotho do sul",
            "ca_name": "sotho meridional; sotho del sud"
        },
        {
            "id": "su",
            "en_name": "Sundanese",
            "fr_name": "soundanais",
            "es_name": "sundanés",
            "it_name": "sundanese",
            "de_name": "Sundanesisch",
            "pt_name": "sundanês",
            "ca_name": "sondanès"
        },
        {
            "id": "sv",
            "en_name": "Swedish",
            "fr_name": "suédois",
            "es_name": "sueco",
            "it_name": "svedese",
            "de_name": "Schwedisch",
            "pt_name": "sueco",
            "ca_name": "suec"
        },
        {
            "id": "sw",
            "en_name": "Swahili",
            "fr_name": "swahili",
            "es_name": "suajili",
            "it_name": "swahili",
            "de_name": "Swahili",
            "pt_name": "swahili",
            "ca_name": "suahili"
        },
        {
            "id": "ta",
            "en_name": "Tamil",
            "fr_name": "tamoul",
            "es_name": "tamil",
            "it_name": "tamil",
            "de_name": "Tamilisch",
            "pt_name": "tâmil",
            "ca_name": "tàmil"
        },
        {
            "id": "te",
            "en_name": "Telugu",
            "fr_name": "télougou",
            "es_name": "telugú",
            "it_name": "telugu",
            "de_name": "Telugu",
            "pt_name": "telugu",
            "ca_name": "telugu"
        },
        {
            "id": "tg",
            "en_name": "Tajik",
            "fr_name": "tadjik",
            "es_name": "tayiko",
            "it_name": "tajik",
            "de_name": "Tadschikisch",
            "pt_name": "tadjique",
            "ca_name": "tadjik"
        },
        {
            "id": "th",
            "en_name": "Thai",
            "fr_name": "thaï",
            "es_name": "tailandés",
            "it_name": "thailandese",
            "de_name": "Thailändisch",
            "pt_name": "tailandês",
            "ca_name": "tai"
        },
        {
            "id": "ti",
            "en_name": "Tigrinya",
            "fr_name": "tigrigna",
            "es_name": "tigriña",
            "it_name": "tigrinya",
            "de_name": "Tigrinya",
            "pt_name": "tigrinya",
            "ca_name": "tigrinya"
        },
        {
            "id": "tk",
            "en_name": "Turkmen",
            "fr_name": "turkmène",
            "es_name": "turcomano",
            "it_name": "turcmeno",
            "de_name": "Turkmenisch",
            "pt_name": "turcomano",
            "ca_name": "turcman"
        },
        {
            "id": "tl",
            "en_name": "Tagalog",
            "fr_name": "tagalog",
            "es_name": "tagalo",
            "it_name": "tagalog",
            "de_name": "Tagalog",
            "pt_name": "tagalo",
            "ca_name": "tagàlog, tagal"
        },
        {
            "id": "tn",
            "en_name": "Tswana",
            "fr_name": "tswana",
            "es_name": "setsuana",
            "it_name": "tswana",
            "de_name": "Setswana",
            "pt_name": "tswana",
            "ca_name": "tswana"
        },
        {
            "id": "to",
            "en_name": "Tonga (Tonga Islands)",
            "fr_name": "tongan (Îles Tonga)",
            "es_name": "tongano",
            "it_name": "tonga (Isole Tonga)",
            "de_name": "Tongaisch",
            "pt_name": "tonganês (das Ilhas Tonga)",
            "ca_name": "tongalès; tongà"
        },
        {
            "id": "tr",
            "en_name": "Turkish",
            "fr_name": "turc",
            "es_name": "turco",
            "it_name": "turco",
            "de_name": "Tirkisch",
            "pt_name": "turco",
            "ca_name": "turc"
        },
        {
            "id": "ts",
            "en_name": "Tsonga",
            "fr_name": "tsonga",
            "es_name": "tsonga",
            "it_name": "tsonga",
            "de_name": "Tsonga",
            "pt_name": "ChiTsonga; XiTsonga; ShiTsonga",
            "ca_name": "tsonga"
        },
        {
            "id": "tt",
            "en_name": "Tatar",
            "fr_name": "tatar",
            "es_name": "tártaro",
            "it_name": "tatarico",
            "de_name": "Tatarisch",
            "pt_name": "tártaro",
            "ca_name": "tàtar"
        },
        {
            "id": "tw",
            "en_name": "Twi",
            "fr_name": "twi",
            "es_name": "twi",
            "it_name": "twi",
            "de_name": "Twi",
            "pt_name": "twi",
            "ca_name": "twi"
        },
        {
            "id": "ty",
            "en_name": "Tahitian",
            "fr_name": "tahitien",
            "es_name": "tahitiano",
            "it_name": "thaitiano",
            "de_name": "Tahitianisch",
            "pt_name": "taitiano",
            "ca_name": "tahitià"
        },
        {
            "id": "ug",
            "en_name": "Uighur; Uyghur",
            "fr_name": "ouïgour",
            "es_name": "uigur",
            "it_name": "uighur",
            "de_name": "Uigurisch",
            "pt_name": "uigure",
            "ca_name": "uigur"
        },
        {
            "id": "uk",
            "en_name": "Ukrainian",
            "fr_name": "ukrainien",
            "es_name": "ucraniano",
            "it_name": "ucraino",
            "de_name": "Ukrainisch",
            "pt_name": "ucraniano",
            "ca_name": "ucraïnès"
        },
        {
            "id": "ur",
            "en_name": "Urdu",
            "fr_name": "ourdou",
            "es_name": "urdu",
            "it_name": "urdu",
            "de_name": "Urdu",
            "pt_name": "urdu",
            "ca_name": "urdú"
        },
        {
            "id": "uz",
            "en_name": "Uzbek",
            "fr_name": "ouszbek",
            "es_name": "uzbeko",
            "it_name": "uzbeco",
            "de_name": "Usbekisch",
            "pt_name": "uzbeque; uzbek",
            "ca_name": "uzbek"
        },
        {
            "id": "ve",
            "en_name": "Venda",
            "fr_name": "venda",
            "es_name": "venda",
            "it_name": "venda",
            "de_name": "Venda",
            "pt_name": "venda",
            "ca_name": "venda"
        },
        {
            "id": "vi",
            "en_name": "Vietnamese",
            "fr_name": "vietnamien",
            "es_name": "vietnamita",
            "it_name": "vietnamita",
            "de_name": "Vietnamesisch",
            "pt_name": "vietnamita",
            "ca_name": "vietnamita; annamita"
        },
        {
            "id": "vo",
            "en_name": "Volapük",
            "fr_name": "volapük",
            "es_name": "volapük",
            "it_name": "volapük",
            "de_name": "Volapük",
            "pt_name": "volapük",
            "ca_name": "volapük"
        },
        {
            "id": "wa",
            "en_name": "Walloon",
            "fr_name": "wallon",
            "es_name": "valón",
            "it_name": "vallone",
            "de_name": "Wallonisch",
            "pt_name": "valão",
            "ca_name": "való"
        },
        {
            "id": "wo",
            "en_name": "Wolof",
            "fr_name": "wolof",
            "es_name": "wolof",
            "it_name": "volof",
            "de_name": "Wolof",
            "pt_name": "wolof",
            "ca_name": "wòlof"
        },
        {
            "id": "xh",
            "en_name": "Xhosa",
            "fr_name": "xhosa",
            "es_name": "xhosa",
            "it_name": "xhosa",
            "de_name": "IsiXhosa",
            "pt_name": "xhosa",
            "ca_name": "xosa; xhosa"
        },
        {
            "id": "yi",
            "en_name": "Yiddish",
            "fr_name": "yiddish",
            "es_name": "yídish; yiddish",
            "it_name": "yiddish",
            "de_name": "Jiddisch",
            "pt_name": "yiddish; iídiche",
            "ca_name": "jiddisch, ídix"
        },
        {
            "id": "yo",
            "en_name": "Yoruba",
            "fr_name": "yoruba",
            "es_name": "yoruba",
            "it_name": "yoruba",
            "de_name": "Yoruba",
            "pt_name": "iorubá; yoruba",
            "ca_name": "ioruba"
        },
        {
            "id": "za",
            "en_name": "Zhuang; Chuang",
            "fr_name": "zhuang; chuang",
            "es_name": "chuan; zhuang",
            "it_name": "zhuang; chuang",
            "de_name": "Zhuang",
            "pt_name": "zhuang; chuang",
            "ca_name": "zhuang"
        },
        {
            "id": "zh",
            "en_name": "Chinese",
            "fr_name": "chinois",
            "es_name": "chino",
            "it_name": "cinese",
            "de_name": "Chinesisch",
            "pt_name": "chinês",
            "ca_name": "xinès; mandarí; guanhua"
        },
        {
            "id": "zu",
            "en_name": "Zulu",
            "fr_name": "zoulou",
            "es_name": "zulú",
            "it_name": "zulu",
            "de_name": "IsiZulu",
            "pt_name": "zulu",
            "ca_name": "zulu"
        }
    ];

    language.getAll = function () {
        return language.languages;
    };

    return language;

}]);
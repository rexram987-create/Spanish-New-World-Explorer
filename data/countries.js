const countries = [
  {
    id: "hispaniola",
    name: "היספניולה",
    englishName: "Hispaniola",
    region: "האיים הקריביים",
    capital: "סנטו דומינגו ופורט־או־פרנס כיום",
    detailPage: "destinations/hispaniola.html",
    flag: {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Hispaniola%20lrg.jpg",
      alt: "מפת היספניולה",
      credit: "מפה דרך Wikimedia Commons",
      source: "https://commons.wikimedia.org/wiki/File:Hispaniola_lrg.jpg"
    },
    emblemImage: {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Hispaniola%20lrg.jpg",
      alt: "מפת היספניולה",
      credit: "מפה דרך Wikimedia Commons",
      source: "https://commons.wikimedia.org/wiki/File:Hispaniola_lrg.jpg"
    },
    explorer: "כריסטופר קולומבוס",
    explorerEnglish: "Christopher Columbus",
    explorerLifeYears: "1451–1506",
    explorerImage: {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Portrait%20of%20a%20Man%2C%20Said%20to%20be%20Christopher%20Columbus.jpg",
      alt: "דיוקן המיוחס באופן מסורתי לכריסטופר קולומבוס",
      credit: "דיוקן דרך Wikimedia Commons",
      source: "https://commons.wikimedia.org/wiki/File:Portrait_of_a_Man,_Said_to_be_Christopher_Columbus.jpg"
    },
    discoveryYear: "1492",
    discoveryCircumstances: "קולומבוס הגיע להיספניולה במסעו הראשון, התרשם מגודל האי וממשאביו, ובה הוקמה לה נבידד — ההתיישבות הספרדית הראשונה באמריקה.",
    indigenousPeoples: "לפני הגעת האירופים חיו באי בעיקר קהילות טאינו.",
    etymology: "השם Hispaniola נובע מן השם הספרדי La Española, כלומר הספרדית או ספרד הקטנה. שמות ילידיים הקשורים לאי כוללים Ayiti ו־Quisqueya.",
    vexillology: "כיום האי מחולק בין שתי מדינות, האיטי והרפובליקה הדומיניקנית, שלכל אחת דגל וסמל משלה.",
    emblem: "להיספניולה כאי אין סמל מדינה אחד, מפני שהיא מחולקת כיום בין שתי מדינות ריבוניות.",
    historicalNote: "היספניולה הייתה בסיס מרכזי להתפשטות הספרדית המוקדמת בעולם החדש."
  },
  {
    id: "bahamas",
    name: "איי בהאמה",
    englishName: "The Bahamas",
    region: "האיים הקריביים",
    capital: "נסאו",
    flag: {
      url: "https://flagcdn.com/w640/bs.png",
      alt: "דגל איי בהאמה",
      credit: "תמונת דגל דרך FlagCDN / Flagpedia",
      source: "https://flagpedia.net/bahamas"
    },
    emblemImage: {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Coat%20of%20arms%20of%20the%20Bahamas.svg",
      alt: "סמל המדינה של איי בהאמה",
      credit: "תמונת סמל המדינה דרך Wikimedia Commons",
      source: "https://commons.wikimedia.org/wiki/File:Coat_of_arms_of_the_Bahamas.svg"
    },
    explorer: "כריסטופר קולומבוס",
    explorerEnglish: "Christopher Columbus",
    explorerLifeYears: "1451–1506",
    explorerImage: {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Portrait%20of%20a%20Man%2C%20Said%20to%20be%20Christopher%20Columbus.jpg",
      alt: "דיוקן המיוחס באופן מסורתי לכריסטופר קולומבוס",
      credit: "דיוקן דרך Wikimedia Commons",
      source: "https://commons.wikimedia.org/wiki/File:Portrait_of_a_Man,_Said_to_be_Christopher_Columbus.jpg"
    },
    discoveryYear: "1492",
    discoveryCircumstances: "קולומבוס הגיע לארכיפלג הלוקאיאני במהלך מסעו הראשון מערבה באוקיינוס האטלנטי, במסגרת חיפוש אחר נתיב ימי לאסיה.",
    indigenousPeoples: "לפני הגעת האירופים חיו באיים קהילות לוקאיאן־טאינו.",
    etymology: "השם בהאמה מקושר בדרך כלל לביטוי הספרדי baja mar, שפירושו ים רדוד או שפל, המתייחס למים הרדודים סביב האיים.",
    vexillology: "בדגל המודרני של איי בהאמה צבע טורקיז המסמל את הים, צהוב המסמל את החול והשמש, ושחור המסמל את כוחו ונחישותו של העם.",
    emblem: "סמל המדינה כולל אונייה, בעלי חיים ימיים וסמלים הקשורים לים ולאיים.",
    historicalNote: "איי בהאמה מזוהים מאוד עם נקודת הנחיתה הראשונה במסעו של קולומבוס בשנת 1492, אף שזהות האי המדויק עדיין נתונה לוויכוח."
  },
  {
    id: "cuba",
    name: "קובה",
    englishName: "Cuba",
    region: "האיים הקריביים",
    capital: "הוואנה",
    flag: {
      url: "https://flagcdn.com/w640/cu.png",
      alt: "דגל קובה",
      credit: "תמונת דגל דרך FlagCDN / Flagpedia",
      source: "https://flagpedia.net/cuba"
    },
    emblemImage: {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Coat%20of%20arms%20of%20Cuba.svg",
      alt: "סמל המדינה של קובה",
      credit: "תמונת סמל המדינה דרך Wikimedia Commons",
      source: "https://commons.wikimedia.org/wiki/File:Coat_of_arms_of_Cuba.svg"
    },
    explorer: "כריסטופר קולומבוס",
    explorerEnglish: "Christopher Columbus",
    explorerLifeYears: "1451–1506",
    explorerImage: {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Portrait%20of%20a%20Man%2C%20Said%20to%20be%20Christopher%20Columbus.jpg",
      alt: "דיוקן המיוחס באופן מסורתי לכריסטופר קולומבוס",
      credit: "דיוקן דרך Wikimedia Commons",
      source: "https://commons.wikimedia.org/wiki/File:Portrait_of_a_Man,_Said_to_be_Christopher_Columbus.jpg"
    },
    discoveryYear: "1492",
    discoveryCircumstances: "קולומבוס הגיע לקובה במהלך מסעו הראשון, ובתחילה סבר כי ייתכן שמדובר בחלק מאסיה.",
    indigenousPeoples: "לפני הקולוניזציה הספרדית חיו בקובה קהילות טאינו, סיבוני וגואנאהטביי.",
    etymology: "השם קובה נובע ככל הנראה ממילה ילידית בשפת הטאינו, אך משמעותה המדויקת נתונה לוויכוח.",
    vexillology: "הדגל המודרני של קובה כולל פסים כחולים ולבנים, משולש אדום וכוכב לבן, המסמלים עצמאות, חירות ומאבק לאומי.",
    emblem: "סמל קובה כולל מפתח, שמש עולה, הרים וסמלים לאומיים הקשורים לחירות ולגאוגרפיה של האי.",
    historicalNote: "קובה הפכה לאחת הטריטוריות הקולוניאליות המרכזיות של ספרד באיים הקריביים."
  },
  {
    id: "mexico",
    name: "מקסיקו",
    englishName: "Mexico",
    region: "אמריקה הצפונית",
    capital: "מקסיקו סיטי",
    flag: {
      url: "https://flagcdn.com/w640/mx.png",
      alt: "דגל מקסיקו",
      credit: "תמונת דגל דרך FlagCDN / Flagpedia",
      source: "https://flagpedia.net/mexico"
    },
    emblemImage: {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Coat%20of%20arms%20of%20Mexico.svg",
      alt: "סמל המדינה של מקסיקו",
      credit: "תמונת סמל המדינה דרך Wikimedia Commons",
      source: "https://commons.wikimedia.org/wiki/File:Coat_of_arms_of_Mexico.svg"
    },
    explorer: "הרנאן קורטס",
    explorerEnglish: "Hernán Cortés",
    explorerLifeYears: "1485–1547",
    explorerImage: {
      url: "assets/explorers/hernan-cortes-portrait.jpg",
      alt: "דיוקן של הרנאן קורטס",
      credit: "דיוקן הרנאן קורטס, קובץ מקומי בפרויקט",
      source: "assets/explorers/hernan-cortes-portrait.jpg"
    },
    discoveryYear: "1519",
    discoveryCircumstances: "קורטס הוביל משלחת ספרדית אל חופי מקסיקו, שהפכה בהמשך למסע הכיבוש של האימפריה האצטקית.",
    indigenousPeoples: "באזור חיו תרבויות ילידיות רבות, ובהן המֶשיקה/האצטקים, המאיה, הזפוטקים, המיקסטקים ואחרים.",
    etymology: "השם מקסיקו נובע מן השם בנאוואטל Mēxihco, הקשור לעם המֶשיקה ולעמק מקסיקו.",
    vexillology: "הדגל המודרני של מקסיקו כולל שלושה פסים אנכיים בצבעי ירוק, לבן ואדום, ובמרכזו סמל המדינה עם העיט, הנחש והצבר.",
    emblem: "סמל המדינה מבוסס על אגדת ייסוד טנוצ'טיטלאן, שבה נראה עיט עומד על צבר ואוחז בנחש.",
    historicalNote: "המפגש הספרדי עם מקסיקו הוביל לאחת התמורות המשמעותיות בהיסטוריה העולמית: נפילת האימפריה האצטקית והקמת ספרד החדשה."
  }
];
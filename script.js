const countryGrid = document.getElementById("countryGrid");
const timelineGrid = document.getElementById("timelineGrid");
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalSubtitle = document.getElementById("modalSubtitle");
const modalBody = document.getElementById("modalBody");
const closeModal = document.getElementById("closeModal");
const startButton = document.getElementById("startButton");
const imageLightbox = document.getElementById("imageLightbox");
const closeLightbox = document.getElementById("closeLightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxCaption = document.getElementById("lightboxCaption");

function resolveAssetUrl(url) {
  if (!url) return "";
  if (url.startsWith("http") || url.startsWith("../") || url.startsWith("/")) return url;
  const isInPagesFolder = window.location.pathname.includes("/pages/");
  return isInPagesFolder ? `../${url}` : url;
}

const timelineEvents = [
  { year: "1451", title: "ילדותו של כריסטופר קולומבוס", location: "גנואה, איטליה", summary: "קולומבוס נולד בגנואה למשפחה עירונית פשוטה יחסית, בסביבה ימית ומסחרית פעילה.", details: "כריסטופר קולומבוס נולד כנראה בשנת 1451 בגנואה. אביו עסק במלאכות ובמסחר, והעיר שבה גדל הייתה מרכז ימי חשוב. הסביבה הימית של גנואה, קשריה המסחריים והמפגש עם יורדי ים תרמו לעיצוב דמיונו ותחומי העניין שלו כבר מגיל צעיר." },
  { year: "1460s–1470s", title: "תחילת דרכו של קולומבוס בים", location: "הים התיכון והאוקיינוס האטלנטי", summary: "קולומבוס החל לצבור ניסיון ימי, מסחרי וגאוגרפי במסעות שונים.", details: "בצעירותו החל קולומבוס להפליג ולצבור ניסיון במסחר ימי. הוא נחשף למפות, סיפורי מסעות, רוחות, זרמים ונתיבי מסחר. הניסיון המעשי הזה היה חלק חשוב מהדרך שהובילה אותו מאוחר יותר להציע מסע מערבה אל אסיה." },
  { year: "1476", title: "קולומבוס מגיע לפורטוגל", location: "ליסבון", summary: "קולומבוס מתיישב בפורטוגל, אחת ממעצמות הימאות החשובות של התקופה.", details: "שהותו של קולומבוס בפורטוגל הייתה משמעותית מאוד. פורטוגל הייתה אז מרכז של ידע ימי, ניווט ומסעות חקר לאורך חופי אפריקה. בליסבון נחשף קולומבוס לרעיונות גאוגרפיים, למפות חדשות ולדיונים על נתיבי ים אל המזרח." },
  { year: "1485", title: "ילדותו של הרנאן קורטס", location: "מדיין, אקסטרמדורה, ספרד", summary: "קורטס נולד למשפחת אצולה נמוכה באזור אקסטרמדורה שבספרד.", details: "הרנאן קורטס נולד בשנת 1485 במדיין שבאקסטרמדורה. הוא גדל בסביבה ספרדית שבה כבוד משפחתי, שירות צבאי, שאפתנות אישית והזדמנויות בעולם החדש היו מרכיבים חשובים. הרקע הזה השפיע על אופיו ועל דרכו בהמשך." },
  { year: "1492", title: "המסע הראשון של קולומבוס", location: "ספרד → האיים הקריביים", summary: "קולומבוס יוצא מערבה בחיפוש אחר נתיב ימי לאסיה ומגיע לאיים הקריביים.", details: "המסע הראשון של קולומבוס בשנת 1492 פתח את תקופת המפגש האירופי הרחב עם העולם החדש. מבחינת הספרדים, זה היה תחילת עידן של חקר, מסחר, קולוניזציה וכיבוש. מבחינת העמים הילידיים, זו הייתה תחילתו של שינוי היסטורי עמוק וכואב." },
  { year: "1492", title: "הגעה לאיי בהאמה", location: "איי בהאמה", summary: "קולומבוס מגיע לארכיפלג הלוקאיאני, המזוהה בדרך כלל עם הנחיתה הראשונה במסעו.", details: "הנחיתה הראשונה של קולומבוס בעולם החדש מזוהה בדרך כלל עם אחד מאיי בהאמה, אם כי זהות האי המדויקת עדיין נתונה לוויכוח מחקרי. באזור חיו קהילות לוקאיאן־טאינו לפני הגעת האירופים." },
  { year: "1492", title: "קולומבוס מגיע לקובה", location: "קובה", summary: "קולומבוס מגיע לקובה במהלך מסעו הראשון וסבור כי ייתכן שמדובר באזור הקרוב לאסיה.", details: "קובה הפכה בהמשך לאחת הטריטוריות הספרדיות החשובות ביותר באיים הקריביים. לפני הקולוניזציה הספרדית חיו באי קהילות טאינו, סיבוני וגואנאהטביי." },
  { year: "1493–1496", title: "המסע השני של קולומבוס", location: "האיים הקריביים", summary: "המסע השני היה גדול יותר וכלל התיישבות, חיפוש משאבים והעמקת הנוכחות הספרדית.", details: "במסעו השני הגיע קולומבוס בראש משלחת גדולה בהרבה. המסע כבר לא היה רק חקר ימי, אלא גם ניסיון לייסד נוכחות ספרדית קבועה באיים הקריביים. שלב זה העמיק את המפגש בין הספרדים לבין העמים הילידיים." },
  { year: "1498–1500", title: "המסע השלישי של קולומבוס", location: "הקריביים וחופי אמריקה הדרומית", summary: "קולומבוס מגיע לאזור טרינידד ולחופי אמריקה הדרומית.", details: "במסעו השלישי הגיע קולומבוס לאזורים דרומיים יותר של העולם החדש. המסע חיזק את ההבנה שהאזורים שהתגלו אינם רק איים בודדים, אלא חלק ממרחב יבשתי וגאוגרפי עצום." },
  { year: "1502–1504", title: "המסע הרביעי של קולומבוס", location: "מרכז אמריקה והקריביים", summary: "קולומבוס יוצא למסעו האחרון בניסיון למצוא מעבר ימי אל אסיה.", details: "במסעו הרביעי המשיך קולומבוס לחפש מעבר מערבי לאסיה. הוא הפליג לאורך חופים במרכז אמריקה, אך לא מצא את המעבר המבוקש. המסע היה קשה, וכלל סערות, מחסור ובעיות פוליטיות." },
  { year: "1504", title: "תחילת דרכו של קורטס בעולם החדש", location: "היספניולה", summary: "קורטס מגיע לעולם החדש ומתחיל את דרכו כמנהל, מתיישב ואיש כוח מקומי.", details: "הרנאן קורטס הגיע להיספניולה בראשית המאה ה־16. שם החל לצבור ניסיון במנהל קולוניאלי, קשרים פוליטיים והבנה של מנגנוני הכוח הספרדיים בעולם החדש. זו הייתה תחילת דרכו לפני עלייתו הגדולה במקסיקו." },
  { year: "1506", title: "מות קולומבוס", location: "ויאדוליד, ספרד", summary: "קולומבוס נפטר לאחר מסעותיו, בעוד משמעות תגליותיו עדיין מתבררת בהדרגה.", details: "קולומבוס נפטר בשנת 1506 בספרד. אף שבימיו עדיין הייתה אי־בהירות לגבי משמעות התגליות, מסעותיו שינו את ההיסטוריה העולמית ופתחו עידן חדש של קשרים, כיבושים, מסחר, הגירה ועימותים בין יבשות." },
  { year: "1511", title: "קורטס בקובה", location: "קובה", summary: "קורטס משתתף בכיבוש קובה וצובר מעמד וניסיון פוליטי־צבאי.", details: "בקובה התקדם קורטס במעמדו וצבר ניסיון צבאי ומנהלי. הוא למד כיצד מתנהלות משלחות ספרדיות, כיצד נבנות בריתות וכיצד פועלים מנגנוני שליטה בעולם החדש. תקופה זו הכינה אותו למסע הגדול למקסיקו." },
  { year: "1513", title: "בלבואה מגיע אל האוקיינוס השקט", location: "פנמה", summary: "ואסקו נונייס דה בלבואה חוצה את מצר פנמה ומגיע אל הים הדרומי.", details: "בלבואה היה מהראשונים מבין האירופים שראו את האוקיינוס השקט מצדו של העולם החדש. גילוי זה היה רגע גאוגרפי חשוב, משום שהוא הוכיח שממערב ליבשת אמריקה נמצא אוקיינוס נוסף ועצום." },
  { year: "1519", title: "משלחת קורטס למקסיקו", location: "חופי מקסיקו", summary: "הרנאן קורטס מוביל משלחת ספרדית אל חופי מקסיקו.", details: "הגעתו של קורטס למקסיקו בשנת 1519 הובילה בהמשך למסע הכיבוש של האימפריה האצטקית. האירוע שינה את ההיסטוריה של אמריקה, ספרד והעולם כולו." },
  { year: "1519", title: "מגלן יוצא למסע ההקפה", location: "ספרד → האוקיינוס האטלנטי", summary: "פרדיננד מגלן יוצא בשירות ספרד למסע שנועד למצוא נתיב מערבי לאיי התבלינים.", details: "מסעו של מגלן נועד למצוא נתיב מערבי אל אסיה. אף שמגלן עצמו לא השלים את המסע, המשלחת שלו הייתה הראשונה שהקיפה את העולם והוכיחה בפועל את ממדי כדור הארץ ואת קשרי הימים הגדולים." },
  { year: "1520", title: "לה נוצ'ה טריסטה", location: "טנוצ'טיטלאן", summary: "הספרדים נסוגים מטנוצ'טיטלאן בלילה קשה לאחר עימותים עם המֶשיקה.", details: "לה נוצ'ה טריסטה, 'הלילה העצוב', הייתה נקודת משבר במסע קורטס. הכוחות הספרדיים ובעלי בריתם נאלצו לסגת מטנוצ'טיטלאן לאחר קרבות קשים ואבדות. האירוע מראה שהכיבוש לא היה מהלך פשוט או חד־כיווני." },
  { year: "1521", title: "נפילת טנוצ'טיטלאן", location: "עמק מקסיקו", summary: "בירת האימפריה האצטקית נופלת לידי הכוחות הספרדיים ובעלי בריתם הילידיים.", details: "נפילת טנוצ'טיטלאן בשנת 1521 סימנה את סופה של האימפריה האצטקית ותחילת התבססותה של ספרד החדשה. האירוע כלל מלחמה, בריתות פוליטיות, מגפות, מצור ושינוי עמוק במבנה השלטוני והתרבותי של האזור." },
  { year: "1521", title: "מות מגלן בפיליפינים", location: "האי מקטאן", summary: "מגלן נהרג בפיליפינים, אך משלחתו ממשיכה את המסע סביב העולם.", details: "מגלן נהרג בקרב מקטאן בשנת 1521. אף שלא השלים את מסע ההקפה בעצמו, המשלחת המשיכה מערבה ובסופו של דבר שבה לספרד. המסע חיזק את מעמדה של ספרד כמעצמה ימית גלובלית." },
  { year: "1522", title: "השלמת הקפת העולם הראשונה", location: "ספרד", summary: "שרידי משלחת מגלן חוזרים לספרד ומשלימים את הקפת העולם הראשונה.", details: "בשנת 1522 שבה הספינה ויקטוריה לספרד עם קומץ ניצולים. ההקפה הראשונה של העולם הייתה הישג ימי וגאוגרפי עצום, והיא הרחיבה באופן דרמטי את הבנת האירופים את ממדי העולם." },
  { year: "1532", title: "פיסארו ולכידת אטוואלפה", location: "קחמרקה, פרו", summary: "פרנסיסקו פיסארו לוכד את אטוואלפה, שליט האינקה, באירוע מכריע בכיבוש פרו.", details: "לכידת אטוואלפה בשנת 1532 הייתה נקודת מפנה בכיבוש הספרדי של אימפריית האינקה. האירוע התרחש על רקע מתחים פנימיים באימפריה, עליונות טכנולוגית ספרדית ובריתות פוליטיות מורכבות." },
  { year: "1535", title: "ייסוד לימה", location: "פרו", summary: "פיסארו מייסד את לימה, שתהפוך למרכז ספרדי חשוב בדרום אמריקה.", details: "ייסוד לימה בשנת 1535 סימן את התבססות השלטון הספרדי בפרו. העיר הפכה לאחד המרכזים המנהליים, הכלכליים והפוליטיים החשובים ביותר של האימפריה הספרדית בדרום אמריקה." },
  { year: "1547", title: "מות הרנאן קורטס", location: "ספרד", summary: "קורטס נפטר בספרד לאחר שנים של מאבקים על מעמדו, זכויותיו ומורשתו.", details: "קורטס מת בשנת 1547. דמותו נותרה שנויה במחלוקת: מצד אחד הוא נתפס ככובש ומנהיג צבאי יוצא דופן, ומצד שני כמי שעמד במרכז תהליך אלים של כיבוש, הרס תרבותי ושינוי עמוק בחיי העמים הילידיים." }
];

function createCountryCard(country) {
  const card = document.createElement("article");
  card.className = "country-card";
  const flagUrl = resolveAssetUrl(country.flag.url);

  card.innerHTML = `
    <img class="country-flag zoomable-image" src="${flagUrl}" alt="${country.flag.alt}" loading="lazy" data-caption="${country.flag.alt}" />
    <h3>${country.name}</h3>
    <p><strong>שם באנגלית:</strong> ${country.englishName}</p>
    <p><strong>מגלה:</strong> ${country.explorer}</p>
    <p><strong>שנת גילוי:</strong> ${country.discoveryYear}</p>
    <p class="image-credit"><a href="${country.flag.source}" target="_blank" rel="noopener">${country.flag.credit}</a></p>
    <button type="button">פתח כרטיס מידע</button>
  `;

  card.querySelector("button").addEventListener("click", () => openCountryModal(country));
  return card;
}

function renderCountries() {
  if (!countryGrid || typeof countries === "undefined") return;
  countryGrid.innerHTML = "";
  countries.forEach((country) => {
    countryGrid.appendChild(createCountryCard(country));
  });
}

function createTimelineCard(event) {
  const card = document.createElement("article");
  card.className = "timeline-card";
  card.innerHTML = `
    <span class="timeline-year">${event.year}</span>
    <h3>${event.title}</h3>
    <p class="timeline-location">${event.location}</p>
    <p>${event.summary}</p>
    <button type="button">פתח אירוע</button>
  `;
  card.querySelector("button").addEventListener("click", () => openTimelineModal(event));
  return card;
}

function renderTimeline() {
  if (!timelineGrid) return;
  timelineGrid.innerHTML = "";
  timelineEvents.forEach((event) => {
    timelineGrid.appendChild(createTimelineCard(event));
  });
}

function openCountryModal(country) {
  if (!modal) return;
  modalTitle.textContent = country.name;
  modalSubtitle.textContent = `${country.englishName} · ${country.region} · ${country.capital}`;

  const flagUrl = resolveAssetUrl(country.flag.url);
  const emblemUrl = resolveAssetUrl(country.emblemImage.url);
  const explorerUrl = resolveAssetUrl(country.explorerImage.url);

  modalBody.innerHTML = `
    <section class="quick-facts">
      <div><strong>בירה</strong><span>${country.capital}</span></div>
      <div><strong>אזור</strong><span>${country.region}</span></div>
      <div><strong>מגלה</strong><span>${country.explorer}</span></div>
      <div><strong>שנת גילוי</strong><span>${country.discoveryYear}</span></div>
      <div><strong>שנות חיים</strong><span>${country.explorerLifeYears}</span></div>
    </section>
    <section class="visual-panel">
      <figure><img class="modal-flag zoomable-image" src="${flagUrl}" alt="${country.flag.alt}" data-caption="${country.flag.alt}" /><figcaption><a href="${country.flag.source}" target="_blank" rel="noopener">${country.flag.credit}</a></figcaption></figure>
      <figure><img class="emblem-image zoomable-image" src="${emblemUrl}" alt="${country.emblemImage.alt}" data-caption="${country.emblemImage.alt}" /><figcaption><a href="${country.emblemImage.source}" target="_blank" rel="noopener">${country.emblemImage.credit}</a></figcaption></figure>
      <figure><img class="explorer-image zoomable-image" src="${explorerUrl}" alt="${country.explorerImage.alt}" data-caption="${country.explorerImage.alt}" /><figcaption><a href="${country.explorerImage.source}" target="_blank" rel="noopener">${country.explorerImage.credit}</a></figcaption></figure>
    </section>
    <div class="detail-grid">
      <div class="detail-box"><strong>המגלה</strong>${country.explorer}</div>
      <div class="detail-box"><strong>שנות חיים</strong>${country.explorerLifeYears}</div>
      <div class="detail-box"><strong>שנת גילוי</strong>${country.discoveryYear}</div>
      <div class="detail-box"><strong>עמים ילידיים</strong>${country.indigenousPeoples}</div>
      <div class="detail-box"><strong>נסיבות הגילוי</strong>${country.discoveryCircumstances}</div>
      <div class="detail-box"><strong>אטימולוגיה</strong>${country.etymology}</div>
      <div class="detail-box"><strong>וקסילולוגיה</strong>${country.vexillology}</div>
      <div class="detail-box"><strong>סמל המדינה</strong>${country.emblem}</div>
      <div class="detail-box"><strong>הערה היסטורית</strong>${country.historicalNote}</div>
    </div>
  `;
  modal.classList.remove("hidden");
}

function openTimelineModal(event) {
  if (!modal) return;
  modalTitle.textContent = event.title;
  modalSubtitle.textContent = `${event.year} · ${event.location}`;
  modalBody.innerHTML = `<div class="timeline-modal-content"><p class="timeline-modal-year">${event.year}</p><p>${event.details}</p></div>`;
  modal.classList.remove("hidden");
}

function closeModalWindow() {
  if (modal) modal.classList.add("hidden");
}

function openImageLightbox(image) {
  if (!imageLightbox || !lightboxImage || !lightboxCaption) return;
  lightboxImage.src = image.src;
  lightboxImage.alt = image.alt || "תמונה מוגדלת";
  lightboxCaption.textContent = image.dataset.caption || image.alt || "תמונה מוגדלת";
  imageLightbox.classList.remove("hidden");
}

function closeImageLightbox() {
  if (!imageLightbox || !lightboxImage || !lightboxCaption) return;
  imageLightbox.classList.add("hidden");
  lightboxImage.src = "";
  lightboxImage.alt = "";
  lightboxCaption.textContent = "";
}

if (closeModal) closeModal.addEventListener("click", closeModalWindow);
if (closeLightbox) closeLightbox.addEventListener("click", closeImageLightbox);
if (modal) modal.addEventListener("click", (event) => { if (event.target === modal) closeModalWindow(); });
if (imageLightbox) imageLightbox.addEventListener("click", (event) => { if (event.target === imageLightbox) closeImageLightbox(); });

document.addEventListener("click", (event) => {
  const image = event.target.closest(".zoomable-image");
  if (image) openImageLightbox(image);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeImageLightbox();
    closeModalWindow();
  }
});

if (startButton) {
  startButton.addEventListener("click", () => {
    const destinations = document.getElementById("destinations");
    if (destinations) destinations.scrollIntoView({ behavior: "smooth" });
  });
}

renderCountries();
renderTimeline();

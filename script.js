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
  { year: "1451", title: "ילדותו של כריסטופר קולומבוס", location: "גנואה", summary: "קולומבוס נולד בסביבה ימית ומסחרית פעילה.", details: "קולומבוס נולד ככל הנראה בגנואה בשנת 1451, בסביבה של נמלים, סוחרים ויורדי ים. הרקע הזה השפיע על משיכתו לעולם הים והמסעות." },
  { year: "1492", title: "המסע הראשון של קולומבוס", location: "האיים הקריביים", summary: "קולומבוס מגיע לאיי בהאמה, קובה והיספניולה.", details: "המסע הראשון פתח את תקופת המפגש האירופי הרחב עם העולם החדש. מבחינת העמים הילידיים זו הייתה תחילתו של שינוי היסטורי עמוק וכואב." },
  { year: "1492", title: "היספניולה", location: "האיים הקריביים", summary: "קולומבוס מגיע להיספניולה ומקים בהמשך את לה נבידד.", details: "היספניולה הפכה לאחד הבסיסים הראשונים של ספרד באמריקה ולנקודת מוצא להתפשטות ספרדית נוספת." },
  { year: "1504", title: "קורטס מגיע לעולם החדש", location: "היספניולה", summary: "הרנאן קורטס מתחיל לצבור ניסיון קולוניאלי.", details: "קורטס למד בהיספניולה את מנגנוני השלטון, האדמות, העבודה והפוליטיקה הספרדית בעולם החדש." },
  { year: "1513", title: "פונסה דה לאון מגיע לפלורידה", location: "פלורידה", summary: "פונסה דה לאון מביא את חופי פלורידה לידיעת ספרד.", details: "המסע לפלורידה הרחיב את המבט הספרדי מן הקריביים אל חופי צפון אמריקה." },
  { year: "1513", title: "בלבואה רואה את הים הדרומי", location: "פנמה", summary: "ואסקו נונייס דה בלבואה חוצה את מצר פנמה ורואה את האוקיינוס השקט.", details: "בלבואה הראה לאירופים שממערב ליבשת אמריקה נמצא אוקיינוס עצום נוסף, שנקרא אז הים הדרומי." },
  { year: "1519", title: "משלחת קורטס למקסיקו", location: "מקסיקו", summary: "קורטס יוצא למסע שהוביל לנפילת האימפריה האצטקית.", details: "קורטס ניצל בריתות מקומיות, יריבויות פנימיות וטכנולוגיה צבאית כדי להתקדם אל טנוצ'טיטלאן." },
  { year: "1519", title: "מגלן יוצא למסע ההקפה", location: "ספרד", summary: "מגלן יוצא מערבה בחיפוש אחר נתיב לאיי התבלינים.", details: "מסעו של מגלן היה הבסיס להקפה הימית הראשונה של כדור הארץ, אף שמגלן עצמו נהרג לפני השלמתה." },
  { year: "1521", title: "נפילת טנוצ'טיטלאן", location: "עמק מקסיקו", summary: "בירת האימפריה האצטקית נופלת לידי הספרדים ובעלי בריתם.", details: "נפילת טנוצ'טיטלאן סימנה את תחילת התבססותה של ספרד החדשה במקסיקו." },
  { year: "1522", title: "השלמת הקפת העולם הראשונה", location: "ספרד", summary: "שרידי משלחת מגלן שבים לספרד.", details: "הספינה ויקטוריה שבה לספרד והוכיחה בפועל שניתן להקיף את כדור הארץ בים." },
  { year: "1532", title: "פיסארו ולכידת אטוואלפה", location: "קחמרקה", summary: "פיסארו לוכד את שליט האינקה.", details: "לכידת אטוואלפה הייתה נקודת מפנה בכיבוש הספרדי של אימפריית האינקה." },
  { year: "1535", title: "ייסוד לימה", location: "פרו", summary: "פיסארו מייסד את לימה.", details: "לימה הפכה לאחד המרכזים הספרדיים החשובים בדרום אמריקה." }
];

function createCountryCard(country) {
  const card = document.createElement("article");
  card.className = "country-card";
  const flagUrl = resolveAssetUrl(country.flag.url);
  const buttonText = country.detailPage ? "📖 פתח ערך מלא" : "פתח כרטיס מידע";

  card.innerHTML = `
    <img class="country-flag zoomable-image" src="${flagUrl}" alt="${country.flag.alt}" loading="lazy" data-caption="${country.flag.alt}" />
    <h3>${country.name}</h3>
    <p><strong>שם באנגלית:</strong> ${country.englishName}</p>
    <p><strong>מגלה:</strong> ${country.explorer}</p>
    <p><strong>שנת גילוי:</strong> ${country.discoveryYear}</p>
    <p class="image-credit"><a href="${country.flag.source}" target="_blank" rel="noopener">${country.flag.credit}</a></p>
    <button type="button">${buttonText}</button>
  `;

  card.querySelector("button").addEventListener("click", () => {
    if (country.detailPage) {
      window.location.href = country.detailPage;
    } else {
      openCountryModal(country);
    }
  });
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
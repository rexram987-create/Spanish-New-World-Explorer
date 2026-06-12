const countryGrid = document.getElementById("countryGrid");
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

function createCountryCard(country) {
  const card = document.createElement("article");
  card.className = "country-card";

  card.innerHTML = `
    <img class="country-flag zoomable-image" src="${country.flag.url}" alt="${country.flag.alt}" loading="lazy" data-caption="${country.flag.alt}" />
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
  countryGrid.innerHTML = "";
  countries.forEach((country) => {
    countryGrid.appendChild(createCountryCard(country));
  });
}

function openCountryModal(country) {
  modalTitle.textContent = country.name;
  modalSubtitle.textContent = `${country.englishName} · ${country.region} · ${country.capital}`;

  modalBody.innerHTML = `
    <section class="quick-facts">
      <div><strong>בירה</strong><span>${country.capital}</span></div>
      <div><strong>אזור</strong><span>${country.region}</span></div>
      <div><strong>מגלה</strong><span>${country.explorer}</span></div>
      <div><strong>שנת גילוי</strong><span>${country.discoveryYear}</span></div>
      <div><strong>שנות חיים</strong><span>${country.explorerLifeYears}</span></div>
    </section>

    <section class="visual-panel">
      <figure>
        <img class="modal-flag zoomable-image" src="${country.flag.url}" alt="${country.flag.alt}" data-caption="${country.flag.alt}" />
        <figcaption><a href="${country.flag.source}" target="_blank" rel="noopener">${country.flag.credit}</a></figcaption>
      </figure>
      <figure>
        <img class="emblem-image zoomable-image" src="${country.emblemImage.url}" alt="${country.emblemImage.alt}" data-caption="${country.emblemImage.alt}" />
        <figcaption><a href="${country.emblemImage.source}" target="_blank" rel="noopener">${country.emblemImage.credit}</a></figcaption>
      </figure>
      <figure>
        <img class="explorer-image zoomable-image" src="${country.explorerImage.url}" alt="${country.explorerImage.alt}" data-caption="${country.explorerImage.alt}" />
        <figcaption><a href="${country.explorerImage.source}" target="_blank" rel="noopener">${country.explorerImage.credit}</a></figcaption>
      </figure>
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

function closeCountryModal() {
  modal.classList.add("hidden");
}

function openImageLightbox(image) {
  lightboxImage.src = image.src;
  lightboxImage.alt = image.alt || "תמונה מוגדלת";
  lightboxCaption.textContent = image.dataset.caption || image.alt || "תמונה מוגדלת";
  imageLightbox.classList.remove("hidden");
}

function closeImageLightbox() {
  imageLightbox.classList.add("hidden");
  lightboxImage.src = "";
  lightboxImage.alt = "";
  lightboxCaption.textContent = "";
}

closeModal.addEventListener("click", closeCountryModal);
closeLightbox.addEventListener("click", closeImageLightbox);

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeCountryModal();
  }
});

imageLightbox.addEventListener("click", (event) => {
  if (event.target === imageLightbox) {
    closeImageLightbox();
  }
});

document.addEventListener("click", (event) => {
  const image = event.target.closest(".zoomable-image");
  if (image) {
    openImageLightbox(image);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeImageLightbox();
    closeCountryModal();
  }
});

startButton.addEventListener("click", () => {
  document.getElementById("destinations").scrollIntoView({ behavior: "smooth" });
});

renderCountries();

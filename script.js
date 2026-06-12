const countryGrid = document.getElementById("countryGrid");
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalSubtitle = document.getElementById("modalSubtitle");
const modalBody = document.getElementById("modalBody");
const closeModal = document.getElementById("closeModal");
const startButton = document.getElementById("startButton");

function createCountryCard(country) {
  const card = document.createElement("article");
  card.className = "country-card";

  card.innerHTML = `
    <img class="country-flag" src="${country.flag.url}" alt="${country.flag.alt}" loading="lazy" />
    <h3>${country.name}</h3>
    <p><strong>Hebrew:</strong> ${country.hebrewName}</p>
    <p><strong>Explorer:</strong> ${country.explorer}</p>
    <p><strong>Discovery year:</strong> ${country.discoveryYear}</p>
    <p class="image-credit"><a href="${country.flag.source}" target="_blank" rel="noopener">${country.flag.credit}</a></p>
    <button type="button">Open Information Card</button>
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
  modalSubtitle.textContent = `${country.hebrewName} · ${country.region} · ${country.capital}`;

  modalBody.innerHTML = `
    <section class="quick-facts">
      <div><strong>Capital</strong><span>${country.capital}</span></div>
      <div><strong>Region</strong><span>${country.region}</span></div>
      <div><strong>Explorer</strong><span>${country.explorer}</span></div>
      <div><strong>Discovery</strong><span>${country.discoveryYear}</span></div>
      <div><strong>Life Years</strong><span>${country.explorerLifeYears}</span></div>
    </section>

    <section class="visual-panel">
      <figure>
        <img class="modal-flag" src="${country.flag.url}" alt="${country.flag.alt}" />
        <figcaption><a href="${country.flag.source}" target="_blank" rel="noopener">${country.flag.credit}</a></figcaption>
      </figure>
      <figure>
        <img class="emblem-image" src="${country.emblemImage.url}" alt="${country.emblemImage.alt}" />
        <figcaption><a href="${country.emblemImage.source}" target="_blank" rel="noopener">${country.emblemImage.credit}</a></figcaption>
      </figure>
      <figure>
        <img class="explorer-image" src="${country.explorerImage.url}" alt="${country.explorerImage.alt}" />
        <figcaption><a href="${country.explorerImage.source}" target="_blank" rel="noopener">${country.explorerImage.credit}</a></figcaption>
      </figure>
    </section>

    <div class="detail-grid">
      <div class="detail-box"><strong>Explorer</strong>${country.explorer}</div>
      <div class="detail-box"><strong>Life Years</strong>${country.explorerLifeYears}</div>
      <div class="detail-box"><strong>Discovery Year</strong>${country.discoveryYear}</div>
      <div class="detail-box"><strong>Indigenous Peoples</strong>${country.indigenousPeoples}</div>
      <div class="detail-box"><strong>Discovery Circumstances</strong>${country.discoveryCircumstances}</div>
      <div class="detail-box"><strong>Etymology</strong>${country.etymology}</div>
      <div class="detail-box"><strong>Vexillology</strong>${country.vexillology}</div>
      <div class="detail-box"><strong>National Emblem</strong>${country.emblem}</div>
      <div class="detail-box"><strong>Historical Note</strong>${country.historicalNote}</div>
    </div>
  `;

  modal.classList.remove("hidden");
}

function closeCountryModal() {
  modal.classList.add("hidden");
}

closeModal.addEventListener("click", closeCountryModal);

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeCountryModal();
  }
});

startButton.addEventListener("click", () => {
  document.getElementById("destinations").scrollIntoView({ behavior: "smooth" });
});

renderCountries();

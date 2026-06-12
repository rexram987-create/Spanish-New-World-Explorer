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
    <h3>${country.name}</h3>
    <p><strong>Hebrew:</strong> ${country.hebrewName}</p>
    <p><strong>Explorer:</strong> ${country.explorer}</p>
    <p><strong>Discovery year:</strong> ${country.discoveryYear}</p>
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

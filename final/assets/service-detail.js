const serviceVisuals = {
  "reparation-optimisation-pc-mac.html": "service-repair-hd.png",
  "montage-pc-mac.html": "service-pc-build-hd.png",
  "setup-bureau-teletravail-gaming.html": "service-setup-hd.png",
  "nas-sauvegarde.html": "service-nas-hd.png",
  "remplacement-ecran-telephone.html": "service-phone-hd.png",
  "site-web-personnalise-formulaire.html": "service-web-hd.png",
  "logiciels-sur-mesure.html": "service-software-hd.png",
  "domotique-legere.html": "service-smart-home-hd.png"
};

const pageName = window.location.pathname.split("/").pop();
const heroGrid = document.querySelector(".service-detail-grid");

if (heroGrid && serviceVisuals[pageName]) {
  const visual = document.createElement("figure");
  visual.className = "service-product-visual";
  visual.innerHTML = `<img src="../assets/${serviceVisuals[pageName]}" alt="" decoding="async"><span class="visual-sheen" aria-hidden="true"></span>`;
  heroGrid.appendChild(visual);
}

const firstContentGrid = document.querySelector(".service-detail-section .service-content-grid");

if (firstContentGrid) {
  firstContentGrid.classList.add("service-accordion");
  const cards = [...firstContentGrid.querySelectorAll(":scope > .service-content-card")];

  cards.forEach((card, index) => {
    const heading = card.querySelector("h2");
    if (!heading) return;

    const panel = document.createElement("div");
    panel.className = "service-accordion-panel";
    [...card.children].filter((child) => child !== heading).forEach((child) => panel.appendChild(child));

    const button = document.createElement("button");
    button.className = "service-accordion-trigger";
    button.type = "button";
    button.setAttribute("aria-expanded", "false");
    button.innerHTML = `<span class="accordion-icon" aria-hidden="true">+</span><span>${heading.textContent}</span>`;
    heading.remove();
    card.prepend(button);
    card.appendChild(panel);
    card.classList.remove("is-open");

    button.addEventListener("click", () => {
      if (card.classList.contains("is-open")) return;
      cards.forEach((item) => {
        item.classList.remove("is-open");
        item.querySelector(".service-accordion-trigger")?.setAttribute("aria-expanded", "false");
      });
      card.classList.add("is-open");
      button.setAttribute("aria-expanded", "true");
    });
  });
}

if (heroGrid && firstContentGrid) {
  const summary = heroGrid.querySelector(".service-summary-card");
  const visual = heroGrid.querySelector(".service-product-visual");
  const viewer = document.createElement("div");
  viewer.className = "service-viewer-shell";
  viewer.appendChild(firstContentGrid);
  if (summary) viewer.appendChild(summary);
  if (visual) viewer.appendChild(visual);
  heroGrid.appendChild(viewer);

  const oldSection = viewer.closest(".service-detail-grid")?.nextElementSibling;
  if (oldSection?.classList.contains("service-detail-section") && !oldSection.querySelector(".service-content-grid")) {
    oldSection.remove();
  }
}

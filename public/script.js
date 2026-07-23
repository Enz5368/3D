const prices = {
  diagnosticPc: 30,
  optimisationPc: 50,
  reinstallWindows: 80,
  ssdRam: 50,
  montagePc: 100,
  montageWindowsDrivers: 130,
  setupSimple: 80,
  nasSimple: 120,
  domotiqueLegere: 80,
  ecranTelephone: 40,
  applicationLocale: 300,
  siteWebFormulaire: 290,
  carteVisite: 25,
  portailPedagogique: 4.99
};

const businessCardPrices = {
  "Slim 85 x 40 mm - Aucun(e) - 100 cartes": 20,
  "Slim 85 x 40 mm - Aucun(e) - 250 cartes": 25,
  "Slim 85 x 40 mm - Aucun(e) - 500 cartes": 30,
  "Slim 85 x 40 mm - Aucun(e) - 1000 cartes": 50,
  "Slim 85 x 40 mm - Aucun(e) - 1500 cartes": 80,
  "Slim 85 x 40 mm - Aucun(e) - 2000 cartes": 100,
  "Standard 85 x 55 mm - Aucun(e) - 100 cartes": 20,
  "Standard 85 x 55 mm - Aucun(e) - 250 cartes": 25,
  "Standard 85 x 55 mm - Aucun(e) - 500 cartes": 30,
  "Standard 85 x 55 mm - Aucun(e) - 1000 cartes": 50,
  "Standard 85 x 55 mm - Aucun(e) - 1500 cartes": 80,
  "Standard 85 x 55 mm - Aucun(e) - 2000 cartes": 100,
  "Standard 85 x 55 mm - Effet metallise - 100 cartes": 30,
  "Standard 85 x 55 mm - Effet metallise - 250 cartes": 40,
  "Standard 85 x 55 mm - Effet metallise - 500 cartes": 60,
  "Standard 85 x 55 mm - Effet metallise - 1000 cartes": 70,
  "Standard 85 x 55 mm - Effet metallise - 1500 cartes": 110,
  "Standard 85 x 55 mm - Effet metallise - 2000 cartes": 140,
  "Standard 85 x 55 mm - Vernis selectif - 100 cartes": 30,
  "Standard 85 x 55 mm - Vernis selectif - 250 cartes": 40,
  "Standard 85 x 55 mm - Vernis selectif - 500 cartes": 60,
  "Standard 85 x 55 mm - Vernis selectif - 1000 cartes": 80,
  "Standard 85 x 55 mm - Vernis selectif - 1500 cartes": 120,
  "Standard 85 x 55 mm - Vernis selectif - 2000 cartes": 160,
  "Carre 65 x 65 mm - Aucun(e) - 100 cartes": 30,
  "Carre 65 x 65 mm - Aucun(e) - 250 cartes": 25,
  "Carre 65 x 65 mm - Aucun(e) - 500 cartes": 60,
  "Carre 65 x 65 mm - Aucun(e) - 1000 cartes": 80,
  "Carre 65 x 65 mm - Aucun(e) - 1500 cartes": 120,
  "Carre 65 x 65 mm - Aucun(e) - 2000 cartes": 160,
  "Carre 65 x 65 mm - Effet metallise - 100 cartes": 40,
  "Carre 65 x 65 mm - Effet metallise - 250 cartes": 60,
  "Carre 65 x 65 mm - Effet metallise - 500 cartes": 80,
  "Carre 65 x 65 mm - Effet metallise - 1000 cartes": 110,
  "Carre 65 x 65 mm - Effet metallise - 1500 cartes": 160,
  "Carre 65 x 65 mm - Effet metallise - 2000 cartes": 210,
  "Carre 65 x 65 mm - Vernis selectif - 100 cartes": 40,
  "Carre 65 x 65 mm - Vernis selectif - 250 cartes": 60,
  "Carre 65 x 65 mm - Vernis selectif - 500 cartes": 80,
  "Carre 65 x 65 mm - Vernis selectif - 1000 cartes": 110,
  "Carre 65 x 65 mm - Vernis selectif - 1500 cartes": 160,
  "Carre 65 x 65 mm - Vernis selectif - 2000 cartes": 210
};

const categories = {
  reparation: {
    label: "Réparation PC",
    basePrice: prices.diagnosticPc,
    questions: [
      {
        id: "probleme",
        title: "Problème",
        type: "radio",
        options: ["PC Lent", "Ne Démarre Pas", "Problème Windows", "Virus / Pubs", "Bruit / Chauffe", "Écran Bleu", "Autre"]
      },
      {
        id: "budget",
        title: "Budget Réparation",
        type: "radio",
        options: ["Moins De 30 \u20ac", "30 À 60 \u20ac", "60 À 100 \u20ac", "Plus De 100 \u20ac", "Je Veux D'Abord Un Diagnostic"]
      }
    ]
  },
  montage: {
    label: "Montage PC",
    basePrice: prices.montagePc,
    questions: [
      {
        id: "utilisation",
        title: "Utilisation Principale",
        type: "radio",
        options: ["Bureautique", "Études", "Gaming", "Streaming", "Montage Vidéo", "Programmation", "Dessin / 3D", "Musique", "Usage Familial"]
      },
      {
        id: "budget",
        title: "Budget Matériel",
        type: "radio",
        options: ["Moins De 400 \u20ac", "400 À 600 \u20ac", "600 À 800 \u20ac", "800 À 1000 \u20ac", "1000 À 1500 \u20ac", "Plus De 1500 \u20ac", "Je Ne Sais Pas"]
      },
      {
        id: "materiel",
        title: "Matériel Déjà Possédé",
        type: "checkbox",
        options: ["Écran", "Clavier/Souris", "Boîtier", "Alimentation", "Carte Graphique", "Stockage", "Rien"]
      },
      {
        id: "besoin",
        title: "Besoin",
        type: "radio",
        options: ["Conseil Composants", "Montage Uniquement", "Montage + Windows + Drivers", "Montage + Installation Complète"]
      }
    ]
  },
  ssdRam: {
    label: "SSD / RAM",
    basePrice: prices.ssdRam,
    questions: [
      {
        id: "objectif",
        title: "Objectif",
        type: "radio",
        options: ["Accélérer Le PC", "Ajouter Du Stockage", "Améliorer Les Performances", "Remplacer Un Ancien Disque"]
      },
      {
        id: "piece",
        title: "Le Client A Déjà La Pièce",
        type: "radio",
        options: ["Oui", "Non", "Je Veux Un Conseil"]
      },
      {
        id: "budget",
        title: "Budget",
        type: "radio",
        options: ["Moins De 50 \u20ac", "50 À 100 \u20ac", "Plus De 100 \u20ac", "Je Ne Sais Pas"]
      }
    ]
  },
  setup: {
    label: "Setup Bureau / Télétravail / Gaming",
    basePrice: prices.setupSimple,
    questions: [
      {
        id: "type",
        title: "Type De Setup",
        type: "radio",
        options: ["Bureau", "Télétravail", "Étudiant", "Gaming", "Mixte"]
      },
      {
        id: "besoins",
        title: "Besoins",
        type: "checkbox",
        options: ["Double Écran", "Webcam", "Clavier/Souris", "Rangement Câbles", "Installation Logiciels", "Optimisation Windows", "Imprimante/Périphériques"]
      },
      {
        id: "budget",
        title: "Budget",
        type: "radio",
        options: ["Moins De 50 \u20ac", "50 À 100 \u20ac", "100 À 250 \u20ac", "Plus De 250 \u20ac"]
      }
    ]
  },
  nas: {
    label: "NAS / Sauvegarde",
    basePrice: prices.nasSimple,
    questions: [
      {
        id: "objectif",
        title: "Objectif",
        type: "checkbox",
        options: ["Sauvegarde Photos", "Sauvegarde Documents", "Stockage Familial", "Partage De Fichiers", "Sauvegarde PC", "Conseil Achat NAS"]
      },
      {
        id: "materiel",
        title: "Matériel Déjà Possédé",
        type: "radio",
        options: ["Oui", "Non", "Je Veux Un Conseil"]
      },
      {
        id: "budget",
        title: "Budget",
        type: "radio",
        options: ["Moins De 100 \u20ac", "100 À 250 \u20ac", "250 À 500 \u20ac", "Plus De 500 \u20ac"]
      }
    ]
  },
  domotique: {
    label: "Domotique Légère",
    basePrice: prices.domotiqueLegere,
    note: "Prestation Limitée À La Configuration D'Objets Connectés Compatibles, Sans Modification De L'Installation Électrique Fixe.",
    questions: [
      {
        id: "equipement",
        title: "Équipement À Configurer",
        type: "checkbox",
        options: ["Lampe Connectée", "Prise Connectée", "Volet Compatible Application", "Assistant Vocal", "Home Assistant", "Plusieurs Appareils", "Je Veux Un Conseil"]
      },
      {
        id: "objectif",
        title: "Objectif",
        type: "checkbox",
        options: ["Contrôler Depuis Le Téléphone", "Programmer Des Horaires", "Scénario Matin/Soir", "Regrouper Dans Une Seule Application", "Ajouter Google Home / Alexa"]
      },
      {
        id: "budget",
        title: "Budget",
        type: "radio",
        options: ["Moins De 50 \u20ac", "50 À 150 \u20ac", "150 À 300 \u20ac", "Plus De 300 \u20ac"]
      }
    ]
  },
  telephone: {
    label: "Remplacement Écran Téléphone",
    basePrice: prices.ecranTelephone,
    questions: [
      {
        id: "marque",
        title: "Marque",
        type: "radio",
        options: ["iPhone", "Samsung", "Xiaomi / Redmi", "Oppo", "Autre"]
      },
      {
        id: "ecran",
        title: "Le Client A Déjà L'Écran",
        type: "radio",
        options: ["Oui", "Non", "Je Veux Un Conseil"]
      },
      {
        id: "budget",
        title: "Budget",
        type: "radio",
        options: ["Moins De 50 \u20ac", "50 À 100 \u20ac", "Plus De 100 \u20ac", "Je Veux Savoir Si Ça Vaut Le Coup"]
      }
    ]
  },
  applicationLocale: {
    label: "Logiciel Sur Mesure",
    basePrice: prices.applicationLocale,
    questions: [
      {
        id: "besoinPrincipal",
        title: "Besoin Principal",
        type: "radio",
        options: ["Gestion De Stock", "Suivi Client", "Automatisation Excel", "Formulaire Avec Export", "Logiciel De Devis/Facture Simple", "Tableau De Bord", "Calcul Automatique", "Organisation De Fichiers", "Autre"]
      },
      {
        id: "utilisateur",
        title: "Utilisateur",
        type: "radio",
        options: ["Particulier", "Étudiant", "Association", "Artisan", "Petit Commerce", "Entreprise"]
      },
      {
        id: "format",
        title: "Format Souhaité",
        type: "radio",
        options: ["Logiciel Windows Local", "Fichier Excel Automatisé", "Script Simple", "Tableau De Bord", "Je Veux Un Conseil"]
      },
      {
        id: "budget",
        title: "Budget",
        type: "radio",
        options: ["300 À 500 \u20ac", "500 À 1000 \u20ac", "1000 À 2000 \u20ac", "Plus De 2000 \u20ac", "Je Veux D'Abord Estimer"]
      }
    ]
  },
  siteWebFormulaire: {
    label: "Site Web Personnalisé Avec Formulaire",
    basePrice: prices.siteWebFormulaire,
    questions: [
      {
        id: "besoinPrincipal",
        title: "Besoin Principal",
        type: "radio",
        options: ["Site Vitrine", "Page De Présentation", "Formulaire De Contact", "Formulaire De Devis", "Refonte D'Un Site Existant", "Je Veux Un Conseil"]
      },
      {
        id: "pages",
        title: "Nombre De Pages",
        type: "radio",
        options: ["1 Page", "2 À 3 Pages", "4 À 6 Pages", "Plus De 6 Pages", "Je Ne Sais Pas"]
      },
      {
        id: "formulaire",
        title: "Type De Formulaire",
        type: "checkbox",
        options: ["Contact", "Demande De Devis", "Réservation / Rendez-Vous", "Inscription", "Envoi Vers Email", "Je Veux Un Conseil"]
      },
      {
        id: "utilisateur",
        title: "Utilisateur",
        type: "radio",
        options: ["Particulier", "Association", "Artisan", "Petit Commerce", "Entreprise"]
      },
      {
        id: "budget",
        title: "Budget",
        type: "radio",
        options: ["290 À 500 \u20ac", "500 À 1000 \u20ac", "1000 À 2000 \u20ac", "Plus De 2000 \u20ac", "Je Veux D'Abord Estimer"]
      }
    ]
  },
  portailPedagogique: {
    label: "Portail Pédagogique Privé",
    basePrice: prices.portailPedagogique,
    billing: "monthly",
    note: "Abonnement à 4,99 € par mois. Accès au portail : https://mes-cours.netlify.app/",
    questions: [
      {
        id: "utilisationPortail",
        title: "Utilisation Souhaitée",
        type: "checkbox",
        options: ["Classes", "Séquences", "Séances", "Activités", "Ressources"]
      },
      {
        id: "demarrage",
        title: "Démarrage Souhaité",
        type: "radio",
        options: ["Dès Que Possible", "À Une Date Précise", "Je Souhaite D’Abord Des Informations"]
      }
    ]
  },
  cartesVisite: {
    label: "Cartes De Visite + Design",
    basePrice: prices.carteVisite,
    questions: [
      {
        id: "formatQuantite",
        title: "Format / Finition Et Quantité",
        type: "radio",
        options: Object.keys(businessCardPrices)
      },
      {
        id: "orientation",
        title: "Orientation",
        type: "radio",
        options: ["Horizontale", "Verticale"]
      },
      {
        id: "design",
        title: "Design De La Carte",
        type: "radio",
        options: ["Création Complète", "J'Ai Déjà Une Idée", "J'Ai Déjà Un Logo", "Adapter Un Design Existant"]
      },
      {
        id: "budget",
        title: "Budget",
        type: "radio",
        options: ["Prix Affiché OK", "Je Veux D'Abord Valider Le Design", "Je Veux Comparer Plusieurs Quantités"]
      }
    ]
  }
};

let cart = [];
const cartStorageKey = "orellanatech-cart";
const pendingCartStorageKey = "orellanatech-pending-cart-item";

const categorySelect = document.querySelector("#category-select");
const questionsContainer = document.querySelector("#dynamic-questions");
const addToCartButton = document.querySelector("#add-to-cart");
const cartItems = document.querySelector("#cart-items");
const cartTotal = document.querySelector("#cart-total");
const clearCartButton = document.querySelector("#clear-cart");
const quoteForm = document.querySelector("#quote-form");
const cartSummaryInput = document.querySelector("#cart-summary");
const formMessage = document.querySelector("#form-message");
const configMessage = document.querySelector("#config-message");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector("#main-menu");
const serviceTabs = document.querySelectorAll(".service-tab");
const servicesGrid = document.querySelector(".services-grid");
const serviceCards = document.querySelectorAll(".service-card[data-sector]");
const copyButtons = document.querySelectorAll(".copy-contact");

function formatPrice(value) {
  return `${value.toLocaleString("fr-FR", { maximumFractionDigits: 2 })} \u20ac`;
}

function getCartTotals() {
  return cart.reduce((totals, item) => {
    if (item.billing === "monthly") {
      totals.monthly += item.price;
    } else {
      totals.oneTime += item.price;
    }
    return totals;
  }, { oneTime: 0, monthly: 0 });
}

function formatCartTotals(totals) {
  if (totals.monthly > 0 && totals.oneTime > 0) {
    return `${formatPrice(totals.oneTime)} + ${formatPrice(totals.monthly)} / mois`;
  }
  if (totals.monthly > 0) {
    return `${formatPrice(totals.monthly)} / mois`;
  }
  return formatPrice(totals.oneTime);
}

function loadCart() {
  try {
    const savedCart = JSON.parse(localStorage.getItem(cartStorageKey) || "[]");
    cart = Array.isArray(savedCart) ? savedCart : [];

    const pendingItem = JSON.parse(localStorage.getItem(pendingCartStorageKey) || "null");
    if (pendingItem) {
      cart.push({ ...pendingItem, id: Date.now() });
      localStorage.removeItem(pendingCartStorageKey);
    }
  } catch (error) {
    cart = [];
  }
}

function saveCart() {
  localStorage.setItem(cartStorageKey, JSON.stringify(cart));
}

function initCategories() {
  Object.entries(categories).forEach(([key, category]) => {
    const option = document.createElement("option");
    option.value = key;
    option.textContent = category.label;
    categorySelect.appendChild(option);
  });
}

function renderQuestions() {
  const selectedKey = categorySelect.value;
  const category = categories[selectedKey];
  questionsContainer.innerHTML = "";
  configMessage.textContent = "";
  configMessage.className = "form-message";

  if (!category) {
    return;
  }

  if (selectedKey === "cartesVisite") {
    renderBusinessCardConfigurator();
    return;
  }

  if (category.note) {
    const note = document.createElement("p");
    note.className = "info-note";
    note.textContent = category.note;
    questionsContainer.appendChild(note);
  }

  category.questions.forEach((question) => {
    const group = document.createElement("fieldset");
    group.className = "question-group";

    const legend = document.createElement("legend");
    legend.className = "question-title";
    legend.textContent = question.title;
    group.appendChild(legend);

    const optionsGrid = document.createElement("div");
    optionsGrid.className = "option-grid";

    question.options.forEach((optionText) => {
      const label = document.createElement("label");
      label.className = "choice";

      const input = document.createElement("input");
      input.type = question.type;
      input.name = question.id;
      input.value = optionText;

      label.appendChild(input);
      label.append(optionText);
      optionsGrid.appendChild(label);
    });

    group.appendChild(optionsGrid);
    questionsContainer.appendChild(group);
  });
}

function createHiddenChoice(name, value) {
  const input = document.createElement("input");
  input.type = "radio";
  input.name = name;
  input.value = value;
  input.checked = true;
  input.hidden = true;
  questionsContainer.appendChild(input);
  return input;
}

function renderBusinessCardConfigurator() {
  const state = {
    format: "Standard 85 x 55 mm",
    finish: "Aucun(e)",
    orientation: "Horizontale",
    quantity: "250",
    design: "Création Complète",
    budget: "Prix Affiché OK"
  };

  const inputs = {
    formatQuantite: createHiddenChoice("formatQuantite", ""),
    orientation: createHiddenChoice("orientation", state.orientation),
    design: createHiddenChoice("design", state.design),
    budget: createHiddenChoice("budget", state.budget)
  };

  const picker = document.createElement("div");
  picker.className = "business-card-picker compact-picker";
  picker.innerHTML = `
    <div class="picker-panel">
      <div class="picker-group">
        <h3>Format</h3>
        <div class="picker-options picker-options-three">
          <button class="picker-option is-selected" type="button" data-format="Standard 85 x 55 mm"><span class="mini-card standard-card"></span><strong>Standard</strong><span>85 x 55 mm</span></button>
          <button class="picker-option" type="button" data-format="Carre 65 x 65 mm"><span class="mini-card square-card"></span><strong>Carré</strong><span>65 x 65 mm</span></button>
          <button class="picker-option" type="button" data-format="Slim 85 x 40 mm"><span class="mini-card slim-card"></span><strong>Slim</strong><span>85 x 40 mm</span></button>
        </div>
      </div>
      <div class="picker-group">
        <h3>Finition</h3>
        <div class="picker-options picker-options-three">
          <button class="picker-option finish-option is-selected" type="button" data-finish="Aucun(e)"><span class="finish-preview finish-none"></span><strong>Aucun(e)</strong><span>Prix Slim</span></button>
          <button class="picker-option finish-option" type="button" data-finish="Effet metallise"><span class="finish-preview finish-metal"></span><strong>Effet Métallisé</strong><span>Rendu Premium</span></button>
          <button class="picker-option finish-option" type="button" data-finish="Vernis selectif"><span class="finish-preview finish-varnish"></span><strong>Vernis Sélectif</strong><span>Prix Affiché</span></button>
        </div>
      </div>
      <div class="picker-group">
        <h3>Orientation</h3>
        <div class="segmented-options">
          <button class="segment-option" type="button" data-orientation="Verticale">Verticale</button>
          <button class="segment-option is-selected" type="button" data-orientation="Horizontale">Horizontale</button>
        </div>
      </div>
      <div class="picker-group">
        <label class="field-label" for="home-card-quantity">Quantité</label>
        <select id="home-card-quantity">
          <option value="100">100 Cartes</option>
          <option value="250" selected>250 Cartes</option>
          <option value="500">500 Cartes</option>
          <option value="1000">1000 Cartes</option>
          <option value="1500">1500 Cartes</option>
          <option value="2000">2000 Cartes</option>
        </select>
      </div>
      <div class="picker-group">
        <h3>Design De La Carte</h3>
        <div class="segmented-options">
          <button class="segment-option is-selected" type="button" data-design="Création Complète">Création Complète</button>
          <button class="segment-option" type="button" data-design="J'ai Déjà Un Logo">J'Ai Déjà Un Logo</button>
        </div>
      </div>
    </div>
    <aside class="picker-summary">
      <div class="business-card-preview" aria-hidden="true">
        <img class="preview-logo" src="assets/icon-business-card.svg" alt="">
        <div><strong>Votre Nom</strong><span>Carte De Visite</span></div>
      </div>
      <p class="eyebrow">Sélection</p>
      <h3 id="home-card-choice"></h3>
      <p id="home-card-details"></p>
      <p class="price" id="home-card-total"></p>
    </aside>
  `;
  questionsContainer.appendChild(picker);

  const choice = picker.querySelector("#home-card-choice");
  const details = picker.querySelector("#home-card-details");
  const total = picker.querySelector("#home-card-total");
  const quantity = picker.querySelector("#home-card-quantity");

  function selectButton(button, selector) {
    button.closest(selector).querySelectorAll("button").forEach((item) => item.classList.remove("is-selected"));
    button.classList.add("is-selected");
  }

  function updateCardInputs() {
    const isSlim = state.format === "Slim 85 x 40 mm";

    picker.querySelectorAll("[data-finish]").forEach((button) => {
      const disabled = isSlim && button.dataset.finish !== "Aucun(e)";
      button.disabled = disabled;
      button.classList.toggle("is-disabled", disabled);
    });

    if (isSlim && state.finish !== "Aucun(e)") {
      state.finish = "Aucun(e)";
      picker.querySelectorAll("[data-finish]").forEach((button) => {
        button.classList.toggle("is-selected", button.dataset.finish === "Aucun(e)");
      });
    }

    const option = `${state.format} - ${state.finish} - ${state.quantity} cartes`;
    const price = businessCardPrices[option];
    const isQuote = price === undefined;

    inputs.formatQuantite.value = isQuote ? option : option;
    inputs.orientation.value = state.orientation;
    inputs.design.value = state.design;
    inputs.budget.value = state.budget;

    choice.textContent = `${state.format} - ${state.finish}`;
    details.textContent = `${state.quantity} Cartes - ${state.orientation}`;
    total.textContent = formatPrice(price || 0);
  }

  picker.querySelectorAll("[data-format]").forEach((button) => {
    button.addEventListener("click", () => {
      state.format = button.dataset.format;
      selectButton(button, ".picker-options");
      updateCardInputs();
    });
  });

  picker.querySelectorAll("[data-finish]").forEach((button) => {
    button.addEventListener("click", () => {
      state.finish = button.dataset.finish;
      selectButton(button, ".picker-options");
      updateCardInputs();
    });
  });

  picker.querySelectorAll("[data-orientation]").forEach((button) => {
    button.addEventListener("click", () => {
      state.orientation = button.dataset.orientation;
      selectButton(button, ".segmented-options");
      updateCardInputs();
    });
  });

  picker.querySelectorAll("[data-design]").forEach((button) => {
    button.addEventListener("click", () => {
      state.design = button.dataset.design;
      selectButton(button, ".segmented-options");
      updateCardInputs();
    });
  });

  quantity.addEventListener("change", () => {
    state.quantity = quantity.value;
    updateCardInputs();
  });

  updateCardInputs();
}

function getSelectedValues(question) {
  const checkedInputs = questionsContainer.querySelectorAll(`input[name="${question.id}"]:checked`);
  return Array.from(checkedInputs).map((input) => input.value);
}

function estimateCategoryPrice(categoryKey, selections) {
  if (categoryKey === "montage") {
    const need = selections.besoin?.[0] || "";
    if (need.includes("Windows") || need.includes("Installation Complète")) {
      return prices.montageWindowsDrivers;
    }
    return prices.montagePc;
  }

  if (categoryKey === "reparation") {
    const problem = selections.probleme?.[0] || "";
    if (problem === "PC Lent") {
      return prices.optimisationPc;
    }
    if (problem === "Problème Windows" || problem === "Virus / Pubs" || problem === "Écran Bleu") {
      return prices.reinstallWindows;
    }
    return prices.diagnosticPc;
  }

  if (categoryKey === "cartesVisite") {
    const selectedOption = selections.formatQuantite?.[0] || "";
    return businessCardPrices[selectedOption] || categories[categoryKey].basePrice;
  }

  return categories[categoryKey].basePrice;
}

function getBudgetFromSelections(selections) {
  return selections.budget?.[0] || "Non Précisé";
}

function addToCart() {
  const selectedKey = categorySelect.value;
  const category = categories[selectedKey];

  if (!category) {
    showConfigMessage("Choisis Une Catégorie Avant D'Ajouter Une Prestation.", "error");
    return;
  }

  const selections = {};
  const missingQuestions = [];

  category.questions.forEach((question) => {
    const values = getSelectedValues(question);
    selections[question.id] = values;
    if (values.length === 0) {
      missingQuestions.push(question.title);
    }
  });

  if (missingQuestions.length > 0) {
    showConfigMessage(`Complète Les Champs Suivants : ${missingQuestions.join(", ")}.`, "error");
    return;
  }

  const price = estimateCategoryPrice(selectedKey, selections);
  const selectedBusinessCard = selections.formatQuantite?.[0] || "";
  const isBusinessCardQuote = false;

  cart.push({
    id: Date.now(),
    categoryKey: selectedKey,
    category: category.label,
    selections,
    budget: getBudgetFromSelections(selections),
    price: isBusinessCardQuote ? 0 : price,
    priceLabel: category.billing === "monthly" ? `${formatPrice(price)} / mois` : "",
    billing: category.billing || "one-time"
  });

  renderCart();
  showConfigMessage("Prestation Ajoutée À La Demande.", "success");
}

function showConfigMessage(message, type) {
  configMessage.textContent = message;
  configMessage.className = `form-message ${type}`;
}

function renderCart() {
  cartItems.innerHTML = "";

  if (cart.length === 0) {
    const empty = document.createElement("p");
    empty.className = "empty-cart";
    empty.textContent = "Aucun Service Ajouté Pour Le Moment.";
    cartItems.appendChild(empty);
  }

  cart.forEach((item) => {
    const article = document.createElement("article");
    article.className = "cart-item";

    const header = document.createElement("div");
    header.className = "cart-item-header";

    const title = document.createElement("h4");
    title.textContent = item.category;

    const removeButton = document.createElement("button");
    removeButton.className = "remove-item";
    removeButton.type = "button";
    removeButton.textContent = "X";
    removeButton.setAttribute("aria-label", `Supprimer ${item.category}`);
    removeButton.addEventListener("click", () => removeCartItem(item.id));

    header.append(title, removeButton);
    article.appendChild(header);

    const details = document.createElement("p");
    details.textContent = selectionsToText(item.selections);
    article.appendChild(details);

    const budget = document.createElement("p");
    budget.textContent = `Budget Indiqué : ${item.budget}`;
    article.appendChild(budget);

    const price = document.createElement("span");
    price.className = "cart-price";
    price.textContent = `Prestation Estimée : ${item.priceLabel || formatPrice(item.price)}`;
    article.appendChild(price);

    cartItems.appendChild(article);
  });

  const totals = getCartTotals();
  cartTotal.textContent = formatCartTotals(totals);
  cartSummaryInput.value = buildCartSummary();
  saveCart();
}

function selectionsToText(selections) {
  return Object.entries(selections)
    .map(([key, values]) => `${labelFromKey(key)} : ${values.join(", ")}`)
    .join(" | ");
}

function labelFromKey(key) {
  const labels = {
    probleme: "Problème",
    budget: "Budget",
    utilisation: "Utilisation",
    materiel: "Matériel",
    besoin: "Besoin",
    objectif: "Objectif",
    piece: "Pièce",
    type: "Type",
    besoins: "Besoins",
    equipement: "Équipement",
    marque: "Marque",
    ecran: "Écran",
    besoinPrincipal: "Besoin Principal",
    utilisateur: "Utilisateur",
    format: "Format Souhaité",
    formatQuantite: "Format / Quantité",
    orientation: "Orientation",
    design: "Design",
    pages: "Pages",
    formulaire: "Formulaire",
    utilisationPortail: "Utilisation Du Portail",
    demarrage: "Démarrage"
  };

  return labels[key] || key;
}

function removeCartItem(id) {
  cart = cart.filter((item) => item.id !== id);
  renderCart();
}

function clearCart() {
  cart = [];
  renderCart();
}

function buildCartSummary() {
  if (cart.length === 0) {
    return "";
  }

  const lines = cart.map((item, index) => {
    return [
      `Prestation ${index + 1}: ${item.category}`,
      `Options: ${selectionsToText(item.selections)}`,
      `Budget Indiqué: ${item.budget}`,
      `Prix Estimé: ${item.priceLabel || formatPrice(item.price)}`
    ].join("\n");
  });

  const totals = getCartTotals();
  return `${lines.join("\n\n")}\n\nTotal Estimé: ${formatCartTotals(totals)}`;
}

function validateForm(event) {
  formMessage.textContent = "";
  formMessage.className = "form-message";
  cartSummaryInput.value = buildCartSummary();

  const requiredFields = [
    { selector: "#first-name", label: "Prénom" },
    { selector: "#email", label: "Email" }
  ];

  const missing = requiredFields
    .filter((field) => !document.querySelector(field.selector).value.trim())
    .map((field) => field.label);

  if (cart.length === 0) {
    event.preventDefault();
    showFormError("Ajoute Au Moins Une Prestation Dans Ta Demande Avant L'Envoi.");
    return;
  }

  if (missing.length > 0) {
    event.preventDefault();
    showFormError(`Renseigne Les Champs Obligatoires : ${missing.join(", ")}.`);
  }
}

function showFormError(message) {
  formMessage.textContent = message;
  formMessage.className = "form-message error";
}

function toggleMenu() {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
}

function closeMenu() {
  navLinks.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}

function filterServices(sector) {
  servicesGrid.classList.toggle("show-web-examples", sector === "web");

  serviceCards.forEach((card) => {
    const isExample = card.classList.contains("example-service-card");
    const shouldShow = isExample ? sector === "web" : sector === "all" || card.dataset.sector === sector;
    card.classList.toggle("hidden", !shouldShow);
  });
}

function setActiveServiceTab(selectedTab) {
  serviceTabs.forEach((tab) => {
    const isActive = tab === selectedTab;
    tab.classList.toggle("active", isActive);
    tab.setAttribute("aria-selected", String(isActive));
  });

  filterServices(selectedTab.dataset.sector);
}

async function copyToClipboard(value) {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(value);
    return;
  }

  const textarea = document.createElement("textarea");
  textarea.value = value;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.left = "-9999px";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
}

async function handleCopyContact(button) {
  const value = button.dataset.copy;
  const label = button.dataset.label || "Contact";
  const originalText = button.textContent;

  try {
    await copyToClipboard(value);
    button.classList.add("copied");
    button.setAttribute("aria-label", `${label} copi\u00e9`);

    if (button.classList.contains("copy-link")) {
      button.textContent = "Copi\u00e9";
    }

    setTimeout(() => {
      button.classList.remove("copied");
      button.setAttribute("aria-label", `Copier ${label}`);
      if (button.classList.contains("copy-link")) {
        button.textContent = originalText;
      }
    }, 1400);
  } catch (error) {
    showFormError("Impossible De Copier Automatiquement. Sélectionne Le Contact Manuellement.");
  }
}

loadCart();
initCategories();
renderCart();
filterServices("informatique");

categorySelect.addEventListener("change", renderQuestions);
addToCartButton.addEventListener("click", addToCart);
clearCartButton.addEventListener("click", clearCart);
quoteForm.addEventListener("submit", validateForm);
menuToggle.addEventListener("click", toggleMenu);
navLinks.addEventListener("click", (event) => {
  if (event.target.tagName === "A") {
    closeMenu();
  }
});
serviceTabs.forEach((tab) => {
  tab.addEventListener("click", () => setActiveServiceTab(tab));
});
copyButtons.forEach((button) => {
  button.setAttribute("aria-label", `Copier ${button.dataset.label || "contact"}`);
  button.addEventListener("click", () => handleCopyContact(button));
});

// Spatial service cards: pointer parallax, light tracking and scroll reveal.
const supportsFinePointer = window.matchMedia("(pointer: fine)").matches;
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (supportsFinePointer && !prefersReducedMotion) {
  serviceCards.forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      const bounds = card.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width;
      const y = (event.clientY - bounds.top) / bounds.height;
      card.style.setProperty("--rx", `${(0.5 - y) * 10}deg`);
      card.style.setProperty("--ry", `${(x - 0.5) * 12}deg`);
      card.style.setProperty("--mx", `${x * 100}%`);
      card.style.setProperty("--my", `${y * 100}%`);
    });
    card.addEventListener("pointerleave", () => {
      card.style.setProperty("--rx", "0deg");
      card.style.setProperty("--ry", "0deg");
    });
  });
}

const revealItems = document.querySelectorAll(".section-heading, .service-card, .feature-card, .config-panel, .cart-panel, .about-card, .faq-list details, .contact-form");
revealItems.forEach((item) => item.classList.add("reveal-item"));

if (prefersReducedMotion || !("IntersectionObserver" in window)) {
  revealItems.forEach((item) => item.classList.add("is-visible"));
} else {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px" });
  revealItems.forEach((item) => revealObserver.observe(item));
}

// One distinct CSS-3D product sculpture for every service card.
const serviceObjectTypes = [
  "laptop", "tower", "desk", "nas", "phone", "browser",
  "card", "portal", "dj", "legal", "software", "home"
];

serviceCards.forEach((card, index) => {
  if (card.querySelector(".service-product-stage")) return;
  const type = serviceObjectTypes[index] || "software";
  const stage = document.createElement("div");
  stage.className = `service-product-stage product-${type}`;
  stage.setAttribute("aria-hidden", "true");
  stage.innerHTML = `
    <div class="product-glow"></div>
    <div class="product-shadow"></div>
    <div class="product-object">
      <span class="product-face product-front"></span>
      <span class="product-face product-side"></span>
      <span class="product-face product-top"></span>
      <span class="product-detail detail-a"></span>
      <span class="product-detail detail-b"></span>
      <span class="product-detail detail-c"></span>
      <span class="product-detail detail-d"></span>
    </div>`;
  card.prepend(stage);
});
const cinematicIntro = document.getElementById("cinematic-intro");
const cinematicEnter = document.getElementById("intro-enter");

if (cinematicIntro && cinematicEnter) {
  document.body.classList.add("intro-locked");

  const closeCinematicIntro = () => {
    cinematicIntro.classList.add("is-leaving");
    document.body.classList.remove("intro-locked");
    window.setTimeout(() => cinematicIntro.remove(), 1200);
  };

  cinematicEnter.addEventListener("click", closeCinematicIntro, { once: true });
  cinematicEnter.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") closeCinematicIntro();
  }, { once: true });
}

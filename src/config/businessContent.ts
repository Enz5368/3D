export type ServiceSector = 'informatique' | 'web' | 'outils' | 'connecte';

export type ServiceDetail = {
  title: string;
  items?: string[];
  text?: string;
  ordered?: boolean;
};

export type BusinessService = {
  id: string;
  sector: ServiceSector;
  categoryKey: string;
  title: string;
  price: string;
  description: string;
  icon: string;
  details: ServiceDetail[];
};

export type QuoteQuestion = {
  id: string;
  title: string;
  type: 'radio' | 'checkbox';
  options: string[];
};

export type QuoteCategory = {
  label: string;
  basePrice: number;
  billing?: 'monthly';
  note?: string;
  questions: QuoteQuestion[];
};

export const contactDetails = {
  name: 'Enzo Orellana',
  phone: '07 59 72 78 56',
  email: 'orellanatech37@gmail.com',
  area: 'Grenoble et alentours',
  siren: '105848204',
  formEndpoint: 'https://formspree.io/f/mjgdjjyv',
};

export const serviceSectors = [
  { id: 'informatique', label: 'Informatique' },
  { id: 'web', label: 'Sites web' },
  { id: 'outils', label: 'Logiciels sur mesure' },
  { id: 'connecte', label: 'Maison connectée' },
  { id: 'all', label: 'Tout voir' },
] as const;

export const services: BusinessService[] = [
  {
    id: 'reparation-pc-mac',
    sector: 'informatique',
    categoryKey: 'reparation',
    title: 'Réparation / Optimisation PC & Mac',
    price: 'À partir de 30 €',
    description: 'Diagnostic, système lent, Windows, macOS, pilotes, SSD et RAM.',
    icon: '/otech-assets/icon-pc-repair.svg',
    details: [
      {
        title: 'Pour quels besoins ?',
        items: [
          'PC ou Mac lent au démarrage ou en utilisation.',
          'Problème Windows, macOS, pilotes, mises à jour ou erreurs.',
          'Virus, publicités, logiciels indésirables ou comportement anormal.',
          'Conseil SSD, RAM ou nettoyage logiciel avant achat de pièces.',
        ],
      },
      {
        title: 'Ce qui est inclus',
        items: [
          'Diagnostic initial et explication simple du problème.',
          'Optimisation des programmes au démarrage et de l’espace disque.',
          'Vérification des mises à jour, pilotes et sécurité de base.',
          'Recommandation claire si une pièce est nécessaire.',
        ],
      },
      {
        title: 'Déroulement',
        ordered: true,
        items: [
          'Vous décrivez les symptômes et le modèle de l’ordinateur.',
          'Je confirme si l’intervention peut se faire à distance ou sur place.',
          'Le devis est validé avant toute action payante.',
          'Vous repartez avec une machine testée et des conseils d’entretien.',
        ],
      },
      {
        title: 'À prévoir',
        text: 'Gardez votre chargeur, vos identifiants utiles et, si possible, une sauvegarde de vos documents importants. Les pièces éventuelles restent à votre charge.',
      },
    ],
  },
  {
    id: 'montage-pc-mac',
    sector: 'informatique',
    categoryKey: 'montage',
    title: 'Montage PC & Mac',
    price: 'À partir de 100 €',
    description: 'Choix des composants, assemblage, Windows, pilotes et tests.',
    icon: '/otech-assets/icon-pc-build.svg',
    details: [
      {
        title: 'Pour quels besoins ?',
        items: [
          'PC gaming, bureautique, études, création ou usage familial.',
          'Aide au choix des composants selon votre budget.',
          'Remplacement ou ajout de pièces dans une machine existante.',
          'Installation Windows, pilotes et logiciels essentiels.',
        ],
      },
      {
        title: 'Ce qui est inclus',
        items: [
          'Vérification de la compatibilité des composants.',
          'Assemblage soigné, cable management et contrôle visuel.',
          'Tests de démarrage, températures et stabilité de base.',
          'Conseils d’utilisation et de maintenance.',
        ],
      },
      {
        title: 'Déroulement',
        ordered: true,
        items: [
          'Vous indiquez l’usage, le budget et les pièces déjà possédées.',
          'Je confirme la configuration ou les achats à prévoir.',
          'Le montage est réalisé puis testé.',
          'Vous recevez une machine prête à utiliser selon l’option choisie.',
        ],
      },
      {
        title: 'À prévoir',
        text: 'Les composants et licences logicielles ne sont pas inclus dans le prix du service. Le devis dépend du nombre de pièces et de l’installation souhaitée.',
      },
    ],
  },
  {
    id: 'setup-bureau',
    sector: 'informatique',
    categoryKey: 'setup',
    title: 'Setup Bureau / Télétravail / Gaming',
    price: 'À partir de 80 €',
    description: 'Écrans, webcam, périphériques, rangement des câbles et confort.',
    icon: '/otech-assets/icon-setup.svg',
    details: [
      {
        title: 'Pour quels besoins ?',
        items: [
          'Installation double écran ou station de travail.',
          'Configuration webcam, micro, imprimante ou accessoires.',
          'Optimisation d’un setup gaming ou étudiant.',
          'Rangement des câbles et organisation du bureau.',
        ],
      },
      {
        title: 'Ce qui est inclus',
        items: [
          'Branchement et vérification des périphériques.',
          'Réglages d’affichage, son, webcam et confort.',
          'Installation de logiciels courants si nécessaire.',
          'Conseils sur les accessoires ou améliorations utiles.',
        ],
      },
      {
        title: 'Déroulement',
        ordered: true,
        items: [
          'Vous listez votre matériel et votre objectif.',
          'Je valide ce qui est possible avec l’espace disponible.',
          'Le setup est installé, testé et ajusté avec vous.',
          'Vous gardez une organisation simple à maintenir.',
        ],
      },
      {
        title: 'À prévoir',
        text: 'Préparez les câbles, alimentations, supports et mots de passe utiles. Les accessoires ou adaptateurs manquants peuvent être conseillés avant l’intervention.',
      },
    ],
  },
  {
    id: 'nas-sauvegarde',
    sector: 'informatique',
    categoryKey: 'nas',
    title: 'NAS / Sauvegarde',
    price: 'À partir de 120 €',
    description: 'Photos, documents, dossiers partagés et sauvegarde de vos PC.',
    icon: '/otech-assets/icon-nas.svg',
    details: [
      {
        title: 'Pour quels besoins ?',
        items: [
          'Sauvegarder photos, documents et fichiers familiaux.',
          'Partager des dossiers entre plusieurs ordinateurs.',
          'Mettre en place une sauvegarde PC plus régulière.',
          'Choisir un NAS adapté au budget et au volume de données.',
        ],
      },
      {
        title: 'Ce qui est inclus',
        items: [
          'Conseil sur le matériel si besoin.',
          'Configuration initiale, comptes et dossiers partagés.',
          'Vérification des accès depuis les appareils prévus.',
          'Explication simple des sauvegardes et bonnes pratiques.',
        ],
      },
      {
        title: 'Déroulement',
        ordered: true,
        items: [
          'Vous indiquez le volume à sauvegarder et les appareils concernés.',
          'Je propose l’organisation et le matériel si nécessaire.',
          'Le NAS est configuré puis testé sur place.',
          'Vous savez où déposer et retrouver vos fichiers.',
        ],
      },
      {
        title: 'À prévoir',
        text: 'Le matériel et les disques ne sont pas inclus. Pour les données critiques, une copie externe ou cloud peut être recommandée.',
      },
    ],
  },
  {
    id: 'ecran-telephone',
    sector: 'informatique',
    categoryKey: 'telephone',
    title: 'Remplacement Écran Téléphone',
    price: 'À partir de 40 € + pièce',
    description: 'Aide au choix de la pièce, remplacement et tests tactile/affichage.',
    icon: '/otech-assets/icon-phone.svg',
    details: [
      {
        title: 'Pour quels besoins ?',
        items: [
          'Écran fissuré, noir ou avec lignes d’affichage.',
          'Tactile qui répond mal après une chute.',
          'Vérification de la rentabilité avant réparation.',
          'Aide pour trouver une pièce compatible.',
        ],
      },
      {
        title: 'Ce qui est inclus',
        items: [
          'Contrôle du modèle exact et de la pièce choisie.',
          'Remplacement de l’écran si la réparation est viable.',
          'Test tactile, affichage et fonctions de base.',
          'Conseils pour éviter une mauvaise pièce ou une dépense inutile.',
        ],
      },
      {
        title: 'Déroulement',
        ordered: true,
        items: [
          'Vous envoyez la marque, le modèle et des photos si possible.',
          'Je confirme le type de pièce nécessaire.',
          'Le devis est validé avant commande ou intervention.',
          'Le téléphone est testé avec vous après remplacement.',
        ],
      },
      {
        title: 'À prévoir',
        text: 'La pièce n’est pas incluse dans le tarif. Certaines réparations présentent un risque selon l’état du téléphone ou la disponibilité des composants.',
      },
    ],
  },
  {
    id: 'site-web',
    sector: 'web',
    categoryKey: 'siteWebFormulaire',
    title: 'Site Web Personnalisé Avec Formulaire',
    price: 'À partir de 290 €',
    description: 'Site vitrine responsive, formulaire de contact ou devis et mise en ligne.',
    icon: '/otech-assets/icon-web.svg',
    details: [
      {
        title: 'Pour quels besoins ?',
        items: [
          'Site vitrine pour artisan, indépendant, association ou petit commerce.',
          'Page de présentation professionnelle avec contact visible.',
          'Formulaire de contact, devis, inscription ou réservation simple.',
          'Refonte d’une page existante devenue trop ancienne.',
        ],
      },
      {
        title: 'Ce qui est inclus',
        items: [
          'Structure responsive pour mobile, tablette et ordinateur.',
          'Intégration des textes, images et informations principales.',
          'Formulaire envoyé vers votre e-mail.',
          'Aide à la mise en ligne et aux réglages essentiels.',
        ],
      },
      {
        title: 'Déroulement',
        ordered: true,
        items: [
          'Vous indiquez votre activité, vos pages et le type de formulaire.',
          'Je propose une structure simple et lisible.',
          'Le site est intégré puis ajusté avec vos retours.',
          'La mise en ligne est accompagnée si besoin.',
        ],
      },
      {
        title: 'À prévoir',
        text: 'Nom de domaine, hébergement, photos professionnelles et services externes ne sont pas inclus sauf accord spécifique.',
      },
    ],
  },
  {
    id: 'cartes-visite',
    sector: 'web',
    categoryKey: 'cartesVisite',
    title: 'Cartes De Visite + Design',
    price: 'À partir de 25 €',
    description: 'Design personnalisé, choix du format, de la finition et de la quantité.',
    icon: '/otech-assets/icon-business-card.svg',
    details: [
      {
        title: 'Formats proposés',
        items: ['Slim 85 × 40 mm', 'Standard 85 × 55 mm', 'Carré 65 × 65 mm'],
      },
      {
        title: 'Finitions',
        items: ['Classique', 'Effet métallisé', 'Vernis sélectif'],
      },
      {
        title: 'Design inclus',
        text: 'Création complète, adaptation d’un design existant ou intégration de votre logo. Le prix final est confirmé avant impression.',
      },
    ],
  },
  {
    id: 'portail-pedagogique',
    sector: 'web',
    categoryKey: 'portailPedagogique',
    title: 'Portail Pédagogique Privé',
    price: '4,99 € / mois',
    description: 'Organisation des classes, séquences, séances, activités et ressources.',
    icon: '/otech-assets/icon-software.svg',
    details: [
      {
        title: 'Fonctionnalités',
        items: ['Classes', 'Séquences', 'Séances', 'Activités', 'Ressources pédagogiques'],
      },
      {
        title: 'Accès',
        text: 'Une interface privée pensée pour organiser et projeter les cours. La demande d’accès et la date de démarrage se définissent dans le configurateur.',
      },
    ],
  },
  {
    id: 'logiciels-sur-mesure',
    sector: 'outils',
    categoryKey: 'applicationLocale',
    title: 'Logiciels Sur Mesure',
    price: 'À partir de 300 €',
    description: 'Excel automatisé, suivi client, stock, formulaires et tableaux de bord.',
    icon: '/otech-assets/icon-software.svg',
    details: [
      {
        title: 'Pour quels besoins ?',
        items: [
          'Automatiser un fichier Excel répétitif.',
          'Suivre clients, stock, commandes ou interventions.',
          'Générer des calculs, exports ou documents simples.',
          'Remplacer une organisation trop manuelle.',
        ],
      },
      {
        title: 'Ce qui est inclus',
        items: [
          'Analyse du besoin et des données existantes.',
          'Création d’un outil local, Excel automatisé ou tableau de bord simple.',
          'Tests sur des cas concrets.',
          'Explication d’utilisation et ajustements prévus dans le devis.',
        ],
      },
      {
        title: 'Déroulement',
        ordered: true,
        items: [
          'Vous décrivez votre processus actuel.',
          'Je transforme le besoin en fonctionnalités prioritaires.',
          'Une première version est préparée puis testée.',
          'L’outil est ajusté pour votre usage réel.',
        ],
      },
      {
        title: 'À prévoir',
        text: 'Les intégrations complexes, comptes utilisateurs, cloud ou maintenance régulière sont chiffrés séparément.',
      },
    ],
  },
  {
    id: 'domotique-legere',
    sector: 'connecte',
    categoryKey: 'domotique',
    title: 'Domotique Légère',
    price: 'À partir de 80 €',
    description: 'Lampes, prises, volets, Google Home, Alexa et Home Assistant.',
    icon: '/otech-assets/icon-smart-home.svg',
    details: [
      {
        title: 'Pour quels besoins ?',
        items: [
          'Configurer lampes, prises ou appareils connectés.',
          'Regrouper les objets dans Google Home, Alexa ou Home Assistant.',
          'Créer des horaires ou scénarios simples.',
          'Comprendre quels produits sont compatibles avant achat.',
        ],
      },
      {
        title: 'Ce qui est inclus',
        items: [
          'Vérification des applications et comptes nécessaires.',
          'Association des objets compatibles au réseau Wi-Fi.',
          'Création de commandes ou routines simples.',
          'Explication pour modifier les réglages courants.',
        ],
      },
      {
        title: 'Déroulement',
        ordered: true,
        items: [
          'Vous listez les appareils et l’objectif souhaité.',
          'Je vérifie la compatibilité et les limites éventuelles.',
          'Les objets sont configurés et testés avec vous.',
          'Vous gardez une installation simple à piloter.',
        ],
      },
      {
        title: 'À prévoir',
        text: 'La prestation concerne la configuration d’objets compatibles. Elle ne comprend pas de travaux électriques ni de modification du tableau électrique.',
      },
    ],
  },
];

export const projects = [
  {
    title: 'MaxSono',
    description: 'Site vitrine événementiel avec présentation, prestations et appel à la réservation.',
    url: 'https://maxsono.vercel.app/',
    logo: '/otech-assets/logo-maxsono.svg',
  },
  {
    title: 'Cabinet avocat Meite Bintou',
    description: 'Site professionnel sobre avec mise en avant de l’activité, des informations et du contact.',
    url: 'https://avocat-meite-bintou.vercel.app/',
    logo: '/otech-assets/logo-avocat-meite.svg',
  },
  {
    title: 'Portail pédagogique',
    description: 'Espace privé pour organiser classes, séquences, séances, activités et ressources.',
    url: 'https://mes-cours.netlify.app/',
    logo: '/otech-assets/icon-software.svg',
  },
];

export const trustPoints = [
  'Devis gratuit avant toute intervention',
  'Prix clairs et adaptés au besoin',
  'Explications simples, sans jargon',
  'Intervention autour de Grenoble',
  'Prestations possibles à distance selon le besoin',
  'Accompagnement après la prestation',
];

export const faqs = [
  {
    question: 'Le devis est-il gratuit ?',
    answer: 'Oui, la demande de devis est gratuite et sans engagement. Le prix final est confirmé après échange selon le besoin, le matériel, la distance et la difficulté.',
  },
  {
    question: 'Est-ce que vous vous déplacez ?',
    answer: 'Oui, les prestations physiques sont possibles autour de Grenoble. En dehors de Grenoble, un supplément kilométrique peut être appliqué selon la distance.',
  },
  {
    question: 'Puis-je demander une prestation à distance ?',
    answer: 'Oui, certaines prestations peuvent se faire à distance : aide logicielle, conseil, création de site web, configuration simple ou accompagnement.',
  },
  {
    question: 'Est-ce que le prix affiché est définitif ?',
    answer: 'Non, les prix affichés sont indicatifs. Le devis final est confirmé après analyse de la demande.',
  },
  {
    question: 'Est-ce que vous intervenez sur l’électricité ?',
    answer: 'Uniquement pour la petite domotique et la configuration d’objets compatibles, sans modification de l’installation électrique fixe.',
  },
  {
    question: 'Est-ce que le paiement se fait en ligne ?',
    answer: 'Non, aucun paiement n’est demandé sur le site. Le formulaire sert uniquement à envoyer une demande de devis.',
  },
];

const businessCardPrices: Record<string, number> = {
  'Slim 85 x 40 mm - Aucun(e) - 100 cartes': 20,
  'Slim 85 x 40 mm - Aucun(e) - 250 cartes': 25,
  'Slim 85 x 40 mm - Aucun(e) - 500 cartes': 30,
  'Slim 85 x 40 mm - Aucun(e) - 1000 cartes': 50,
  'Slim 85 x 40 mm - Aucun(e) - 1500 cartes': 80,
  'Slim 85 x 40 mm - Aucun(e) - 2000 cartes': 100,
  'Standard 85 x 55 mm - Aucun(e) - 100 cartes': 20,
  'Standard 85 x 55 mm - Aucun(e) - 250 cartes': 25,
  'Standard 85 x 55 mm - Aucun(e) - 500 cartes': 30,
  'Standard 85 x 55 mm - Aucun(e) - 1000 cartes': 50,
  'Standard 85 x 55 mm - Aucun(e) - 1500 cartes': 80,
  'Standard 85 x 55 mm - Aucun(e) - 2000 cartes': 100,
  'Standard 85 x 55 mm - Effet métallisé - 100 cartes': 30,
  'Standard 85 x 55 mm - Effet métallisé - 250 cartes': 40,
  'Standard 85 x 55 mm - Effet métallisé - 500 cartes': 60,
  'Standard 85 x 55 mm - Effet métallisé - 1000 cartes': 70,
  'Standard 85 x 55 mm - Effet métallisé - 1500 cartes': 110,
  'Standard 85 x 55 mm - Effet métallisé - 2000 cartes': 140,
  'Standard 85 x 55 mm - Vernis sélectif - 100 cartes': 30,
  'Standard 85 x 55 mm - Vernis sélectif - 250 cartes': 40,
  'Standard 85 x 55 mm - Vernis sélectif - 500 cartes': 60,
  'Standard 85 x 55 mm - Vernis sélectif - 1000 cartes': 80,
  'Standard 85 x 55 mm - Vernis sélectif - 1500 cartes': 120,
  'Standard 85 x 55 mm - Vernis sélectif - 2000 cartes': 160,
  'Carré 65 x 65 mm - Aucun(e) - 100 cartes': 30,
  'Carré 65 x 65 mm - Aucun(e) - 250 cartes': 25,
  'Carré 65 x 65 mm - Aucun(e) - 500 cartes': 60,
  'Carré 65 x 65 mm - Aucun(e) - 1000 cartes': 80,
  'Carré 65 x 65 mm - Aucun(e) - 1500 cartes': 120,
  'Carré 65 x 65 mm - Aucun(e) - 2000 cartes': 160,
  'Carré 65 x 65 mm - Effet métallisé - 100 cartes': 40,
  'Carré 65 x 65 mm - Effet métallisé - 250 cartes': 60,
  'Carré 65 x 65 mm - Effet métallisé - 500 cartes': 80,
  'Carré 65 x 65 mm - Effet métallisé - 1000 cartes': 110,
  'Carré 65 x 65 mm - Effet métallisé - 1500 cartes': 160,
  'Carré 65 x 65 mm - Effet métallisé - 2000 cartes': 210,
  'Carré 65 x 65 mm - Vernis sélectif - 100 cartes': 40,
  'Carré 65 x 65 mm - Vernis sélectif - 250 cartes': 60,
  'Carré 65 x 65 mm - Vernis sélectif - 500 cartes': 80,
  'Carré 65 x 65 mm - Vernis sélectif - 1000 cartes': 110,
  'Carré 65 x 65 mm - Vernis sélectif - 1500 cartes': 160,
  'Carré 65 x 65 mm - Vernis sélectif - 2000 cartes': 210,
};

export const quoteCategories: Record<string, QuoteCategory> = {
  reparation: {
    label: 'Réparation PC',
    basePrice: 30,
    questions: [
      { id: 'probleme', title: 'Problème', type: 'radio', options: ['PC lent', 'Ne démarre pas', 'Problème Windows', 'Virus / pubs', 'Bruit / chauffe', 'Écran bleu', 'Autre'] },
      { id: 'budget', title: 'Budget réparation', type: 'radio', options: ['Moins de 30 €', '30 à 60 €', '60 à 100 €', 'Plus de 100 €', 'Je veux d’abord un diagnostic'] },
    ],
  },
  montage: {
    label: 'Montage PC',
    basePrice: 100,
    questions: [
      { id: 'utilisation', title: 'Utilisation principale', type: 'radio', options: ['Bureautique', 'Études', 'Gaming', 'Streaming', 'Montage vidéo', 'Programmation', 'Dessin / 3D', 'Musique', 'Usage familial'] },
      { id: 'budget', title: 'Budget matériel', type: 'radio', options: ['Moins de 400 €', '400 à 600 €', '600 à 800 €', '800 à 1000 €', '1000 à 1500 €', 'Plus de 1500 €', 'Je ne sais pas'] },
      { id: 'materiel', title: 'Matériel déjà possédé', type: 'checkbox', options: ['Écran', 'Clavier / souris', 'Boîtier', 'Alimentation', 'Carte graphique', 'Stockage', 'Rien'] },
      { id: 'besoin', title: 'Besoin', type: 'radio', options: ['Conseil composants', 'Montage uniquement', 'Montage + Windows + drivers', 'Montage + installation complète'] },
    ],
  },
  ssdRam: {
    label: 'SSD / RAM',
    basePrice: 50,
    questions: [
      { id: 'objectif', title: 'Objectif', type: 'radio', options: ['Accélérer le PC', 'Ajouter du stockage', 'Améliorer les performances', 'Remplacer un ancien disque'] },
      { id: 'piece', title: 'Vous avez déjà la pièce', type: 'radio', options: ['Oui', 'Non', 'Je veux un conseil'] },
      { id: 'budget', title: 'Budget', type: 'radio', options: ['Moins de 50 €', '50 à 100 €', 'Plus de 100 €', 'Je ne sais pas'] },
    ],
  },
  setup: {
    label: 'Setup Bureau / Télétravail / Gaming',
    basePrice: 80,
    questions: [
      { id: 'type', title: 'Type de setup', type: 'radio', options: ['Bureau', 'Télétravail', 'Étudiant', 'Gaming', 'Mixte'] },
      { id: 'besoins', title: 'Besoins', type: 'checkbox', options: ['Double écran', 'Webcam', 'Clavier / souris', 'Rangement câbles', 'Installation logiciels', 'Optimisation Windows', 'Imprimante / périphériques'] },
      { id: 'budget', title: 'Budget', type: 'radio', options: ['Moins de 50 €', '50 à 100 €', '100 à 250 €', 'Plus de 250 €'] },
    ],
  },
  nas: {
    label: 'NAS / Sauvegarde',
    basePrice: 120,
    questions: [
      { id: 'objectif', title: 'Objectif', type: 'checkbox', options: ['Sauvegarde photos', 'Sauvegarde documents', 'Stockage familial', 'Partage de fichiers', 'Sauvegarde PC', 'Conseil achat NAS'] },
      { id: 'materiel', title: 'Matériel déjà possédé', type: 'radio', options: ['Oui', 'Non', 'Je veux un conseil'] },
      { id: 'budget', title: 'Budget', type: 'radio', options: ['Moins de 100 €', '100 à 250 €', '250 à 500 €', 'Plus de 500 €'] },
    ],
  },
  domotique: {
    label: 'Domotique légère',
    basePrice: 80,
    note: 'Configuration d’objets connectés compatibles uniquement, sans modification de l’installation électrique fixe.',
    questions: [
      { id: 'equipement', title: 'Équipement à configurer', type: 'checkbox', options: ['Lampe connectée', 'Prise connectée', 'Volet compatible application', 'Assistant vocal', 'Home Assistant', 'Plusieurs appareils', 'Je veux un conseil'] },
      { id: 'objectif', title: 'Objectif', type: 'checkbox', options: ['Contrôler depuis le téléphone', 'Programmer des horaires', 'Scénario matin / soir', 'Regrouper dans une application', 'Ajouter Google Home / Alexa'] },
      { id: 'budget', title: 'Budget', type: 'radio', options: ['Moins de 50 €', '50 à 150 €', '150 à 300 €', 'Plus de 300 €'] },
    ],
  },
  telephone: {
    label: 'Remplacement écran téléphone',
    basePrice: 40,
    questions: [
      { id: 'marque', title: 'Marque', type: 'radio', options: ['iPhone', 'Samsung', 'Xiaomi / Redmi', 'Oppo', 'Autre'] },
      { id: 'ecran', title: 'Vous avez déjà l’écran', type: 'radio', options: ['Oui', 'Non', 'Je veux un conseil'] },
      { id: 'budget', title: 'Budget', type: 'radio', options: ['Moins de 50 €', '50 à 100 €', 'Plus de 100 €', 'Je veux savoir si ça vaut le coup'] },
    ],
  },
  applicationLocale: {
    label: 'Logiciel sur mesure',
    basePrice: 300,
    questions: [
      { id: 'besoinPrincipal', title: 'Besoin principal', type: 'radio', options: ['Gestion de stock', 'Suivi client', 'Automatisation Excel', 'Formulaire avec export', 'Logiciel de devis / facture simple', 'Tableau de bord', 'Calcul automatique', 'Organisation de fichiers', 'Autre'] },
      { id: 'utilisateur', title: 'Utilisateur', type: 'radio', options: ['Particulier', 'Étudiant', 'Association', 'Artisan', 'Petit commerce', 'Entreprise'] },
      { id: 'format', title: 'Format souhaité', type: 'radio', options: ['Logiciel Windows local', 'Fichier Excel automatisé', 'Script simple', 'Tableau de bord', 'Je veux un conseil'] },
      { id: 'budget', title: 'Budget', type: 'radio', options: ['300 à 500 €', '500 à 1000 €', '1000 à 2000 €', 'Plus de 2000 €', 'Je veux d’abord estimer'] },
    ],
  },
  siteWebFormulaire: {
    label: 'Site web personnalisé avec formulaire',
    basePrice: 290,
    questions: [
      { id: 'besoinPrincipal', title: 'Besoin principal', type: 'radio', options: ['Site vitrine', 'Page de présentation', 'Formulaire de contact', 'Formulaire de devis', 'Refonte d’un site existant', 'Je veux un conseil'] },
      { id: 'pages', title: 'Nombre de pages', type: 'radio', options: ['1 page', '2 à 3 pages', '4 à 6 pages', 'Plus de 6 pages', 'Je ne sais pas'] },
      { id: 'formulaire', title: 'Type de formulaire', type: 'checkbox', options: ['Contact', 'Demande de devis', 'Réservation / rendez-vous', 'Inscription', 'Envoi vers e-mail', 'Je veux un conseil'] },
      { id: 'utilisateur', title: 'Utilisateur', type: 'radio', options: ['Particulier', 'Association', 'Artisan', 'Petit commerce', 'Entreprise'] },
      { id: 'budget', title: 'Budget', type: 'radio', options: ['290 à 500 €', '500 à 1000 €', '1000 à 2000 €', 'Plus de 2000 €', 'Je veux d’abord estimer'] },
    ],
  },
  portailPedagogique: {
    label: 'Portail pédagogique privé',
    basePrice: 4.99,
    billing: 'monthly',
    note: 'Abonnement à 4,99 € par mois.',
    questions: [
      { id: 'utilisationPortail', title: 'Utilisation souhaitée', type: 'checkbox', options: ['Classes', 'Séquences', 'Séances', 'Activités', 'Ressources'] },
      { id: 'demarrage', title: 'Démarrage souhaité', type: 'radio', options: ['Dès que possible', 'À une date précise', 'Je souhaite d’abord des informations'] },
    ],
  },
  cartesVisite: {
    label: 'Cartes de visite + design',
    basePrice: 25,
    questions: [
      { id: 'formatQuantite', title: 'Format, finition et quantité', type: 'radio', options: Object.keys(businessCardPrices) },
      { id: 'orientation', title: 'Orientation', type: 'radio', options: ['Horizontale', 'Verticale'] },
      { id: 'design', title: 'Design de la carte', type: 'radio', options: ['Création complète', 'J’ai déjà une idée', 'J’ai déjà un logo', 'Adapter un design existant'] },
      { id: 'budget', title: 'Budget', type: 'radio', options: ['Prix affiché OK', 'Je veux d’abord valider le design', 'Je veux comparer plusieurs quantités'] },
    ],
  },
};

export const estimateQuotePrice = (
  categoryKey: string,
  selections: Record<string, string[]>,
) => {
  if (categoryKey === 'montage') {
    const need = selections.besoin?.[0] ?? '';
    return need.includes('Windows') || need.includes('installation complète') ? 130 : 100;
  }

  if (categoryKey === 'reparation') {
    const problem = selections.probleme?.[0] ?? '';
    if (problem === 'PC lent') return 50;
    if (['Problème Windows', 'Virus / pubs', 'Écran bleu'].includes(problem)) return 80;
    return 30;
  }

  if (categoryKey === 'cartesVisite') {
    return businessCardPrices[selections.formatQuantite?.[0] ?? ''] ?? 25;
  }

  return quoteCategories[categoryKey]?.basePrice ?? 0;
};

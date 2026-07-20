import {
  Blocks,
  BrainCircuit,
  Gauge,
  LayoutDashboard,
  Move3d,
  ShieldCheck,
  Sparkles,
  Waypoints,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const siteContent = {
  brand: 'NovaFrame Studio',
  siteUrl: 'https://example.com',
  contactEmail: 'contact@example.com',
  nav: [
    { label: 'Vision', href: '#vision' },
    { label: 'Fonctions', href: '#features' },
    { label: 'Demo', href: '#demo' },
    { label: 'Resultats', href: '#results' },
    { label: 'Galerie', href: '#gallery' },
  ],
  hero: {
    eyebrow: 'Experience 3D pilotee par le scroll',
    title: 'Un site qui se traverse comme un espace.',
    description:
      'NovaFrame transforme une presentation web en parcours immersif: camera synchronisee, interface lisible, scenes 3D utiles et performance maitrisee.',
    primaryAction: 'Explorer',
    secondaryAction: 'Voir la demo',
  },
  vision: {
    title: 'Une narration spatiale, pas un simple effet visuel.',
    body:
      'Le contenu reste au premier plan pendant que la scene accompagne chaque argument. Les transitions guident le regard, revelent les usages et donnent une impression de profondeur sans sacrifier la clarte.',
    cards: [
      {
        title: 'Pour les marques exigeantes',
        text: 'Lancement produit, studio creatif, SaaS premium ou portfolio technique: l experience donne un signal fort des la premiere seconde.',
      },
      {
        title: 'Pour les utilisateurs reels',
        text: 'Navigation clavier, textes HTML, responsive mobile et reduction des mouvements assurent une experience utilisable au quotidien.',
      },
      {
        title: 'Pour les equipes produit',
        text: 'Contenu, positions camera et timings sont centralises afin de faire evoluer la page sans fouiller chaque composant.',
      },
    ],
  },
  features: [
    {
      icon: Waypoints,
      title: 'Camera choregraphiee',
      description: 'Un chemin 3D continu relie les sections avec des interpolations douces.',
    },
    {
      icon: LayoutDashboard,
      title: 'Interfaces flottantes',
      description: 'Les panneaux HTML et les objets 3D racontent la meme etape au meme moment.',
    },
    {
      icon: Gauge,
      title: 'Performance controlee',
      description: 'DPR limite, scene mobile allegee, listeners nettoyes et animations suspendues si besoin.',
    },
    {
      icon: ShieldCheck,
      title: 'Accessible par defaut',
      description: 'Contenu semantique, focus visible, contrastes solides et mode reduced motion.',
    },
    {
      icon: Blocks,
      title: 'Architecture modulaire',
      description: 'Composants courts, configuration centrale et scene Three.js organisee.',
    },
    {
      icon: BrainCircuit,
      title: 'Experience memorable',
      description: 'Micro-interactions discretes et transitions utiles, sans surenchere visuelle.',
    },
  ] satisfies Feature[],
  demo: {
    title: 'Une demonstration qui simule un vrai produit.',
    body:
      'La camera s approche d un poste de controle 3D. Les panneaux changent de profondeur et les etats de l interface accompagnent la lecture.',
    steps: ['Decouverte', 'Configuration', 'Projection', 'Conversion'],
  },
  metrics: [
    { value: '01', label: 'scene centrale configurable', note: 'Donnee de demonstration' },
    { value: '07', label: 'sections synchronisees', note: 'Donnee de demonstration' },
    { value: '60', label: 'fps vises sur desktop', note: 'Objectif technique' },
  ],
  gallery: [
    {
      title: 'Tunnel produit',
      category: 'Scroll 3D',
      description: 'Cartes visuelles et camera en avance progressive.',
    },
    {
      title: 'Console immersive',
      category: 'Interface',
      description: 'Ecran 3D avec etats de demonstration synchronises.',
    },
    {
      title: 'Lancement premium',
      category: 'Brand',
      description: 'Composition finale avec lumiere chaude et appel a l action.',
    },
  ],
  cta: {
    title: 'Pret a donner du relief a votre presence web ?',
    body:
      'Cette base est prete a recevoir vos textes, captures, modeles GLB optimises et integration de contact.',
    action: 'Demarrer un projet',
  },
};

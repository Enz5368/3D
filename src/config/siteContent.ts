import { contactDetails } from './businessContent';

export const siteContent = {
  brand: 'OrellanaTech',
  siteUrl: 'https://orellanatech.monespaceprof.com',
  contactEmail: contactDetails.email,
  nav: [
    { label: 'Accueil', href: '#accueil' },
    { label: 'Services', href: '#services' },
    { label: 'Pourquoi nous', href: '#pourquoi' },
    { label: 'Configurateur', href: '#configurateur' },
    { label: 'FAQ', href: '#faq' },
  ],
  hero: {
    eyebrow: 'Services numériques personnalisés',
    title: 'L’informatique qui s’adapte à vous.',
    description:
      'Dépannage, ordinateurs sur mesure, sites web, outils métiers et maison connectée à Grenoble. Un accompagnement clair, humain et sans jargon.',
    primaryAction: 'Configurer mon projet',
    secondaryAction: 'Découvrir les services',
  },
};

import { Bot, Globe2, HousePlug, Laptop, ShieldCheck, Sparkles } from 'lucide-react';

export const siteContent = {
  brand: 'OrellanaTech',
  siteUrl: 'https://homespacepro.com',
  contactEmail: 'orellanatech37@gmail.com',
  phone: '07 59 72 78 56',
  nav: [
    { label: 'Services', href: '#services' },
    { label: 'Estimation', href: '#estimation' },
    { label: 'À propos', href: '#about' },
    { label: 'FAQ', href: '#faq' },
  ],
  hero: {
    eyebrow: 'Services numériques sur mesure',
    title: 'La technologie, simplement maîtrisée.',
    description:
      'Dépannage, création web et automatisation pour les particuliers et petites entreprises de Grenoble.',
  },
  services: [
    {
      icon: Laptop,
      title: 'Assistance informatique',
      description: 'PC lent, panne, installation, sauvegarde ou récupération de données.',
      price: 'Dès 30 €',
      tone: 'mint',
      featured: true,
    },
    {
      icon: Globe2,
      title: 'Sites web',
      description: 'Des sites rapides, lisibles et pensés pour convertir vos visiteurs.',
      price: 'Dès 290 €',
      tone: 'blue',
    },
    {
      icon: Bot,
      title: 'Logiciels sur mesure',
      description: 'Automatisez les tâches répétitives avec des outils adaptés à votre activité.',
      price: 'Sur devis',
      tone: 'peach',
    },
    {
      icon: HousePlug,
      title: 'Maison connectée',
      description: 'Installation et configuration d’équipements compatibles, sans jargon.',
      price: 'Dès 100 €',
      tone: 'lilac',
      featured: true,
    },
  ],
  benefits: [
    {
      icon: ShieldCheck,
      number: '01',
      title: 'Un prix annoncé avant l’intervention',
      text: 'Vous recevez une estimation claire avant de vous engager.',
    },
    {
      icon: Sparkles,
      number: '02',
      title: 'Des explications compréhensibles',
      text: 'La solution vous est expliquée simplement, sans jargon inutile.',
    },
    {
      icon: HousePlug,
      number: '03',
      title: 'Un accompagnement de proximité',
      text: 'À Grenoble ou à distance, avant comme après la prestation.',
    },
  ],
  faqs: [
    ['Le devis est-il gratuit ?', 'Oui. Une première estimation est communiquée gratuitement avant toute intervention.'],
    ['Est-ce que vous vous déplacez ?', 'Oui, autour de Grenoble. La zone et les éventuels frais de déplacement sont précisés avant validation.'],
    ['Puis-je demander une prestation à distance ?', 'Oui. De nombreux diagnostics, réglages et accompagnements peuvent être réalisés à distance.'],
    ['Le prix affiché est-il définitif ?', 'Il s’agit d’une estimation. Le tarif final est confirmé après échange selon le matériel, la distance et la difficulté.'],
    ['Est-ce que le paiement se fait en ligne ?', 'Non. Aucun paiement n’est demandé sur le site. Les modalités sont convenues directement après validation du devis.'],
  ],
};

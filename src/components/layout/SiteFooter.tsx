import { ArrowUp } from 'lucide-react';
import { contactDetails } from '../../config/businessContent';
import { siteContent } from '../../config/siteContent';

export const SiteFooter = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <a className="footer__brand" href="#accueil" aria-label="Retour au début">
        {siteContent.brand}
      </a>
      <nav aria-label="Navigation de pied de page">
        {siteContent.nav.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <div className="footer__meta">
        <span>© {year} · SIREN {contactDetails.siren}</span>
        <span>Mentions légales</span>
        <span>Confidentialité</span>
        <a href={`mailto:${siteContent.contactEmail}`}>{siteContent.contactEmail}</a>
        <a className="icon-link" href="#accueil" aria-label="Retour en haut de page">
          <ArrowUp size={18} aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
};

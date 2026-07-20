import { ArrowUp } from 'lucide-react';
import { siteContent } from '../../config/siteContent';

export const SiteFooter = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <a className="footer__brand" href="#top" aria-label="Retour au debut">
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
        <span>{year}</span>
        <a href="#legal">Mentions legales</a>
        <a href="#privacy">Confidentialite</a>
        <a href={`mailto:${siteContent.contactEmail}`}>{siteContent.contactEmail}</a>
        <a className="icon-link" href="#top" aria-label="Retour en haut de page">
          <ArrowUp size={18} aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
};

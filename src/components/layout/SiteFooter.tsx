import { ArrowUp } from 'lucide-react';
import { siteContent } from '../../config/siteContent';

export const SiteFooter = () => <footer className="footer">
  <div className="footer__top">
    <div><a className="footer__brand" href="#top">{siteContent.brand}</a><p className="footer__tagline">Des solutions numériques claires pour les particuliers et petites entreprises.</p></div>
    <nav aria-label="Navigation de pied de page">{siteContent.nav.map((item) => <a href={item.href} key={item.href}>{item.label}</a>)}<a href="#contact">Contact</a></nav>
    <div className="footer__contact"><a href={`tel:${siteContent.phone.replaceAll(' ', '')}`}>{siteContent.phone}</a><a href={`mailto:${siteContent.contactEmail}`}>{siteContent.contactEmail}</a></div>
  </div>
  <div className="footer__bottom"><span>© {new Date().getFullYear()} OrellanaTech</span><div className="footer__legal"><a href="#legal">Mentions légales</a><a href="#privacy">Confidentialité</a></div><a className="icon-link" href="#top" aria-label="Retour en haut"><ArrowUp size={17} /></a></div>
</footer>;

import { ArrowRight } from 'lucide-react';
import { siteContent } from '../../config/siteContent';
import { SectionShell } from './SectionShell';

export const CtaSection = () => (
  <SectionShell id="contact" align="center" className="section--cta">
    <div className="cta-panel" data-reveal>
      <p className="eyebrow">Contact</p>
      <h2>{siteContent.cta.title}</h2>
      <p>{siteContent.cta.body}</p>
      <a
        className="button button--primary"
        href={`mailto:${siteContent.contactEmail}?subject=Projet%203D%20immersif`}
      >
        {siteContent.cta.action}
        <ArrowRight size={18} aria-hidden="true" />
      </a>
    </div>
    <div className="legal-notes" id="legal">
      <p>Mentions legales et politique de confidentialite a connecter a vos pages finales.</p>
      <p id="privacy">Aucune donnee personnelle n est collectee par cette version statique.</p>
    </div>
  </SectionShell>
);

import { ArrowRight, MapPin } from 'lucide-react';
import { siteContent } from '../../config/siteContent';

export const HeroSection = () => {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero__content" data-reveal>
        <p className="eyebrow">{siteContent.hero.eyebrow}</p>
        <h1 id="hero-title">{siteContent.hero.title}</h1>
        <p className="hero__lead">{siteContent.hero.description}</p>
        <div className="hero__actions">
          <a className="button button--primary" href="#estimation">
            Obtenir une estimation <ArrowRight size={18} aria-hidden="true" />
          </a>
          <a className="button button--secondary" href="#services">Découvrir les services</a>
        </div>
        <p className="hero__local"><MapPin size={15} /> Grenoble et alentours · Assistance à distance</p>
      </div>
      <div className="hero__visual-label" aria-hidden="true">
        <span>Assistance</span><span>Web</span><span>Automatisation</span>
      </div>
    </section>
  );
};

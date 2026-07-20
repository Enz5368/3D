import { ArrowDown, ArrowRight } from 'lucide-react';
import { siteContent } from '../../config/siteContent';
import { useRevealAnimations } from '../../hooks/useRevealAnimations';

export const HeroSection = () => {
  useRevealAnimations();

  return (
    <section className="hero section" id="accueil" aria-labelledby="hero-title">
      <div className="hero__content" data-reveal>
        <p className="eyebrow">{siteContent.hero.eyebrow}</p>
        <h1 id="hero-title">{siteContent.hero.title}</h1>
        <p className="hero__lead">{siteContent.hero.description}</p>
        <div className="hero__actions">
          <a className="button button--primary" href="#configurateur">
            {siteContent.hero.primaryAction}
            <ArrowRight size={18} aria-hidden="true" />
          </a>
          <a className="button button--secondary" href="#services">
            {siteContent.hero.secondaryAction}
          </a>
        </div>
      </div>
      <a className="scroll-cue" href="#services" aria-label="Faire défiler vers les services">
        <ArrowDown size={18} aria-hidden="true" />
        Scroll
      </a>
    </section>
  );
};

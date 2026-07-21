import { ArrowRight, Clock3, MapPin, MonitorSmartphone } from 'lucide-react';

export const AboutSection = () => (
  <section className="content-section about" id="about" aria-labelledby="about-title">
    <div className="about__visual" data-reveal aria-hidden="true">
      <div className="about__monogram">EO</div><span>OrellanaTech</span>
    </div>
    <div className="about__copy" data-reveal>
      <p className="eyebrow eyebrow--dark">À propos</p>
      <h2 id="about-title">Une assistance locale et humaine.</h2>
      <p>Je suis Enzo, fondateur d’OrellanaTech. J’accompagne les particuliers, indépendants et petites entreprises avec des solutions simples, durables et adaptées à leur niveau technique.</p>
      <ul><li><MapPin size={18} /> Grenoble et alentours</li><li><MonitorSmartphone size={18} /> Assistance possible à distance</li><li><Clock3 size={18} /> Réponse généralement sous 24 h</li></ul>
      <a className="text-link" href="#contact">Parler de mon projet <ArrowRight size={17} /></a>
    </div>
  </section>
);

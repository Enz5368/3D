import { ArrowUpRight } from 'lucide-react';
import { siteContent } from '../../config/siteContent';

export const ServicesSection = () => {
  return (
    <section className="content-section services" id="services" aria-labelledby="services-title">
      <div className="section-heading" data-reveal>
        <p className="eyebrow eyebrow--dark">Services</p>
        <h2 id="services-title">Des solutions adaptées à votre quotidien numérique.</h2>
        <p>Choisissez un domaine pour découvrir les prestations et obtenir une première estimation.</p>
      </div>
      <div className="services-grid">
        {siteContent.services.map((service) => {
          const Icon = service.icon;
          return (
            <a className={`service-card service-card--${service.tone} ${service.featured ? 'service-card--wide' : ''}`} href="#estimation" key={service.title} data-reveal>
              <div className="service-card__icon"><Icon size={26} /></div>
              <div className="service-card__copy">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
              <div className="service-card__footer"><strong>{service.price}</strong><span>Découvrir <ArrowUpRight size={17} /></span></div>
            </a>
          );
        })}
      </div>
    </section>
  );
};

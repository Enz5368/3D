import { ArrowRight, Check, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { serviceSectors, services } from '../../config/businessContent';
import type { BusinessService, ServiceSector } from '../../config/businessContent';
import { useQuoteCart } from '../../context/QuoteCartContext';
import { useRevealAnimations } from '../../hooks/useRevealAnimations';
import { SectionShell } from './SectionShell';

export const ServicesSection = () => {
  const [sector, setSector] = useState<ServiceSector | 'all'>('all');
  const [selected, setSelected] = useState<BusinessService | null>(null);
  const { requestCategory } = useQuoteCart();
  useRevealAnimations();

  useEffect(() => {
    if (!selected) return;
    const close = (event: KeyboardEvent) => event.key === 'Escape' && setSelected(null);
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, [selected]);

  const filtered = sector === 'all' ? services : services.filter((service) => service.sector === sector);

  const configure = (service: BusinessService) => {
    requestCategory(service.categoryKey);
    setSelected(null);
  };

  return (
    <SectionShell id="services" className="business-section">
      <div className="section-heading" data-reveal>
        <p className="eyebrow">Des solutions concrètes</p>
        <h2>Un seul interlocuteur pour vos besoins numériques.</h2>
        <p>Particuliers, indépendants et petites structures : choisissez un service, consultez les détails puis construisez votre demande de devis.</p>
      </div>

      <div className="service-tabs" role="group" aria-label="Filtrer les services" data-reveal>
        {serviceSectors.map((item) => (
          <button
            className={sector === item.id ? 'is-active' : ''}
            key={item.id}
            type="button"
            onClick={() => setSector(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="services-catalog">
        {filtered.map((service) => (
          <article className="business-service-card" key={service.id} data-reveal>
            <div className="service-card__top">
              <img src={service.icon} alt="" aria-hidden="true" />
              <span>{service.price}</span>
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <button type="button" onClick={() => setSelected(service)}>
              Voir le détail <ArrowRight size={16} aria-hidden="true" />
            </button>
          </article>
        ))}
      </div>

      {selected && (
        <div className="modal service-modal" role="dialog" aria-modal="true" aria-labelledby="service-modal-title" onMouseDown={() => setSelected(null)}>
          <article className="modal__panel service-modal__panel" onMouseDown={(event) => event.stopPropagation()}>
            <button className="modal__close" type="button" aria-label="Fermer" onClick={() => setSelected(null)}>
              <X size={18} aria-hidden="true" />
            </button>
            <div className="service-modal__header">
              <img src={selected.icon} alt="" aria-hidden="true" />
              <div>
                <span>{selected.price}</span>
                <h2 id="service-modal-title">{selected.title}</h2>
                <p>{selected.description}</p>
              </div>
            </div>
            <div className="service-detail-grid">
              {selected.details.map((detail) => (
                <section key={detail.title}>
                  <h3>{detail.title}</h3>
                  {detail.items && (detail.ordered ? (
                    <ol>{detail.items.map((item) => <li key={item}>{item}</li>)}</ol>
                  ) : (
                    <ul>{detail.items.map((item) => <li key={item}><Check size={15} aria-hidden="true" />{item}</li>)}</ul>
                  ))}
                  {detail.text && <p>{detail.text}</p>}
                </section>
              ))}
            </div>
            <a className="button button--primary" href="#configurateur" onClick={() => configure(selected)}>
              Configurer cette prestation <ArrowRight size={17} aria-hidden="true" />
            </a>
          </article>
        </div>
      )}
    </SectionShell>
  );
};

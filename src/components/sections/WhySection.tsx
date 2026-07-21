import { siteContent } from '../../config/siteContent';

export const WhySection = () => {
  return (
    <section className="content-section why" aria-labelledby="why-title">
      <div className="section-heading section-heading--split" data-reveal>
        <h2 id="why-title">Une assistance claire, humaine et sans mauvaise surprise.</h2>
        <p>Une approche locale, adaptée à votre niveau technique, avec une estimation avant toute intervention.</p>
      </div>
      <div className="benefits-grid">
        {siteContent.benefits.map((benefit) => {
          const Icon = benefit.icon;
          return <article className="benefit" key={benefit.number} data-reveal>
            <div className="benefit__top"><span>{benefit.number}</span><Icon size={23} /></div>
            <h3>{benefit.title}</h3><p>{benefit.text}</p>
          </article>;
        })}
      </div>
    </section>
  );
};

import { siteContent } from '../../config/siteContent';
import { SectionShell } from './SectionShell';

export const FeaturesSection = () => (
  <SectionShell id="features" align="right" className="section--features">
    <div className="copy-panel" data-reveal>
      <p className="eyebrow">Fonctionnalites</p>
      <h2>Chaque interaction sert le recit.</h2>
      <p>
        Les cartes apparaissent au fil du parcours pendant que la scene reconfigure ses volumes,
        ses lumieres et son point de vue.
      </p>
    </div>
    <div className="features-grid">
      {siteContent.features.map((feature) => {
        const Icon = feature.icon;
        return (
          <article
            className="feature-card"
            data-reveal
            key={feature.title}
          >
            <Icon size={22} aria-hidden="true" />
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </article>
        );
      })}
    </div>
  </SectionShell>
);

import { siteContent } from '../../config/siteContent';
import { SectionShell } from './SectionShell';

export const ProjectSection = () => (
  <SectionShell id="vision">
    <div className="copy-panel copy-panel--wide" data-reveal>
      <p className="eyebrow">Vision</p>
      <h2>{siteContent.vision.title}</h2>
      <p>{siteContent.vision.body}</p>
    </div>
    <div className="step-grid">
      {siteContent.vision.cards.map((card, index) => (
        <article className="glass-card" data-reveal key={card.title}>
          <span>0{index + 1}</span>
          <h3>{card.title}</h3>
          <p>{card.text}</p>
        </article>
      ))}
    </div>
  </SectionShell>
);

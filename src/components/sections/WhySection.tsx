import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { projects, trustPoints } from '../../config/businessContent';
import { useRevealAnimations } from '../../hooks/useRevealAnimations';
import { SectionShell } from './SectionShell';

export const WhySection = () => {
  useRevealAnimations();

  return (
    <SectionShell id="pourquoi" className="business-section">
      <div className="section-heading" data-reveal>
        <p className="eyebrow">Pourquoi OrellanaTech ?</p>
        <h2>La technique reste complexe. L’accompagnement, lui, reste simple.</h2>
      </div>
      <div className="trust-grid">
        {trustPoints.map((point) => (
          <div className="trust-card" key={point} data-reveal>
            <CheckCircle2 size={20} aria-hidden="true" />
            <span>{point}</span>
          </div>
        ))}
      </div>
      <div className="projects-heading" data-reveal>
        <p className="eyebrow">Réalisations</p>
        <h3>Des projets déjà mis en ligne</h3>
      </div>
      <div className="projects-grid">
        {projects.map((project) => (
          <a className="project-card" href={project.url} target="_blank" rel="noreferrer" key={project.title} data-reveal>
            <div className="project-card__logo"><img src={project.logo} alt="" aria-hidden="true" /></div>
            <div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <span>Voir le projet <ArrowUpRight size={15} aria-hidden="true" /></span>
            </div>
          </a>
        ))}
      </div>
    </SectionShell>
  );
};

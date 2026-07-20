import { useEffect, useRef } from 'react';
import { siteContent } from '../../config/siteContent';
import { SectionShell } from './SectionShell';

export const MetricsSection = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          root.classList.add('is-visible');
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(root);
    return () => observer.disconnect();
  }, []);

  return (
    <SectionShell id="results" align="center" className="section--metrics">
      <div className="copy-panel copy-panel--center" data-reveal>
        <p className="eyebrow">Resultats</p>
        <h2>Des indicateurs sobres et assumés.</h2>
        <p>Les valeurs ci-dessous sont des reperes de demonstration, pas des chiffres client.</p>
      </div>
      <div className="metrics-grid" ref={ref}>
        {siteContent.metrics.map((metric) => (
          <article className="metric" key={metric.label}>
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
            <small>{metric.note}</small>
          </article>
        ))}
      </div>
    </SectionShell>
  );
};

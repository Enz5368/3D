import { MonitorSmartphone } from 'lucide-react';
import { siteContent } from '../../config/siteContent';
import { SectionShell } from './SectionShell';

export const DemoSection = () => (
  <SectionShell id="demo" className="section--demo">
    <div className="copy-panel" data-reveal>
      <p className="eyebrow">Demo immersive</p>
      <h2>{siteContent.demo.title}</h2>
      <p>{siteContent.demo.body}</p>
    </div>
    <div className="demo-timeline" data-reveal>
      <MonitorSmartphone size={24} aria-hidden="true" />
      {siteContent.demo.steps.map((step, index) => (
        <div className="demo-timeline__step" key={step}>
          <span>{index + 1}</span>
          <p>{step}</p>
        </div>
      ))}
    </div>
  </SectionShell>
);

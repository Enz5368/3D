import { ChevronDown } from 'lucide-react';
import { faqs } from '../../config/businessContent';
import { useRevealAnimations } from '../../hooks/useRevealAnimations';
import { SectionShell } from './SectionShell';

export const FaqSection = () => {
  useRevealAnimations();
  return (
    <SectionShell id="faq" className="business-section">
      <div className="faq-layout">
        <div className="section-heading" data-reveal>
          <p className="eyebrow">Questions fréquentes</p>
          <h2>Les réponses utiles avant de commencer.</h2>
          <p>Votre situation n’est pas dans la liste ? Décrivez-la dans le formulaire, je vous répondrai avec une première orientation.</p>
        </div>
        <div className="faq-list" data-reveal>
          {faqs.map((faq, index) => (
            <details key={faq.question} open={index === 0}>
              <summary>{faq.question}<ChevronDown size={19} aria-hidden="true" /></summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </SectionShell>
  );
};

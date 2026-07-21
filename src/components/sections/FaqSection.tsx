import { Plus } from 'lucide-react';
import { useState } from 'react';
import { siteContent } from '../../config/siteContent';

export const FaqSection = () => {
  const [open, setOpen] = useState(0);
  return <section className="content-section faq" id="faq" aria-labelledby="faq-title">
    <div className="faq__intro"><p className="eyebrow eyebrow--dark">Questions fréquentes</p><h2 id="faq-title">Tout ce qu’il faut savoir avant de commencer.</h2><p>Une question différente ? Écrivez-moi, je vous répondrai simplement.</p></div>
    <div className="faq__list">
      {siteContent.faqs.map(([question, answer], index) => <div className={`faq-item ${open === index ? 'is-open' : ''}`} key={question}>
        <button type="button" aria-expanded={open === index} onClick={() => setOpen(open === index ? -1 : index)}><span>{question}</span><Plus size={20} /></button>
        <div className="faq-item__answer"><p>{answer}</p></div>
      </div>)}
    </div>
  </section>;
};

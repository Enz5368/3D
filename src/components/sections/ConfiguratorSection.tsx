import { Check, ShoppingBag, Trash2 } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { estimateQuotePrice, quoteCategories } from '../../config/businessContent';
import { useQuoteCart } from '../../context/QuoteCartContext';
import { useRevealAnimations } from '../../hooks/useRevealAnimations';
import { SectionShell } from './SectionShell';

const money = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' });

export const ConfiguratorSection = () => {
  const { items, requestedCategory, addItem, removeItem, clearItems } = useQuoteCart();
  const [categoryKey, setCategoryKey] = useState(requestedCategory);
  const [selections, setSelections] = useState<Record<string, string[]>>({});
  const [message, setMessage] = useState('');
  useRevealAnimations();

  useEffect(() => {
    if (quoteCategories[requestedCategory]) {
      setCategoryKey(requestedCategory);
      setSelections({});
      setMessage('');
    }
  }, [requestedCategory]);

  const category = quoteCategories[categoryKey];
  const estimate = estimateQuotePrice(categoryKey, selections);
  const totals = useMemo(() => items.reduce((sum, item) => ({
    oneTime: sum.oneTime + (item.billing === 'one-time' ? item.price : 0),
    monthly: sum.monthly + (item.billing === 'monthly' ? item.price : 0),
  }), { oneTime: 0, monthly: 0 }), [items]);

  const choose = (questionId: string, option: string, type: 'radio' | 'checkbox', checked: boolean) => {
    setSelections((current) => {
      const previous = current[questionId] ?? [];
      const next = type === 'radio'
        ? [option]
        : checked
          ? [...new Set([...previous, option])]
          : previous.filter((value) => value !== option);
      return { ...current, [questionId]: next };
    });
    setMessage('');
  };

  const addCurrent = () => {
    const missing = category.questions.find((question) => !(selections[question.id]?.length));
    if (missing) {
      setMessage(`Choisissez une réponse pour « ${missing.title} ».`);
      return;
    }
    addItem({
      categoryKey,
      category: category.label,
      selections,
      price: estimate,
      billing: category.billing ?? 'one-time',
    });
    setSelections({});
    setMessage('Prestation ajoutée à votre demande.');
  };

  return (
    <SectionShell id="configurateur" className="business-section configurator-section">
      <div className="section-heading" data-reveal>
        <p className="eyebrow">Configurateur de devis</p>
        <h2>Précisez le besoin, obtenez une première estimation.</h2>
        <p>Aucun paiement en ligne. Votre sélection prépare simplement un récapitulatif clair à joindre à votre demande.</p>
      </div>

      <div className="configurator-layout">
        <div className="config-panel" data-reveal>
          <label className="field-label" htmlFor="quote-category">Prestation</label>
          <select
            id="quote-category"
            value={categoryKey}
            onChange={(event) => {
              setCategoryKey(event.target.value);
              setSelections({});
              setMessage('');
            }}
          >
            {Object.entries(quoteCategories).map(([key, value]) => <option key={key} value={key}>{value.label}</option>)}
          </select>

          <div className="question-list">
            {category.questions.map((question) => (
              <fieldset className="question-group" key={question.id}>
                <legend>{question.title}{question.type === 'checkbox' && <small>Plusieurs choix possibles</small>}</legend>
                <div className="choice-grid">
                  {question.options.map((option) => {
                    const id = `${categoryKey}-${question.id}-${option}`.replace(/\W+/g, '-');
                    const checked = selections[question.id]?.includes(option) ?? false;
                    return (
                      <label className={`choice ${checked ? 'is-selected' : ''}`} htmlFor={id} key={option}>
                        <input
                          id={id}
                          type={question.type}
                          name={`${categoryKey}-${question.id}`}
                          checked={checked}
                          onChange={(event) => choose(question.id, option, question.type, event.target.checked)}
                        />
                        <span className="choice__check"><Check size={13} aria-hidden="true" /></span>
                        <span>{option}</span>
                      </label>
                    );
                  })}
                </div>
              </fieldset>
            ))}
          </div>

          <div className="estimate-bar">
            <div>
              <small>Estimation indicative</small>
              <strong>{money.format(estimate)}{category.billing === 'monthly' ? ' / mois' : ''}</strong>
            </div>
            <button className="button button--primary" type="button" onClick={addCurrent}>
              <ShoppingBag size={17} aria-hidden="true" /> Ajouter
            </button>
          </div>
          {category.note && <p className="fine-print">{category.note}</p>}
          {message && <p className="config-message" role="status">{message}</p>}
        </div>

        <aside className="quote-cart" data-reveal aria-label="Votre demande">
          <div className="quote-cart__heading">
            <div><ShoppingBag size={19} aria-hidden="true" /><h3>Votre demande</h3></div>
            {items.length > 0 && <button type="button" onClick={clearItems}>Tout effacer</button>}
          </div>
          {items.length === 0 ? (
            <div className="empty-cart"><span>0</span><p>Ajoutez une ou plusieurs prestations pour préparer votre devis.</p></div>
          ) : (
            <>
              <div className="cart-items">
                {items.map((item) => (
                  <article className="cart-item" key={item.id}>
                    <div>
                      <h4>{item.category}</h4>
                      <p>{Object.values(item.selections).flat().join(' · ')}</p>
                    </div>
                    <strong>{money.format(item.price)}{item.billing === 'monthly' ? '/mois' : ''}</strong>
                    <button type="button" aria-label={`Supprimer ${item.category}`} onClick={() => removeItem(item.id)}>
                      <Trash2 size={16} aria-hidden="true" />
                    </button>
                  </article>
                ))}
              </div>
              <div className="cart-total">
                <span>Total estimé</span>
                <strong>
                  {totals.oneTime > 0 && money.format(totals.oneTime)}
                  {totals.oneTime > 0 && totals.monthly > 0 && ' + '}
                  {totals.monthly > 0 && `${money.format(totals.monthly)} / mois`}
                </strong>
              </div>
              <a className="button button--primary" href="#contact">Envoyer ma demande</a>
            </>
          )}
          <p className="fine-print">Prix indicatifs, hors matériel, licences et frais éventuels de déplacement. Le devis final est confirmé avant intervention.</p>
        </aside>
      </div>
    </SectionShell>
  );
};

import { ArrowRight, Check, Minus, Plus } from 'lucide-react';
import { useMemo, useState } from 'react';

const options = [
  { name: 'Diagnostic PC', category: 'Assistance', price: 30 },
  { name: 'Installation ou configuration', category: 'Assistance', price: 50 },
  { name: 'Optimisation et sauvegarde', category: 'Assistance', price: 70 },
  { name: 'Site vitrine', category: 'Site web', price: 290 },
  { name: 'Automatisation Excel', category: 'Sur mesure', price: 100 },
  { name: 'Installation connectée', category: 'Maison', price: 100 },
];

export const EstimatorSection = () => {
  const [selected, setSelected] = useState<string[]>([]);
  const total = useMemo(() => options.filter((item) => selected.includes(item.name)).reduce((sum, item) => sum + item.price, 0), [selected]);
  const toggle = (name: string) => setSelected((items) => items.includes(name) ? items.filter((item) => item !== name) : [...items, name]);

  return (
    <section className="estimator" id="estimation" aria-labelledby="estimator-title">
      <div className="estimator__intro">
        <p className="eyebrow">Estimation gratuite</p>
        <h2 id="estimator-title">Composez votre demande en quelques clics.</h2>
        <p>Ajoutez une ou plusieurs prestations. Aucun paiement n’est demandé sur le site.</p>
        <div className="step-line"><span className="is-active">1</span><i /><span>2</span><i /><span>3</span></div>
      </div>
      <div className="estimator__layout">
        <div className="estimator__options">
          <div className="panel-title"><span>01</span><div><strong>Choisissez vos prestations</strong><small>Vous pouvez en sélectionner plusieurs</small></div></div>
          <div className="option-grid">
            {options.map((option) => {
              const active = selected.includes(option.name);
              return <button className={`estimate-option ${active ? 'is-selected' : ''}`} type="button" onClick={() => toggle(option.name)} key={option.name} aria-pressed={active}>
                <span><small>{option.category}</small><strong>{option.name}</strong><em>Dès {option.price} €</em></span>
                <i>{active ? <Check size={17} /> : <Plus size={17} />}</i>
              </button>;
            })}
          </div>
        </div>
        <aside className="summary">
          <p className="eyebrow">Récapitulatif</p><h3>Ma demande</h3>
          <div className="summary__items">
            {selected.length === 0 ? <p>Sélectionnez une prestation pour commencer.</p> : selected.map((name) => <button type="button" onClick={() => toggle(name)} key={name}>{name}<Minus size={15} /></button>)}
          </div>
          <div className="summary__total"><span>Total estimé</span><strong>{total} €</strong></div>
          <p className="summary__note">Le tarif final est confirmé après échange selon le matériel, la distance et la difficulté.</p>
          <a className={`button button--light ${selected.length === 0 ? 'is-disabled' : ''}`} href={selected.length ? '#contact' : '#estimation'}>Recevoir mon devis <ArrowRight size={17} /></a>
        </aside>
      </div>
    </section>
  );
};

import { CheckCircle2, Copy, Mail, MapPin, Phone, Send } from 'lucide-react';
import { useMemo, useState } from 'react';
import type { FormEvent } from 'react';
import { contactDetails } from '../../config/businessContent';
import { useQuoteCart } from '../../context/QuoteCartContext';
import { useRevealAnimations } from '../../hooks/useRevealAnimations';
import { SectionShell } from './SectionShell';

const phoneHref = `tel:${contactDetails.phone.replace(/\s/g, '')}`;

export const ContactSection = () => {
  const { items, clearItems } = useQuoteCart();
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [copied, setCopied] = useState('');
  useRevealAnimations();

  const summary = useMemo(() => items.map((item, index) => {
    const choices = Object.entries(item.selections).map(([key, values]) => `${key}: ${values.join(', ')}`).join(' | ');
    return `${index + 1}. ${item.category} — ${item.price} €${item.billing === 'monthly' ? '/mois' : ''} — ${choices}`;
  }).join('\n'), [items]);

  const copy = async (value: string, label: string) => {
    await navigator.clipboard.writeText(value);
    setCopied(label);
    window.setTimeout(() => setCopied(''), 1800);
  };

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!items.length) {
      setStatus('error');
      document.querySelector('#configurateur')?.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    setStatus('sending');
    const form = event.currentTarget;
    try {
      const response = await fetch(contactDetails.formEndpoint, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });
      if (!response.ok) throw new Error('Formulaire refusé');
      form.reset();
      clearItems();
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  };

  return (
    <SectionShell id="contact" className="business-section contact-section">
      <div className="section-heading" data-reveal>
        <p className="eyebrow">Demande de devis</p>
        <h2>Parlons de votre projet.</h2>
        <p>Envoyez votre sélection et vos coordonnées. Vous recevrez une réponse avec les prochaines étapes, sans engagement.</p>
      </div>

      <div className="contact-layout">
        <aside className="contact-methods" data-reveal>
          <a className="contact-method" href={phoneHref}>
            <Phone aria-hidden="true" /><div><small>Téléphone</small><strong>{contactDetails.phone}</strong></div>
          </a>
          <button className="contact-copy" type="button" onClick={() => copy(contactDetails.phone, 'Téléphone')} aria-label="Copier le numéro">
            <Copy size={16} aria-hidden="true" />
          </button>
          <a className="contact-method" href={`mailto:${contactDetails.email}`}>
            <Mail aria-hidden="true" /><div><small>E-mail</small><strong>{contactDetails.email}</strong></div>
          </a>
          <button className="contact-copy" type="button" onClick={() => copy(contactDetails.email, 'E-mail')} aria-label="Copier l’adresse e-mail">
            <Copy size={16} aria-hidden="true" />
          </button>
          <div className="contact-method contact-method--static">
            <MapPin aria-hidden="true" /><div><small>Zone d’intervention</small><strong>{contactDetails.area}</strong></div>
          </div>
          {copied && <p className="copied-message" role="status">{copied} copié</p>}
          <div className="contact-note">
            <CheckCircle2 size={18} aria-hidden="true" />
            <p>Devis gratuit · Aucun paiement sur le site · Réponse personnalisée</p>
          </div>
        </aside>

        <form className="quote-form" onSubmit={submit} data-reveal>
          <div className="form-grid">
            <label>Prénom *<input name="prenom" autoComplete="given-name" required /></label>
            <label>Nom<input name="nom" autoComplete="family-name" /></label>
            <label>E-mail *<input name="email" type="email" autoComplete="email" required /></label>
            <label>Téléphone *<input name="telephone" type="tel" autoComplete="tel" required /></label>
            <label className="form-span">Ville *<input name="ville" autoComplete="address-level2" required /></label>
            <label className="form-span">Votre message<textarea name="message" rows={5} placeholder="Précisez les délais, le matériel concerné ou toute information utile." /></label>
          </div>
          <input type="hidden" name="recapitulatif_panier" value={summary} />
          <input type="hidden" name="_subject" value="Nouvelle demande de devis OrellanaTech" />
          <label className="consent"><input type="checkbox" required /> J’accepte que mes informations soient utilisées uniquement pour répondre à ma demande.</label>
          <div className="form-cart-summary">
            <span>{items.length} prestation{items.length > 1 ? 's' : ''} jointe{items.length > 1 ? 's' : ''}</span>
            <a href="#configurateur">Modifier la sélection</a>
          </div>
          <button className="button button--primary form-submit" type="submit" disabled={status === 'sending'}>
            <Send size={17} aria-hidden="true" />{status === 'sending' ? 'Envoi…' : 'Envoyer la demande'}
          </button>
          {status === 'sent' && <p className="form-status success" role="status">Merci, votre demande a bien été envoyée.</p>}
          {status === 'error' && <p className="form-status error" role="alert">Ajoutez au moins une prestation et vérifiez les champs. Si le problème continue, contactez-moi par e-mail.</p>}
        </form>
      </div>
    </SectionShell>
  );
};

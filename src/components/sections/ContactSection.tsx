import { ArrowRight, CheckCircle2, Mail, Phone } from 'lucide-react';
import { FormEvent, useState } from 'react';
import { siteContent } from '../../config/siteContent';

export const ContactSection = () => {
  const [sent, setSent] = useState(false);
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Demande OrellanaTech — ${data.get('need')}`);
    const body = encodeURIComponent(`Prénom : ${data.get('firstname')}\nContact : ${data.get('contact')}\nBesoin : ${data.get('need')}\n\n${data.get('message')}`);
    window.location.href = `mailto:${siteContent.contactEmail}?subject=${subject}&body=${body}`;
    setSent(true);
  };
  return <section className="contact" id="contact" aria-labelledby="contact-title">
    <div className="contact__intro">
      <p className="eyebrow">Contact</p><h2 id="contact-title">Parlons de votre projet.</h2>
      <p>Expliquez-moi simplement votre besoin. Je vous réponds avec une première estimation claire.</p>
      <div className="contact__details"><a href={`tel:${siteContent.phone.replaceAll(' ', '')}`}><Phone size={18} />{siteContent.phone}</a><a href={`mailto:${siteContent.contactEmail}`}><Mail size={18} />{siteContent.contactEmail}</a></div>
      <p className="contact__trust"><CheckCircle2 size={17} /> Réponse sous 24 h · Devis gratuit</p>
    </div>
    <form className="contact-form" onSubmit={submit}>
      <div className="field-row"><label>Prénom<input name="firstname" required autoComplete="given-name" /></label><label>Email ou téléphone<input name="contact" required autoComplete="email" /></label></div>
      <label>Type de besoin<select name="need" required defaultValue=""><option value="" disabled>Choisir un service</option><option>Assistance informatique</option><option>Site web</option><option>Logiciel sur mesure</option><option>Maison connectée</option><option>Autre demande</option></select></label>
      <label>Votre message<textarea name="message" required rows={5} placeholder="Décrivez votre besoin, votre matériel ou vos contraintes…" /></label>
      <button className="button button--light" type="submit">{sent ? 'Messagerie ouverte' : 'Envoyer ma demande'} <ArrowRight size={17} /></button>
      <small>Aucun paiement en ligne. Vos informations servent uniquement à répondre à votre demande.</small>
    </form>
  </section>;
};

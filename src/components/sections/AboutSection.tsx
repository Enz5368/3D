import { BriefcaseBusiness, HeartHandshake, MapPin, UserRound } from 'lucide-react';
import { contactDetails } from '../../config/businessContent';
import { useRevealAnimations } from '../../hooks/useRevealAnimations';
import { SectionShell } from './SectionShell';

export const AboutSection = () => {
  useRevealAnimations();

  return (
    <SectionShell id="a-propos" className="business-section">
      <div className="about-layout">
        <div className="copy-panel copy-panel--wide" data-reveal>
          <p className="eyebrow">À propos</p>
          <h2>Un service de proximité, pensé autour de votre usage.</h2>
          <p>Je m’appelle {contactDetails.name}. J’accompagne les particuliers, indépendants et petites structures sur leurs besoins informatiques et numériques, de la réparation d’un ordinateur à la création d’un outil web complet.</p>
          <p>Mon objectif : comprendre votre situation, proposer uniquement ce qui est utile et vous laisser avec une solution claire que vous savez utiliser.</p>
          <div className="about-signature">
            <span>OrellanaTech</span>
            <small>SIREN {contactDetails.siren}</small>
          </div>
        </div>
        <div className="about-values" data-reveal>
          <article><UserRound aria-hidden="true" /><h3>Un interlocuteur unique</h3><p>Vous échangez directement avec la personne qui réalise la prestation.</p></article>
          <article><MapPin aria-hidden="true" /><h3>Autour de Grenoble</h3><p>Déplacement local ou accompagnement à distance selon le besoin.</p></article>
          <article><BriefcaseBusiness aria-hidden="true" /><h3>Particuliers & professionnels</h3><p>Des prestations dimensionnées pour chaque situation.</p></article>
          <article><HeartHandshake aria-hidden="true" /><h3>Suivi humain</h3><p>Des explications simples et un accompagnement après la livraison.</p></article>
        </div>
      </div>
    </SectionShell>
  );
};

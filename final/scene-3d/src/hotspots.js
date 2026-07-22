// hotspots.js — données des 7 hotspots + projection 2D + fenêtres de scroll.
// Chaque hotspot : une ancre 3D (Object3D de objects.js), une plaque HTML overlay
// (réticule + fiche signalétique, PAS une bulle arrondie), et une fenêtre de scroll
// [in, hold, out] pendant laquelle il apparaît/tient/disparaît (mode scrollytelling).
import * as THREE from 'three';

// ——————— CONTENU ÉDITABLE ———————
// key      : correspond à une ancre retournée par buildPlaceholders()
// title    : titre de la fiche (Rajdhani, orange)
// text     : une ligne descriptive
// href     : lien "en savoir plus" (ancre du site à l'intégration)
// offset   : décalage de l'ancre en mètres (pour viser le bon point de l'objet)
// side     : 'left' | 'right' — de quel côté la fiche se déploie
// scroll   : [début, plein, fin] en progression 0..1 de la séquence
export const HOTSPOTS = [
  {
    key: 'domotique', title: 'DOMOTIQUE LÉGÈRE',
    text: 'Lampes, prises et volets pilotés depuis le téléphone.',
    href: '#configurateur', offset: [0, 0.24, 0], side: 'left', scroll: [0.05, 0.12, 0.34],
  },
  {
    key: 'portable', title: 'RÉPARATION & OPTIMISATION',
    text: 'PC et Mac : diagnostic, système lent, Windows, macOS.',
    href: '#configurateur', offset: [0, 0.12, 0], side: 'left', scroll: [0.14, 0.22, 0.42],
  },
  {
    key: 'ecran', title: 'SITE WEB & PORTAIL',
    text: 'Site personnalisé avec formulaire, portail pédagogique privé.',
    href: '#configurateur', offset: [0, 0.16, 0], side: 'right', scroll: [0.24, 0.34, 0.55],
  },
  {
    key: 'tour', title: 'MONTAGE & SETUP',
    text: 'Montage PC sur mesure, setup gaming, logiciels sur mesure.',
    href: '#configurateur', offset: [0, 0.24, 0], side: 'right', scroll: [0.40, 0.50, 0.68],
  },
  {
    key: 'nas', title: 'SAUVEGARDE & STOCKAGE',
    text: 'NAS, cloud privé à domicile, sauvegarde de vos données.',
    href: '#configurateur', offset: [0, 0.14, 0], side: 'right', scroll: [0.52, 0.62, 0.80],
  },
  {
    key: 'telephone', title: "REMPLACEMENT D'ÉCRAN",
    text: 'Écran cassé remplacé, test tactile et affichage.',
    href: '#configurateur', offset: [0, 0.02, 0], side: 'left', scroll: [0.58, 0.68, 0.86],
  },
  {
    key: 'cartes', title: 'CARTES DE VISITE & DESIGN',
    text: 'Design personnalisé, format, finition et quantité au choix.',
    href: '#configurateur', offset: [0, 0.03, 0], side: 'left', scroll: [0.66, 0.78, 0.95],
  },
];

// Crée les éléments DOM des plaques dans le conteneur donné.
export function createHotspotDOM(container) {
  return HOTSPOTS.map((h) => {
    const el = document.createElement('div');
    el.className = 'hotspot hs-' + h.side;
    el.innerHTML = `
      <span class="hs-reticle" aria-hidden="true"></span>
      <span class="hs-leader" aria-hidden="true"></span>
      <a class="hs-plate" href="${h.href}" tabindex="-1">
        <span class="hs-title">${h.title}</span>
      </a>`;
    container.appendChild(el);
    return { def: h, el, plate: el.querySelector('.hs-plate') };
  });
}

// Projection : place chaque plaque à l'écran selon la position 3D de son ancre.
// visibility() décide de l'opacité/état :
//  - mode scrollytelling : selon la fenêtre de scroll (progress)
//  - mode libre : selon que l'objet est devant la caméra et non occulté (raycast)
const _v = new THREE.Vector3();

export function createProjector(anchors, hotspots, camera, canvas) {
  function worldPos(h) {
    const anchor = anchors[h.def.key];
    anchor.getWorldPosition(_v);
    _v.x += h.def.offset[0]; _v.y += h.def.offset[1]; _v.z += h.def.offset[2];
    return _v;
  }

  // opacité 0..1 selon la fenêtre de scroll [in, hold, out]
  function scrollOpacity(def, p) {
    const [a, b, c] = def.scroll;
    if (p < a || p > c) return 0;
    if (p < b) return (p - a) / Math.max(1e-4, b - a);      // fondu d'entrée
    if (p <= c - (b - a)) return 1;                          // plateau
    return (c - p) / Math.max(1e-4, c - (c - (b - a)));      // fondu de sortie
  }

  return {
    // progress: 0..1
    // opts.showAll : reduced-motion -> toutes les plaques visibles à leur position
    // opts.mobile  : une seule plaque, la plus active, épinglée en bas d'écran
    update(progress, { showAll = false, mobile = false } = {}) {
      const w = canvas.clientWidth, h = canvas.clientHeight;

      // — Mode mobile : un seul hotspot (le plus actif) en bas d'écran —
      if (mobile) {
        let best = null, bestOp = 0;
        for (const hs of hotspots) {
          const op = scrollOpacity(hs.def, progress);
          if (op > bestOp) { bestOp = op; best = hs; }
        }
        for (const hs of hotspots) {
          const active = hs === best && bestOp > 0.05;
          hs.el.classList.toggle('hs-mobile-active', active);
          hs.el.style.opacity = active ? '1' : '0';
          hs.el.style.display = active ? '' : 'none';
          hs.el.style.transform = '';
          hs.el.style.pointerEvents = active ? 'auto' : 'none';
          hs.plate.tabIndex = active ? 0 : -1;
        }
        return;
      }

      // — Desktop : projection 2D collée aux objets —
      for (const hs of hotspots) {
        const wp = worldPos(hs).clone();
        const proj = wp.clone().project(camera);
        const onScreen = proj.z < 1 && Math.abs(proj.x) < 1.15 && Math.abs(proj.y) < 1.15;
        const opacity = onScreen ? (showAll ? 1 : scrollOpacity(hs.def, progress)) : 0;

        hs.el.style.opacity = opacity.toFixed(3);
        hs.el.style.pointerEvents = opacity > 0.6 ? 'auto' : 'none';
        hs.plate.tabIndex = opacity > 0.6 ? 0 : -1;
        if (opacity > 0.001) {
          const sx = (proj.x * 0.5 + 0.5) * w;
          const sy = (-proj.y * 0.5 + 0.5) * h;
          hs.el.style.transform = `translate(${sx.toFixed(1)}px, ${sy.toFixed(1)}px)`;
          hs.el.style.display = '';
        } else {
          hs.el.style.display = 'none';
        }
      }
    },
  };
}

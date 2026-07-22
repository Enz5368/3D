// main.js — bootstrap, LoadingManager, Lenis + ScrollTrigger, caméra scrubbée.
// BOUCLE UNIQUE : le ticker GSAP est la seule boucle rAF ; Lenis ET le rendu
// Three.js y sont branchés. Rendu à la demande (dirty flag).
// Gère : WebGL indisponible (fallback HTML), prefers-reduced-motion (vue finale
// figée + tous les hotspots), profil mobile (<768px : qualité réduite, 1 hotspot).
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { createScene } from './scene.js';
import { buildPlaceholders } from './objects.js';
import { createCameraPath } from './camera-path.js';
import { createHotspotDOM, createProjector } from './hotspots.js';

const canvas = document.getElementById('scene-canvas');
const loaderEl = document.getElementById('loader3d');
const pctEl = document.getElementById('load-pct');
const arcEl = document.getElementById('load-arc');
const needleEl = document.getElementById('ruler-needle');
const ARC_LEN = 439.8;

// ——————— Détection d'environnement ———————
const REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const MOBILE = window.matchMedia('(max-width: 768px)').matches;

function showFallback() {
  document.getElementById('stage3d')?.classList.add('no-webgl');
  loaderEl.classList.add('done');
  document.getElementById('webgl-fallback')?.removeAttribute('hidden');
}

// On ne crée PAS de contexte WebGL de test (ça épuise la limite de contextes du
// navigateur quand on recharge). On tente directement le vrai renderer : s'il
// échoue, on bascule sur le fallback HTML.
try {
  boot();
} catch (err) {
  console.error('[scene-3d] WebGL indisponible ou erreur d\'init :', err);
  showFallback();
}

function boot() {
  gsap.registerPlugin(ScrollTrigger);

  // — Chargement réel (les .glb s'ajouteront au même manager) —
  const manager = new THREE.LoadingManager();
  manager.onProgress = (_url, loaded, total) => {
    const p = total ? loaded / total : 1;
    pctEl.textContent = Math.round(p * 100);
    arcEl.style.strokeDashoffset = ARC_LEN * (1 - p);
  };
  manager.onLoad = () => {
    pctEl.textContent = '100';
    arcEl.style.strokeDashoffset = 0;
    setTimeout(() => loaderEl.classList.add('done'), 250);
    needsRender = true;
  };
  manager.onError = () => { loaderEl.classList.add('done'); };

  // Qualité selon le profil (mobile : pas d'ombres, pixelRatio 1)
  const { renderer, scene, camera } = createScene(canvas, manager, {
    pixelRatioCap: MOBILE ? 1 : 2,
    shadows: !MOBILE,
    lowPower: MOBILE,
  });

  let needsRender = true;
  let progress = REDUCED ? 1 : 0; // reduced-motion : on démarre sur la vue finale

  const anchors = buildPlaceholders(scene, manager, () => { needsRender = true; });
  const path = createCameraPath();

  // — Hotspots : DOM + projecteur 2D —
  const hotspotLayer = document.getElementById('hotspot-layer');
  const hotspots = createHotspotDOM(hotspotLayer);
  const projector = createProjector(anchors, hotspots, camera, canvas);
  if (MOBILE) document.getElementById('stage3d')?.classList.add('is-mobile');

  function resize() {
    const w = canvas.clientWidth, h = canvas.clientHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    needsRender = true;
  }

  function renderNow() {
    path.apply(camera, progress);
    renderer.render(scene, camera);
    projector.update(progress, { showAll: REDUCED, mobile: MOBILE && !REDUCED });
  }

  // ————————————————————————————————————————————————
  // CAS 1 — prefers-reduced-motion : pas de pin, pas de scrub.
  // Vue finale figée, toutes les plaques visibles. Ni ScrollTrigger ni Lenis.
  // ————————————————————————————————————————————————
  if (REDUCED) {
    document.body.classList.add('reduced');
    resize();
    renderNow();
    loaderEl.classList.add('done');
    window.addEventListener('resize', () => { resize(); renderNow(); });
    return;
  }

  // ————————————————————————————————————————————————
  // CAS 2 — normal : Lenis + ScrollTrigger, boucle rAF unique (ticker GSAP).
  // ————————————————————————————————————————————————
  const lenis = new Lenis({ smoothWheel: true, lerp: 0.11 });
  lenis.on('scroll', ScrollTrigger.update);

  let firstFrame = true;
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
    if (needsRender) {
      renderNow();
      needsRender = false;
      if (firstFrame) { firstFrame = false; loaderEl.classList.add('done'); }
    }
  });
  gsap.ticker.lagSmoothing(0);

  ScrollTrigger.create({
    trigger: '#scroll-track',
    start: 'top top',
    end: 'bottom bottom',
    scrub: MOBILE ? 0.4 : 0.8,
    onUpdate: (self) => {
      progress = self.progress;
      needsRender = true;
      if (needleEl) needleEl.style.left = (self.progress * 100).toFixed(2) + '%';
    },
  });

  window.addEventListener('resize', () => { resize(); ScrollTrigger.refresh(); });
  resize();
  path.apply(camera, 0);
}

// objects.js — PLACEHOLDERS haute qualité (arêtes arrondies, détails, PBR) posés
// dans un studio blanc infini. Pas de pièce : seul le bureau et ses objets existent,
// avec des ombres douces portées sur le blanc.
// C'est CE fichier que tu remplaceras objet par objet par tes .glb : chaque build*()
// retourne un Group — remplace son contenu en gardant position/échelle, les ancres
// hotspots continueront de fonctionner.
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';

// ——————— MODÈLES .glb OPTIONNELS ———————
// Dépose tes fichiers dans scene-3d/assets/models/ avec ces noms exacts, et ils
// remplaceront automatiquement le placeholder correspondant (même position/échelle,
// mêmes ancres hotspots). Laisse null/absent = placeholder primitif conservé.
// Chaque entrée : { url, scale, rotY, yOffset } — ajuste scale/rotY/yOffset au besoin.
export const MODELS = {
  monitor:  { url: 'assets/models/monitor.glb',  scale: 1, rotY: 0, yOffset: 0 },
  laptop:   { url: 'assets/models/laptop.glb',   scale: 1, rotY: 0, yOffset: 0 },
  lamp:     { url: 'assets/models/lamp.glb',     scale: 1, rotY: 0, yOffset: 0 },
  phone:    { url: 'assets/models/phone.glb',    scale: 1, rotY: 0, yOffset: 0 },
  tower:    { url: 'assets/models/tower.glb',    scale: 1, rotY: 0, yOffset: 0 },
  nas:      { url: 'assets/models/nas.glb',      scale: 1, rotY: 0, yOffset: 0 },
};

// ——————— DIMENSIONS & POSITIONS ÉDITABLES (mètres) ———————
export const LAYOUT = {
  desk:     { w: 3.0, d: 0.9, topY: 0.74, t: 0.05, z: -2.0 },
  monitor:  { x: 0, r: 1.9, arc: 0.42, h: 0.44 },              // écran légèrement incurvé, centré
  laptop:   { x: -1.05, z: 0.12, rotY: 0.5 },
  lamp:     { x: -0.55, z: -0.2 },                             // lampe champignon (ancre domotique)
  cube:     { x: -0.4, z: 0.1 },                               // prise connectée
  cards:    { x: -0.68, z: 0.28 },
  keyboard: { x: 0, z: 0.22 },
  mouse:    { x: 0.46, z: 0.24 },
  phone:    { x: 0.8, z: 0.14 },
  tower:    { x: 1.1, w: 0.22, h: 0.46, d: 0.42 },             // sur le bureau, à droite
  nas:      { x: 1.42, w: 0.16, h: 0.22, d: 0.2 },
};

// Texture d'écran générée : vagues bleutées façon visuel produit
function makeScreenTexture() {
  const c = document.createElement('canvas');
  c.width = 1024; c.height = 512;
  const x = c.getContext('2d');
  const bg = x.createLinearGradient(0, 0, 1024, 512);
  bg.addColorStop(0, '#08242e');
  bg.addColorStop(0.5, '#0e3d4b');
  bg.addColorStop(1, '#051a21');
  x.fillStyle = bg;
  x.fillRect(0, 0, 1024, 512);
  for (let i = 0; i < 6; i++) {
    const y0 = 110 + i * 58;
    const g = x.createLinearGradient(0, y0 - 90, 0, y0 + 130);
    g.addColorStop(0, 'rgba(140,210,228,0)');
    g.addColorStop(0.5, `rgba(${95 + i * 14},${182 + i * 8},210,${0.16 + i * 0.045})`);
    g.addColorStop(1, 'rgba(8,38,48,0)');
    x.fillStyle = g;
    x.beginPath();
    x.moveTo(0, y0);
    x.bezierCurveTo(300, y0 - 150 + i * 22, 720, y0 + 130 - i * 26, 1024, y0 - 70);
    x.lineTo(1024, 512);
    x.lineTo(0, 512);
    x.closePath();
    x.fill();
  }
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}
const screenTex = makeScreenTexture();

// Matériaux PBR
const M = {
  walnut: new THREE.MeshStandardMaterial({ color: 0x5e4630, roughness: 0.42, metalness: 0.05 }),
  legs:   new THREE.MeshStandardMaterial({ color: 0x1e1f21, roughness: 0.45, metalness: 0.3 }),
  alu:    new THREE.MeshStandardMaterial({ color: 0xb9bcbf, roughness: 0.28, metalness: 0.9 }),
  aluDark:new THREE.MeshStandardMaterial({ color: 0x7e8286, roughness: 0.32, metalness: 0.85 }),
  dark:   new THREE.MeshStandardMaterial({ color: 0x212225, roughness: 0.4, metalness: 0.2 }),
  keycap: new THREE.MeshStandardMaterial({ color: 0x2b2c2f, roughness: 0.6 }),
  screen: new THREE.MeshStandardMaterial({ map: screenTex, emissive: 0xffffff, emissiveMap: screenTex, emissiveIntensity: 0.8, roughness: 0.12, side: THREE.DoubleSide }),
  glass:  new THREE.MeshPhysicalMaterial({ color: 0xdfeef5, roughness: 0.04, metalness: 0, transparent: true, opacity: 0.16, clearcoat: 1 }),
  accent: new THREE.MeshStandardMaterial({ color: 0xe8551f, roughness: 0.45 }),
  paper:  new THREE.MeshStandardMaterial({ color: 0xf5f3ec, roughness: 0.85 }),
  pcbGrn: new THREE.MeshStandardMaterial({ color: 0x2c3e2e, roughness: 0.55 }),
};

function rbox(w, h, d, mat, x = 0, y = 0, z = 0, r = 0.008) {
  const m = new THREE.Mesh(new RoundedBoxGeometry(w, h, d, 3, Math.min(r, w / 2, h / 2, d / 2)), mat);
  m.position.set(x, y, z);
  m.castShadow = true;
  m.receiveShadow = true;
  return m;
}

// ——————— Sol invisible : ne montre QUE les ombres (blanc infini) ———————
function buildGround() {
  const g = new THREE.Mesh(
    new THREE.CircleGeometry(30, 48),
    new THREE.ShadowMaterial({ opacity: 0.13 })
  );
  g.rotation.x = -Math.PI / 2;
  g.position.y = 0;
  g.receiveShadow = true;
  return g;
}

// ——————— Bureau noyer, pieds panneau ———————
function buildDesk() {
  const g = new THREE.Group();
  const D = LAYOUT.desk;
  g.add(rbox(D.w, D.t, D.d, M.walnut, 0, D.topY - D.t / 2, 0, 0.012));
  const legH = D.topY - D.t;
  for (const sx of [-1, 1]) {
    g.add(rbox(0.06, legH, D.d - 0.14, M.legs, sx * (D.w / 2 - 0.1), legH / 2, 0, 0.01));
  }
  g.position.z = D.z;
  return g;
}

function onDesk(group, x, zOffset) {
  group.position.set(x, LAYOUT.desk.topY, LAYOUT.desk.z + zOffset);
}

// ——————— Écran incurvé : dalle émissive + coque arrière + pied alu ———————
function buildMonitor() {
  const g = new THREE.Group();
  const Mo = LAYOUT.monitor;
  const mkArc = (r, h, arc, mat) => {
    const mesh = new THREE.Mesh(new THREE.CylinderGeometry(r, r, h, 64, 1, true, Math.PI - arc / 2, arc), mat);
    mesh.position.z = Mo.r;
    mesh.castShadow = true;
    return mesh;
  };
  g.add(mkArc(Mo.r + 0.012, Mo.h + 0.02, Mo.arc + 0.012, M.dark)); // coque
  g.add(mkArc(Mo.r, Mo.h, Mo.arc, M.screen));                      // dalle
  // pied colonne + socle plat alu
  g.add(rbox(0.05, 0.14, 0.05, M.alu, 0, -0.29, 0.05, 0.006));
  g.add(rbox(0.32, 0.012, 0.21, M.alu, 0, -0.351, 0.07, 0.005));
  g.position.set(Mo.x, LAYOUT.desk.topY + 0.36, LAYOUT.desk.z - 0.16);
  return g;
}

// ——————— PC portable ouvert ———————
function buildLaptop() {
  const g = new THREE.Group();
  const base = rbox(0.32, 0.016, 0.22, M.alu, 0, 0.008, 0, 0.006);
  g.add(base);
  // clavier du portable (plaque sombre)
  g.add(rbox(0.28, 0.003, 0.11, M.dark, 0, 0.017, -0.035, 0.002));
  // trackpad
  g.add(rbox(0.11, 0.002, 0.07, M.aluDark, 0, 0.017, 0.065, 0.002));
  const lid = new THREE.Group();
  lid.position.set(0, 0.014, -0.11);
  lid.add(rbox(0.32, 0.01, 0.21, M.alu, 0, 0, -0.105, 0.006));
  lid.add(rbox(0.30, 0.002, 0.19, M.screen, 0, 0.007, -0.105, 0.002));
  lid.rotation.x = THREE.MathUtils.degToRad(102);
  g.add(lid);
  onDesk(g, LAYOUT.laptop.x, LAYOUT.laptop.z);
  g.rotation.y = LAYOUT.laptop.rotY;
  return g;
}

// ——————— Lampe champignon (ancre domotique) ———————
function buildLamp() {
  const g = new THREE.Group();
  const foot = new THREE.Mesh(new THREE.CylinderGeometry(0.028, 0.05, 0.02, 32), M.alu);
  foot.position.y = 0.01;
  const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.016, 0.02, 0.2, 24), M.alu);
  stem.position.y = 0.11;
  const cap = new THREE.Mesh(new THREE.SphereGeometry(0.105, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2), M.alu);
  cap.position.y = 0.21;
  [foot, stem, cap].forEach(m => { m.castShadow = true; g.add(m); });
  const bulb = new THREE.PointLight(0xffe6c0, 0.3, 1.1);
  bulb.position.y = 0.18;
  g.add(bulb);
  onDesk(g, LAYOUT.lamp.x, LAYOUT.lamp.z);
  return g;
}

// ——————— Prise connectée (petit cube blanc) ———————
function buildCube() {
  const g = new THREE.Group();
  g.add(rbox(0.07, 0.07, 0.07, M.paper, 0, 0.035, 0, 0.014));
  onDesk(g, LAYOUT.cube.x, LAYOUT.cube.z);
  g.rotation.y = 0.3;
  return g;
}

// ——————— Cartes de visite ———————
function buildCards() {
  const g = new THREE.Group();
  for (let i = 0; i < 6; i++) {
    const c = rbox(0.09, 0.0035, 0.055, i === 5 ? M.accent : M.paper,
      (Math.random() - 0.5) * 0.005, 0.0018 + i * 0.0036, (Math.random() - 0.5) * 0.005, 0.001);
    c.rotation.y = (Math.random() - 0.5) * 0.22;
    g.add(c);
  }
  onDesk(g, LAYOUT.cards.x, LAYOUT.cards.z);
  return g;
}

// ——————— Clavier à touches + souris ———————
function buildKeyboard() {
  const g = new THREE.Group();
  g.add(rbox(0.44, 0.014, 0.15, M.aluDark, 0, 0.007, 0, 0.006));
  const key = new RoundedBoxGeometry(0.024, 0.006, 0.024, 2, 0.002);
  const rows = 5, cols = 15;
  const inst = new THREE.InstancedMesh(key, M.keycap, rows * cols);
  const mtx = new THREE.Matrix4();
  let n = 0;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      mtx.setPosition(-0.196 + c * 0.028, 0.017, -0.056 + r * 0.028);
      inst.setMatrixAt(n++, mtx);
    }
  }
  inst.castShadow = true;
  g.add(inst);
  onDesk(g, LAYOUT.keyboard.x, LAYOUT.keyboard.z);
  return g;
}

function buildMouse() {
  const g = new THREE.Group();
  const m = new THREE.Mesh(new THREE.SphereGeometry(0.033, 24, 16), M.dark);
  m.scale.set(1, 0.5, 1.55);
  m.position.y = 0.0165;
  m.castShadow = true;
  g.add(m);
  onDesk(g, LAYOUT.mouse.x, LAYOUT.mouse.z);
  return g;
}

// ——————— Smartphone à plat ———————
function buildPhone() {
  const g = new THREE.Group();
  g.add(rbox(0.076, 0.009, 0.16, M.dark, 0, 0.0045, 0, 0.006));
  g.add(rbox(0.068, 0.002, 0.15, M.screen, 0, 0.0095, 0, 0.002));
  g.add(rbox(0.022, 0.003, 0.022, M.aluDark, -0.021, 0.011, -0.06, 0.004)); // bloc caméra
  onDesk(g, LAYOUT.phone.x, LAYOUT.phone.z);
  g.rotation.y = -0.25;
  return g;
}

// ——————— Tour PC : châssis alu, panneau vitré côté centre, composants ———————
function buildTower() {
  const g = new THREE.Group();
  const T = LAYOUT.tower;
  // coque (évidée côté -x par le panneau vitré)
  g.add(rbox(T.w, T.h, T.d, M.alu, 0.012, T.h / 2, 0, 0.012));
  // panneau vitré côté -x (visible depuis le centre)
  const side = rbox(0.004, T.h - 0.03, T.d - 0.03, M.glass, -T.w / 2 + 0.002, T.h / 2, 0, 0.002);
  side.castShadow = false;
  g.add(side);
  // baie intérieure sombre + composants
  g.add(rbox(T.w - 0.05, T.h - 0.04, T.d - 0.04, M.dark, 0.02, T.h / 2, 0, 0.008));
  g.add(rbox(0.012, 0.28, 0.26, M.pcbGrn, 0.04, T.h / 2 + 0.02, -0.02, 0.002));   // carte mère
  g.add(rbox(0.1, 0.035, 0.24, M.dark, -0.02, T.h / 2 - 0.05, 0, 0.004));         // GPU
  g.add(rbox(0.05, 0.05, 0.05, M.alu, -0.01, T.h / 2 + 0.09, -0.05, 0.006));      // CPU cooler
  for (let i = 0; i < 2; i++) {
    const fan = new THREE.Mesh(new THREE.TorusGeometry(0.038, 0.006, 10, 32), M.accent);
    fan.rotation.y = Math.PI / 2;
    fan.position.set(-T.w / 2 + 0.03, T.h - 0.1 - i * 0.1, 0.1);
    g.add(fan);
  }
  const inner = new THREE.PointLight(0xe8551f, 0.35, 0.6);
  inner.position.set(-0.02, T.h / 2, 0);
  g.add(inner);
  onDesk(g, T.x, -0.05);
  return g;
}

// ——————— NAS 2 baies ———————
function buildNAS() {
  const g = new THREE.Group();
  const N = LAYOUT.nas;
  g.add(rbox(N.w, N.h, N.d, M.dark, 0, N.h / 2, 0, 0.01));
  for (let i = 0; i < 2; i++) {
    g.add(rbox(N.w - 0.03, 0.065, 0.006, M.aluDark, 0, 0.045 + i * 0.085, N.d / 2 + 0.002, 0.003));
  }
  g.add(rbox(0.008, 0.008, 0.004, M.accent, N.w / 2 - 0.02, N.h - 0.03, N.d / 2 + 0.003, 0.001)); // LED
  onDesk(g, N.x, -0.08);
  g.rotation.y = -0.15;
  return g;
}

// ——————— Assemblage + ancres de hotspots ———————
export function buildPlaceholders(scene, manager, onReady) {
  const ground = buildGround();
  const desk = buildDesk();
  const monitor = buildMonitor();
  const laptop = buildLaptop();
  const lamp = buildLamp();
  const cube = buildCube();
  const cards = buildCards();
  const keyboard = buildKeyboard();
  const mouse = buildMouse();
  const phone = buildPhone();
  const tower = buildTower();
  const nas = buildNAS();

  scene.add(ground, desk, monitor, laptop, lamp, cube, cards, keyboard, mouse, phone, tower, nas);

  // Chargement optionnel des .glb : remplace le contenu du Group placeholder par le
  // modèle chargé (même Group -> l'ancre hotspot reste valide). Passe `manager`
  // (LoadingManager) pour alimenter la vraie barre de progression, et `onReady`
  // (ex: () => needsRender = true) pour redessiner après un chargement asynchrone.
  const map = { monitor, laptop, lamp, phone, tower, nas };
  loadModels(map, manager, onReady);

  // Ancres pour les 7 hotspots (étape 4) — domotique = lampe + prise connectée
  return {
    domotique: lamp,
    ecran: monitor,
    tour: tower,
    nas,
    telephone: phone,
    cartes: cards,
    portable: laptop,
  };
}

// ——————— Chargement / substitution des .glb ———————
function loadModels(groups, manager, onReady) {
  const entries = Object.entries(MODELS).filter(([key]) => groups[key]);
  if (!entries.length) return;

  const loader = new GLTFLoader(manager);
  const draco = new DRACOLoader(manager);
  draco.setDecoderPath('https://cdn.jsdelivr.net/npm/three@0.170.0/examples/jsm/libs/draco/');
  loader.setDRACOLoader(draco);

  for (const [key, cfg] of entries) {
    if (!cfg || !cfg.url) continue;
    loader.load(
      cfg.url,
      (gltf) => {
        const grp = groups[key];
        // vide le placeholder (garde ses lumières ponctuelles)
        for (let i = grp.children.length - 1; i >= 0; i--) {
          if (!grp.children[i].isLight) grp.remove(grp.children[i]);
        }
        const model = gltf.scene;
        model.traverse((o) => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
        model.scale.setScalar(cfg.scale ?? 1);
        model.rotation.y += cfg.rotY ?? 0;
        model.position.y += cfg.yOffset ?? 0;
        grp.add(model);
        onReady && onReady();
      },
      undefined,
      () => { /* .glb absent : on garde le placeholder, silencieux */ }
    );
  }
}

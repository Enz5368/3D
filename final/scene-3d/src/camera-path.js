// camera-path.js — chemin de caméra du mode scrollytelling.
// ——— POINTS DE CONTRÔLE ÉDITABLES ———
// Chaque entrée : pos = position de la caméra, look = point visé (mètres).
// Ajoute, retire ou déplace des points librement : les deux courbes CatmullRom
// sont reconstruites à partir de cette liste. t=0 (haut de page) → premier point,
// t=1 (fin de la séquence) → dernier point.
import * as THREE from 'three';

export const CAMERA_POINTS = [
  { pos: [-2.9, 2.55,  1.90], look: [ 0.0, 0.80, -2.00] }, // départ : vue plongeante haut-GAUCHE
  { pos: [-1.4, 1.55,  1.55], look: [-0.30, 0.85, -2.00] }, // transition en arc
  { pos: [ 0.0, 1.05,  0.90], look: [ 0.0, 0.85, -2.00] }, // arrivée : EN FACE, tout le bureau
];

export function createCameraPath() {
  const toV3 = (a) => new THREE.Vector3(a[0], a[1], a[2]);
  const posCurve = new THREE.CatmullRomCurve3(CAMERA_POINTS.map(p => toV3(p.pos)), false, 'centripetal');
  const lookCurve = new THREE.CatmullRomCurve3(CAMERA_POINTS.map(p => toV3(p.look)), false, 'centripetal');
  const vp = new THREE.Vector3();
  const vl = new THREE.Vector3();
  return {
    posCurve,
    lookCurve,
    apply(camera, t) {
      const k = THREE.MathUtils.clamp(t, 0, 1);
      posCurve.getPoint(k, vp);
      lookCurve.getPoint(k, vl);
      camera.position.copy(vp);
      camera.lookAt(vl);
    },
  };
}

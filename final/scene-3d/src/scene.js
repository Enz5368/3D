// scene.js — studio « full white » : fond blanc infini, environnement studio
// (RoomEnvironment, aucune dépendance réseau), key light douce + fill.
import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';

export function createScene(canvas, _manager, opts = {}) {
  const { pixelRatioCap = 2, shadows = true } = opts;
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: !opts.lowPower });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, pixelRatioCap));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.12;
  renderer.shadowMap.enabled = shadows;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0xffffff);

  const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 60);
  camera.position.set(0, 1.5, 1.3);

  // Environnement studio intégré (reflets PBR propres sur métaux/verre)
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  if ('environmentIntensity' in scene) scene.environmentIntensity = 0.85;

  // Key light : softbox haut-gauche, ombres très douces
  const key = new THREE.DirectionalLight(0xffffff, 2.4);
  key.position.set(-2.6, 4.6, 2.4);
  key.castShadow = shadows;
  key.shadow.mapSize.set(shadows ? 2048 : 512, shadows ? 2048 : 512);
  key.shadow.camera.near = 1;
  key.shadow.camera.far = 15;
  key.shadow.camera.left = -3;
  key.shadow.camera.right = 3;
  key.shadow.camera.top = 3;
  key.shadow.camera.bottom = -3;
  key.shadow.bias = -0.0003;
  key.shadow.radius = 10;
  scene.add(key);

  const keyTarget = new THREE.Object3D();
  keyTarget.position.set(0, 0.7, -2);
  scene.add(keyTarget);
  key.target = keyTarget;

  // Fill opposé, sans ombre, pour déboucher le côté droit
  const fill = new THREE.DirectionalLight(0xffffff, 0.7);
  fill.position.set(3, 2.2, -0.5);
  scene.add(fill);

  // Rim light arrière : détache les silhouettes du fond blanc (liseré lumineux)
  const rim = new THREE.DirectionalLight(0xffffff, 1.2);
  rim.position.set(0, 2.6, -4.5);
  scene.add(rim);

  const hemi = new THREE.HemisphereLight(0xffffff, 0xe9e9e9, 0.5);
  scene.add(hemi);

  return { renderer, scene, camera };
}

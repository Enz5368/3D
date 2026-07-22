# OrellanaTech — Scène 3D (scrollytelling)

Scène 3D temps réel (Three.js) qui remplace le header + la section Services :
studio blanc infini, bureau et matériel, caméra pilotée au scroll (GSAP ScrollTrigger
+ Lenis), 7 plaques hotspots. **Pas de mode caméra libre** (retiré à ta demande).

## Lancer en local

Les modules ES ne se chargent pas en `file://`. Sers le dossier :

```
cd final/scene-3d
npx serve .          # ou : python -m http.server 8080
```

Puis ouvre http://localhost:3000 (ou :8080).

**Validation rapide sans serveur** : ouvre `preview.html` (version auto-contenue,
régénérée à chaque étape — ne pas éditer, c'est `src/` qui fait foi).

## Fichiers

- `src/scene.js` — renderer, caméra, studio blanc infini (RoomEnvironment), key + fill + rim light
- `src/objects.js` — **placeholders + branchement .glb**. Dimensions/positions dans `LAYOUT`,
  substitution des modèles pilotée par `MODELS` (voir ci-dessous).
- `src/camera-path.js` — points de contrôle CatmullRom éditables (`CAMERA_POINTS`)
- `src/main.js` — boucle rAF unique (ticker GSAP), Lenis + ScrollTrigger, rendu à la demande

## Remplacer les placeholders par tes .glb

Deux façons de fabriquer les modèles :
- **IA (image → 3D)** : nécessite des crédits Higgsfield. Pipeline : image produit du bureau
  full-white → conversion en maillage GLB. (Espace actuellement à 0 crédit.)
- **Tes propres .glb** : Sketchfab, CGTrader, Blender…

Ensuite, dépose les fichiers dans `assets/models/` avec ces noms exacts :

```
assets/models/monitor.glb   laptop.glb   lamp.glb   phone.glb   tower.glb   nas.glb
```

Ils remplacent **automatiquement** le placeholder correspondant (même emplacement, mêmes
ancres hotspots). Si un fichier est absent, le placeholder primitif reste affiché.
Ajuste `scale`, `rotY`, `yOffset` par modèle dans l'objet `MODELS` en tête de `objects.js`.
Le chargement passe par le `LoadingManager` : la barre de progression du loader devient réelle.

## Recaler la courbe caméra

Édite `CAMERA_POINTS` dans `src/camera-path.js` : chaque point = `{ pos, look }` en mètres.
t=0 (haut de page) → 1er point, t=1 (fin de #scroll-track) → dernier point. La durée de la
séquence = hauteur de `#scroll-track` dans `style.css` (actuellement `300vh`).

## Adapter les hotspots

Dans `src/hotspots.js`, tableau `HOTSPOTS` : par entrée, `title`, `href` (ancre du
site), `offset` (recalage du réticule sur l'objet, en mètres), `side` (left/right),
et `scroll: [entrée, plateau, sortie]` en progression 0..1 de la séquence.

## Comportements adaptatifs (déjà en place)

- **prefers-reduced-motion** : aucun scrub, aucun pin ; vue finale figée, toutes les
  plaques affichées.
- **< 768 px** : ombres coupées, pixelRatio 1, une seule plaque à la fois épinglée en
  bas d'écran.
- **WebGL indisponible** : la 3D est masquée, une liste HTML des services s'affiche
  (`#webgl-fallback`).
- Plaques focusables au clavier (Tab), focus visible.

## Brancher dans le site OrellanaTech

L'`index.html` de ce dossier est autonome pour le développement. Pour l'intégrer :

1. Copie le bloc `<div id="scroll-track">…</div>` (avec `#stage3d`, le loader, la
   couche `#hotspot-layer` et le fallback) **à la place** de ton header + section
   Services actuels, tout en haut du `<body>`.
2. Reporte l'`importmap`, les `<link>` polices et `style.css` (préfixe les sélecteurs
   si conflit avec le CSS du site, ou charge-le tel quel : tout est scoppé sous
   `#stage3d` / `#scroll-track` sauf `:root`).
3. Charge `src/main.js` en `<script type="module">`.
4. Fais pointer les `href` des hotspots (`hotspots.js`) vers tes vraies ancres
   (`#configurateur`, pages services…).
5. Le configurateur / à propos / contact restent **inchangés**, sous `#scroll-track`.

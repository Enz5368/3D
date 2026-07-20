# OrellanaTech — site métier avec fond 3D

Le site métier historique OrellanaTech est conservé en HTML, CSS et JavaScript,
avec une scène React/Three.js fixe pilotée par le scroll en arrière-plan.

Adresse de production : `https://orellanatech.monespaceprof.com`

## Commandes locales

```bash
npm ci
npm run dev
npm run lint
npm run build
```

## Structure

- Page principale et contenu métier : `index.html`
- Apparence originale : `public/style.css`
- Configurateur, panier, filtres et interactions : `public/script.js`
- Pages détaillées : `services/`
- Images et logos : `public/assets/`
- Couche d’intégration du fond 3D : `src/styles/legacy-scene.css`
- Chemin caméra 3D : `src/config/cameraPath.ts`
- Réglages de la scène : `src/config/animationConfig.ts`

## Architecture de production

Le build est publie dans un dossier distinct du site principal :

```text
/mnt/DriveMaison/Sites/orellanatech/
|-- releases/
|   `-- COMMIT_GIT/
`-- current -> releases/COMMIT_GIT
```

Le lien `current` est remplace atomiquement lors de chaque deploiement. Nginx ne
sert donc jamais un build partiellement copie.

## Premiere installation sur TrueNAS

1. Creer `/mnt/DriveMaison/Sites/orellanatech` et donner au runner GitHub le droit
   d'y creer des dossiers et des liens symboliques.
2. Dans le depot GitHub `Enz5368/3D`, recreer les cinq secrets Actions deja
   utilises par le site principal : `SSH_PRIVATE_KEY`, `SSH_HOST`, `SSH_USER`,
   `CF_ACCESS_CLIENT_ID` et `CF_ACCESS_CLIENT_SECRET`.
3. Dans Cloudflare, ouvrir `Networking > Tunnels > monespaceprof-nas > Routes`,
   puis ajouter une route `Published application` :
   - sous-domaine : `orellanatech`
   - domaine : `monespaceprof.com`
   - service : `http://192.168.1.30:30081`

Cloudflare cree automatiquement l'entree DNS du tunnel. Aucun port entrant ne doit
etre ouvert sur la box.

## Deploiements suivants

Un push sur `main` lance `.github/workflows/deploy-truenas.yml`. GitHub construit et
controle le projet, puis envoie le build au NAS par SSH via Cloudflare Access. Le NAS
publie la version dans le dataset et lance un Nginx dedie sur le port `30081`. Aucun
clone Git n'est modifie sur le NAS, ce qui evite les conflits de synchronisation.

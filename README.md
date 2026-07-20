# NovaFrame Studio - site 3D immersif

Site statique React/Vite/TypeScript avec scene Three.js pilotee par le scroll.

Adresse de production : `https://orellanatech.monespaceprof.com`

## Commandes locales

```bash
npm ci
npm run dev
npm run lint
npm run build
```

## Personnalisation

- Textes, liens, e-mail et donnees de demonstration : `src/config/siteContent.ts`
- Chemin camera : `src/config/cameraPath.ts`
- Timings, seuils responsive et densite de particules : `src/config/animationConfig.ts`
- Images, modeles et textures optimises : `src/assets/`

L'adresse `contact@example.com` est encore un placeholder a remplacer.

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

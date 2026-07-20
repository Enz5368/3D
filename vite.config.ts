import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    target: 'es2022',
    sourcemap: false,
    chunkSizeWarningLimit: 1200,
    rollupOptions: {
      input: {
        main: 'index.html',
        'service-domotique': 'services/domotique-legere.html',
        'service-logiciels': 'services/logiciels-sur-mesure.html',
        'service-montage': 'services/montage-pc-mac.html',
        'service-nas': 'services/nas-sauvegarde.html',
        'service-telephone': 'services/remplacement-ecran-telephone.html',
        'service-reparation': 'services/reparation-optimisation-pc-mac.html',
        'service-setup': 'services/setup-bureau-teletravail-gaming.html',
        'service-web': 'services/site-web-personnalise-formulaire.html',
      },
    },
  },
});

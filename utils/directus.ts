export default defineNuxtConfig({
  modules: ['@vite-pwa/nuxt'],

  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: 'Natural Self-Care',
      short_name: 'NSC',
      description: 'Guide de remèdes naturels',
      theme_color: '#4CAF50', // Vert nature
      lang: 'fr',
    },
    workbox: {
      // hors-ligne
      runtimeCaching: [
        {
          //  API Directus
          urlPattern: ({ url }) => url.origin.includes('46.224.187.154'),
          handler: 'StaleWhileRevalidate', // Affiche la version en cache, puis met à jour en arrière-plan
          options: {
            cacheName: 'api-cache',
            expiration: {
              maxEntries: 100, // Garde les 100 dernières requêtes
              maxAgeSeconds: 60 * 60 * 24 * 30 // Garde en mémoire 30 jours
            },
            cacheableResponse: {
              statuses: [0, 200]
            }
          }
        }
      ]
    }
  }
})
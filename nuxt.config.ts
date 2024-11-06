// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@vite-pwa/nuxt"],
  ssr: true,

  pwa: {
    manifest: {
      name: "Nuxt3 PWA",
      short_name: "Nuxt3 PWA",
      description: "Testing Nuxt3 PWA",
      theme_color: '#2128b5',
      icons: [
        {
          src: "icons/icon_64x64.png",
          sizes: "64x64",
          type: "image/png",
          purpose: 'any'
        },
        {
          src: "icons/icon_144x144.png",
          sizes: "144x144",
          type: "image/png",
          purpose: 'any'
        },
        {
          src: "icons/icon_192x192.png",
          sizes: "192x192",
          type: "image/png",
          purpose: 'any'
        },
        {
          src: "icons/icon_512x512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: 'any'
        },
        {
          src: "icons/icon_64x64.png",
          sizes: "64x64",
          type: "image/png",
          purpose: 'maskable'
        },
        {
          src: "icons/icon_144x144.png",
          sizes: "144x144",
          type: "image/png",
          purpose: 'maskable'
        },
        {
          src: "icons/icon_192x192.png",
          sizes: "192x192",
          type: "image/png",
          purpose: 'maskable'
        },
        {
          src: "icons/icon_512x512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: 'maskable'
        },
      ],
    },
    workbox: {
      navigateFallback: "/",
    },
    devOptions: {
      enabled: true,
      type: "module",
    }
  },
});

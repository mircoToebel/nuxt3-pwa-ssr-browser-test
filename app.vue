<template>
  <div>
    <ClientOnly>
      <NuxtPage />
    </ClientOnly>
  </div>
</template>

<script setup>

useHead({
  title: 'TITLE',
  meta: [
    {
      name: 'description',
      content: 'Nuxt3 PWA',
    },
    {
      name: 'theme-color',
      content: '#9178b5'
    },
    {
      data_n_head: '1',
      data_n_hid: 'viewport',
      name: 'viewport',
      content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0, minimal-ui'
    }
  ],
  htmlAttrs: {
    class: 'notranslate',
    translate: 'no',
    lang: 'en'
  },
  link: [
    {rel: 'icon', type: 'image/x-icon', href: '/icon_512x512.png', crossorigin: 'use-credentials'},
    {rel: 'icon', type: 'image/png', sizes: '64x64', href: '/icon_64x64.png', crossorigin: 'use-credentials'},
    {rel: 'icon', type: 'image/png', sizes: '144x144', href: '/icon_144x144.png', crossorigin: 'use-credentials'},
    {rel: 'icon', type: 'image/png', sizes: '192x192', href: '/icon_192x192.png', crossorigin: 'use-credentials'},
    {rel: 'icon', type: 'image/png', sizes: '512x512', href: '/icon_512x512.png', crossorigin: 'use-credentials'},
    {rel: 'shortcut icon', href: 'icon_64x64.png', crossorigin: 'use-credentials'},
    {rel: 'apple-touch-icon', sizes: '192x192', href: '/icon_192x192.png', crossorigin: 'use-credentials'},
    {rel: 'apple-touch-icon', sizes: '512x512', href: '/icon_512x512.png', crossorigin: 'use-credentials'}
  ]
})

// Always inject for SSR, but it's needed for Samsung Internet browser only
if (import.meta.server) {
  useHead({
    link: [{
      rel: 'manifest',
      href: '/manifest.webmanifest',
      crossorigin: 'use-credentials'
    }]
  })
}

onMounted(() => {
  const isSamsungInternet = navigator.userAgent.includes('SamsungBrowser')
  if (!isSamsungInternet) {
    // Remove SSR manifest for all non-Samsung browsers
    const existingManifest = document.querySelector('link[rel="manifest"]')
    if (existingManifest) {
      existingManifest.remove()
    }
    
    nextTick(() => {
      // Add dynamic manifest for all non-Samsung browsers in the next tick, i.e. after hydration
      const link = document.createElement('link')
      link.rel = 'manifest'
      link.href = '/manifest.webmanifest'
      link.crossorigin = 'use-credentials'
      document.head.appendChild(link)
    })
  }
})
</script>

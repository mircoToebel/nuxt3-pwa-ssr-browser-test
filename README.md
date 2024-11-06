# Issue reported to @vite-pwa/nuxt

The issue reported is about the different behavior of the PWA functionality when running on Chrome (both Windows desktop and Android) and Samsung Internet browsers.

In app.vue, <NuxtPwaManifest /> is enclosed in a <ClientOnly> component. With this setting, it's possible to install the PWA app on Chrome, but not on Samsung Internet browsers.
When <NuxtPwaManifest /> is moved outside the <ClientOnly> component, the PWA app can be installed on Samsung Internet browsers, but not on Chrome.

To test the behavior, a certificate is needed and the script 'start-prod-https' in package.json needs to be set accordingly.
Then, run `npm run start-prod-https`.
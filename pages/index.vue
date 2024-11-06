<template>
  <div>
    beforeinstallpromptArrived: {{ beforeinstallpromptArrived }}
  </div>
  <div>
    showInstallPrompt: {{ showInstallPrompt }}
  </div>
</template>


<script>

export default {
  data() {
    return {
      beforeinstallpromptArrived: false
    }
  },
  created() {
    window.addEventListener('beforeinstallprompt', this.handleBeforeInstallPrompt)
  },
  methods: {
    handleBeforeInstallPrompt(event) {
      console.log('Index: beforeinstallprompt event', event)
      this.beforeinstallpromptArrived = true
    }
  },
  computed: {
    showInstallPrompt() {
      const { $pwa } = useNuxtApp()
      return $pwa.showInstallPrompt
    }
  }
}
</script>

// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  css: ['@/assets/scss/styles.scss'],

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },
  modules: [
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt'
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/_mixin.scss" as *;',
          api: 'modern-compiler'
        }
      }
    }
  },

  experimental: { appManifest: false },
  compatibilityDate: '2024-08-21',
})
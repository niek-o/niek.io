// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image-edge', 'nuxt-primevue'],
  css: ['~/assets/css/main.css', 'primevue/resources/themes/aura-light-green/theme.css'],
  image: {
    providers: {
      backEnd: {
        name: 'backEnd',
        provider: '~/providers/back-end.ts',
        options: {
          baseURL: 'https://cdn.niek.io/images'
        }
      }
    }
  },
  primevue: {
    components: {
      prefix: 'Pv',
      include: ['Card', 'Divider']
    }
  },
  devServer: {
    port: 5174
  },
  runtimeConfig: {
    apiKey: '', // can be overridden by NUXT_API_SECRET environment variable
    public: {
      cdnUrl: '' // can be overridden by NUXT_PUBLIC_API_BASE environment variable
    }
  }
})

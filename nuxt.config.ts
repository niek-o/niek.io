// https://v3.nuxtjs.org/api/configuration/nuxt.config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
    modules: ["@nuxt/image-edge", "vue3-carousel-nuxt"],
    css: ["~/assets/css/main.css", "primeicons/primeicons.css"],
    image: {
        providers: {
            backEnd: {
                name: "backEnd",
                provider: "~/providers/back-end.ts"
            }
        }
    },
    app: {
        head: {
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
            ],
            meta: [
                { name: "viewport", content: "width=device-width, initial-scale=1" }
            ]
        }
    },
    vite: {
        plugins: [tailwindcss()]
    },
    compatibilityDate: "2025-06-22",
    runtimeConfig: {
        apiKey: process.env.NUXT_API_KEY, // can be overridden by NUXT_API_SECRET environment variable
        public: {
            cdnUrl: process.env.NUXT_PUBLIC_CDN_URL // can be overridden by NUXT_PUBLIC_CDN_URL environment variable
        }
    }
});
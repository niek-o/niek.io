// https://v3.nuxtjs.org/api/configuration/nuxt.config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
    modules: ["@nuxt/image-edge"],
    css: ["~/assets/css/main.css", "primeicons/primeicons.css"],
    image: {
        providers: {
            backEnd: {
                name: "backEnd",
                provider: "~/providers/back-end.ts"
            }
        }
    },
    vite: {
        plugins: [tailwindcss()]
    },
    compatibilityDate: "2025-06-22",
    // devServer: {
    //     port: 5174,
    //     host: "0.0.0.0"
    // },
    runtimeConfig: {
        apiKey: process.env.NUXT_API_KEY, // can be overridden by NUXT_API_SECRET environment variable
        public: {
            cdnUrl: process.env.NUXT_PUBLIC_CDN_URL // can be overridden by NUXT_PUBLIC_API_BASE environment variable
        }
    }
});

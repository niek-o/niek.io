// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default {
	modules: [
		"@nuxtjs/tailwindcss",
		"@nuxt/image-edge"
	],
	css:     ["~/assets/css/main.css"],
	image:   {
		provider: "netlify"
	}
};

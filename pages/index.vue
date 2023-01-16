<script setup lang="ts">
const { data } = await useFetch("/api/songs");

useHead({
  title: "NIEK",
  meta: [
    { name: "og:title", content: "NIEK" },
    { name: "og:description", content: `${data.value[Object.keys(data.value)[0]].title} OUT NOW` },
    { name: "og:image", content: "https://niek.io/images/logo.png" },
    { name: "og:url", content: "https://niek.io" },

    { name: "theme-color", content: "#2587FB" },

    { name: "twitter:title", content: "NIEK" },
    { name: "twitter:description", content: `${data.value[Object.keys(data.value)[0]].title} OUT NOW` },
    { name: "twitter:domain", content: "https://niek.io/" },
    { name: "twitter:url", content: "https://niek.io" },
    { name: "twitter:image", content: "https://niek.io/images/logo.png" },
  ]
});
</script>

<template>
  <div>
    <div class="top-bar w-full h-full bg-black drop-shadow-lg grid items-center">
      <nuxt-img
          width="100px"
          height="100px"
          src="/images/logo.png"
          alt="NIEK LOGO"
          class="flex flex-row flex-shrink justify-self-start ml-5 w-24 ease-in-out duration-100 sm:hover:scale-105"/>
      <div class="flex flex-row flex-shrink justify-self-end mr-5">
        <a href="https://www.youtube.com/c/Frankenstein795" target="_blank">
          <IconsYouTube class="fill-white w-12 mr-1 ease-in-out duration-100 sm:hover:scale-105"/>
        </a>
        <a href="https://open.spotify.com/artist/6PXPX1pIxajf1IpgMOJjYS?si=UPzRRIrJT5WpYKp1eWRQcg" target="_blank">
          <IconsSpotify class="fill-white w-12 mr-1 ease-in-out duration-100 sm:hover:scale-105"/>
        </a>
        <a href="https://soundcloud.com/niek_o" target="_blank">
          <IconsSoundCloud class="fill-white w-12 mr-1 ease-in-out duration-100 sm:hover:scale-105"/>
        </a>
        <a href="https://www.instagram.com/official.niek" target="_blank">
          <IconsInstagram class="fill-white w-12 mr-1 ease-in-out duration-100 sm:hover:scale-105"/>
        </a>
      </div>
    </div>
    <div class="grid home place-items-center my-12 gap-y-12">
      <NuxtLink
          v-for="track in data"
          :to=track.pagePath
          class="max-w-full w-homecard flex flex-col rounded-2xl drop-shadow-lg overflow-hidden
                 ease-in-out duration-100 sm:hover:scale-105 sm:hover:drop-shadow-xl">
        <LiteCard :track="track"/>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.home {
  grid-template-columns: repeat(auto-fit, minmax(24rem, 1fr));
}

.top-bar {
  grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
}
</style>

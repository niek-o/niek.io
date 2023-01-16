<script setup lang="ts">
import { pageOptions } from "~/utils/typings";

const route = useRoute();
const router = useRouter();

const name = <string>route.params.track;

const req = await useFetch("/api/songs");

if (!req.data.value[name]) {
  router.push("/");
}

const trackData = <pageOptions>req.data.value[name];

useHead({
  title: `NIEK | ${trackData.title}`,
  meta: [
    { name: "og:title", content: `NIEK | ${trackData.title}` },
    { name: "og:description", content: `${trackData.title} OUT NOW` },
    { name: "og:image", content: `${"https://niek.io" + trackData.coverURL}` },
    { name: "og:url", content: `${"https://niek.io" + trackData.pagePath}` },

    { name: "theme-color", content: `${trackData.buttonColor}` },

    { name: "twitter:title", content: `NIEK | ${trackData.title}` },
    { name: "twitter:description", content: `${trackData.title} OUT NOW` },
    { name: "twitter:domain", content: "https://niek.io/" },
    { name: "twitter:url", content: `${"https://niek.io" + trackData.pagePath}` },
    { name: "twitter:image", content: `${"https://niek.io" + trackData.coverURL}` },
    { name: "twitter:card", content: "summary_large_image" },
  ]
});
</script>

<template>
  <div>
    <nuxt-img
        width="1024px"
        height="1024px"
        :src="trackData.backgroundURL ? trackData.backgroundURL : trackData.coverURL"
        alt="Album cover"
        class="blur fixed object-cover scale-125 w-full h-full -z-10"/>
    <FullCard :track="trackData"/>
  </div>
</template>

<style scoped>
</style>

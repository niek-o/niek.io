<script setup lang="ts">
const { data } = await useFetch("/api/content", { pick: ["HoldMeNow"] });

const trackData = data.value.HoldMeNow;

useHead({
  title: trackData.title,
  meta:  [
    { name: "og:title", content: `${ trackData.title }` },
    { name: "og:description", content: `${ trackData.title } OUT NOW` },
    { name: "og:image", content: `${ "https://niek.space" + trackData.coverURL }` },
    { name: "og:url", content: `${ "https://niek.space" + trackData.pagePath }` },

    { name: "theme-color", content: `${ trackData.buttonColor }` },

    { name: "twitter:title", content: `${ trackData.title }` },
    { name: "twitter:description", content: `${ trackData.title } OUT NOW` },
    { name: "twitter:domain", content: "https://niek.space/" },
    { name: "twitter:url", content: `${ "https://niek.space" + trackData.pagePath }` },
    { name: "twitter:image", content: `${ "https://niek.space" + trackData.coverURL }` },
    { name: "twitter:card", content: "summary_large_image" },
  ]
});
</script>

<template>
  <div>
    <img :src="trackData.backgroundURL ? trackData.backgroundURL : trackData.coverURL"
        alt="Album cover"
        class="background object-cover w-full h-full">
    <FullCard :track=trackData class="frame" />
  </div>
</template>

<style scoped>
.background {
  z-index:                 -1;
  position:                fixed;
  filter:                  blur(8px);
  -webkit-backdrop-filter: blur(8px);
  transform:               scale(1.2);
}

@media screen and (min-width: 600px) {
  .frame {
    margin-left: 5rem;
    margin-top:  5rem;
    width:       30rem;
  }
}

@media screen and (max-width: 600px) {
  .frame {
    width:        90vw;
    margin-left:  auto;
    margin-right: auto;
  }
}
</style>

<script setup lang="ts">
const { data } = await useFetch("/api/content", { pick: ["Afterlife"] });

const trackData = data.value.Afterlife;

// useMeta({
//   title: trackData.title,
//   og: {
//     title: trackData.title,
//     type: "website",
//     image: "https://niek.space" + trackData.coverURL,
//     url: "https://niek.space" + trackData.pagePath
//   }
// })

useHead({
  meta: [
    { name: "title", content: `${ trackData.title }` },
    { name: "og:title", content: `${ trackData.title }` },
    { name: "og:image", content: `"https://niek.space" + ${ trackData.coverURL }` },
    { name: "og:url", content: `"https://niek.space" + ${ trackData.pagePath }` }
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

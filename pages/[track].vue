<script setup lang="ts">

const route  = useRoute();
const router = useRouter();

const name = <string>route.params.track;

const { data } = await useFetch("/api/content");

if (!data.value[name]) {
  router.push("/");
}

const trackData = data.value[name];

useHead({
  title: `NIEK | ${ trackData.title }`,
  meta:  [
    { name: "og:title", content: `NIEK | ${ trackData.title }` },
    { name: "og:description", content: `${ trackData.title } OUT NOW` },
    { name: "og:image", content: `${ "https://niek.io" + trackData.coverURL }` },
    { name: "og:url", content: `${ "https://niek.io" + trackData.pagePath }` },

    { name: "theme-color", content: `${ trackData.buttonColor }` },

    { name: "twitter:title", content: `NIEK | ${ trackData.title }` },
    { name: "twitter:description", content: `${ trackData.title } OUT NOW` },
    { name: "twitter:domain", content: "https://niek.io/" },
    { name: "twitter:url", content: `${ "https://niek.io" + trackData.pagePath }` },
    { name: "twitter:image", content: `${ "https://niek.io" + trackData.coverURL }` },
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
        class="background object-cover w-full h-full" />
    <FullCard :track=trackData class="frame" />
  </div>
</template>

<style scoped>
.background {
  z-index:                 -1;
  position:                fixed;
  filter:                  blur(8px);
  -webkit-backdrop-filter: blur(8px);
  transform:               scale(1.25);
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

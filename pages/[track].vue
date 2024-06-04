<script setup lang="ts">
import type { pageOptions } from '~/utils/typings'

const runtimeConfig = useRuntimeConfig()
const route = useRoute()
const router = useRouter()

const name = <string>route.params.track

const getTrackData = async (id: string) => {
  // const { data } = await useFetch(`${runtimeConfig.CDN_URL}/track/${id}`, {
  //   headers: {
  //     'x-api-key': runtimeConfig.apiKey
  //   }
  // })

  const { data } = await useFetch(`/api/track/${id}`, {
    getCachedData(key, nuxt) {
      if (nuxt.isHydrating && nuxt.payload.data[key]) {
        return nuxt.payload.data[key]
      }

      // Check if the data is already cached in the static data
      if (nuxt.static.data[key]) {
        return nuxt.static.data[key]
      }

      return null
    }
  })

  // if (!data.value) {
  //   await router.push('/')
  // }

  return (await data.value) as pageOptions
}

const data = await getTrackData(name)

const getCoverImageData = async (id: string) => {
  const { data } = await useFetch(`/api/images/cover/${id}`)

  if (!data.value) {
    await router.push('/')
  }

  return data.value
}

const getBackgroundImageData = async (id: string) => {
  const { data } = await useFetch(`/api/images/background/${id}`)

  if (!data.value) {
    await router.push('/')
  }

  return data.value
}

const img = data.backgroundImage
  ? await getBackgroundImageData(name)
  : await getCoverImageData(name)
const imgStr = `data:image/webp;base64,${img}`

useHead({
  title: `NIEK | ${data.title}`,
  meta: [
    { name: 'og:title', content: `NIEK | ${data.title}` },
    { name: 'og:description', content: `${data.title} OUT NOW` },
    { name: 'og:image', content: `${'https://cdn.niek.io/images/cover/' + data.id}` },
    { name: 'og:url', content: `${'https://niek.io' + data.id}` },

    { name: 'theme-color', content: `${data.accentColor}` },

    { name: 'twitter:title', content: `NIEK | ${data.title}` },
    { name: 'twitter:description', content: `${data.title} OUT NOW` },
    { name: 'twitter:domain', content: 'https://niek.io/' },
    { name: 'twitter:url', content: `${'https://niek.io' + data.id}` },
    { name: 'twitter:image', content: `${'https://cdn.niek.io/images/cover/' + data.id}` },
    { name: 'twitter:card', content: 'summary_large_image' }
  ]
})
</script>

<template>
  <div>
    <nuxt-img
      :src="imgStr ?? 'pending'"
      width="1024"
      format="webp"
      height="1024"
      provider="backEnd"
      alt="Album cover"
      class="blur fixed object-cover scale-125 w-full h-full -z-10 non-drag"
    />
    <track-card
      card-type="full"
      :track="data"
      :img="data.backgroundImage ? undefined : imgStr"
    ></track-card>
  </div>
</template>

<style scoped></style>

<script setup lang="ts">
import type { pageOptions } from '~/utils/typings'

const getTrackData = async () => {
  const { data } = await useFetch('/api/tracks')

  return (await data.value) as pageOptions[]
}

const data = await getTrackData()

if (data && data.length > 0) {
  useHead({
    title: 'NIEK',
    meta: [
      { name: 'og:title', content: 'NIEK' },
      { name: 'og:description', content: `${data[0].title} OUT NOW` },
      { name: 'og:image', content: 'https://niek.io/images/logo.png' },
      { name: 'og:url', content: 'https://niek.io' },

      { name: 'theme-color', content: '#2587FB' },

      { name: 'twitter:title', content: 'NIEK' },
      { name: 'twitter:description', content: `${data[0].title} OUT NOW` },
      { name: 'twitter:domain', content: 'https://niek.io/' },
      { name: 'twitter:url', content: 'https://niek.io' },
      { name: 'twitter:image', content: 'https://niek.io/images/logo.png' }
    ]
  })
} else {
  useHead({
    title: 'NIEK',
    meta: [
      { name: 'og:title', content: 'NIEK' },
      { name: 'og:description', content: `DJ & PRODUCER` },
      { name: 'og:image', content: 'https://niek.io/images/logo.png' },
      { name: 'og:url', content: 'https://niek.io' },

      { name: 'theme-color', content: '#2587FB' },

      { name: 'twitter:title', content: 'NIEK' },
      { name: 'twitter:description', content: `DJ & PRODUCER` },
      { name: 'twitter:domain', content: 'https://niek.io/' },
      { name: 'twitter:url', content: 'https://niek.io' },
      { name: 'twitter:image', content: 'https://niek.io/images/logo.png' }
    ]
  })
}
</script>

<template>
  <div>
    <div
      class="flex flex-row place-items-center justify-between px-5 w-full h-full bg-black drop-shadow-lg"
    >
      <hover-item class="w-24 h-24">
        <img
          width="100px"
          height="100px"
          src="/images/logo.png"
          alt="NIEK LOGO"
          class="flex flex-row flex-shrink justify-self-start non-drag"
        />
      </hover-item>
      <div class="flex flex-row gap-2 flex-shrink">
        <a href="https://www.youtube.com/c/Frankenstein795" target="_blank" class="non-drag">
          <icons-youtube-icon
            fill="#FFFFFF"
            center-fill="#000000"
            class="w-12 h-12 ease-in-out duration-100 sm:hover:scale-105"
          />
        </a>
        <a
          href="https://open.spotify.com/artist/6PXPX1pIxajf1IpgMOJjYS?si=UPzRRIrJT5WpYKp1eWRQcg"
          target="_blank"
          class="non-drag"
        >
          <icons-spotify-icon
            fill="#FFFFFF"
            class="w-12 h-12 ease-in-out duration-100 sm:hover:scale-105"
          />
        </a>
        <a href="https://soundcloud.com/niek_o" target="_blank" class="non-drag">
          <icons-soundcloud-icon
            fill="#FFFFFF"
            class="fill-white w-12 h-12 ease-in-out duration-100 sm:hover:scale-105"
          />
        </a>
        <a href="https://www.instagram.com/official.niek" target="_blank" class="non-drag">
          <IconsInstagram
            class="fill-white w-12 h-12 ease-in-out duration-100 sm:hover:scale-105"
          />
        </a>
      </div>
    </div>
    <div class="grid home place-items-center my-12 gap-y-12">
      <hover-item v-for="track in data" :key="track.id">
        <NuxtLink
          :to="track.id"
          class="max-w-full flex flex-col drop-shadow-lg overflow-hidden non-drag"
        >
          <track-card card-type="simple" :track="track" />
        </NuxtLink>
      </hover-item>
    </div>
  </div>
</template>

<style scoped>
.home {
  grid-template-columns: repeat(auto-fit, minmax(28rem, 1fr));
}
</style>

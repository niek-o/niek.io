<script setup lang="ts">
import type { pageOptions } from '~/utils/typings'

const getTrackData = async () => {
  const { data } = await useFetch('/api/tracks')

  return (await data.value) as pageOptions[]
}

const data = await getTrackData()

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
</script>

<template>
  <div>
    <header
      class="flex flex-row place-items-center justify-between px-5 w-full h-12 sm:h-24 bg-black drop-shadow-lg"
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
            class="w-8 h-8 sm:w-12 sm:h-12 ease-in-out duration-100 sm:hover:scale-105"
          />
        </a>
        <a
          href="https://open.spotify.com/artist/6PXPX1pIxajf1IpgMOJjYS?si=UPzRRIrJT5WpYKp1eWRQcg"
          target="_blank"
          class="non-drag"
        >
          <icons-spotify-icon
            fill="#FFFFFF"
            class="w-8 h-8 sm:w-12 sm:h-12 ease-in-out duration-100 sm:hover:scale-105"
          />
        </a>
        <a href="https://soundcloud.com/niek_o" target="_blank" class="non-drag">
          <icons-soundcloud-icon
            fill="#FFFFFF"
            class="w-8 h-8 sm:w-12 sm:h-12 ease-in-out duration-100 sm:hover:scale-105"
          />
        </a>
        <a href="https://www.instagram.com/official.niek" target="_blank" class="non-drag">
          <IconsInstagram
            class="fill-white w-8 h-8 sm:w-12 sm:h-12 ease-in-out duration-100 sm:hover:scale-105"
          />
        </a>
      </div>
    </header>
    <section
      class="bg-center bg-cover bg-no-repeat md:bg-fixed bg-[url('/images/hero.jpg')] bg-gray-700 bg-blend-multiply"
    >
      <div class="px-4 mx-auto max-w-screen-xl h-screen text-center py-24 lg:py-56">
        <h1 class="mb-4 text-9xl font-bold text-white">NIEK</h1>
        <p class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
          DJ AND PRODUCER
        </p>
        <p class="pt-80 text-3xl text-white font-bold">MY MUSIC</p>
        <p class="pt-4 mb-8 text-3xl text-white font-bold">V</p>
      </div>
    </section>
    <main
      class="flex flex-row flex-wrap home justify-center place-items-center md:p-12 py-24 gap-12"
    >
      <hover-item v-for="track in data" :key="track.id">
        <nuxt-link :to="track.id" class="flex flex-col drop-shadow-lg overflow-hidden non-drag">
          <track-card card-type="simple" :track="track" />
        </nuxt-link>
      </hover-item>
    </main>
    <footer class="w-screen h-64 bg-black text-center p-24">
      <h3 class="text-white text-xl md:text-3xl font-bold">FOR BOOKINGS AND INQUIRIES:</h3>
      <a href="mailto:contact@niek.io" class="text-white text-lg md:text-2xl underline"
        >contact@niek.io</a
      >
    </footer>
  </div>
</template>

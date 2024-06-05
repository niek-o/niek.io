<script setup lang="ts">
import type { pageOptions } from '~/utils/typings'

const getTrackData = async () => {
  const { data } = await useFetch('/api/tracks')

  return (await data.value) as pageOptions[]
}

const data = await getTrackData()

useHead({
  title: 'NIEK',
  htmlAttrs: {
    lang: 'en'
  },
  meta: [
    { name: 'title', content: 'NIEK' },
    { name: 'description', content: `DJ AND PRODUCER` },

    { name: 'og:title', content: 'NIEK' },
    { name: 'og:description', content: `DJ AND PRODUCER` },
    { name: 'og:image', content: 'https://niek.io/images/hero.jpg' },
    { name: 'og:url', content: 'https://niek.io' },

    { name: 'theme-color', content: '#2587FB' },

    { name: 'twitter:title', content: 'NIEK' },
    { name: 'twitter:description', content: `DJ & PRODUCER` },
    { name: 'twitter:domain', content: 'https://niek.io/' },
    { name: 'twitter:url', content: 'https://niek.io' },
    { name: 'twitter:image', content: 'https://niek.io/images/hero.jpg' }
  ]
})

const trackList = ref<HTMLElement | null>(null)

const scrollTo = (element: HTMLElement | null) => {
  element?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <div>
    <header
      class="flex flex-row place-items-center justify-between px-5 w-full h-12 sm:h-24 bg-black drop-shadow-lg non-drag fixed z-10"
    >
      <hover-item class="w-24 h-24">
        <img
          width="100px"
          height="100px"
          src="/images/logo.png"
          alt="NIEK LOGO"
          class="flex flex-row flex-shrink justify-self-start"
        />
      </hover-item>
      <div class="flex flex-row gap-2 flex-shrink">
        <a href="https://www.youtube.com/c/Frankenstein795" aria-label="Youtube" target="_blank">
          <icons-youtube-icon
            fill="#FFFFFF"
            center-fill="#000000"
            class="w-8 h-8 sm:w-12 sm:h-12 ease-in-out duration-100 sm:hover:scale-105"
          />
        </a>
        <a
          href="https://open.spotify.com/artist/6PXPX1pIxajf1IpgMOJjYS?si=UPzRRIrJT5WpYKp1eWRQcg"
          aria-label="Spotify"
          target="_blank"
          class="non-drag"
        >
          <icons-spotify-icon
            fill="#FFFFFF"
            class="w-8 h-8 sm:w-12 sm:h-12 ease-in-out duration-100 sm:hover:scale-105"
          />
        </a>
        <a href="https://soundcloud.com/niek_o" target="_blank" aria-label="Soundcloud">
          <icons-soundcloud-icon
            fill="#FFFFFF"
            class="w-8 h-8 sm:w-12 sm:h-12 ease-in-out duration-100 sm:hover:scale-105"
          />
        </a>
        <a href="https://www.instagram.com/official.niek" target="_blank" aria-label="Instagram">
          <IconsInstagram
            class="fill-white w-8 h-8 sm:w-12 sm:h-12 ease-in-out duration-100 sm:hover:scale-105"
          />
        </a>
      </div>
    </header>
    <section
      class="bg-center bg-cover bg-no-repeat sm:bg-fixed bg-[url('/images/hero.jpg')] bg-gray-700 bg-blend-multiply non-drag"
    >
      <div class="px-4 mx-auto max-w-screen-xl sm:h-screen text-center py-24 lg:py-56">
        <h1 class="mb-4 text-8xl sm:text-9xl font-bold text-white">NIEK</h1>
        <p class="mb-8 text-lg font-normal text-gray-300 lg:text-2xl sm:px-16 lg:px-48">
          DJ AND PRODUCER
        </p>
        <p class="pt-48 sm:pt-80 text-3xl text-white font-bold">MY MUSIC</p>
        <p
          class="pt-4 mb-8 text-3xl text-white font-bold hover:cursor-pointer"
          @click="scrollTo(trackList)"
        >
          ↓
        </p>
        <div class="text-gray-500 font-light sm:text-xs flex flex-row gap-2">
          <div class="text-left">
            <p>Image shot by</p>
            <span>
              <IconsInstagram class="w-4 fill-gray-500 inline mr-1" />
              <a href="https://instagram.com/gewoon_gina" target="_blank" class="underline"
                >@gewoon_gina</a
              >
            </span>
          </div>
        </div>
      </div>
    </section>
    <main
      class="flex flex-row flex-wrap home justify-center place-items-center md:p-12 py-24 gap-12"
      ref="trackList"
    >
      <hover-item v-for="track in data" :key="track.id">
        <nuxt-link :to="track.id" class="flex flex-col drop-shadow-lg overflow-hidden non-drag">
          <track-card card-type="simple" :track="track" />
        </nuxt-link>
      </hover-item>
    </main>
    <footer class="w-screen h-64 bg-black text-center py-24">
      <h1 class="text-white text-lg md:text-3xl font-bold">FOR BOOKINGS AND INQUIRIES:</h1>
      <a href="mailto:contact@niek.io" class="text-white text-lg md:text-2xl underline"
        >contact@niek.io</a
      >
    </footer>
  </div>
</template>

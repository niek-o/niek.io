<script setup lang="ts">
import SoundcloudIcon from '@/components/icons/SoundcloudIcon.vue'
import SpotifyIcon from '@/components/icons/SpotifyIcon.vue'
import YoutubeIcon from '@/components/icons/YoutubeIcon.vue'
import type { pageOptions } from '~/utils/typings'

const { track } = defineProps<{
  track: pageOptions
  cardType: 'simple' | 'full'
}>()

const { backgroundColor, accentColor, id, title, subtitle, links } = track

const runtimeConfig = useRuntimeConfig()
</script>

<template>
  <pv-card
    class="text-center"
    :class="{
      'w-fullcard_mobile mx-auto sm:ml-20 sm:mt-20 sm:w-fullcard': cardType === 'full',
      'w-homecard': cardType === 'simple'
    }"
    :pt="{
      root: {
        style: {
          backgroundColor: backgroundColor
        }
      },
      title: {
        style: {
          color: accentColor
        }
      },
      subtitle: {
        style: {
          color: accentColor
        }
      }
    }"
  >
    <template #header>
      <img :src="`${runtimeConfig.public.cdnUrl}/images/cover/${id}`" alt="album cover" />
    </template>
    <template #title>
      <h1 :class="{ 'text-2xl': cardType === 'simple', 'text-4xl': cardType === 'full' }">
        {{ title }}
      </h1>
    </template>
    <template #subtitle>{{ subtitle }}</template>
    <template #content v-if="cardType === 'full'">
      <pv-divider
        :pt="{
          root: {
            style: {
              borderLeftColor: 'FFFF00',
              borderTopColor: 'FFFF00'
            }
          }
        }"
      />
      <div class="flex flex-row gap-4 justify-center">
        <a :href="link.url" target="_blank" v-for="link in links" :key="link.platform">
          <youtube-icon
            class="w-16 h-16 border-2 border-[#ff0000] rounded-lg p-2"
            v-if="link.platform === 'youtube'"
          />
          <soundcloud-icon
            class="w-16 h-16 border-2 border-[#f05000] rounded-lg p-2"
            v-else-if="link.platform === 'soundcloud'"
          />
          <spotify-icon
            class="w-16 h-16 border-2 border-[#2ebd59] rounded-lg p-2"
            v-else-if="link.platform === 'spotify'"
          />
        </a>
      </div>
    </template>
  </pv-card>
</template>

<style scoped>
.p-divider::before {
  border-left-color: v-bind(accentColor);
  border-top-color: v-bind(accentColor);
}
</style>

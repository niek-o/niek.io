<script setup lang="ts">
import {pageOptions} from "../utils/typings";

const props = defineProps<{
  track: pageOptions
}>()

const { backgroundColor, iconColor, buttonColor } = props.track
</script>

<template>
<router-link :to=track.pagePath class="frame">
  <img :src=track.coverURL alt="ALBUM COVER" class="w-full"/>
  <div class="card">
    <div class="flex-shrink mx-auto col-span-full">
      <h1 class="title font-black text-2xl">
        {{ track.title }}
      </h1>
      <h2 class="type font-light text-sm">
        {{ track.releaseType }}
      </h2>
    </div>
  </div>
</router-link>
</template>

<style scoped>
.card {
  background-color: v-bind(backgroundColor);
  @apply grid grid-cols-1 justify-items-stretch items-center w-full h-22
}

.title, .type {
  color: v-bind(iconColor);
  @apply w-full text-center
}

.frame {
  @apply max-w-full w-homecard mt-12 flex flex-col rounded-2xl drop-shadow-lg overflow-hidden
}
</style>

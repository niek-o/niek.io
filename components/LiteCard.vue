<script setup lang="ts">
import { pageOptions }     from "../utils/typings";
import { unref as _unref } from "vue";

const props = defineProps<{
  track: pageOptions
}>();

const { backgroundColor, iconColor } = props.track;
</script>

<template>
  <NuxtLink :to=track.pagePath class="max-w-full w-homecard flex flex-col rounded-2xl drop-shadow-lg overflow-hidden">
    <nuxt-img
        width="1024px"
        height="1024px"
        :src=track.coverURL
        alt="ALBUM COVER"
        class="w-full" />
    <div class="card grid grid-cols-1 justify-items-stretch items-center w-full h-22">
      <div class="flex-shrink mx-auto w-11/12">
        <h1 class="title w-auto text-center font-bold text-2xl">
          {{ track.title }}
        </h1>
        <h2 class="type w-auto text-center font-light text-sm">
          {{ track.subtitle }}
        </h2>
      </div>
    </div>
  </NuxtLink>
</template>

<style scoped>
.card {
  background-color: v-bind(backgroundColor);
}

.title, .type {
  color: v-bind(iconColor);
}
</style>

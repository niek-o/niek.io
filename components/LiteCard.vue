<script setup lang="ts">
import { pageOptions } from "~/utils/typings";

const props = defineProps<{
  track: pageOptions
}>();

const { backgroundColor, iconColor } = props.track;
</script>

<template>
  <div class="card">
    <nuxt-img
        width="1024px"
        height="1024px"
        :src=track.coverURL
        alt="ALBUM COVER"
        class="non-drag"
    />
    <div class="card flex flex-col place-content-center h-22">
      <div class="flex-shrink mx-auto w-11/12">
        <h1 class="title w-auto text-center font-bold text-2xl">
          {{ track.title }}
        </h1>
        <h2 class="type w-auto text-center font-light text-sm">
          {{ track.subtitle }}
        </h2>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  background-color: v-bind(backgroundColor);
}

.title, .type {
  color: v-bind(iconColor);
}
</style>

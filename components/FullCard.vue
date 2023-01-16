<script setup lang="ts">
import { pageOptions } from "~/utils/typings";
import { unref as _unref } from "vue";

const props = defineProps<{
  track: pageOptions
}>();

const { backgroundColor, iconColor } = props.track;
</script>

<template>
  <div class="frame mb-12 flex flex-col rounded-2xl drop-shadow-lg overflow-hidden
              w-maincard_mobile mx-auto sm:ml-20 sm:mt-20 sm:w-maincard">
    <nuxt-img
        width="1024px"
        height="1024px"
        :src=track.coverURL
        alt="ALBUM COVER"
        class="w-full"/>
    <div class="card grid grid-cols-2 justify-items-stretch items-center w-full h-22">
      <div class="flex-shrink mx-auto col-span-full">
        <h1 class="title w-full text-center font-bold text-2xl">
          {{ track.title }}
        </h1>
        <h2 class="type w-full text-center font-light text-sm">
          {{ track.subtitle }}
        </h2>
      </div>
    </div>
    <div v-for="link in track.links">
      <CardElement :track=track :link="link"/>
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

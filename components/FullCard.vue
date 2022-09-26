<script setup lang="ts">
import { pageOptions }     from "~/utils/typings";
import { unref as _unref } from "vue";

const props = defineProps<{
  track: pageOptions
}>();

const { backgroundColor, iconColor } = props.track;
</script>

<template>
  <div class="frame mb-12 flex flex-col rounded-2xl drop-shadow-lg overflow-hidden">
    <nuxt-img format="webp" width="2048px" height="2048px" :src=track.coverURL alt="ALBUM COVER" class="w-full" />
    <div class="card grid grid-cols-2 justify-items-stretch items-center w-full h-22">
      <div class="flex-shrink mx-auto col-span-full">
        <h1 class="title w-full text-center font-bold text-2xl">
          {{ track.title }}
        </h1>
        <h2 class="type w-full text-center font-light text-sm">
          {{ track.releaseType }}
        </h2>
      </div>
    </div>
    <div v-if=track.youtubeLink>
      <CardElement :track=track type="youtube" />
    </div>
    <div v-if=track.spotifyLink>
      <CardElement :track=track type="spotify" />
    </div>
    <div v-if=track.soundcloudLink>
      <CardElement :track=track type="soundcloud" />
    </div>
  </div>
</template>

<style scoped>
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

.card {
  background-color: v-bind(backgroundColor);
}

.title, .type {
  color: v-bind(iconColor);
}
</style>

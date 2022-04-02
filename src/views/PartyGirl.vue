<script setup lang="ts">
import Card from "../components/Card.vue";
import NameCard from "../components/NameCard.vue";
import {findItem} from "../utils/content";

const data = findItem("PARTY GIRL")
</script>

<template>
  <img :src=data.coverURL alt="Album cover" class="background object-cover w-full h-full">
  <div class="frame mb-12 flex flex-col rounded-2xl drop-shadow-lg overflow-hidden">
    <img :src=data.coverURL alt="ALBUM COVER" class="w-full"/>
    <NameCard :type="data.releaseType" :title=data.title :text-color=data.iconColor :background-color=data.backgroundColor />
    <Card type="WATCH" :url=data.youtubeLink track-source="Youtube" :button-color=data.buttonColor :text-color=data.buttonTextColor :background-color=data.backgroundColor :icon-color=data.iconColor />
    <Card type="STREAM" :url=data.spotifyLink track-source="Spotify" :button-color=data.buttonColor :text-color=data.buttonTextColor :background-color=data.backgroundColor :icon-color=data.iconColor />
    <Card type="STREAM" :url=data.soundcloudLink track-source="SoundCloud" :button-color=data.buttonColor :text-color=data.buttonTextColor :background-color=data.backgroundColor :icon-color=data.iconColor />
  </div>
</template>

<style scoped>
.background {
  z-index: -1;
  position: fixed;
  filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  transform: scale(1.2);
}

@media screen and (min-width: 600px) {
  .frame {
    margin-left: 5rem;
    margin-top: 5rem;
    width: 30rem;
  }
}

@media screen and (max-width: 600px) {
  .frame {
    width: 90vw;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
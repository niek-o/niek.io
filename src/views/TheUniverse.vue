<script setup lang="ts">
import Card from "../components/Card.vue";
import NameCard from "../components/NameCard.vue";
import {pageOptions} from "../utils/typings";

const options: pageOptions = {
  title: "THE UNIVERSE",
  releaseType: "ALBUM",
  buttonColor: "#d13b3b",
  buttonTextColor: "#FFFFFF",
  backgroundColor: "#090909",
  iconColor: "#FFFFFF"
}
</script>

<template>
  <img src="../assets/the-universe-cover.jpg" alt="Album cover" class="background object-cover w-full h-full">
  <div class="frame mb-12 flex flex-col rounded-2xl drop-shadow-lg overflow-hidden">
    <img src="../assets/the-universe-cover.jpg" alt="ALBUM COVER" class="w-full"/>
    <NameCard :type="options.releaseType" :title=options.title :text-color=options.iconColor :background-color=options.backgroundColor />
    <Card type="WATCH" url="https://www.youtube.com/watch?v=iSjcrdLrD2k&list=PL41zV4hHhDYZQ13NT6PdggpKWDquDUzyt" track-source="Youtube" :button-color=options.buttonColor :text-color=options.buttonTextColor :background-color=options.backgroundColor :icon-color=options.iconColor />
    <Card type="STREAM" url="https://open.spotify.com/album/2lj7IEMCthtOMSGiD5ooBQ?si=17WS8oihRNSk6bqMVBxtHg" track-source="Spotify" :button-color=options.buttonColor :text-color=options.buttonTextColor :background-color=options.backgroundColor :icon-color=options.iconColor />
    <Card type="STREAM" url="https://soundcloud.com/niek_o/sets/the-universe" track-source="SoundCloud" :button-color=options.buttonColor :text-color=options.buttonTextColor :background-color=options.backgroundColor :icon-color=options.iconColor />
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
    width: 100vw;
  }
}
</style>
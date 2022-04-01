<script setup lang="ts">
import Card from "../components/Card.vue";
import NameCard from "../components/NameCard.vue";
import {pageOptions} from "../utils/typings";

const options: pageOptions = {
  title: "HOLD ME NOW",
  releaseType: "SINGLE",
  buttonColor: "#FF0000",
  buttonTextColor: "#FFFFFF",
  backgroundColor: "#FFFFFF",
  iconColor: "#FF0000",
}
</script>

<template>
  <img src="../assets/hold-me-now-background.png" alt="Album cover" class="background object-cover w-full h-full">
  <div class="frame mb-12 flex flex-col rounded-2xl drop-shadow-lg overflow-hidden">
    <img src="../assets/hold-me-now-cover.jpg" alt="ALBUM COVER" class="w-full"/>
    <NameCard :type="options.releaseType" :title=options.title :text-color=options.iconColor :background-color=options.backgroundColor />
    <Card type="WATCH" url="https://www.youtube.com/watch?v=PVvxr3YJdNM" track-source="Youtube" :button-color=options.buttonColor :text-color=options.buttonTextColor :background-color=options.backgroundColor :icon-color=options.iconColor />
    <Card type="STREAM" url="https://soundcloud.com/gmafiarecords/niek-hold-me-now-original-mix" track-source="SoundCloud" :button-color=options.buttonColor :text-color=options.buttonTextColor :background-color=options.backgroundColor :icon-color=options.iconColor />
    <Card type="STREAM" url="https://open.spotify.com/album/5JKLq88LAWkYA1LZtRmBvf?si=m7mF_81PQYe2nbdpkeNerA" track-source="Spotify" :button-color=options.buttonColor :text-color=options.buttonTextColor :background-color=options.backgroundColor :icon-color=options.iconColor />
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
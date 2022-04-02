<script setup lang="ts">
import FullCard from "../components/FullCard.vue";
import {findItem} from "../utils/content";

const data = findItem("THE UNIVERSE")
</script>

<template>
  <img :src=data.coverURL alt="Album cover" class="background object-cover w-full h-full">
  <FullCard :track=data class="frame"/>
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
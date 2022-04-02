<script setup lang="ts">
import LiteCard from "../components/LiteCard.vue";
import {content} from "../utils/content";

</script>

<template>
  <Particles
      id="tsparticles"
      :options="{
      background: {
        color: {
          value: '#FFFFFF'
        }
      },
      fpsLimit: 30,
      particles: {
        color: {
          value: '#000000',
          opacity: 0.5,
        },
        links: {
          color: '#000000',
          distance: 150,
          enable: true,
          opacity: 0.2,
          width: 1
        },
        collisions: {
          enable: true
        },
        move: {
          direction: 'none',
          enable: true,
          outMode: 'bounce',
          random: false,
          speed: 1,
          straight: false,
          warp: true,
        },
        number: {
          density: {
            enable: true,
            value_area: 800
          },
          value: 80
        },
        opacity: {
          value: 0.5
        },
        shape: {
          type: 'circle'
        },
        size: {
          random: true,
          value: 3
        }
      },
      detectRetina: true
    }"
  />
<div class="w-full bg-black drop-shadow-lg">
  <img src="../assets/logo.png" alt="NIEK LOGO" class="mx-auto w-24">
</div>
<div class="grid home place-items-center">
  <LiteCard v-for="item in content" :track=item />
</div>
</template>

<style scoped>
.home {
  grid-template-columns: repeat(auto-fit, minmax(21rem, 1fr));
}
</style>
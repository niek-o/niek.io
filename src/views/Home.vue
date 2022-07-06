<script setup lang="ts">
import LiteCard    from "../components/LiteCard.vue";
import { content } from "../utils/content";

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
  <div class="topbar w-full h-full bg-black drop-shadow-lg grid items-center">
    <img src="/images/logo.png" alt="NIEK LOGO" class="flex flex-row flex-shrink justify-self-start ml-5 w-24">
    <div class="flex flex-row flex-shrink justify-self-end mr-5">
      <a href="https://www.youtube.com/c/Frankenstein795" target="_blank">
        <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="-2 -5 24 24" width="24">
          <path d="M15.812.017H4.145C1.855.017 0 1.852 0 4.116v5.768c0 2.264 1.856 4.1 4.145 4.1h11.667c2.29 0 4.145-1.836 4.145-4.1V4.116c0-2.264-1.856-4.1-4.145-4.1zM13.009 7.28L7.552 9.855a.219.219 0 0 1-.314-.196V4.35c0-.161.173-.266.318-.193l5.458 2.735a.216.216 0 0 1-.005.389z"></path>
        </svg>
      </a>
      <a href="https://open.spotify.com/artist/6PXPX1pIxajf1IpgMOJjYS?si=UPzRRIrJT5WpYKp1eWRQcg" target="_blank">
        <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 24 24" width="24">
          <path d="M9.992 0C4.474 0 0 4.474 0 9.992c0 5.518 4.474 9.992 9.992 9.992 5.518 0 9.992-4.474 9.992-9.992C19.984 4.474 15.51 0 9.992 0zm4.348 15.683c-.127.329-.355.512-.59.512a.518.518 0 0 1-.344-.141c-1.796-1.588-3.87-1.843-5.294-1.778-1.578.073-2.735.544-2.747.549-.363.15-.74-.174-.839-.724-.1-.55.114-1.119.477-1.27.052-.022 1.297-.534 3.029-.62a8.939 8.939 0 0 1 2.917.32 8.09 8.09 0 0 1 3.146 1.737c.326.289.436.922.245 1.415zm1.27-3.063c-.15.329-.42.512-.699.512a.677.677 0 0 1-.407-.141c-2.127-1.588-4.584-1.843-6.271-1.778-1.87.073-3.24.544-3.253.549-.431.15-.876-.174-.995-.724-.118-.55.135-1.119.566-1.27.061-.022 1.536-.534 3.587-.62 1.208-.051 2.37.057 3.456.32 1.374.333 2.628.917 3.726 1.737.386.288.516.922.29 1.415zm.782-2.996a.958.958 0 0 1-.5-.142C10.835 6.404 4.276 8.234 4.21 8.252c-.528.153-1.075-.17-1.22-.721-.146-.551.165-1.12.693-1.272.076-.022 1.885-.534 4.4-.62a18.63 18.63 0 0 1 4.24.32c1.686.333 3.223.917 4.57 1.738.474.288.633.921.357 1.414a.985.985 0 0 1-.858.513z"></path>
        </svg>
      </a>
      <a href="https://soundcloud.com/niek_o" target="_blank">
        <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="-2 -7.5 24 24" width="24">
          <path d="M19.982 6.362c-.08-1.218-1.032-2.196-2.194-2.255a2.22 2.22 0 0 0-1.222.292C16.518 1.974 14.632.023 12.311.023c-.615 0-1.198.137-1.725.382a.332.332 0 0 0-.186.303v7.925c0 .183.142.332.316.332h6.957c1.333 0 2.402-1.183 2.31-2.603zM9.785.536a.326.326 0 0 0-.318.334v7.752c0 .184.142.334.318.334.175 0 .318-.15.318-.334V.87a.326.326 0 0 0-.318-.334zM8.733 1.36a.326.326 0 0 0-.318.334v6.928c0 .184.143.334.318.334.176 0 .318-.15.318-.334V1.694a.326.326 0 0 0-.318-.334zM7.681 1.736a.326.326 0 0 0-.318.334v6.552c0 .184.143.334.318.334.176 0 .318-.15.318-.334V2.07a.326.326 0 0 0-.318-.334zM6.63 1.235a.326.326 0 0 0-.319.334v7.053c0 .184.143.334.318.334.176 0 .318-.15.318-.334V1.57a.326.326 0 0 0-.318-.334zM5.577 1.569a.326.326 0 0 0-.318.334v6.72c0 .183.143.333.318.333.176 0 .318-.15.318-.334v-6.72a.326.326 0 0 0-.318-.333zM4.525 2.237a.326.326 0 0 0-.317.334v6.051c0 .184.142.334.317.334.176 0 .318-.15.318-.334V2.571a.326.326 0 0 0-.318-.334zM3.474 3.53a.326.326 0 0 0-.318.334v4.758c0 .184.142.334.318.334.175 0 .317-.15.317-.334V3.864a.326.326 0 0 0-.317-.333zM2.422 4.073a.326.326 0 0 0-.318.334v4.215c0 .184.142.334.318.334.175 0 .318-.15.318-.334V4.407a.326.326 0 0 0-.318-.334zM1.37 4.198a.326.326 0 0 0-.318.333v3.967c0 .184.142.333.318.333.175 0 .318-.15.318-.333V4.53a.326.326 0 0 0-.318-.333zM.318 5.07A.326.326 0 0 0 0 5.402v2.285c0 .185.142.334.318.334.175 0 .318-.15.318-.334V5.403a.326.326 0 0 0-.318-.334z"></path>
        </svg>
      </a>
      <a href="https://www.instagram.com/official.niek" target="_blank">
        <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 24 24" width="24">
          <path d="M14.017 0h-8.07A5.954 5.954 0 0 0 0 5.948v8.07a5.954 5.954 0 0 0 5.948 5.947h8.07a5.954 5.954 0 0 0 5.947-5.948v-8.07A5.954 5.954 0 0 0 14.017 0zm3.94 14.017a3.94 3.94 0 0 1-3.94 3.94h-8.07a3.94 3.94 0 0 1-3.939-3.94v-8.07a3.94 3.94 0 0 1 3.94-3.939h8.07a3.94 3.94 0 0 1 3.939 3.94v8.07z"></path>
          <path d="M9.982 4.819A5.17 5.17 0 0 0 4.82 9.982a5.17 5.17 0 0 0 5.163 5.164 5.17 5.17 0 0 0 5.164-5.164A5.17 5.17 0 0 0 9.982 4.82zm0 8.319a3.155 3.155 0 1 1 0-6.31 3.155 3.155 0 0 1 0 6.31z"></path>
          <circle cx="15.156" cy="4.858" r="1.237"></circle>
        </svg>
      </a>
    </div>
  </div>
  <div class="grid home place-items-center">
    <LiteCard v-for="item in content" :track=item />
  </div>
</template>

<style scoped>
.home {
  grid-template-columns: repeat(auto-fit, minmax(21rem, 1fr));
}

.topbar {
  grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
}

.icon {
  fill: white;
  @apply w-12 mr-1
}
</style>

<script setup lang="ts">
import { pageOptions } from "~/utils/typings";

const props = defineProps<{
  track: pageOptions
}>();

const { backgroundColor, iconColor, buttonColor } = props.track;
</script>

<template>
  <div class="frame">
    <img :src=track.coverURL alt="ALBUM COVER" class="w-full" />
    <div class="card">
      <div class="flex-shrink mx-auto col-span-full">
        <h1 class="title font-bold text-2xl">
          {{ track.title }}
        </h1>
        <h2 class="type font-light text-sm">
          {{ track.releaseType }}
        </h2>
      </div>
    </div>
    <div class="card" v-if=track.youtubeLink>
      <hr>
      <div class="item justify-self-start">
        <Button :url=track.youtubeLink
            text="WATCH"
            :background-color=track.buttonColor
            :text-color=track.buttonTextColor />
      </div>
      <div class="item justify-self-end">
        <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="-2 -5 24 24" width="24">
          <path d="M15.812.017H4.145C1.855.017 0 1.852 0 4.116v5.768c0 2.264 1.856 4.1 4.145 4.1h11.667c2.29 0 4.145-1.836 4.145-4.1V4.116c0-2.264-1.856-4.1-4.145-4.1zM13.009 7.28L7.552 9.855a.219.219 0 0 1-.314-.196V4.35c0-.161.173-.266.318-.193l5.458 2.735a.216.216 0 0 1-.005.389z"></path>
        </svg>
      </div>
    </div>
    <div class="card" v-if=track.spotifyLink>
      <hr>
      <div class="item justify-self-start">
        <Button :url=track.spotifyLink
            text="STREAM"
            :background-color=track.buttonColor
            :text-color=track.buttonTextColor />
      </div>
      <div class="item justify-self-end">
        <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 24 24" width="24">
          <path d="M9.992 0C4.474 0 0 4.474 0 9.992c0 5.518 4.474 9.992 9.992 9.992 5.518 0 9.992-4.474 9.992-9.992C19.984 4.474 15.51 0 9.992 0zm4.348 15.683c-.127.329-.355.512-.59.512a.518.518 0 0 1-.344-.141c-1.796-1.588-3.87-1.843-5.294-1.778-1.578.073-2.735.544-2.747.549-.363.15-.74-.174-.839-.724-.1-.55.114-1.119.477-1.27.052-.022 1.297-.534 3.029-.62a8.939 8.939 0 0 1 2.917.32 8.09 8.09 0 0 1 3.146 1.737c.326.289.436.922.245 1.415zm1.27-3.063c-.15.329-.42.512-.699.512a.677.677 0 0 1-.407-.141c-2.127-1.588-4.584-1.843-6.271-1.778-1.87.073-3.24.544-3.253.549-.431.15-.876-.174-.995-.724-.118-.55.135-1.119.566-1.27.061-.022 1.536-.534 3.587-.62 1.208-.051 2.37.057 3.456.32 1.374.333 2.628.917 3.726 1.737.386.288.516.922.29 1.415zm.782-2.996a.958.958 0 0 1-.5-.142C10.835 6.404 4.276 8.234 4.21 8.252c-.528.153-1.075-.17-1.22-.721-.146-.551.165-1.12.693-1.272.076-.022 1.885-.534 4.4-.62a18.63 18.63 0 0 1 4.24.32c1.686.333 3.223.917 4.57 1.738.474.288.633.921.357 1.414a.985.985 0 0 1-.858.513z"></path>
        </svg>
      </div>
    </div>
    <div class="card" v-if=track.soundcloudLink>
      <hr>
      <div class="item justify-self-start">
        <Button :url=track.soundcloudLink
            text="STREAM"
            :background-color=track.buttonColor
            :text-color=track.buttonTextColor />
      </div>
      <div class="item justify-self-end">
        <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="-2 -7.5 24 24" width="24">
          <path d="M19.982 6.362c-.08-1.218-1.032-2.196-2.194-2.255a2.22 2.22 0 0 0-1.222.292C16.518 1.974 14.632.023 12.311.023c-.615 0-1.198.137-1.725.382a.332.332 0 0 0-.186.303v7.925c0 .183.142.332.316.332h6.957c1.333 0 2.402-1.183 2.31-2.603zM9.785.536a.326.326 0 0 0-.318.334v7.752c0 .184.142.334.318.334.175 0 .318-.15.318-.334V.87a.326.326 0 0 0-.318-.334zM8.733 1.36a.326.326 0 0 0-.318.334v6.928c0 .184.143.334.318.334.176 0 .318-.15.318-.334V1.694a.326.326 0 0 0-.318-.334zM7.681 1.736a.326.326 0 0 0-.318.334v6.552c0 .184.143.334.318.334.176 0 .318-.15.318-.334V2.07a.326.326 0 0 0-.318-.334zM6.63 1.235a.326.326 0 0 0-.319.334v7.053c0 .184.143.334.318.334.176 0 .318-.15.318-.334V1.57a.326.326 0 0 0-.318-.334zM5.577 1.569a.326.326 0 0 0-.318.334v6.72c0 .183.143.333.318.333.176 0 .318-.15.318-.334v-6.72a.326.326 0 0 0-.318-.333zM4.525 2.237a.326.326 0 0 0-.317.334v6.051c0 .184.142.334.317.334.176 0 .318-.15.318-.334V2.571a.326.326 0 0 0-.318-.334zM3.474 3.53a.326.326 0 0 0-.318.334v4.758c0 .184.142.334.318.334.175 0 .317-.15.317-.334V3.864a.326.326 0 0 0-.317-.333zM2.422 4.073a.326.326 0 0 0-.318.334v4.215c0 .184.142.334.318.334.175 0 .318-.15.318-.334V4.407a.326.326 0 0 0-.318-.334zM1.37 4.198a.326.326 0 0 0-.318.333v3.967c0 .184.142.333.318.333.175 0 .318-.15.318-.333V4.53a.326.326 0 0 0-.318-.333zM.318 5.07A.326.326 0 0 0 0 5.402v2.285c0 .185.142.334.318.334.175 0 .318-.15.318-.334V5.403a.326.326 0 0 0-.318-.334z"></path>
        </svg>
      </div>
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

.frame {
  @apply mb-12 flex flex-col rounded-2xl drop-shadow-lg overflow-hidden
}

.card {
  background-color: v-bind(backgroundColor);
  @apply grid grid-cols-2 justify-items-stretch items-center w-full h-22
}

.item {
  @apply flex-shrink mx-10 m-2
}

.icon {
  fill: v-bind(iconColor);
  @apply h-14 w-auto
}

.title, .type {
  color: v-bind(iconColor);
  @apply w-full text-center
}

hr {
  border-top:       2px solid;
  border-top-color: v-bind(buttonColor);
  opacity:          20%;
  @apply mx-auto m-0 col-span-full w-full
}
</style>

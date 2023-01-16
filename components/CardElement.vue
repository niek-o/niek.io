<script setup lang="ts">
import { musicPlatform, pageOptions, trackLink } from "~/utils/typings";

const props = defineProps<{
  track: pageOptions,
  link: trackLink
}>();

const buttonText: Record<musicPlatform, string> = {
  spotify: "STREAM",
  youtube: "WATCH",
  soundcloud: "STREAM"
};

const { backgroundColor, iconColor, buttonColor } = props.track;
</script>

<template>
  <div>
    <div class="w-full line">
      <hr class="border-t-2 border-solid opacity-20">
    </div>
    <div class="card flex flex-row justify-items-stretch items-center w-full h-22">
      <div class="flex-1 mx-10 m-2 basis-1/2 justify-self-start">
        <Button :url="link.url"
                :text="buttonText[link.platform]"
                :background-color="track.buttonColor"
                :text-color="track.buttonTextColor"
                class="non-drag"
        />
      </div>
      <div class="justify-self-end">
        <IconsYouTube class="icon flex-1 mx-10 m-2 h-14 w-auto" v-if="link.platform === 'youtube'"/>
        <IconsSoundCloud class="icon flex-1 mx-10 m-2 h-14 w-auto" v-else-if="link.platform === 'soundcloud'"/>
        <IconsSpotify class="icon flex-1 mx-10 m-2 h-14 w-auto" v-else-if="link.platform === 'spotify'"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  background-color: v-bind(backgroundColor);
}

.icon {
  fill: v-bind(iconColor);
}

hr {
  border-top-color: v-bind(buttonColor);
}

.line {
  background-color: v-bind(backgroundColor);
}
</style>

<script setup lang="ts">
import Button from "../components/Button.vue"
import {buttonImage, source} from "../utils/source";

const props = defineProps<{
  url: string,
  type: string,
  colorHex: string,
  trackSource: source,
}>()

const imageURL = buttonImage(props.trackSource)
</script>

<template>
<div class="grid grid-cols-2 justify-items-stretch bg-black items-center w-full">
  <div class="flex-shrink justify-self-start m-2 align-middle"><Button :url=url :text=type :color-hex=colorHex /></div>
  <div class="flex-shrink justify-self-end m-2 align-middle"><img :src=imageURL :alt=trackSource></div>
  <hr class="border-0 w-96 mx-auto m-0">
</div>
</template>

<style scoped>
hr {
  border-top: 2px solid rgba(255,255,255,8%);
}
</style>

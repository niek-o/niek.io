<script setup lang="ts">
defineProps<{
  title: string,
  type: string,
  backgroundColor: string,
  textColor: string,
}>()
</script>

<template>
<div class="card grid grid-cols-1 justify-items-stretch items-center w-full h-22">
  <div class="flex-shrink mx-auto">
    <h1 class="title font-black text-2xl w-full text-center">
      {{ title }}
    </h1>
    <h2 class="type font-light text-sm w-full text-center">
      {{ type }}
    </h2>
  </div>
</div>
</template>

<style scoped>
.card {
  background-color: v-bind(backgroundColor);
}

.title, .type {
  color: v-bind(textColor);
}
</style>

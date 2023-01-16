<script setup lang="ts">

defineProps<{
  url: string,
  text: string,
  backgroundColor: string,
  textColor: string,
}>();
</script>

<template>
  <a :href="url"
     target="_blank"
     class="button rounded-xl p-3 text-center align-middle no-underline inline-block cursor-pointer font-bold text-2xl w-32 h-14
            ease-in-out duration-100 sm:hover:scale-105">
    {{ text }}
  </a>
</template>

<style scoped>
.button {
  background-color: v-bind(backgroundColor);
  color: v-bind(textColor);
}
</style>

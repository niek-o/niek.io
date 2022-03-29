<script setup lang="ts">

defineProps<{
  url: string,
  text: string,
  colorHex: string,
}>()

</script>

<template>
  <a :href=url target="_blank" class="button text-white p-3 text-center align-middle no-underline inline-block cursor-pointer font-black text-2xl w-32" :style="{ backgroundColor: colorHex }">
    {{ text }}
  </a>
</template>

<style scoped>
.button {
  border-radius: 12px;
}
</style>

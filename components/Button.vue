<script setup lang="ts">
import { unref as _unref } from "vue";

defineProps<{
  url: string,
  text: string,
  backgroundColor: string,
  textColor: string,
}>();

</script>

<template>
  <a :href=url
      target="_blank"
      class="button p-3 text-center align-middle no-underline inline-block cursor-pointer font-bold text-2xl w-32 h-14">
    {{ text }}
  </a>
</template>

<style scoped>
.button {
  border-radius:    12px;
  background-color: v-bind(backgroundColor);
  color:            v-bind(textColor);
}
</style>

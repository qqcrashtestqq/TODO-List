<script lang="ts" setup>
defineProps<{
  text: string;
}>();
</script>

<template>
  <button class="button">{{ text }}</button>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/api/button.scss";
</style>

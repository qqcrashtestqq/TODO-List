<script lang="ts" setup>
const headerList: string[] = ["About", "List", "Contact"];
</script>

<template>
  <header class="header">
    <div class="container">
      <ul class="header__list">
        <li v-for="(item, index) in headerList" :key="index">
          <a href="#">{{ item }}</a>
        </li>
      </ul>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use "/src/assets/scss/api/header.scss";
</style>

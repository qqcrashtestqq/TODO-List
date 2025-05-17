<script lang="ts" setup>
const MENU_LIST = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "All tasks",
    link: "/tasks",
  },
];
</script>

<template>
  <header class="header">
    <div class="container">
      <ul class="header__list">
        <li
          v-for="(item, index) in MENU_LIST"
          :key="index"
          class="header__item"
        >
          <a :href="item.link" class="header__link">{{ item.name }}</a>
        </li>
      </ul>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use "/src/assets/scss/api/header.scss";
</style>

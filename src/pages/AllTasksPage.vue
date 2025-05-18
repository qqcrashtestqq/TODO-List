<script lang="ts" setup>
import { onMounted } from "vue";
import { useTask } from "../stores/task";

const { listTodo, loadTasksFromLocalStorage } = useTask();

onMounted(() => {
  loadTasksFromLocalStorage();
});
</script>

<template>
  <section class="tasks">
    <div class="container">
      <ul class="tasks__list">
        <li class="tasks__item" v-for="item in listTodo">
          <p>
            {{ item.text }}
          </p>
          <span> date/time: {{ item.date }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../assets/scss/tasks.scss";
</style>

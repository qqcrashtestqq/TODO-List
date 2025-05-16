<script lang="ts" setup>
import Button from "./Api/Button.vue";
import { ref } from "vue";

interface ITODOLiST {
  id: number;
  text: string;
}

const input = ref<string>("");
const numberId = ref(0);
const listTodo = ref<ITODOLiST[]>([]);
const saveList = localStorage.getItem("todo-list");

if (saveList) {
  listTodo.value = JSON.parse(saveList);
}

function createTask() {
  if (input.value === "") return;

  listTodo.value.push({
    id: numberId.value++,
    text: input.value,
  });

  localStorage.setItem("todo-list", JSON.stringify(listTodo.value));
  input.value = "";
}

function deleteItem(id: number) {
  const searchItem = listTodo.value.findIndex((item) => item.id === id);
  if (searchItem === -1) return;

  listTodo.value.splice(searchItem, 1);
  localStorage.setItem("todo-list", JSON.stringify(listTodo.value));
}
</script>

<template>
  <section class="todo">
    <div class="container">
      <div class="todo__inner">
        <div class="todo__box">
          <input
            type="text"
            v-model="input"
            class="todo__input"
            placeholder="Введите вашу задачу "
          />
          <Button @click="createTask" />
        </div>
        <ol class="todo__list">
          <li v-for="item in listTodo" :key="item.id" class="todo__item">
            <p>{{ item.text }}</p>

            <button @click="deleteItem(item.id)">X</button>
          </li>
        </ol>
      </div>
      <!-- <button @click="getAllTasks">Получить все задачи</button> -->
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "/src/assets/scss/todo.scss";
</style>

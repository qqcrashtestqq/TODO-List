<script lang="ts" setup>
import Button from "./Api/Button.vue";
import Close from "./icons/Close.vue";
import { ref } from "vue";
import Calendar from "./Calendar.vue";
import { useCalendar } from "../stores/calendar";
import { useTask } from "../stores/task";

interface ITODOLiST {
  id: number;
  text: string;
  date: any;
}

const input = ref<string>("");
const numberId = ref(0);
const listTodo = ref<ITODOLiST[]>([]);
const saveList = localStorage.getItem("todo-list");
const { date, clearDate } = useCalendar();
const { allTasks } = useTask();

if (saveList) {
  listTodo.value = JSON.parse(saveList);
}

function createTask() {
  if (input.value === "") return;

  listTodo.value.push({
    id: numberId.value++,
    text: input.value,
    date: date.value.date,
  });

  localStorage.setItem("todo-list", JSON.stringify(listTodo.value));
  input.value = "";
  clearDate();
  allTasks(listTodo.value);
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
        <form action="" class="todo__form">
          <label for="" class="todo__label">
            <input
              type="text"
              v-model="input"
              class="todo__input"
              placeholder="Введите вашу задачу "
            />
          </label>
        </form>
        <Calendar class="todo__calendar" />
        <Button text="Create task" @click="createTask" class="todo__btn" />
        <ol class="todo__list">
          <li v-for="item in listTodo" :key="item.id" class="todo__item">
            <div class="todo__box">
              <p class="todo__box-text">{{ item.text }}</p>
              <span class="todo__box-date">date/time: {{ item.date }}</span>
            </div>

            <Button @click="deleteItem(item.id)" class="todo__delete">
              <component :is="Close" />
            </Button>
          </li>
        </ol>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "/src/assets/scss/todo.scss";
</style>

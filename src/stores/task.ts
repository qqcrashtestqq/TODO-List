import { defineStore } from "pinia";
import type { ITask } from "../types/task";

export const useTask = defineStore("task", {
  state: () => ({
    listTodo: [] as ITask[],
  }),
  actions: {
    allTasks(tasks: ITask[]) {
      if (tasks.length === 0) return;
      this.listTodo = tasks;
      localStorage.setItem("allTasks", JSON.stringify(tasks));
      // localStorage.getItem("allTasks");
    },

    loadTasksFromLocalStorage() {
      const savedTasks = localStorage.getItem("allTasks");
      if (savedTasks) {
        this.listTodo = JSON.parse(savedTasks);
      }
    },
  },
});

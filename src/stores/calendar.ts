import { defineStore } from "pinia";
import type { ICalendar } from "../types/calendar";

export const useCalendar = defineStore("calendar", {
  state: () => ({
    date: [] as ICalendar[],
  }),
  actions: {
    setDate(value: Date) {
      const date = value.toLocaleString("uk-UA", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });

      this.date.value = { date };
      console.log("wqe", this.date.value);
    },

    clearDate() {
      this.date.value = [];
    },
  },
});

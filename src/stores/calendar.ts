import { defineStore } from "pinia";
import type { ICalendar } from "../types/calendar";

export const useCalendar = defineStore("calendar", {
  state: () => ({
    date: null as ICalendar | null,
  }),
  actions: {
    setDate(value: Date) {
      this.date = { value };
      console.log("Selected date:", this.date);
    },

    clearDate() {
      this.date = null;
    },
  },
});

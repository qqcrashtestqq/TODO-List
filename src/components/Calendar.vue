<script lang="ts" setup>
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import { ref, watch } from "vue";
import { useCalendar } from "../stores/calendar";

const date = ref<any>();
const calendarStore = useCalendar();

watch(date, (newDate) => {
  calendarStore.setDate(newDate);
});
</script>

<template>
  <VueDatePicker v-model="date" class="calendar"></VueDatePicker>
</template>

<style lang="scss" scoped>
@use "../assets/scss/api/calendar.scss";
</style>

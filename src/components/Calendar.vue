<script lang="ts" setup>
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import { ref } from "vue";

const date = ref<any>();
console.log("date", date.value);
</script>

<template>
  <VueDatePicker v-model="date" class="calendar"></VueDatePicker>
</template>

<style lang="scss" scoped>
@use "../assets/scss/api/calendar.scss";
</style>

<template>
  <div class="coinCell">
    <div class="flex items-center w-20">
      <img
        :src="data.small"
        :alt="data.name"
        class="w-8 h-8 rounded-full mr-2"
      />
      <span>{{ data.name }}</span>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const { params } = defineProps(["params"]);

const data = params.data;
</script>

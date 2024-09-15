<template>
  <div class="coinCell">
    <div>
    <a
      href="#"
      @click.prevent="goToCoinDetail"
      class="text-blue-500 hover:underline"
    >
      <img
        :src="data.image"
        alt="coin icon"
        class="w-6 h-6 inline-block mr-2 align-middle"
      />
      <span class="align-middle">{{ data.name }}</span>
    </a>
  </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import { useRouter } from 'vue-router';

const { params } = defineProps(["params"]);
const router = useRouter();
const data = params.data;

function goToCoinDetail() {
  router.push({ name: 'coin-detail', params: { id: params.data.id } });
}
</script>

<script setup>
import CoinGrid from "../components/CoinGrid.vue";
import NewsSection from "../components/NewsSection.vue";

</script>

<template>
  <div class="w-full min-h-[70vh] h-full p-2 flex justify-center items-center">
    <div class="w-[65%] h-[80%]">
      <CoinGrid />
    </div>
    <div class="w-[30%] h-[80%] pl-8">
      <NewsSection />
    </div>
  </div>
</template>
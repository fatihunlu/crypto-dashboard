<script setup>
import { ref, onMounted } from 'vue'
import axios from "axios";

const newsItems = ref([]);


async function fetchNews() {
  try {
    const newsUrl = `${import.meta.env.BASE_URL}news.json`;
    // https://newsdata.io/crypto-news-api
    const response = await fetch(newsUrl);
    newsItems.value = await response.json();
  } catch (error) {
    console.error(error);
  }
}

onMounted(fetchNews);

function linkToTheNews(link) {
  window.open(link, '_blank');
}
</script>

<template>
  <div class="w-full p-4 bg-white rounded-lg shadow-md overflow-y-auto" style="height: 520px;">
    <div v-for="(item, index) in newsItems" :key="index" class="mb-4 cursor-pointer hover:bg-sky-100 rounded-md p-4" @click="linkToTheNews(item.link)">
      <div class="flex items-center mb-2">
        <img :src="item.image_url" alt="News Image" class="w-[20%] h-20 object-cover rounded-lg" />
        <h3 class="w-[80%] pl-4 font-bold text-lg">{{ item.title }}</h3>
      </div>
      <p class="text-sm text-gray-600 mb-2 overflow-hidden overflow-ellipsis line-clamp-3">{{ item.description }}</p>
      <p class="text-xs text-gray-500 mb-2">{{ item.pubDate }}</p>
      <a :href="item.link" target="_blank" class="text-blue-500 hover:underline">Read more</a>
    </div>
  </div>
</template>

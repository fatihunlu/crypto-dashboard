<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';
import { useCoinStore } from '../stores/useCoinStore';

const isLoading = ref(true);
const errorMessage = ref('');
const route = useRoute();
const coinId = route.params.id;
const coinStore = useCoinStore();

onMounted(async () => {
  try {
    await coinStore.loadCoin(coinId);
  } catch (error) {
    errorMessage.value = error || 'An error occurred while fetching coin data.';
  } finally {
    isLoading.value = false;
  }
});

onUnmounted(() => {
  coinStore.clearCoin();
});
</script>

<template>
  <div class="max-w-4xl mx-auto min-h-[700px] p-6 bg-white rounded-lg shadow-md space-y-6">
    <div v-if="isLoading" class="text-center text-gray-500">Loading...</div>

    <div v-if="!isLoading && errorMessage" class="flex items-center justify-center text-red-400 font-bold min-h-40 mb-8">
      {{ errorMessage }}
    </div>

    <!-- Coin Details -->
    <div v-if="!isLoading && !errorMessage && coinStore.coin">
      <div class="flex items-center space-x-4 mb-8">
        <img
          :src="coinStore.coin.image?.large"
          alt="coin logo"
          class="w-16 h-16"
        />
        <div>
          <h1 class="text-2xl font-bold">
            {{ coinStore.coin.name }} ({{ coinStore.coin.symbol?.toUpperCase() }})
          </h1>
          <p class="text-gray-500">{{ coinStore.coin.categories?.join(', ') }}</p>
        </div>
      </div>

      <!-- Description -->
      <div v-html="coinStore.coin.description?.en" class="prose prose-indigo mb-8"></div>

      <!-- Market Data -->
      <div class="bg-gray-50 p-4 rounded-lg shadow mb-8" v-if="coinStore.coin.market_data">
        <h2 class="text-xl font-semibold mb-4">Market Data</h2>
        <div class="flex justify-between mt-2">
          <div>Current Price:</div>
          <div class="font-bold">
            ${{ coinStore.coin.market_data.current_price.usd.toLocaleString() }}
          </div>
        </div>
        <div class="flex justify-between">
          <div>Market Cap:</div>
          <div class="font-bold">
            ${{ coinStore.coin.market_data.market_cap.usd.toLocaleString() }}
          </div>
        </div>
        <div class="flex justify-between">
          <div>24h Trading Volume:</div>
          <div class="font-bold">
            ${{ coinStore.coin.market_data.total_volume.usd.toLocaleString() }}
          </div>
        </div>
        <div class="flex justify-between">
          <div>Price Change (24h):</div>
          <div
            :class="coinStore.coin.market_data.price_change_percentage_24h > 0 ? 'text-green-500' : 'text-red-500'"
          >
            {{ coinStore.coin.market_data.price_change_percentage_24h.toFixed(2) }}%
          </div>
        </div>
      </div>

      <!-- Hashing Algorithm -->
      <div class="bg-gray-100 p-4 rounded-lg shadow mb-8" v-if="coinStore.coin.hashing_algorithm">
        <h2 class="text-xl font-semibold mb-4">Hashing Algorithm</h2>
        <p>{{ coinStore.coin.hashing_algorithm }}</p>
      </div>

      <!-- Links -->
      <div class="bg-gray-50 p-4 rounded-lg shadow mb-8" v-if="coinStore.coin.links">
        <h2 class="text-xl font-semibold mb-4">Official Links</h2>
        <ul class="space-y-2">
          <li v-if="coinStore.coin.links.homepage[0]">
            <a href="coinStore.coin.links.homepage[0]" target="_blank" class="text-blue-500 hover:underline">Official Website</a>
          </li>
          <li v-if="coinStore.coin.links.blockchain_site?.length">
            <span class="font-semibold">Blockchain Sites:</span>
            <ul class="list-disc list-inside">
              <li v-for="(site, index) in coinStore.coin.links.blockchain_site.filter(x => x !== '')" :key="index">
                <a href="site" target="_blank" class="text-blue-500 hover:underline">{{ site }}</a>
              </li>
            </ul>
          </li>
          <li v-if="coinStore.coin.links.official_forum_url[0]">
            <a href="coinStore.coin.links.official_forum_url[0]" target="_blank" class="text-blue-500 hover:underline">Official Forum</a>
          </li>
        </ul>
      </div>

      <!-- Social Media -->
      <div class="bg-gray-100 p-4 rounded-lg shadow mb-8" v-if="coinStore.coin.links">
        <h2 class="text-xl font-semibold mb-4">Social Media</h2>
        <ul class="flex space-x-4">
          <li v-if="coinStore.coin.links.twitter_screen_name">
            <a
              :href="'https://twitter.com/' + coinStore.coin.links.twitter_screen_name"
              target="_blank"
              class="text-blue-400 hover:underline"
            >
              Twitter
            </a>
          </li>
          <li v-if="coinStore.coin.links.facebook_username">
            <a
              :href="'https://facebook.com/' + coinStore.coin.links.facebook_username"
              target="_blank"
              class="text-blue-600 hover:underline"
            >
              Facebook
            </a>
          </li>
          <li v-if="coinStore.coin.links.subreddit_url">
            <a
              :href="coinStore.coin.links.subreddit_url"
              target="_blank"
              class="text-orange-500 hover:underline"
            >
              Reddit
            </a>
          </li>
        </ul>
      </div>

      <!-- Developer Info -->
      <div class="bg-gray-50 p-4 rounded-lg shadow" v-if="coinStore.coin.links?.repos_url">
        <h2 class="text-xl font-semibold mb-4">Developer Info</h2>
        <ul class="list-disc list-inside">
          <li v-for="(repo, index) in coinStore.coin.links.repos_url.github" :key="index">
            <a href="repo" target="_blank" class="text-blue-500 hover:underline">{{ repo }}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style>
.prose a {
  color: inherit;
  text-decoration: underline;
}
</style>

import { defineStore } from "pinia";
import axios from "axios";

export const useTrendingsStore = defineStore("trendings", {
  state: () => ({
    categories: [],
    coins: [],
    nfts: [],
  }),
  actions: {
    async loadTrendings() {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/search/trending"
        );
        this.categories = response.data.categories;
        this.coins = response.data.coins;
        this.nfts = response.data.nfts;
      } catch (error) {
        console.error("Error fetching coin data:", error);
      }
    },
  },
});

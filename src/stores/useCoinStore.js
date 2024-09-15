import { defineStore } from "pinia";
import axios from "axios";

export const useCoinStore = defineStore("coin", {
  state: () => ({
    coin: {},
  }),
  actions: {
    async loadCoin(coinId) {
      try {
        const response = await axios.get(
          `https://api.coingecko.com/api/v3/coins/${coinId}`
        );
        this.coin = response.data;
      } catch (error) {
        console.error("Error fetching coin data:", error);
        if (error.response && error.response.data && error.response.data.error) {
          throw new Error(error.response.data.error);
        } else {
          throw new Error("An error occurred while fetching coin data.");
        }
      }
    },
    clearCoin() {
      this.coin = {};
    }
  },
});

import { defineStore } from "pinia";
import axios from "axios";

export const useCoinsStore = defineStore("coins", {
  state: () => ({
    coins: [],
    sortField: "market_cap",
    sortOrder: "desc",
  }),
  actions: {
    async loadCoins() {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets",
          {
            params: {
              vs_currency: "usd",
              // order: "market_cap_desc",
              order: `${this.sortField}_${this.sortOrder}`,
              per_page: 250,
              page: 1,
              sparkline: false,
            },
          }
        );
        this.coins = response.data;
      } catch (error) {
        console.error("Error fetching coin data:", error);
      }
    },

    updateSort(sortField, sortOrder) {
      this.sortField = sortField;
      this.sortOrder = sortOrder;
      this.loadCoins();
    },
  },
});

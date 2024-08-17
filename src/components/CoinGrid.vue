<script setup>
import { ref } from "vue";
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid
import { AgGridVue } from "ag-grid-vue3";
import axios from "axios";

import CoinCellRenderer from "./cell-renderers/CoinCellRenderer.vue";
const numberFormatter = (params) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "decimal",
    maximumFractionDigits: 2,
  });
  return params.value == null ? "" : formatter.format(params.value);
};



const autoSizeStrategy = {
  type: "fitGridWidth",
};

const coins = ref([]);
const colDefs = ref([
  { headerName: "Coin", field: "coin", cellRenderer: CoinCellRenderer },
  { headerName: "Price", field: "current_price", valueFormatter: numberFormatter, cellDataType: "number", type: "rightAligned", maxWidth: 150 },
  { headerName: "ATL", field: "atl", valueFormatter: numberFormatter, cellDataType: "number", type: "rightAligned", maxWidth: 150 },
  { headerName: "ATH", field: "ath", valueFormatter: numberFormatter, cellDataType: "number", type: "rightAligned", maxWidth: 150 },
  { headerName: "High 24h", field: "high_24h", valueFormatter: numberFormatter, cellDataType: "number", type: "rightAligned", maxWidth: 150 },
  { headerName: "Low 24h", field: "low_24h", valueFormatter: numberFormatter, cellDataType: "number", type: "rightAligned", maxWidth: 150 },
  { headerName: "Total Volume", field: "total_volume", valueFormatter: numberFormatter, cellDataType: "number", type: "rightAligned", maxWidth: 150 },
  { headerName: "Market Cap", field: "market_cap", valueFormatter: numberFormatter, cellDataType: "number", type: "rightAligned", maxWidth: 180 },
]);

async function loadCoins() {
  try {
    const response = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets",
      {
        params: {
          vs_currency: "usd",
          order: "market_cap_desc",
          per_page: 20,
          page: 1,
          sparkline: false,
        },
      }
    );
    coins.value = response.data;
  } catch (error) {
    console.error("Error fetching coin data:", error);
  }
}
loadCoins();


</script>

<template>
  <ag-grid-vue
    :rowData="coins"
    :columnDefs="colDefs"
    style="height: 800px;"
    :suppressMenuHide="false"
    allowDragFromColumnsToolPanel
    :autoSizeStrategy="autoSizeStrategy"
    class="ag-theme-quartz"
  >
  </ag-grid-vue>
</template>

<style scoped></style>

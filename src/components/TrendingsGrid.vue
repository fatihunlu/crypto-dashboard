<script setup>
import { ref } from "vue";
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid
import { AgGridVue } from "ag-grid-vue3";

import TrendingCoinRenderer from "./cell-renderers/TrendingCoinRenderer.vue";
import TrendingNftsRenderer from "./cell-renderers/TrendingNftsRenderer.vue";
import { useTrendingsStore } from "../stores/useTrendingsStore";
const trendingsStore = useTrendingsStore();

const Tabs = {
  COINS: 1,
  NFTS: 2,
  CATEGORIES: 3,
};
const activeIndex = ref(Tabs.COINS);

const numberFormatter = (params) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "decimal",
    maximumFractionDigits: 2,
  });
  return params.value == null ? "" : formatter.format(params.value);
};

const imageRenderer= (params) => {
  return `<img style="height: 100%; width: 100%" src=${params.value} />`
}
  
const coinsColumnDefs = [
    { headerName: "Name", field: "coin", cellRenderer: TrendingCoinRenderer, minWidth: 200, maxWidth: 350 },
    { headerName: "Slug", field: "slug" },
    { headerName: "Market Cap Rank", field: "market_cap_rank" },
    { headerName: "Total Volume", field: "data.total_volume", maxWidth: 180 },
    {
      headerName: "Sparkline",
      field: "data.sparkline",
      cellRenderer: imageRenderer,
    },
];

const nftsColumnDefs = [
  { headerName: "NFT", field: "nft", cellRenderer: TrendingNftsRenderer, minWidth: 250, maxWidth: 300 },
  { headerName: "Floor Price", field: "data.floor_price", maxWidth: 220 },
  { headerName: "H24 Floor Price Change % ", field: "floor_price_24h_percentage_change", valueFormatter: numberFormatter, cellDataType: "number", maxWidth: 220 },
  { headerName: "H24 Average Sale Price", field: "data.h24_average_sale_price", maxWidth: 220 },
  {
    headerName: "Sparkline",
    field: "data.sparkline",
    cellRenderer: imageRenderer,
  },
];

const categoriesColumnDefs = [
  { headerName: "Name", field: "name", minWidth: 300, maxWidth: 350 },
  { headerName: "Coins Count", field: "coins_count", minWidth: 200, maxWidth: 250 },
  { headerName: "Total Volume", field: "data.total_volume", valueFormatter: numberFormatter, cellDataType: "number", type: "rightAligned", minWidth: 250, maxWidth: 300 },
  {
    headerName: "Sparkline",
    field: "data.sparkline",
    cellRenderer: imageRenderer,
  },
];


const gridOptions = {
  defaultColDef: { sortable: true, filter: false },
  rowSelection: "single",
};

const autoSizeStrategy = {
  type: "fitGridWidth",
};

function toggleAccordion(index) {
  activeIndex.value = activeIndex.value === index ? null : index;
}

trendingsStore.loadTrendings();
</script>

<template>
  <div class="flex w-[85%]">
    <div class="w-64 h-90 min-h-[50vh] bg-gray-100 p-4">
      <nav>
        <ul>
          <li class="mb-2">
            <button
              @click="toggleAccordion(Tabs.COINS)"
              class="w-full text-left px-4 py-2 text-gray-800 font-semibold rounded-md hover:bg-gray-300 transition"
              :class="{ 'bg-gray-300': activeIndex === Tabs.COINS }"
            >
            Coins
            </button>
          </li>
          <li class="mb-2">
            <button
              @click="toggleAccordion(Tabs.NFTS)"
              class="w-full text-left px-4 py-2 text-gray-800 font-semibold rounded-md hover:bg-gray-300 transition"
              :class="{ 'bg-gray-300': activeIndex === Tabs.NFTS }"
            >
            Nfts
            </button>
          </li>
          <li class="mb-2">
            <button
              @click="toggleAccordion(Tabs.CATEGORIES)"
              class="w-full text-left px-4 py-2 text-gray-800 font-semibold rounded-md hover:bg-gray-300 transition"
              :class="{ 'bg-gray-300': activeIndex === Tabs.CATEGORIES }"
            >
              Categories
            </button>
          </li>
        </ul>
      </nav>
    </div>

    <div class="flex-1 px-8">
      <div
        v-if="activeIndex === 1"
        class="bg-gray-100 p-4 shadow-md rounded-md"
      >
        <ag-grid-vue
          class="ag-theme-quartz"
          style="height: 500px"
          :columnDefs="coinsColumnDefs"
          :rowData="trendingsStore.coins.map((coin) => coin.item)"
          :gridOptions="gridOptions"
          :suppressMenuHide="false"
          allowDragFromColumnsToolPanel
          :autoSizeStrategy="autoSizeStrategy"
          :pagination="true"
          :paginationPageSizeSelector="[10, 25, 50, 100]"
          :paginationPageSize="10"
        </ag-grid-vue>
      </div>
      <div
        v-else-if="activeIndex === 2"
        class="bg-gray-100 p-4 shadow-md rounded-md"
      >
        <ag-grid-vue
          class="ag-theme-quartz"
          style="height: 500px"
          :columnDefs="nftsColumnDefs"
          :rowData="trendingsStore.nfts"
          :gridOptions="gridOptions"
          :suppressMenuHide="false"
          allowDragFromColumnsToolPanel
          :autoSizeStrategy="autoSizeStrategy"
          :pagination="true"
          :paginationPageSizeSelector="[10, 25, 50, 100]"
          :paginationPageSize="10"
        </ag-grid-vue>
      </div>
      <div
        v-else-if="activeIndex === 3"
        class="bg-gray-100 p-4 shadow-md rounded-md"
      >
        <ag-grid-vue
          class="ag-theme-quartz"
          style="height: 500px"
          :columnDefs="categoriesColumnDefs"
          :rowData="trendingsStore.categories"
          :gridOptions="gridOptions"
          :suppressMenuHide="false"
          allowDragFromColumnsToolPanel
          :autoSizeStrategy="autoSizeStrategy"
          :pagination="true"
          :paginationPageSizeSelector="[10, 25, 50, 100]"
          :paginationPageSize="10"
        </ag-grid-vue>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

<script setup>
import { ref } from "vue";
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid
import { AgGridVue } from "ag-grid-vue3";

import { useCoinsStore } from "../stores/useCoinsStore";
const coinsStore = useCoinsStore();

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

const colDefs = ref([
  { headerName: "Coin", field: "coin", cellRenderer: CoinCellRenderer, minWidth: 250, maxWidth: 450 },
  { headerName: "Price", field: "current_price", valueFormatter: numberFormatter, cellDataType: "number", type: "rightAligned", maxWidth: 150 },
  { headerName: "ATL", field: "atl", valueFormatter: numberFormatter, cellDataType: "number", type: "rightAligned", maxWidth: 150 },
  { headerName: "ATH", field: "ath", valueFormatter: numberFormatter, cellDataType: "number", type: "rightAligned", maxWidth: 150 },
  { headerName: "High 24h", field: "high_24h", valueFormatter: numberFormatter, cellDataType: "number", type: "rightAligned", maxWidth: 150 },
  { headerName: "Low 24h", field: "low_24h", valueFormatter: numberFormatter, cellDataType: "number", type: "rightAligned", maxWidth: 150 },
  { headerName: "Total Volume", field: "total_volume", valueFormatter: numberFormatter, cellDataType: "number", type: "rightAligned", maxWidth: 150 },
  { headerName: "Market Cap", field: "market_cap", valueFormatter: numberFormatter, cellDataType: "number", type: "rightAligned", maxWidth: 180 },
]);

coinsStore.loadCoins();

const onSortChanged = (params) => {
  const sortModel = params.columns.map(c => ({ colId: c.colId, sort: c.sort }))
  if (sortModel.length > 0) {
    const sortField = sortModel[0].colId;
    const sortOrder = sortModel[0].sort;
    coinsStore.updateSort(sortField, sortOrder);
  }
};

const onPaginationChanged = (params) => {
  if (params.newPage) {
    const newPage = params.api.paginationGetCurrentPage() + 1; 
    coinsStore.loadCoins(newPage);
  }
};

</script>

<template>
  <ag-grid-vue
    :rowData="coinsStore.coins"
    :columnDefs="colDefs"
    style="height: 520px;"
    :suppressMenuHide="false"
    allowDragFromColumnsToolPanel
    :autoSizeStrategy="autoSizeStrategy"
    :pagination="true"
    :paginationPageSizeSelector="[10, 25, 50, 100]"
    :paginationPageSize="10"
    class="ag-theme-quartz"
    @paginationChanged="onPaginationChanged"
    @sortChanged="onSortChanged"
  >
  </ag-grid-vue>
</template>

<style scoped></style>

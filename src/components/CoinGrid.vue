<script setup>
import { ref } from "vue";
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid
import { AgGridVue } from "ag-grid-vue3"; // Vue Data Grid Component

const rowData = ref([
  { id: "coin 1", symbol: "c", price: 64950 },
  { id: "coin 2", symbol: "c", price: 33850 },
  { id: "coin 3", symbol: "c", price: 29600 },
]);

// Column Definitions: Defines the columns to be displayed.
const colDefs = ref([
  { field: "id" },
  { field: "symbol" },
  { field: "price" },
]);
</script>

<template>
  <ag-grid-vue
    :rowData="rowData"
    :columnDefs="colDefs"
    style="height: 500px"
    class="ag-theme-quartz"
  >
  </ag-grid-vue>
</template>

<style scoped></style>

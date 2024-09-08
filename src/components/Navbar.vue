<template>
  <nav class="flex justify-between px-12 py-5 items-center">
    <router-link
      to="/"
    >
      <div class="flex cursor-pointer">
        <img
          src="../assets/coin.svg"
          width="30"
          height="30"
          alt="crypto-dashboard"
        />
        <h1 class="text-xl text-gray-800 font-bold pl-2">crypto-dashboard</h1>
      </div>
    </router-link>

    <div class="flex items-center">
      <div class="flex items-center"></div>
      <ul class="flex items-center space-x-6">
        <li>
          <router-link
            to="/"
            class="font-semibold"
            :class="{ 'text-blue-500': isActive('/') }"
          >
            Coin Market Data
          </router-link>
        </li>
        <li>
          <router-link
            to="/trendings"
            class="font-semibold"
            :class="{ 'text-blue-500': isActive('/trendings') }"
          >
            Trendings
          </router-link>
        </li>
        <li>
          <a href="https://github.com/fatihunlu" target="_blank">
            <img
              class="cursor-pointer"
              src="../assets/github.svg"
              width="24"
              height="24"
              alt="GitHub"
            />
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { useRoute } from "vue-router";

const route = useRoute();

const isActive = (path) => {
  return route.path === path;
};
</script>

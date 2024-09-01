import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'

import App from './App.vue'

import axios from 'axios'
import VueAxios from 'vue-axios'

import router from "./router";


const pinia = createPinia()
const app = createApp(App)

app.use(router);
app.use(pinia)
app.use(VueAxios, axios)
app.mount('#app')

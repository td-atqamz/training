import './assets/main.css'
import "bootstrap/dist/css/bootstrap.min.css"
import { createApp } from 'vue'
import App from './App.vue'

import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes.js'
import { store } from './store/index.js'

import "bootstrap/dist/js/bootstrap.js"

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  }
})

const app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app')
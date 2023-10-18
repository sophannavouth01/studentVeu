import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import AOS from 'aos'
import 'aos/dist/aos.css'
const app = createApp(App)
 
app.use(router,VueAxios, axios)
app.use(AOS)
app.mount('#app')

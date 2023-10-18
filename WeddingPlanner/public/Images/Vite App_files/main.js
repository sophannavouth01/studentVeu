import "/src/assets/main.css"

import { createApp } from "/node_modules/.vite/deps/vue.js?v=b54ea2d3"
import App from "/src/App.vue"
import router from "/src/router/index.js"
import "/src/index.css?t=1695750535078"
import axios from "/node_modules/.vite/deps/axios.js?v=b54ea2d3"
import VueAxios from "/node_modules/.vite/deps/vue-axios.js?v=b54ea2d3"
import __vite__cjsImport7_aos from "/node_modules/.vite/deps/aos.js?v=b54ea2d3"; const AOS = __vite__cjsImport7_aos.__esModule ? __vite__cjsImport7_aos.default : __vite__cjsImport7_aos
import "/node_modules/aos/dist/aos.css"
const app = createApp(App)
 
app.use(router,VueAxios, axios)
app.use(AOS)
app.mount('#app')

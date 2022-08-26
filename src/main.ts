import  { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import ElementPlus from 'element-plus'
// import AMap from 'vue-amap'
import 'element-plus/theme-chalk/index.css'


createApp(App).use(router).mount('#app')
// App.use(ElementPlus)
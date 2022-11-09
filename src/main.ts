// import { createApp } from 'vue'
// import App from './App.vue'
//
//
// // 全局完整注册ant-design-vue
// import Antd from 'ant-design-vue';
// import 'ant-design-vue/dist/antd.css';
//
//
//
// const app = createApp(App)
//
// // app.use(router)
//
// // 全局完整注册ant-design-vue
// app.use(Antd)
//
// app.mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
// @ts-ignore
import router from './router'
// import store from './store'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

createApp(App).use(router).use(Antd).mount('#app');
/*
 * @Descripttion:
 * @version:
 * @Author: zhoukai
 * @Date: 2022-11-28 16:42:22
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-11-28 17:31:19
 */
/** 重置样式 */
import '@/assets/css/reset.css';
import '@/assets/css/global.scss';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
// 导入router配置
import router from './packages/router';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');

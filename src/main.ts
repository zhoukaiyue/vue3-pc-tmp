/*
 * @Descripttion: 入口js
 * @version:
 * @Author: zhoukai
 * @Date: 2022-11-28 16:42:22
 * @LastEditors: zhoukai
 * @LastEditTime: 2023-02-02 17:09:47
 */
/** 重置样式 */
import '@/assets/css/reset.css';
import '@/assets/css/global.scss';
import 'uno.css';

import App from './App.vue';
// 导入router配置
import router from './packages/router';

const app = createApp(App);

app.use(createPinia()); //创建一个 pinia 实例(根 store)并将其传递给应用
app.use(router);

app.mount('#app');

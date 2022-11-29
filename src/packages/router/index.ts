/*
 * @Descripttion: router构造
 * @version: 1.0.0
 * @Author: zhoukai
 * @Date: 2022-11-28 15:52:00
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-11-29 14:23:38
 */
import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes';

import NProgress from 'nprogress';
// NProgress樣式
import 'nprogress/nprogress.css';
// 配置NProgress进度条选项 —— 进度环显示隐藏
NProgress.configure({ showSpinner: false });

const router = createRouter({
    history: createWebHistory(import.meta.env.VITE_APP_ROUTER_BASE),
    routes
});

router.beforeEach(
    (
        to: {
            meta?: {
                title?: string;
                keepAlive?: boolean;
            };
        },
        from,
        next
    ) => {
        // 设置 doc.title
        if (to.meta && to.meta.title) {
            document.title = to.meta.title.toString();
        }
        // 开启NProgress（router 切换 loading）
        NProgress.start();

        next();
    }
);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
router.afterEach((to) => {
    // 关闭NProgress（router 切换 loading）
    NProgress.done();
});

export default router;

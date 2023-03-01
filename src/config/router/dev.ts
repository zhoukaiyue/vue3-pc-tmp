/*
 * @Descripttion:
 * @version:
 * @Author: zhoukai
 * @Date: 2022-12-06 16:14:33
 * @LastEditors: zhoukai
 * @LastEditTime: 2023-03-01 11:54:53
 */
const devLayOut = () => import('@/layout/devLayout/index.vue');
/**
 * 侧边导航左侧Icon
 * icon官网：https://xicons.org/#/
 * 添加方法：选择 ionicons5 并 Copy Name，在下方 import
 */
import { LogoWebComponent, LogoCss3, InformationCircleSharp, Storefront, Egg } from '@vicons/ionicons5';
const routes = [
    {
        path: '/dev',
        redirect: '/dev/info',
        component: devLayOut,
        meta: {
            title: '基础功能'
        },
        children: [
            {
                path: 'info',
                name: 'info',
                meta: {
                    title: 'vue3-pc-tmp简介',
                    icon: InformationCircleSharp
                },
                component: () => import('@/views/dev/info/index.vue')
            },
            {
                path: 'base',
                name: 'base',
                meta: {
                    title: '基础组件',
                    icon: LogoWebComponent
                },
                component: () => import('@/views/dev/base/index.vue')
            },
            {
                path: 'unocss',
                name: 'unocss',
                meta: {
                    title: 'unocss',
                    icon: LogoCss3
                },

                component: () => import('@/views/dev/unocss/index.vue')
            },
            {
                path: 'pinia',
                name: 'pinia',
                meta: {
                    title: 'pinia',
                    icon: Storefront
                },

                component: () => import('@/views/dev/pinia/index.vue')
            },
            {
                path: 'plugin',
                name: 'plugin',
                meta: {
                    title: 'plugin',
                    icon: Egg
                },

                component: () => import('@/views/dev/plugin/index.vue')
            }
        ]
    }
];
export default routes;

/*
 * @Descripttion:
 * @version:
 * @Author: zhoukai
 * @Date: 2022-12-06 16:14:33
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-12-20 14:28:00
 */
const devLayOut = () => import('@/layout/devLayout/index.vue');
// icon
import { LogoWebComponent, LogoCss3, InformationCircleSharp } from '@vicons/ionicons5';
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
            }
        ]
    }
];
export default routes;

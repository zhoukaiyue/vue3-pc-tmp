/*
 * @Descripttion:
 * @version:
 * @Author: zhoukai
 * @Date: 2022-12-06 16:14:33
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-12-07 15:11:34
 */
const devLayOut = import('@/layout/devLayout/index.vue');
// icon
import { LogoVue, LogoCss3 } from '@vicons/ionicons5';
const routes = [
    {
        path: '/dev',
        redirect: '/dev/base',
        component: devLayOut,
        meta: {
            title: '基础功能'
        },
        children: [
            {
                path: 'base',
                name: 'base',
                meta: {
                    title: '基础组件',
                    icon: LogoVue
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

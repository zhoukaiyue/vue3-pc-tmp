/*
 * @Descripttion: vue插件——message
 * @version:
 * @Author: zhoukai
 * @Date: 2023-03-27 09:42:11
 * @LastEditors: zhoukai
 * @LastEditTime: 2023-03-27 10:06:43
 */
import type { App } from 'vue';
import { computed, ref } from 'vue';

import type { ConfigProviderProps } from 'naive-ui';
import { createDiscreteApi, darkTheme, lightTheme } from 'naive-ui';
const themeRef = ref<'light' | 'dark'>('light');
const configProviderPropsRef = computed<ConfigProviderProps>(() => ({
    theme: themeRef.value === 'light' ? lightTheme : darkTheme
}));

const { message } = createDiscreteApi(['message'], {
    configProviderProps: configProviderPropsRef
});

const VueMessage = {
    install(app: App) {
        // 注入一个全局可用的 $message() 方法
        app.config.globalProperties.$message = message;
        // 在windows对象上也挂载一下
        window.$message = message;
    }
};

export default VueMessage;

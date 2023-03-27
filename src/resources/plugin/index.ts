/*
 * @Descripttion: 导入所有plugin切片
 * @version:
 * @Author: zhoukai
 * @Date: 2023-03-27 09:42:11
 * @LastEditors: zhoukai
 * @LastEditTime: 2023-03-27 09:46:22
 */
import type { App } from 'vue';

// naiveUI message 全局插件
import VueMessage from './message';

function install(app: App) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const components: any[] = [VueMessage];
    components.forEach((item) => {
        if (item.install) {
            app.use(item);
        } else if (item.name) {
            app.component(item.name, item);
        }
    });
}

export { install as default };

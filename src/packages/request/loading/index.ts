/*
 * @Descripttion:
 * @version:
 * @Author: zhoukai
 * @Date: 2022-11-28 10:53:58
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-11-29 15:06:30
 */

// 计数
let COUNT = 0;

const loading = {
    show() {
        if (COUNT === 0) {
            console.log('开始loading');
        }
        COUNT++;
    },
    hide() {
        if (COUNT <= 0) return;
        COUNT--;
        if (COUNT === 0) {
            console.log('结束loading');
        }
    }
};

export default loading;

/*
 * @Descripttion:
 * @version:
 * @Author: zhoukai
 * @Date: 2022-12-08 16:52:53
 * @LastEditors: zhoukai
 * @LastEditTime: 2023-03-01 11:39:48
 */

// axios 实例类型定义
import type { AxiosStatic } from 'axios';

/**
 * 处理异常
 * @param {实例化的单例} axios
 * @param {*} error
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function httpErrorStatusHandle(error: any, axios: AxiosStatic) {
    const config = error.config;
    // config.enableErrorMessage 具体接口配置的是否开启请求重试模式
    if (!config || config.enableErrorMessage === false) {
        return;
    }
    // 处理被取消的请求
    if (axios.isCancel(error)) return console.error('请求的重复请求：' + error.message);
    let messageInfo = '';
    if (error && error.response) {
        switch (error.response.status) {
            case 302:
                messageInfo = '接口重定向了！';
                break;
            case 400:
                messageInfo = '参数不正确！';
                break;
            case 401:
                messageInfo = '您未登录，或者登录已经超时，请先登录！';
                break;
            case 403:
                messageInfo = '您没有权限操作！';
                break;
            case 404:
                messageInfo = `请求地址出错: ${error.response.config.url}`;
                break; // 在正确域名下
            case 408:
                messageInfo = '请求超时！';
                break;
            case 409:
                messageInfo = '系统已存在相同数据！';
                break;
            case 500:
                messageInfo = '服务器内部错误！';
                break;
            case 501:
                messageInfo = '服务未实现！';
                break;
            case 502:
                messageInfo = '网关错误！';
                break;
            case 503:
                messageInfo = '服务不可用！';
                break;
            case 504:
                messageInfo = '服务暂时无法访问，请稍后再试！';
                break;
            case 505:
                messageInfo = 'HTTP版本不受支持！';
                break;
            default:
                messageInfo = '异常问题，请联系管理员！';
                break;
        }
    }
    if (error.message.includes('timeout')) messageInfo = '网络请求超时！';
    if (error.message.includes('Network')) messageInfo = window.navigator.onLine ? '服务端异常！' : '您断网了！';

    // 弹出提示
    window.$message.error(messageInfo);
}

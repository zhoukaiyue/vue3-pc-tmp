/*
 * @Descripttion:睡眠函数
 * @version:
 * @Author: zhoukai
 * @Date: 2022-11-28 10:47:22
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-11-29 14:40:08
 */
export const sleep = (time: number) => new Promise((resolve) => setTimeout(resolve, time));

/*
 * @Descripttion:
 * @version:
 * @Author: zhoukai
 * @Date: 2022-11-28 17:41:50
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-11-29 13:49:30
 */
import { defineConfig, presetAttributify, presetUno } from 'unocss';

export default defineConfig({
    exclude: [
        'node_modules',
        '.git',
        '.github',
        '.husky',
        '.vscode',
        'build',
        'dist',
        'mock',
        'public',
        './stats.html'
    ],
    presets: [presetUno(), presetAttributify()],
    shortcuts: [],
    rules: [
        [/^bc-(.+)$/, ([, color]) => ({ 'border-color': `#${color}` })],
        [/^fs-(.+)$/, ([, px]) => ({ 'font-size': `${px}px` })],
        [/^ml-(.+)$/, ([, px]) => ({ 'margin-left': `${px}px` })]
    ]
});

/*
 * @Descripttion:
 * @version:
 * @Author: zhoukai
 * @Date: 2022-11-28 17:41:50
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-12-08 14:59:16
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
        // width:100%
        ['w-full', { width: '100%' }],
        // height:100%
        ['h-full', { height: '100%' }],
        // 边框color
        [/^bc-(.+)$/, ([, color]) => ({ 'border-color': `#${color}` })]
    ]
});

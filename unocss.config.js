/*
 * @Descripttion:
 * @version:
 * @Author: zhoukai
 * @Date: 2022-11-28 17:41:50
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-12-06 15:17:13
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
        // 背景色 background
        [/^bc-(.+)$/, ([, color]) => ({ 'border-color': `#${color}` })],
        // 字体颜色 color
        [/^tc-(.+)$/, ([, color]) => ({ color: `#${color}` })],
        // 文字水平对齐方式 test-align
        [/^tl-(.+)$/, ([, v]) => ({ 'text-align': `${v}` })],
        // 字体大小 font-size
        [/^fs-(.+)$/, ([, px]) => ({ 'font-size': `${px}px` })],
        // 字体浓淡(粗细)属性 font-weight
        [/^fw-(.+)$/, ([, v]) => ({ 'font-weight': `${v}` })],
        // 左外边距 margin-left
        [/^ml-(.+)$/, ([, px]) => ({ 'margin-left': `${px}px` })],
        // 右外边距 margin-right
        [/^mr-(.+)$/, ([, px]) => ({ 'margin-right': `${px}px` })],
        // 上外边距 margin-top
        [/^mt-(.+)$/, ([, px]) => ({ 'margin-top': `${px}px` })],
        // 下外边距 margin-bottom
        [/^mb-(.+)$/, ([, px]) => ({ 'margin-bottom': `${px}px` })],
        // 左内边距 padding-left
        [/^pl-(.+)$/, ([, px]) => ({ 'padding-left': `${px}px` })],
        // 右内边距 padding-right
        [/^pr-(.+)$/, ([, px]) => ({ 'padding-right': `${px}px` })],
        // 上内边距 padding-top
        [/^pt-(.+)$/, ([, px]) => ({ 'padding-top': `${px}px` })],
        // 下内边距 padding-bottom
        [/^pb-(.+)$/, ([, px]) => ({ 'padding-bottom': `${px}px` })]
    ]
});

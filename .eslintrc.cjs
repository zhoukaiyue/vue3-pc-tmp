/*
 * @Descripttion:
 * @version:
 * @Author: zhoukai
 * @Date: 2022-10-26 16:42:22
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-11-29 14:53:02
 */
/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
    root: true,
    extends: [
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        '@vue/eslint-config-typescript',
        '@vue/eslint-config-prettier'
    ],
    parserOptions: {
        ecmaVersion: 'latest'
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'prettier/prettier': ['error', { singleQuote: true, endOfLine: 'auto' }],
        'vue/multi-word-component-names': [
            'error',
            {
                ignores: ['index', 'err404', 'errPage'] //需要忽略的组件名
            }
        ]
    }
};

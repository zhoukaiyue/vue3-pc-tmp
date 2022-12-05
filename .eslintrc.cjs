/*
 * @Descripttion:
 * @version:
 * @Author: zhoukai
 * @Date: 2022-10-26 16:42:22
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-12-05 10:15:50
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
        'vue/component-definition-name-casing': 'off', // 对组件命名不做校验，你可以采用驼峰命名或者烤肉串大小写。
        'vue/multi-word-component-names': [
            'error',
            {
                ignores: ['index', 'err404', 'errPage'] //需要忽略的组件名
            }
        ]
    }
};

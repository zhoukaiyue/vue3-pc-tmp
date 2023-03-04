<!--
 * @Descripttion: 密码输入框
 * @version: 
 * @Author: zhoukai
 * @Date: 2023-03-03 13:54:40
 * @LastEditors: zhoukai
 * @LastEditTime: 2023-03-03 15:54:20
-->
<template>
    <n-input class="password-field" show-password-on="mousedown" type="password" v-bind="inputOptions" />
</template>

<script lang="ts">
export default {
    name: 'passwordField',
    props: {
        /**
         * inputProps 是输入框的相关props配置，直接参考naiveui Input-Props 配置即可
         */
        inputProps: {
            type: Object,
            default: () => {
                return {};
            }
        }
    },
    setup(props) {
        return {
            inputOptions: props.inputProps // 非响应式的
        };
    }
};
</script>
<style scoped lang="scss"></style>

<!--
 * @Descripttion: 基础文本输入框
 * @version: 
 * @Author: zhoukai
 * @Date: 2023-03-03 13:54:40
 * @LastEditors: zhoukai
 * @LastEditTime: 2023-03-04 23:32:15
-->
<template>
    <n-input v-bind="options" type="textarea" class="textarea-field" />
</template>

<script lang="ts">
export default {
    name: 'textareaField',
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
            options: props.inputProps // 非响应式的
        };
    },
    methods: {}
};
</script>
<style scoped lang="scss"></style>

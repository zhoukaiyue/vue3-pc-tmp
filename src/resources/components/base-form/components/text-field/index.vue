<!--
 * @Descripttion: 基础文本输入框
 * @version: 
 * @Author: zhoukai
 * @Date: 2023-03-03 13:54:40
 * @LastEditors: zhoukai
 * @LastEditTime: 2023-03-27 16:47:50
-->
<template>
    <div flex justify-between flex-nowrap w-full class="text-field">
        <n-input :value="value" @input="input" v-bind="options" />
        <!-- 右侧自定义按钮 -->
        <template v-if="$slots.button">
            <slot name="button"></slot>
        </template>
    </div>
</template>

<script lang="ts">
export default {
    name: 'textField',
    props: {
        /**
         * inputProps 是输入框的相关props配置，直接参考naiveui Input-Props 配置即可
         */
        inputProps: {
            type: Object,
            default: () => {
                return {};
            }
        },

        /**
         * inputSlots 是自定义输入框右侧插槽的
         */
        inputSlots: {
            type: Object,
            default: () => {
                return {};
            }
        },
        /**
         * 表单绑定的值
         */
        value: {
            type: String,
            default: ''
        }
    },
    setup(props) {
        return {
            options: props.inputProps, // 非响应式的
            slots: props.inputSlots // 非响应式的
        };
    },
    methods: {
        input(value: string) {
            this.$emit('update:value', value);
        }
    }
};
</script>
<style scoped lang="scss"></style>

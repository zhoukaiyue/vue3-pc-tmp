<!--
 * @Descripttion: 
 * @version: 
 * @Author: zhoukai
 * @Date: 2022-12-06 16:06:01
 * @LastEditors: zhoukai
 * @LastEditTime: 2023-03-04 17:26:16
-->
<script setup lang="ts">
import BaseForm from '@/resources/components/base-form/index.vue';
import type { FormItemRule } from 'naive-ui/es/form/src/interface';

// 这是传给theForm 组件的表单构造项数据
const formItemList = [
    {
        name: 'usname', //名称，作为提交表单时的标识符
        // formItemProps 是formItem的相关props配置，直接参考naiveui FormItem-Props 配置即可
        formItemProps: {
            label: '用户名',
            rule: {
                trigger: ['blur'],
                required: true,
                validator: (rule: FormItemRule, value: string) => {
                    if (!value) return new Error('用户名不能为空!');
                    return true;
                }
            }
        },
        // inputProps 是输入框的相关props配置，直接参考naiveui Input-Props 配置即可
        inputProps: {
            placeholder: '请输入用户名码'
        }
    },
    {
        name: 'password', //名称，作为提交表单时的标识符
        type: 'password', //使用场景
        // formItemProps 是formItem的相关props配置，直接参考naiveui FormItem-Props 配置即可
        formItemProps: {
            label: '密码',
            rule: {
                trigger: ['blur'],
                required: true,
                validator: (rule: FormItemRule, value: string) => {
                    if (!value) return new Error('密码不能为空!');
                    return true;
                }
            }
        },
        // inputProps 是输入框的相关props配置，直接参考naiveui Input-Props 配置即可
        inputProps: {
            placeholder: '请输入密码'
        }
    },
    {
        name: 'issue', //名称，作为提交表单时的标识符
        type: 'textarea', //使用场景
        // formItemProps 是formItem的相关props配置，直接参考naiveui FormItem-Props 配置即可
        formItemProps: {
            label: '留言'
        },
        // inputProps 是输入框的相关props配置，直接参考naiveui Input-Props 配置即可
        inputProps: {
            placeholder: '请输入留言'
        }
    }
];

// BaseForm Methods
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const submit = (values: any) => {
    console.log(values);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const failed = (values: any) => {
    console.log(values);
};
</script>
<template>
    <div class="ji-chu-yong-fa">
        <n-tag type="info" mb-20>基础用法</n-tag>
        <base-form :formItemList="formItemList" @submit="submit" @failed="failed"></base-form>
    </div>
</template>

<style scoped lang="scss"></style>

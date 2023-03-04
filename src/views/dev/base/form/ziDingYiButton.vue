<!--
 * @Descripttion: 
 * @version: 
 * @Author: zhoukai
 * @Date: 2022-12-06 16:06:01
 * @LastEditors: zhoukai
 * @LastEditTime: 2023-03-04 22:03:20
-->
<script setup lang="ts">
import BaseForm from '@/resources/components/base-form/index.vue';
import TheSendsmsButton from '@/views/components/the-sendsms-button/index.vue';
import type { FormItemRule } from 'naive-ui/es/form/src/interface';
const loading = ref(false);

// 这是传给theForm 组件的表单构造项数据
const formItemList = [
    {
        name: 'tel', //名称，作为提交表单时的标识符
        type: 'text', //使用场景
        // formItemProps 是formItem的相关props配置，直接参考naiveui FormItem-Props 配置即可
        formItemProps: {
            label: '手机号',
            rule: {
                key: 'tel',
                trigger: ['blur'],
                required: true,
                validator: (rule: FormItemRule, value: string) => {
                    if (!value) return new Error('手机号不能为空!');
                    return true;
                }
            }
        },
        // inputProps 是输入框的相关props配置，直接参考naiveui Input-Props 配置即可
        inputProps: {
            placeholder: '请输入手机号码',
            allowInput: (value: string) => !value || /^\d+$/.test(value)
        }
    },
    {
        name: 'code', //名称，作为提交表单时的标识符
        // formItemProps 是formItem的相关props配置，直接参考naiveui FormItem-Props 配置即可
        formItemProps: {
            label: '验证码',
            rule: {
                trigger: ['blur'],
                required: true,
                validator: (rule: FormItemRule, value: string) => {
                    if (!value) return new Error('短信验证码不能为空!');
                    return true;
                }
            }
        },
        // inputProps 是输入框的相关props配置，直接参考naiveui Input-Props 配置即可
        inputProps: {
            placeholder: '请输入短信验证码',
            style: {
                width: '60%'
            }
        },
        inputSlots: {
            button: 'smsRightBtn' //自定义输入框尾部按钮
        }
    }
];

/**
 * 通过 ref 可以获取到 Form 实例并调用实例方法交表单，与点击提交按钮的效果等价。
 */
const baseForm = ref<InstanceType<typeof BaseForm>>();
const sublimeEvt = () => {
    loading.value = true;
    nextTick(() => {
        baseForm.value?.handleSubmit();
    });
};

// BaseForm Methods
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const submit = (values: any) => {
    console.log(values);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const failed = (values: any) => {
    console.log(values);
    loading.value = false;
};

// 发送短信验证码
const sendSmsEvt = (callback: () => void) => {
    nextTick(() => {
        baseForm.value
            ?.handleValidate(['tel'])
            .then(() => {
                //成功，没有返回值
                callback();
            })
            .catch((err) => {
                console.log(err);
            });
    });
};
</script>
<template>
    <div class="zi-ding-yi-button">
        <n-tag type="info" mb-20>自定义提交按钮 && 输入框右侧按钮</n-tag>
        <base-form ref="baseForm" :formItemList="formItemList" @submit="submit" @failed="failed">
            <template #submitBtn>
                <div flex justify-end>
                    <n-button w="100px" :disabled="loading" round type="primary" attr-type="button" @click="sublimeEvt">
                        提 交
                    </n-button>
                </div>
            </template>
            <!-- 自定义输入框右侧按钮 -->
            <template #smsRightBtn>
                <the-sendsms-button @click="sendSmsEvt"></the-sendsms-button>
            </template>
        </base-form>
    </div>
</template>

<style scoped lang="scss"></style>

<!--
 * @Descripttion: the-form 业务表单组件
 * @version: 
 * @Author: zhoukai
 * @Date: 2023-03-04 17:06:51
 * @LastEditors: zhoukai
 * @LastEditTime: 2023-03-04 22:43:39
-->
<script setup lang="ts">
/** 导入子组件 START*/
import passwordField from './components/password-field/index.vue'; //密码输入框
import textField from './components/text-field/index.vue'; //基础文本输入框
import textareaField from './components/textarea-field/index.vue'; //textarea文本输入框
/** END */

// n-form类型声明
import type { FormInst } from 'naive-ui/es/form/src/interface';

// props
const props = defineProps({
    /**
     * 构造表单项
     */
    formItemList: {
        type: Object,
        default: () => {
            return [];
        }
    }
});

// 解构props
const { formItemList } = toRefs(props);

// 表单数据
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const formValue: any = reactive({});

// ref
const theFormComponent = ref<FormInst | null>(null);

/**
 * 验证表单，支持传入 name 来验证单个或部分表单项
 * @param param {string[]} 非必传
 */
const handleValidate = (params?: string[]): Promise<void> => {
    return new Promise((resolve, reject) => {
        theFormComponent.value
            ?.validate(
                (errors) => {
                    // 表单校验通过走到 if块
                    if (!errors) resolve();
                },
                (rule) => {
                    if (params && 0 < params.length) {
                        if (rule.key) return params.includes(rule.key);
                        return false;
                    } else {
                        return true;
                    }
                }
            )
            .catch((err) => {
                // 表单校验未通过
                reject(err);
            });
    });
};

/**
 * 重置表单校验
 */
const handleRestoreValidation = () => {
    theFormComponent.value?.restoreValidation();
};

/**
 * 清空表单项
 */
const handleResetForm = () => {
    // 清空表单校验
    handleRestoreValidation();
    // 清空表单数据
    Object.keys(formValue).map((key) => {
        formValue[key] = '';
    });
};

/**
 * 自定义事件
 * @Events submit 提交表单且验证通过后触发。 回调参数：values: object。
 * @Events failed 提交表单且验证不通过后触发。 errorInfo: { values: object, errors: object[] }
 */
const emit = defineEmits(['submit', 'failed']);

// 提交表单 提交表单且验证通过后触发
const handleSubmit = () => {
    //表单校验
    handleValidate()
        .then(() => {
            // 表单校验通过
            emit('submit', { values: formValue });
        })
        .catch((err) => {
            emit('failed', { values: formValue, errors: err });
        });
};

// 导出当前组件的部分method，可以在父元素通过ref去调用
defineExpose({
    handleSubmit, // 提交表单
    handleResetForm, //重置表单
    handleValidate, //触发表单校验
    handleRestoreValidation //清空表单校验
});
</script>

<template>
    <n-form class="the-form" :model="formValue" ref="theFormComponent">
        <n-form-item
            :path="item.name"
            v-bind="(item.formItemProps && item.formItemProps) || {}"
            v-for="(item, index) in formItemList"
            :key="index"
        >
            <!-- 密码 -->
            <password-field
                v-if="item.type === 'password'"
                v-model:value="formValue[item.name]"
                :inputProps="(item.inputProps && item.inputProps) || {}"
            ></password-field>
            <!-- -field -->
            <textarea-field
                v-else-if="item.type === 'textarea'"
                v-model:value="formValue[item.name]"
                :inputProps="(item.inputProps && item.inputProps) || {}"
            ></textarea-field>
            <!-- 基础文本输入框 -->
            <!-- 如果不传type也默认基础输入框 -->
            <text-field
                v-else-if="item.type === 'text' || !item.type"
                v-model:value="formValue[item.name]"
                :inputProps="(item.inputProps && item.inputProps) || {}"
                :inputSlots="(item.inputSlots && item.inputSlots) || {}"
            >
                <!-- 自定义输入框右侧按钮 -->
                <template #button>
                    <template v-if="item.inputSlots && item.inputSlots.button && $slots[item.inputSlots.button]">
                        <slot :name="item.inputSlots.button"></slot>
                    </template>
                </template>
            </text-field>
            <!-- 其他类型... -->
        </n-form-item>
        <!--  -->
        <!-- 自定义表单提交按钮 -->
        <template v-if="$slots.submitBtn">
            <slot name="submitBtn"></slot>
        </template>
        <!-- 按钮插槽 -->
        <div flex justify-end v-else>
            <n-button round type="primary" mr-20px attr-type="button" @click="handleResetForm">重置</n-button>
            <n-button round type="info" mr-20px attr-type="button" @click="handleRestoreValidation">清空验证</n-button>
            <n-button round type="primary" attr-type="submit" @click="handleSubmit">提交</n-button>
        </div>
    </n-form>
</template>

<style scoped lang="scss"></style>
